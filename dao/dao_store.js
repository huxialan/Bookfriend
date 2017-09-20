/**
 * Created by laoK on 2016/5/6.
 */
var link_pool = require('./link_pool');

var common = require('../utils/commen');
module.exports= {
    //添加商店
    addstore:function(request,callback){
        console.log('添加商店界面'+JSON.stringify(request.session.img));
        var datea = new Date().toLocaleDateString();
        var req = request.query;
        var sql = 'insert into s_shop(uBid,ssname,sstype,ssSchool,sslocationD,ssdate,ssimg)values(?,?,?,?,?,?,?)';
        var val = [request.session.uBid,req.ssname,req.sstype,req.sslocatopn,req.sslocationD,datea,request.session.img];
        console.log(sql+val);
        link_pool.query(sql,val, function (err, result) {
            if (err) {
                console.log('/dao_store/addstore' + err.message);
                callback('0');//数据库语句执行失败
            }else{
                console.log('/dao_store/addstore执行成功');
                delete request.session.img;
                callback(result);
            }
        })
    },

    //添加商店模块
    addmode:function(req,callback){

        link_pool.query('update s_shop SET ssmodel=? where ssid=?', [req.mode,req.shopid], function (err, result) {
            if (err) {
                console.log('/dao/deliver/addmode' + err.message);
                callback(0);//数据库语句执行失败
            }else{
                console.log('/dao/deliver/addmode'+result);
                callback(result);
            }
        })
    },

    //个人商店添加商品信息
    addgoods:function(req,callback){

        link_pool.query('insert into s_shop(uBid,ssname,sstype,sslocation)', [req.mode,req.shopid], function (err, result) {
            if (err) {
                console.log('/dao/deliver/addmode' + err.message);
                callback(0);//数据库语句执行失败
            }else{
                console.log('/dao/deliver/addmode'+result);
                callback(result);
            }
        })
    },

    //判断用户是否有商店
    JudgeStoreExist: function (req,callback) {
        //console.log(req.session.uBid);
        link_pool.query('SELECT *  FROM s_shop WHERE uBid=?',[req.session.uBid],function(err,result){
            if(err){
                console.log('dao_store/JudgeStoreExist错误'+err.message)
                callback('001')
            }else{
                console.log('dao_store/JudgeStoreExist执行成功');//+JSON.stringify(result)
                callback(result);
            }
        })
    }

};


function selectIDByusername(name,callback){
    var sql='select  uBid from u_userbase INNER JOIN u_user ON u_userbase.uId=u_user.uId WHERE u_user.uname=?'
    link_pool.query(sql, [name], function (err, result, fields) {
        if (err) {
            console.log('/dao/selectIDByusername查询失败' + err.message);
            callback('-1');//数据库语句执行失败
        } else {
            console.log('/dao/deliver' + result[0].uBid);
            callback(result[0].uBid);//执行成功返回查找到的数据
        }
    })
}