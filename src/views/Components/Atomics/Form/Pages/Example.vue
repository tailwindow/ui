<template>
  <div class="flex flex-row flex-wrap -mx-4">
    <!-- Start Col Input Type -->
    <div class="w-full px-4 sm:w-1/2 md:w-1/3">
      <p class="text-sm font-light">Input Type</p>
      <hr class="my-2" />
      <div class="mb-2">
        <label for="regular" class="text-sm leading-7 text-gray-700"
          >Regular Input</label
        >
        <input
          id="regular"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Regular input text"
        />
      </div>
      <div class="mb-2">
        <label for="required" class="text-sm leading-7 text-gray-700"
          >Required Input</label
        >
        <span class="text-red-900">*</span>
        <input
          id="required"
          type="text"
          required
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Required text"
        />
      </div>
      <div class="mb-2">
        <label for="password" class="text-sm leading-7 text-gray-700"
          >Input With Help Message</label
        >
        <input
          id="password"
          type="password"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Password"
        />
        <span class="text-xs text-gray-600">Must be at least 8 characters</span>
      </div>
      <div class="mb-2">
        <label for="disabled" class="text-sm leading-7 text-gray-700"
          >Disabled</label
        >
        <input
          id="disabled"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 bg-gray-400 border border-gray-400 cursor-not-allowed text-md focus:outline-none focus:border-gray-500"
          placeholder="Disabled input here"
          disabled
        />
      </div>
      <div class="mb-2">
        <label for="readonly" class="text-sm leading-7 text-gray-700"
          >Read only</label
        >
        <input
          id="readonly"
          type="text"
          class="block w-full py-1 text-gray-700 text-md focus:outline-none focus:border-gray-500"
          value="Readonly input here"
          readonly
        />
      </div>
      <div class="mb-2">
        <label for="textarea" class="text-sm leading-7 text-gray-700"
          >Text Area</label
        >
        <textarea
          id="textarea"
          cols="30"
          rows="3"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Tell us your story"
        ></textarea>
      </div>
    </div>
    <!-- End Col Input Type -->

    <!-- Start Col Border Type -->
    <div class="w-full px-4 sm:w-1/2 md:w-1/3">
      <p class="text-sm font-light">Border Type</p>
      <hr class="my-2" />
      <div class="mb-2">
        <label for="square-text" class="text-sm leading-7 text-gray-700"
          >Square</label
        >
        <input
          id="square-text"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Square"
        />
      </div>
      <div class="mb-2">
        <label for="rounded-md-text" class="text-sm leading-7 text-gray-700"
          >Rounded</label
        >
        <input
          id="rounded-md-text"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 rounded-md text-md focus:outline-none focus:border-gray-500"
          placeholder="Rounded"
        />
      </div>
      <div class="mb-2">
        <label for="rounded-lg-text" class="text-sm leading-7 text-gray-700"
          >Rounded Large</label
        >
        <input
          id="rounded-lg-text"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 rounded-lg text-md focus:outline-none focus:border-gray-500"
          placeholder="Rounded Large"
        />
      </div>
      <div class="mb-2">
        <label for="rounded-full-text" class="text-sm leading-7 text-gray-700"
          >Rounded Full</label
        >
        <input
          id="rounded-full-text"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 border border-gray-400 rounded-full text-md focus:outline-none focus:border-gray-500"
          placeholder="Rounded Full"
        />
      </div>
      <div class="mb-2">
        <label for="bottom-line-text" class="text-sm leading-7 text-gray-700"
          >Bottom Line</label
        >
        <input
          id="bottom-line-text"
          type="text"
          class="block w-full px-4 py-1 text-gray-700 border-0 border-b border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Bottom Line"
        />
      </div>
      <div class="relative pt-3 mb-2">
        <label
          for="collapse-text"
          class="absolute top-0 px-2 py-1 ml-2 text-xs text-gray-700 bg-white select-none"
          >Collapse Text</label
        >
        <input
          id="collapse-text"
          type="text"
          class="block w-full px-4 pt-2 pb-1 text-gray-700 border border-gray-400 text-md focus:outline-none focus:border-gray-500"
          placeholder="Collapse Text"
        />
      </div>
    </div>
    <!-- End Col Border Type -->

    <!-- Start Col Color -->
    <div class="w-full px-4 sm:w-1/2 md:w-1/3">
      <p class="text-sm font-light">Color Type</p>
      <hr class="my-2" />
      <div class="mb-2">
        <label for="input-success" class="text-xs leading-5 text-green-500"
          >Input Success</label
        >
        <input
          id="input-success"
          type="text"
          class="block w-full px-4 py-1 text-green-900 placeholder-green-700 bg-green-100 border border-green-300 focus:outline-none focus:border-green-500"
          placeholder="Success"
        />
      </div>
      <div class="mb-2">
        <label for="input-warning" class="text-xs leading-5 text-yellow-700"
          >Input Warning</label
        >
        <input
          id="input-warning"
          type="text"
          class="block w-full px-4 py-1 text-yellow-900 placeholder-yellow-700 bg-yellow-200 border border-yellow-500 focus:outline-none focus:border-yellow-700"
          placeholder="Warning"
        />
      </div>
      <div class="mb-2">
        <label for="input-danger" class="text-xs leading-5 text-red-700"
          >Input Danger</label
        >
        <input
          id="input-danger"
          type="text"
          class="block w-full px-4 py-1 text-red-900 placeholder-red-700 bg-red-100 border border-red-300 focus:outline-none focus:border-red-500"
          placeholder="Danger"
        />
      </div>
    </div>
    <!-- EndCol Color -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
