// components/wx-tree/tree-item/treeItem.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lable: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    treeId: {
      type: String ||  Number
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    opendir(){
      let id = this.data.treeId;
      console.log(this.selectComponent(id));
      console.log(id)
      this.triggerEvent('openChenge', {
        id
      });
    }
  }
})
