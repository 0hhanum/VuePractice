<template>
  <div>
    <div v-if="getIsLoggedIn">
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
    <div v-if="false">
      <ul>
        <li v-for="item in storedItems" :key="item">{{ item }}</li>
        <button @click="addItem({ value: 131313 })">add</button>
      </ul>
    </div>
    <div>
      <UserAuth></UserAuth>
    </div>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import GetState from "./components/GetState";
import UserAuth from "./components/UserAuth";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MyComponent,
    MyComponent2,
    GetState,
    UserAuth,
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
    ...mapGetters(["getIsLoggedIn"]),
  },
  methods: {
    ...mapActions(["addItem"]),
  },
};
</script>

<style></style>
