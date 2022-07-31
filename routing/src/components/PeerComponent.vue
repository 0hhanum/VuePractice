<template>
  <p>
    PEERNAME <strong>{{ peerName }}</strong>
  </p>
</template>

<script>
export default {
  created() {
    const peerName = this.$route.query.name;
    if (!peerName) {
      this.$router.push({
        name: "peer",
      });
    }
    this.peerName = peerName;
  },
};
</script>
