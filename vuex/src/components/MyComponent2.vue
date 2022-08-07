<template>
  <ul>
    <li v-for="item in storedItems" :key="item">{{ item }}</li>
    <button @click="add">ADD</button>
    <button @click="commit">USE ADD COMMIT</button>
  </ul>
</template>

<script>
export default {
  computed: {
    storedItems() {
      return this.$store.state.items;
    },
  },
  methods: {
    add() {
      this.storedItems.push("123");
    },
    commit() {
      this.$store.commit("addItem", "afaf");
    },
  },
};
</script>

<style></style>
