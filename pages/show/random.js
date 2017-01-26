var data = require('./data');
var util = require('../../utils/util.js');

// 生成一个元素
function getItem(timearr) {
    var item = Object.assign({}, util.randomArr(data.contents));
    item.name = util.randomArr(data.names);
    item.avatar = util.randomArr(data.avatars);
    item.timeago = util.randomTimeago(timearr);
    

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
    var likesCount = util.randomInt(20, 30);
    var likes = [];
    for (var i = 0; i < likesCount ; i++) {
        likes.push(util.randomArr(data.names));
    }
    if(likes.length > 10)
        likes = likes.slice(0,3) + "...等" + likes.length + "人觉得很赞"; 
    item.likes = likes;
    return item;
}

// 将多个元素组装成列表
function getLists() {
    // 朋友圈条数
    var count = util.randomInt(0, 4);
    var arr = [];
    var timearr = [];
    for(var i=0 ; i < data.times.length ; i++) {
        timearr[i] = data.times[i];
    }
    for (var i = 0; i < count ; i++) {
        arr.push(getItem(timearr));
    }
    console.log(arr);
	return arr;
}

module.exports = {
	getLists: getLists
}