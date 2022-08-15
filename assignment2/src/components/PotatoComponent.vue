<template>
  <BaseCard :cssObject="cssObject">
    <li>
      <div class="potato-info-box">
        <h3 class="potato-info">{{ potato.name }}</h3>
        <span class="potato-info">{{ potato.weight }} kg</span>
        <span class="potato-info">{{ potato.price }} $</span>
        <span class="potato-info"> Seller : {{ potato.owner }}</span>
      </div>
      <div class="action">
        <BaseButton :styleObject="buttonCSS" :link="true" :to="getDetailLink"
          >Details</BaseButton
        >
        <BaseButton :styleObject="buttonCSS" :link="true" :to="getOrderLink"
          >Order</BaseButton
        >
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
      buttonCSS: {
        padding: "0.5rem",
        marginLeft: "1rem",
        fontSize: "1em",
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
  align-items: center;
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
.potato-info:last-child {
  width: 120px;
}
</style>
