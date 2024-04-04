import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import TheContainer from  '@/components/ui/TheContainer.vue'
import  TheHeader from '@/components/layout/TheHeader.vue';
import  TheButton from '@/components/ui/TheButton.vue';
import TheCard from '@/components/ui/TheCard.vue';
import { register } from 'swiper/element/bundle';

register();

const app = createApp(App);
app.use(createPinia());

app.component('the-container', TheContainer);
app.component('the-header', TheHeader);
app.component('the-button', TheButton);
app.component('the-card', TheCard);

app.mount('#app')
