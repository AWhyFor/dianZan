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
	}
}
