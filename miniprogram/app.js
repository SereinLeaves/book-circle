//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({       
        env: 'env-3g1a160v0ad05b6f',
        traceUser: true,
      })
    }

    wx.getSetting({
      success:res=>{
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            lang: "zh_CN",
            success:v=>{             
              this.globalData.userInfo=v.userInfo;               
            }
          })
        }
      }
    })


    this.globalData = {}
  }

})
