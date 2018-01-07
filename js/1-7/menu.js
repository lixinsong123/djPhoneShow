
		var home_controller = document.getElementById("home");
		var oImgs  = document.getElementById("meni_list").getElementsByTagName("img");
		var open  = true;
		var du =-360;
		var iLeft=-200;
		var speed=0.5;
		for(var j=0;j<oImgs.length;j++){
			oImgs[j].onclick=function(){
				this.style.transition="0.3s";
				this.style.transform="scale(2)";
				this.style.opacity  ="0.2";
				addEnd(this,end);
			}
		}
		function end(){
				this.style.transition="0.1s";
				this.style.transform="scale(1)";
				this.style.opacity  ="1";
				removeEnd(this,end)
		}
		home_controller.onclick=function(){
			if(open){
				this.style.transform = "rotate("+du+"deg)";
				
				for(var i=0;i<oImgs.length;i++){
					oImgs[i].style.left=tXz(iLeft,90/4*i).l+"px";
					oImgs[i].style.top=tXz(iLeft,90/4*i).t+"px";
					oImgs[i].style.transform="rotate("+du+"deg)";
					//var a="0.5s "+i*50+"ms"; 
					oImgs[i].style.transition="0.5s "+i*50+"ms";
				}
				du=0;
			}else{
				this.style.transform = "rotate("+du+"deg)";
				
				for(var i=0;i<oImgs.length;i++){
					oImgs[i].style.left="0px";
					oImgs[i].style.top="0px";
					oImgs[i].style.transform="rotate("+du+"deg)";
					oImgs[i].style.transition="0.5s "+(oImgs.length-i)*50+"ms";
				}
				du=-360;
			}
			open=!open;
		}
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

 $('#meni_list').on('touchstart',function(){
	 console.log($(this));
 })

