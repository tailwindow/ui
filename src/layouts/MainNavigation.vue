<template>
  <div class="fixed inset-x-0 top-0 z-50 flex flex-col w-full">
    <div class="z-50 bg-white border-b-2 border-light shadow-10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div
          class="flex items-center justify-between py-2 md:justify-start md:space-x-10"
        >
          <!-- Logo -->
          <div class="lg:w-0 lg:flex-1">
            <router-link to="/" class="flex">
              <img
                class="w-auto h-8 sm:h-12"
                src="https://qloud-storage.s3-ap-southeast-1.amazonaws.com/logo/tailwindow-logo1.svg"
                alt="Logo"
              />
            </router-link>
          </div>

          <!-- Button Show Menu for Mobile -->
          <div ref="collabsibles" class="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md hover: hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:"
              @click="showMobileMenu = true"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <!-- Navigation for Desktop -->
          <div class="hidden space-x-4 md:flex">
            <router-link
              to="/"
              class="px-4 py-2 transition duration-150 ease-in-out rounded-10 hover:bg-primary-alpha text-tittle-2 hover:text-primary focus:outline-none focus:text-primary"
            >
              Home
            </router-link>

            <!-- Components -->
            <div ref="collabsibles" class="relative">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out rounded-10 hover:bg-primary-alpha text-tittle-2 group hover:text-primary focus:outline-none focus:text-primary"
                @click="
                  showComponents
                    ? (showComponents = false)
                    : showComponentsMenu()
                "
              >
                <span>Components </span>
                <svg
                  class="w-5 h-5 transition duration-150 ease-in-out group-hover: group-focus:"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <transition
                enter-active-class="duration-200 ease-out"
                enter-from-class="scale-95 opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="duration-100 ease-in"
                leave-from-class="scale-100 opacity-100"
                leave-to-class="scale-95 opacity-0"
              >
                <div
                  v-show="showComponents"
                  class="absolute z-50 w-screen max-w-xs px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div class="rounded-lg shadow-lg">
                    <div class="overflow-hidden rounded-lg shadow-xs">
                      <div
                        class="relative z-20 grid gap-6 px-5 py-4 bg-white sm:gap-8 sm:p-8"
                      >
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('introduction')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Introduction</p>
                          </div>
                        </div>
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('instalation')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Instalation</p>
                          </div>
                        </div>

                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('utilities')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Utilities & Classes</p>
                          </div>
                        </div>
                        <hr />
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('atomics')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Atomics</p>
                          </div>
                        </div>
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('molecules')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Molecules</p>
                          </div>
                        </div>
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('organisms')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Organism</p>
                          </div>
                        </div>
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('templates')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Templates</p>
                          </div>
                        </div>
                        <div
                          class="flex items-start p-2 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-primary-alpha"
                          @click="changePage('pages')"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-primary"
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
                          <div class="space-y-1">
                            <p class="text-tittle-2">Pages</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Icons -->
            <router-link
              to="/icons"
              class="px-4 py-2 transition duration-150 ease-in-out hover:bg-primary-alpha rounded-10 text-tittle-2 hover:text-primary focus:outline-none focus:text-primary"
            >
              Icons
            </router-link>

            <router-link
              to="/illustrations"
              class="px-4 py-2 transition duration-150 ease-in-out hover:bg-primary-alpha rounded-10 text-tittle-2 hover:text-primary focus:outline-none focus:text-primary"
            >
              Illustrations
            </router-link>

            <router-link
              to="/collections"
              class="px-4 py-2 transition duration-150 ease-in-out hover:bg-primary-alpha rounded-10 text-tittle-2 hover:text-primary focus:outline-none focus:text-primary"
            >
              Collections
            </router-link>
          </div>

          <div
            class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0"
          >
            <a
              href="https://github.com/tailwindow/ui"
              class="whitespace-no-wrap text-tittle-2 hover:text-primary focus:outline-none focus:text-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <!-- Drop Down Component for Mobile Menu -->
      <animation
        enter-active-class="duration-200 ease-out"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-show="showMobileMenu"
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div class="rounded-lg shadow-lg">
            <div
              class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50"
            >
              <div class="px-5 pt-5 pb-6 space-y-6">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md hover: hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:"
                      @click="showMobileMenu = false"
                    >
                      <!-- Heroicon name: x -->
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav class="grid gap-y-8">
                    <a
                      href="#"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-primary-alpha"
                    >
                      <!-- Heroicon name: chart-bar -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div class="text-tittle-2">Qloud POS</div>
                    </a>
                    <a
                      href="#"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-primary-alpha"
                    >
                      <!-- Heroicon name: cursor-click -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <div class="text-tittle-2">Qloud HR</div>
                    </a>
                    <a
                      href="#"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-primary-alpha"
                    >
                      <!-- Heroicon name: shield-check -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div class="text-tittle-2">Qloud Sales</div>
                    </a>
                    <a
                      href="#"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-primary-alpha"
                    >
                      <!-- Heroicon name: view-grid -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <div class="text-tittle-2">QloudX</div>
                    </a>
                    <a
                      href="#"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-primary-alpha"
                    >
                      <!-- Heroicon name: refresh -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <div class="text-tittle-2">Automations</div>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="px-5 py-6 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Harga
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Bantuan
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Enterprise
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Help Center
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    class="transition duration-150 ease-in-out text-tittle-2 text-primary hover:text-gray-700"
                  >
                    Events
                  </a>
                </div>
                <div class="space-y-6">
                  <span class="flex w-full rounded-md shadow-sm">
                    <a
                      href="#"
                      class="flex items-center justify-center w-full px-4 py-2 text-white transition duration-150 ease-in-out border border-transparent rounded-md text-tittle-2 bg-primary hover:bg-primary-alpha focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    >
                      Sign up
                    </a>
                  </span>
                  <p class="text-center text-tittle-2">
                    Existing customer?
                    <a
                      href="#"
                      class="transition duration-150 ease-in-out text-primary hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animation>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showComponents: false,
      showMore: false,
      showMobileMenu: false
    };
  },
  mounted() {
    document.addEventListener("click", this.onClickOutside);
  },
  methods: {
    hideAll() {
      this.showComponents = false;
      this.showMore = false;
      this.showMobileMenu = false;
    },
    showComponentsMenu() {
      this.showComponents = true;
      this.showMore = false;
    },
    showMoreMenu() {
      this.showMore = true;
      this.showComponents = false;
    },
    onClickOutside(event) {
      const { collabsibles } = this.$refs;
      if (!collabsibles || collabsibles.contains(event.target)) return;
      this.hideAll();
    },
    changePage(name) {
      this.$router.push("/components/" + name);
      this.showComponents = false;
    }
  }
};
</script>

<style></style>
