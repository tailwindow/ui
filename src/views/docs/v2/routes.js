import Button from "./button/routes";

export default [
  {
    path: "",
    component: () => import("./Index.vue")
  },
  {
    path: "installation",
    component: () => import("./installation/Index.vue")
  },
  {
    path: "color",
    component: () => import("./color/Index.vue")
  },
  {
    path: "typography",
    component: () => import("./typography/Index.vue")
  },
  {
    path: "shadow",
    component: () => import("./shadow/Index.vue")
  },
  ...Button
];
