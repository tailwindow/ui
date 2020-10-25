<template>
  <div class="fixed inset-y-0 left-0 z-10 w-64 h-screen px-2 bg-gray-50">
    <div class="h-screen pt-20 overflow-y-auto">
      <ul class="flex flex-col w-full">
        <li class="my-px">
          <router-link
            to="/components/introduction"
            class="flex flex-row items-center h-10 px-4 space-x-2 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <svg
              class="flex-shrink-0 w-6 h-6"
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
            to="/components/instalation"
            class="flex flex-row items-center h-10 px-4 space-x-2 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <svg
              class="flex-shrink-0 w-6 h-6"
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
            <span>Instalation</span>
          </router-link>
        </li>
        <li>
          <span
            :class="showUtilities ? 'bg-primary-alpha text-primary' : ''"
            class="flex flex-row items-center p-2 px-4 mt-4 font-bold transition duration-200 cursor-pointer font-primary hover:bg-primary-alpha hover:text-primary rounded-10"
            @click="
              showUtilities ? (showUtilities = false) : (showUtilities = true)
            "
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              ></path>
            </svg>
            Utilities & Class</span
          >
        </li>
        <li v-show="showUtilities" class="my-px">
          <router-link
            to="/components/utilities/color"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Color </span>
          </router-link>
          <router-link
            to="/components/utilities/shadow"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Shadow </span>
          </router-link>
          <router-link
            to="/components/utilities/rounded"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Rounded </span>
          </router-link>
          <router-link
            to="/components/utilities/typography"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Typography </span>
          </router-link>
        </li>

        <!-- Atomic Components -->
        <li class="my-px">
          <span
            :class="showAtomics ? 'bg-primary-alpha text-primary' : ''"
            class="flex flex-row items-center p-2 px-4 font-bold transition duration-200 cursor-pointer font-primary hover:bg-primary-alpha hover:text-primary rounded-10"
            @click="showAtomics ? (showAtomics = false) : (showAtomics = true)"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
            Atomic</span
          >
        </li>
        <li v-show="showAtomics" class="my-px">
          <router-link
            to="/components/atomics/form"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Form </span>
          </router-link>
          <router-link
            to="/components/atomics/button"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Button </span>
          </router-link>
          <router-link
            to="/components/atomics/listview"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>List View </span>
          </router-link>
          <router-link
            to="/components/atomics/tabview"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Tab View </span>
          </router-link>
          <router-link
            to="/components/atomics/table"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Table </span>
          </router-link>
          <router-link
            to="/components/atomics/navigation"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Navigation </span>
          </router-link>
          <router-link
            to="/components/atomics/alert"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Alert </span>
          </router-link>
          <router-link
            to="/components/atomics/badge"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Badge </span>
          </router-link>
          <router-link
            to="/components/atomics/avatar"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Avatar </span>
          </router-link>
          <router-link
            to="/components/atomics/tag"
            class="flex flex-row items-center h-10 px-4 text-gray-600 transition duration-500 ease-in-out rounded-lg hover:text-primary hover:bg-primary-alpha"
          >
            <span>Tag </span>
          </router-link>
        </li>

        <!-- Molecul Components -->
        <li class="my-px">
          <span
            class="flex flex-row items-center p-2 px-4 font-bold transition duration-200 cursor-pointer font-primary hover:bg-primary-alpha hover:text-primary rounded-10"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
            Molecules</span
          >
        </li>

        <!-- Organism Components -->
        <li class="my-px">
          <span
            class="flex flex-row items-center p-2 px-4 font-bold transition duration-200 cursor-pointer font-primary hover:bg-primary-alpha hover:text-primary rounded-10"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            Organisms</span
          >
        </li>

        <!-- Molecules Components -->
        <li class="my-px">
          <span
            class="flex flex-row items-center p-2 px-4 font-bold transition duration-200 cursor-pointer font-primary hover:bg-primary-alpha hover:text-primary rounded-10"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              ></path>
            </svg>
            Templates</span
          >
        </li>

        <!-- Pages Components -->
        <li class="my-px">
          <span
            class="flex flex-row items-center p-2 px-4 font-bold transition duration-200 cursor-pointer font-primary hover:bg-primary-alpha hover:text-primary rounded-10"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Pages</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showUtilities: true,
      showAtomics: false
    };
  }
};
</script>

<style></style>
