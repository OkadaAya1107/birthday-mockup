<template>
 <the-container>
<!-- ３つの画像 -->
<div class="three-row">
  <the-button>
    <img src="/images/footer/banner_mainichigabirthday.png">
  </the-button>
  <the-button>
    <img src="/images/footer/banner_contact_324x84.png">
  </the-button>
  <the-button>
    <img src="/images/footer/banner_app_310x84.png">
  </the-button>
</div>


<!-- ２つの画像 -->
<div class="two-row">
  <the-button>
    <img src="/images/footer/banner_staff_322x84.png" alt="">
  </the-button>
  <the-button>
    <img src="/images/footer/banner_ticket_308x84.png" alt="">
  </the-button>
</div>

<!-- メニューPC -->
<div class="footer-nav-pc">
  <!-- メニュー上部 -->
  <ul>
    <li v-for="(menu,index) in footerMenu1" :key="index">
      {{ menu }}
    </li>
  </ul>

  <!-- メニュー下部 -->
  <ul>
    <li  v-for="(menu,index) in footerMenu2" :key="index">
      {{ menu }}</li>
  </ul>
</div>

<!-- モバイルメニュー -->
<div class="footer-nav-mobile">
  <table>
    <tr>
      <td class="saiyo">
        <img src="/images/footer/IMG_0849.png">
        <p>新卒採用</p>
      </td>
      <td class="sitemap">サイトマップ</td>
    </tr>

    <tr>
      <td colspan="2" class="security">セキュリティポリシー・プライバシーポリシー</td>
    </tr>

    <tr>
      <td>しまむら</td>
    </tr>
    <tr>
      <td>アベイル</td>
    </tr>
    <tr>
      <td>バースデイ</td>
    </tr>
    <tr>
      <td>シャンブル</td>
    </tr>
    <tr>
      <td>ディバロ</td>
    </tr>
    <tr>
      <td>思夢樂（台湾）</td>
    </tr>
    <tr>
      <td>しまむらグループ</td>
    </tr>
  </table>
</div>

<small>&#169; SHIMAMURA Co., Ltd.</small>

 </the-container>
</template>

<script setup>
import { ref } from 'vue';

const footerMenu1 = ref([
'しまむら｜', 'アベイル｜', 'バースデイ｜', 'シャンブル｜', 'ディバロ｜', '思夢樂（台湾）｜', 'しまむらグループ｜'
]);

const footerMenu2 = ref ([
'新卒採用｜', 'サイトマップ｜', 'セキュリティポリシー・プライバシーポリシー｜'
]);
</script>

<style scoped>
.container {
  background-color: #5b3218;
  padding: 40px 0;
}

.three-row,
.two-row
{
  display: flex;
  justify-content: space-between;
}

img {
  width: 180px;
}

.three-row button {
  background-color: #fefdf5;
  padding: 4px 64px;
  margin-top: 8px;
}

.two-row button {
  background-color: #fefdf5;
  padding: 4px 148px;
  margin-top: 8px;
}

/* メニューPC */
.footer-nav-pc {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer-nav-pc ul {
  display: flex;
  margin: 8px 0px;
}

.footer-nav-pc li {
  list-style: none;
  gap: 18px;
  font-size: 13px;
  color: white;
}

/* メニューモバイル */
 .footer-nav-mobile {
  margin-top: 24px;
  display: none;
} 

.footer-nav-mobile img {
  width: 10px;
}

.footer-nav-mobile p {
  margin: 0;
}

table {
  color: white;
  font-size: 11px;
  width: 100%;
  border-collapse: collapse;
}

.saiyo {
  border-right: 1px solid white;
  text-align: center;
  width: 50%; 
}

.security {
  text-align: center;
}

.sitemap {
  text-align: center;
}

tr {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

td {
  padding: 8px;
}

small {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding: 8px;
  color: white;
}


/* レスポンシブ対応 */
@media (max-width:980px) {
  .three-row,
  .two-row {
    flex-direction: column;
  }

  .footer-nav-pc {
    display: none;
  }

  .footer-nav-mobile {
    display: block;
  }

  small {
    color: black;
    background-color: #f9f4e9;
  }
}
</style>

