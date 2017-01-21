//获取应用实例
const app = getApp()

Page({
    data: {
        // 初始化数据内容
        title: '请输入搜索词',
        movies: [],
        loading: false
    },
    
    // 搜索方法
    search(e) {
        // 不存在搜索词
        if(!e.detail.value) {
            return
        }

        this.setData({
            title: '加载中...',
            loading: true
        })

        app.fetchApi(app.globalData.API_PREFIX + 'search', {
            q: e.detail.value
        }, (err, data) => {

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