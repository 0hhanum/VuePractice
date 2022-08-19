<template>
  <div>Check Login ...</div>
</template>

<script>
import { signInFirebase } from "@/firebase";
export default {
  mounted() {
    signInFirebase().then((response) => {
      console.log(response);
      this.$router.push("/");
    });
  },
};
</script>

<style></style>
