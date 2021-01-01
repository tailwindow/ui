<template>
  <div
    class="container relative flex items-center mx-auto space-x-5 space-y-20"
  >
    <div class="flex-1 space-y-5">
      <h1
        class="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
      >
        <span>A Tailwind Components to build</span>
        <span class="text-indigo-600 "> Awesome User Interface</span>
      </h1>
      <p class="text-lg">
        Tailwindow is a collection of UI Components created using Tailwind CSS
        Framework. The UI Components gives you all of the building blocks you
        need to build any designs without any annoying opinionated styles you
        have to fight to override.
      </p>
      <div class="flex space-x-3">
        <router-link
          to="/"
          class="px-8 py-3 text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Get Started
        </router-link>
        <router-link
          to="/"
          class="px-8 py-3 text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Github
        </router-link>
      </div>
    </div>
    <div class="flex-1">
      <img src="/img/home.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
