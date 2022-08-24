<template>
  <div></div>
</template>
<script>
export default {
  inject: ["toastMessage"],
  created() {
    this.toastMessage("You have to Sign in first :)", "success");
    this.$router.push("/");
  },
};
</script>
