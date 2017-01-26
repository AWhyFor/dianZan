//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  	zan: 30,
  	comment: 5
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
  	  data: e.detail.value
  	})
  },
  chosePics: function() {
  	wx.chooseImage({
		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success: function (res) {
			// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
			var tempFilePaths = res.tempFilePaths;
			wx.setStorage({
			  key: 'images',
			  data: res.tempFilePaths
			})
			wx.navigateTo({
				url: '../show/index'
			})
		}
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
