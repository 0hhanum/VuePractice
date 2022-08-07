<template>
  <div>
    <div>
      <MyComponent></MyComponent>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <hr />
    <ul>
      <li v-for="item in storedItems" :key="item">{{ item }}</li>
    </ul>
    <hr />
    <div>
      <MyComponent2></MyComponent2>
    </div>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";

export default {
  components: {
    MyComponent,
    MyComponent2,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5],
    };
  },
  provide() {
    return {
      items: this.items,
    };
  },
  computed: {
    storedItems() {
      return this.$store.state.items;
    },
  },
};
</script>

<style></style>
