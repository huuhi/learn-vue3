import { computed, ref } from 'vue'

export default function () {
  let sum = ref(0)
  function addSum() {
    sum.value += 1
  }
  let bigSum = computed(() => sum.value * 10)

  return {
    sum,
    addSum,
    bigSum
  }
}