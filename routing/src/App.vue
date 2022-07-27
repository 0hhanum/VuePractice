<template>
  <div>
    <nav>
      <router-link to="/beer">BEER</router-link>
      <router-link to="/peer">PEER</router-link>
      <button @click="toggleRoute">Toggle Route</button>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    toggleRoute() {
      const currentPath = this.$router.history.current.fullPath;
      if (currentPath === "/beer") {
        this.$router.push("/peer");
      } else {
        this.$router.push("beer");
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
a:active,
a.router-link-active {
  background-color: blue;
}
</style>
