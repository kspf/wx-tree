// 树组件
class tree implements Tree,Options {
  el: WechatMiniprogram.Component.TrivialInstance;
  data: Array<Data>;
  //构造函数初始化组件
  constructor (options: Options) {
    this.el = options.el;
    this.data = options.data;

    this.initData(this.data);
  }
  // 查找数据
  initData(arr: Array<Data>){
    let data = [];
    for(let i=0; i<arr.length; i++){
      data.push({
        disabled: arr[i].disabled,
        id: arr[i].id,
        lable: arr[i].lable,
      })
    }
    this.el.setData({
      data
    })
  }

  // 查询下级数据
  static _queryData(arr: Array<Data>, id: string | number): Data | undefined {
    let selectData = tree._forEach(arr, item => item.id === id);
    
    if(selectData){
      return selectData
    }else{
      return undefined
    }
  }

  //按条件循环
  static _forEach(arr: Data[], callback: ((obj: Data) => boolean) ): Data | void {
    for(let i = 0; i< arr.length; i++){
      let item = arr[i];
      if(callback(item)) return item;
      if(item.children && item.children.length > 0){
        tree._forEach(item.children, callback);
      }
    }
  }
}

export default  tree;