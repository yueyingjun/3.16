/**
 * Created by Administrator on 2017/3/17 0017.
 */
$(function(){
   $(".lb li").each(function(index){
       $(this).click(function(){
           $(".lb li").css("background","gray").eq($(this).index()).css("background","#333");
           $(".banner_img").find("li").css("display","none").eq($(this).index()).css("display","block");
       })
   })

});