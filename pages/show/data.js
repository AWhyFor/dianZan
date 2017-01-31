// 用户名
var names = ['运维王冼', '才哥', '擎如老大', '二侄女', '李武建', '艾利cos团团长', '张南坊', '大表姐', '安卓部老吴'];
// 用户头像
var avatars = ['../../img/avatars/avt_1.jpg', '../../img/avatars/avt_2.jpg','../../img/avatars/avt_3.jpg','../../img/avatars/avt_4.jpg','../../img/avatars/avt_5.jpg','../../img/avatars/avt_6.jpg','../../img/avatars/avt_7.jpg','../../img/avatars/avt_8.jpg','../../img/avatars/avt_9.jpg','../../img/avatars/avt_10.jpg'];
// 背景
var bgs = ['../../img/noname2.jpg'];
// 评论
var comments = ['666', '什么活动？', '可以的', '真羡慕', '挺好的', '我也想啊'];
// 正文
var contents = [{
	// 链接
	link: {
		show: true,
		img: '../../img/link/link_1.jpg',
		text: '非洲一男童道出了WTO的真相...'
	},
	// 内容
	text: '',
	// 图片
	imgs: []
}, {
	// 链接
	link: {
		show: true,
		img: '../../img/link/link_2.jpg',
		text: '震惊！99%的人不知道的真相！'
	},
	// 内容
	text: '震惊了，没想到真相居然是这样',
	// 图片
	imgs: []
}, {
	// 链接
	link: {
		show: true,
		text: '什么？你还在吃转基因食品？',
		img: '../../img/link/link_3.jpg'
	},
	// 内容
	text: '真是太危险了，各位一定要认真看完啊',
	// 图片
	imgs: []
}, {
	// 链接
	link: {
		show: true,
		text: '40年老干警提醒你，女孩该如何自卫',
		img: '../../img/link/link_5.jpg'
	},
	// 内容
	text: '转需',
	// 图片
	imgs: []
}, {
	// 链接
	link: {
		show: false
	},
	// 内容
	text: '“那年十八，站着如喽啰”',
	// 图片
	imgs: ['../../img/picture/pic_1.jpg']
}, {
	// 链接
	link: {
		show: false
	},
	// 内容
	text: '洱海我来了！',
	// 图片
	imgs: ['../../img/picture/pic_2_1.jpg','../../img/picture/pic_2_2.jpg','../../img/picture/pic_2_3.jpg','../../img/picture/pic_2_4.jpg']
}, {
	// 链接
	link: {
		show: false
	},
	// 内容
	text: '终于把你的名字看了，感动！',
	// 图片
	imgs: ['../../img/picture/pic_3.jpg']
}, {
	// 链接
	link: {
		show: true,
		text: '蝶山区萌娃评选，万元大奖等你来拿！',
		img: '../../img/link/link_4.jpg'
	},
	// 内容
	text: '点进去投137号李家萌娃李天二，感谢各位了！',
	// 图片
	imgs: []
}, {
	// 链接
	link: {
		show: false
	},
	// 内容
	text: '二月，你好：）',
	// 图片
	imgs: []
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