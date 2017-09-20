/**
 * Created by laoK on 2016/4/13.
 * 定义错误代码
 * 0  数据库执行失败
 * 001  用户已经存在
 * 1    数据库插入成功
 */
var link_pool = require('./link_pool');
function regist(userOne,callback){
    console.log(userOne.uname);
    var date = getDate();
    console.log(date);
    //判断用户是否已经存在
    judge_user(userOne,function(num){
        if (num==0) {
            link_pool.query('insert into u_user (uname,upass,udate)VALUES(?,?,?)',[userOne.uname,userOne.upass,date],function(err,result){
                if(err){
                    console.log('执行失败'+err.message);
                    callback(0);
                }else{
                    link_pool.query('insert into u_userbase (uid) values(?)',[result.insertId],function(err,resu){
                        if(err){
                            link_pool.query('rollback');
                        }else{
                            userregistadd(resu)
                            link_pool.query('COMMIT');
                        }
                    })
                    callback(result);//执行成功
                    console.log('insert执行注册成功'+result.insertId);
                }

            })
        } else {
            callback('0');
            console.log('用户已经存在');
        }
    })

}

/*判断用户是否存在
 * user 前端传递过来的用信息
 * callback 判断信息之后的回掉函数
 * 回掉函数的值为数据库手机号的数量
 * */
//判断用户
function judge_user(user,callback) {
    link_pool.query('select count(*) as "n" from u_user where uname=? ', [user.uname], function (err, result, fields) {
        if (err) {
            console.log('执行失败' + err.message);
            callback('2');
        }else{
            console.log(result[0].n);
            callback(result[0].n);
        }
    })
}

//注册到用户表(手机端)
function useregist(userOne,callback){
    console.log(userOne.uname);
    var date = getDate();
    console.log(date);
    //判断用户是否已经存在
    judge_user(userOne,function(num){
        if (num==0) {
            link_pool.query('insert into u_user (uname,upass,udate)VALUES(?,?,?)',[userOne.uname,userOne.upass,date],function(err,result){
                if(err){
                    console.log('执行失败'+err.message);
                    callback(0);
                }else{
                    userregist(result);
                    callback(result);//执行成功
                    console.log('insert执行注册成功'+result.insertId);
                }
            })
        } else {
            callback('0');
            console.log('用户已经存在');
        }
    })

}

//注册到用户信息表(手机端)
function userregist(user) {
    link_pool.query('insert into u_userbase (uid,ub_img) values(?,?)',[user.insertId,'upload\\morentx.png'],function(err,resu){
        if(err){
            console.log('执行失败'+err.message);
        }
        userregistadd(resu)
    })
}

//注册到用户信息表(基本信息表)
function userregistadd(user_add) {
    link_pool.query('insert into u_address (uBid) values(?)',[user_add.insertId],function(err,resu){
        if(err){
            console.log('执行失败'+err.message);
        }
    })
}

//judge_user('{"user":"15537136461"}');
/*注册代码*/

/*判断用户登录代码*/
function userLogin(user,callback){//todo
    // console.log(user.uname);
    // console.log(user.upass);
    link_pool.query('select * from u_user where uname=? and upass=? ',[user.uname,user.upass], function (err, result) {
        if (err) {
            console.log('userLogin' + err.message);
            callback(0);//数据库语句执行失败
        }else{
            if(result.length==0){
                callback(0)
            }else {
                // user_time();
                console.log(JSON.stringify(result)+'mmmmmmmm');
                console.log(result);
                //同时把用户的基本信息uBid保存在session中
                    link_pool.query('select * from user_ad_ba where uId=?',[result[0].uId],function(err,uBid){
                    if(err){
                        console.log('userLogin失败' + err.message);
                        callback(0);//数据库语句执行失败
                    }else{
                        // console.log("后套"+JSON.stringify(uBid))
                        //console.log'('登陆时候查询到的数据的json格式'+result);
                        callback(result,uBid);//执行成功返回查找到的数据
                    }
                })
            }
        }
    })
}

//(当天0点与上一次签到时间比较)
function user_time(id,callback) {
    link_pool.query('select dotime from u_userbase where uBid=?',id, function (err, result) {
        if (err) {
            console.log('userLogin失败' + err.message);
            callback(0);//数据库语句执行失败
        } else {
            console.log('这里是时间');
            var t1=new Date();
            t1.setHours(0,0,0);//获取当天的0点
            if(t1.getTime()>result[0].dotime.getTime()){
                //代表今天第一次登陆
                callback(1);
                console.log(1);
                update_time(id);
            }else {
                //代表今天已经登陆过
                console.log(2)
                callback(2);
            }

        }
    })
}

//更新数据库中时间（更新为每天第一次触发的时间）
function update_time(id) {
    var t2=new Date();
    link_pool.query('UPDATE u_userbase set dotime=? where uBid=?',[t2,id], function (err, result) {
        if (err) {
            console.log('userLogin失败' + err.message);
        } else {
            console.log('这里是更新后的时间');
        }
    })
}

//签到金币增加时间
//点击签到的时候执行该方法
function user_gold(id,callback) {
    user_time(id,function (time_last) {
        if(time_last==1){
            link_pool.query('UPDATE u_userbase set ubgold=ubgold+1 where uBid=?',id,function (err, result) {
                if (err) {
                    console.log('userLogin失败' + err.message);
                    callback(0);//数据库语句执行失败
                } else {
                    callback('签到成功')
                }
            })
        }else if(time_last==2){
            callback('已经签到过')
        }
    });
}



/*用户发布自己的信息*/
function deliver(deliver,callback){
    var date = getDate();
    try{
   deliverJson(deliver.body,function(index,s,flag){
       if(deliver.session.img!='') {
           var imgname = JSON.stringify(deliver.session.img);
           s.push(imgname,deliver.session.uid, date);
           console.log('dao.user/deliver'+index);
           flag = '?,' + flag + ',?,?';
           console.log('db_user界面用户发送过来的信息键3' + flag);
           link_pool.query('insert into u_publish (' + index + ',`up_img`,`uBid`,`update`)VALUES(' + flag + ')', s, function (err, result) {
               if (err) {
                   console.log('执行失败' + err.message);
                   callback(0);
               }else{
                   callback(result);//执行成功
                   console.log('消息发布成功');
               }
           })
           delete  deliver.session.img;
       }else{
           s.push(deliver.session.uid, date);
           flag = '?,' + flag + ',?';
           console.log('db_user界面用户发送过来的信息键3' + flag);
           console.log('insert into u_publish (' + index + ',`uBid`,`update`)VALUES(' + flag + ')'+ s)
           link_pool.query('insert into u_publish (' + index + ',`uBid`,`update`)VALUES(' + flag + ')', s, function (err, result) {
               if (err) {
                   console.log('执行失败' + err.message);
                   callback(0);
               }
               callback(result);//执行成功
               console.log('消息发布成功' + result.affectedRows);
           })
       }
   })
    }catch (e){
        console.log(e.message);
    }
}

/*公共函数*/
    //日期函数
function getDate(){
    var s= new Date();
    var y = s.getFullYear().toString();
    var m= s.getMonth();
    if(m<10){
        m='0'+(m+1);
        m.toString();
    }else{
        m.toString();
    }

    var d = s.getDate();
    if (d  >= 0 && d  <= 9) {
        d = "0" + d;
        d.toString();
    }
    return  y+m+d;
}

    //把传递过来的json数据转换成 s,s,s的形式
function jsonTo(json){
    var s='';
    for(var index in json){
        s+=json[index]+',';
    }
    s=s.substring(0,s.length-1);
    return s;
}

/*把用户发布的信息转换为对应的字符串*/
function deliverJson(user,callback){
    var s= new Array();
    var index='';
    var flag='';
    for(var x in user){
        if(x=='noiseWidgToolbarSelectBlock'|| x=='noiseWidgEditor'){
            continue;
        }else{
            s.push(user[x].trim());
            //s.push+=user;
            index+=x+',';
            flag+='?,'
        }
    }

   /* var ary = [
        deliver.body.
    ]*/
    flag=flag.substring(0,flag.length-1);
    index=index.substring(0,index.length-1);
    //s=s.substring(0,s.length-1);
    callback(index,s,flag);
}



//手机端*********************

//用户资料完善(信息类)
function user_info_(cs,id,callback){
    if(cs.use_new_txt=='男'){
        cs.use_new_txt=1;
    }else if (cs.use_new_txt=='女'){
        cs.use_new_txt=2;
    }
    try{
        link_pool.query('UPDATE u_userbase SET '+cs.info_kind+'=? WHERE uBid=?',[cs.use_new_txt,id],function(err,result,fields) {
            //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            callback('ok')
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//用户资料完善(地址类)
function user_info_add(cs,id,callback){
    try{
        link_pool.query('UPDATE u_address SET '+cs.info_kind+'=? WHERE uBid=?',[cs.use_new_txt,id],function(err,result,fields) {
            //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            callback('ok')
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//根据用户id查找到用户的详细信息
function getAllUserById(id,callback){
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


exports.reg=regist;
exports.login=userLogin;
exports.judge_user = judge_user;
exports.registt=useregist;
exports.deliver=deliver;
exports.user_info_=user_info_;
exports.user_info_add=user_info_add;
exports.user_gold=user_gold;
exports.getAllUserById=getAllUserById;



