<template>
  <li>
    <div class="potato-info-box">
      <h3 class="potato-info">{{ potato.name }}</h3>
      <span class="potato-info">{{ potato.weight }} kg</span>
      <span class="potato-info">{{ potato.price }} $</span>
    </div>
    <div class="action">
      <router-link :to="getDetailLink">Details</router-link>
      <router-link :to="getOrderLink">Order</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    potato: Object,
  },
  computed: {
    getDetailLink() {
      return `/potatoes/${this.potato.id}`;
    },
    getOrderLink() {
      return `/potatoes/${this.potato.id}/order`;
    },
  },
};
</script>

<style scoped>
li {
  border-bottom: 0.8px solid white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(1, 1, 1, 0.2);
  margin-bottom: 4px;
  border-radius: 10px;
}
.potato-info-box {
  display: flex;
  align-items: center;
}
h3 {
  margin: 0;
  width: 200px;
  border-right: 1px solid black;
}
span {
  width: 70px;
  overflow: hidden;
  border-right: 1px solid black;
  text-align: center;
}
.action a {
  margin-right: 10px;
  text-decoration: none;
}
</style>
