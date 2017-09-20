var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session=require('express-session');//导入session包
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var deliver = require('./routes/deliver');
var upload = require('./routes/upload');
var yzm = require('./routes/yzm');
var myself = require('./routes/myself');
var store = require('./routes/store');
//var time = require('./utils/data');
var luntan = require('./routes/luntan');
var luntantext =require('./routes/luntantext');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session 时长为10分钟,这个是以毫秒为单位,这样我们就建立一个session的会话，这是一个全局的设置
app.use(session({ secret: 'joke', key: 'joke_key' ,cookie: { maxAge: 1000000},resave:false,saveUninitialized:true}));

app.use('/', routes);
app.use('/users', users);
app.use('/yzm',yzm);//验证码
app.use('/login',login);
app.use('/deliver',deliver);//发布个人信息
app.use('/myself',myself);//个人主页
app.use('/upload',upload);/*文件上传*/
app.use('/store',store);//商店
app.use('/luntan',luntan);//论坛主页
app.use('/luntantext',luntantext);//论坛进入

//app.use(time);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
