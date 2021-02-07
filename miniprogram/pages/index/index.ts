
import treeData  from './data'
Page({
  data:{
    
  },
  onLoad(){
    let tree = this.selectComponent("#Tree")
    tree.initTree({
      data: treeData
    })
  } 
})