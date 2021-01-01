<template>
  <!-- Header -->
  <app-header></app-header>
  <!-- Content -->
  <router-view />
  <!-- Footer -->
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  components: {
    AppHeader
  }
};
</script>
