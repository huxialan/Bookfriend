var express = require('express');
var router = express.Router();
var luntan=require('./../dao/luntansql');
var formidable=require('formidable');

var fs=require('fs');
/* GET home page. */


router.get('/', function(req, res, next) {
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else{
        var pagek=1;
        if(req.session.page){
            pagek=req.session.page;
            //图片存储
        }
        luntan.tzhutie(function(num){
            luntan.ffpage(pagek,function(fpage) {
                luntan.huifuxs(function(fhuifu) {
                    luntan.xsshoucang(req.session.uBid,function(sc){
                        luntan.xsdianzan(req.session.uBid,function (dz) {
                            luntan.goodppid(function(good){
                                luntan.bookshow(function(book){
                                    res.render('./luntan/luntan',{ahuifu:fhuifu,atiezi:fpage,ashoucang:sc,nnum:num,bz:pagek,adianzan:dz,good:good,book:book,user:req.session.sno});
                                    req.session.page=1;
                                });
                            });
                        });
                    });
                });
            });
        })
    }
});

//发帖存数据路由
router.post('/ziyoujiao', function (req,res){
    //res.send('success');
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else{
        if(req.session.pic){
            luntan.fatie(req.body,req.session.pic,req.session.uBid,function(result){
                //console.log('a'+result);
                //res.writeHead(200,{'Content-Type':'text/html'});
                //res.end(result);
                res.send('ok');
            })
        }else{
            req.session.pic='';
            luntan.fatie(req.body,req.session.pic,req.session.uBid,function(result){
                //console.log('a'+result);
                //res.writeHead(200,{'Content-Type':'text/html'});
                //res.end(result);
                res.send('ok');
            })
        }
    }


});

//回复存储
router.post('/ziyoujiao/huifu', function (req,res){
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        luntan.huifu(req.session.uBid, req.body, function (result) {
            res.redirect('./huifuxianshi');
            //console.log('a'+result);
            //console.log(req.body);
            //res.writeHead(200,{'Content-Type':'text/html'});
            //res.end(result);
            //k=req.body.kid;
            //console.log(kid);
            //console.log('fffffff'+result);
        })
    }
});

//帖子回复显示
router.get('/ziyoujiao/huifuxianshi',function(req,res){
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        //当在本地存入了用户ID执行
        luntan.huifuxs(function (result) {
            res.send(result);
        })
    }
});

//帖子二级回复
router.post('/ziyoujiao/thuifu',function(req,res){
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        luntan.thuifu(req.body, req.session.uBid, function (result) {
            //console.log(req.body);
            res.redirect('./huifuxianshi');
        })
    }
});

////二级帖子回复显示
//router.get('/ziyoujiao/thuifuxianshi',function(req,res){
//    luntan.huifuxs(function(result){
//
//    })
//});
//发帖显示路由
//router.get('/ziyoujiaofatie',function(req,res){
//        //当在本地存入了用户ID执行
//        luntan.tzhutie(function(result) {
//            res.render('luntan',{atiezi:result});
//        })
//});

//上传图片
router.post('/upload', function(request, response) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编码
    form.uploadDir = "./../public/upload";//设置存储路径，以bin目录为开始
    form.parse(request, function(err, fields, files) {

        if (err) {
            response.locals.error = err;
            response.render("uploads");
            console.log('k')
            return;
        }
        console.log('file length:'+files.length);
        var extName ='';  //后缀名
        console.log('files.in_file.type: '+files.in_file.type);
        switch (files.in_file.type) {  //此处in_file  为页面端 <input type=file name=in_file>
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }

        if(extName.length == 0){
            response.render('error', { message: '只支持png和jpg格式图片' });
            return;
        }else{
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 2 * 1024;   //文件大小
            console.log('here');
            var avatarName = Math.random() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            console.log(newPath);
            console.log("old"+files.in_file.path);//显示存储路径
            request.session.pic=files.in_file.path.substring(10);//截取字段获取图片绝对路径
            //fs.renameSync(files.in_file.path, newPath);  //重命名
            response.locals.success = '上传成功..........';
            response.send('uploads success');
            console.log("add img ---end");
        }



    });


});

//浏览图片

//收藏存储判断
router.post('/shoucang',function(req,res){
    //console.log(req.body);
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        luntan.shoucang(req.body, req.session.uBid, function (result) {
            if (result == 1) {
                res.send('已收藏');
            } else {
                res.send('收藏');
            }
        })
    }
});

//点赞存储判断
router.post('/dianzan',function(req,res){
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        //console.log(req.body);
        luntan.dianzan(req.body, req.session.uBid, function (result) {
            res.redirect('./dianzanxs');
        })
    }
});
//点赞显示
router.get('/dianzanxs',function(req,res){
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        //console.log(req.body);
        luntan.xsdianzan(req.session.uBid, function (result) {
            res.send(result);
        })
    }
});

//分页显示
router.post('/page', function (req, res) {
    var pagek;
    req.session.page=req.body.ppage;
    pagek=req.body.ppage;
    luntan.ffpage(pagek,function (result) {
       res.send('ok');
    })
});

//搜索
router.post('/sousuo',function(req,res){
    if(req.session.sno==undefined){
        //跳转到登陆界面
        res.render('other/deliversuccess',{content :'请先登录'});
    }else {
        luntan.ssousuo(req.body, function (result) {
            //console.log(req.body);
            if (result == 0) {
                res.send(0);
            } else {
                res.send(result);
            }

            //console.log('hhh'+ JSON.stringify(result));
        })
    }
});




//**************************手机端

//帖子显示
router.get('/phone', function(req, res, next) {
    var start=1;
    var limit=5;
    if(req.query.start &&req.query.limit){
        start=parseInt(req.query.start);
        limit=parseInt(req.query.limit)
    }
    luntan.phone_zhutie(start,limit,function(num){
        res.jsonp(num);
    })
});

//手机端1级回复
router.get('/p_huifu', function (req,res){
    luntan.p_huifu(req.session.uBid,req.session.p_ppid,req.query,function (result) {
        res.jsonp('...');
    })
});

//书籍分享
router.get('/p_book', function (req,res){
    luntan.bookshow(function(result){
        res.jsonp(result)
    })
});

//发帖
router.get('/p_ziyoujiao', function (req,res){
    console.log(req.session.pic);
    if(req.session.rem_pic){
        var dataBuffer = new Buffer(req.session.rem_pic, 'base64');
        // console.log(dataBuffer);
        var avatarName = Math.random() + '.png';
        // console.log(avatarName);
        var imgpath = './../public/upload/' + avatarName;
        req.session.pic=imgpath.substring(12)
        console.log(imgpath.substring(12));
    }
    if(req.session.uBid){
        if(req.session.pic){
            fs.writeFile(imgpath,dataBuffer, function (err) {
                if (err) {
                    console.log('bad')
                    res.jsonp(err);
                }
            });
            luntan.fatie(req.query,req.session.pic,req.session.uBid,function(result){
                res.jsonp('ok');
            })
        }else{
            req.session.pic='';
            luntan.fatie(req.query,req.session.pic,req.session.uBid,function(result){
                res.jsonp('ok');
            })
        }
    }else {
        res.jsonp('请先登录')
    }

});


//手机端2级回复记录
router.get('/p_thuifu_step1', function (req,res){
    if(req.session.uBid){
        req.session.prid_for_user=req.query.respons_prid;
        req.session.p_prid_for_user=req.query.respons_p_prid;
        res.jsonp('...')
    }else {
        res.jsonp('请先登录')
    }
});

//手机端2级回复插入并显示
router.get('/p_thuifu_step2',function(req,res){
    console.log(111)
    console.log(req.query.res_comments_text);
    luntan.p_thuifu(req.session.prid_for_user,req.session.p_prid_for_user,req.query.res_comments_text,req.session.uBid, function (result) {
        res.jsonp('...')
    })
});







//手机端上传图片
// router.get('/p_upload', function(request, response) {
//     var form = new formidable.IncomingForm();   //创建上传表单
//     form.encoding = 'utf-8';        //设置编码
//     form.uploadDir = "./../public/upload";//设置存储路径，以bin目录为开始
//     form.parse(request, function(err, fields, files) {
//
//         if (err) {
//             response.locals.error = err;
//             response.render("uploads");
//             console.log('k')
//             return;
//         }
//         console.log('file length:'+files.length);
//         var extName ='';  //后缀名
//         console.log('files.in_file.type: '+files.in_file.type);
//         switch (files.in_file.type) {  //此处in_file  为页面端 <input type=file name=in_file>
//             case 'image/jpeg':
//                 extName = 'jpeg';
//                 break;
//             case 'image/jpg':
//                 extName = 'jpg';
//                 break;
//             case 'image/png':
//                 extName = 'png';
//                 break;
//             case 'image/x-png':
//                 extName = 'png';
//                 break;
//         }
//
//         if(extName.length == 0){
//             response.render('error', { message: '只支持png和jpg格式图片' });
//             return;
//         }else{
//             form.keepExtensions = true;     //保留后缀
//             form.maxFieldsSize = 2 * 1024;   //文件大小
//             console.log('here');
//             var avatarName = Math.random() + '.' + extName;
//             var newPath = form.uploadDir + avatarName;
//             console.log(newPath);
//             console.log("old"+files.in_file.path);//显示存储路径
//             request.session.pic=files.in_file.path.substring(10);//截取字段获取图片绝对路径
//             //fs.renameSync(files.in_file.path, newPath);  //重命名
//             response.locals.success = '上传成功..........';
//             response.jsonp('uploads success');
//             console.log("add img ---end");
//         }
//
//
//
//     });
//
//
// });


/**
 * Created by Administrator on 2016/4/22.
 */
module.exports = router;