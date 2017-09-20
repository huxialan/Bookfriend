/**
 * Created by laoK on 2016/4/22.
 */
var uphone='';
var upass='';
var upassl='';
$(function(){
    uphone = $('#uphone');
//            alert(uphone);
    upass = $('#upass');
    upassl = $('#upassl');

})
/*check*/
function checkR(){
//            alert(checkPhone(uphone))
//            alert(checkPsw(upass,upassl))
    if(checkPhone(uphone) && checkPsw(upass,upassl) ){
        return true;
    }else{
        return false;
    }
}

/*核对密码*/
function checkPsw(upass,upassl){
//            alert(upass.val().length);
    if(upass.val()==''){
        alert('请输密码');
        upass.focus();
        return false;
    }else if(upass.val().length<5 ){
        alert('密码太短了');
        upass.focus();
        return false;
    }else if(upass.val()!='' && upassl.val()!='' && upass.val()!=upassl.val()){
        alert('两次密码不一致');
        upassl.focus();
        return false;
    }else if(upassl.val()==''){
        alert('请输入确认密码');
        upassl.focus();
        return false;
    } else{
        return true;
    }
}
/*核对电话*/
function checkPhone(uphone){
    var pattern = /^1[3|4|5|7|8]\d{9}$/;
    if(pattern.test(uphone.val())){
        uphone.focus();
        return true;
    }else{
        alert('手机格式不正确')
        return false;
    }
}

// todo  验证码的验证;