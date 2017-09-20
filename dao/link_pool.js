/**
 * Created by laoK on 2016/4/14.
 */
var connMess = require('./db_config');
var poolModule=require('generic-pool');
var mysql = require('mysql');
/*var pool=null;
pool=mysql.createPoolCluster();*/
//提供多台主机相连
var pool=poolModule.Pool({
    name: 'myproject',
    create: function (callback) {
        var c = mysql.createConnection(connMess.options);
        callback(null, c);
    },
    destroy: function (client) {
        client.end();
    },

    max: 20,
    min: 2,
    idleTimeoutMillis: 50000,
    log: false
});

function getConn(sql, values, callback) {
    pool.acquire(function (error, client) {
        if (error) {
            console.log("链接失败----"+error.message);
            return;
        }else{
            client.query(sql, values, function (err, result) {
                if (err) {
                    console.log("连接池提示：操作语句执行失败 :" + err.message);
                    pool.release(client);
                   callback(err,null);
                }else{
                    callback(err,result);
                    pool.release(client);
                }
            });
        }

    });
}
exports.query = getConn;


/*创建链接池的步骤总结
 * 第一步：创建链接池 mysql.createPool(config)  config为链接数据库的配置参数
 * 第二步：建立连接 pool.getConnection(fun(err,connection)
 * 第三步：执行链接语句 connection.query(err,fun)
 * 释放链接 connection.release*/