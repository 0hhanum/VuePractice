<template>
  <div id="router-container">
    <BaseCard>
      <FormCard></FormCard>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
import FormCard from "./layouts/FormCard.vue";
export default {
  components: { BaseCard, FormCard },
};
</script>

<style scoped>
#router-container {
  width: 100%;
  height: 100vh;
  background-color: darkolivegreen;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
