// app.js
var that = this;

App({
  globalData:{
    userInfo:null,
    bookName:""
  },
    
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-8g213gzz7833476d',
        traceUser: true,
      });
    }

    this.globalData = {};
  },

  //判断是否有用户信息
  hasUserInfo(){
    let userInfo = wx.getStorageSync('userInfo')
    if (this.globalData.userInfo || userInfo) {
      this.globalData.userInfo = userInfo
      return true
    }else
    return false
  },


  //获取用户信息
  async getUserInfo(){

    let p = await new Promise((resolve,reject)=>{
      
     wx.getUserProfile({
        desc: '授权需要',
        success:res=>{
          resolve(res)          
        }
      })
    })

    this.globalData.userInfo = p.userInfo
    // app.globalData.userInfo= {name: 'Tom', age: 23};
    wx.setStorageSync('userInfo', p.userInfo)

  },
  
});
