$(function () {
    var num=0;
    var t=setInterval(function () {
        num++;
        if(num>=3){
            num=0;
        }
        $(".picbox li").removeClass("first").eq(num).addClass("first");
    },1000)
})
