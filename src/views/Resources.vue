<template>
  <div class="flex flex-col mt-20">
    <div class="container relative flex items-center mx-auto space-x-10">
      <div class="flex-1">
        <img src="/img/resources/tailwindcss.svg" alt="" class="xl:px-32" />
      </div>
      <div class="flex-1 flex-grow space-y-5">
        <h1
          class="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
        >
          <span>Tailwindcss</span>
          <span class="text-indigo-600"> an API for your design system</span>
        </h1>
        <p class="text-lg">
          Utility classes help you work within the constraints of a system
          instead of littering your stylesheets with arbitrary values. They make
          it easy to be consistent with color choices, spacing, typography,
          shadows, and everything else that makes up a well-engineered design
          system.
        </p>
        <div class="flex space-x-3">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="px-8 py-3 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            tailwindcss.com
          </a>
        </div>
      </div>
    </div>
    <div class="container p-4 mx-auto mt-20">
      <h1
        class="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
      >
        Resources
      </h1>
      <p>
        Here are some resources that can help you take your Tailwind projects to
        the next level
      </p>
    </div>
    <div class="container flex mx-auto space-x-10">
      <div class="flex flex-col items-center flex-1 p-4 space-y-3">
        <h2 class="self-start text-2xl font-bold text-black">DrawKit</h2>
        <a
          href="https://www.drawkit.io/"
          class="px-3 py-12 bg-blue-400 rounded-xl"
          target="_blank"
        >
          <img
            src="/img/resources/drawkit.svg"
            alt=""
            class="w-full h-32 xl:px-24"
          />
        </a>
        <p>
          100% free! Hand-drawn vector illustration and icon resources, perfect
          for your next project.
        </p>
      </div>
      <div class="flex flex-col items-center flex-1 p-4 space-y-3">
        <h2 class="self-start text-2xl font-bold text-black">UnDraw</h2>
        <a
          href="https://undraw.co/illustrations"
          class="px-3 py-12 bg-blue-600 rounded-xl"
          target="_blank"
        >
          <img
            src="/img/resources/undraw.svg"
            alt=""
            class="w-full h-32 xl:px-24"
          />
        </a>
        <p>
          Use images that scale without quality degradation, making them not
          just retina but future-ready.
        </p>
      </div>
      <div class="flex flex-col items-center flex-1 p-4 space-y-3">
        <h2 class="self-start text-2xl font-bold text-black">ManyPixels</h2>
        <a
          href="https://www.manypixels.co/gallery/"
          class="px-3 py-12 bg-green-600 rounded-xl"
          target="_blank"
        >
          <img
            src="/img/resources/manypixels.svg"
            alt=""
            class="w-full h-32 xl:px-24"
          />
        </a>
        <p>
          ManyPixels gives you a professional designer to help you with all of
          your creative needs. No interviews, no contracts, unlimited designs.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
