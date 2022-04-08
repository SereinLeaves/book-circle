const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isPic:true,
    blogList:[]
  },


  //授权
  async goLogin() {
    await app.getUserInfo()
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  //跳转
  jumpPages() {
    wx.navigateTo({
      url: '../addBlog/index'
    })
  },
  //添加blog
  async addBlog() {
    if (app.hasUserInfo()) {
      this.jumpPages()
    } else {
      await this.goLogin()
      this.jumpPages()
    }
  },

  //获取blog数据
  getBlogData(size) {
    wx.cloud.callFunction({
      name: "getAllBlog",
      data: {
        size:size
      }
    }).then(res => {
      var oldList = this.data.blogList;
      var newList = oldList.concat(res.result.data)
      this.setData({
        blogList:newList 
      })
    })
    wx.stopPullDownRefresh()
  },

  //点击查看大图
  clickImg(e){
    var {picarr,picindex} = e.currentTarget.dataset
    wx.previewImage({
      urls: picarr,
      current:picarr[picindex]
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBlogData()
    if (app.hasUserInfo()) {
      this.setData({
        userInfo: app.globalData.userInfo
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
    this.setData({
      blogList:[]
    })
    this.getBlogData(0)
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
    this.setData({
      blogList:[]
    })
    this.getBlogData(0)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var size = this.data.blogList.length;
    this.getBlogData(size);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //长按事件
  bindlongpress(){
    console.log("长按");
  },
  jumpContentPage(){
    console.log("点击");
  }

})