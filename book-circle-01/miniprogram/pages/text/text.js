// pages/text/text.js
const db = wx.cloud.database().collection('blog_list')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {}
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
          url: 'https://i.weread.qq.com/book/info?bookId=',
          success: (result) => {
              console.log(result);
          },
          fail: (res) => {},
          complete: (res) => {},
        })

    },


})