const app = getApp();

Page({


    /**
     * 页面的初始数据
     */


    data: {
        isPic: true,
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false
    },

    clickAddBlog() {
        if (false) {
            wx.navigateTo({
                //有授权就跳转到添加博客页面
                url: '/pages/addBlog/addBlog',
            })
            console.log(userInfo);
            return;
        } else wx.navigateTo({
            //没有授权就跳转到登陆页面
            // url: '/pages/login/login'
            url: '../login/login'
        })
    },

    // 点击添加博客
// clickAddBlog() {
//     if (app.globalData.userInfo) {

//         console.log("进入发表页面")
//         return
//     } else {

//         wx.navigateTo({
//             url: '/pages/login/login'
//         })
//     }
// },
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
        // setTimeout(() => {
        //     console.log(app.globalData.userInfo);
        // }, 1000)

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

    }
})