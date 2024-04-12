<template>
  <the-container>

    <!-- SNSアイコン -->
    <div class="icons-container">
      <ul>
         <li v-for="icon in iconsStore.getIcon" :key="icon.name">
        <img :src="icon.path" alt="アイコン">
       </li>
      </ul>
    </div>
  </the-container>
</template>

<script setup>
import { useIconsStore } from '@/stores/icons.js';

const iconsStore = useIconsStore();
</script>

<style scoped>
.container {
  background-color: #f9f4e9;
  padding: 32px 0;
}

li {
  list-style: none;
}

ul {
  display: flex;
}

.icons-container {
  display: flex;
  justify-content: center;
}

.icons-container li {
  margin-right: 32px;
}


</style>