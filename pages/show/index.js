//index.js
//获取应用实例
var random = require('./random');
var app = getApp()

Page({
    data: {
        name: '船副',
        avatar: '../../img/me.jpg',
        say: 'hiaidoa',
        bgimg: '../../img/noname2.jpg',
        lists: [{
            name: '纳格休斯二大爷',
            avatar: '../../img/friend2.jpg',
            text: '测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试大姨妈家二大爷和后也恍恍惚惚',
            textlength: 160,
            imgs: ['../../img/smallImg5.jpg'],
            link: {
                show: false
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
        }, {
            name: '迷之老大',
            avatar: '../../img/friend2.jpg',
            text: '',
            textlength: 0,
            imgs: ['../../img/wideImg.jpg','../../img/smallImg2.jpg','../../img/smallImg5.jpg','../../img/smallImg6.jpg'],
            link: {
                show: true,
                img: '../../img/url.jpg',
                text: '链接中的文字'
            },
            timeago:'一百年前',
            likes: [],
            comment: [{
                name: '王二麻子',
                to: '大锤',
                text: '666'
            }, {
                name: '路人甲',
                to: '',
                text: '233'
            }]
        }, {
            name: '迷之老大',
            avatar: '../../img/friend2.jpg',
            text: '测试',
            textlength: 2,
            imgs: ['../../img/bigImg.jpg',],
            link: {
                show: true,
                img: '../../img/url.jpg',
                text: '链接中的文字'
            },
            timeago:'一百年前',
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
    },
    onLoad: function() {
        var self = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        self.setData({
                            name: res.userInfo.nickName,
                            avatar: res.userInfo.avatarUrl
                        })
                    }
                })
            }
        })
    },
    getData: function() {
        var self = this;
    },
    onPullDownRefresh: function(){
        this.setData({
            lists: random.getLists()
        })
    },
    refresh: function() {
        this.setData({
            lists: random.getLists()
        })
    }
})