import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'; // Make sure this path is correct
import './assets/index.css';
import router from './router'


const app = createApp(App);
app.use(createPinia());

app.use(router);

app.mount('#app');
