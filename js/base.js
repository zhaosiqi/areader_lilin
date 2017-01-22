function resize(now,type){
        var type=type||"x";
        var cw=document.documentElement.clientWidth;
        var ch=document.documentElement.clientHeight;
        var html=document.getElementsByTagName("html")[0];
        if(type=="x"){
            var scale=cw/now*100;
            html.style.fontSize=scale+"px";
        }else if(type=="y"){
            scale=ch/now*100;
            html.style.fontSize=scale+"px";
        }
    }

window.onload=function(){
     resize(1334,"y");
}
