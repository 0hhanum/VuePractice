<template>
  <div>
    <MoodCheck @submit-mood="recordMood"></MoodCheck>
    <RenderMood></RenderMood>
  </div>
</template>

<script>
import MoodCheck from "./MoodCheck.vue";
import RenderMood from "./RenderMood.vue";
export default {
  components: { MoodCheck, RenderMood },
  methods: {
    recordMood() {
      //
    },
  },
};
</script>

<style></style>
