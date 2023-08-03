import { createApp } from 'vue'
import App from './App.vue'
import BaseRouterPage from "./BaseRouterPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: App },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(BaseRouterPage)
    .use(router)
    .mount('#app')
