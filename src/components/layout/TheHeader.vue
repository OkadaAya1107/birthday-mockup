<template>
  <section>
    <the-container>
      <nav>

       <!-- ロゴ -->
       <div class="logo">
        <img src="/images/logo/logo.png" alt="ロゴ">
       </div>

       <!-- SNSアイコン -->
       <div class="icons">
         <ul>
          <li v-for="icon in iconsStore.icons" :key="icon.name">
            <img :src="icon.path" alt="アイコン">
          </li>
         </ul>
       </div>

       <!-- 各種ボタン -->
       <div class="buttons">
         <ul>
          <li v-for="button in buttons" key="button.name">
          <a :href="button.url" target="_blank">
          <the-button :style="{backgroundColor: button.color}">
            {{ button.name }}
          </the-button>
          </a>
          </li>
         </ul>
       </div>

       <!-- モバイル版ハンバーガーメニュー -->
         <div class="hamburger-menu">
          <div class="hamburger-container">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <p>Menu</p>
         </div>



      </nav>
    </the-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useIconsStore } from '@/stores/icons.js';

const iconsStore = useIconsStore();

const buttons = ref([
  {
    name:'店舗検索',
    url: 'https://www.s-birthday.com/category/open/',
    color: '#ff9900'
  },
  {
    name:'チラシ',
    url: 'https://www.shimamura.gr.jp/birthday/flier/?_gl=1*13bk3uw*_ga*Njk3MDc4Njc4LjE3MTE0MjA3MTU.*_ga_NFJ6QSG60N*MTcxMTUxMDQ5MS40LjEuMTcxMTUxMDU0NC4wLjAuMA..',
    color: '#0096e3'
  },
  {
    name:'オンラインストア',
    url: 'https://www.shop-shimamura.com/?b=birthday&_gl=1*13bk3uw*_ga*Njk3MDc4Njc4LjE3MTE0MjA3MTU.*_ga_NFJ6QSG60N*MTcxMTUxMDQ5MS40LjEuMTcxMTUxMDU0NC4wLjAuMA..',
    color: '#e71f19'
  },
  {
    name:'しまむらグループ',
    url: 'https://www.shimamura.gr.jp/?_gl=1*1ssvwb6*_ga*Njk3MDc4Njc4LjE3MTE0MjA3MTU.*_ga_NFJ6QSG60N*MTcxMTUxMDQ5MS40LjEuMTcxMTUxMDU0NC4wLjAuMA..',
    color: '#5b3218'
  }
]);
</script>

<style scoped>
section {
  background-color: #f8deba;
  padding: 24px 0;
  border-top: 4px solid #5b3219;
}

nav {
  display: flex;
  align-items: center;
}

li {
  list-style: none;
}

ul {
  display: flex;
}

.icons img {
  width: 28px;
  height: 28px;
}
.icons {
  margin-right: 60px;
}

.icons li {
  margin-right: 10px;
}

.buttons li {
  margin-right: 10px;
}

button {
  color: white;
  font-size: 11px;
}

/* ハンバーガーメニュー */
.hamburger-menu {
  cursor: pointer;
  display: none;
  margin-left: auto;
}

.hamburger-menu p {
  margin: 0;
  color: #5b3218;
}

.hamburger-container {
  border: #5b3218 2px solid;
  padding: 2px;
  border-radius: 4px;
}

.bar {
  width: 25px;
  height: 2px;
  margin: 5px auto;
  background-color: #5b3218;
  display: block;
}

@media(max-width: 980px) {
  .hamburger-menu{
    display: block;
  }
  .buttons,.icons {
    display: none;
  }
}
</style>