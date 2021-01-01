<template>
  <div class="relative flex flex-col flex-1 overflow-auto">
    <!-- HEADER -->
    <page-header></page-header>
    <!-- PREVIEW -->
    <div
      class="flex items-center justify-center flex-1 flex-shrink-0 bg-gray-50"
    >
      <button>Button</button>
    </div>
    <!-- SOURCE CODE -->
    <div class="relative h-64 overflow-auto">
      <div class="absolute w-full">
        <pre><code v-highlight class="html">{{ sourceCode }}</code></pre>
      </div>
    </div>
    <!-- CONTROL -->
    <div class="flex-1 p-4 overflow-auto"></div>
  </div>
</template>

<script>
import PageHeader from "./Header";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      sourceCode: `<div>`
    };
  }
};
</script>
