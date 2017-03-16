window.onload=function(){
	var lbimg=$(".lb");
	var now=0;
	var next=1;
	function move(){
		if(next>2){
			next=0;
		}
		if(next==0){
			lbimg[next].style.zIndex="3"
			lbimg.eq(next).animate({left:"0%"},2000,function (){
				this.style.left="0"
			})	
			lbimg.eq(now).animate({left:"-100%"},3000,function(){
				this.style.left="100%";
				lbimg[0].style.zIndex="0"
			})
		}else{
			lbimg.eq(next).animate({left:"0%"},2000,function (){
				this.style.left="0"
			})	
			lbimg.eq(now).animate({left:"-100%"},3000,function(){
				this.style.left="100%";
//				lbimg[next].style.zIndex="0"
			})			
		}
		

		now=next;
		next++;
	}
	var t=setInterval(move,4000)
	
}
