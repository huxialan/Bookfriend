//异步下载任意的URL 下载任意一个网页的内容
var http = require("http");
// Utility function that downloads a URL and invokes
// callback with the data

var originRequest = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')

var link_pool = require('../dao/link_pool');
var headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
}
var urlSian = 'http://zhuanlan.sina.com.cn/'

function request (url, callback) {
    var options = {
        url: url,
        encoding: null,
        headers: headers
    }
    originRequest(options, callback)
}


function getContentSina(url,callback){
    var time = new Date();
        time=time.toLocaleDateString();
    request(url, function (err,res,body) {
        try{
            if(err){
                console.log('查询失败');
            }else{
                var i=0;
                var html = iconv.decode(body, 'gb2312')
                //console.log(html);
                var $ = cheerio.load(html, {decodeEntities: false})
                //console.log( $('li').find('a').attr('href'))
                var url =[];
                var title=[];
                var ss='';
                $('.c-title').each(function(i,e){
                    url.push($(e).find('a').prop('href')) ;
                    title.push($(e).find('a').text())
                    ss+='("'+url[i]+'","'+title[i]+'","'+time+'"),';
                })
                callback(ss);

            }
        }catch (e){
            console.log(e.message);
        }
    })
}


//抓取sian新闻网信息
/*request('/',function(req,res){
    getContentSina(urlSian,function(ss){
        ss=ss.substring(0,ss.length-1);
        console.log('内容------\n'+ss.substring(0,ss.length-1))
        sql= 'insert into sinanews(sinaurl,sinatitle,sinadate)VALUES'+ss;
        //console.log(sql);
        link_pool.query(sql,function(err,result){
            if(err){
                console.log('----'+err.message)
            }else{

                console.log('success')
            }
        })
    })
})*/

//抓取人人网活动
var urlRR = 'http://share.renren.com/keywords/624814';
function getContentRR(url,callback){
    var time = new Date();
    time=time.toLocaleDateString();
    request(url, function (err,res,body) {
        try{
            if(err){
                console.log('查询失败');
            }else{
                var i=0;
                var html = iconv.decode(body, 'utf-8')
                //console.log(html);
                var $ = cheerio.load(html, {decodeEntities: false})
                //console.log( $('li').find('a').attr('href'))
                var url =[];
                var title=[];
                var ss='';
                $('.ug-c-word').each(function(i,e){
                    url.push($(e).find('a:first-child').prop('href')) ;
                    title.push($(e).find('a:first-child').text())
                    if(i<10){
                        ss+='("'+url[i]+'","'+title[i].trim()+'","'+time+'"),';
                    }else{
                        return;
                    }
                })
                callback(ss);

            }
        }catch (e){
            console.log(e.message);
        }
    })
}

request('/',function(req,res){
    getContentRR(urlRR,function(ss){
        ss=ss.substring(0,ss.length-1);
        console.log('内容------\n'+ss)
        sql= 'insert into activeRR(activeurl,activetitle,activedate)VALUES'+ss;
        //console.log(sql);
        link_pool.query(sql,function(err,result){
            if(err){
                console.log('----'+err.message)
            }else{

                console.log('success')
            }
        })
    })
})
