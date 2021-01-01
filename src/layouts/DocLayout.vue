<template>
  <div class="container flex h-full mx-auto">
    <div class="flex-shrink-0 h-full">
      <doc-navigation></doc-navigation>
    </div>
    <div class="flex flex-col justify-between flex-1 h-full">
      <div class="py-4">
        <app-menu></app-menu>
      </div>
      <div class="flex flex-col flex-1"><router-view /></div>
    </div>
  </div>
</template>

<script>
import AppMenu from "./AppMenu";
import DocNavigation from "./DocNavigation";

export default {
  components: {
    AppMenu,
    DocNavigation
  }
};
</script>
