<template>
  <div class="p-4 shadow-md">
    <div class="container relative flex justify-between mx-auto">
      <div><app-logo></app-logo></div>
      <div>
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
