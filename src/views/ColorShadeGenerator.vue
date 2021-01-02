<template>
  <div class="container flex justify-center mx-auto mt-20">
    <div class="flex flex-col justify-between w-full">
      <div
        class="flex flex-col items-center justify-between mx-4 my-2 sm:flex-row"
      >
        <!-- Title -->
        <div class="flex flex-col mr-4">
          <h1 class="text-2xl font-bold text-black uppercase">
            Color shades generator
          </h1>
          <p>
            Please enter valid hex color and generate tints and shades based on
            it
          </p>
        </div>
        <!-- Control -->
        <div class="flex mt-8 sm:mt-0">
          <div class="flex items-end mr-4 text-center">
            <a
              class="flex items-center w-10 h-10 p-2 mr-4 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              href="javascript:void(0)"
              @click="toggleView()"
            >
              <svg
                class="flex-1 p-1 text-gray-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                />
              </svg>
            </a>
            <a
              class="flex items-center w-10 h-10 p-2 mr-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              href="javascript:void(0)"
              @click="refreshColor()"
            >
              <svg
                class="flex-1 p-1 text-gray-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
                />
              </svg>
            </a>
          </div>
          <div class="flex flex-col mr-4 text-center">
            <label
              for="regular"
              class="text-xs font-bold leading-4 text-gray-700 uppercase"
              >Color Interval</label
            >
            <span class="text-xs font-hairline"
              >( {{ colorIntervalMin }} - {{ colorIntervalMax }} )</span
            >
            <input
              id="regular"
              ref="selectInterval"
              v-model="colorInterval"
              autocomplete="off"
              type="number"
              class="w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-gray-400 shadow select-all text-md focus:outline-none focus:border-gray-500"
              placeholder="Input color interval"
              @click="$refs.selectInterval.select()"
            />
          </div>
          <div class="flex flex-col text-center">
            <label
              for="regular"
              class="text-xs font-bold leading-4 text-gray-700 uppercase"
              >Color Range</label
            >
            <span class="text-xs font-hairline">( 2 - 9 )</span>
            <input
              id="regular"
              ref="selectRange"
              v-model="colorRange"
              autocomplete="off"
              type="number"
              class="w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-gray-400 shadow select-all text-md focus:outline-none focus:border-gray-500"
              placeholder="Input color range"
              @click="$refs.selectRange.select()"
            />
          </div>
        </div>
      </div>
      <hr class="mx-4 my-4 border-gray-400" />
      <div class="flex flex-wrap justify-center w-full sm:flex-row">
        <div
          v-for="(color, index) in colors"
          :key="'color-' + '-' + index"
          class="relative w-1/2 px-4 sm:w-1/3 md:w-1/5"
        >
          <div
            v-if="color.warning === true"
            class="absolute right-0 mr-4 -mt-4 text-xs text-right text-red-600"
          >
            Fill 6 Hex Color
          </div>
          <div class="flex mb-4">
            <input
              v-model="color.hex"
              type="text"
              class="w-full p-2 text-sm uppercase bg-white border outline-none"
              autocomplete="off"
              name="color"
              placeholder="HEX COLOR"
              @keyup="updateColor($event, index)"
              @change="updateColor($event, index)"
            />
          </div>
          <div class="flex flex-col mb-8">
            <div
              v-for="shade in colorShades[index]"
              :key="'shade-' + shade + '-' + index + random()"
              class="shadow-md focus:outline-none"
              :class="{ 'text-white': !isLumaLight(shade) }"
              :style="{ backgroundColor: '#' + shade }"
            >
              <p
                class="px-4 py-4 text-center uppercase select-all text-md hover:opacity-75"
                :class="{ 'opacity-0': !isHexVisible }"
              >
                #{{ shade }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-4">
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
// var randomColor = require("@/libs/random-color");
import randomColor from "@/libs/random-color";

export default {
  name: "Home",
  data() {
    return {
      isHexVisible: false,
      colors: [
        { hex: "6002EE", warning: false },
        { hex: "4CAF50", warning: false },
        { hex: "2196F3", warning: false },
        { hex: "FFEB3B", warning: false },
        { hex: "F44336", warning: false }
      ],
      colorRange: 4, // (0 - 9)
      colorInterval: 18,
      colorIntervalMin: 0,
      colorIntervalMax: 30,
      interval: 0.18,
      colorShades: []
    };
  },
  watch: {
    colorInterval() {
      if (this.colorInterval > this.colorIntervalMax) {
        this.colorInterval = this.colorIntervalMax;
      }
      if (this.colorInterval < this.colorIntervalMin) {
        this.colorInterval = this.colorIntervalMin;
      }
      this.interval = this.colorInterval / 100;
      this.colors.forEach((color, index) => {
        this.createTintsAndShades(color.hex, index);
      });
    },
    colorRange() {
      if (this.colorRange > 9) {
        this.colorRange = 9;
      }
      if (this.colorRange < 0) {
        this.colorRange = 0;
      }
      this.colorIntervalMax = 20 - (this.colorRange - 4) * 2;
      this.colorInterval = this.colorIntervalMax;
      this.colors.forEach((color, index) => {
        this.createTintsAndShades(color.hex, index);
      });
    }
  },
  created() {
    this.colors.forEach((color, index) => {
      this.createTintsAndShades(color.hex, index);
    });
  },
  methods: {
    random() {
      // Fixed vue duplicate key when choose same color
      return Math.random(100000);
    },
    isHex(h) {
      return /[0-9A-F]{6}$/i.test(h);
    },
    toggleView() {
      this.isHexVisible = !this.isHexVisible;
    },
    refreshColor() {
      this.colors[0].hex = randomColor().replace("#", "");
      this.colors[1].hex = randomColor({ hue: "blue" }).replace("#", "");
      this.colors[2].hex = randomColor({ hue: "blue" }).replace("#", "");
      this.colors[3].hex = randomColor({ hue: "yellow" }).replace("#", "");
      this.colors[4].hex = randomColor({ hue: "red" }).replace("#", "");

      this.updateHexColor(this.colors[0].hex, 0);
      this.updateHexColor(this.colors[1].hex, 1);
      this.updateHexColor(this.colors[2].hex, 2);
      this.updateHexColor(this.colors[3].hex, 3);
      this.updateHexColor(this.colors[4].hex, 4);
    },
    updateHexColor(e, index) {
      const color = e.replace("#", "");
      // color.length === 6 to ignore alpha
      if (color.length === 6 && this.isHex(color)) {
        this.colors[index].warning = false;
        this.createTintsAndShades(color, index);
      } else {
        this.colors[index].warning = true;
      }
    },
    updateColor(e, index) {
      const color = e.target.value.replace("#", "");
      // color.length === 6 to ignore alpha
      if (color.length === 6 && this.isHex(color)) {
        this.colors[index].warning = false;
        this.createTintsAndShades(color, index);
      } else {
        this.colors[index].warning = true;
      }
    },
    isLumaLight(color) {
      var c = color.replace("#", "");
      var rgb = parseInt(c, 16); // convert rrggbb to decimal
      var r = (rgb >> 16) & 0xff; // extract red
      var g = (rgb >> 8) & 0xff; // extract green
      var b = (rgb >> 0) & 0xff; // extract blue
      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (luma < 110) {
        return false;
      }
      return true;
    },
    pad(number, length) {
      var str = "" + number;
      while (str.length < length) {
        str = "0" + str;
      }
      return str;
    },
    hexToRGB(colorValue) {
      colorValue = colorValue.toString();
      return {
        red: parseInt(colorValue.substr(0, 2), 16),
        green: parseInt(colorValue.substr(2, 2), 16),
        blue: parseInt(colorValue.substr(4, 2), 16)
      };
    },
    intToHex(rgbint) {
      return this.pad(
        Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16),
        2
      );
    },
    rgbToHex(rgb) {
      return (
        this.intToHex(rgb.red) +
        this.intToHex(rgb.green) +
        this.intToHex(rgb.blue)
      );
    },
    rgbShade(rgb, i) {
      return {
        red: rgb.red * (1 - this.interval * i),
        green: rgb.green * (1 - this.interval * i),
        blue: rgb.blue * (1 - this.interval * i)
      };
    },
    rgbTint(rgb, i) {
      return {
        red: rgb.red + (255 - rgb.red) * i * this.interval,
        green: rgb.green + (255 - rgb.green) * i * this.interval,
        blue: rgb.blue + (255 - rgb.blue) * i * this.interval
      };
    },
    calculateShades(colorValue) {
      return this.calculate(colorValue, this.rgbShade);
    },
    calculateTints(colorValue) {
      return this.calculate(colorValue, this.rgbTint);
    },
    calculate(colorValue, shadeOrTint) {
      var color = this.hexToRGB(colorValue);
      var shadeValues = [];
      const range = this.colorRange;
      for (var i = 0; i < range; i++) {
        shadeValues[i] = this.rgbToHex(shadeOrTint(color, i + 1));
      }
      return shadeValues;
    },
    createTintsAndShades(color, index) {
      if (color !== null) {
        // trim hash tag
        color = color.replace("#", "");
        var calculatedShades = this.calculateShades(color);
        var calculatedTints = this.calculateTints(color);
        var result = calculatedTints
          .reverse()
          .concat(color)
          .concat(calculatedShades);
        this.colorShades[index] = result;
      }
    }
  }
};
</script>
