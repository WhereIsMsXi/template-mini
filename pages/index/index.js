Page({
  data: {
    currentTabbar: 'tab-a',
    tabbars: [
      {
        name: 'tab-a',
        imgPrefix: '/static/images/index/tab-a',
        title: 'tab-a',
      },
      {
        name: 'tab-b',
        imgPrefix: '/static/images/index/tab-b',
        title: 'tab-b',
      },
      {
        name: 'tab-c',
        imgPrefix: '/static/images/index/tab-c',
        title: 'tab-c',
      },
      {
        name: 'tab-d',
        imgPrefix: '/static/images/index/tab-d',
        title: 'tab-d',
      },
    ]
  },
  changeTabbar(e) {
    this.setData({
      currentTabbar: e.currentTarget.dataset.current
    })
  },
})