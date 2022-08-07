<template>
  <ul>
    <li v-for="item in storedItems" :key="item">{{ item }}</li>
    <button @click="add">ADD</button>
    <button @click="commit">USE ADD COMMIT</button>
    <button @click="action">USE ACTION</button>
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
      // this.$store.commit("addItem", { value: "afaf" });
      this.$store.commit({
        type: "addItem",
        value: "afaf",
      });
    },
    action() {
      this.$store.dispatch("addItem", { value: 55 });
    },
  },
};
</script>

<style></style>
