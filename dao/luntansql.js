/**
 * Created by Administrator on 2016/4/22.
 */
var mysql=require('mysql');
var dbconfig=require('./db_config');
var link_pool=require('./link_pool');
var getdate = require('../public/js/luntan/data');


//发帖
function fatie(tiezi,pic,id,callback){
    //console.log(id)
    var time = getdate.getDate();
    var values = [tiezi.fzhuti,tiezi.fneirong,1,time,id,pic];
    try{
        //用这个链接池直接可以执行查询下面的语句
    link_pool.query('insert into fatie(ptitle,ppcontent,pmid,pptime,uBid,ppimg) values(?,?,?,?,?,?)',values, function (err,result,fields) {
                if (err) {
                    connection.rollback();
                    throw err;
                }
                //关闭通道
                callback('success');
        //insertId = result.insertId;
        //↑获取自增长id

            });
}catch (e){
    console.log(e.message);
}finally{
    console.log('over');
}
}


//帖子显示

////帖子显示
//function tzhutie(callback){
//    var pool=null;
//    try{
//        pool=mysql.createPoolCluster();
//        //提供多台主机相连
//        pool.add(dbconfig.options);
//        //加入数据库
//        pool.getConnection(function(error,connection) {
//            //建立连接池链接
//            connection.beginTransaction(function (err) {
//                //开始事务
//                if (err) {
//                    throw err;
//                    //，若开始事务就出现错误则抛出错误
//                }
//                connection.query('select * from fatie where uBid = 1 ',function(err,result,fields) {
//                    //数据库语句
//                    if (err) {
//                        connection.rollback();
//                        throw err;
//                    }
//                    connection.commit(function (err) {
//                        //提交事务
//                        if (err) {
//                            connection.rollback();
//                            throw err;
//                        }
//                        //关闭通道
//                        callback(result);
//                        connection.release();
//                        //console.log(result)
//                    });
//                });
//            });
//
//        });
//    }catch (e){
//        console.log(e.message);
//    }finally{
//        console.log('over');
//    }
//}


//帖子显示
function tzhutie(callback){
    try{
        link_pool.query('select * from fatie ',function(err,result,fields) {
                    //数据库语句
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                        callback(result);
                    });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}






//回复

function huifu(id,huifu,callback){
    try{
        var values = [id,huifu.huifu,huifu.kid,huifu.kid];
        link_pool.query('insert into huifu(uBid,prcontent,ppid,prflag) values(?,?,?,?)',values,function(err,result,fields) {
                    //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            callback('ok');
        });
        update(huifu);
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//更新回复
function update(ud){
    try{
        link_pool.query('UPDATE p_res SET p_prid=LAST_INSERT_ID(prid) WHERE prid=LAST_INSERT_ID(prid) AND prflag=?',ud.kid,function(err,result,fields) {
            //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            //console.log(result)
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}


//回复
//
//function huifu(huifu, callback) {
//    try {
//        var values = [1, huifu.huifu, huifu.kid, huifu.kid];
//        link_pool.query('insert into huifu(uBid,prcontent,ppid,prflag) values(?,?,?,?)', values, function (err, result, fields) {
//            //数据库语句
//            if (err) {
//                connection.rollback();
//                throw err;
//            }
//            ghuifu();
//
//        });
//        callback('success');
//        //insertId = result.insertId;
//        //↑获取自增长id
//    } catch (e) {
//        console.log(e.message);
//    } finally {
//        console.log('over');
//    }
//}
//
////回复更新用来记录回复
//function ghuifu(){
//    try {
//    link_pool.query('UPDATE p_res SET p_prid=LAST_INSERT_ID(prid) WHERE prid=LAST_INSERT_ID(prid)', function (err, result, fields) {
////                        //数据库语句
//        if (err) {
//            connection.rollback();
//            throw err;
//        }
//    });
//    } catch (e) {
//        console.log(e.message);
//    } finally {
//        console.log('over');
//    }
//}


////帖子回复显示
function huifuxs(callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select * from huifu ORDER BY p_prid DESC,prid ',function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            //关闭通道
            callback(result);

            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }

}

//二级回复
function thuifu(thuifu,id,callback){
    //console.log(thuifu);
    zthuifu(thuifu.tid,function(res){
        var value=[id,thuifu.tid,thuifu.ttext,res[0].ppid,thuifu.tpid];
        try{
            //用这个链接池直接可以执行查询下面的语句
            link_pool.query('insert into huifu(uBid,prflag,prcontent,ppid,p_prid) values(?,?,?,?,?)',value,function (err,result,fields) {
                if (err) {
                    connection.rollback();
                    throw err;
                }
                //关闭通道
                callback(result);
                //console.log(result);
            });
        }catch (e){
            console.log(e.message);
        }finally{
            console.log('over');
        }
    });
}

//二级回复主贴查找
function zthuifu(z,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select * from huifu where prid=?',z,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            //关闭通道
            callback(result);

            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}




//收藏
function shoucang(sc,id,callback){
    yishoucang(sc.ppid.substring(1),id,function(result){
        if(result==0){
            console.log('已收藏过');
            try{
                var s=sc.ppid.substring(1)
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('delete from u_collect where ppid = ?',s,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    callback(0);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }else{
            var value=[id,sc.ppid.substring(1)];
            try{
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('insert into u_collect(uBid,ppid) value(?,?)',value,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    //关闭通道
                    callback(1);
                    //console.log(result);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }
    });

}

//收藏验证
function yishoucang(sc,id,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select ppid from u_collect where uBid=?',id,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            var k=0;
            if(result.length==0){
                callback(1);
            }else{
                result.forEach(function(a){
                    if(a.ppid==sc){
                        k++;
                    }
                });
                if(k==0){
                    callback(2);
                }else{
                    callback(0);
                }
            }



            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//收藏显示
function xsshoucang(id,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select ppid from u_collect where uBid=?',id,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            //关闭通道
            callback(result);
            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}



//点赞量统计
function numdianzan(ndz,pd){
    if(pd==1){
        try{
            //用这个链接池直接可以执行查询下面的语句
            link_pool.query('UPDATE p_post SET pzan=pzan+1 WHERE ppid=ndz',s,function (err,result,fields) {
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
    }else{
        try{
            //用这个链接池直接可以执行查询下面的语句
            link_pool.query('UPDATE p_post SET pzan=pzan-1 WHERE ppid=ndz',s,function (err,result,fields) {
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

}

//点赞
function dianzan(sc,id,callback){
    yidianzan(sc.ppid.substring(1),id,function(result){
        if(result==0){
            numdianzan(sc.ppid.substring(1),0);
            console.log('已收藏过');
            try{
                var s=sc.ppid.substring(1)
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('delete from p_z where ppid = ?',s,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    callback(0);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }else{
            var value=[id,sc.ppid.substring(1)];
            numdianzan(sc.ppid.substring(1),1);
            try{
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('insert into p_z(uBid,ppid) value(?,?)',value,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    //关闭通道
                    callback(1);
                    //console.log(result);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }
    });

}

//点赞验证
function yidianzan(sc,id,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select ppid from p_z where uBid=?',id,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            var k=0;
            if(result.length==0){
                callback(1);
            }else{
                result.forEach(function(a){
                    if(a.ppid==sc){
                        k++;
                    }
                });
                if(k==0){
                    callback(2);
                }else{
                    callback(0);
                }
            }



            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//点赞显示
function xsdianzan(id,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select * from dianzan where uBid=?',id,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            //关闭通道
            callback(result);
            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//点赞头像
//function dianzantouxiang(a,callback){
//    try{
//        //用这个链接池直接可以执行查询下面的语句
//        link_pool.query('select ub_img from fatie where ppid=?',a,function (err,result,fields) {
//            if (err) {
//                connection.rollback();
//                throw err;
//            }
//            //关闭通道
//            callback(result);
//        });
//    }catch (e){
//        console.log(e.message);
//    }finally{
//        console.log('over');
//    }
//}


//精品帖子排行
function goodppid(callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select ptitle,ppid,pptime from p_post ORDER BY pzan DESC limit 0,3',function (err,result,fields) {
            if (err) {
                // console.log(result);
                connection.rollback();
                throw err;
            }
            //关闭通道
            callback(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}


//分页显示
function ffpage(page,callback){
    var p=8;
    var k=(page-1)*8-(page-1);
    var value=[k,p];
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select * from fatie ORDER BY ppid DESC limit ?,?',value,function (err,result,fields) {
            if (err) {
                // console.log(result);
                connection.rollback();
                throw err;
            }
            //关闭通道
            callback(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}



//搜索
function ssousuo(sous,callback){
    var value=sous.sous;
    //console.log(value);
    souspand(value,function(result){
        if(result==0){
            callback(0);
        }else{
            callback(result);
        }
    });

}

//搜索判断
function souspand(pd,callback){
    //console.log(value);
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select * from p_post where ptitle LIKE "%'+pd+'%" ORDER BY ppid DESC',function (err,result,fields) {
            if (err) {
                // console.log(result);
                connection.rollback();
                throw err;
            }
            if(result.length==0){
                callback(0);
            }else{
                callback(result);
            }
            //关闭通道
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}





//文章点击后内部内容(帖子)
function ppidtext(ppid,callback){
    ppidlook(ppid);
        try{
            link_pool.query('select * from fatie where ppid=?',[ppid],function(err,result) {
                //数据库语句
                if (err) {
                    console.log('ppidtext:'+err.message);
                   /* connection.rollback();
                    throw err;*/
                }
                callback(result);
                //console.log(result)
            });
        }catch (e){
            console.log(e.message);
        }finally{
            console.log('over');
        }
}
//帖子浏览量
function ppidlook(ppid){
    try{
        link_pool.query('UPDATE p_post SET plook=plook+1 WHERE ppid=?',ppid,function(err,result,fields) {
            //数据库语句
            if (err) {
                console.log('ppidlook'+err.message)
                // connection.rollback();
                // throw err;
            }
            //console.log(result)
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}
//文章点击后内部内容(回复内容)
function pridtext(ppid,callback){
    try{
        link_pool.query('select * from huifu where ppid=? ORDER BY p_prid',ppid,function(err,result,fields) {
            //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            callback(result);
            //console.log(result)
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}


//文章点击后内部内容(二级回复内容)
//function pridttext(ppid,callback){
//    var value=[ppid,ppid];
//    try{
//        link_pool.query('select * from huifu where ppid=? AND prflag=?',value,function(err,result,fields) {
//            //数据库语句
//            if (err) {
//                connection.rollback();
//                throw err;
//            }
//            callback(result);
//            //console.log(result)
//        });
//    }catch (e){
//        console.log(e.message);
//    }finally{
//        console.log('over');
//    }
//}



//图书推荐功能

function bookshow(callback){
    try{
        link_pool.query('select * from p_book',function(err,result,fields) {
            //数据库语句
            if (err) {
                console.log(err.message);
                callback('001');
                /*connection.rollback();
                throw err;*/
            }else{
                callback(result);
            }
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//************************手机端

//帖子显示
function phone_zhutie(first,lastest,callback){//todo
    try{
        link_pool.query('select * from fatie order by ppid DESC limit ?,?',[first,lastest],function(err,result) {
            //数据库语句
            if (err) {
                // connection.rollback();
                console.log("phone_zhutie:"+err.message);
                // throw err;
            }
            callback(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//一级回复
function p_huifu(id,p_ppid,huifu,callback){
    try{
        var values = [id,huifu.comments_text,p_ppid,p_ppid];
        link_pool.query('insert into huifu(uBid,prcontent,ppid,prflag) values(?,?,?,?)',values,function(err,result,fields) {
            //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            callback('ok');
        });
        p_update(p_ppid);
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//手机更新回复
function p_update(ud){
    try{
        link_pool.query('UPDATE p_res SET p_prid=LAST_INSERT_ID(prid) WHERE prid=LAST_INSERT_ID(prid) AND prflag=?',ud,function(err,result,fields) {
            //数据库语句
            if (err) {
                connection.rollback();
                throw err;
            }
            //console.log(result)
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//二级回复
function p_thuifu(t_prid,t_p_prid,t_text,id,callback){
    //console.log(thuifu);
    zthuifu(t_prid,function(res){
        var value=[id,t_prid,t_text,res[0].ppid,t_p_prid];
        try{
            //用这个链接池直接可以执行查询下面的语句
            link_pool.query('insert into huifu(uBid,prflag,prcontent,ppid,p_prid) values(?,?,?,?,?)',value,function (err,result,fields) {
                if (err) {
                    connection.rollback();
                    throw err;
                }
                //关闭通道
                callback(result);
                //console.log(result);
            });
        }catch (e){
            console.log(e.message);
        }finally{
            console.log('over');
        }
    });
}

//手机收藏
function p_shoucang(sc,id,callback){
    yishoucang(sc,id,function(result){
        if(result==0){
            console.log('已收藏过');
            try{
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('delete from u_collect where ppid = ?',sc,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    callback(0);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }else{
            var value=[id,sc];
            try{
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('insert into u_collect(uBid,ppid) value(?,?)',value,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    //关闭通道
                    callback(1);
                    //console.log(result);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }
    });

}

//收藏验证手机端
function p_yz_shoucang(sc,id,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select ppid from u_collect where uBid=?',id,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            var k=0;
            if(result.length==0){
                //没有收藏过
                callback(1);
            }else{
                result.forEach(function(a){
                    if(a.ppid==sc){
                        k++;
                    }
                });
                if(k==0){
                    callback(1);
                }else{
                    callback(0);
                }
            }



            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//手机点赞验证
function p_yz_dianzan(sc,id,callback){
    try{
        //用这个链接池直接可以执行查询下面的语句
        link_pool.query('select ppid from p_z where uBid=?',id,function (err,result,fields) {
            if (err) {
                connection.rollback();
                throw err;
            }
            var k=0;
            if(result.length==0){
                callback(1);
            }else{
                result.forEach(function(a){
                    if(a.ppid==sc){
                        k++;
                    }
                });
                if(k==0){
                    callback(1);
                }else{
                    callback(0);
                }
            }



            //console.log(result);
        });
    }catch (e){
        console.log(e.message);
    }finally{
        console.log('over');
    }
}

//手机点赞操作
function p_dianzan(sc,id,callback){
    yidianzan(sc,id,function(result){
        if(result==0){
            numdianzan(sc,0);
            console.log('已收藏过');
            try{
                var s=sc
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('delete from p_z where ppid = ?',s,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    callback(0);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }else{
            var value=[id,sc];
            numdianzan(sc,1);
            try{
                //用这个链接池直接可以执行查询下面的语句
                link_pool.query('insert into p_z(uBid,ppid) value(?,?)',value,function (err,result,fields) {
                    if (err) {
                        connection.rollback();
                        throw err;
                    }
                    //关闭通道
                    callback(1);
                    //console.log(result);
                });
            }catch (e){
                console.log(e.message);
            }finally{
                console.log('over');
            }
        }
    });

}









exports.fatie=fatie;//绑定注册方法。
exports.tzhutie=tzhutie;
exports.huifu=huifu;
exports.huifuxs=huifuxs;
exports.shoucang=shoucang;
exports.xsshoucang=xsshoucang;
exports.ffpage=ffpage;
exports.ssousuo=ssousuo;
exports.thuifu=thuifu;
exports.dianzan=dianzan;
exports.xsdianzan=xsdianzan;
exports.ppidtext=ppidtext;
exports.pridtext=pridtext;
exports.goodppid=goodppid;
exports.bookshow=bookshow;
//exports.dianzantouxiang=dianzantouxiang;

//手机端********
exports.phone_zhutie=phone_zhutie;
exports.p_huifu=p_huifu;
exports.p_thuifu=p_thuifu;
exports.p_shoucang=p_shoucang;
exports.p_yz_shoucang=p_yz_shoucang;
exports.p_yz_dianzan=p_yz_dianzan;
exports.p_dianzan=p_dianzan;
