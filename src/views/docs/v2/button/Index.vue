<template>
  <div class="relative flex flex-col flex-1 space-y-3 overflow-auto">
    <!-- HEADER -->
    <page-header></page-header>
    <h1 class="text-3xl">Introduction</h1>
    <p class="text-2xl">
      Rapidly build modern websites without ever leaving your HTML.
    </p>
    <p>
      A utility-first CSS framework packed with classes like flex, pt-4,
      text-center and rotate-90 that can be composed to build any design,
      directly in your markup
    </p>
    <!-- PREVIEW -->
    <div class="space-x-3 space-y-3">
      <button class="px-8 py-3 text-white bg-blue-500">Button</button>
      <button class="px-8 py-3 text-white bg-red-500">Button</button>
      <button class="px-8 py-3 text-white bg-green-500">Button</button>
      <button class="px-8 py-3 text-white bg-yellow-500">Button</button>
      <button class="px-8 py-3 text-white bg-gray-500">Button</button>
    </div>
    <!-- SOURCE CODE -->
    <div class="relative h-40 overflow-auto">
      <div class="absolute w-full">
        <pre><code v-highlight class="html">{{ sourceCode }}</code></pre>
      </div>
    </div>
    <!-- PREVIEW -->
    <div class="space-x-3 space-y-3">
      <button class="px-8 py-3 text-white bg-blue-500 rounded-lg">
        Button
      </button>
      <button class="px-8 py-3 text-white bg-red-500 rounded-lg">
        Button
      </button>
      <button class="px-8 py-3 text-white bg-green-500 rounded-lg">
        Button
      </button>
      <button class="px-8 py-3 text-white bg-yellow-500 rounded-lg">
        Button
      </button>
      <button class="px-8 py-3 text-white bg-gray-500 rounded-lg">
        Button
      </button>
    </div>
    <!-- SOURCE CODE -->
    <div class="relative h-40 overflow-auto">
      <div class="absolute w-full">
        <pre><code v-highlight class="html">{{ sourceCodeRounded }}</code></pre>
      </div>
    </div>
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
      sourceCode: `<button class="px-8 py-3 text-white bg-blue-500">Button</button>
<button class="px-8 py-3 text-white bg-red-500">Button</button>
<button class="px-8 py-3 text-white bg-green-500">Button</button>
<button class="px-8 py-3 text-white bg-yellow-500">Button</button>
<button class="px-8 py-3 text-white bg-gray-500">Button</button>`,
      sourceCodeRounded: `<button class="px-8 py-3 text-white bg-blue-500 rounded-lg">Button</button>
<button class="px-8 py-3 text-white bg-red-500 rounded-lg">Button</button>
<button class="px-8 py-3 text-white bg-green-500 rounded-lg">Button</button>
<button class="px-8 py-3 text-white bg-yellow-500 rounded-lg">Button</button>
<button class="px-8 py-3 text-white bg-gray-500 rounded-lg">Button</button>`
    };
  }
};
</script>
