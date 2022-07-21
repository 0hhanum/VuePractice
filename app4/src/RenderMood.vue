<template>
  <div>
    <ul>
      <li v-for="mood in moods" :key="mood">
        TODAY'S MOOD IS
        <strong>{{ mood.mood }}</strong>
        AND YOU WANNA SLEEP ?
        <strong>{{ mood.sleep }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["moods"],
};
</script>

<style></style>
