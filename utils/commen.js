/**
 * Created by laoK on 2016/5/6.
 */
//根据用户名找到用户id
function selectIDByusername(name,link_pool,callback){
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

//根据用户id查找到用户的详细信息
function getAllUserById(id,link_pool,callback){
    link_pool.query('select * from u_userbase where uid=?', [id], function (err, result, fields) {
        if (err) {
            console.log('/dao/deliver根据用户id查找到用户的详细信息失败' + err.message);
            callback(0);//数据库语句执行失败
        } else {
            console.log('/dao/deliver根据用户id查找到用户的详细信息成功' + result[0].ubname);
            console.log('getAllUserById'+result)
            callback(result);//执行成功返回查找到的数据
        }
    })
}



exports.selectIDByusername=selectIDByusername;
exports.getAllUserById=getAllUserById;
