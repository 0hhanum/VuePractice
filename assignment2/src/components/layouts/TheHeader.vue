<template>
  <header>
    <router-link to="/"><h1>TWBP The World Best Potato</h1></router-link>
    <nav>
      <ul>
        <li>
          <span class="nav-btn" v-if="getIsSignIn">{{ getCurrentUser }}</span>
        </li>
        <li>
          <router-link class="nav-btn" to="/potatoes">POTATOES</router-link>
        </li>
        <li>
          <router-link class="nav-btn" to="/orders">ORDER</router-link>
        </li>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    getIsSignIn() {
      return this.$store.getters.getIsSignIn;
    },
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
}
h1 {
  display: flex;
  margin: 0;
}
ul {
  list-style: none;
  display: flex;
}
li {
  margin-right: 20px;
}
a,
span {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
.router-link-active.nav-btn {
  color: tomato;
}
</style>
