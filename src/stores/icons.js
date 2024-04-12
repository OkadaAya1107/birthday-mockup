import { defineStore } from "pinia";

export const useIconsStore = defineStore('icons', {
  state: () => ({
    icons: [
     {
      name: 'line',
      path:'/images/sns/icon_nav_line.png'
     },
     {
      name: 'facebook',
      path:'/images/sns/icon_nav_facebook.png'
     },
     {
      name: 'instagram',
      path:'/images/sns/icon_nav_instagram.png'
     },
     {
      name: 'twitter',
      path:'/images/sns/icon_nav_twitter.png'
     }
    ],
  }),
  getters: {
    getIcon(state) {
      return state.icons;
    }
  }
});