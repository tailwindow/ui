<template>
  <div class="container flex flex-col mx-auto mt-24">
    <div class="flex flex-row items-center">
      <div class="w-1/2 mb-10 md:w-1/2 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="../../assets/illustrations/woman.svg"
        />
      </div>
      <div
        class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
      >
        <h1
          class="mb-4 text-4xl font-bold leading-snug text-gray-900 font-primary sm:text-4xl"
        >
          Awesome Icon Collection
        </h1>
        <p class="mb-8 text-lg font-light leading-relaxed font-secondary">
          Get in-depth information and UI resources for designing great apps
          that integrate seamlessly with Apple platforms.
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex px-6 py-2 text-lg text-white transition duration-500 border-0 rounded bg-primary focus:outline-none hover:bg-primary-hover"
          >
            Read Documentation Now
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mb-20 -mx-4">
      <div class="w-1/3 p-4">
        <div
          class="flex flex-col items-center justify-center p-4 bg-white shadow-20 rounded-10"
        >
          <div class="flex flex-col items-center justify-center my-8">
            <p class="text-gray text-title-4">Eksternal Sources</p>
            <h1
              class="font-extrabold leading-none text-center text-heading-1 font-primary"
            >
              Herosicons.dev
            </h1>
            <p class="mt-4 text-center">
              MIT-licensed icons by @steveschoger . Viewer by @username_ZAYDEK .
            </p>
            <a
              href="https://heroicons.dev/"
              target="_blank"
              class="mt-2 text-primary"
              >Selengkapnya ></a
            >
          </div>
          <img
            class="w-auto h-auto p-4"
            src="../../assets/images/herosicon.png"
            alt=""
          />
        </div>
      </div>
      <div class="w-1/3 p-4">
        <div
          class="flex flex-col items-center justify-center p-4 bg-white shadow-20 rounded-10"
        >
          <div class="flex flex-col items-center justify-center my-8">
            <p class="text-gray text-title-4">Eksternal Sources</p>
            <h1
              class="font-extrabold leading-none text-center text-heading-1 font-primary"
            >
              Boxicons
            </h1>
            <p class="mt-4 text-center">
              MIT-licensed icons by @steveschoger . Viewer by @username_ZAYDEK .
            </p>
            <a
              href="https://boxicons.com/"
              target="_blank"
              class="mt-2 text-primary"
              >Selengkapnya ></a
            >
          </div>
          <img
            class="w-auto h-auto p-4"
            src="../../assets/images/herosicon.png"
            alt=""
          />
        </div>
      </div>
      <div class="w-1/3 p-4">
        <div
          class="flex flex-col items-center justify-center p-4 bg-white shadow-20 rounded-10"
        >
          <div class="flex flex-col items-center justify-center my-8">
            <p class="text-gray text-title-4">Eksternal Sources</p>
            <h1
              class="font-extrabold leading-none text-center text-heading-1 font-primary"
            >
              Font Awesome
            </h1>
            <p class="mt-4 text-center">
              MIT-licensed icons by @steveschoger . Viewer by @username_ZAYDEK .
            </p>
            <a
              href="https://fontawesome.com/"
              target="_blank"
              class="mt-2 text-primary"
              >Selengkapnya ></a
            >
          </div>
          <img
            class="w-auto h-auto p-4"
            src="../../assets/images/herosicon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons"
};
</script>

<style></style>
