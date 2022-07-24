<template>
  <div>
    <ul>
      <li v-for="mood in moods" :key="mood.id">
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
  data() {
    return {
      moods: [],
    };
  },
  async mounted() {
    await getDBData().then((response) => {
      const datas = response.data;
      datas.forEach((data) => {
        const properties = data.properties;
        this.moods.push({
          id: properties.id.title[0].plain_text,
          mood: properties.mood.rich_text[0].plain_text,
          sleep: properties.sleep.rich_text[0].plain_text,
        });
      });
    });
  },
};
</script>

<style></style>
