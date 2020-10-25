<template>
  <div class="px-16 mt-20 ml-64">
    <div class="flex flex-col space-y-10">
      <div>
        <h1 class="font-bold text-heading-1 font-primary">
          Alert
        </h1>
        <p class="text-gray font-secondary text-subtitle-1">
          A button triggers an event or action. They let users know what will
          happen next.
        </p>
      </div>

      <div class="w-full px-4 py-3 bg-white border shadow-b-10 rounded-10">
        <ul class="flex flex-wrap space-x-6">
          <li
            :class="
              selectedTab === 'example' ? 'text-primary border-primary' : ''
            "
            class="pb-1 transition duration-500 ease-in-out border-b-2 border-white cursor-pointer hover:text-primary hover:border-primary"
            @click="selectedTab = 'example'"
          >
            Example
          </li>
          <li
            :class="
              selectedTab === 'tailwindcss' ? 'text-primary border-primary' : ''
            "
            class="pb-1 transition duration-500 ease-in-out border-b-2 border-white cursor-pointer hover:text-primary hover:border-primary"
            @click="selectedTab = 'tailwindcss'"
          >
            Tailwind CSS
          </li>
          <li
            :class="
              selectedTab === 'vuejs' ? 'text-primary border-primary' : ''
            "
            class="pb-1 transition duration-500 ease-in-out border-b-2 border-white cursor-pointer hover:text-primary hover:border-primary"
            @click="selectedTab = 'vuejs'"
          >
            VueJS
          </li>
        </ul>
      </div>

      <Example v-if="selectedTab === 'example'" />
      <TailwindCSS v-if="selectedTab === 'tailwindcss'" />
      <VueJS v-if="selectedTab === 'vuejs'" />
    </div>
  </div>
</template>

<script>
import Example from "./Pages/Example";
import TailwindCSS from "./Pages/TailwindCSS";
import VueJS from "./Pages/VueJS";

export default {
  components: {
    Example,
    TailwindCSS,
    VueJS
  },
  data() {
    return {
      selectedTab: "example"
    };
  }
};
</script>

<style></style>
