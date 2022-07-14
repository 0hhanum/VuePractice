<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
