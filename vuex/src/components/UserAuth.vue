<template>
  <div>
    <button @click="login">LOGIN</button>
    <button @click="logout">LOGOUT</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>

<style></style>
