//index.js
//获取应用实例
var random = require('./random');
var utils = require('../../utils/util');
var app = getApp()

Page({
    data: {
        bgimg: '../../img/noname2.jpg',
        lists: [],
        // 不涉及视图渲染的逻辑型数值
        // 单张图片自适应计数
        logicImageCount: 0
    },
    getData: function() {
        var self = this;
    },
    onLoad: function() {
        wx.showToast({
            title: '下拉可刷新其他朋友圈数据',
            duration: 1000
        });
    },
    onShow: function () {
      this.setData({
        lists: random.getLists(),
        logicImageCount: 0,
        name: wx.getStorageSync('name'),
        avatar: wx.getStorageSync('avatar')
      })
    },
    // 图片加载
    imageLoad: function(img) {
        var count = this.data.logicImageCount;
        var lists = this.data.lists;
        var setCount = 0;
        lists.forEach((em) => {
            if (setCount === count) {
                // 单张图片
                em = Object.assign(em, utils.autoImage(img, 200))
            }
            if (em.imgs.length === 1) {
                setCount ++;
            }
        })
        this.setData({
            logicImageCount: count + 1,
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