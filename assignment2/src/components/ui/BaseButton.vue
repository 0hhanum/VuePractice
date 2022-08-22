<template>
  <button v-if="!link" :class="mode" :style="styleObject">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode" :style="styleObject">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    styleObject: {
      type: Object,
      required: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 20px;
  border-radius: 12px;
  box-shadow: -4px 2px 12px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-decoration: none;
  color: black;
}
button:hover,
a:hover {
  box-shadow: -4px 2px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
