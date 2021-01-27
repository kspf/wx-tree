//传入参数
interface Options {
  // 节点
  el: WechatMiniprogram.Component.TrivialInstance,
  // 传入源数据
  data: Array<Data>,
  // 
}
//类需要参数
interface Tree  {

}
// data种每一项
interface Data {
  lable: string,
  children: Array<Data>,
  disabled?: boolean,
  id: string | number,
}
// 树组件
class tree implements Tree,Options {
  el: WechatMiniprogram.Component.TrivialInstance;
  data: Array<Data>;
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
}

export default  tree;