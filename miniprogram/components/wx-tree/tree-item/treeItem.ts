import data from '../../../pages/index/data';
// components/wx-tree/tree-item/treeItem.js
import tree from './../tree'
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
    tree: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 是否打开
    open: false,
    // 子节点
    children: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    opendir(){
      this.setData({
        open: !this.data.open
      });
      let id = this.data.treeId;
      let treeData = this.data.tree.data;
      let arr = tree._queryData(treeData, id);

      if(arr && arr.children.length > 0){
        this.setData({
          children: arr.children
        })
      }

      this.triggerEvent('openChenge', {
        id
      });
    }
  }
})
