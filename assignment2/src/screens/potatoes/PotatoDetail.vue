<template>
  <div>
    <h1>DETAIL</h1>
    <router-link :to="`${currentPath}/order`">ORDER</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: null,
    };
  },
  mounted() {
    this.currentPath = this.$route.path;
  },
};
</script>

<style></style>
