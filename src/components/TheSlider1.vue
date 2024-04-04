<template>
  <section>
 <swiper-container 
 slides-per-view="3"
 :space-between="20"
 :lope="true"
 :pagination="{
  clickable: true,
 }"
 :navigation="true"
 >
  <swiper-slide v-for="(image, index) in images" :key="index">
    <div class="slide-container">
      <img :src="image" class="slide-image">
    </div>
  </swiper-slide>
</swiper-container>
</section>

</template>

<script setup>
import { ref } from 'vue';

const images = ref([
'/images/slider1/slider_640_320.jpg',
  '/images/slider1/Slider_240323-1.png',
  '/images/slider1/Slider_everydaybirthday.jpg',
  '/images/slider1/Slider_OnlineShop_220220.jpg',
  '/images/slider1/Slider_OpenNews_240320.jpg',
  '/images/slider1/Slider_others_AppRenewal.jpg',
  '/images/slider1/Slider_Sekku2022.jpg',
  '/images/slider1/Slider_Tenpogentei_230729.jpg',
]);

</script>

<style scoped>
section {
  width: 1260px;
  height: 300px;
  margin: auto;
  background: url('/images/slider1/slide1-background.png');
}

swiper-container {
  width: 100%;
  height: 100%;
}

.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide-image {
  width: 100%;
}
</style>