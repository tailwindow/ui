<template>
  <div class="relative flex flex-col flex-1 space-y-3 ">
    <!-- HEADER -->
    <page-header></page-header>
    <h1 class="heading-1">Button</h1>
    <p>
      In this example we will create button component
    </p>
    <!-- EXAMPLE: DEFAULT -->
    <div class="relative flex flex-col flex-1">
      <div class="flex flex-col my-6 shadow">
        <div
          class="flex items-center justify-center py-10 space-x-3 overflow-auto bg-gray-50"
        >
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-danger">Danger</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-light">Light</button>
          <button class="btn btn-dark">Dark</button>
        </div>
        <div class="relative overflow-auto">
          <pre><code class="html" v-highlight>{{ sourceCode }}</code></pre>
        </div>
      </div>
    </div>
    <!-- EXAMPLE: ROUND -->
    <div class="relative flex flex-col flex-1">
      <div class="flex flex-col my-6 shadow">
        <div
          class="flex items-center justify-center py-10 space-x-3 overflow-auto bg-gray-50"
        >
          <button class="rounded btn btn-primary">Rounded</button>
          <button class="btn btn-primary rounded-xl">Rounded xl</button>
          <button class="btn btn-primary rounded-2xl">Rounded 2xl</button>
          <button class="btn btn-primary rounded-3xl">Rounded 3xl</button>
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
      sourceCode: `<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>`,
      sourceCodeRounded: `<button class="... rounded">Rounded</button>
<button class="... rounded-xl">Rounded xl</button>
<button class="... rounded-2xl">Rounded 2xl</button>
<button class="... rounded-3xl">Rounded 3xl</button>`
    };
  }
};
</script>
