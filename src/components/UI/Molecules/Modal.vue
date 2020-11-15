<template>
  <div v-if="dim" class="fixed inset-0 z-10 flex items-center justify-center">
    <div class="fixed inset-0 shadow bg-transparent-black" @click="close"></div>

    <transition
      name="modal"
      @after-leave="afterLeave"
      @after-enter="$emit('opened')"
    >
      <div
        v-if="display"
        class="fixed w-full max-w-sm max-h-screen p-4 bg-white rounded"
      >
        <slot name="header">
          <h2 class="text-xl font-bold text-center">{{ title }}</h2>
        </slot>

        <div class="my-4 overflow-y-auto">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    title: {
      required: true,
      type: String
    }
  },

  emits: ["opened", "closed"],

  data() {
    return {
      name: "",
      display: false,
      dim: false
    };
  },

  methods: {
    open() {
      this.dim = true;
      this.$nextTick(() => {
        this.display = true;
      });
      document.addEventListener("keydown", this.onEscapeListener);
      document.addEventListener("backbutton", this.onEscapeListener);
    },
    close() {
      this.display = false;
      document.removeEventListener("keydown", this.onEscapeListener);
      document.removeEventListener("backbutton", this.onEscapeListener);
    },
    afterLeave() {
      this.dim = false;
      this.$emit("closed");
    },

    onEscapeListener(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, margin-top 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  margin-top: -50px;
  opacity: 0;
}
.bg-transparent-black {
  background: #00000044;
}
</style>
