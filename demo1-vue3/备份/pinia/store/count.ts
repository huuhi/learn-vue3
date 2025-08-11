import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  actions: {
    increment(value: number) {
      this.sum += value
    }
  },
  state() {
    return {
      sum: 2,
      school: 'gdpt',
      address: '佛山'
    }
  },
  getters: {
    bigSum: state => state.sum * 10,
    upperSchool(): string {
      return this.school.toUpperCase()
    }
  }
})
