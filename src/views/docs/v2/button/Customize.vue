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
        Sizing
      </li>
    </ul>
    <div
      class="flex flex-col flex-1 py-4 space-y-3 overflow-auto"
      v-if="customizeMenu === ''"
    >
      <div class="grid grid-cols-4 gap-4">
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
      class="flex flex-col flex-1 py-4 space-y-3 overflow-auto"
      v-if="customizeMenu === 'size'"
    >
      <div class="grid grid-cols-4 gap-4">
        <div class="">Text</div>
        <div class="col-span-3">
          <input
            type="text"
            v-model="text"
            class="w-full px-3 py-2 border border-gray-500"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div class="">Padding</div>
        <div class="col-span-3">
          <select name="" id="" class="w-full px-3 py-2 border border-gray-500">
            <option value="">-</option>
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div>
        <div class="m-4">
          Border :
          <button class="p-2 text-white bg-gray-700" @click="round()">
            Rounded
          </button>
          <button class="p-2 text-white bg-gray-700" @click="square()">
            Square
          </button>
        </div>
        <div class="m-4">
          Color :
          <button class="p-2 text-white bg-gray-700" @click="colorRed()">
            Red
          </button>
          <button class="p-2 text-white bg-gray-700" @click="colorBlue()">
            Blue
          </button>
        </div>
        <div class="m-4">
          Padding :
          <button class="p-2 text-white bg-gray-700" @click="paddingSmall()">
            Small
          </button>
          <button class="p-2 text-white bg-gray-700" @click="paddingLarge()">
            Large
          </button>
        </div>
        <div class="m-4">
          Text :
          <input type="text" v-model="text" class="w-full px-4 py-2 border" />
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
    round() {
      this.classRadius = "rounded";
    },
    square() {
      this.classRadius = "";
    },
    bgColor(name, level) {
      this.classBgColor = level ? `bg-${name}-${level}` : `text-${name}`;
    },
    color(name, level = null) {
      this.classColor = level ? `text-${name}-${level}` : `text-${name}`;
    },
    colorRed() {
      this.classBgColor = "bg-red-700 text-white";
    },
    colorBlue() {
      this.classBgColor = "bg-blue-700 text-white";
    },
    paddingSmall() {
      this.classPadding = "py-2 px-4";
    },
    paddingLarge() {
      this.classPadding = "py-4 px-6";
    }
  }
};
</script>
