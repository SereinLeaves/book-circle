// pages/addBlog/addBlog.js
import common from "../../common/common.js"

var fileIDArr = [];
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "",
        fileList: [],
        addrssArr: [],
        blogObj: {}
    },
    //输入框内容改变
    contentChange(val) {
        this.setData({
            "blogObj.content": val.detail.value
        })
    },

    //提交表单
    onsubmit(e) {
        this.setData({
            "blogObj.title": e.detail.value.title,
            "blogObj.content": e.detail.value.content,
            "blogObj.phone": wx.getSystemInfoSync().brand
            //   "blogObj.userInfo":app.globalData.userInfo
        })
        // this.pushDatabase();
        this.data.fileList.forEach(item => {
            console.log(item.url);
            this.uploading(item.url)
        })
    },
    //上传图片
    uploading(temp) {
        var filename = "blogImg/" + common.ranFile() + common.houZhui(temp)
        wx.cloud.uploadFile({
            cloudPath: filename,
            filePath: temp
        }).then(res => {
            // console.log(res.fileID)
            fileIDArr.push(res.fileID)
            console.log(fileIDArr.length)
            if(fileIDArr.length==this.data.fileList.length){
                this.setData({
                    "blogObj.picArr":fileIDArr
                })
                this.pushDatabase();
            }

        })
    },
    
    pushDatabase() {
        //添加到数据库
        wx.cloud.callFunction({
            name: "blog_add_one",
            data: {
                blogObj: this.data.blogObj
            }
        }).then(res => {
            console.log(res)
        })
    },

//添加图片
    clickAddress() {
        wx.chooseLocation({
            success: res => {
                this.setData({
                    "blogObj.addName": res.name
                })
            }
        })
    },

    // 删除预览图
    delPic(e) {
        console.log(e);
        var index = e.detail.index;
        var _fileList = this.data.fileList;
        _fileList.splice(index, 1);
        this.setData({
            fileList: _fileList
        })
    },

    // 读取图像
    readPic(e) {
        this.setData({
            fileList: e.detail.file
        })
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

    }
})