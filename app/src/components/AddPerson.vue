<template>
  <form @submit.prevent="handleSubmit" per>
    <label for="id">ID</label>
    <input id="id" />
    <label for="name">Name</label>
    <input id="name" />
    <label for="number">Number</label>
    <input id="number" />
    <label for="email">Email</label>
    <input id="email" />
    <button type="submit">SUBMIT</button>
  </form>
</template>
<script>
export default {
  name: "add-person",
  methods: {
    handleSubmit(e) {
      this.$emit("submit-person", e);
    },
  },
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
  width: 200px;
}
input {
  margin-bottom: 10px;
}
</style>
