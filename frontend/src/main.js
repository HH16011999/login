import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router';
import VueCookies from 'vue-cookies';
import FontAwesomeIcon from '@/fa'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app
  .use(router)
  .use(VueCookies, { expire: '7d'})
  .mount('#app')

