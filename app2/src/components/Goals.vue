<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :goal="goal"></slot>
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "goal-template",
  data() {
    return {
      goals: ["one", "two"],
    };
  },
};
</script>

<style></style>
