<template>
  <div>Check Login ...</div>
</template>

<script>
import { signInFirebase } from "@/firebase";
export default {
  mounted() {
    signInFirebase().then((response) => {
      const userId = response.user.auth.currentUser.email;
      const uid = response.user.uid;
      const expire = response.user.stsTokenManager.expirationTime;
      // const expire = +new Date() + 5000;

      localStorage.setItem("userId", userId);
      localStorage.setItem("uid", uid);
      localStorage.setItem("expire", expire);

      this.toastMessage("Success to Sign In :)", "success");
      this.$store.dispatch("signIn", { userId, uid });
      this.$router.push("/");
    });
  },
  inject: ["toastMessage"],
};
</script>

<style></style>
