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