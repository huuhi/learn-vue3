import { ref, customRef } from "vue";

export default function (initValue: any, delay: number = 0) {
  let timer: number

  let msg = customRef((track, trigger) => {
    return {
      get() {
        track()//告诉vue，对这个数据持续关注，一旦变化就更新
        return initValue
      },
      set(val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = val
          trigger()//通知vue数据变化了
        }, delay)
      }
    }
  })
  return { msg }
}