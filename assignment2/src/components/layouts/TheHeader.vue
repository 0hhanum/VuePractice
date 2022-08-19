<template>
  <header>
    <router-link to="/"><h1>TWBP The World Best Potato</h1></router-link>
    <nav>
      <ul>
        <li>
          <router-link class="nav-btn" to="/potatoes">POTATOES</router-link>
        </li>
        <li>
          <router-link class="nav-btn" to="/orders">ORDER</router-link>
        </li>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
}
h1 {
  display: flex;
  margin: 0;
}
ul {
  list-style: none;
  display: flex;
}
li {
  margin-right: 20px;
}
a {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
.router-link-active.nav-btn {
  color: tomato;
}
</style>
