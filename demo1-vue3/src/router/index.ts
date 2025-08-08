import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import RetailNews from '../views/DetailNews.vue'
import DetailNews from '../views/DetailNews.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'detail',
          // 子集不需要写 ‘/’  ?表示可选
          // path: 'detail/:id/:title/:content?',
          path: 'detail',
          component: DetailNews,
          // props 第一种写法，将所有params参数传递给组件
          // props: true
          // 第二种,函数,自定义
          props(route) {
            return route.query
          }
        }
      ]
    }, {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router