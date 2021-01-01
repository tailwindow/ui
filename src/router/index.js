import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Home.vue")
      }
    ]
  },
  {
    path: "/docs",
    component: () => import("../layouts/DocLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/docs/Index.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
