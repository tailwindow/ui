<template>
  <div>
    <MainNavigation />
    <ComponentsNavigation v-if="$route.name.includes('Components')" />

    <transition name="fade">
      <router-view />
    </transition>

    <Footer />
  </div>
</template>

<script>
import MainNavigation from "./layouts/MainNavigation";
import ComponentsNavigation from "./layouts/ComponentsNavigation";
import Footer from "./layouts/AppFooter";
export default {
  components: {
    MainNavigation,
    ComponentsNavigation,
    Footer
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.55s, opacity 0.58s ease-in-out;
}

.fade-enter-from {
  transform: scale(0.99);
  opacity: 0;
}
.fade-leave-to {
  transform: scale(1.03);
  opacity: 0;
}
</style>
