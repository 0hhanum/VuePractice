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
    <div></div>
    <ul>
      <li v-for="item in $store.state.items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";

export default {
  components: {
    MyComponent,
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
};
</script>

<style></style>
