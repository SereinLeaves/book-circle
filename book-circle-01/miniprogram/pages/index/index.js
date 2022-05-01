const app = getApp()
const db = wx.cloud.database().collection("blog_list")
const command = wx.cloud.database().command
// const openid = wx.cloud.getWXcontext().OPENID
const openid = wx.cloud.get

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isPic: true,
    da: [],
    bookname:"",
    list:[],
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
    // console.log(this.blog_id);
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
      blogList: []
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
      blogList: []
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
        size: size
      }
    }).then(res => {
      var oldList = this.data.blogList;
      var newList = oldList.concat(res.result.data)
      this.setData({
        blogList: newList,
      })
    })
    wx.stopPullDownRefresh()
  },

  //点击查看大图
  clickImg(e) {
    var {
      picarr,
      picindex
    } = e.currentTarget.dataset
    wx.previewImage({
      urls: picarr,
      current: picarr[picindex]
    })

  },


//用户删除已发布的内容
  delContent(e) {
    wx.showModal({
      title: '警告',
      content: '确定要删除?删除后不可恢复!',
      success(res) {
        if (res.confirm) {
          var blog_id = e.currentTarget.dataset.id;
          wx.cloud.database().collection('blog_list')
            .doc(blog_id)
            .remove()
            .then(res => {
              console.log("删除成功");
            })
            wx.reLaunch({
              url: '../index/index'
            })
        } else if (res.cancel) {
          console.log('取消删除')
        }
      }
    })
  },

  //进入圈子
  async enterCircle(e){
   var id = e.currentTarget.dataset.id
    console.log(id);
    await db.where({
      _id:id
    })
    .get()
    .then(res=>{
      this.setData({
        bookname:res.data[0].bookName
      })
    app.globalData.bookName = res.data[0].bookName
    })
    wx.navigateTo({
      url: '../blogCircle/blogCircle'
    })
  },

  // 点赞
  async clickLike(e){
    
    // var id = e.currentTarget.dataset.id
    var {id,index} = e.currentTarget.dataset
    console.log(id);
    wx.cloud.callFunction({
      name:"addLike",
      data:{
        _id:id
      }
    }).then(res=>{
      console.log(res);
    }
    )
  },

  // 评论
  clickComment(){

  },

  // 收藏
  clickCollect(){


  },

  // 分享
  // clickShare(){

  // },



})