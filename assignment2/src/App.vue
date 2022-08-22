<template>
  <div id="app">
    <ToastMessage ref="toastMessage" />
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
import ToastMessage from "./components/ui/ToastMessage.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    ToastMessage,
  },
  computed: {
    getIsSignIn() {
      return this.$store.getters.getIsSignIn;
    },
  },
  methods: {
    createMessage(message, type) {
      this.$refs.toastMessage.createMessage(message, type);
    },
  },
  provide() {
    return {
      toastMessage: this.createMessage,
    };
  },
  mounted() {
    if (localStorage.getItem("userId")) {
      const userId = localStorage.getItem("userId");
      const uid = localStorage.getItem("uid");
      this.$store.dispatch("signIn", userId, uid);
    }
  },
};
</script>

<style>
html {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-weight: lighter;
  min-width: 1050px;
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
