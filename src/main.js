import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

import TheContainer from  '@/components/ui/TheContainer.vue'
import  TheHeader from '@/components/layout/TheHeader.vue';
import  TheButton from '@/components/ui/TheButton.vue';

const app = createApp(App);
app.use(createPinia());

app.component('the-container', TheContainer);
app.component('the-header', TheHeader);
app.component('the-button', TheButton);

app.mount('#app')
