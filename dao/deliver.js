/**
 * Created by laoK on 2016/4/29.
 */
var link_pool = require('./link_pool');

module.exports= {

choose_school:function(city_s,callback){
    city_school(city_s,function(resu){
        link_pool.query('select schoolname from school where cityid=?', [resu[0].cityid], function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/choose_school' + err.message);
                callback(0);//数据库语句执行失败
            }else{
                console.log('/dao/deliver/choose_school2'+result.length);
                //console.log('登陆时候查询到的数据的json格式'+result);
                callback(result);//执行成功返回查找到的数据  这里也不需要返回他的长度。因为根据返回的json就可以知道他的长度

            }
        })
    })
},
    //点击显示单个商品的所有信息
    showShop:function (req,callback){
    link_pool.query('select * from u_publish where upid=?', [req.upid], function (err, result, fields) {
        if (err) {
            console.log('/dao/deliver/showShop' + err.message);
            callback(0);//数据库语句执行失败
        }else{
            console.log('/dao/deliver/showShop'+result.length);
            callback(result);
        }
    })
 },
    //根据用户id查找用户的详细信息
    showAuthor:function (req,callback){
        link_pool.query('select * from u_userbase where uid=?', [req.ubid], function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/showAuthor' + err.message);
                callback(0);//数据库语句执行失败
            }else{
                console.log('/dao/deliver/showAuthor'+result.length);
                callback(result);
            }
        })
    },
    //查找商品对应的留言以及用户信息
    selectLeaveWords:function(req,callback){
        link_pool.query('select * from view_user_comment where upid=?', [parseInt(req.upid)], function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/selectLeaveWords' + err.message);
                callback('0');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/selectLeaveWords执行成功'+result[0]);
                callback(result);
            }
        })
    },
    //添加到收藏夹
    savetocart: function (req,callback) {
        var datetime = getDate();
        //根据传递过来的用户名找到用户id
        selectIDByusername(req.user,function(result){
            if(result==0){
                console.log('dao/deliver/addCart查询用户失败');
                callback(0);
            }else{
                //更具商品id和用户的id去判断购物车表中是否存在
                collectCart(result,req.shop,function(collectId){
                    if(collectId=='001'){
                        console.log('collectCart/数据库执行失败')
                        callback(0);
                    }else if(collectId==0){
                        //如果不存在去执行插入语句
                        console.log('执行查找语句后返回的结果'+JSON.stringify(result));
                        link_pool.query('INSERT INTO u_cart(upid,uBid,ucartdata) values(?,?,?)', [req.shop,result,datetime], function (err, result, fields) {
                            if (err) {
                                console.log('/dao/deliver/showShop' + err.message);
                                callback(0);//数据库语句执行失败
                            }else{
                                console.log('/dao/deliver/savetocart执行成功'+JSON.stringify(result));
                                callback(result.insertId);
                            }
                        })
                    }else{
                        //数据库中已经添加了数据。就把添加数据的id返回回去
                        callback(collectId);
                    }
                })
            }
        })
    },

    //加入到收藏夹2
    addCart: function (req,callback) {
        var datetime = getDate();
        //首先判断在数据库中是否已经保存 即是否已经收藏
        selectIDByusername(req.user,function(result){
            if(result==0){
                console.log('dao/deliver/addCart查询用户失败');
                callback(0);
            }else{
                //判断购物车中是否已经存在
                collectCart(result,req.shop,function(collectId){
                    if(collectId=='001'){
                        console.log('dao/deliver/addCart查询购物车失败');
                        callback(0);
                    }
                    if(collectId==0){
                        //数据库中没有存在添加到数据库
                        link_pool.query('INSERT INTO u_cart(upid,uBid,ucartdata) values(?,?,?)', [req.shop,result,datetime], function (err, result, fields) {
                            if (err) {
                                console.log('/dao/deliver/addCart' + err.message);
                                callback(0);//数据库语句执行失败
                            }else{
                                console.log('/dao/deliver/savetocart执行成功'+JSON.stringify(result));
                                callback('12');//12代表收藏成功
                            }
                        })
                    }else{
                        console.log('dao/deliver/addCart购物车中已经存在');
                        callback('11');
                    }
                })
            }
        })

    },
    //删除个人购物车的内容  根据id删除
    delShopCartById:function(req,callback){
        link_pool.query('delete from u_cart where ucartid=?', [req.cartid], function (err, result, fields) {
            if(err){
                console.log('/dao/deliver/delShopCartById' + err.message);
                callback(0);//数据库语句执行失败
            }else{
                console.log('/dao/deliver/delShopCartById执行成功'+JSON.stringify(result));
                callback('1');
            }
        })
    },

    //在购物车中要显示的信息
    showShopCart:function(req,callback){
        selectIDByusername(req.user,function(result){
            if(result==0){
                console.log('dao/deliver/showShopCart查询用户失败');
                callback(0);
            }else{
                link_pool.query('select * from view_userbase_ucart where cllectUid=?', [result], function (err, result, fields) {
                    if (err) {
                        console.log('/dao/deliver/showShop' + err.message);
                        callback(0);//数据库语句执行失败
                    }else{
                        console.log('/dao/deliver/savetocart执行成功'+JSON.stringify(result));
                        callback(result);
                    }
                })

            }
        })
    },

    //根据不同的类别和内容搜索
    search:function(req,callback){
        link_pool.query('select * from u_publish where uptitle like ? and upkind=?', ['%'+req.con+'%',req.kind], function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/search执行失败' + err.message);
                callback('0');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/search执行成功');//+JSON.stringify(result)
                callback(result);
            }
        })
    },
    //留言
    leave_word:function(req,callback){
        var time = getDate();
        selectIDByusername(req.username,function(userid){
            link_pool.query('INSERT INTO u_comment(upid,uBid,uccon,ucdate) values(?,?,?,?)', [req.upid,userid,req.con,time], function (err, result, fields) {
                if (err) {
                    console.log('/dao/deliver/showShop' + err.message);
                    callback(0);//数据库语句执行失败
                }else{
                    console.log('/dao/deliver/savetocart执行成功');//+JSON.stringify(result)
                    //留言成功的时候，返回留言的用户和留言的内容，以及留言的时间
                    getLeaveWordById(result.insertId,function(content){
                        if(content==0){
                            console.log('查找留言执行失败')
                            callback('0');
                        }else{
                            getAllUserById(userid,function(userAll){
                                if(userAll==0){
                                    console.log('查找用户执行失败')
                                    callback('0')
                                }else{
                                    //返回留言内容和留言用户的基本信息
                                    console.log('查找用户执行成功')
                                    callback({con:content,user:userAll});
                                }
                            })
                        }
                    })

                }
            })

        })
    },



    //---------------------------------------------------------------
    //----------移动端部分代码----------------------------------------
    //---------------------------------------------------------------
    showShopAll: function (req,callback) {
       /* if(req.query.filter!=undefined){
            // console.log('----'+JSON.parse(req.query.filter));
        }*/
        link_pool.query('select * from u_publish limit ?,?',[parseInt(req.page),parseInt(req.limit)], function (err, result) {
            if (err) {
                console.log('/dao/deliver/search执行失败' + err.message);
                callback('0');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/search执行成功');//+JSON.stringify(result)
                callback(result);
            }
        })
    },
    showShopAll_user:function (req,callback) {//view_user_base_u_publish
        link_pool.query('select * from view_user_u_publish ORDER BY update_ limit ?,?',[parseInt(req.start),parseInt(req.limit)], function (err, result) {
            if (err) {
                console.log('/dao/deliver/search执行失败' + err.message);
                callback('0');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/search执行成功');//+JSON.stringify(result)
                callback(result);
            }
        })
    },
    //根据不同的类别和内容搜索
    ph_search:function(req,callback){
        link_pool.query('select * from u_publish where uptitle like ? ', ['%'+req+'%'], function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/search执行失败' + err.message);
                callback('0');//数据库语句执行失败
            }else{
                console.log('/dao/deliver/search执行成功');//+JSON.stringify(result)
                callback(result);
            }
        })
    },

    //显示用户的图片
    showAuthorByuBid:function (req,callback){
        link_pool.query('select * from u_userbase where uid=?', [req.uBid], function (err, result, fields) {
            if (err) {
                console.log('/dao/deliver/showAuthorByuBid' + err.message);
                callback(0);//数据库语句执行失败
            }else{
                console.log('/dao/deliver/showAuthorByuBid'+result.length);
                callback(result);
            }
        })
    },
    
    //加入购物车
    ph_addCart: function (req,callback) {
        var datetime = getDate();
        collectCartShop(req.session.uBid,req.query.sdid,function(collectId){
            if(collectId=='001'){
                console.log('dao/deliver/addCart查询购物车失败');
                callback('数据库错误：0001');
            }
            if(collectId==0){
                //数据库中没有存在添加到数据库
                link_pool.query('INSERT INTO u_cart(sdid,uBid,ucartdata) values(?,?,?)', [req.query.sdid,req.session.uBid,datetime], function (err, result, fields) {
                    if (err) {
                        console.log('/dao/deliver/ph_addCart' + err.message);
                        callback('数据库错误：0001');//数据库语句执行失败
                    }else{
                        console.log('/dao/deliver/savetocart执行成功'+JSON.stringify(result));
                        callback('添加成功');//12代表收藏成功
                    }
                })
            }else{
                console.log('dao/deliver/addCart购物车中已经存在');
                callback('您已经添加了');
            }
        })
    },
    
    //获取购物车信息
    ph_getCart:function (req,callback) {
        link_pool.query('call pro_selectCart(?)',[req.session.uBid],function (err,result) {
            if(err){
                callback('0')
            }else{
                callback(result[0]);
            }
        })
    },

    //获取购物车s_setail信息
    ph_getCartSDetail:function (req,callback) {
        link_pool.query('select * from view_uCart_sDetail where cllectUid=?',[req.session.uBid],function (err,result) {
            if(err){
                callback('0')
            }else{
                callback(result);
            }
        })
    },

};

//由定位的学校来选择城市
function  city_school(city_s,callback) {
    link_pool.query('select cityid from city where cityname=?', [city_s.city], function (err, result, fields) {
        if (err) {
            console.log('/dao/city_school查询失败' + err.message);
            callback(0);//数据库语句执行失败
        } else {
            console.log('/dao/deliver' + result[0].cityid);
            callback(result);//执行成功返回查找到的数据
        }
    })
}

//判断是否已经发布的二手信息收藏  商品id 用户id  返回收藏的id
function collectCart(userid,shopid,callback){
    link_pool.query('select ucartid from u_cart where uBid=? and upid=?', [userid,shopid], function (err, result, fields) {
        if (err) {
            console.log('/dao/collectCart查询失败' + err.message);
            callback('001');//数据库语句执行失败
        } else {
            // console.log('----------------'+JSON.stringify(result)+result.length)
            if(result.length==0){//没有找到该数据 证明还没有添加到数据库
                callback('0')
            }else{
                // console.log('----------------'+JSON.stringify(result)+result.length+'--'+result[0].ucartid)
                callback(result[0].ucartid);//执行成功返回查找到的数据
            }

        }
    })
}

//判断是否已经收藏商店商品
function collectCartShop(userid,shopid,callback){
    link_pool.query('select ucartid from u_cart where uBid=? and sdid=?', [userid,parseInt(shopid)], function (err, result, fields) {
        if (err) {
            console.log('/dao/collectCartShop查询失败' + err.message);
            callback('001');//数据库语句执行失败
        } else {
            console.log('---------++-------'+JSON.stringify(result)+result.length)
            if(result.length==0){//没有找到该数据 证明还没有添加到数据库
                callback('0')
            }else{
                console.log('----------------'+JSON.stringify(result)+result.length+'--'+result[0].ucartid)
                callback(result[0].ucartid);//执行成功返回查找到的数据
            }

        }
    })
}
//根据用户名找到用户id
function selectIDByusername(name,callback){
    var sql='select  uBid from u_userbase INNER JOIN u_user ON u_userbase.uId=u_user.uId WHERE u_user.uname=?'
    link_pool.query(sql, [name], function (err, result, fields) {
        if (err) {
            console.log('/dao/selectIDByusername查询失败' + err.message);
            callback(0);//数据库语句执行失败
        } else {
            console.log('/dao/deliver' + result[0].uBid);
            callback(result[0].uBid);//执行成功返回查找到的数据
        }
    })
}

//根据用户id查找到用户的详细信息
function getAllUserById(id,callback){
    link_pool.query('select * from u_userbase where uBid=?', [id], function (err, result, fields) {
        if (err) {
            console.log('/dao/deliver根据用户id查找到用户的详细信息失败' + err.message);
            callback(0);//数据库语句执行失败
        } else {
            console.log('/dao/deliver根据用户id查找到用户的详细信息成功' + result[0].ubname);
            callback(result);//执行成功返回查找到的数据
        }
    })
}

//通过id找到留言内容
function getLeaveWordById(id,callback){
    link_pool.query('select uccon,ucdate from u_comment where ucid=?', [id], function (err, result, fields) {
        if (err) {
            console.log('/dao/deliver通过id找到留言内容失败' + err.message);
            callback('0');//数据库语句执行失败
        }else {
            console.log('/dao/deliver/getLeaveWordById---通过id找到留言内容' + JSON.stringify(result));
            callback(result);//执行成功返回查找到的数据
        }
    })
}

//获取时间并转换格式
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
