/**
 * Created by Administrator on 2016/4/25.
 */
function getDate(){
    var s= new Date();
    var y = s.getFullYear().toString();
    var m= s.getMonth();
    var h= s.getHours();
    var M= s.getMinutes();
    var S= s.getSeconds();
    if(m<10){
        m='0'+m;
        m.toString();
    }else{
        m.toString();
    }
    if(h<10){
        h='0'+h;
        h.toString();
    }else{
        h.toString();
    }
    if(M<10){
        M='0'+M;
        M.toString();
    }else{
        M.toString();
    }
    if(S<10){
        S='0'+S;
        S.toString();
    }else{
        S.toString();
    }
    var d = s.getDate();
    if (d  >= 0 && d  <= 9) {
        d = "0" + d;
        d.toString();
    }

    return  y+'-'+m+'-'+d+'    '+h+':'+M+':'+S;
}



exports.getDate=getDate;