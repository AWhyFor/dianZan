// 公用工具库

module.exports = {
	// 生成n-m的整数
	randomInt: function(n, m) {
		return Math.round(Math.random() * m + n);
	},
	// 从某个数组里随机取元素
	randomArr: function(arr) {
		arr = arr || [];
		return arr[this.randomInt(0, arr.length - 1)];
	},
	//从某个数组里取出并删除这个元素，并且把该元素之前的元素都删除
	randomRedxArr: function(arr) {
		arr = arr || [];
		for (var i = 0; i < this.randomInt(0, 2); i++) {
			arr.shift();
		}
		return arr.shift();
	},
	// 坑大跌微信不支持图片自适应还能玩？
	// e - 图片数据
	// w - 强制宽度
	autoImage: function(e, w) {
		var originalWidth = e.detail.width;
		var originalHeight = e.detail.height;
		var windowWidth = 0,
			windowHeight = 0;
		var autoWidth = 0,
			autoHeight = 0;
		var results = {};

		wx.getSystemInfo({
			success: function(res) {
				windowWidth = w || res.windowWidth;
				windowHeight = w ? (w * res.windowHeight / res.windowWidth) : res.windowHeight;
				//判断按照那种方式进行缩放
				if (originalWidth > windowWidth) { 
					//在图片width大于手机屏幕width时候
					autoWidth = windowWidth;
					autoHeight = (autoWidth * originalHeight) / originalWidth;
					results.imageWidth = autoWidth;
					results.imageheight = autoHeight;
				} else { 
					//否则展示原来的数据
					results.imageWidth = originalWidth;
					results.imageheight = originalHeight;
				}
			}
		})
		return results;
	},
	//输入毫秒输出时间差
	getTime: function(time) {
		if(time < 3600000)
			return (Math.round(time/60/1000)).toString()+"分钟前";
		else if(time < 86400000)
			return (Math.round(time/60/60/1000)).toString()+"小时前";
		else if(time < 2592000000)
			return (Math.round(time/24/60/60/1000)).toString()+"天前";
		else if(time < 31104000000)
			return (Math.round(time/30/24/60/60/1000)).toString()+"个月前";
		else
			return "宇宙的起源";
	}
}