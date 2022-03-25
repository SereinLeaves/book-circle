// pages/addBlog/addBlog.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "",
        fileList: []
    },

    onsubmit(v) {
        console.log(v)
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },


    // 删除预览图
    delPic(e){
        console.log(e);
      var index = e.detail.index;
      var _fileList = this.data.fileList;
      _fileList.splice(index,1);
      this.setData({
          fileList:_fileList
      })
    },

    // 读取图像
    readPic(e) {
        this.setData({
            fileList:e.detail.file
        })
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

    }
})