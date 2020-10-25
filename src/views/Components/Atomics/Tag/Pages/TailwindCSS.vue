<template>
  <div class="flex flex-col space-y-6">
    <div class="w-full px-4 py-4 bg-white rounded-10 shadow-10">
      <p class="mb-4 font-medium text-title-1">Primary Button</p>
      <div class="flex flex-wrap space-y-10">
        <!-- Button Basic -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-center h-16 px-16 text-white transition duration-500 text-title-3 bg-primary rounded-10 focus:outline-none hover:bg-primary-hover"
          >
            Button Large
          </button>
          <button
            class="flex items-center justify-center h-12 px-12 text-white transition duration-500 text-title-3 bg-primary rounded-10 focus:outline-none hover:bg-primary-hover"
          >
            Button Medium
          </button>
          <button
            class="flex items-center justify-center h-10 px-6 text-white transition duration-500 text-title-3 bg-primary rounded-10 focus:outline-none hover:bg-primary-hover"
          >
            Button Small
          </button>
        </div>

        <!-- Outline Button Basic -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-center h-16 px-16 transition duration-500 border-2 text-primary text-title-3 border-primary rounded-10 focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Large
          </button>
          <button
            class="flex items-center justify-center h-12 px-12 transition duration-500 border-2 text-primary text-title-3 border-primary rounded-10 focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Medium
          </button>
          <button
            class="flex items-center justify-center h-10 px-6 transition duration-500 border-2 text-primary text-title-3 border-primary rounded-10 focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Small
          </button>
        </div>
      </div>
    </div>

    <div class="w-full px-4 py-4 bg-white rounded-10 shadow-10">
      <p class="mb-4 font-medium text-title-1">Primary Button with Icon</p>
      <div class="flex flex-wrap space-y-10">
        <!-- Button with icon -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-between h-16 px-4 text-white transition duration-500 text-title-3 bg-primary rounded-10 focus:outline-none hover:bg-primary-hover"
          >
            Button Large
            <svg
              class="w-6 h-6 ml-16"
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
          <button
            class="flex items-center justify-between h-12 px-4 text-white transition duration-500 text-title-3 bg-primary rounded-10 focus:outline-none hover:bg-primary-hover"
          >
            Button Medium
            <svg
              class="w-6 h-6 ml-12"
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
          <button
            class="flex items-center justify-between h-10 px-4 text-white transition duration-500 text-title-3 bg-primary rounded-10 focus:outline-none hover:bg-primary-hover"
          >
            Button Small
            <svg
              class="w-6 h-6 ml-6"
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

        <!-- Outline Button with icon -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-between h-16 px-4 transition duration-500 border-2 text-primary text-title-3 border-primary rounded-10 focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Large
            <svg
              class="w-6 h-6 ml-16"
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
          <button
            class="flex items-center justify-between h-12 px-4 transition duration-500 border-2 text-primary text-title-3 border-primary rounded-10 focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Medium
            <svg
              class="w-6 h-6 ml-12"
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
          <button
            class="flex items-center justify-between h-10 px-4 transition duration-500 border-2 text-primary text-title-3 border-primary rounded-10 focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Small
            <svg
              class="w-6 h-6 ml-6"
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
    </div>

    <div class="w-full px-4 py-4 bg-white rounded-10 shadow-10">
      <p class="mb-4 font-medium text-title-1">Rounded Button</p>
      <div class="flex flex-wrap space-y-10">
        <!-- Rounded Button Basic -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-center h-16 px-16 text-white transition duration-500 rounded-full text-title-3 bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Button Large
          </button>
          <button
            class="flex items-center justify-center h-12 px-12 text-white transition duration-500 rounded-full text-title-3 bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Button Medium
          </button>
          <button
            class="flex items-center justify-center h-10 px-6 text-white transition duration-500 rounded-full text-title-3 bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Button Small
          </button>
        </div>

        <!-- Rounded Button Basic -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-center h-16 px-16 transition duration-500 border-2 rounded-full text-primary text-title-3 border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Large
          </button>
          <button
            class="flex items-center justify-center h-12 px-12 transition duration-500 border-2 rounded-full text-primary text-title-3 border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Medium
          </button>
          <button
            class="flex items-center justify-center h-10 px-6 transition duration-500 border-2 rounded-full text-primary text-title-3 border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Small
          </button>
        </div>
      </div>
    </div>

    <div class="w-full px-4 py-4 bg-white rounded-10 shadow-10">
      <p class="mb-4 font-medium text-title-1">Rounded Button with Icon</p>
      <div class="flex flex-wrap space-y-10">
        <!-- Rounded Button with icon -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-between h-16 px-4 text-white transition duration-500 rounded-full text-title-3 bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Button Large
            <svg
              class="w-6 h-6 ml-16"
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
          <button
            class="flex items-center justify-between h-12 px-4 text-white transition duration-500 rounded-full text-title-3 bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Button Medium
            <svg
              class="w-6 h-6 ml-12"
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
          <button
            class="flex items-center justify-between h-10 px-4 text-white transition duration-500 rounded-full text-title-3 bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Button Small
            <svg
              class="w-6 h-6 ml-6"
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

        <!-- Outline Rounded Button with icon -->
        <div class="flex flex-wrap w-full space-x-4 space-y-4">
          <button
            class="flex items-center justify-between h-16 px-4 transition duration-500 border-2 rounded-full text-primary text-title-3 border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Large
            <svg
              class="w-6 h-6 ml-16"
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
          <button
            class="flex items-center justify-between h-12 px-4 transition duration-500 border-2 rounded-full text-primary text-title-3 border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Medium
            <svg
              class="w-6 h-6 ml-12"
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
          <button
            class="flex items-center justify-between h-10 px-4 transition duration-500 border-2 rounded-full text-primary text-title-3 border-primary focus:outline-none hover:bg-primary-hover hover:border-primary-hover hover:text-white"
          >
            Button Small
            <svg
              class="w-6 h-6 ml-6"
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
