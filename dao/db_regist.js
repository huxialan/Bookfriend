/**
 * Created by laoK on 2016/4/13.
 * 定义错误代码
 * 0  数据库执行失败
 * 001  用户已经存在
 * 1    数据库插入成功
 */
var link_pool = require('./link_pool');
function regist(userOne,callback){
   judge_user(userOne,function(num){
       if (num==0) {
           link_pool.query('insert into u_user (uphone,upass)VALUES(?,?)',[userOne.uphone,userOne.upass],function(err,result){
               if(err){
                   console.log('执行失败'+err.message);
                   callback(0);
               }
                   callback('1');//执行成功
                   console.log(result);
           })
       } else {
           callback('001');
           console.log('用户已经存在');
       }
   })

}

/*判断用户是否存在
* user 前端传递过来的用信息
* callback 判断信息之后的回掉函数
* 回掉函数的值为数据库手机号的数量
* */

function judge_user(user,callback) {
    link_pool.query('select count(*) as "n" from u_user where uphone=? ', [user.uphone], function (err, result, fields) {
        if (err) {
            console.log('执行失败' + err.message);
            callback(0);
        }else{
            console.log(result[0].n);
            callback(result[0].n);
        }
    })
}

//judge_user('{"user":"15537136461"}');
/*注册代码*/

exports.reg=regist;


