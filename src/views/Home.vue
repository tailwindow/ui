<template>
  <div class="flex flex-col mt-16 space-y-6">
    <!-- Hero -->
    <div class="px-16">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-wrap items-center w-1/2 h-128">
          <div class="flex flex-col space-y-8">
            <h1
              class="font-extrabold leading-tight font-primary text-heading-1"
            >
              A Tailwind Components
              <br />
              to build
              <span class="text-primary">Awesome </span>
              <span class="text-primary">User Interface</span>
            </h1>
            <p class="text-large text-gray">
              Tailwindow is a collection of UI Components created using Tailwind
              CSS Framework. The UI Components gives you all of the building
              blocks you need to build any designs without any annoying
              opinionated styles you have to fight to override.
            </p>

            <div class="flex flex-wrap space-x-8">
              <router-link
                to="/components/introduction"
                class="flex items-center justify-between h-12 px-4 text-white transition duration-500 rounded text-title-4 bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Introduction
                <svg
                  class="flex-shrink-0 w-6 h-6 ml-12"
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
              </router-link>
              <router-link
                to="/components/instalation"
                class="flex items-center justify-between h-12 px-4 transition duration-500 rounded text-primary text-title-4 bg-primary-alpha focus:outline-none hover:bg-primary-hover hover:text-white"
              >
                Installation
                <svg
                  class="flex-shrink-0 w-6 h-6 ml-12"
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
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="flex items-center">
            <img src="../assets/illustrations/woman.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Client -->
    <div class="flex flex-col items-center justify-center space-y-8">
      <h3 class="text-heading-4 text-gray">Our Stack & Technology</h3>
      <div class="flex flex-wrap space-x-8">
        <img
          class="h-16"
          src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
          alt=""
        />
        <img
          class="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          alt=""
        />
        <img
          class="h-16"
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
          alt=""
        />
        <img
          class="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
          alt=""
        />
        <img
          class="h-16"
          src="https://miro.medium.com/max/9350/1*BCPTI5sT2C9JH76__X2WUg.png"
          alt=""
        />
      </div>

      <h3 class="text-heading-4 text-gray">
        Our Plugins & Eksternal Sources
      </h3>
      <div class="flex flex-wrap space-x-8">
        <img
          class="h-16"
          src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
          alt=""
        />
        <img
          class="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          alt=""
        />
        <img
          class="h-16"
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
          alt=""
        />
        <img
          class="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
          alt=""
        />
        <img
          class="h-16"
          src="https://miro.medium.com/max/9350/1*BCPTI5sT2C9JH76__X2WUg.png"
          alt=""
        />
      </div>

      <h3 class="text-white text-heading-4">
        Our Plugins & Eksternal Sources
      </h3>
    </div>

    <!-- The Components -->
    <div class="mt-12 bg-primary">
      <div
        class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
      >
        <div
          class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
        >
          <h1
            class="mb-4 font-bold leading-tight text-white font-primary text-display-5"
          >
            The Components
          </h1>
          <p class="font-light leading-relaxed text-white text-subtitle-1">
            Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
            dan penataan huruf atau typesetting
          </p>

          <ul
            class="mt-2 font-medium leading-relaxed text-white text-subtitle-1"
          >
            <li class="flex flex-wrap items-center space-x-2">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Atomics</p>
            </li>
            <li class="flex flex-wrap items-center space-x-2">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Molecules</p>
            </li>
            <li class="flex flex-wrap items-center space-x-2">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Organisms</p>
            </li>
            <li class="flex flex-wrap items-center space-x-2">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Templates</p>
            </li>
            <li class="flex flex-wrap items-center space-x-2">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Pages</p>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex items-center mb-5">
            <div class="w-4/12 px-3 space-y-6">
              <div>
                <div
                  class="block p-5 my-3 mb-2 overflow-hidden transition-all duration-500 transform scale-100 rounded hover:scale-95"
                  style="
                    background: url(https://images.unsplash.com/photo-1531537571171-a707bf2683da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)
                      center;
                    background-size: cover;
                  "
                >
                  <div class="h-32"></div>
                </div>
              </div>

              <div>
                <div
                  class="block p-5 my-3 mb-2 overflow-hidden transition-all duration-500 transform scale-100 rounded hover:scale-95"
                  style="
                    background: url(https://images.unsplash.com/photo-1531493731235-b5c309dca387?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)
                      center;
                    background-size: cover;
                  "
                >
                  <div class="h-48"></div>
                </div>
              </div>

              <div>
                <div
                  class="block p-5 my-3 mb-2 overflow-hidden transition-all duration-500 transform scale-100 rounded hover:scale-95"
                  style="
                    background: url(https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)
                      center;
                    background-size: cover;
                  "
                >
                  <div class="h-24"></div>
                </div>
              </div>
            </div>
            <div class="w-8/12 px-3 space-y-6">
              <div>
                <div
                  class="block my-3 mb-2 overflow-hidden transition-all duration-500 transform scale-100 bg-white rounded-lg shadow-2xl hover:scale-95"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    alt=""
                  />
                </div>
              </div>

              <div>
                <div
                  class="block my-3 mb-2 overflow-hidden transition-all duration-500 transform scale-100 rounded shadow-2xl hover:scale-95"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sources -->
    <div class="flex flex-wrap px-2">
      <div class="w-1/2 p-2">
        <div class="flex flex-col items-center justify-center p-4 bg-gray-100">
          <div class="flex flex-col items-center justify-center my-8">
            <p class="text-gray text-title-4">Eksternal Sources</p>
            <h1 class="font-extrabold leading-none text-heading-1 font-primary">
              Awesome Illustrations Collection
            </h1>
            <p class="mt-4 text-center">
              Lorem Ipsum is simply dummy text of <br />
              the printing and typesetting.
            </p>
            <nuxt-link to="/hr" class="mt-2 text-primary"
              >Selengkapnya ></nuxt-link
            >
          </div>
          <img class="h-72" src="../assets/illustrations/woman.svg" alt="" />
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div class="flex flex-col items-center justify-center p-4 bg-gray-100">
          <div class="flex flex-col items-center justify-center my-8">
            <p class="text-gray text-title-4">Eksternal Sources</p>
            <h1 class="font-extrabold leading-none text-heading-1 font-primary">
              Awesome Icons Collection
            </h1>
            <p class="mt-4 text-center">
              Lorem Ipsum is simply dummy text of <br />
              the printing and typesetting.
            </p>
            <nuxt-link to="/hr" class="mt-2 text-primary"
              >Selengkapnya ></nuxt-link
            >
          </div>
          <img class="h-72" src="../assets/illustrations/man.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
