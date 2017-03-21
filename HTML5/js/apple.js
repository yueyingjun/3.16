/**
 * Created by Administrator on 2017/3/17.
 */
$(function () {
    var  next=0;
    var  now=0;
    var  t=setInterval(move,2000);
    var  width=$(".banner_img .b_img_box").width();
    console.log(width);
    function  move(type){
        type=type||"right";
        if(type=="right"){
            next=now+1;
            if(next>$(".banner_img .b_img_box").length-1){
                next=0;
            }
            $(".banner_img .b_img_box").eq(next).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(next).animate({"left":0},500);
        }
        if(type=="left"){
            next=now-1;
            if(next<0){
                next=$(".banner_img .b_img_box").length-1;
            }
            $(".banner_img .b_img_box").eq(next).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq(next).animate({"left":0},500);
        }
        $("ul.btn li").removeClass().eq(now).addClass("first");
        now=next;
    }
    $(".box").hover(function(){
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
    $("ul.circle li").on("click",function(){
        if(now>$(this).index()){
            $(".imgbox li").eq($(this).index()).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq($(this).index()).animate({"left":0},500);
        }else if(now<$(this).index()){
            $(".imgbox li").eq($(this).index()).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq($(this).index()).animate({'left':0},500);
        }
        $("ul.circle li").removeClass().eq($(this).index()).addClass("first");
        now=$(this).index();
    })
})