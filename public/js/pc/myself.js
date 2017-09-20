/**
 * Created by laoK on 2016/5/2.
 */
$('#myselfy_detail').click(function () {
    //var name = $('#myselfname');
    $.ajax({
        type:'post',
        url:'http://localhost:3000/myself/mydetail',
        data:$('#myselfForm').serialize(),
        timeout:3000,
        async: false,//设置为同步
        success:function(data){
         alert('保存成功');
        },
        error:function(){
            alert('error-----');
        }
    })
})