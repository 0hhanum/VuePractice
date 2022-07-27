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
      const currentPath = this.$route.path;
      if (currentPath === "/beer") {
        this.$router.push("/peer");
      } else if (currentPath === "/peer") {
        this.$router.push("/beer");
      } else {
        this.$router.push("/beer");
      }
    },
  },
  data() {
    return {
      beers: [
        { name: "cass", taste: 1 },
        { name: "filite", taste: 2 },
        { name: "fillgood", taste: 3 },
      ],
    };
  },
  provide() {
    return { beers: this.beers };
  },
};
</script>

<style>
a:active,
a.router-link-active {
  background-color: blue;
}
</style>
