import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

// create new app using router and mount to app tag in index.html
createApp(App)
    .use(router)
    .mount('#app')
