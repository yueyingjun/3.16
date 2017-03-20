$(function(){
    function menu(){
        var flag=true;
        window.onresize=function(){
            var clientH=$(window).height();
            $(".caidan").css("height",clientH);
            var clientW=$(window).width();
            if(clientW>765){
                $(".caidan").css("display","none");
                $(".line1").css("transform","translate(0,0px) rotate(0deg)");
                $(".line2").css("transform","translate(0,0px) rotate(0deg)");
                flag=true;
            }
        }
        window.onresize();
        $(".lines").click(function(){
            if(flag){
                $(".line1").css("transform","translate(0,5px) rotate(45deg)");
                $(".line2").css("transform","translate(0,0px) rotate(-45deg)");
                flag=false;
            }else{
                $(".line1").css("transform","translate(0,0px) rotate(0deg)");
                $(".line2").css("transform","translate(0,0px) rotate(0deg)");
                flag=true;
            }
            $(".caidan").slideToggle(1000);
        })
    }menu()
    // function banner(){
    //     var  next=0;
    //     var  now=0;
    //     var times=3000;
    //     var flag=true;
    //     var  t1=setInterval(move,times);
    //     function  move(){
    //         next++;
    //         if(next>$(".banner_img .b_img_box").length-1){
    //             next=0;
    //             flag=false;
    //         }
    //         $(".banner_img .b_img_box").eq(now).css({width: "80%", height: "80%"});
    //             //当前的一张
    //         $(".banner_img .b_img_box").eq(next).animate(
    //             {left:0},
    //             function() {
    //                 $(".banner_img .b_img_box").eq(now).css({width: "100%", height: "100%"}).animate({left:"100%"});
    //                 now = next;
    //                 currentTime=0;
    //             }).css("Zindex",100);
    //     }
    //     var t2=setInterval(auto,50);
    //     var width=$(".progress").eq(0).width();
    //     var currentTime=50;
    //     var bili=currentTime/times;
    //     function auto(){
    //         if(bili>1){
    //             bili=1;
    //         }
    //         $(".progress").eq(next).css("width",bili*100+"%");
    //     }
    // }banner()
    function bannerLunbo(){
        var imglis=$(".banner_img .b_img_box");
        var btnlis=$("ul.btn li");
        var progress=$(".progress");
        var lbtn=$(".left").eq(0);
        var rbtn=$(".right").eq(0);
        var t1,t2;
        var time=4000;
        var nowIndex=0;
        var nextIndex=0;
        var flag=true;

        t1=setInterval(autoLunbo,time);

        function autoLunbo(type){
            var type=type||"l";
            if(type=="l"){
                nextIndex++;
                if(nextIndex>=imglis.length){
                    nextIndex=0;
                    flag=false;
                }
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:-'80%'},function(){
                    flag=true;
                    nowIndex=nextIndex;
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99}).animate({left:0});
            }else if(type=="r"){
                nextIndex--;
                if(nextIndex<0){
                    nextIndex=imglis.length-1;
                }
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:'80%'},function(){
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99,left:'-100%'}).animate({left:0});
            }

        }




        rbtn.click(function(){
            clearInterval(t1);
            clearInterval(t2);
            autoLunbo("r");
            clickBtn()
        })
        lbtn.click(function(){
            clearInterval(t1);
            clearInterval(t2);
            autoLunbo("l");
            clickBtn()
        })

        /*底部按钮动效的当前时间*/
        var currTime=0;
        t2=setInterval(autoBtn,50);
        function autoBtn(){
            currTime=currTime+50;
            var bili=currTime/time;

            $(".progress").eq(nextIndex).css({width:bili*100+'%'});

            if(bili>=1){
                bili=0;
                currTime=0;
            }
            if(!flag){
                $(".progress").css({width:0});
            }


        }


        /*底部按钮单击*/
        btnlis.click(function(){
            clearInterval(t1);
            clearInterval(t2);

            nextIndex=$(this).index();

            if(nextIndex>nowIndex){
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:-'80%'},function(){
                    nowIndex=nextIndex;
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99}).animate({left:0});
            }else if(nextIndex<nowIndex){
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:'80%'},function(){
                    nowIndex=nextIndex;
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99,left:'-100%'}).animate({left:0});
            }
            clickBtn();
        });

        /*单击按钮 底部按钮效果*/
        function clickBtn(){
            progress.eq(nowIndex).css({width:'100%'}).animate({opacity:0},200);
            progress.eq(nextIndex).css({width:'100%',opacity:0}).animate({opacity:1},200);
        }


    }
    bannerLunbo();
    var flag1= true;
    function foot() {
        var flag1 = true;
        $(".list").click(function () {
            if($(window).width()<750) {
                if (flag1) {
                    $(this).children("h5").children(".add").css("transform", "translate(0,0px) rotate(45deg)");
                    flag1 = false;
                } else {
                    $(this).children("h5").children(".add").css("transform", "translate(0,0) rotate(0deg)");
                    flag1 = true;
                }
                $(this).children("ul").children("li").toggle(300);

            }
        })
        $(window).resize(function(){
            if($(window).width()>750){
                $(".list ul li").show();
            }else if($(window).width()<750){
                $(".list ul li").hide();
            }
        })
    }
    foot();


})