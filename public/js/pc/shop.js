/**
 * Created by laoK on 2016/5/4.
 */
    //立即购买
$('.x_buy_now').click(function () {
    var shopid = $('#shopshow').attr('data-shopid');
    //判断是否选中配送方式
    var len = $('.shop_car_flowN input').length;
//        alert(len);
    var ss=false;
    $(".shop_car_flowN :radio").each(function() {
//            if ($(this).attr("checked") == true) {
//                window.location="next.html";
//                alert($(this).prop("checked"));
        ss = $(this).prop("checked") || ss;
//            }
    })

    /* for (var i = 0; i < len; i++) {
     cheke['+i+'] = $('.shop_car_flowN input:nth-child(' + i + ')').prop('checked');
     ss = cheke['+i+'] || 0;
     alert(cheke['+i+']);
     }*/
//        alert(ss);
//        return;
    if (ss) {
        //判断用户是否登陆
        if ($('#exitLogin').html() == undefined) {
            $('#user_name').click();
        } else {
            //已经登陆
            location.href = 'http://localhost:3000/deliver/shopcar?shop=' + shopid + '&user=' + sessionStorage.getItem('u_name');
            // window.open('http://localhost:3000/deliver/shopcar?shop=' + shopid + '&user=' + sessionStorage.getItem('u_name'));
        }
    }
    else
    {
        $('.shop_choose').css({'border': 'solid 2px red'})
    }
})



window.onload = function () {
    //设置左右两边div高度一样  这个加上会有一定问题
    //document.getElementById("left_x_shop_mid").style.height=document.getElementById("shop_author_main").offsetHeight+"px";

    //点击留言
    $('#shop_tocker_logon').click(function () {
        //把用户id和商品对应的id发生过去。
        //用户id
        var username = sessionStorage.getItem('u_name');
        var upid = $('#shopshow').attr('data-shopid');
        var con = $('#shop_talkMyId').val().trim();//textarea的值也需要用val()来获取
        // var con = document.getElementById('shop_talkMyId').value;
//            alert(con);
        if (con == '') {
            alert('请输入内容');
            $('#shop_talkMyId').focus();
            return;
        }
        if ($('#exitLogin').html() == undefined) {
            $('#user_name').click();
        } else {
            $.ajax({
                type: 'post',
                url: 'http://localhost:3000/deliver/leave_words',
                data: {'upid': upid, 'username': username, 'con': con},
                timeout: 3000,
//            async: false,//设置为同步
                success: function (data) {
//                        alert('保存成功')
                    var leaver_world = '<div class="shop_detailCon row"><div class="col-md-3 col-xs-3 shop_talker">' +
                        '<img src="../img/user/user1.jpg" alt=""/></div>' +
                        '<div class="col-md-9 col-xs-9 shop_talkerCon">' +
                        data.con[0].uccon +
                        '</p></div></div>';

                    $('#leave_words').append(leaver_world);
                },
                error: function (e) {
                    alert('error留言到shop');
                }
            })
        }

    })
}
//鼠标放上去显示图片
$('.x_shop_img_list li').mouseover(function () {
    var src = $(this).find('img').attr('src');
    $('.x_shop_img img').attr('src', src);
});



//加入购物车
$('.x_add_cart').click(function(){
    var username = sessionStorage.getItem('u_name');//用户名
    var upid = $('#shopshow').attr('data-shopid');//商品id
    if($('#exitLogin').html() == undefined){
        $('#user_name').click();
    }else{
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/deliver/addCart',
            data: {'shop': upid, 'user': username},
            timeout: 3000,
            success: function (result) {
//              alert('保存成功')
                if(result==0){
                    alert('执行失败');
                }if(result==11){
                    alert('已经保存')
                }if(result==12){
                    alert('收藏成功');
                }
            },
            error: function (e) {
                alert('error加入购物车');
            }
        })
    }
})