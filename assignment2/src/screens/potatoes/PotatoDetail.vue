<template>
  <div>
    <h1>DETAIL</h1>
    <router-link :to="`${id}/order`">ORDER</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this.$router.currentRoute.params.id;
  },
};
</script>

<style></style>
