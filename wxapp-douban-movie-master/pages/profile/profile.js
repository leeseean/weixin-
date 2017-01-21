var app = getApp()

Page({
	data: {
		userInfo: {}
	},
	onLoad() {
		var that = this
		// 调用应用实例的方法获取全局数据
		app.getUserInfo(function(userInfo) {
			if(userInfo.province === 'Beijing') {
				userInfo.province = '北京'
			}
			if(userInfo.city === 'Chaoyang') {
				userInfo.city = '朝阳'
			}
			console.log(111)
			// 更新数据
			that.setData({
				userInfo: userInfo
			})
		})
	}
})