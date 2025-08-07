import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  let dogs = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_4038.jpg'
  ])
  async function getDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogs.push(result.data.message)
    } catch (error) {
      alert('获取狗狗图片失败，请稍后再试')
      console.error('获取狗狗图片失败:', error);
    }
  }
  onMounted(() => {
    getDog()
  })

  return {
    dogs,
    getDog
  }
}
