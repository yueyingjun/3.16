$(function(){
    // 导航
    $(".hxt-nav .nav2 li .hanbao").click(function(){
        $(this).css("display","none");
        $(".hxt-nav .nav2 li .close").css("display","block");
        $(".hxt-nav").css("top","-44px");
        $(".navhidden").slideDown(100);
    })
    $(".hxt-nav .nav2 li .close").click(function(){
        $(this).css("display","none");
        $(".hxt-nav .nav2 li .hanbao").css("display","block");
        $(".hxt-nav").css("top","0px");
        $(".navhidden").slideUp(100);
    })
    // 列表
    var flag=true;
    $(".hxt-list .listtitle").click(function(){
        if(flag){
            $(this).css("border-bottom","none");
            $(this).next().css("border-bottom","1px solid #ccc");
            flag=false;
        }else{
            $(this).css("border-bottom","1px solid #ccc");
            $(this).next().css("border-bottom","none");
            flag=true;
        }

        $(this).next().slideToggle(100);
    })
})