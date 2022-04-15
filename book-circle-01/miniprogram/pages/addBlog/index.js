// pages/addBlog/index.js
import common from "../../common/common.js"
var fileIDArr = [];
const app = getApp();
const db = wx.cloud.database().collection("blog_list")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    fileList: [],
    blogObj: {},
    show: false,
    bookName: ""
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
    this.setData({
      // bookName:wx.getStorageSync('bookname')
      bookName:app.globalData.bookName
    })
    // wx.clearStorageSync()
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


  //上传数据到数据库
  onSubmit(e) {
    wx.showLoading({
      title: '发布中...',
      mask: true
    })
    this.setData({
      "blogObj.content": e.detail.value.content,
      "blogObj.userInfo": app.globalData.userInfo,
      "blogObj.bookName": this.__data__.bookName
    })

    //没有图片就直接上传
    if (this.data.fileList.length == 0) {
      this.pushDatabase();
      return;
    }
    //有图片就和图片一起上传
    //循环上传每一张图片
    this.data.fileList.forEach(item => {
      this.uploadImg(item.url)
    })
  },

  //读取图像
  readPic(e) {
    // console.log(e.detail.file);
    this.setData({
      fileList: e.detail.file
    })
  },

  //删除预览图
  delPic(e) {
    var index = e.detail.index;
    var _fileList = this.data.fileList;
    _fileList.splice(index, 1);
    this.setData({
      fileList: _fileList
    })
  },

  //上传图像
  uploadImg(temp) {
    var filename = "blogImg/" + common.ranFile() + common.houZhui(temp)
    wx.cloud.uploadFile({
      cloudPath: filename,
      filePath: temp
    }).then(res => {
      fileIDArr.push(res.fileID)
      // console.log(fileIDArr.length);
      if (fileIDArr.length == this.data.fileList.length) {
        this.setData({
          "blogObj.picarr": fileIDArr
        })

        this.pushDatabase();
      }

    })
  },

  //上传到数据库
  pushDatabase() {

    //调用云函数addBlog,添加到数据库
    wx.cloud.callFunction({
      name: "addBlog",
      data: {
        blogObj: this.data.blogObj
      }
    }).then(res => {
      console.log(res)
      wx.hideLoading()
      wx.showToast({
        title: '发布成功',
        mask: true
      })
    })
    setTimeout(() => {
      wx.navigateBack({
        url: '/miniprogram/pages/index/index'
      })
    }, 1500)
  },
  // 输入内容
  inputContent(val) {
    this.setData({
      "blogObj.content": val.detail.value
    })
  },

  // 选择圈子
  circle() {
    wx.navigateTo({
      url: '../sidebar/sidebar'
    })
    
  }


})