<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
      <button @click="del">del</button>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["items"],
  methods: {
    del() {
      this.items.pop();
    },
  },
};
</script>

<style></style>
