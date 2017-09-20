
/*发布信息-----------------------*/
$('#publication').click(function(){
    //判断用户是否登陆
    if($('#exitLogin').html()==undefined){
       $('#user_name').click();
    }else{
       //已经登陆
        location.href='http://localhost:3000/deliver';
    }
})


/*search的js 搜索的js*/
$('#x_search_input_l').click(function(){
    $('#x_search_ul').toggle();

})
$('#x_search_input_l').find('li').click(function(){
//       alert($(this).text())
    $('#book span').html($(this).text());
})


/*right_nav右边黑色导航条*/
$(function() {
    $('.x_right_list').mouseover(function(){
        $(this).find('.x_hidden').css({'display':'block'});
        $(this).find('.x_hidden').animate({width:"150px"},500);//you can give it a speed
        /*$(this).find('.first_hidden').css({'display':'block'});
         $(this).find('.first_hidden').animate({width:"300px"},500);*/
    });
    $('.x_right_list').mouseleave(function(){
        $(this).find('.x_hidden').animate({width:"0"},300);
        $(this).find('.x_hidden').css({'display':'none'})
        /*$(this).find('.first_hidden').animate({width:"0"},300);
         $(this).find('.first_hidden').css({'display':'none'})*/
    });

    /*$(window).scroll(function() {
     if ($(window).scrollTop() > 1000) {
     $("#x_right_up").fadeIn(1500);
     } else {
     $("#x_right_up").css(1500);
     }
     });*/
})

//点击事件
$('.x_right>a').click(function () {
    if($('#exitLogin').html()==undefined){
        $('#user_name').click();
    }else{
        $(this).attr('target','_blank')
    }
})


//-------------------------------------------------------
//-------------分页的局部刷新-----------------------------
//-------------------------------------------------------
/*主界面的显示点击分页显示*/
$(document).on('click','.tcdNumber',function() {
    var number = $(this).html();
   // location.href='http://localhost:3000?num='+number;
    //也可以用ajax实现局部刷新
    /*在路由中主界面还是那样访问主界面。ajax异步请求的地址不在是那个地址*/
    showDeliver(number);

})

/*下一页*/
$(document).on('click','.nextPage',function() {
  var num = $('.tcdPageCode .current').html();
    //alert('当前页是'+num)
    showDeliver(num);
})

//上一页
$(document).on('click','.prevPage',function() {
    var num = $('.tcdPageCode .current').html();
    //alert('当前页是'+num)
    showDeliver(num);
})

//显示的函数
function showDeliver(number){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/index',
        data: {'num': number},
        timeout: 3000,
        async: false,//设置为同步
        success: function (data) {
            //alert( typeof JSON.stringify(data[0]));
            //每页显示的条数
            //alert(JSON.parse(data[0].up_img)[0])
            $('#information_show').empty();
            for(var i=0;i<data.length;i++){
                // todo 做优化的时候，之间把在这里查出来的数据全部转到下一个界面中去
                //把分页后显示的所有代码写在ajax中
                var deliver = '<div><div data-upid="'+data[i].upid+'" data-ubid="'+data[i].uBid+'" class="deliver_block"><div class="deliver_img">'+
                    '<img id="'+data[i].upid+'img" style="width: 155px;height: 155px;padding:15px 15px"alt=""/>'+
                    '</div><div class="deliver_con">'+
                    '<h4>【标题】<span>'+data[i].uptitle+'</span></h4>'+
                    '<p class="deliver_conTim">发布的时间 <span>'+
                    data[i].update.substr(0,4)+'-'+data[i].update.substr(4,2)+'-'+ data[i].update.substr(6)
                    +'</span></p></div>'+ '<div class="deliver_price">'+
                    '<p>￥<span>'+data[i].upprice+'</span></p>'+
                    '</div>'+
                    '<div class="deliver_author">'+
                    '<img src="http://imgcdn.xuxian.com/upload/2016/03/21/20160321074415590_464_261.jpg"alt=""/>'+
                    '<p>陌上花开</p>'+'</div></div> </div>'

                $('#information_show').append(deliver);
                //商品图像
                if(data[i].up_img!=null && data[i].up_img!=''){
                    $('#'+data[i].upid+'img').attr('src','upload/'+JSON.parse(data[i].up_img)[0]);}
                else {$('#'+data[i].upid+'img').attr('src','images/static/noimg.png');}

            }

        },
        error: function () {
            alert('error-----');
        }
    })
}
//---------------------------------------------------
//---------点击商品显示详细信息------------------------
//---------------------------------------------------
$(document).on('click','.deliver_block',function(){
    var upid = $(this).data('upid');//传递所有信息到下一个界面
    var ubid = $(this).data('ubid');//消息人id
    //alert(upid)
    //alert(ubid)
    //alert(decodeURI('./deliver/shop?upid='+upid+'&ubid='+ubid));
    //利用get请求跳转  后面拼接上两个get值
    window.open('./deliver/shop?upid='+upid+'&ubid='+ubid);
})

//---------------------------------------------------
//---------主页面搜索---------------------------------
//---------------------------------------------------

$('#btn_search').click(function(){
    //获取搜索类别和搜索的内容
    var kind = $('#book span').text();
    var con = $('#index_search').val().trim();
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/deliver/search',
        data: {'kind': kind, 'con': con},
        timeout: 3000,
        async: false,//设置为同步
        success: function (data) {
            alert(JSON.stringify(data))  //todo
               // alert(data.length)//获取查找的总长度。
            $('#information_show').empty();
            if(data.length==0){ $('#information_show').append('<div>没有搜索到内容</div>');}
            if(data.length<=5) {
                for (var i = 0; i < data.length; i++) {
                    var deliver = '<div><div data-upid="' + data[i].upid + '" data-ubid="' + data[i].uBid + '" class="deliver_block"><div class="deliver_img">' +
                        '<img id="' + data.result[i].upid + 'img" style="width: 155px;height: 155px;padding:15px 15px"alt=""/>' +
                        '</div><div class="deliver_con">' +
                        '<h4>【标题】<span>' + data[i].uptitle + '</span></h4>' +
                        '<p class="deliver_conTim">发布的时间 <span>' +
                        data[i].update.substr(0, 4) + '-' + data[i].update.substr(4, 2) + '-' + data[i].update.substr(6)
                        + '</span></p></div>' + '<div class="deliver_price">' +
                        '<p>￥<span>' + data[i].upprice + '</span></p>' +
                        '</div>' +
                        '<div class="deliver_author">' +
                        '<img src="http://imgcdn.xuxian.com/upload/2016/03/21/20160321074415590_464_261.jpg"alt=""/>' +
                        '<p>陌上花开</p>' + '</div></div> </div>';
                    $('#information_show').append(deliver);
                    //商品图像
                    if (data[i].up_img != null) {
                        $('#' + data[i].upid + 'img').attr('src', 'upload/' + JSON.parse(data[i].up_img)[0]);
                    }
                    else {
                        $('#' + data[i].upid + 'img').attr('src', 'images/static/noimg.png');
                    }
                }
            }if(data.length>5){
                for (var i = 0; i < 5; i++) {
                    var deliver = '<div><div data-upid="' + data[i].upid + '" data-ubid="' + data[i].uBid + '" class="deliver_block"><div class="deliver_img">' +
                        '<img id="' + data[i].upid + 'img" style="width: 155px;height: 155px;padding:15px 15px"alt=""/>' +
                        '</div><div class="deliver_con">' +
                        '<h4>【标题】<span>' + data[i].uptitle + '</span></h4>' +
                        '<p class="deliver_conTim">发布的时间 <span>' +
                        data[i].update.substr(0, 4) + '-' + data[i].update.substr(4, 2) + '-' + data[i].update.substr(6)
                        + '</span></p></div>' + '<div class="deliver_price">' +
                        '<p>￥<span>' + data[i].upprice + '</span></p>' +
                        '</div>' +
                        '<div class="deliver_author">' +
                        '<img src="http://imgcdn.xuxian.com/upload/2016/03/21/20160321074415590_464_261.jpg"alt=""/>' +
                        '<p>陌上花开</p>' + '</div></div> </div>';
                    $('#information_show').append(deliver);
                    //商品图像
                    if (data[i].up_img != null) {
                        $('#' + data[i].upid + 'img').attr('src', 'upload/' + JSON.parse(data[i].up_img)[0]);
                    }
                    else {
                        $('#' + data[i].upid + 'img').attr('src', 'images/static/noimg.png');
                    }
                }
            }

            //分页代码
            $(".tcdPageCode").empty();
            for(var i=0;i<data.length/5;i++){
                $(".tcdPageCode").append('<input class="searchPage" type="button" value="'+(i+1)+'"/>');
            }

            $(document).on('click','.searchPage',function(){
                var num = $(this).val();
                $('#information_show').empty();
                for (var i = (num-1)*5; i <num*5 ; i++) {
                    var deliver = '<div><div data-upid="' + data[i].upid + '" data-ubid="' + data[i].uBid + '" class="deliver_block"><div class="deliver_img">' +
                        '<img id="' + data[i].upid + 'img" style="width: 155px;height: 155px;padding:15px 15px"alt=""/>' +
                        '</div><div class="deliver_con">' +
                        '<h4>【标题】<span>' + data[i].uptitle + '</span></h4>' +
                        '<p class="deliver_conTim">发布的时间 <span>' +
                        data[i].update.substr(0, 4) + '-' + data[i].update.substr(4, 2) + '-' + data[i].update.substr(6)
                        + '</span></p></div>' + '<div class="deliver_price">' +
                        '<p>￥<span>' + data[i].upprice + '</span></p>' +
                        '</div>' +
                        '<div class="deliver_author">' +
                        '<img src="http://imgcdn.xuxian.com/upload/2016/03/21/20160321074415590_464_261.jpg"alt=""/>' +
                        '<p>陌上花开</p>' + '</div></div> </div>';
                    $('#information_show').append(deliver);
                    //商品图像
                    if (data[i].up_img != null) {
                        $('#' + data[i].upid + 'img').attr('src', 'upload/' + JSON.parse(data[i].up_img)[0]);
                    }
                    else {
                        $('#' + data[i].upid + 'img').attr('src', 'images/static/noimg.png');
                    }
                }
            })


        },
        error: function (e) {
            alert('error-----');
        }
    })

})



