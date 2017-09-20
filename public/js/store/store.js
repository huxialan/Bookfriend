/**
 * Created by laoK on 2016/5/7.
 */
//让左便的宽度为当前页面的最大宽度
//点击的时候就监听
$(document).click(function(){
    var rightHeight = $('.store_right').height();
    var leftHeight = $('.store_left').height();
    if(leftHeight<rightHeight){
        //alert('----------')
        $('.store_left').height(rightHeight)
        //alert(leftHeight);
    }
})

