<template>
  <div
    class="flex flex-col flex-shrink-0 w-64 py-8 space-y-8 overflow-auto text-sm"
  >
    <div class="flex flex-col space-y-3">
      <router-link to="/docs/v2" class="flex items-center space-x-2">
        <svg
          class="flex-shrink-0 w-6 h-6 p-1 text-white bg-red-600 rounded-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Introduction</span>
      </router-link>
      <router-link
        to="/docs/v2/installation"
        class="flex items-center space-x-2"
      >
        <svg
          class="flex-shrink-0 w-6 h-6 p-1 text-white bg-indigo-600 rounded-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        <span>Installation</span>
      </router-link>
    </div>
    <div class="flex flex-col space-y-3">
      <span class="font-bold uppercase">Utilities</span>
      <router-link to="/docs/v2/color">Color</router-link>
      <router-link to="/docs/v2/typography">Typography</router-link>
      <router-link to="/docs/v2/shadow">Shadow</router-link>
    </div>
    <div class="flex flex-col space-y-3">
      <span class="font-bold uppercase">Components</span>
      <router-link to="/docs/v2">Accordion</router-link>
      <router-link to="/docs/v2">Alert</router-link>
      <router-link to="/docs/v2">Badge</router-link>
      <router-link to="/docs/v2">Breadcrumb</router-link>
      <router-link to="/docs/v2/button">Button</router-link>
      <router-link to="/docs/v2">Button Group</router-link>
      <router-link to="/docs/v2">Card</router-link>
      <router-link to="/docs/v2">Carousel</router-link>
      <router-link to="/docs/v2">Dropdown</router-link>
      <router-link to="/docs/v2">List Group</router-link>
      <router-link to="/docs/v2">Modal</router-link>
      <router-link to="/docs/v2">Navigation</router-link>
      <router-link to="/docs/v2">Pagination</router-link>
      <router-link to="/docs/v2">Popovers</router-link>
      <router-link to="/docs/v2">Progress</router-link>
      <router-link to="/docs/v2">Toast</router-link>
      <router-link to="/docs/v2">Tooltips</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
