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
import { getDBData } from "./api/notionApi";

export default {
  props: ["moods"],
  async mounted() {
    const data = await getDBData();
    console.log(data);
  },
};
</script>

<style></style>
