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
      localStorage.setItem("userId", userId);
      localStorage.setItem("uid", uid);
      this.toastMessage("Success to Sign In :)", "success");
      this.$store.dispatch("signIn", { userId, uid });
      this.$router.push("/");
    });
  },
  inject: ["toastMessage"],
};
</script>

<style></style>
