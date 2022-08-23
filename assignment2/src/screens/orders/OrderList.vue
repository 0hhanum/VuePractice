<template>
  <section>
    <BaseCard>
      <header>
        <h2>Order List</h2>
      </header>
      <ul>
        <li v-for="order in getOrderList" :key="order.id">
          <BaseCard>
            <div>
              <span>{{ order.id }}</span>
              <span>{{ order.address.val }}</span>
              <span>{{ order.amount.val }} EA</span>
            </div>
            <div>{{ order.message.val }}</div>
          </BaseCard>
        </li>
      </ul>
      <h3 v-if="!getOrderList.length">No Order -_-</h3>
    </BaseCard>
  </section>
</template>

<script>
export default {
  computed: {
    getOrderList() {
      return this.$store.getters.getOrders;
    },
  },
  mounted() {
    const orders = this.$store.getters.getOrders;
    if (orders.length === 0) {
      this.$store.dispatch("loadOrder");
    }
  },
};
</script>

<style></style>
