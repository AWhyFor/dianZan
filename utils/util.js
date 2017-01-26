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
		for(var i = 0; i < this.randomInt(0, 2) ; i++) {
			arr.shift();
		}
		return arr.shift();
	}
}
