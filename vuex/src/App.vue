<template>
  <div>
    <div v-if="false">
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
      <div>
        <GetState></GetState>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="item in storedItems" :key="item">{{ item }}</li>
        <button @click="addItem({ value: 131313 })">add</button>
      </ul>
    </div>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import GetState from "./components/GetState";
import { mapActions } from "vuex";

export default {
  components: {
    MyComponent,
    MyComponent2,
    GetState,
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
  methods: {
    ...mapActions(["addItem"]),
  },
};
</script>

<style></style>
