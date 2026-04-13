import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'

createApp(App).mount('#app')
import './style.css'
import App from './App.vue'
import router from "./router"
import '@fortawesome/fontawesome-free/css/all.min.css'
createApp(App)
    .use(router)
    .mount("#app")
