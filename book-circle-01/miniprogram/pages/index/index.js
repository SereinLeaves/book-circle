const app = getApp()

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
    if (app.hasUserInfo()) {
      this.setData({
        userInfo:app.globalData.userInfo
      })
      
    }
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


  
     //授权
 async goLogin(){
  await app.getUserInfo()
  this.setData({
    userInfo:app.globalData.userInfo
  })
},

    //跳转
    jumpPages(){
      wx.navigateTo({
        url:'../addBlog/index'
      })
    },

    async addBlog(){
      if (app.hasUserInfo()) {
        this.jumpPages()
      }else{
        await this.goLogin()
        this.jumpPages()
      }      
    }
})