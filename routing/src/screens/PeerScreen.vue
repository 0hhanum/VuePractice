<template>
  <div>
    <div>DRINK PEER</div>
    <input v-model="peerName" />
    <button @click="goDetail">GO</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peerName: "",
    };
  },
  methods: {
    goDetail() {
      if (!this.peerName) return;
      const routerObject = {
        name: "peer-detail",
        query: {
          name: this.peerName,
        },
      };
      this.peerName = "";
      this.$router.push(routerObject);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.peerName) {
      const confirmLeave = confirm("Are you sure?");
      next(confirmLeave);
    } else {
      next();
    }
  },
};
</script>

<style></style>
