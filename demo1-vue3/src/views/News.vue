<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- query传递参数 -->
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
        <button @click="showNews(news)" class="btn">查看新闻</button>
        
        <!-- 第二种写法 -->
        <RouterLink 
        :to="
        {
          path:'/news/detail',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }
          
        }
        ">{{ news.title }}</RouterLink>


        <!-- params传递参数 -->
         <!-- <RouterLink :to="
         {
          name:'detail',
          params:{
            id:news.id,
            title:news.title,
            content:news.content

          }
          
         }">{{ news.title }}</RouterLink> -->
      </li>
    </ul>
    <div class="new-content">
      <!-- 展示区 -->
       <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue';
  import {type NewsList,type News } from '../type';
  import { RouterLink,useRouter} from 'vue-router';
  const router=useRouter()

  let newsList=reactive<NewsList>([
    { id: 1, title: '《鸣潮》给《原神》上压力？Q2出海TOP1是怎样炼成的？ ',content:'在全球游戏市场竞争日趋激烈的今天，一款国产开放世界手游正迅速打破格局、强势登场——它就是《鸣潮》。'},
    { id: 2, title: '【鸣潮】弗洛洛实验藏着大玄机？难道说和联动有关？' ,content:'哎呀，弗洛洛版本还没过一半鸣潮就发新版本日月实机，库洛怎么这么坏啊！这三个共鸣者代表三个极端，弗洛洛是极致的遗憾，奥古斯塔是极致的下头太刀，尤诺是极致的玉！根据小大兔头理论，小的那边赢了，把为弗洛洛而难过的哈基漂们拉了出来。'},
    { id: 3, title: '【鸣潮】震惊!弗洛洛的彼岸在散华眼里居然是鬼屋？',content:'经过2.5的针锋相对，弗洛洛被一剑打进彼岸里看广告复活了，虽然结果不乏遗憾，但她还是释然了，给我们留下了彼岸的入口，进入彼岸还在傲娇却还是邀请我们来家里做客一起欣赏她收藏的古典音乐，二人还是形同陌路，但命运的丝线还远远没有分开，这种分分离离纠缠不清的感觉总是有些暧昧。'},
    { id: 4, title: '【鸣潮】尤诺上线，鸣潮在大带派时代越走越远',content:'你们有没有发现一个恐怖的事情，鸣潮越来越像明日方舟脚臭吧了？从卡提希娅开始，小卡凉鞋小脚丫' }
  ])

  function showNews(news:News){
    router.push({
          path:'/news/detail',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }
          
        })
  }
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.new-content {
  width: 80%;
  height: 90%;
  border: 2px solid;
  margin-top: 20px;
  border-radius: 10px;
}
.news li::marker{
  color:#64967E ;
}
.news .btn{
  color: #64967E;

}

/* ...existing code... */
.news ul {
  margin-top: 30px;
  padding-left: 10px;
}

.news li {
  margin-bottom: 16px;
  padding: 8px 0;
  transition: background 0.2s;
  border-bottom: 1px solid #e0e0e0;
}

.news li:hover {
  background: #f6fff8;
}

.news li > .btn {
  margin-right: 12px;
  padding: 6px 16px;
  border: none;
  border-radius: 6px;
  background: #e6f4ea;
  color: #64967E;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(100,150,126,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}

.news li > .btn:hover {
  background: #c8e6c9;
  box-shadow: 0 2px 8px rgba(100,150,126,0.15);
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
  transition: color 0.2s;
}

.news li > a:hover {
  color: #3c6e4a;
  text-decoration: underline;
}

.new-content {
  width: 80%;
  height: 90%;
  border: 2px solid #64967E;
  margin-top: 20px;
  border-radius: 10px;
  background: #f6fff8;
  box-shadow: 0 2px 12px rgba(100,150,126,0.08);
  padding: 20px;
  overflow: auto;
}
/* ...existing code... */
</style>