/**
 * Created by laoK on 2016/4/23.
 */
var express = require('express');
var router = express.Router();
var user = require('../dao/db_user');
/* GET users listing. */
router.get('/', function(req, res, next) {
    /*进行login判断*/
    res.send('请先登录');
});
router.post('/', function(req, res, next) {
    console.log(req.body.upass);
    res.send(req.body.upass);
});


module.exports = router;