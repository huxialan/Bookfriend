/**
 * Created by laoK on 2016/5/1.
 */
var express = require('express');
var router = express.Router();
var myself = require('../dao/myself');
var index_deliver = require('../dao/index_select');


//req.session.sno  用户的昵称ubname
//req.session.uBid  用户的ubid

router.get('/', function(req, res, next) {
    if(req.session.sno!=undefined){
        //跳转到登陆界面
        res.render('pc/myself',{right:''});
    }
    /*else{
        index_deliver.selectDeliver(req.query,function(result,allnum){
            if(result=='001'){
                console.log('err')
                res.render('error',{message:'数据库查询失败'});
            }else{
                index_deliver.selectSinaNews(function(sinaNews){
                    if(sinaNews=='001'){
                        console.log('err')
                        res.render('error',{message:'数据库查询失败'});
                    }else{
                        index_deliver.selectActiveRR(function(activeR){
                            res.render('index',{user:req.session.sno,deliver:result,num:allnum,sina:sinaNews,active:activeR});
                        })
                    }
                })
            }
        })
    }*/
    else{
        res.render('other/deliversuccess',{content :'请先登录'});
    }
});

//个人资料
router.get('/detail', function(req, res, next) {
    res.render('pc/myself',{'username':req.session.sno,right:'myDetail'});
});

//朋友圈
router.get('/myfriend', function(req, res, next) {
    myself.fgroup(req.session.uBid,function(result){
        myself.numgroup(req.session.uBid,function(num){
            res.render('pc/myself',{'username':req.session.sno,group:result,num:num,right:'myFriend'});
        });

    });

});

//好友删除
router.post('/myfriend/del', function(req, res, next) {
    console.log('到这里了');
    myself.delfriend(req.body,function(ok){
        console.log('到这里了aaaaaaaaaa');
        res.send('ok');
    });

});

//改变分组
router.post('/myfriend/group', function(req, res, next) {
    myself.changegroup(req.body,function (result) {
        res.send('ok')
    })

});

//同学
router.get('/stu',function(req,res,next){
    myself.stu('同学',function(result){
        myself.numgroup(1,function(num) {
            res.render('pc/myself', {'username': req.session.sno, group: result, num: num, right: 'myFriend'});
        })
    })
});

//网友
router.get('/online',function(req,res,next){
    myself.stu('网友',function(result){
        myself.numgroup(1,function(num) {
            res.render('pc/myself', {'username': req.session.sno, group: result, num: num, right: 'myFriend'});
        })
    })
});

//保存个人信息
router.post('/mydetail', function (req,res) {
    console.log('mydetail数据值----------'+JSON.stringify(req.body));
    myself.seaveDetail(req,function(result){
        console.log('插入成功');
        res.send(result);
    })
});

//修改密码页面显示
router.get('/pass', function(req, res, next) {
    res.render('pc/myself',{'username':req.session.sno,right:'pass'});
});

//修改密码
router.post('/mypassword', function (req,res) {
    console.log(req.body);
    myself.seavePass(req.body,75,function(result){
        console.log('修改成功');
        res.send(result)
    });
});

//收货地址
router.get('/address',function(req, res){
    myself.addressshow(req.session.uBid,function (result) {
        res.render('pc/myself',{'username':req.session.sno,add:result,right:'address'});
    });

});

//收获地址保存
router.post('/addresss',function(req,res){
   myself.address(req.body,req.session.uBid,function(result){
       res.send('ok')
   })
});

//二手书收藏
router.get('/ershoushoucang', function(req, res, next) {
    res.render('pc/myself',{'username':req.session.sno,right:'ershoushoucang'});
});

//论坛收藏
router.get('/luntanshoucang', function(req, res, next) {
    myself.shoucangfatie(req.session.uBid,function(result){
        res.render('pc/myself',{'username':req.session.sno,tiezi:result,right:'luntanshoucang'});
    });

});

//查看购物车
router.get('/shopcar', function (req,res) {
    if(req.session.uBid!=undefined){
        myself.showcar(req,function(result){
            res.render('pc/deliver_cart',{'user':req.session.sno,'cart':result});
        })
    }
});



//手机端****************************

//用户修改密码
router.get('/user_info_pass', function(req, res, next) {
    myself.seavePass(req.query,req.session.uid,function(result){
        res.jsonp(result);//send用户名
    })
});

//论坛收藏显示
router.get('/user_Tribune_collect', function(req, res, next) {
    if(req.session.uBid){
        myself.shoucangfatie(req.session.uBid,function(result){
            res.jsonp(result);
        });
    }else{
        res.jsonp({tishi:'...'});
    }

});

//收货地址显示
router.get('/user_info_address', function(req, res, next) {
    myself.addressshow(req.session.uBid,function(result){
        res.jsonp(result);//send用户名
    })
});

//收货地址添加
router.get('/user_add_address', function(req, res, next) {
    myself.address(req.query,req.session.uBid,function(result){
        res.jsonp(result);//send用户名
    })
});

//编辑收货地址
router.get('/user_change_address', function(req, res, next) {
    myself.change_address(req.query,req.session.uBid,function(result){
        res.jsonp(result);//send用户名
    })
});

//删除地址
router.get('/user_del_address', function(req, res, next) {
    myself.del_address(req.query,req.session.uBid)
    res.jsonp('ok')
});

module.exports = router;