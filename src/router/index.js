import { createRouter, createWebHistory } from "vue-router";
import Docs from "../views/docs/routes";
const routes = [
  {
    path: "/",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Home.vue")
      },
      {
        path: "color",
        component: () => import("../views/ColorShadeGenerator.vue")
      },
      {
        path: "resources",
        component: () => import("../views/Resources.vue")
      }
    ]
  },
  {
    path: "/docs/v2",
    component: () => import("../layouts/DocLayout.vue"),
    children: [...Docs]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
