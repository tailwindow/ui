<template>
  <div class="flex h-screen">
    <!-- MENU SIDEBAR -->
    <div class="w-64 bg-gray-500 p-4">
      <div>LOGO</div>
      <div class="py-2">
        <input type="text" name="" id="" />
      </div>
      <app-menu></app-menu>
    </div>
    <!-- CONTENT -->
    <div class="flex-1 p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppMenu from "./layouts/AppMenu";

export default {
  components: {
    AppMenu
  }
};
</script>
