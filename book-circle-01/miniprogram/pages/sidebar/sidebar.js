let bookname = ""
const app = getApp()
Page({


    /**
     * 页面的初始数据
     */
    data: {
        bookName:""
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

    shareLife(){
        bookname = "分享生活"
        wx.setStorageSync('bookname', bookname)
        wx.navigateBack()
    },

    HongLou(e) {
        bookname = "红楼梦"
        wx.setStorageSync('bookname', bookname)
        wx.navigateBack()
    },

    XiYou(e) {
        bookname = "西游记"
        wx.setStorageSync('bookname', bookname)
        wx.navigateBack()
    },

    ShuiHu(e) {
        bookname = "水浒传"
        wx.setStorageSync('bookname', bookname)
        wx.navigateBack()
    },

    SanGuo(e) {
        bookname = "三国演义"
        wx.setStorageSync('bookname', bookname)
        wx.navigateBack()
    }






})