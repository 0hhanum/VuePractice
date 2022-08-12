<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div id="container">
      <div id="contents">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  mounted() {},
};
</script>

<style>
html {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-weight: lighter;
}

#container {
  width: 100%;
  display: flex;
  justify-content: center;
}
#contents {
  width: 70%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
