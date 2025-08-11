import mitt from "mitt";

const emitter = mitt()
// 绑定事件


// setTimeout(() => {
//   // *通配符
//   emitter.off('*')
//   // emitter.all.clear
// }, 3000)

export default emitter
