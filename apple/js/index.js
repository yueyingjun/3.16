/**
 * Created by Administrator on 2017/3/16.
 */
$(function () {

var obj=new lunbo({
	fobj:$(".zmr_bannerbox").eq(0),
	objarr:$(".zmr_banner"),
	method:"move",
	way:"x",
	time:3000,
	anmtime:1000
})
obj.start()



// nav菜单开始

var flag=1
$("#caidan").click(function () {
    if(flag==1){
    	flag=0
        $(".zmr_navrow").eq(1).css({"width":"100%","height":"100%"})
        $(this).text("退出")
	}else if(flag==0){
    	flag=1

	}


})

// 	na菜单结束



})