$(function() {
    $(".Tab").click(function () {
        var index = $(this).index(".Tab");
        $(".Tab").css({
            "border": "none",
            "background": "#2a3441"
        })
        $(".Tab").eq(index).each(function () {
            $(this).css({
                "border": "1px solid #fff",
                "background": "#29a6dc"
            })
        })

        $(".body>div").eq(index).show().siblings().hide();
    })
    
    
        var width=$(window).width();
        $(".lists").mousedown(function(e){
            e.preventDefault();
        })
        $(".lists").mousemove(function(e){
            e.preventDefault();
        })
        var marginl;
        var num=0;
        var flo=$(".lists-move").length;
        for (var i=0;i<flo;i++) {
        	touch.on("body","dragstart",".lists-move",function(e){
        	if(e.direction=="left"){
marginl=parseInt($(".lists-move").css("marginLeft","-1.5rem"))?parseInt($(".lists-move").css("marginLeft")):'-1.5rem';
            $(".lists-move").css({
            	transition:"margin-left 2s ease"
            })
            $(".lists-move").css({
                background:"#2BDCBC"
            })
//          $(".lists-moveright a .bijiben .bijiben-left").css({
//          	"background":"url(../images/qianbi3.png)",
//          	"background-size":"100% 100%"
//          })
			$("body a").css({
				color:"#ffffff"
			})
           }else if(e.direction=="right"){
marginl=parseInt($(".lists-move").css("marginLeft",0))?parseInt($(".lists-move").css("marginLeft")):0;
           	$(".lists-move").css({
            	transition:"margin-left 2s ease"
            })
           	$(".lists-del").css({
            	transition:"none"
            })
            $(".lists-move").css({
                background:"#ffffff"
            })
            $("body a").css({
				color:"black"
			})
           }
        })
        touch.on("body","drag",".lists-move",function(e){
        	if(e.x=="1.5rem"){
        		$(".lists-del").css({
            	display:"block"
            })
        	}
			
        })
        touch.on("body","dragend",".list-move",function(e){
           console.log(2);
        })
        }
         
       
       
//     弹出设置
		$(".showcon p").click(function(){
			$(".shezhi").css('display','block')
		})
		$(".shezhi .shezhilist .listed .listeds").eq(1).click(function(){
			$(".shezhi .shezhilist").eq(1).css({
				"z-index":"99"
			})
		})
		$(".shezhi .shezhilist .listed .listeds").eq(2).click(function(){
			$(".shezhi .shezhilist").eq(0).css({
				"z-index":"100"
			})
		})
})