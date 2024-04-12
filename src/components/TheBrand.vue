<template>
<the-container>

<!-- タイトル -->
<div class="title-container">
<span>ブ</span>
<span>ラ</span>
<span>ン</span>
<span>ド</span>
</div>

<!-- スライダー -->
<swiper-container
  :slides-per-view="slidesPerView"
  :space-between="5"
  :loop="true"
  :pagination="{ clickable: true }"
  :navigation="true"
  >

<swiper-slide v-for="image in swipeImages" :key="image.id">
  <div class="swiper-container">
    <a :href="image.url" target="_blank">
    <the-card class="swiper">
      <img :src="image.banner" :alt="image.description" class="swiper-image">
      <p>{{ image.description }}</p>
    </the-card>
  </a>
  </div>
</swiper-slide>
</swiper-container>

<!-- カード -->
<div class="card-container">
<div class="card-wrap" v-for="card in cards" :key="card.id">
  <a :href="card.url" target="_blank">
    <the-card class="card">
      <img :src="card.banner" :alt="card.description" class="card-banner">
      <p class="card-description">{{ card.description}}</p>
    </the-card>
  </a>
 </div>
</div>

</the-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const swipeImages = ref([
  {
    id: 'rabyraby',
    url: 'https://www.s-birthday.com/special/rabyraby/',
    banner: '/images/brand/banner_rabyraby-1.jpg',
    description: 'POPで可愛いコーディネートが楽しめる「ストリート＆ガーリー」スタイル'
  },
  {
    id: 'mamaraku',
    url: 'https://www.s-birthday.com/special/mamaraku/',
    banner: '/images/brand/20240320_mamaraku_HPbanner.jpg',
    description: 'シンプルアイテムにトレンド感をプラスしたフレンチスタイル「ママラク」'
  },
  {
    id: 'futafuta',
    url: 'https://www.s-birthday.com/special/futafuta/',
    banner: '/images/brand/JB_banner_0313futafuta.jpg',
    description: '絵本から飛び出したような元気で楽しい北欧ナチュラルスタイル'
  },
  {
    id: 'tete',
    url: 'https://www.s-birthday.com/special/teteatete/',
    banner: '/images/brand/tete_banner.jpg',
    description: 'シック＆トラディショナルをベースに形と色にこだわったスタイル'
  },
  {
    id: 'cottoli',
    url: 'https://www.s-birthday.com/special/cottoli/',
    banner: '/images/brand/icon_Cottoli_2306-600x650-2.png',
    description: '今だからこそ着れるかわいさを大切にした上品なフレンチスタイル'
  },
  {
    id: 'dailyLine',
    url: 'https://www.s-birthday.com/special/dailyline/',
    banner: '/images/brand/20231220_JBbanner_dailyline.jpg',
    description: '毎日着たくなるようなシンプル＆ベーシック DAILY LINE -futafuta-'
  },
  {
    id: 'cradle',
    url: 'https://www.s-birthday.com/special/cradle/',
    banner: '/images/brand/JBbanner_230222_Cradle.jpg',
    description: '「子育てに寄り添う」ハードグッズを提供する「クレイドル」'
  },
]);

const cards  =ref([
  {
    id: 'birthdayPlus',
    url: 'https://www.s-birthday.com/special/birthday-plus/',
    banner: 'public/images/brand/Banner_MaternityBook_2022-1.jpg',
    description: '「優しさ」や「思いやり」を素材にこめたバースデイプライベートブランド'
  },
  {
    id: 'brandItem',
    url: 'https://www.s-birthday.com/special/brand-outer/',
    banner: 'public/images/brand/Banner_BrandItem.jpg',
    description:'要チェック！人気ブランドいっぱいセレクトしました♪'
  }
]);

const slidesPerView = computed(() => {
  return window.innerWidth > 980 ? 4 : 2;
});

</script>

<style scoped>
.container {
  background-color: #f9f4e9;
  padding: 16px 0;
}

/* タイトル */
.title-container {
  text-align: center;
  padding: 16px 0;
}

.title-container span {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background: #5b3219;
  margin: 0 2px;
  font-size: 26px;
  color: white;
}

/* スワイパー */
.swiper-container {
  display: flex;
  gap: 10px;
}

.swiper {
  box-sizing: border-box;
  padding: 10px;
  margin: 8px;
  align-items: center;
  border: 1px solid #5b3219;
}

.swiper p {
  font-size: 14px;
}

.swiper-image {
  width: 100%;
}

a {
  color: #5b3219;
  text-decoration: none;
}

/* カード */
.card-container {
  display: flex;
}
 
.card {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  margin: 8px;
  align-items: center;
  border: #5b3219 1px solid;
}

.card-wrap {
  width: 50%;
}

.card-banner {
  max-width: 60%;
  height: auto;
  margin-right: 10px;
}

.card-description {
  flex: 1; /*40％になる*/
}

@media (max-width: 980px) {
.card-container {
  max-width: 100%;
  flex-direction: column;
}

.card-wrap {
  width: 100%;
}

.swiper p {
  font-size: 12px
}
}
</style>