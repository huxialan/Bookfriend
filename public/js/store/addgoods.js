/**
 * Created by laoK on 2016/5/7.
 */

/*选择种类 把选择的种类写到按钮上。在判断按钮上是否有值。有值把值写到上面的第二个标签上*/
$('.addgoodsKindUl li span').click(function () {
    $('.addgoodsKindUl li').find('span').css({'border':'solid 1px #ccc','color':'#000', 'background-color': '#f8f8f8'})
    $(this).css({'border':'solid 1px #F63','color':'#F63','background-color':'#fff'})
    $('#addgoodsKindNext').attr('data-kind',$(this).text());
})

//点击下一步
$('#addgoodsKindNext').click(function () {
    var kind = $('#addgoodsKind');
    var kindext =  $('#addgoodsKindNext');
    var base = $('#addgoodsbase');
    if( kindext.attr('data-kind')==undefined || kindext.attr('data-kind')==''){
        alert('请选择商品类别')
    }else{
        base.attr('data-kind',$(this).text());
        kind.css({'background-color':'#F8F8F8','border-bottom': '1px solid #ccc'});
        $('#addgoodskindMian').css('display','none');
        $('#addgoodsbaseMain').css('display','block')
        base.css({'background-color':'#fff','border-bottom': 'none'})
    }
})



//选择商品类别
$('#addgoodsKind').click(function () {
    var base = $('#addgoodsbase');
    if( base.attr('data-kind')!=undefined || base.attr('data-kind')!=''){
        //$('#addgoodsbaseMain').hide();
        $('#addgoodskindMian').css('display','block');
        $('#addgoodsbaseMain').css('display','none');
        $('#addgoodsDetailMain').css('display','none');
        $('.addgoodsTitle li').css({'background-color':'#F8F8F8','border-bottom': 'solid 1px #CCCCCC'})
        $(this).css({'background-color':'#fff','border-bottom': 'none'});
    }
})

//完善基本信息
$('#addgoodsbase').click(function () {
    var base = $(this);
    if( base.attr('data-kind')!=undefined && base.attr('data-kind')!=''){
        //$('#addgoodsbaseMain').hide();
        $('#addgoodskindMian').css('display','none');
        $('#addgoodsDetailMain').css('display','none');
        $('#addgoodsbaseMain').css('display','block');
        $('.addgoodsTitle li').css({'background-color':'#F8F8F8','border-bottom': 'solid 1px #CCCCCC'})
        base.css({'background-color':'#fff','border-bottom': 'none'});
    }
})

//编辑商品信息
$('#addgoodsDetail').click(function () {
    var base = $('#addgoodsbase');
    if( base.attr('data-kind')!=undefined && base.attr('data-kind')!=''){
        $('#addgoodsbaseMain').css('display','none');
        $('#addgoodsDetailMain').css('display','block');
        $('.addgoodsTitle li').css({'background-color':'#F8F8F8','border-bottom': 'solid 1px #CCCCCC'})
        $(this).css({'background-color':'#fff','border-bottom': 'none'});
    }
})

/*点击基本信息的下一步*/
$('#addgoodsBaseNext').click(function () {
    //可以拿到隐藏的值
    //alert($('#addgoodsKindNext').attr('data-kind'))
    $('#addgoodsbaseMain').css('display','none');
    $('#addgoodsDetailMain').css('display','block');
    $('#addgoodsbase').css({'background-color':'#F8F8F8','border-bottom': '1px solid #ccc'});
    $('#addgoodsDetail').css({'background-color':'#fff','border-bottom': 'none'})
})



/*上架提交所有信息到数据库中*/
$('#addgoodsDetailNext').click(function(){
    var sdkind = $('#addgoodsKindNext').attr('data-kind');
    var sdgroup =$('#shopbaseselect').val();
    var sdtitle = $('#sdtitle').val().trim();
    var sdpriceold = $('#sdpriceold').val().trim();
    var sdpricenow = $('#sdpricenow').val().trim();
    var sdnumber = $('#sdnumber').val().trim();
    var sdlogistics =$('#sdlogistics').val().trim();
    var sddate = $('#sddate').val();//立即开售
    var sdmode = $('#shopModelSelect').val();//普通版

    var ifream = $('.ke-edit-iframe').contents();//获取ifream
    var sdcontent = ifream.find('.ke-content').text();

    //直接专递json数组过去
    var data = {date: []
       /* 'username':sessionStorage.getItem('u_name'),
        'sdkind':sdkind,
        'sdgroup':sdgroup,
        'sdtitle':sdtitle,
        'sdpriceold':sdpriceold,
        'sdpricenow':sdpricenow,
        'sdnumber':sdnumber,
        'sdlogistics':sdlogistics,
        'sddate':sddate,
        'sdmode':sdmode,
        'sdcontent':sdcontent*/
    };
    //alert(sdcontent);
    //ajax提交数据
    $.ajax(
        {
            type:'get',
            url:'http://localhost:3000/store/add',
            data:data,
            timeout:5000,
            success:function(data){
                if(data==0){
                    alert('添加成功')
                }
                if(data==1){
                    alert('删除成功');
                    obj.parent().remove();
                }
            },
            error:function(){
                alert('error');
            }
        }
    )

})
