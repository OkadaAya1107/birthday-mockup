<template>

  <the-container>

    <!-- タイトル -->
    <div class="title-container">
      <span>特</span>
      <span>集</span>
    </div>

    <!-- カード -->
    <div class="card-container">
      <div class="card-wrap" v-for="image in images" :key="image.id">
        <a :href="image.url" target="_blank">
        <the-card class="card">
          <img :src="image.banner" :alt="image.description" class="card-banner">
          <p class="card-description">{{ image.description }}</p>
        </the-card>
        </a>
      </div>
    </div>

  </the-container>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  {
    id: 'cherier',
    banner: '/images/feature/240403_Cherier_banner.jpg',
    url: 'https://www.s-birthday.com/240403_cherier',
    description: '子供達との思い出やかけがえのない時間を大切にしたい…3人のママ達によるブランド'
  },
  {
    id: 'hugtas',
    banner: '/images/feature/240403_Hugtas_banner.jpg',
    url: 'https://www.s-birthday.com/240403_hagtas',
    description: 'ディテール、カラーにこだわった、ママがときめくシンプルスタイル'
  },
  {
    id: 'linen',
    banner: '/images/feature/0327_banner.png',
    url: 'https://www.s-birthday.com/240327_linenbrend',
    description: 'さらっとして涼しい これからの季節にぴったり素材'
  },
  {
    id: 'sanrio',
    banner: '/images/feature/Banner_SANRIO_210223.jpg',
    url: 'https://www.s-birthday.com/special/sanrio/',
    description: 'アイテムいっぱい！ママも大好き♥サンリオキャラクターズ♥'
  },
  {
    id: 'myLittleWonder',
    banner: '/images/feature/20230927_MY_LITTLE_WONDER.png',
    url: 'https://www.s-birthday.com/240313-my-little-wonder/',
    description: '自由気ままに楽しむファッション'
  },
  {
    id: 'shimajiro',
    banner: '/images/feature/tokusyu_banner_300_136.jpg',
    url: 'https://www.s-birthday.com/dekita/',
    description: 'お子様の”できた”を応援する子育て情報コラム'
  },
  {
    id: 'mamari',
    banner: '/images/feature/b8de2986ef6ca007d729e8e3c4226585.jpg',
    url: 'https://www.s-birthday.com/0228_mamari/',
    description: 'お子様の”できた”を応援する子育て情報コラム'
  },
  {
    id: 'formal',
    banner: '/images/feature/272ff7c5dfeb9d395d942b0546faaea0.jpg',
    url: 'https://my.ebook5.net/BRAND/uAlMpr/',
    description: 'フォーマルコレクション 商品を選択するとオンラインストアでも購入できます！'
  },
  {
    id: 'ceremony',
    banner: '/images/feature/Banner_NN_2023.jpg',
    url: 'https://www.s-birthday.com/special/nyuennyugaku/',
    description: '準備はお済みですか？入園入学・新学期のグッズ、取り揃えております♪'
  },
  {
    id: 'sekku',
    banner: '/images/feature/Banner_Sekku2022_hina.jpg',
    url: 'https://www.s-birthday.com/sekku/',
    description: '「端午の節句 五月人形」ご注文承り中です！'
  },
  {
    id: 'disney',
    banner: '/images/feature/Banner_Disney.jpg',
    url: 'https://www.s-birthday.com/special/disney/',
    description: 'みんな大好き！ディズニーキャラクターのアイテムが大集合！！'
  },
  {
    id: 'miffy',
    banner: '/images/feature/Banner_miffy_19041.jpg',
    url: 'https://www.s-birthday.com/special/miffy/',
    description: 'ディック・ブルーナが描く絵本の主人公ミッフィー'
  },
  {
    id: 'mamacolle',
    banner: '/images/feature/Banner_mamacolle_2308.jpg',
    url: 'https://www.s-birthday.com/special/mamacolle/',
    description: '「こんなの欲しかった！」ママ達のアイデアを形にした商品「ママコレ」'
  },
  {
    id: 'shimamura',
    banner: '/images/feature/470b3b720116f00f77f5c79bc9fc1832.jpg',
    url: 'https://www.shimamura.gr.jp/sustainability/goodcompany.html?_gl=1*10k744o*_ga*NDExOTE0MDcuMTcxMTQyMDM5NQ..*_ga_NFJ6QSG60N*MTcxMjE3NDE0NS4yNi4xLjE3MTIxNzQ1NDkuMC4wLjA.',
    description: 'しまむらグループのサステナビリティ活動を動画で分かりやすく紹介します！'
  },
]);
</script>

<style scoped>
.container {
  background-color: #f8deba;
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
  background-color: #5b3219;
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
  box-sizing: border-box;
  padding: 10px;
  margin: 8px;
  align-items: center;
}

.card-wrap {
  display: flex;
  width: calc(50% - 8px);
}

.card-banner {
  max-width: 60%;
  height: auto;
  margin-right: 10px;
}

.card-description {
   flex: 1;  /*40％になる */
}

a {
  color: #5b3219;
  text-decoration: none;
}


</style>