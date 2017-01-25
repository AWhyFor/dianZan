// 用户名
var names = ['王二麻子', '路人甲', '222', '333'];
// 用户头像
var avatars = ['../../img/friend2.jpg', '../../img/me.jpg'];
// 背景
var bgs = ['../../img/smallImg1.jpg'];
// 评论
var comments = ['666', '什么活动？', 'wtf?'];
// 正文
var contents = [{
	// 链接
	link: null,
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
	link: null,
	// 内容
	text: '恭喜发财',
	// 图片
	imgs: ['../../img/friend2.jpg', '../../img/me.jpg']
}];

module.exports = {
	names: names,
	avatars: avatars,
	bgs: bgs,
	comments: comments,
	contents: contents
}