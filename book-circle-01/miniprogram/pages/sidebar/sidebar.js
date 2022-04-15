let bookname = ""
const app = getApp()
Page({


    /**
     * 页面的初始数据
     */
    data: {
        bookName: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // console.log(data);

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

    shareLife() {
        bookname = "分享生活"
        app.globalData.bookName = "分享生活"
        wx.navigateBack()
    },

    HongLou(e) {
        app.globalData.bookName = "红楼梦"
        wx.navigateBack()
    },

    XiYou(e) {
        bookname = "西游记"
        app.globalData.bookName = "西游记"
        wx.navigateBack()
    },

    ShuiHu(e) {
        bookname = "水浒传"
        app.globalData.bookName = "水浒传"
        wx.navigateBack()
    },

    SanGuo(e) {
        bookname = "三国演义"
        app.globalData.bookName = "三国演义"
        wx.navigateBack()
    },

    




})