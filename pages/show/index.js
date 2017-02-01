//index.js
//获取应用实例
var random = require('./random');
var utils = require('../../utils/util');
var app = getApp()

Page({
    data: {
        bgimg: '../../img/noname2.jpg',
        lists: []
    },
    getData: function() {
        var self = this;
    },
    onLoad: function() {
        wx.showToast({
            title: '下拉可刷新其他朋友圈数据',
            duration: 3500
        });
    },
    onShow: function() {
        this.setData({
            lists: random.getLists(),
            name: wx.getStorageSync('name'),
            avatar: wx.getStorageSync('avatar')
        });
        wx.setNavigationBarTitle({
            title: '朋友圈'
        });
    },
    // 图片加载
    imageLoad: function(img) {
        var idx = img.currentTarget.dataset.idx;
        var lists = this.data.lists;
        lists[idx] = Object.assign(lists[idx], utils.autoImage(img, 200));
        this.setData({
            lists: lists
        })
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
        wx.showToast({
            title: '已刷新其他朋友圈数据',
            duration: 1000
        });
        // 置空，否则图片不会执行onload
        this.setData({
            lists: []
        })
        this.onShow();
    }
})