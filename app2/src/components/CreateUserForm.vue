<template>
  <form @submit.prevent="$emit('register-user', id, username, age)">
    <div>
      <label for="id">ID</label>
      <input v-model="id" id="id" />
    </div>
    <div>
      <label for="username">USERNAME</label>
      <input v-model="username" id="username" />
    </div>
    <div>
      <label for="age">AGE</label>
      <input v-model="age" id="age" type="Number" />
    </div>
    <button>SUBMIT</button>
  </form>
</template>
<script>
export default {
  name: "create-user",
  data() {
    return {
      id: this.id,
      username: this.username,
      age: this.age,
    };
  },
};
</script>
<style>
input {
  margin-left: 20px;
}
form {
  justify-content: center;
  align-items: center;
}
</style>
