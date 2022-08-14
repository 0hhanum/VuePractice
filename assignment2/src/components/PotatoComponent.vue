<template>
  <BaseCard :cssObject="cssObject">
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
  </BaseCard>
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
  data() {
    return {
      cssObject: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    };
  },
};
</script>

<style scoped>
li {
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
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
