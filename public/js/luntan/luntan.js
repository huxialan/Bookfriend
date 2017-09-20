/**
 * Created by Administrator on 2016/4/21.
 */
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},900);
    });

//				 切换页面
    $('#tab1').click(function(){

        $('.c2').css('display','none');
        $('.c3').css('display','none');
        $('.c1').css('display','block');
    });
    $('#tab2').click(function(){
        $('.c1').css('display','none');
        $('.c2').css('display','block');
        $('.c3').css('display','none');
    });
    $('#tab3').click(function(){
        $('.c1').css('display','none');
        $('.c2').css('display','none');
        $('.c3').css('display','block');
    });

//
    <!--论坛附加功能-->

    $('.pinglun').click(function(){
        $('#tab1_pinglun1').focus();
    })

//				<!---->

//				点赞效果
    $('.dianzan').click(function(){
        var a=$('<img src="../img/images/img/头像2.jpg" style="width: 20px">');
        a.appendTo('#zantouxiang1')
    })


    //             收藏效果
    //var k=0;
    //$('.shoucang').click(function(){
    //    if(k==0){
    //        $(this).html('<span class="glyphicon glyphicon-heart s">已收藏</span>');
    //        k=1;
    //    } else{
    //        $(this).html('<span class="glyphicon glyphicon-heart s">收藏</span>');
    //        k=0;
    //    }
    //
    //})


//				分享效果

    $('.fenxiang').click(function(){
        $("#div1").fadeIn().toggle();
    })
});


