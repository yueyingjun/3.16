
////滚轮事件
//	jQuery.fn.extend({           //给jQuery的原型加的
//		mousewheel:function(upFun,downFun){
//			this.each(function(index,dom){
//				if(dom.attachEvent){
//					dom.attachEvent("onmousewheel",fun);
//				}else{
//					dom.addEventListener("mousewheel",fun,false);
//					dom.addEventListener("DOMMouseScroll",fun,false);
//				}
//				function fun(e){
//					if(e.preventDefault){
//						e.preventDefault();
//					}else{
//						e.returnValue=false;
//					}
//					var num=e.wheelDelta||e.detail;
//					if(num==120||num==-3){
//						upFun.call(dom);
//					}else if(num==-120||num==3){
//						downFun.call(dom);
//					}
//				}
//			})
//		}
//	})
//	
//	
//	jQuery.extend({             //给jQuery加的
//		returnTop:function(obj,time){
//			obj.on("click",function(){
//				var top=$(document).scrollTop();
//				var newobj={top:top};
//				$(newobj).animate({top:0},{
//					duration:time,
//					step:function(){
//						$(document).scrollTop(newobj.top)
//					}
//				})
//			})
//		}
//	})
	
//滚轮事件	
//upFun滚轮向上滚动触发的function
//downFun滚轮向下滚动触发的function
	function mousewheel(upFun,downFun){
		this.each(function(index,dom){
			if(dom.attachEvent){
				dom.attachEvent("onmousewheel",fun);
			}else{
				dom.addEventListener("mousewheel",fun,false);
				dom.addEventListener("DOMMouseScroll",fun,false);
			}
			function fun(e){
				if(e.preventDefault){
					e.preventDefault();
				}else{
					e.returnValue=false;
				}
				var num=e.wheelDelta||e.detail;
				if(num==120||num==-3){
					upFun.call(dom);
				}else if(num==-120||num==3){
					downFun.call(dom);
				}
			}
		})
	}	
	
//单机obj滚动条回到顶部的animate
	function returnTop(obj,time){
		obj.on("click",function(){
			var top=$(document).scrollTop();
			var newobj={top:top};
			$(newobj).animate({top:0},{
				duration:time,
				step:function(){
					$(document).scrollTop(newobj.top)
				}
			})
		})
	}
	
	
//****轮播封装	
//obj.fobj:轮播的窗口对象
//obj.objarr：被轮播的元素
//obj.dianobjarr:轮播小下标
//obj.dianobjarrcn:轮播小下标变化的class
//obj.method:轮播方式,move-opacity
//obj.way:轮播的方向,x-y
//obj.time:时间间隔
//obj.anmtime:动画时间
//备注:fobj、dianobjarr需设置定位,objarr和dianobjarr在fobj中并且个数匹配
function lunbo(obj){
	//数据初始化
	this.fobj=obj.fobj;
	this.objarr=obj.objarr;
	this.dianobjarr=obj.dianobjarr||null;
	this.dianobjarrcn=obj.dianobjarrcn;
	this.method=obj.method||"opacity";
	this.way=obj.way||"x";
	this.time=obj.time||2000;
	this.anmtime=obj.anmtime||1000;
	this.t1;
	this.t1fun=function(){};
}

lunbo.prototype={
	//运行
	start:function(){
		this.getMethod();
		// this.mhover();
	},
	//判断轮播方式
	getMethod:function(){
		//双下标移动轮播和透明度轮播
		if(this.method=="move"){
   	        this.methodmove();
	    }else if(this.method=="opacity"){
	    	this.methodopacity();
	    }	
	},
	methodmove:function(){
		//双下标轮播判断方向，x-y
		if(this.way=="y"){
			this.movey();
		}else if(this.way=="x"){
			
			this.movex();
		}
	},
	//双下标y方向轮播
	movey:function(){
		this.fobjd=parseInt(this.fobj.css("height"));
		this.objarr.css({"top":this.fobjd,"left":"0"});
		this.objarr.eq(0).css({"top":"0","left":"0"});
		
		var that=this;
		var num=0;
		var next=0;
		this.t1fun=function(){
			next++;
			if(next>=that.objarr.size()){
				next=0;
			}
			that.objarr.eq(next).css("top",that.fobjd);
			that.objarr.eq(num).animate({top:-that.fobjd},that.anmtime);
			that.objarr.eq(next).animate({top:0},that.anmtime);		
			if(that.dianobjarr!=null){
				that.dianobjarr.eq(num).removeClass(that.dianobjarrcn);
				that.dianobjarr.eq(next).addClass(that.dianobjarrcn);				
			}
			num=next;			
		}
		this.t1=setInterval(function(){
            that.t1fun();
		},that.time)
        
	},
	//双下标x方向轮播
	movex:function(){
		this.fobjd=parseInt(this.fobj.css("width"));
		this.objarr.css({"top":0,"left":this.fobjd});
		this.objarr.eq(0).css({"top":0,"left":"0"});
		
		var that=this;
		var num=0;
		var next=0;
		this.t1fun=function(){
			next++;
			if(next>=that.objarr.size()){
				next=0;
			}
			that.objarr.eq(next).css("left",that.fobjd);
			that.objarr.eq(num).animate({left:-that.fobjd},that.anmtime);
			that.objarr.eq(next).animate({left:0},that.anmtime);
			if(that.dianobjarr!=null){
				that.dianobjarr.eq(num).removeClass(that.dianobjarrcn);
				that.dianobjarr.eq(next).addClass(that.dianobjarrcn);				
			}

			num=next;			
		}
		this.t1=setInterval(function(){
            that.t1fun();
		},that.time)
	},
	methodopacity:function(){
		this.objarr.css({"top":0,"left":0,opacity:0});
		this.objarr.eq(0).css("opacity",1);
		var that=this;
		var num=0;
		var next=0;
		this.t1fun=function(){
			next++;
			if(next>=that.objarr.size()){
				next=0;
			}
			that.objarr.eq(num).animate({opacity:0},that.anmtime);
			that.objarr.eq(next).animate({opacity:1},that.anmtime);
			
			if(that.dianobjarr!=null){
				that.dianobjarr.eq(num).removeClass(that.dianobjarrcn);
				that.dianobjarr.eq(next).addClass(that.dianobjarrcn);				
			}
			num=next;			
		}
		this.t1=setInterval(function(){
            that.t1fun();
		},that.time)
	},
	mhover:function(){
		var that=this;
		this.fobj.hover(function(){
			clearInterval(that.t1);
		},function(){
			that.ti=setInterval(function(){
				that.t1fun();
			},that.time)
		})
	}
	
}

//var obj=new lunbo({
//	fobj:obj,
//	objarr:objarr,
//	dianobjarr:objarr,
//	dianobjarrcn:"classname",
//	method:"opacity",
//	way:"y",
//	time:5000,
//	anmtime:1200
//})
//obj.start()	
	
	
	
