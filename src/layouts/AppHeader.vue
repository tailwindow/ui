<template>
  <div class="shadow-md">
    <div class="container relative flex justify-between px-4 mx-auto">
      <div class="flex items-center"><app-logo></app-logo></div>
      <div class="p-4">
        <app-menu></app-menu>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "./AppLogo";
import AppMenu from "./AppMenu";

export default {
  components: {
    AppLogo,
    AppMenu
  }
};
</script>
