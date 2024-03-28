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

       <!-- アイコンコンテイナー -->
       <div class="icon-container">
        <!-- 店舗検索アイコン -->
        <div class="store-icon">
          <div>
            <img src="/images/header/IMG_0844.PNG?url">
          </div>
           <p>店舗検索</p>
        </div>

         <!-- オンラインストアアイコン -->
         <div class="shopping-icon">
          <div>
            <img src="/images/header/IMG_0845.PNG?url">
          </div>
           <p>オンラインストア</p>
          </div>
       </div>

       <!-- モバイル版ハンバーガーメニュー -->
         <div class="hamburger-menu" @click="toggleMenu">
          <div class="hamburger-container">
            <span class="bar" :class="barClass1"></span>
            <span class="bar" :class="barClass2"></span>
            <span class="bar" :class="barClass3"></span>
          </div>
          <p>Menu</p>
         </div>
      </nav>
    </the-container>
  </section>

  <!-- モバイルメニュー内容 -->
  <div class="mobile-menu" :class="{ 'show-menu': showMenu }">

    <transition name=slide>
    <!-- モバイルコンテイナー -->
    <div class="mobile-container" v-if="showMenu">

      <!-- カテゴリー -->
      <div class="mobile-title">
        <p>カテゴリーから選ぶ</p>
      </div>
      <div class="mobile-box">
        <img src="/images/mobile/IMG_0837.PNG?url">
        <div>v</div>
      </div>
      <div class="mobile-box">
        <img src="/images/mobile/IMG_0838.PNG?url">
        <div>v</div>
      </div>
      <div class="mobile-box">
        <img src="/images/mobile/IMG_0839.PNG?url">
        <div>v</div>
      </div>

      <!-- 特集 -->
      <div class="mobile-title">
        <p>特集から選ぶ</p>
        <div>v</div>
      </div>

      <!-- ブランド -->
      <div class="mobile-title">
        <p>ブランドから選ぶ</p>
        <div>v</div>
      </div>

      <!-- オンラインストア -->
      <div class="mobile-box-2">
        <img src="/images/header/IMG_0844.PNG?url">
        <div>オンラインストア</div>
      </div>

      <!-- デジタルチラシ -->
      <div class="mobile-box-2">
        <img src="/images/header/IMG_0844.PNG?url">
        <div>デジタルチラシ</div>
      </div>

      <!-- SNSリンク -->
     <div class="mobile-table">
      <table>
        <tr>
          <td><img src="/images/sns/icon_nav_line.png"></td>
          <td><img src="/images/sns/icon_nav_facebook.png"></td>
          <td><img src="/images/sns/icon_nav_instagram.png"></td>
          <td><img src="/images/sns/icon_nav_twitter.png"></td>
        </tr>
        <tr>
          <td><img src="/images/mobile/IMG_0840.PNG?url"></td>
          <td><img src="/images/mobile/IMG_0841.PNG?url"></td>
          <td><img src="/images/mobile/IMG_0842.PNG?url"></td>
          <td><img src="/images/mobile/IMG_0843.PNG?url"></td>
        </tr>
      </table>
     </div>
    </div>
  </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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

const showMenu = ref(false);
const isOpen = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  isOpen.value = !isOpen.value;
};

const barClass1 = computed(() => ({
  'bar-open-1': isOpen.value,
}));

const barClass2 = computed(() => ({
  'bar-open-2': isOpen.value,
}));

const barClass3 = computed(() => ({
  'bar-open-3': isOpen.value,
}));



</script>

<style scoped>
section {
  background-color: #f8deba;
  padding: 3px 0;
  border-top: 4px solid #5b3219;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  text-align: center;
}

.hamburger-menu p {
  margin: 0;
  color: #5b3218;
  font-size: 12px;
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

.bar-open-1 {
  transform: translateY(8px) rotate(45deg);
}

.bar-open-2 {
   opacity: 0;
}

.bar-open-3 {
  transform: translateY(-6px) rotate(-45deg);
}

/* アイコンコンテイナー */
.icon-container {
margin-left: auto;
margin-right: 5px;
display: none;
}

.store-icon,
.shopping-icon {
  text-align: center;
  margin-left: 10px;
}

.store-icon img,
.shopping-icon img {
  width: 32px;
  height: 32px;
}

.store-icon p,
.shopping-icon p {
  margin: 0;
  color: #5b3218;
  font-size: 12px;
}

/* モバイルメニュー内容 */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 57, 57, 0.8);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  display: none;
}

.show-menu {
  display: flex;
}

.mobile-container {
  right: -100%;
  background-color: #5b3218;
  width: 60%;
  height: 100%;
  margin-left: auto;
  padding: 6px;
  z-index: 500;
  margin-top: 60px;
}

.mobile-container p {
  color: white;
}

.mobile-title {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
}

.mobile-title div {
  font-size: 20px;
  margin-right: 4px;
  color: white;
}

.mobile-box {
  background-color: rgb(247, 240, 227);
  padding: 6px 4px;
  border-radius: 6px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  font-size: 20px;
}

.mobile-box-2 {
  background-color: rgb(247, 240, 227);
  padding: 6px 4px;
  border-radius: 6px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  height: 40px;
  font-size: 16px;
  align-items: center;
}

.mobile-box-2 img {
  width: 28px;
  margin-right: 4px;
}

.mobile-table {
  display: flex;
  justify-content: space-evenly;
}

.mobile-table img {
  width: 54px;
}

.mobile-table td {
  padding: 8px;
}

td+td {
  border-left: 2px dotted white;
}

tr+tr td {
  border-top: 2px dotted white;
}

/* 開始状態 */
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* 終了状態 */
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

/* アニメーション中に適用するプロパティ */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}



@media(max-width: 980px) {
  .hamburger-menu {
    display: block;
  }

   .icon-container {
    display: flex;
  } 

  .buttons,.icons {
    display: none;
  }
}


</style>