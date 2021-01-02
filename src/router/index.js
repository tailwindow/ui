import { createRouter, createWebHistory } from "vue-router";

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
    children: [
      {
        path: "",
        component: () => import("../views/docs/v2/Index.vue")
      },
      {
        path: "installation",
        component: () => import("../views/docs/v2/installation/Index.vue")
      },
      {
        path: "button",
        component: () => import("../views/docs/v2/button/Index.vue")
      },
      {
        path: "button/customize",
        component: () => import("../views/docs/v2/button/Customize.vue")
      },
      {
        path: "color",
        component: () => import("../views/docs/v2/color/Index.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
