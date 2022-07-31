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
      this.$router.push(routerObject);
      this.peerName = "";
    },
  },
};
</script>

<style></style>
