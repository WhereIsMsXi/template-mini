Component({
  data: {
   
  },
  created() {

  },
  methods: {
    goPackage() {
      wx.navigateTo({
        url: '/package-a/index/index',
      })
    }
  }
})