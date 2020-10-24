/* eslint-disable prettier/prettier */
<template>
  <div class="flex flex-col space-y-6">
    <div class="w-full px-4 py-4 bg-white rounded shadow-10">
      <h1 class="mb-4 font-medium font-primary text-title-1">Button</h1>
      <div class="flex flex-col space-y-8">
        <!-- Basic Button -->
        <div class="flex flex-wrap">
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="items-center justify-center inline-block px-6 py-3 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Large
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-4 py-2 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Regular
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-2 py-1 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Small
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-center px-12 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-6 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-3 py-1 leading-none transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Basic Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-4 py-4 bg-white rounded shadow-10">
      <h1 class="mb-4 font-medium font-primary text-title-1">Rounded Button</h1>
      <div class="flex flex-col space-y-8">
        <div class="flex flex-wrap">
          <!-- Basic Button -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="items-center justify-center inline-block px-6 py-3 text-white transition duration-500 rounded-full bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Large
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-4 py-2 text-white transition duration-500 rounded-full bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Regular
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-2 py-1 text-white transition duration-500 rounded bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Small
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-center px-12 py-2 transition duration-500 border-2 rounded-full text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-6 py-2 transition duration-500 border-2 rounded-full text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-center px-3 py-1 leading-none transition duration-500 border-2 rounded-full text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Basic Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 text-white transition duration-500 rounded-full bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 text-white transition duration-500 rounded-full bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 text-white transition duration-500 rounded-full bg-primary focus:outline-none hover:bg-primary-hover"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 transition duration-500 border-2 rounded-full text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 transition duration-500 border-2 rounded-full text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 transition duration-500 border-2 rounded-full text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Outline Button with Icon -->
          <div class="flex flex-col w-1/4 space-y-4">
            <div class="flex">
              <button
                class="flex items-center justify-between px-6 py-3 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Large
                <svg
                  class="w-4 h-4 ml-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-4 py-2 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Medium
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex">
              <button
                class="flex items-center justify-between px-2 py-1 transition duration-500 border-2 rounded text-primary border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
              >
                Button Small
                <svg
                  class="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/4">
            <div
              class="flex flex-col w-full h-40 p-4 space-y-2 bg-gray-100"
            ></div>
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
