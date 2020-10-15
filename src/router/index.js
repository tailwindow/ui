import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Top Navigation
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/icons",
    name: "Icons",
    component: () => import("../views/Icons/index.vue")
  },
  {
    path: "/illustrations",
    name: "Illustrations",
    component: () => import("../views/Illustrations/index.vue")
  },
  {
    path: "/collections",
    name: "Collections",
    component: () => import("../views/Collections/index.vue")
  },

  // Component Introduction & Instalation
  {
    path: "/components/introduction",
    name: "ComponentsIntroduction",
    component: () => import("../views/Components/Introduction.vue")
  },
  {
    path: "/components/instalation",
    name: "ComponentsInstalation",
    component: () => import("../views/Components/Instalation.vue")
  },

  // Components Utilities & Class
  {
    path: "/components/utilities",
    name: "ComponentsUtilities",
    component: () => import("../views/Components/Utilities/index.vue")
  },
  {
    path: "/components/utilities/color",
    name: "ComponentsUtilitiesColor",
    component: () => import("../views/Components/Utilities/Color/index.vue")
  },
  {
    path: "/components/utilities/rounded",
    name: "ComponentsUtilitiesRounded",
    component: () => import("../views/Components/Utilities/Rounded/index.vue")
  },
  {
    path: "/components/utilities/shadow",
    name: "ComponentsUtilitiesShadow",
    component: () => import("../views/Components/Utilities/Shadow/index.vue")
  },
  {
    path: "/components/utilities/typography",
    name: "ComponentsUtilitiesTypography",
    component: () =>
      import("../views/Components/Utilities/Typography/index.vue")
  },

  // Components Atomics
  {
    path: "/components/atomics",
    name: "ComponentsAtomics",
    component: () => import("../views/Components/Atomics/index.vue")
  },
  {
    path: "/components/atomics/form",
    name: "ComponentsAtomicsForm",
    component: () => import("../views/Components/Atomics/Form/index.vue")
  },
  {
    path: "/components/atomics/button",
    name: "ComponentsAtomicsButton",
    component: () => import("../views/Components/Atomics/Button/index.vue")
  },
  {
    path: "/components/atomics/listview",
    name: "ComponentsAtomicsListView",
    component: () => import("../views/Components/Atomics/ListView/index.vue")
  },
  {
    path: "/components/atomics/tabview",
    name: "ComponentsAtomicsTabView",
    component: () => import("../views/Components/Atomics/TabView/index.vue")
  },
  {
    path: "/components/atomics/table",
    name: "ComponentsAtomicsTable",
    component: () => import("../views/Components/Atomics/Table/index.vue")
  },
  {
    path: "/components/atomics/navigation",
    name: "ComponentsAtomicsNavigation",
    component: () => import("../views/Components/Atomics/Navigation/index.vue")
  },
  {
    path: "/components/atomics/alert",
    name: "ComponentsAtomicsAlert",
    component: () => import("../views/Components/Atomics/Alert/index.vue")
  },
  {
    path: "/components/atomics/badge",
    name: "ComponentsAtomicsBadge",
    component: () => import("../views/Components/Atomics/Badge/index.vue")
  },
  {
    path: "/components/atomics/avatar",
    name: "ComponentsAtomicsAvatar",
    component: () => import("../views/Components/Atomics/Avatar/index.vue")
  },
  {
    path: "/components/atomics/chips",
    name: "ComponentsAtomicsChips",
    component: () => import("../views/Components/Atomics/Chips/index.vue")
  },
  {
    path: "/components/atomics/tooltip",
    name: "ComponentsAtomicsTooltip",
    component: () => import("../views/Components/Atomics/Tooltip/index.vue")
  },

  // Components Molecules
  {
    path: "/components/molecules",
    name: "ComponentsMolecules",
    component: () => import("../views/Components/Molecules/index.vue")
  },

  // Components Organism
  {
    path: "/components/organisms",
    name: "ComponentsOrganisms",
    component: () => import("../views/Components/Organisms/index.vue")
  },

  // Components Templates
  {
    path: "/components/templates",
    name: "ComponentsTemplates",
    component: () => import("../views/Components/Templates/index.vue")
  },

  // Components Pages
  {
    path: "/components/pages",
    name: "ComponentsPages",
    component: () => import("../views/Components/Pages/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
