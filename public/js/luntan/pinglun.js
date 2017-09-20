/**
 * Created by Administrator on 2016/4/16.
 */
$(function(){
    $('.hgai').click(function(){
        console.log(this.parent())
    })
})
var Storage =
{
    saveData:function()//保存数据
    {
        var data = document.getElementById('tab1_pinglun1');

        if(data.value != "")
        {
            var time = new Date().getTime() + Math.random() * 5;//getTime是Date对象中的方法，作用是返回 1970年01月01日至今的毫秒数
            sessionStorage.setItem(time, data.value + "|" + this.getDateTime());//将毫秒数存入Key值中，可以降低Key值重复率
            data.value = "";
            this.writeData();
        }else
        {
            alert("请填写您的留言！");
        }

    },

    writeData:function()//输出数据
    {

        var dataHtml = "", data = "";
        for(var i = sessionStorage.length-1; i >= 0; i--)//效率更高的循环方法
        {
            data = sessionStorage.getItem(sessionStorage.key(i)).split("|");
            dataHtml +=
            '<p><img src="../img/images/img/头像2.jpg" style="height: 20px;width: 20px">我是用户名：</p>'+
            "<p><span class='msg'>" + data[0] +
            '<br>' +
            '<a href="#" type="button"  data-toggle="modal" data-target="#myModal">' +
            '回复</a>' +
            '<a href="#" type="button" class="delete_pinglun" style="margin-left: 30px" data-toggle="modal" data-target="#myModal"">' +
            '删除</a>'+
            "</span><span style='float: right' class=\"datetime\">" + data[1] + "</span></p>";
        }
        document.getElementById("returnsend").innerHTML = dataHtml;
    },
    //returnData:function()//输出数据
    //{
    //    var dataHtml = "", data = "";
    //    for(var i = localStorage.length-1; i >= 0; i--)//效率更高的循环方法
    //    {
    //        data = localStorage.getItem(localStorage.key(i)).split("|");
    //        dataHtml += "<p><span class='mhg'>" + data[0] +
    //        "</span><span class=\"datetime\">" + data[1] + "</span></p>";
    //    }
    //    document.getElementsByClassName("msg").innerHTML = dataHtml;
    //},

    clearData:function()//清空数据
    {
        if(sessionStorage.length > 0)
        {
            if(window.confirm("清空后不可恢复，是否确认清空？"))
            {
                sessionStorage.clear();
                this.writeData();
            }
        }
        else
        {
            alert("没有需要清空的数据！");
        }
    },
    getDateTime:function()//获取日期时间，例如 2012-03-08 12:58:58
    {
        var isZero = function(num)//私有方法，自动补零
        {
            if(num < 10)
            {
                num = "0" + num;
            }
            return num;
        }

        var d = new Date();
        return d.getFullYear() + "-" + isZero(d.getMonth() + 1) + "-" + isZero(d.getDate()) + " " + isZero(d.getHours()) + ":" + isZero(d.getMinutes()) + ":" + isZero(d.getSeconds());
    }
}

window.onload = function()
{
    Storage.writeData();//当打开页面的时候，先将localStorage中的数据输出一边，如果没有数据，则输出空
    document.getElementById("send").onclick = function(){Storage.saveData();}//发表评论按钮添加点击事件，作用是将localStorage中的数据输出
    //document.getElementById("clearBt").onclick = function(){Storage.clearData();}//清空所有已保存的数据
    //document.getElementById("huifu").onclick = function(){Storage.saveData();}
}