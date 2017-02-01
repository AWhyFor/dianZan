var data = require('./data');
var util = require('../../utils/util.js');

// 生成一个元素
function getItem(time) {
    var item = Object.assign({}, util.randomArr(data.contents));
    item.name = util.randomArr(data.names);
    item.avatar = util.randomArr(data.avatars);
    item.timeago = util.getTime(time);

    var commentsCount = util.randomInt(0, 5);
    var comments = [];
    for (var i = 0; i < commentsCount ; i++) {
        comments.push({
            name: util.randomArr(data.names),
            to: util.randomInt(0, 1) === 0,
            text: util.randomArr(data.comments)
        });
    }
    item.comment = comments;

    // 点赞
    var likesCount = util.randomInt(0, 10);
    var likes = [];
    for (var i = 0; i < likesCount ; i++) {
        likes.push(util.randomArr(data.names));
    }
    item.likes = likes;
    return item;
}

// 获取自己的元素
function getSelfItem() {
    // 从存储取数据
    var text = wx.getStorageSync('text') || '';
    var zan = wx.getStorageSync('zan') || 30;
    var commentsCount = wx.getStorageSync('comment') || 5;;
    var images = wx.getStorageSync('images') || 0;
    var item = {
        text: text,
        imgs: images,
        link: {},
        name: wx.getStorageSync('name'),
        avatar: wx.getStorageSync('avatar'),
        timeago: '5分钟前'
    };

    var comments = [];
    for (var i = 0; i < commentsCount ; i++) {
        comments.push({
            name: util.randomArr(data.names),
            to: util.randomInt(0, 1) === 0,
            text: util.randomArr(data.comments)
        });
    }
    item.comment = comments;

    var likes = [];
    for (var i = 0; i < zan ; i++) {
        likes.push(util.randomArr(data.names));
    }
    item.likes = likes;
    return item;
}
// 将多个元素组装成列表
function getLists() {
    // 朋友圈条数
    var count = util.randomInt(5, 10);
    var arr = [getSelfItem()];
    for (var i = 0, time = 0; i < count ; i++) {
        time += util.randomInt(300000, 900000);
        arr.push(getItem(time));
    }
	return arr;
}

module.exports = {
	getLists: getLists
}