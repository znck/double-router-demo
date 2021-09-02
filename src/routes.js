import { createRouter, createWebHistory } from "./router-a";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./components/Page.vue") }
  ]
});
