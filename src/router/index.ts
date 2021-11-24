import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Route1 from "@/views/Route1.vue";
import Route2 from "@/views/Route2.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "route1",
    component: Route1,
  },
  {
    path: "/route2",
    name: "route2",
    component: Route2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
