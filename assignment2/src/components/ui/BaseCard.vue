<template>
  <div class="card" :style="cssObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cssObject: Object,
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 60rem;
}
</style>
