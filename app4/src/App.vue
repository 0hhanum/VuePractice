<template>
  <div>
    <MoodCheck @submit-mood="recordMood"></MoodCheck>
    <RenderMood ref="renderMood"></RenderMood>
  </div>
</template>

<script>
import MoodCheck from "./MoodCheck.vue";
import RenderMood from "./RenderMood.vue";
export default {
  components: { MoodCheck, RenderMood },
  methods: {
    recordMood(id, mood, sleep) {
      this.$refs.renderMood.moods.unshift({ id: id, mood: mood, sleep: sleep });
    },
  },
};
</script>

<style></style>
