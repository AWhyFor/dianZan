function getLists() {
	return [{
        name: '纳格休斯二大爷233',
        avatar: '../../img/friend2.jpg',
        text: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        imgs: [],
        link: {
            img: '../../img/url.jpg',
            text: '链接中的文字'
        },
        timeago:'鬼知道他多久之前',
        likes: ['王二麻子', '路人甲'],
        comment: [{
            name: '王二麻子',
            to: '大锤',
            text: '666'
        }, {
            name: '路人甲',
            to: '',
            text: '233'
        }]
    }]
}

module.exports = {
	getLists: getLists
}