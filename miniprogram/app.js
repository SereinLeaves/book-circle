// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'env-3g1a160v0ad05b6f',
        traceUser: true,
      });
    }

    // 获取用户数据
    /*
    *     https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html/
    * AuthSetting 用户授权设置信息，详情参考权限
    * scope.userInfo  是否授权用户信息，对应接口 wx.getUserInfo
    *
    * */
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
});
