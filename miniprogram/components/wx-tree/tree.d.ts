//传入参数
interface Options {
  el: object,
  data: Array<Data>,
}

//类需要参数
interface Tree  {
  // 页面节点
  el: object,
  data: Array<Data>,
}
// data种每一项
interface Data {
  label: string,
  children: Array<Data>,
  disabled: boolean,
  id: string | number,
}

class tree implements Tree {
  el: object;
  data: Array<Data>;
  constructor (options: Options) {
    this.el = options.el;
    this.data = options.data;
  }
}



export default  tree;

/** 
 * label
 * children
 * disabled
 * id 唯一识别
*/