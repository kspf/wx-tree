
import Tree from './../../components/wx-tree/tree';
import treeData  from './data'
Page({
  data:{
    
  },
  onLoad(){
    const tree = new Tree({
      el: this.selectComponent("#Tree"),
      data: treeData
    })

    console.log(tree, "书组件")
  } 
})