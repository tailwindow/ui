<template>
  <div>
    <button :class="btnClass">
      {{ text }}
    </button>
    <div>
      <div class="p-4 my-4 text-white bg-gray-700">
        {{ btnClass }}
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
</template>

<script>
export default {
  data() {
    return {
      classColor: "",
      classBgColor: "",
      classRadius: "",
      classPadding: "",
      text: "Button"
    };
  },
  computed: {
    btnClass() {
      return [
        this.classPadding,
        this.classColor,
        this.classRadius,
        this.classBgColor
      ].join(" ");
    }
  },
  methods: {
    round() {
      this.classRadius = "rounded";
    },
    square() {
      this.classRadius = "";
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
