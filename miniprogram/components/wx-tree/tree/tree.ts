import tree from './../tree'
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    // 数据列表
    data: [],
    // 实例数据
    tree: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openChenge({ detail }) {
      if (detail.id) {
        // console.log(tree)
        // console.log(this.selectComponent(detail.id))
      }
    },
    initTree(options: Opt){
      this.setData({
        tree : new tree({
          el: this,
          ...options
        })
      })
    }
  }
})
