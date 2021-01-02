<template>
  <div class="flex flex-col w-full h-full">
    <!-- Header -->
    <app-header></app-header>
    <!-- Content -->
    <div class="container flex flex-1 px-4 mx-auto overflow-hidden">
      <doc-navigation></doc-navigation>
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
