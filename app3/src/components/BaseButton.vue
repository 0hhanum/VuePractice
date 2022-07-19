<template>
  <button>
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped>
button {
  width: 150px;
  height: 50px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
}
</style>
