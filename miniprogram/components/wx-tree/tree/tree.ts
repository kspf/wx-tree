// components/wx-tree/tree/tree.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    data: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openChenge({ detail }){
      if(detail.id){
        console.log(this.selectComponent(detail.id))
      }
    }
  }
})
