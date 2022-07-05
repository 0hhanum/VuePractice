<template>
  <div id="app">
    <ul>
      <user-component :key="user.id" v-for="user in users" v-bind="user" />
    </ul>
    <create-user @register-user="registerUser" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    registerUser(id, username, age) {
      if (id && username && age) {
        this.users.push({
          id: id,
          username: username,
          age: age,
        });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
