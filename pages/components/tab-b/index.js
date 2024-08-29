Component({
  data: {
   
  },
  created() {

  },
  methods: {
    goPackage() {
      wx.navigateTo({
        url: '/package-b/index/index',
      })
    }
  }
})