<template>
  <div id="app">
    <ToastMessage ref="toastMessage" />
    <div v-if="isSignIn">
      <TheHeader></TheHeader>
      <div id="container">
        <div id="contents">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import ToastMessage from "./components/ui/ToastMessage.vue";
import { checkSignIn } from "./firebase";

export default {
  name: "App",
  components: {
    TheHeader,
    ToastMessage,
  },
  data() {
    return {
      isSignIn: false,
    };
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
  async mounted() {
    // const isSignIn = await signInFirebase();
    this.isSignIn = checkSignIn();

    console.log(`로그인 : `);
    console.log(this.isSignIn);
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
