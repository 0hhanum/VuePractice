<template>
  <div>
    <ul>
      <li v-for="item in storedItems" :key="item">{{ item }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in getItemsByGetter" :key="item">{{ item }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in getItemsByGetter2" :key="item">{{ item }}</li>
    </ul>
    <hr />
    <ul>
      <p>a</p>
      <li v-for="item in getItems" :key="item">{{ item }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in getItems2" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    storedItems() {
      const items = this.$store.state.items;
      return [...items, "1"];
    },
    getItemsByGetter() {
      return this.$store.getters.getItems;
    },
    getItemsByGetter2() {
      return this.$store.getters.getItems2;
    },
    ...mapGetters(["getItems", "getItems2"]),
  },
};
</script>
