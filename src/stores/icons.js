import { defineStore } from "pinia";

export const useIconsStore = defineStore('icons', {
  state: () => ({
    icons: [
     {
      name: 'line',
      path:'/images/sns/icon_nav_line (1).png'
     },
     {
      name: 'facebook',
      path:'/images/sns/icon_nav_facebook (1).png'
     },
     {
      name: 'instagram',
      path:'/images/sns/icon_nav_instagram (1).png'
     },
     {
      name: 'twitter',
      path:'/images/sns/icon_nav_twitter (1).png'
     }
    ],
  })
});