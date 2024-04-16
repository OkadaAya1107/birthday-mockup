<template>
<the-container>

<!-- モバイルバナー -->
<img class="mobile-banner" src="/images/slider2/everyday_bday_top.png">

<!-- 日付モバイル -->
<div>
  <span class="date-mobile fredoka-one">Update： 2024/4/16</span>
</div>

<swiper-container
:slides-per-view="slidesPerView"
:space-between="20"
:loop="true"
:pagination="{ clickable: true }"
:navigation="true"
>
  <swiper-slide v-for="(image, index) in images" :key="index">
    <div class="slide-container">
      <img :src="image" class="slide-image" />
    </div>
 </swiper-slide>
</swiper-container>

<!-- 日付PC -->
<div>
  <span class="date-pc fredoka-one">Update：2024/4/16</span>
</div>

<!-- ボタンPC -->
<div class="button-pc">
  <img src="/images/slider2/btn_gotopage.png">
</div>

<!-- ボタンモバイル -->
<div class="button-mobile">
  <img src="/images/slider2/btn_gotopage (1).png">
</div>

</the-container>
</template>

<script setup>
import { ref,computed } from "vue";

const images = ref([
 '/images/slider2/IMG_1758.JPG',
 '/images/slider2/IMG_1813.JPG',
 '/images/slider2/IMG_1846.JPG',
 '/images/slider2/IMG_1994.JPG'
]);

const slidesPerView = computed(() => {
  return window.innerWidth > 980 ? 4 : 3;
});
</script>

<style scoped>
.container {
  background-color: #f8debd;
  margin: auto;
  padding: 32px 0;
}

swiper-container {
  width: 100%;
  height: 440px;
  background: url('/images/slider2/everyday_bday_top_pc.png') no-repeat;
  padding-top: 48px;
}

.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide-image {
  width: 200px;
  height: 230px;
}

.mobile-banner {
  display: none;
}

.date-pc {
  display: flex;
  justify-content: right;
  color: #997258;
  font-size: 24px;
  border-bottom: 2px dashed #B7929F;
  padding-bottom: 1px;
  width: fit-content;
  margin-left: auto;
  margin-top: -60px;
  margin-bottom: 40px;
}

.date-mobile {
  display: flex;
  margin: auto; 
  display: none;
  color: #997258;
  font-size: 20px;
  border-bottom: 2px dashed #B7929F;
  width: fit-content;
  margin-top: -40px;
  margin-bottom: 20px;
}

.button-pc {
  display: flex;
  justify-content: center;
 }

 .button-mobile {
  display: flex;
  justify-content: center;
  display: none;
 }

@media (max-width:980px) {
 .mobile-banner {
  display: flex;
  width: 100%;
 }

 .slide-image {
  width: 164px;
  height: 164px;
  padding-bottom: 40px;
 }
 
 swiper-container {
  background:
  url('/images/slider2/birthday-slider background-brown.png') no-repeat;
  width: 100%;
  height: 250px;
  padding-bottom: 40px;
 }

 .button-pc {
  display: none;
 }

 .button-mobile {
  display: flex;
  justify-content: center;
 }

 .button-mobile img {
   width: 90%;
 }

 .date-pc {
  display: none;
 }

 .date-mobile {
  display: flex;
 }
}
</style>