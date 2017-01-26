// 用户名
var names = ['王二麻子', '路人甲', '长者', '香港记者','华莱士','蛤蛤'];
// 用户头像
var avatars = ['../../img/friend2.jpg', '../../img/me.jpg'];
// 背景
var bgs = ['../../img/smallImg1.jpg'];
// 评论
var comments = ['666', '什么活动？', 'wtf?'];
// 正文
var contents = [{
	// 链接
	link: {},
	// 内容
	text: '二月，你好：）',
	// 图片
	imgs: []
}, {
	// 链接
	link: {
		img: null,
		text: '链接什么的'
	},
	// 内容
	text: '没有什么能够阻挡',
	// 图片
	imgs: ['../../img/friend2.jpg', '../../img/me.jpg', '../../img/friend2.jpg', '../../img/me.jpg']
}, {
	// 链接
	link: {},
	// 内容
	text: '恭喜发财',
	// 图片
	imgs: ['../../img/friend2.jpg', '../../img/me.jpg']
}];
//时间
var times = ['1分钟前','3分钟前','5分钟前','11分钟前','17分钟前','半小时前','49分钟前','56分钟前','1小时前','2小时前','5小时前','两天前','三天前','一个月前','一百年前','宇宙的起源'];

module.exports = {
	names: names,
	avatars: avatars,
	bgs: bgs,
	comments: comments,
	contents: contents,
	times: times
}