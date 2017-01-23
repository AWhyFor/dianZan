//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    say: 'hi',
    list: [10, 24, 38, 90]
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
