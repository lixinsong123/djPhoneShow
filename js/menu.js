
		var home_controller = document.getElementById("home");
		var oImgs  = document.getElementById("meni_list").getElementsByTagName("img");
		var open  = true;
		var du =-360;
		var iLeft=-150;
		var speed=0.5;
		for(var j=0;j<oImgs.length;j++){
			oImgs[j].addEventListener('touchstart',function(){
				this.style.transition="0.3s";
				this.style.transform="scale(2)";
				this.style.opacity  ="0.2";
				addEnd(this,end);
			})
		}
		function end(){
				this.style.transition="0.1s";
				this.style.transform="scale(1)";
				this.style.opacity  ="1";
				removeEnd(this,end)
		}
		home_controller.addEventListener('touchstart',function(){
			if(open){
				this.style.transform = "rotate("+du+"deg)";
				
				for(var i=0;i<oImgs.length;i++){
					oImgs[i].style.left=tXz(iLeft,90/4*i).l+"px";
					oImgs[i].style.top=tXz(iLeft,90/4*i).t+"px";
					oImgs[i].style.transform="rotate("+du+"deg)";
					//var a="0.5s "+i*50+"ms"; 
					oImgs[i].style.transition="0.5s "+i*500+"ms";
				}
				du=0;
			}else{
				this.style.transform = "rotate("+du+"deg)";
				
				for(var i=0;i<oImgs.length;i++){
					oImgs[i].style.left="0px";
					oImgs[i].style.top="0px";
					oImgs[i].style.transform="rotate("+du+"deg)";
					oImgs[i].style.transition="0.5s "+(oImgs.length-i)*500+"ms";
				}
				du=-360;
			}
			open=!open;
		});
		/*算法核心*/
		function tXz(iLeft,iDu){
			return {"l":Math.round(Math.sin(iDu/180*Math.PI)*iLeft),
					"t":Math.round(Math.cos(iDu/180*Math.PI)*iLeft)
					}
		}
		/*过渡后的事件*/
		function addEnd(obj,fn){
			obj.addEventListener("WebkitTransitionEnd",fn,false);
			obj.addEventListener("transitionend",fn,false);
		}
		function removeEnd(obj,fn){
			obj.removeEventListener("WebkitTransitionEnd",fn,false);
			obj.removeEventListener("transitionend",fn,false);
		}

/**
 * 跳转页面
 */

 $('#meni_list').on('touchstart',function(ev){
	　var ev = ev || window.event;
	　var target = ev.target || ev.srcElement;
	　　　　if(target.nodeName.toLowerCase() == 'img'){
				console.log(target.dataset.index);
				var index = target.dataset.index;
				swiper.slideTo(index, 1000, false)
	　　　　}
 })

/**
* 导航扇形背景效果
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var deg = Math.PI/180;
	// 开始一条新路径
	ctx.beginPath();
	// 位移到圆心，方便绘制
	ctx.translate(100, 100);
	// 移动到圆心
	ctx.moveTo(0, 0);
	// 绘制圆弧
	// ctx.arc(0, 0, 100, 30*deg, Math.PI * 1);
	ctx.sector(100,100,110,130*deg,268*deg);
menuBg(ctx);
function menuBg(obj){	    	
				// 闭合路径
				//ctx.closePath();
	// var color = '#d21326';
	// var index=268;//92
	// 	setInterval(function(){
	// 			index--;
	// 			var c =(index-1)*deg;			
	// 			obj.sector(100,100,110,c,273*deg);
	// 			obj.fillStyle=color;	
	// 			obj.fill();
	// 	},15);
}
