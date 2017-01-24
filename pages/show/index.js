//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        name: '船副',
        avatar: '../../img/me2.jpg',
        say: 'hiaidoa',
        bgimg: '../../img/noname2.jpg',
        lists: [{
            name: '纳格休斯二大爷',
            avatar: '../../img/friend2.jpg',
            text: '测试',
            imgs: ['../../img/wideImg.jpg','../../img/longImg.jpg','../../img/bigImg.jpg','../../img/smallImg1.jpg','../../img/smallImg3.jpg'],
            link: {
                img: '../../img/url.jpg',
                text: '链接中的文字'
            },
            comment: [{
                name: '王二麻子',
                to: '大锤',
                text: '666'
            }, {
                name: '路人甲',
                to: '',
                text: '233'
            }],
            likes: ['王二麻子', '路人甲']
        },{
            name: '纳格休斯二大爷',
            avatar: '../../img/friend2.jpg',
            text: '测试',
            imgs: ['../../img/wideImg.jpg','../../img/smallImg2.jpg','../../img/smallImg5.jpg','../../img/smallImg6.jpg'],
            link: {
                img: '../../img/url.jpg',
                text: '链接中的文字'
            },
            comment: [{
                name: '王二麻子',
                to: '大锤',
                text: '666'
            }, {
                name: '路人甲',
                to: '',
                text: '233'
            }],
            likes: ['王二麻子', '路人甲']
        }]
    },
    onLoad: function() {
        this.setData({
            say: 'hello'
        })
    },
    getData: function() {
        var self = this;
    }
})