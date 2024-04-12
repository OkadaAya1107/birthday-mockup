<template>
 <the-container>

  <!-- /* タイトル */ -->
  <div class="title-container">
    <span>お</span>
    <span>役</span>
    <span>立</span>
    <span>ち</span>
    <span>情</span>
    <span>報</span>
  </div>

  <!-- カード -->
<div class="card-container">
  <div class="card-wrap" v-for="card in cards" :key="card.id">
    <a :href="card.url" target="_blank">
    <the-card class="card">
      <img :src="card.banner" :alt="card.description" class="card-banner">
      <p class="card-description">{{ card.description }}</p>
      </the-card>
    </a>
  </div>
</div>

 </the-container>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
{
    id: 'giveBirth',
    url: 'http://baby.s-birthday.com/?_gl=1*82lofh*_ga*NDExOTE0MDcuMTcxMTQyMDM5NQ..*_ga_ED4G611082*MTcxMjU2MTI0NC4zOC4xLjE3MTI1NjE0MzguNjAuMC4w',
    banner: '/images/info/Banner_MaternityBook_2022-1.jpg',
    description: 'リニューアルしました♪ 出産に必要なものを分かりやすくシンプルにご紹介しています'
  },
  {
    id: 'babyFood',
    url: 'https://www.s-birthday.com/recipe/',
    banner: '/images/info/Banner_Recipe.jpg',
    description: '離乳食研究家YASUYOさん監修！ ベビーフードアレンジレシピ公開♪'
  },
  {
    id: 'afterBirth',
    url: 'https://www.s-birthday.com/weeklypickup7/154095/',
    banner: '/images/info/Banner_LP_Ninputai_Reform.jpg',
    description: 'どれを使えばいいの？「5タイプの妊婦帯」「産後のリフォーム」選ぶときの参考に♪'
  },
  {
    id: 'howToUse',
    url: 'https://www.s-birthday.com/special/movie/',
    banner: '/images/info/Banner_movie.jpg',
    description: '商品の使い方を動画でご案内！今すぐＣｈｅｃｋ！！'
  },
]);
</script>

<style scoped>
.container {
  background-color: #f8debd;
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
  letter-spacing: 0;
  border-radius: 50%;
  background: #5b3219;
  margin: 0 2px;
  font-size: 26px;
  color: white;
}

/* カード */
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  padding: 0px;
  margin: 8px 0;
  align-items: center;
  background-color: white;
}

.card-wrap {
  display: flex;
  width: 50%;
}

.card-banner {
  max-width: 60%;
  height: auto;
  margin-right: 10px;
}

.card-description {
  flex: 1;
  padding-right: 10px;
}

a {
  color: #5b3219;
  text-decoration: none;
}

/* レスポンシブデザイン */
@media (max-width: 980px) {
  .card-container {
    max-width: 100%;
    flex-direction: column;
  }

  .card-wrap {
    width: 100%;
  }
}
</style>