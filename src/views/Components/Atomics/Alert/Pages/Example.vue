<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-wrap">
      <div class="flex flex-col w-1/2 p-2 space-y-4">
        <div
          class="flex flex-col items-center justify-center p-4 text-white rounded bg-orange"
        >
          This is a warning
        </div>
        <div
          class="flex flex-col items-center justify-center p-4 text-white rounded bg-gray"
        >
          This is a warning
        </div>
        <div
          class="flex flex-col items-center justify-center p-4 text-white rounded bg-red"
        >
          This is a warning
        </div>
      </div>
      <div class="flex flex-col w-1/2 p-2 space-y-4">
        <div
          class="flex flex-col items-center justify-center p-4 text-white rounded bg-orange"
        >
          <span class="flex flex-wrap items-center space-x-3"
            ><svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            This is a warning</span
          >
        </div>
        <div
          class="flex flex-col items-center justify-center p-4 text-white rounded bg-gray"
        >
          <span class="flex flex-wrap items-center space-x-3"
            ><svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                clip-rule="evenodd"
              ></path>
            </svg>
            This is a some info</span
          >
        </div>
        <div
          class="flex flex-col items-center justify-center p-4 text-white rounded bg-red"
        >
          <span class="flex flex-wrap items-center space-x-3"
            ><svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                clip-rule="evenodd"
              ></path>
            </svg>
            The apocalypse is coming and zombies are on the loose
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="flex flex-col w-1/3 p-2 space-y-4">
        <div class="p-4 bg-white border rounded w-72 shadow-b-20">
          <div class="flex flex-row space-x-2">
            <div class="flex flex-col space-y-2">
              <span class="-mt-1 font-semibold leading-none text-green"
                ><svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path></svg
              ></span>
            </div>

            <div class="flex flex-col space-y-2">
              <div
                class="flex items-center justify-between font-semibold leading-none text-gray-900"
              >
                <span>Hey, did you know...</span>
                <a href=""
                  ><svg
                    class="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path></svg
                ></a>
              </div>
              <span class="text-gray-600"
                >This alert needs your attention, but its not super
                important.</span
              >

              <div class="flex flex-wrap space-x-4">
                <a href="" class="text-primary">Understood</a>
                <a href="" class="text-primary">No Thanks</a>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 bg-white border rounded w-72 shadow-b-20">
          <div class="flex flex-row space-x-2">
            <div class="flex flex-col space-y-2">
              <span class="-mt-1 font-semibold leading-none text-green"
                ><svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path></svg
              ></span>
            </div>

            <div class="flex flex-col space-y-2">
              <div
                class="flex items-center justify-between font-semibold leading-none text-gray-900"
              >
                <span>Hey, did you know...</span>
                <a href=""
                  ><svg
                    class="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path></svg
                ></a>
              </div>
              <span class="text-gray-600"
                >This alert needs your attention, but its not super
                important.</span
              >

              <div class="flex flex-wrap space-x-4">
                <a href="" class="text-primary">Understood</a>
                <a href="" class="text-primary">No Thanks</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-1/3 p-2 space-y-4">
        <div class="p-4 border rounded bg-gray w-72 shadow-b-20">
          <div class="flex flex-row items-center space-x-2">
            <span class="font-semibold leading-none text-white"
              ><svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
            <div
              class="flex items-center justify-between w-full font-semibold leading-none text-gray-900"
            >
              <span class="text-white">Hey, did you know...</span>
              <a href=""
                ><svg
                  class="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>

        <div class="p-4 border rounded bg-green w-72 shadow-b-20">
          <div class="flex flex-row items-center space-x-2">
            <span class="font-semibold leading-none text-white"
              ><svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
            <div
              class="flex items-center justify-between w-full font-semibold leading-none text-gray-900"
            >
              <span class="text-white">Hey, did you know...</span>
              <a href=""
                ><svg
                  class="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>

        <div class="p-4 border rounded bg-orange w-72 shadow-b-20">
          <div class="flex flex-row items-center space-x-2">
            <span class="font-semibold leading-none text-white"
              ><svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
            <div
              class="flex items-center justify-between w-full font-semibold leading-none text-gray-900"
            >
              <span class="text-white">Hey, did you know...</span>
              <a href=""
                ><svg
                  class="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>

        <div class="p-4 border rounded bg-red w-72 shadow-b-20">
          <div class="flex flex-row items-center space-x-2">
            <span class="font-semibold leading-none text-white"
              ><svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
            <div
              class="flex items-center justify-between w-full font-semibold leading-none text-gray-900"
            >
              <span class="text-white">Hey, did you know...</span>
              <a href=""
                ><svg
                  class="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </div>
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
