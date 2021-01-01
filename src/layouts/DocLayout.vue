<template>
  <div class="flex flex-col w-full h-full">
    <!-- Header -->
    <app-header></app-header>
    <!-- Content -->
    <div class="container flex flex-1 mx-auto overflow-hidden">
      <div
        class="flex flex-col flex-shrink-0 w-64 py-8 space-y-3 overflow-auto"
      >
        <doc-navigation></doc-navigation>
      </div>
      <div class="flex flex-col justify-between flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import DocNavigation from "./DocNavigation";

export default {
  components: {
    AppHeader,
    DocNavigation
  }
};
</script>
