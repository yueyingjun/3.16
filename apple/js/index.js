/**
 * Created by Administrator on 2017/3/16.
 */
$(function () {
    gundong();
    function gundong() {
        var flag=false;
        window.onresize=function () {
            h=$(window).height();
            if(flag){
                $(".son").css("height",h+"px");
            }
        }
        window.onresize();
        $(".xian").eq(0).click(function () {
            flag=true;
            $(".son").css("height",h+"px");
            $(".xian .xian1").css("transform","rotate(45deg) translate(0,5px)");
            $(".xian .xian2").css("transform","rotate(-45deg) translate(0,-5px)");
        })
        $(".xian").eq(1).click(function () {
            flag=false;
            $(".son").css("height","0");
            $(".xian .xian1").css("transform","");
            $(".xian .xian2").css("transform","");
        })

    }
    lunbo();
    function lunbo() {
        var now=0;
        var next=0;
        var nowtime=0;
        var timez=3000;
        var flag=true;
        var kai=true;
        var t1=setInterval(move,4000);
        var t2=setInterval(btn,50);
        function btn() {
            nowtime+=50;
            var bili=nowtime/timez;
            if(bili>=1){
                bili=1;
            }
            $(".btnl").eq(now).css("width",bili*100+"%");
            if(!flag){
                $(".btnl").css("width","0");
                flag=true;
            }
        }
        function move(type) {
            var type=type||"r";
            if(type=="r"){
                next=now+1;
                if(next>$(".bannerimg").length-1){
                    next=0;
                }
                $(".bannerimg").eq(now).css("z-index","1").animate({width:"80%",height:"80%"},1000,function () {
                    $(".bannerimg").eq(now).css({
                        width:"100%",
                        height:"100%",
                        left:"100%"
                    })
                    now=next;
                    nowtime=0;
                    kai=true;
                    if(next==0){
                        flag=false;
                    }
                }).end().eq(next).css("z-index","2").animate({left:0},1000)
            }else if(type=="l"){
                next=now-1;
                if(next<0){
                    next=$(".bannerimg").length-1;
                }
                $(".bannerimg").eq(now).css("z-index","2").animate({left:"100%"},2000,function () {
                    now=next;
                    nowtime=0;
                    kai=true;
                    if(next==0){
                        flag=false;
                    }
                }).end().eq(next).css({
                    left:"0",
                    width:"80%",
                    height:"80%",
                    zIndex:1
                }).animate({
                    width:"100%",
                    height:"100%"
                },2000)
            }
        }
        //
        $(".bannerbox").hover(function () {
            clearInterval(t1);
            clearInterval(t2)
        },function () {
            t1=setInterval(move,4000);
            t2=setInterval(btn,50);
        })
        $(".leftbtnl").click(function () {
            if(kai){
                kai=false;
                move("l");
            }
        })
        $(".rightbtnl").click(function () {
            if(kai){
                kai=false;
                move("r");
            }
        })
        $(".btnw").click(function () {
            var a=$(this).index();
            if(now>$(this).index()){
                $(".bannerimg").eq(now).css("z-index","2").animate({left:"100%"},2000,function () {
                    now=a;
                    nowtime=0;
                    if(a==0){
                        flag=false;
                    }
                }).end().eq(a).css({
                    left:"0",
                    width:"80%",
                    height:"80%",
                    zIndex:1
                }).animate({
                    width:"100%",
                    height:"100%"
                },2000)
            }else if(now<$(this).index()){
                $(".bannerimg").eq(now).css("z-index","1").animate({width:"80%",height:"80%"},1000,function () {
                    $(".bannerimg").eq(now).css({
                        width:"100%",
                        height:"100%",
                        left:"100%"
                    })
                    now=a;
                    nowtime=0;
                }).end().eq(a).css("z-index","2").animate({left:0},1000)
            }
        })
        window.onblur=function(){
            clearInterval(t1);
            clearInterval(t2);
        }
        window.onfocus=function(){
            t1=setInterval(move,4000);
            t2=setInterval(btn,50);
        }
    }
    footer();
    function footer() {
        var flag=true;
        $(window).resize(function () {
            if($(window).width()<750){
                $(".about").nextAll().hide();
            }else if($(window).width()>750){
                $(".about").nextAll().show();
            }
        })
        $(".about").click(function () {
            if($(window).width()<=750){
                $(this).nextAll().toggle(500);
                if(flag){
                    flag=false;
                    $(this).find("span").css("transform","rotate(45deg)");
                }else{
                    flag=true;
                    $(this).find("span").css("transform","rotate(0deg)");
                }
            }

        })
    }



    //end
})