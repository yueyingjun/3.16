$(function(){
    var width=$(".banner .lunbo").eq(0).width();
    var now=0;
    var next=0;
    var t=setInterval(move,4000);
    function move(){
        next=now+1;
        if(next>=$(".banner .lunbo").length){
            next=0;
        }
        $(".banner .lunbo").eq(next).css({left:"100%"});
        $(".banner .lunbo").eq(now).animate({left:-width},500);
        $(".banner .lunbo").eq(next).animate({left:0},500);
        now=next;
    }
})