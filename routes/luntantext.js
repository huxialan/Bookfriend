/**
 * Created by Administrator on 2016/5/7.
 */
var express = require('express');
var router = express.Router();
var luntan=require('./../dao/luntansql');
var formidable=require('formidable');

var fs=require('fs');


router.get('/', function(req, res, next) {
    //res.render('./luntan/text',{user:undefined});
    //req.query()//获取？后面的内容
    //console.log(req.query.id);
            luntan.ppidtext(req.query.id,function(result){
                luntan.pridtext(req.query.id,function(huifu){
                    res.render('./luntan/wenzhangneirong',{user:req.session.sno,tiezi:result[0],huifu:huifu});
                });
            })

});

//帖子回复
router.post('/huifu',function(req,res){
    // console.log('sdadsadsa'+req.body);
    luntan.huifu(req.body,function(result) {
        // console.log(req.body);
        res.send('ok');
    })
});


//router.post('/thuifu',function(req,res){
//
//})


//************************手机端

router.get('/phone', function(req, res, next) {
    req.session.p_ppid=req.query.ppid_view
    luntan.ppidtext(req.query.ppid_view,function(result){
        luntan.pridtext(req.query.ppid_view,function(huifu){
            if(req.session.uBid){
                luntan.p_yz_shoucang(req.query.ppid_view,req.session.uBid,function (shoucang) {
                    luntan.p_yz_dianzan(req.query.ppid_view,req.session.uBid,function (dianzan){
                        result[0].f_shoucang=shoucang;
                        result[0].f_dianzan=dianzan;
                        var result2=huifu.concat(result);
                        res.jsonp(result2);
                    });
                    //0是赞过1是没攒过
                    //向结果加入json的方法就是给一个result一个新字段（该字段是个数组），然后向该数组里面加入多个json
                    //类似于a[b {c:1},{c:2},{c:3}],a位result里面的字段result.a[0].c=1
                })
            }else {
                var result2=huifu.concat(result)
                res.jsonp(result2);
            }

        });
    })
});

//进入文章后显示文章和回复
router.get('/phone2', function(req, res, next) {
    luntan.ppidtext(req.session.p_ppid,function(result){
        luntan.pridtext(req.session.p_ppid,function(huifu){
            var result2=huifu.concat(result)
            res.jsonp(result2);
        });
    })
});

//点赞
router.get('/p_dianzan', function(req, res, next) {
    luntan.p_dianzan(req.session.p_ppid,req.session.uBid,function (result) {
        if(result==0){
            //点赞取消
            res.jsonp(0);
        }else {
            res.jsonp(1);
        }
    })
});

//收藏
router.get('/p_shoucang', function(req, res, next) {
    luntan.p_shoucang(req.session.p_ppid,req.session.uBid,function (result) {
        if(result==0){
            //收藏取消
            res.jsonp(0);
        }else {
            res.jsonp(1);
        }
    })
});

module.exports = router;