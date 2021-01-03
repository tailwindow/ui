<template>
  <div class="relative flex flex-col flex-1 space-y-3 ">
    <!-- HEADER -->
    <page-header></page-header>

    <h1 class="text-3xl font-extrabold">Guide</h1>
    <p>
      How to create a button
    </p>
    <!-- Step 1 -->
    <div class="relative flex flex-col flex-1">
      <h2 class="text-2xl font-bold">Step 1</h2>
      <p>
        Adding border to your button and apply padding, Control the padding on
        one side of an element using the p{t|r|b|l|x|y}-{size} utilities.
      </p>

      <!-- PREVIEW -->
      <div class="flex flex-col my-6 shadow">
        <div
          class="flex items-center justify-center py-10 space-x-3 overflow-auto bg-gray-50"
        >
          <button class="px-8 py-3 border">Button</button>
        </div>
        <div class="relative overflow-auto">
          <pre><code class="html" v-highlight>{{ sourceCode1 }}</code></pre>
        </div>
      </div>
    </div>
    <!-- Step 1 -->
    <div class="relative flex flex-col flex-1">
      <h2 class="text-2xl font-bold">Step 2</h2>
      <p>
        Implement color to your button
      </p>
      <!-- PREVIEW -->
      <div class="flex flex-col my-6 shadow">
        <div
          class="flex items-center justify-center py-10 space-x-3 overflow-auto bg-gray-50"
        >
          <button class="px-8 py-3 text-blue-500 border border-blue-500">
            Button
          </button>
          <button
            class="px-8 py-3 text-white bg-blue-500 border border-blue-500"
          >
            Button
          </button>
        </div>
        <div class="relative overflow-auto">
          <pre><code class="html" v-highlight>{{ sourceCode2 }}</code></pre>
        </div>
      </div>
    </div>
    <!-- Step 3 -->
    <div class="relative flex flex-col flex-1">
      <h2 class="text-2xl font-bold">Step 3</h2>
      <p>
        Add radius to your button
      </p>
      <!-- PREVIEW -->
      <div class="flex flex-col my-6 shadow">
        <div
          class="flex items-center justify-center py-10 space-x-3 overflow-auto bg-gray-50"
        >
          <button class="px-8 py-3 text-white bg-blue-500 rounded-sm">
            Button
          </button>
          <button class="px-8 py-3 text-white bg-red-500 rounded">
            Button
          </button>
          <button class="px-8 py-3 text-white bg-green-500 rounded-md">
            Button
          </button>
          <button class="px-8 py-3 text-white bg-yellow-500 rounded-xl">
            Button
          </button>
          <button class="px-8 py-3 text-white bg-gray-500 rounded-full">
            Button
          </button>
        </div>
        <div class="relative overflow-auto">
          <pre><code class="html" v-highlight>{{ sourceCodeRounded }}</code></pre>
        </div>
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
      sourceCode1: `<button class="px-8 py-3 border">Button</button>`,
      sourceCode2: `<!-- Outline Button -->
<button class="... text-blue-500 border-blue-500">Button</button>
<!-- Default Button -->
<button class="... text-white bg-blue-500 border-blue-500">Button</button>`,
      sourceCodeRounded: `<button class="... rounded-lg">Button</button>
<button class="... rounded-lg">Button</button>
<button class="... rounded-lg">Button</button>
<button class="... rounded-lg">Button</button>
<button class="... rounded-lg">Button</button>`
    };
  }
};
</script>
