/**
 * Created by laoK on 2016/4/27.
 */
var link_pool = require('./link_pool');
module.exports={
    /*用户发布的个人消息*/
    selectDeliver:function(deliver,callback){
        console.log(deliver.num+'用户发布信息');
        selectAll(function(All){
                console.log('第一次访问--------')
                link_pool.query('select * from u_publish order by upid desc limit 0,5',  function (err, result, fields) {
                    if (err) {
                        console.log('/dao/deliver/selectDeliver查询失败' + err.message);
                        callback('001');//数据库语句执行失败
                    }else{
                        console.log('/dao/deliver/selectDeliver');//+JSON.stringify(result)
                       //console.log(result)
                        callback(result,All);//执行成功返回查找到的数据
                    }
                })
        })

    },
    //分页查询数据库里面的内容
    selectPage:function(req,callback){
        console.log('index_select/selectPage,用户ajax提交的'+req.num)
        link_pool.query('select * from u_publish order by upid desc  limit '+((req.num-1)*5)+',5',  function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/selectPage查询失败' + err.message);
                callback('001');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/selectPage'+JSON.stringify(result));
                callback(result);//执行成功返回查找到的数据
            }
        })
    },

    //判断一共有多少发布的信息
    selectAll:function (callback){
        link_pool.query('select count(*) as n from u_publish',  function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/selectAll查询失败' + err.message);
                callback('001');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/selectAll'+JSON.stringify(result));
                callback(result[0].n);//执行成功返回查找到的数据
            }
        })
    },

    //查找新浪新闻
    selectSinaNews:function(callback){
        link_pool.query('select sinaurl,sinatitle  from sinanews order by sinadate DESC limit 0,8 ',  function (err, result) {
            if (err) {
                console.log('/dao/selectSinaNews查询失败' + err.message);
                callback('001');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/selectSinaNews执行成功');//+JSON.stringify(result)
                callback(result);//执行成功返回查找到的数据
            }
        })
    },

    //查找活动信息
    selectActiveRR:function(callback){
        link_pool.query('select * from activerr order by activedate DESC limit 0,10 ',  function (err, result) {
            if (err) {
                console.log('/dao/deliver/selectActiveRR查询失败' + err.message);
                callback('001');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/selectActiveRR执行成功');//+JSON.stringify(result)
                callback(result);//执行成功返回查找到的数据
            }
        })
    },
    /*用户发布的商店消息*/
    selectStore:function(callback){
    },







    /*--------------------------------------------*/
    /*-----------------phone端代码------------------*/
    /*--------------------------------------------*/
    
    //添加到收藏夹 添加发布二手商品
    addToCollection:function (req,callback) {
        link_pool.query('insert into u_collect(uBid,upid)values(?,?)', [req.session.uBid, req.query.upid], function (err, result) {
            if (err) {
                console.log('/dao/deliver/addToCollection查询失败' + err.message);
                callback('001');//数据库语句执行失败
            } else {
                console.log('/dao/deliver/addToCollection执行成功');//+JSON.stringify(result)
                callback('1');//执行成功返回查找到的数据
            }
        })
    },

    //获取数据库里面商店信息
    getStore:function (callback) {
        link_pool.query('select * from s_shop', function (err, result) {
            if (err) {
                console.log('/dao/deliver/getStore查询失败' + err.message);
                callback('001');//数据库语句执行失败
            } else {
                console.log('/dao/deliver/getStore执行成功');//+JSON.stringify(result)
                callback(result);//执行成功返回查找到的数据 这里不能是0他返回的是json数组 是多
            }
        })
    },

    //根据商店id 获取商店的所有商品
    getStoreDetailByid:function (req,callback) {
        var ssid = parseInt(JSON.parse(req.query.filter)[0].value),
            start = parseInt(req.query.start),
            limit = parseInt(req.query.limit);
        link_pool.query('select * from s_detail where ssid=? limit ?,?',[ssid,start,limit], function (err, result) {
            if (err) {
                console.log('/dao/deliver/getStoreDetailByid查询失败' + err.message);
                callback('001');//数据库语句执行失败
            } else {
                console.log('/dao/deliver/getStoreDetailByid执行成功');//+JSON.stringify(result)
                callback(result);//执行成功返回查找到的数据
            }
        })
    }
};

function selectAll(callback){
    link_pool.query('select count(*) as n from u_publish',  function (err, result, fields) {
        if (err) {
            console.log('/dao/deliver查询失败' + err.message);
            callback('001');//数据库语句执行失败
        }else{
            console.log('/dao/deliver/selectAll'+JSON.stringify(result));
            callback(result[0].n);//执行成功返回查找到的数据
        }
    })
}

