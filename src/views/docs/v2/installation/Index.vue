<template>
  <div class="relative flex flex-col flex-1 h-full py-8">
    <h1 class="text-2xl font-extrabold text-black">Installation</h1>
    <hr class="my-5" />
    <h2 class="text-xl text-black">
      Get Tailwind CSS up and running in your project.
    </h2>
    <p class="my-3">
      You can follow this installation guide on tailwindcss website
      <a href="https://tailwindcss.com/docs/installation" class="text-blue-600">
        https://tailwindcss.com/docs/installation
      </a>
      and then you can copy and paste any component here in your website
    </p>
    <div class="relative overflow-auto">
      <pre><code class="javascript" v-highlight>{{ sourceCode }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceCode: `module.exports = {
  presets: [require("./tailwindow-preset")],
  ...
};`
    };
  }
};
</script>
