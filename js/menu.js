
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
		 window.can = new MenuCanvas();
		 window.can.init({
		    	'can' : document.getElementById('canvas'),
		    });
		    
		home_controller.addEventListener('touchstart',function(){
			if(open){
				this.style.transform = "rotate("+du+"deg)";
				
				for(var i=0;i<oImgs.length;i++){
					oImgs[i].style.left=tXz(iLeft,90/4*i).l+"px";
					oImgs[i].style.top=tXz(iLeft,90/4*i).t+"px";
					oImgs[i].style.transform="rotate("+du+"deg)";
					//var a="0.5s "+i*50+"ms"; 
					oImgs[i].style.transition="0.5s "+i*300+"ms";
				}
				window.can.startMenuBg();
				du=0;
			}else{
				this.style.transform = "rotate("+du+"deg)";
				
				for(var i=0;i<oImgs.length;i++){
					oImgs[i].style.left="0px";
					oImgs[i].style.top="0px";
					oImgs[i].style.transform="rotate("+du+"deg)";
					oImgs[i].style.transition="0.5s "+(oImgs.length-i)*300+"ms";
				}
				du=-360;
				window.can.closeMenuBg();
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
function MenuCanvas(){
	//Canval对象
	this.canvas  = null;
	this.ctx     = null;
	//定时器
	this.TimeVal = null;
	this.index   = null;
	this.Config = {
		//索引
		'startIndex' : 268,
		'endIndex'   : 130,
		'color'      : 'rgba(0,0,0,0.3)',
		//角度
		'deg'        : Math.PI/180
	};
	this.init = function(json){
		this.canvas = json.can;
		this.ctx = this.canvas.getContext('2d');
		this.index = this.Config.startIndex;
	};
	this.operation = function(){
		// 开始一条新路径
		this.ctx.beginPath();
		// 位移到圆心，方便绘制
		this.ctx.translate(100, 100);
		// 移动到圆心
		this.ctx.moveTo(0, 0);
	}
	this.startMenuBg = function(){
		this.ctx.closePath();
		clearInterval(this.TimeVal);
		var This =this;
	 	this.TimeVal = setInterval(function(){
	 			This.index--;
	 			var c =(This.index)*This.Config.deg;
	 			This.canvas.height=This.canvas.height;
	 			This.operation();	
				This.ctx.sector(100,100,110,c,273*This.Config.deg);
	 			This.ctx.fillStyle=This.Config.color;	
	 			This.ctx.fill();
	 			if(This.index == This.Config.endIndex){
	 				This.ctx.closePath();
	 				clearInterval(This.TimeVal);
	 			}
	 	},15);
	}
	this.closeMenuBg = function(){
		this.ctx.closePath();
		clearInterval(this.TimeVal);
		var This =this;
	 	this.TimeVal = setInterval(function(){
	 			This.index++;
	 			var c =(This.index)*This.Config.deg;
	 			This.canvas.height=This.canvas.height;
	 			This.operation();	
     			This.ctx.sector(100,100,110,c,273*This.Config.deg);
	 			This.ctx.fillStyle=This.Config.color;	
	 			This.ctx.fill();
	 			if(This.index == This.Config.startIndex+5){
	 				This.ctx.closePath();
	 				clearInterval(This.TimeVal);
	 			}
	 	},15);
   }
}
