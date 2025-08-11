import { defineStore } from "pinia";

// export const usePoemStore = defineStore('poem', {

//   state() {
//     return {
//       poems: JSON.parse(localStorage.getItem('poems') as string) || [
//         { id: 1, content: '明月几时有？把酒问青天。' },
//         { id: 2, content: '十年生死两茫茫，不思量，自难忘。' },
//         { id: 3, content: '回首向来萧瑟处，归去，也无风雨也无晴。' },
//         { id: 4, content: '采菊东篱下，悠然见南山。' },
//         { id: 5, content: '大漠孤烟直，长河落日圆。' },
//         { id: 6, content: '人生得意须尽欢，莫使金樽空对月。' },
//         { id: 7, content: '江南可采莲，莲叶何田田。' },
//         { id: 8, content: '千山鸟飞绝，万径人踪灭。' },
//         { id: 9, content: '落霞与孤鹜齐飞，秋水共长天一色。' },
//         { id: 10, content: '竹外桃花三两枝，春江水暖鸭先知。' },
//         { id: 11, content: '山重水复疑无路，柳暗花明又一村。' },
//         { id: 12, content: '野火烧不尽，春风吹又生。' },
//         { id: 13, content: '举杯邀明月，对影成三人。' }
//       ]
//     }
//   }
// })
import { reactive } from 'vue'

export const usePoemStore = defineStore('poem', () => {
  let poems = reactive(
    JSON.parse(localStorage.getItem('poems') as string) || [
      { id: 1, content: '明月几时有？把酒问青天。' },
      { id: 2, content: '十年生死两茫茫，不思量，自难忘。' },
      { id: 3, content: '回首向来萧瑟处，归去，也无风雨也无晴。' },
      { id: 4, content: '采菊东篱下，悠然见南山。' },
      { id: 5, content: '大漠孤烟直，长河落日圆。' },
      { id: 6, content: '人生得意须尽欢，莫使金樽空对月。' },
      { id: 7, content: '江南可采莲，莲叶何田田。' },
      { id: 8, content: '千山鸟飞绝，万径人踪灭。' },
      { id: 9, content: '落霞与孤鹜齐飞，秋水共长天一色。' },
      { id: 10, content: '竹外桃花三两枝，春江水暖鸭先知。' },
      { id: 11, content: '山重水复疑无路，柳暗花明又一村。' },
      { id: 12, content: '野火烧不尽，春风吹又生。' },
      { id: 13, content: '举杯邀明月，对影成三人。' }
    ]

  )
  return { poems }
})