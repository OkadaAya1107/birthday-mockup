<template>
  <the-container>
    <the-card class="card">
      <img src="/images/news/news_TV.png" alt="news" class="news-icon">
    </the-card>
  </the-container>
</template>

<style scoped>
.container {
  background-color: #f9f4e9;
  padding: 16px 0;
}

.card {
  border-radius: 10px;
  width: 980px;
  min-height: 100px;
  margin: 100px;
  margin: 60px auto;
  background-color: #fefdf5;
  box-sizing: border-box;
  position: relative;
}

.news-icon {
  padding: 0;
  width: 180px;
  height: auto;
  bottom: 0;
  position: absolute;
}

@media (max-width:980px) {
  .card {
    width: 100%;
  }
}
</style>