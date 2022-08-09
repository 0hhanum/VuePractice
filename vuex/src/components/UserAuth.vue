<template>
  <div>
    <button @click="login">LOGIN</button>
    <button @click="logout">LOGOUT</button>
    {{ getIsLoggedIn }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["login", "logout"]),
  },
  computed: {
    getIsLoggedIn() {
      console.log(this.$store.getters.getTest);
      return this.$store.state.storeTWO;
    },
  },
};
</script>

<style></style>
