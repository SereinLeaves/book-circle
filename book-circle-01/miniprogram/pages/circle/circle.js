// pages/circle/circle.js
const app = getApp()
const db = wx.cloud.database().collection("blog_list")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "",
        blogList: []
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

    // 搜索框
    onChange(e) {
        this.setData({
            value: e.detail,
        });
    },
    onSearch() {
        app.globalData.bookName = this.data.value;
        wx.navigateTo({
          url: '../blogCircle/blogCircle'
        })
    },

    // 点击进入圈子
    shareLife(){
        app.globalData.bookName="分享生活"
        wx.navigateTo({
            url: '../blogCircle/blogCircle'
          })
    },

    hongLou(){
        app.globalData.bookName="红楼梦"
        wx.navigateTo({
            url: '../blogCircle/blogCircle'
          })
    },

    xiYou(){
        app.globalData.bookName="西游记"
        wx.navigateTo({
            url: '../blogCircle/blogCircle'
          })
    },

    shuiHu(){
        app.globalData.bookName="水浒传"
        wx.navigateTo({
            url: '../blogCircle/blogCircle'
          })
    },

    sanGuo(){
        app.globalData.bookName="三国演义"
        wx.navigateTo({
            url: '../blogCircle/blogCircle'
          })
    },





})