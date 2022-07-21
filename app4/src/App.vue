<template>
  <div>
    <MoodCheck @submit-mood="recordMood"></MoodCheck>
    <RenderMood :moods="moods"></RenderMood>
  </div>
</template>

<script>
import MoodCheck from "./MoodCheck.vue";
import RenderMood from "./RenderMood.vue";
export default {
  data() {
    return {
      moods: [],
    };
  },
  components: { MoodCheck, RenderMood },
  methods: {
    recordMood(mood, sleep) {
      this.moods.push({
        mood: mood,
        sleep: sleep,
      });
    },
  },
};
</script>

<style></style>
