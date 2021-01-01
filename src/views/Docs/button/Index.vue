<template>
  <div class="relative flex flex-col flex-1 overflow-auto">
    <!-- HEADER -->
    <div class="p-4 space-x-4 shadow flex-0">
      <button>Description</button>
      <button>Playground</button>
    </div>
    <!-- PREVIEW -->
    <div
      class="flex items-center justify-center flex-1 flex-shrink-0 bg-gray-100"
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
export default {
  data() {
    return {
      sourceCode: `<div>`
    };
  }
};
</script>
