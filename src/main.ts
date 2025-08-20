import { createApp } from 'vue'
import './assets/tailwind.css'
import './style.css'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'
import AOS from 'aos'

createApp(App).use(router).mount('#app');
AOS.init({
  offset: 50,
  easing: 'ease-in-out',
})