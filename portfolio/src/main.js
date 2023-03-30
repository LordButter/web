import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import pb from './pb';

const app = createApp(App)
    .use(pb)
    .use(router)
    .use(store)
    .mount('#app');

app.$router.beforeEach((to) => {
    if (to.meta.requiresAuth && !app.$pb.authStore.isValid) {
        return {
            path: "/portfolio/login"
        };
    } else if(to.name == "login" && app.$pb.authStore.isValid){
        return {
            path: "/portfolio"
        };
    }
});