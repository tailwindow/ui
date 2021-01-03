export default [
  {
    path: "button",
    component: () => import("./Index.vue")
  },
  {
    path: "button/customize",
    component: () => import("./Customize.vue")
  },
  {
    path: "button/guide",
    component: () => import("./Guide.vue")
  }
];
