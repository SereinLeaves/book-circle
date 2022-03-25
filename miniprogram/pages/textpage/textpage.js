//根据官方文档 做了一些修改
Page({
    data: {
      userInfo: {},
      hasUserInfo: false,
      canIUseGetUserProfile: false,
    },
    onLoad() {
      //先请求自定义接口，获取上次存的useInfo
    //   wx.request({
    //     url: '../login/login', //仅为示例，并非真实的接口地址
    //     data: {},
    //     success (res) {
    //       console.log(res.useInfo)
    //       //判断之前是否已获取并存储过用户信息
    //       if(res.useInfo){
              
    //       }else {
    //           //这里不要使用 wx.canIuse来判断，避免一些适配问题
    //           if (wx.getUserProfile) {  //直接使用官方推荐的方法
    //             this.setData({
    //               canIUseGetUserProfile: true
    //             })
    //           }
    //       }
    //     }
    //   })
    },
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '需要你的信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          //这里需要将获取的 res.userInfo 存起来，你可以存在数据库，也可以存在local storage里
          //wx.request...请求接口
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // getUserInfo(e) {
    //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    //   this.setData({
    //     userInfo: e.detail.userInfo,
    //     hasUserInfo: true
    //   })
    // },
  })