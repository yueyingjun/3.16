$(function(){
    // $("fdj").click(function(){
    //     $("search-box").show(500)
    // })
    //
    // $(".fdj").hover(function(){
    //     $(".search-box").css("display","block")
    // },function(){
    //     $(".search-box").css("display","none")
    // })
    
    //头部
    
    //搜索框
    var searchbox=$(".search-box");
    var close=$(".ca");
    var head=$(".nav a");

    close.click(function(){
        head.each(function(index,ele){
            $(ele).css({transitionDelay:(head.length-index)*.05+"s"}).addClass("headxs")
        })
        close.fadeIn(500,function(){
            searchbox.fadeIn(500,function(){
                $(".sear").css({opacity:1,left:0});
            })
            var lis=$(".list li");
                lis.each(function(index,ele){
                    $(ele).css({transitionDelay:(lis.length-index)*.05+"s"}).addClass("sbcx")
            })
        })
    })
    //banner
    var bantu=$(".ban-tu");
    var ban=$(".ban");


    var now=0;
    var next=0;
    setInterval(function(){
        next++;
        if(now<bantu.length-1){

            
        }
        bantu.eq(now).css({left:"100%"}).end().eq(next).css({left:"0"});
        bantu.eq(next).css({left:"0"}).end().eq(now).css({left:"-100"});
    },1000)
    
    
})

