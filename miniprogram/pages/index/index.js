const app = getApp();

Page({


    /**
     * 页面的初始数据
     */


    data: {
        isPic: true,
        blogList:[]
    },

    // 获取博客数据
    getBlogData(size){
      wx.cloud.callFunction({
        name:"blog_get_blog_all",
        data:{
          size:size
        }
      }).then(res=>{
        var oldList = this.data.blogList;
        var nsList = oldList.concat(res.result.data)
        this.setData({
          blogList:nsList
        })
          wx.stopPullDownRefresh();
      })
    },

    //点击添加博客
    clickAddBlog(){
        if(app.globalData.userInfo){
          wx.navigateTo({
            url: '/pages/addBlog/addBlog',
          })
          return;
        }  
        wx.navigateTo({
          url:'/pages/login/login'
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.getBlogData();
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
        this.setData({
            blogList:[]
        })
        this.getBlogData(0);
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

    }
})