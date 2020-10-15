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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
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
