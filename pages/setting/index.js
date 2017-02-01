//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  	zan: wx.getStorageSync('zan') || 30,
  	comment: wx.getStorageSync('comment') || 5,
    pics: wx.getStorageSync('images') || []
  },
  textChange: function(e) {
  	wx.setStorage({
  	  key: 'text',
  	  data: e.detail.value
  	})
  },
  zanChange: function(e) {
  	wx.setStorage({
  	  key: 'zan',
  	  data: e.detail.value
  	})
  },
  commentChange: function(e) {
  	wx.setStorage({
  	  key: 'comment',
  	  data: e.detail.value,
      pics: []
  	})
  },
  chosePics: function() {
    var self = this;
  	wx.chooseImage({
  		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  		success: function (res) {
  			// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
  			var tempFilePaths = res.tempFilePaths;
        var storagePaths = self.data.pics;
        var paths = storagePaths.concat(tempFilePaths);

  			wx.setStorage({
  			  key: 'images',
  			  data: paths
  			})
  			self.setData({
          pics: paths
        })
  		}
  	})
  },
  delPics: function(e) {
    var idx = e.currentTarget.dataset.idx;
    var storagePaths = this.data.pics;
    storagePaths.splice(idx, 1);
    wx.setStorage({
      key: 'images',
      data: storagePaths
    })
    this.setData({
      pics: storagePaths
    })
  },
  gotoShow: function() {
    wx.navigateTo({
      url: '../show/index'
    })
  },
  onShow: function() {
  	wx.setNavigationBarTitle({
  	  title: '点赞狂魔'
  	})
  },
  onLoad: function() {
      var self = this;
      wx.login({
          success: function () {
              wx.getUserInfo({
                  success: function (res) {
                      wx.setStorage({
                          key: 'name',
                          data: res.userInfo.nickName
                      })
                      wx.setStorage({
                          key: 'avatar',
                          data: res.userInfo.avatarUrl
                      })
                  }
              })
          }
      })
  }
})
