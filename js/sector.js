CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
				// 初始保存
				this.save();
				// 位移到目标点
				this.translate(x, y);
				this.beginPath();
				// 画出圆弧
				this.arc(0,0,radius,sDeg, eDeg);
				// 再次保存以备旋转
				this.save();
				// 旋转至起始角度
				this.rotate(eDeg);
				// 移动到终点，准备连接终点与圆心
				this.moveTo(radius,0);
				// 连接到圆心
				this.lineTo(0,0);
				// 还原
				this.restore();
				// 旋转至起点角度
				this.rotate(sDeg);
				// 从圆心连接到起点
				this.lineTo(radius,0);
				this.closePath();
				// 还原到最初保存的状态
				this.restore();
				return this;
			}

