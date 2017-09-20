/**
 * Created by laoK on 2016/4/27.
 */
var express = require('express');
var router = express.Router();
var formidable=require('formidable');

var AVATAR_UPLOAD_FOLDER='/upload/';//路径
var fs=require('fs');

var dateimg = new Date();//用于保存文件的名称

var imgName=[];
/*router.post('/', function (req,response) {
    //上传图片
    console.log('0');
    var form = new formidable.IncomingForm();
    form.uploadDir = './../public/uploadUsersImg/';
    form.encoding = 'utf-8';
    console.log('1');
    form.parse(req, function (err,filed,files) {
        if(err){
            response.locals.error = err;
            console.log("s");
            response.render("personalData",{succ:0});
            return;
        }
        var extName = '';
        console.log('files.headImg.type: '+files.headImg.type);
        switch (files.headImg.type){
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
        }
        console.log('2');
        if(extName.length == 0){
            response.render('error',{message:'只支持png和jpg格式图片'})
            return;
        }else{

            console.log('3');
            form.keepExtensions = true;
            form.maxFieldsSize = 8 * 1024;
            var avatarName = Math.random() + '.'+extName;
            var newPath = form.uploadDir+avatarName;
            console.log("old"+files.headImg.path);
            fs.renameSync(files.headImg.path,newPath);
            var userPho = req.session.tel;
            var user = ['/uploadUsersImg/'+avatarName,userPho];

            userMessDao.addHeadImg(user,function(result){
                //response.render("personalData",{user:req.session.login,succ:1,head:user});
                response.locals.success = '上传成功';
            });

        }
    });
});*/


router.post('/', function(request, response) {
    //console.log('+++++++++++++++++++++++++++++++++++'+request.query.path)
    if(request.query.path=='store'){
        AVATAR_UPLOAD_FOLDER='/storeImg/';
    }else{
        AVATAR_UPLOAD_FOLDER='/upload/';
    }
    var form = new formidable.IncomingForm();//创建上传表单
    console.log(request.file);
    form.encoding = 'utf-8';        //设置编码
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            response.render("upload");
            return;
        }
        var extName = '';  //后缀名
       /*用户遍历对象  可以用于前台session的加密
        var property="";
        for(var p in files){
            property+=p+'\n'
        }*/

        console.log('files.in_file哈哈哈哈哈哈哈.type---: ' +files.file.type );
        switch (files.file.type) {
            //此处in_file  为页面端 <input type=file name=in_file>
            case 'image/jpeg':
                console.log(files.file.type);
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if (extName.length == 0) {
            response.send('001');//001代表格式错误
            return;  //跳出循环
        } else {
            form.uploadDir = "../public" + AVATAR_UPLOAD_FOLDER;     //设置上传目录    " +
            form.keepExtensions = true;     //保留后缀    " +
            form.maxFieldsSize = 2 * 1024;   //文件大小
            var avatarName = dateimg.getTime()+(parseInt(Math.random()*100)) + "." + extName;
            var newPath = form.uploadDir + avatarName;
            console.log("old" + files.file.path);
            move(files.file.path,newPath,function(res){
                if(res==null){
                    console.log('图片上传routes/upload.js'+res);
                    imgName.push(avatarName);
                    request.session.img=imgName;
                    console.log(request.session.img);
                    response.send(avatarName)

                }else{
                    //response.send(avatarName)
                    res.redirect('/deliver')
                }

            })
            //fs.renameSync(files.in_file.path, newPath);  //重命名
            response.locals.success = '上传成功..........';
            //response.render('upload');
            //response.send('成功');
        }
    });
});

/*下面两个函数是解决跨分区问题的*/
function move (oldPath, newPath, callback) {
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                callback(err);
            }
            return;
        }
        callback();
    });

    function copy () {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);
        readStream.on('error', callback);
        writeStream.on('error', callback);
        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });
        readStream.pipe(writeStream);
    }
}


//上传文件之后删除文件
router.get('/delFile',function(req,res){
    fs.unlink(path,callback)
})


module.exports = router;