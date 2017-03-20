$(function () {
    var  next=0;
    var  now=0;
    var  t=setInterval(move,2000);
    var  width=$(".bannerbox li").width();
    function  move(type){
        type=type||"right";
        if(type=="right"){
            next=now+1;
            if(next>$(".bannerbox li").length-1){
                next=0;
            }
            $("..bannerbox li").eq(next).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(next).animate({"left":0},500);
        }
        if(type=="left"){
            next=now-1;
            if(next<0){
                next=$(".bannerbox li").length-1;
            }
            $(".bannerbox li").eq(next).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq(next).animate({"left":0},500);
        }
        $(".btnbox li").removeClass().eq(now).addClass("first");
        now=next;
    }
    $(".banoutbox").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000);
    })
    $(".left,.right").on("click",function(){
        if($(this).is(".left")){
            move("left");
        }else{
            move("right");
        }
    })
    $(".btnbox li").on("click",function(){
        if(now>$(this).index()){
            $(".bannerbox li").eq($(this).index()).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq($(this).index()).animate({"left":0},500);
        }else if(now<$(this).index()){
            $(".bannerbox li").eq($(this).index()).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq($(this).index()).animate({'left':0},500);
        }
        $(".btnbox li").removeClass().eq($(this).index()).addClass("first");
        now=$(this).index();
    })
})
