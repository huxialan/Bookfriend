var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../dao/db_user');
var deliver = require('../dao/deliver');

/* GET home page.
* 用于上传文件和删除文件，对应的文件处理在routes/upload.js*/
router.get('/', function(req, res, next) {
    console.log('进入发布信息界面')
    console.log('session---deliver界面--'+req.session.sno);
    if(req.session.sno!=undefined){
        res.render('pc/deliver_info',{user:req.session.sno});
    }else{
        res.redirect('/');
    }
});

//发布信息
router.post('/',function(req,res){
    console.log('routes/deliver'+JSON.stringify(req.body))
    user.deliver(req,function(result){
        if(result!=0){
            res.render('./other/deliversuccess',{content:'发表成功'});
        }else{
            res.render('./other/deliversuccess',{content:'发表失败'})
        }
    });
})

//删除商品
router.get('/del',function(req,res){
    //console.log('前三位'+req.query.imgname.substring(0,3));
    if(req.query.imgname.substring(0,3)=='../'){
        req.query.imgname = req.query.imgname.substring(3);
    }
    console.log(req.query);
    var imgName = "../public/"+req.query.imgname;
    fs.unlink(imgName, function(err){
        if(err){
            console.log("删除失败！"+err.message);
            //console.log("删除失败！");
            res.send('0')

        }else{
            console.log("删除成功！");
            res.send('1');
        }
    });
})

//显示本城市的所有学校
router.get('/school',function(req,res){
    console.log('r/deliver'+req.query.city);
    //执行查找函数
    deliver.choose_school(req.query,function(result){
        //JSON.stringify(result)
        console.log('routes/deliver'+result[0].schoolname);

        res.send(result)
    })
})

//展示商品
router.get('/shop',function(req,res){
    console.log('routes/deliver展示商品'+req.query.ubid+req.query.upid)
    //其实这边是不用写判断session的存在，直接传过去参数就是，因为在界面中我判断了

    //根据id拿到所有商品的所有信息
    deliver.showShop(req.query,function(result){
        if(result!=0){
            deliver.showAuthor(req.query,function(resultA){
                if(resultA!=0){
                    deliver.selectLeaveWords(req.query,function(leave_word){
                        if(leave_word!=0){
                            console.log('user用户界面商品的基本信息'+JSON.stringify(resultA));
                            res.render('pc/shop',{user:req.session.sno,shop:result,userD:resultA,leave_word:leave_word});
                        }else{
                            console.log('user用户界面商品的基本信息'+JSON.stringify(resultA));
                            res.render('pc/shop',{user:req.session.sno,shop:result,userD:resultA,leave_word:null});
                        }

                    })

                }else{
                    console.log('查找该商品信息失败查询用户信息失败')
                    res.render('pc/shop',{user:req.session.sno,shop:result,userD:null,leave_word:null});
                }
            })

        }else{
            console.log('查找该商品信息失败')
            deliver.showAuthor(req.query,function(resultA){
                if(resultA!=0){
                    console.log('user用户界面商品的基本信息'+JSON.stringify(resultA));
                    res.render('pc/shop',{user:req.session.sno,shop:null,userD:resultA});
                }else{
                    console.log('查找该商品信息失败查询用户信息失败')
                    res.render('pc/shop',{user:req.session.sno,shop:null,userD:null});
                }
            })
        }
    })

})

//主界面搜索
router.get('/search',function(req,res){
    console.log('roures/deliver/主界面搜索------')
    deliver.search(req.query,function(result){
        if(result=='0'){
            console.log('r/deliver/search数据库执行失败'+result[0].length)
            res.send('0')
        }else{
            user.getAllUserById(result[0].uBid, function (userBase) {
                if(userBase==0){
                    console.log('r/deliver/search数据库执行成功'+result.length)
                    res.send({result:result,userbase:''})
                }else{
                    console.log('r/deliver/search数据库执行成功'+result.length)
                    res.send({result:result,userbase:userBase})
                }
            })
        }
    })
})

//shop界面用户留言
router.post('/leave_words',function(req,res){
    console.log(JSON.stringify(req.body))
    deliver.leave_word(req.body,function(result){
       if(result==0){
            console.log('----执行失败');
       }else{
            console.log('执行成功')
           res.send(result);
       }
    })
})

//保存到购物车
router.get('/shopcar',function(req,res){
    console.log('r/shop'+req.query);
    //请求的时候把对应的内容保存到自己的收藏夹中
    deliver.savetocart(req.query,function(result){
        if(result==0){
            console.log('立即购买时加入购物车失败');
            res.redirect('/');
        }else{
            deliver.showShopCart(req.query,function(cartAll){
                if(cartAll==0){
                    console.log('查询用户购物车失败')
                    res.render('./pc/deliver_cart',{user:req.session.sno})
                }else{
                    res.render('./pc/deliver_cart',{user:req.session.sno,cart:cartAll})
                }
            })
        }

    })
})

//加入购物车
router.get('/addCart',function(req,res){
    deliver.addCart(req.query,function(result){
        res.send(result);
    })
})

//删除购物车
router.get('/delcart',function(req,res){
    deliver.delShopCartById(req.query,function(result){
        res.send(result);
    })
})


//---------------------------------------------------------
//----------移动端代码-----------------------------------
//---------------------------------------------------------
//显示用户发布的所有信息的所有信息
router.get('/showDeliver',function(req,res) {
    console.log(req.query);
    deliver.showShopAll_user(req.query, function (result) {
        //console.log(JSON.stringify(result));
        //console.log(JSON.parse(result[0].up_img))
        //res.jsonp('ok');
       if (result != 0) {
            for (var i = 0; i < result.length; i++) {
                if(result[i].up_img){
                var ss = JSON.parse(result[i].up_img)
                }
                if (ss) {
                    result[i].up_img = ss[0];
                    // console.log(ss[0])
                } else {
                    result[i].up_img = 'noimg.png'
                }
                result[i].update_=  result[i].update_.substr(0,4)+'-'+result[i].update_.substr(4,2)+'-'+result[i].update_.substr(6,2);
            }
            res.jsonp(result);
        } else {
            res.jsonp('null');
        }
    });
});
//显示详细信息
router.get('/showDetail',function(req,res){
    deliver.showShop(req.query,function(result){
        // console.log(result);
        if(result!=0){
            req.ubid=result[0].uBid;
            req.upid=result[0].upid;
           deliver.showAuthor(req,function(user){
                deliver.selectLeaveWords(req,function (leaveWord) {
                    result[0].user = user[0];
                    result[0].leaveword=leaveWord;
                    res.jsonp(result[0]);
                })
            })
        }else{
            console.log('+++++')
        }
    })
});


//搜索显示数据库中信息
router.get('/showDeliverSearch',function(req,res) {
    // console.log(req.query);
    // console.log('----------showDeliverSearch');
    // console.log(JSON.parse(req.query.filter)[0].value)
    var content = JSON.parse(req.query.filter)[0].value;
    deliver.ph_search(content,function (result) {
        res.jsonp(result);
    })

});

//添加商品到购物车
router.get('/ph_addToMyCart',function (req,res) {
    console.log(req.query);
    if(req.query.sdid){
        deliver.ph_addCart(req,function (result) {
            console.log(result);
            res.jsonp(result);
        })
    }else{
        res.jsonp('没有商品收藏');
    }
   

})

//查看购物车
router.get('/ph_showCart',function (req,res) {
    var resultA=[];
    console.log(req.query);
    deliver.ph_getCart(req,function (result) {
        console.log(JSON.stringify(result));
        for (var i = 0; i < result.length; i++) {
            var ss = JSON.parse(result[i].up_img)
            if (ss) {
                result[i].up_img = ss[0];
            } else {
                result[i].up_img = 'noimg.png'
            }
        }
      res.jsonp(result)
    })
});

//删除购物车
router.get('/ph_deleteCart',function (req,res) {
    console.log(req.query);
    deliver.delShopCartById(req.query,function (result) {
        res.jsonp(result);
    })
});


module.exports = router;
