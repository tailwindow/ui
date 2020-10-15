<template>
  <div class="px-6 mt-32 ml-72">
    <div class="flex flex-col space-y-10">
      <div>
        <h1 class="font-bold text-heading-1 font-primary">
          Atomic Components {{ $route.name }}
        </h1>
        <p class="text-gray-light font-secondary text-subtitle-1">
          Color is a great way to impart vitality, provide visual continuity,
          communicate status information, give feedback in response to user
          actions, and help people visualize data. Look to the system’s color
          scheme for guidance when picking app tint colors that look great
          individually and in combination, on both light and dark backgrounds.
        </p>
      </div>

      <div class="flex flex-wrap -mx-4">
        <div class="w-1/3 p-4">
          <nuxt-link
            to="/components/utilities"
            class="flex flex-col p-4 bg-white shadow-10 rounded-10"
          >
            <div
              class="flex items-center justify-center h-40 mb-4 rounded-10 bg-light"
            >
              <img
                class="object-cover w-full h-40 rounded-10"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>

            <h1 class="font-medium text-heading-1">Utilities & Class</h1>
            <p class="text-gray-light font-secondary text-subtitle-2">
              Color is a great way to impart vitality, provide visual
              continuity, communicate status information.
            </p>
          </nuxt-link>
        </div>
        <div class="w-1/3 p-4">
          <nuxt-link
            to="/components/atomics"
            class="flex flex-col p-4 bg-white shadow-10 rounded-10"
          >
            <div
              class="flex items-center justify-center h-40 mb-4 rounded-10 bg-light"
            >
              <img
                class="object-cover w-full h-40 rounded-10"
                src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2067&q=80"
                alt=""
              />
            </div>

            <h1 class="font-medium text-heading-1">Atomic</h1>
            <p class="text-gray-light font-secondary text-subtitle-2">
              Color is a great way to impart vitality, provide visual
              continuity, communicate status information.
            </p>
          </nuxt-link>
        </div>
        <div class="w-1/3 p-4">
          <div class="flex flex-col p-4 bg-white shadow-10 rounded-10">
            <div
              class="flex items-center justify-center h-40 mb-4 rounded-10 bg-light"
            >
              <img
                class="object-cover w-full h-40 rounded-10"
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80"
                alt=""
              />
            </div>

            <h1 class="font-medium text-heading-1">Molecul</h1>
            <p class="text-gray-light font-secondary text-subtitle-2">
              Color is a great way to impart vitality, provide visual
              continuity, communicate status information.
            </p>
          </div>
        </div>
        <div class="w-1/3 p-4">
          <div class="flex flex-col p-4 bg-white shadow-10 rounded-10">
            <div
              class="flex items-center justify-center h-40 mb-4 rounded-10 bg-light"
            >
              <img
                class="object-cover w-full h-40 rounded-10"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>

            <h1 class="font-medium text-heading-1">Organism</h1>
            <p class="text-gray-light font-secondary text-subtitle-2">
              Color is a great way to impart vitality, provide visual
              continuity, communicate status information.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
