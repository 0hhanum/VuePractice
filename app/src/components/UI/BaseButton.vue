<template>
  <button :class="mode" :style="styleProp">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode", "styleProp"],
};
</script>

<style scoped>
button {
  background-color: rgba(44, 82, 72, 0.5);
  border: none;
  border-radius: 10px;
  color: white;
  width: 100px;
  height: 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}
button:hover {
  color: rgba(44, 82, 72, 0.5);
}
.flat {
  background-color: transparent;
  color: black;
}
</style>
