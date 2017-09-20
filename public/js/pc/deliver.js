/**
 * Created by laoK on 2016/4/27.
 */
/*提交表单的onsubmit事件*/
function check_deliver(){
    var title = $('#deliver_title');
    var price = $('#deliver_price');
    var author = $('#deliver_ahthor');
    var phone = $('#deliver_phone');
//        alert(check_price(price));
    if(check_deliver_title(title) && check_check_box() && check_price(price) && check_ifream() && check_man(author) && check_Phone(phone) ){
        return true;
    }else{
        return false;
    }
}

/*核对标题*/
function check_deliver_title(title){
    if(title.val().length<3 || title.val().length>20 ){
        $('#deliver_titleInfo').html('标题要在3~20个汉字之间').css('color','red');
        title.focus();
        return false;
    }else{
        return true;
    }
}

/*核对价格*/
function check_price(price){
    //var pat = '/^\d+(\.\d{2})?$/';//匹配小数 最多为两位小数
//        if(pat.test(price.val())){
    var reg=/[^\x00-\x80]/;
    if(price.val().length==0){
        $('#deliver_priceInfo').html('价格为不能为空').css('color','red');
        price.focus();
        return false;
    }
    if(price.val()!='面议'){
        if(reg.test(price.val())){
            $('#deliver_priceInfo').html('不能输入汉字').css('color','red');
            price.focus();
            return false;
        }
    }

    if(price.val().length>5){
        $('#deliver_priceInfo').html('价格格式错误').css('color','red');
        price.focus();
        return false;
    }else{
        return true;
    }
}

/*设置时间显示文本框内容*/
setTimeout(function(){
    var ss = $("#noiseWidgIframe").contents()
    ss.find("#iframeBody").html('请输入内容');
    ss.find("#iframeBody").css('color','#cccccc')
    ss.click(function() {
        if (ss.find("#iframeBody").html().trim() == '请输入内容') {
//                    alert(ss.find("#iframeBody").html().trim());
            ss.find("#iframeBody").css('color', '#000000');
            ss.find("#iframeBody").html('');
        }else{
            ss.find("#iframeBody").css('color','#000000');
        }
    })
},300)

/*点击文本框隐藏事件*/
function check_ifream(){
    var ss = $("#noiseWidgIframe").contents();
    var con = ss.find("#iframeBody").html().trim();
//        alert(con.length);
    if(con.length<15){
        $('#deliver_detailInfo').html('内容长度不得小于10').css('color','red');
        con = ss.find("#iframeBody").html('');
        return false;
    }else{
        return true;
    }
}

/*核对联系人*/
function check_man(author){
    if(author.val()==''){
        $('#deliver_ahthorInfo').html('联系人不能为空').css('color','red');
        return false;
    }else{
        return true;
    }
}

/*核对电话号码*/
function check_Phone(uphone){
    var pattern = /^1[3|4|5|7|8]\d{9}$/;
    if(pattern.test(uphone.val())){
//            alert('手机号');
        return true;
    }else{
        uphone.focus();
        $('#deliver_phoneInfo').html('手机号格式错误').css('color','red');
        return false;
    }
}

/*核对配送方式*/
$("#deliver_select_op input").click(function(){
//        alert($(this).attr('checked'));
    if( $(this).attr('checked')==undefined ||$(this).attr('checked')=='false' ){
        $(this).attr('checked',true);
    }else if($(this).attr('checked')=='checked'||$(this).attr('checked')=='true'){
        $(this).attr('checked',false);
//            alert($(this).attr('checked'));
    }
})
function check_check_box(){
    var num=0;
    for(var i=0;i<4;i++){
        var s= $(".deliver_select_op input").eq(i).attr('checked');
//            alert(s);
        if($("#deliver_select_op input").eq(i).attr('checked'))num++;
//            alert(num);
    }
    if(num==0){
        $('#deliver_areaInfo').html('请选择交易方式').css('color','red');
        return false;
    }else{
        $('#deliver_areaInfo').html('')
        return true;
    }
}

$(function(){
    var ss = $(".deliver_select_op input:eq(1)").attr('id')
})


//-----------------------------------------------------------
//-----------------------------------------------------------
/*上传文件的js*/
var uploader = new plupload.Uploader({
    runtimes: 'html5,flash,silverlight,html4',
    browse_button: 'btnimg',
    url: "http://localhost:3000/upload",
    flash_swf_url: 'plupload/Moxie.swf',
    silverlight_xap_url: 'plupload/Moxie.xap',
    filters: {
        max_file_size: '1024kb',
        mime_types: [
            {title: "files", extensions: "jpg,png,gif"}
        ]
    },
    multi_selection: true,//设置多文件上传
    init:{
        FilesAdded: function(up, files) {//文件上传前
         if ($("#ul_pics").children("ul li").length > 3) {
             alert("您上传的图片太多了！");
             uploader.destroy();
         } else {
             var li = '';
             plupload.each(files, function(file) {
             li += "<li id='" + file['id'] + "'><div class='progress'><span class='bar'></span><span class='percent'>0%</span></div></li>";
             });
             $("#ul_pics").append(li);
             uploader.start();
          }
         },

        UploadProgress: function(up, file) {//文件上传中

            var percent = file.percent;
            $("#" + file.id).find('.bar').css({"width": percent + "%"});
            $("#" + file.id).find(".percent").text(percent + "%");
            //alert(file.id)
        },
        FileUploaded: function(up, file, info) {//上传成功后的

            //alert('上传成功'+info.response);
            //alert('------'+file.id);
           /* var pro = document.getElementById('deliver_imgInfo');
            var province = document.createElement('div');//这里不是pro,这里代表的意思是在文档中创建一个option标签
            province.setAttribute("value", file.id);
            province.innerHTML = info.response;
            pro.appendChild(province);*/
           //$("#deliver_imgInfo").append("删除");
            var pathq = 'upload/'+info.response;
            var imgId = info.response.split('.')[0];
            $("#" + file.id).html("<a href='javascript:void()' title='删除图片' id='"+imgId+"'>删除</a><div class='img'><img src='" + pathq + "'/></div>");//这里可以显示上传文件的名字
        },
        Error: function(up, err) {
            alert('文件上传失败，请从新上传   '+err.message);
        }
    }
});

uploader.init();


//删除文件由于在ajax的回掉函数中不能获取当前对象，所以在开始的时候要保存当前对象
$(document).on('click','#ul_pics li a',function(){
    //alert('删除吗');
    var obj = $(this);
    //获取完全路径
   var ss = $(this).next().children("img").attr("src");
    $.ajax(
        {
            type:'get',
            url:'http://localhost:3000/deliver/del',
            data:{'imgname':ss},
            timeout:5000,
            success:function(data){
                if(data==0){
                    alert('删除失败')
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


/*选择学校的js文件*/
$('#1').click(function(){
    var school = $('#school_select');
        school.html('');
    school.html('<option value="">--请选择学校--</option>');
    //alert($(this).prop('checked'))
    if($(this).prop('checked')){
        school.css('display','block')
    }else{
        school.css('display','none')
    }
    //获取到是那个城市
    var city = $("#location_a").html();
    //利用ajax把地址传递到数据库中
    $.ajax({
        type:'GET',
        url:'http://localhost:3000/deliver/school',
        data:{'city':city},
        timeout:3000,
        async: false,//设置为同步
        success:function(data){
           //请求成功，把至写到下拉列表中
            //传递过来的值是数量和内容
            //alert(JSON.stringify(data));
            //alert(data.length)
            for(var i=0;i<data.length;i++){
                $('#school_select').append('<option value="'+data[i].schoolname+'">'+data[i].schoolname+'</option>');
            }

        },
        error:function(){
            alert('error-----');
        }
    })
})
