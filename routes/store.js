/**
 * Created by laoK on 2016/5/6.
 */
var express = require('express');
var router = express.Router();
//var captchapng = require('captchapng');
var store = require('../dao/dao_store');

//由个人中心进入个人商店
router.get('/', function(req, res, next) {
    if(req.session.sno!=undefined ){
        //判断用户是否有商店没有的话进入创建商店
        store.JudgeStoreExist(req,function(mystore){
            console.log('R/store/由个人中心进入个人商店'+mystore)
            if(mystore=='001'){
                res.render('./other/deliversuccess',{'content':'错误代号001'});
            }else if(mystore.length==0){
                //res.render('./store/mystore',{user:req.session.sno,'store':''});
                res.render('./store/createStore',{user:req.session.sno});
            }
            else{
                res.render('./store/mystore',{user:req.session.sno,'store':'','mystore':mystore});
            }
        })
    }else{
        res.render('./other/deliversuccess',{'content':'请先登录'});
    }
})

//进入创建商店
router.get('/createstore', function(req, res, next) {
    res.render('./store/createStore',{user:req.session.sno});
})

/*添加商店*/
router.get('/addstore',function(req,res){
    if(req.session.uBid==undefined){
        res.redirect('/')
    }else{
        store.addstore(req,function(result){
            //console.log('----------addstore'+result)
            console.log(JSON.stringify(result));
            res.send(result);
        })
    }
})

/*选择模板*/
router.get('/addmode',function(req,res){
    console.log(req.query);
    store.addmode(req.query,function(result){
        res.send(result);
    })
})

/*进入商店*/
router.get('/mystore',function(req,res){
    if(req.session.sno==undefined){
        res.redirect('/')
    }else{
       res.redirect('/store')
    }
})

/*请求添加商品*/
router.get('/addgoods', function (req,res) {
    if(req.session.sno==undefined){
        res.redirect('/')
    }else{
        res.render('./store/mystore',{'user':req.session.sno,'store':'addgoods'});
    }
})

//进入个人商店添加商品
router.get('/add', function (req,res) {
    store.addgoods(req.query,function(result){

    })
})



module.exports = router;