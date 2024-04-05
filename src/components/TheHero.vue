<template>
 
 <the-container>
<!-- カテゴリーメニュー -->
<div class="category">
  <img src="/images/hero/text_nav_maternity.png">
  <img src="/images/hero/text_nav_baby.png">
  <img src="/images/hero/text_nav_kids.png">
  <img src="/images/hero/text_nav_special.png">
  <img src="/images/hero/text_nav_brand.png">
  <img src="/images/hero/text_nav_helpful.png">
</div>

<!-- youtube動画 -->
<div class="youtube">
  <iframe src="https://www.youtube.com/embed/-c4N2nieC3A?si=PFRWEAGVO3bGBTu_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

<!-- モバイルバナー -->
<the-card class="mobile-banner">
  <div class="mobile-image-1">
   <img src="/images/hero/img_flyer.png" width="130">
   <p>4月3日売り出し</p>
</div>
<img src="/images/hero/webL_samenail_0403.jpg" class="mobile-image-2">
</the-card>

<!-- PCバナー -->
<div class="pc-banner">
  <img src="/images/hero/webL_samenail_0403.jpg" class="pc-image-1">
  <img src="/images/hero/PickUpBanner_Movie240320.png">
  <img src="/images/hero/PickUpBanner_MaternityBook_2022.png">
</div>

<div class="store-search-container">
  <img src="/images/hero/tenpokensaku_button.png" class="store-search">
</div>

 </the-container>
</template>

<style scoped>
.container {
  background-color: #f9f4e9;
}

.category {
  display: flex;
  gap: 8px;
  padding: 24px 0;
}

.category img {
  width: 15%;
  height: auto;
  margin: auto;
}

.youtube iframe {
  width: 560px;
  height: 315px;
  margin: auto;
  padding: 16px 0;
  justify-content: center;
  display: flex;
}

.pc-banner {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
}

.mobile-banner {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 32px;
  width: 90%;
  margin: auto;
  display: none;
}

.mobile-image-1 {
  width: 40%;
  text-align: center;
  align-items: center;
}

.mobile-image-2 {
  width: 35%;
}

.store-search-container {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}

.store-search {
  width: 90%;
}



/* レスポンシブ対応 */
@media(max-width:980px) {
  .category {
    display: none;
  }

  .youtube iframe {
    width: 95%;
    justify-content: center;
    display: flex;
    height: 400px;
  }

  .pc-banner img {
  width: 47%;
}

.pc-image-1 {
 display: none;
}

.mobile-banner {
  display: flex;
}

.store-search {
 display: none;
}

}
</style>