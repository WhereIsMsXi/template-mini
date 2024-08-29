const app = getApp()

Component({
  data: {
    showBindDialog: false
  },
  methods: {

    // Code => openID
    async loginFlow() {
      let code = await this.wxLogin()
      let data = await wx.$api.User_Login({code})
      app.glbalData.user = data.user
      app.globalData.key = data.key
      app.globalData.openID = data.openid
      this.triggerEvent('callBackFn', data)
    },

    wxLogin() {
      return new Promise((reslove) => {
        wx.login({
          success (res) {
            reslove(res.code)
          }
        })
      })  
    },
  }
})
