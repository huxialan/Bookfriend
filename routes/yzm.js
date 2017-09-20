/**
 * Created by laoK on 2016/4/26.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    var alphabet = 'ABCDEFGHIJKLMNPQR0123456789STUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var num ='';
     var sbuS='';
     for(var i=0;i<4;i++) {
     sbuS = alphabet.substr(parseInt(Math.random() * 71), 1);
     num+= sbuS;
     }
    request.session.yzm=num.toLowerCase();
    console.log('验证码-----'+num);
    response.send(num);

});


module.exports = router;