<template>
  <div class="relative flex flex-col flex-1 overflow-auto">
    <!-- HEADER -->
    <page-header></page-header>
    <!-- PREVIEW -->
    <div
      class="flex items-center justify-center flex-1 flex-shrink-0 bg-gray-50"
    >
      <button :class="btnClass">{{ text }}</button>
    </div>
    <!-- SOURCE CODE -->
    <div class="relative overflow-auto">
      <pre><code class="html" v-highlight>{{ btnCode }}</code></pre>
    </div>
    <!-- CONTROL -->
    <ul
      class="relative flex space-x-4 overflow-x-auto border-t border-b shadow"
    >
      <li
        @click="customizeMenu = ''"
        class="px-2 py-3 transition duration-500 border-b-2 border-white cursor-pointer hover:text-indigo-500 hover:border-indigo-500"
      >
        Text
      </li>
      <li
        @click="customizeMenu = 'size'"
        class="px-2 py-3 transition duration-500 border-b-2 border-white cursor-pointer hover:text-indigo-500 hover:border-indigo-500"
      >
        Size
      </li>
    </ul>
    <div
      class="flex flex-col flex-1 py-4 space-y-3 overflow-auto"
      v-if="customizeMenu === ''"
    >
      <div class="grid items-center grid-cols-4 gap-4">
        <div class="">Text</div>
        <div class="col-span-3">
          <input
            type="text"
            v-model="text"
            class="w-full px-3 py-2 border border-gray-500"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col flex-1 py-4 space-y-5 overflow-auto"
      v-if="customizeMenu === 'size'"
    >
      <div class="grid items-center grid-cols-4 gap-4">
        <div class="">Color</div>
        <div class="col-span-3 space-x-3">
          <button
            class="px-6 py-2 text-white bg-red-500"
            @click="
              color('white');
              bgColor('red', 500);
            "
          >
            Red
          </button>
          <button
            class="px-6 py-2 text-white bg-blue-500"
            @click="
              color('white');
              bgColor('blue', 500);
            "
          >
            Blue
          </button>
          <button
            class="px-6 py-2 text-white bg-green-500"
            @click="
              color('white');
              bgColor('green', 500);
            "
          >
            Green
          </button>
          <button
            class="px-6 py-2 text-white bg-yellow-500"
            @click="
              color('white');
              bgColor('yellow', 500);
            "
          >
            Yellow
          </button>
        </div>
      </div>
      <div class="grid items-center grid-cols-4 gap-4">
        <div class="">Padding</div>
        <div class="col-span-3 space-x-3">
          <button
            class="px-6 py-2 text-white bg-gray-700"
            @click="padding(6, 2)"
          >
            Small
          </button>
          <button
            class="px-6 py-2 text-white bg-gray-700"
            @click="padding(8, 3)"
          >
            Medium
          </button>
          <button
            class="px-6 py-2 text-white bg-gray-700"
            @click="padding(10, 4)"
          >
            Large
          </button>
        </div>
      </div>
      <div class="grid items-center grid-cols-4 gap-4">
        <div class="">Shape</div>
        <div class="col-span-3 space-x-3">
          <button class="px-6 py-2 text-white bg-gray-700" @click="round(null)">
            Square
          </button>
          <button class="px-6 py-2 text-white bg-gray-700" @click="round('xl')">
            Rounded XL
          </button>
          <button
            class="px-6 py-2 text-white bg-gray-700"
            @click="round('2xl')"
          >
            Rounded 2XL
          </button>
          <button
            class="px-6 py-2 text-white bg-gray-700"
            @click="round('3xl')"
          >
            Rounded 3XL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./Header";
export default {
  components: {
    PageHeader
  },
  computed: {
    btnCode() {
      return '<button class="' + this.btnClass + '">' + this.text + "</button>";
    },
    btnClass() {
      return [
        this.classPadding,
        this.classColor,
        this.classRadius,
        this.classBgColor
      ]
        .filter(el => el)
        .join(" ");
    }
  },
  data() {
    return {
      customizeMenu: "",
      text: "Button",
      classColor: "",
      classBgColor: "",
      classRadius: "",
      classPadding: ""
    };
  },
  methods: {
    round(size = null) {
      this.classRadius = size ? `rounded-${size}` : "";
    },
    bgColor(name, level) {
      this.classBgColor = level ? `bg-${name}-${level}` : `bg-${name}`;
    },
    color(name, level = null) {
      this.classColor = level ? `text-${name}-${level}` : `text-${name}`;
    },
    padding(x, y) {
      this.classPadding = `px-${x} py-${y}`;
    }
  }
};
</script>
