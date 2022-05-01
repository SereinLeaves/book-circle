// pages/text/text.js
const db = wx.cloud.database().collection('blog_list')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        list:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    // 查询并返回数据
    search() {
        // wx.cloud.database().collection('blog_list').where({
        db.where({
                content:"add测试"
            }).get()
            .then(res => {
                console.log("返回的数据", res);

            })
        wx.stopPullDownRefresh()
    },

    // 添加
    add(){
        db.add({
            data:{
                content:"add测试"
            }
        })
    },

    del(){
        db.where({
            content:"add测试"
        }).remove()
    },

    request(){
        wx.request({
          url: 'http://api.douban.com/v2/book/1003078',
          data: {},
          header:{
            "Content-Type":"json"
        },
          timeout: 0,
          success: (result) => {
              console.log("请求成功"+requset);
          },
          fail: (res) => {},
          complete: (res) => {},
        })
    },

    

    async clickLike(res){
    
        
        await db.doc("eb85cafe6259133700e108c31bfae810").get().then(
          res=>{
            this.setData({
              list:res.data
            })
            console.log("click成功",res.data)
            console.log("click成功",res)
          },
          
        )
        // db.doc(id).update({
        //   data:{
        //     like:id
        //   }
        // })
      },


})