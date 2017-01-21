// 创建应用程序对象
App({

	// ========== 全局数据对象（整个应用程序共享） ==========
	globalData: {
		hasLogin: false,
		API_PREFIX: "https://api.douban.com/v2/movie/",
		userInfo: null
	},

	// ========== 应用程序全局方法 ==========
	fetchApi(url, data, callback) {
		let opt = {
			url,
			data: data,
			header: {
				'Content-Type': 'json'
			},
			success(res) {
				callback(null, res.data)
			},
			fail(e) {
				callback(e)
			}
		};

		if (Object.prototype.toString.call(data) === '[object Function]') {
			opt.data = {};
			callback = arguments[1];
		}

		wx.request(opt)
	},

	// ========== 生命周期方法 ==========
	onLaunch() {
		// 应用程序启动时触发一次
		console.log('App Launch')
	},

	onShow() {
		// 当应用程序进入前台显示状态时触发
		console.log('App Show')
	},
	onHide() {
		// 当应用程序进入后台状态时触发
		console.log('App Hide')
	},
	getUserInfo(cb) {
		// 获取用户信息
		var that = this;
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			//调用登录接口
			wx.login({
				success: function () {
					wx.getUserInfo({
						success: function (res) {
							that.globalData.userInfo = res.userInfo;
							typeof cb == "function" && cb(that.globalData.userInfo)
						}
					})
				}
			});
		}
	}
})