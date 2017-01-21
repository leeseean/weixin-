//获取应用实例
const app = getApp()

Page({
    data: {
        // 初始化数据内容
        title: '',
        movie: {},
        loading: true
    },
    
    onLoad(params) {
        // 获取电影条目信息
        app.fetchApi(app.globalData.API_PREFIX + "subject/" + params.id, (err, data) => {
            // 更新数据
            this.setData({
                title: data.title,
                movie: data,
                loading: false
            }),

            //设置页面标题
            wx.setNavigationBarTitle({
                title: this.data.title + ' « 电影 « 豆瓣'
            })
        })
    },

    onReady() {
        //页面开始标题
        wx.setNavigationBarTitle({
            title: this.data.title + ' « 电影 « 豆瓣'
        })
    }
})