$(window).ready(function(){
    var now=0;
    var next=0;
    var width=$(".banner").width();
    var t=setInterval(move,4000);
    var flag=true;
    function move(type){
        type=type||"l";
        if(type=="l"){
            next=now+1;
            if(next>=$("ul.imgbox li").length){
                next=0;
            }
            $("ul.imgbox li").get(next).style.left=width+"px";
            $("ul.imgbox li").eq(now).animate({left:-width},1000);
            $("ul.imgbox li").eq(next).animate({left:0},1000,function(){flag=true});
            $("ul.circle li").eq(now).removeClass();
            $("ul.circle li").eq(next).addClass("first");
        }
        if(type=="r"){
            next=now-1;
            if(next<0){
                next=$("ul.imgbox li").length-1;
            }
            $("ul.imgbox li").get(next).style.left=-width+"px";
            $("ul.imgbox li").eq(now).animate({left:width},1000);
            $("ul.imgbox li").eq(next).animate({left:0},1000,function(){flag=true});
            $("ul.circle li").eq(now).removeClass();
            $("ul.circle li").eq(next).addClass("first");
        }
        now=next;
    }
    $("ul.circle li").click(function(){
        if(now>$(this).index()){
            $("ul.imgbox li").get($(this).index()).style.left=width+"px";
            $("ul.imgbox li").eq(now).animate({left:-width},1000);
            $("ul.imgbox li").eq($(this).index()).animate({left:0},1000);
        }
        if(now<$(this).index()){
            $("ul.imgbox li").get($(this).index()).style.left=-width+"px";
            $("ul.imgbox li").eq(now).animate({left:width},1000);
            $("ul.imgbox li").eq($(this).index()).animate({left:0},1000);
        }
        $("ul.circle li").removeClass().eq($(this).index()).addClass("first");
        now=$(this).index();
    })
    $(".box").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,4000)
    })
    $(".left_turn,.right_turn").click(function(){
        if($(this).is(".right_turn")){
            if(flag){
                flag=false;
                move("l");
            }
        }else{
            if(flag){
                flag=false;
                move("r");
            }
        }
    })
})
