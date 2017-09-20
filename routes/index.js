var express = require('express');
var router = express.Router();
var fs = require('fs');
//var captchapng = require('captchapng');
var user = require('../dao/db_user');
var index_deliver = require('../dao/index_select');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("用户第一次访问主页时候返回到服务器的数据");//+JSON.stringify(req.query.length)
    console.log(req.session.sno);
    if(req.session.sno!=''){
        index_deliver.selectDeliver(req.query,function(result,allnum){
            if(result=='001'){
                console.log('err')
                res.render('error',{message:'数据库查询失败'});
            }else {
                console.log("运行结果/--"+result[0].uBid)
                user.getAllUserById(result[0].uBid, function (userBase) {
                    console.log('--------'+result[0].uBid)
                    if(userBase==0){
                        res.render('index', {
                            user: req.session.sno,
                            deliver: result,
                            num: allnum,
                            userbase:''
                        });
                    }else{
                        res.render('index', {
                            user: req.session.sno,
                            deliver: result,
                            num: allnum,
                            userbase:userBase
                        });
                    }
                })
            }
        })
    }else{
        res.render('index',{user:req.session.sno,
            deliver:result,
            num:allnum
        });
    }
});

router.get('/index', function (req,res) {
    console.log('/index----'+req.query.num)
    index_deliver.selectPage(req.query,function(result){
        if(result=='001'){
            console.log('err')
            res.render('error',{message:'数据库查询失败'});
        }else{
            console.log('/index界面已经送出去东西了')
            res.send(result);
        }
    })
})



router.get('/regist', function(req, res, next) {
  res.render('pc/regist');
});

/*登陆*/
router.post('/regist',function(req,res){
    console.log(req.body);
    user.judge_user(req.body,function(result){
        console.log('判断用户'+result);
        if(result=='2'){
            res.send('3')//数据库执行失败
        }else if(result==1){
            res.send('2');//用户已经存在
        }else{
            res.send('1');//没有找到用户
        }
    })
})
/*注册时插入数据  并同时更新用户基本表*/
router.post('/insert',function(req, res){//todo 登陆的信息要做后台验证
    user.reg(req.body,function(result){
        if(result==0){
            res.send('0');
        }else{
            req.session.sno=req.body.uname;
            req.session.uid=result.insertId;
            //todo 在注册的时候要更新基本信息表  同时要把更新的基本信息表的id保存下来
            res.send(req.body.uname);
        }
    })
})

/*清除session  退出登陆*/
router.get('/exitLogin',function(req,res){
    delete req.session.sno;
    delete req.session.uBid;
    res.redirect('/');
    //res.render();
    res.render('index');
})

/*用户登录*/
router.post('/login', function(req, res, next) {
    //if(req.body.yzm)
    console.log(req.body);
    if(req.body.yzm.toLowerCase()==req.session.yzm){
        user.login(req.body,function(result,uBid){
            if(result.length==0 || uBid==0){
                console.log('没有该用户');
                res.send('0');
            }else{
                console.log('indexjs界面拿到返回的数据：'+JSON.stringify(result));
                console.log('index界面判断'+req.body.upass);
                req.session.sno=req.body.uname;//用户名
                //req.session.uid=result[0].uId;//用户表登陆表的id
                req.session.uBid=uBid[0].uBid;//保存用户的基本信息id
                //console.log('post数据'+uBid[0].uBid);
                res.send(result[0]);//send用户名
            }
        })
    }else{
        res.send('001');
    }
});

/*router.get('/login', function (req,res) {

    console.log(req.query);
    user.login(req.query,function(result,uBid){
        if(result.length==0 || uBid==0 || result==0){
            console.log('没有该用户');
            res.jsonp({state:false});
        }else{
            //console.log('indexjs界面拿到返回的数据：'+JSON.stringify(result));
            //console.log('index界面判断'+req.body.upass);
            req.session.sno=req.query.uname;//用户名
            //req.session.uid=result[0].uId;//用户表登陆表的id
            //req.session.uBid=uBid[0].uBid;//保存用户的基本信息id
            //console.log('post数据'+uBid[0].uBid);
            res.jsonp({state:true});//send用户名
        }
    })
    //res.jsonp('ok------');
})*/

router.get('/isLogin', function (req,res) {
    if(req.session.sno){
        res.jsonp({login_state:true,user_id:req.session.sno})
    }else{
        res.jsonp({login_state:false,user_id:undefined})
    }
});

/*-----------------------------------------------------*/
/*------------phone端代码-------------------------------*/
/*----------------------------------------------------*/
    //获取活动
    router.get('/getActivity',function (req,res) {
        index_deliver.selectActiveRR(function (result) {
            res.jsonp(result);
        })
    });
    //用户收藏
    router.get('/collect',function (req,res) {
        if(!req.session.sno){
            res.jsonp(0)
        }else{
            index_deliver.addToCollection(req,function (result) {
                res.jsonp(result);
            })
        }
    });

    //获取所有商店信息
    router.get('/getStore',function (req,res) {
        index_deliver.getStore(function (result) {
            console.log(JSON.stringify(result));
            res.jsonp(result)
        })
    });
    router.get('/showStoreDetailById',function (req,res) {
        console.log(JSON.stringify(req.query));
            console.log(JSON.parse(req.query.filter)[0].value);
        // res.jsonp('ok');
        index_deliver.getStoreDetailByid(req,function (result) {
            console.log(JSON.stringify(result));
            res.jsonp(result);
        });
    });

//下载文件
router.get('/attachment',function(req,res){
    var downloadPath = '../public/img/user/user.jpg';
    fs.exists(downloadPath, function(exists) {
        console.log("exists: ", exists);
        if (exists) {
            var fileStream = fs.createReadStream(downloadPath);
            res.writeHead(200, {"Content-Type": "application/octet-stream",'Content-Disposition':'attachment;filename=user.xlsx'});
            fileStream.pipe(res);
            console.log('fileStream pipe');
            fileStream.on("end", function () {
                // res.download('../public/img/user/user.jpg','user.jpg');
                res.end();
            });
            // res.download('../public/img/user/user.jpg','user.jpg');
        }
    })
});

//*********************手机端***************************

    /*手机端用户登录*/
    router.get('/login', function(req, res) {
        //if(req.body.yzm)
        console.log(req.query);
        console.log('+++++++'+req.session.sno);
        // console.log(JSON.stringify(req.session.pass)+'sssss');
        if(req.session.pass!=undefined){
            console.log('111111111');
            user.login(req.session.pass,function(result,uBid) {
                if (result == 0) {
                    console.log('没有该用户');
                    res.jsonp('用户名或密码错误');
                } else {
                    res.jsonp(uBid[0]);//send用户名
                }
            })
        }else {
            console.log('22222222');
            if(req.query){
                user.login(req.query,function(result,uBid){
                if(result==0 ){
                    console.log('--没有该用户');
                    res.jsonp('用户名或密码错误');
                }else{
                    console.log("-----"+JSON.stringify(uBid));
                    req.session.sno=req.query.uname;//用户名
                    req.session.uid=result[0].uId;//用户表登陆表的id
                    req.session.uBid=uBid[0].uBid;//保存用户的基本信息id
                    req.session.pass=req.query;
                    //console.log('post数据'+req.session.uBid);
                    // console.log(uBid[0].ubname);
                    res.jsonp(uBid[0]);//send用户名
                }
            })
            }else{
                res.jsonp('用户名或密码错误');
            }
        }
    });

    //手机端 break_login退出登录
    router.get('/break_login', function(req, res, next) {
        req.session.pass=undefined;
        res.jsonp('退出成功')
    });

    //手机端注册
    router.get('/p_regist',function(req, res){
    //todo 登陆的信息要做后台验证
        // console.log(req.query);
        if(req.query.upass!=req.query.upass2){
            res.jsonp('两次密码不一致')
        }else {
            user.registt(req.query,function(result){
                if(result==0){
                    res.jsonp('用户已经存在');
                }else{
                    req.session.sno=req.body.uname;
                    req.session.uid=result.insertId;
                    req.session.pass=req.query;
                    res.jsonp('注册成功');
                }
            })
        }
    });

    //用户修改信息(信息类)
    router.get('/user_new_info_', function(req, res, next) {
        user.user_info_(req.query,req.session.uBid,function(result){
            res.jsonp('...');//send用户名
        })
    });

    //用户修改信息(地址类)
    router.get('/user_new_info_add', function(req, res, next) {
        user.user_info_add(req.query,req.session.uBid,function(result){
            res.jsonp('...');//send用户名
        })
    });

    router.get('/paizhao', function (req, res) {
        req.session.rem_pic = req.query.imageData;
        //console.log('+++++++++' + imgData);
        res.jsonp('ok')
    });

//签到
router.get('/qiandao', function (req, res) {
    user.user_gold(req.session.uBid,function(result){
        res.jsonp(result);
    })
});

module.exports = router;
