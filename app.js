App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight
        this.globalData.PixelRatio = e.pixelRatio
        this.globalData.ScreenHeight = e.creenHeight * 2
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50
        }
      }
    })
  },
  onHide: function() {
    wx.clearStorage()
  },
  globalData: {
    // Device info
    StatusBar: null,
    CustomBar: null,
    PixelRatio: null,
    ScreenHeight: null,

    user: {},
    key: '',
    openID: '',
  }
})