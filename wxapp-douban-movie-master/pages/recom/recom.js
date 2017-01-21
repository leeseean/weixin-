//获取应用实例
const app = getApp()

Page({
    data: {
        // 初始化数据内容
        title: '加载中...',
        movies: [],
        loading: true
    },
    
    onLoad() {
        app.fetchApi(app.globalData.API_PREFIX + "top250", (err, data) => {
            let hh = data.subjects.length * 100

            // 更新数据
            this.setData({
                title: data.title,
                movies: data.subjects,
                loading: false,
                height: hh
            })
        })
    }
})