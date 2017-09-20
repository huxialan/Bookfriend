/**
 * Created by laoK on 2016/5/1.
 */
var link_pool = require('./link_pool');
module.exports= {
    /*用户发布的个人消息*/
    seaveDetail:function (detail, callback) {
        //console.log(JSON.stringify(detail) + '用户发布信息');
        console.log(detail.ubname);
        console.log(detail.ubschool+detail.ubsex+detail.ubemail);
        //这里抛出异常的原因就是防止服务器错误。可以即时的发现服务器错误的原因
        try{
            link_pool.query('update u_userbase set ubname=?,ubschool=? where uBid=?', [detail.body.nickname,detail.body.s_county,detail.session.uBid], function (err, result, fields) {
                if (err) {
                    console.log('/dao/deliver查询失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    console.log('/dao/myself/seaveDetail');
                    callback('1');//执行成功返回查找到的数据
                }
            })

        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //好友总分组显示
    fgroup:function(id,callback){
        try{
            link_pool.query('SELECT * FROM u_friend where uBid=?',id, function (err, result) {
                if (err) {
                    console.log('/dao/deliver查询失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    //console.log('/dao/myself/showcar');
                    callback(result);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //删除好友
    delfriend:function(del,callback){
        try{
            link_pool.query('delete FROM u_friend where u_friend=?',del.numm, function (err, result) {
                if (err) {
                    console.log(err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    //console.log('/dao/myself/showcar');
                }
            });
            callback(1)
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //统计组的个数
    numgroup:function(id,callback){
        try{
            link_pool.query('SELECT distinct(uGroup) ngp FROM u_friend where uBid=?',id, function (err, result) {
                if (err) {
                    console.log('/dao/deliver查询失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    //console.log('/dao/myself/showcar');
                    callback(result);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //分组切换
    changegroup:function(grp,callback){
        var value=[grp.grp,grp.id];
        try{
            link_pool.query('update u_friend  set uGroup=? where u_friend=?',value, function (err, result) {
                if (err) {
                    console.log('/dao/deliver查询失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    //console.log('/dao/myself/showcar');
                    callback(result);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //分组显示
    stu:function(sss,callback){
        var value = [1,sss];
        console.log(sss+'sdsadssdass')
        try{
            link_pool.query('SELECT * FROM u_friend where uBid=? AND uGroup=?',value, function (err, result) {
                if (err) {
                    console.log('/dao/deliver查询失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    //console.log('/dao/myself/showcar');
                    console.log(result+'dsadsaffffffffff')
                    callback(result);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },
    
    //用户密码修改
    seavePass:function (pass,user,callback) {
        oldPass(pass,user,function(result){
            if(result==0){
                callback('原密码输入错误')
            }else if(result==9){
                callback('请输入相同新密码')
            } else{
                try{
                    link_pool.query('update u_user set upass = ? where uId=?',[pass.ubnewpas2,user], function (err, result, fields) {
                        if (err) {
                            console.log('/dao/deliver查询失败2' + err.message);
                            callback('0');//数据库语句执行失败
                        } else {
                            console.log('/dao/myself/seaveDetail');
                            callback('修改成功');//执行成功返回查找到的数据
                        }
                    })

                }catch(e) {
                    console.log('异常处理'+e.message)
                }
            }
        });

    },
    
    //收货地址
    address:function(add,id,callback){
        var value=[id,add.addadd,add.addname,add.addphone,add.addyoubian];
        try{
            link_pool.query('insert into u_address(uBid,uaddress,ubname,uphone,uyoubian) value(?,?,?,?,?)',value, function (err, result) {
                if (err) {
                    console.log('地址保存失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    callback(1);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //收获地址显示
    addressshow:function(id,callback){
        try{
            link_pool.query('SELECT * FROM u_address where uBid=?',id, function (err, result) {
                if (err) {
                    console.log('地址显示失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    callback(result);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },
    
    //收藏显示(从发帖表中)
    shoucangfatie:function(id,callback){
            try{
                link_pool.query('SELECT * FROM fatieshoucang where uBid=?',id, function (err, result) {
                    if (err) {
                        console.log('地址显示失败' + err.message);
                        callback('0');//数据库语句执行失败
                    } else {
                        callback(result)
                    }
                })
            }catch(e) {
                console.log('异常处理'+e.message)
            }
    },
    
    //显示个人购物车
    showcar:function(req,callback){
        try{
            link_pool.query('SELECT * FROM view_userbase_ucart where cllectUid=?', [req.session.uBid], function (err, result) {
                if (err) {
                    console.log('/dao/deliver查询失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    console.log('/dao/myself/showcar');
                    callback(result);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },
    
    
    
    //手机端*******************************

    //更新收货地址
    change_address:function(add,id,callback){
        var value=[add.addadd,add.addname,add.addphone,add.addyoubian,id,add.add_id];
        try{
            link_pool.query('update u_address set uaddress=?,ubname=?,uphone=?,uyoubian=? where uBid=? AND u_address=?',value, function (err, result) {
                if (err) {
                    console.log('地址保存失败' + err.message);
                    callback('0');//数据库语句执行失败
                } else {
                    callback(1);//执行成功返回查找到的数据
                }
            })
        }catch(e) {
            console.log('异常处理'+e.message)
        }
    },

    //删除地址
    del_address:function (add_id,id) {
        var s=[id,add_id.add_id];
        try{
            link_pool.query('delete from u_address where uBid = ? AND u_address= ?',s,function (err,result,fields) {
                if (err) {
                    connection.rollback();
                    throw err;
                }
            });
        }catch (e){
            console.log(e.message);
        }finally{
            console.log('over');
        }
    }


};

//判断密码输入是否正确,两次密码是否一致
function oldPass(pass,user,callback){
    console.log(user);
    try{
        link_pool.query('select upass from u_user where uId=?',user,function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver查询失败' + err.message);
                callback('0');//数据库语句执行失败
            }
            //console.log(JSON.stringify(result));
            // console.log(result[0].upass+pass.uboldpas);
            // console.log(pass.ubnewpas2+pass.ubnewpas+'sdadassd')
            if(result[0].upass==pass.uboldpas){
                console.log(pass.ubnewpas);
                console.log(pass.ubnewpas2);
                if(pass.ubnewpas==pass.ubnewpas2){
                    callback(1);
                }else{
                    callback(9);
                }
            }else{
                callback(0);
            }
        })
    }catch(e) {
        console.log('异常处理'+e.message)
    }
}





