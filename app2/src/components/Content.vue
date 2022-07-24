<template>
  <div>
    <h1>HELLO</h1>
    <span :style="styles">I AM CONTENT</span>
  </div>
</template>

<script>
export default {
  name: "content-component",
  props: ["styles"],
};
</script>

<style></style>
