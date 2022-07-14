<template>
  <div>
    <TheHeader title="SITES" />
    <StoredSite />
  </div>
</template>

<script>
import StoredSite from "./components/StoredSite.vue";
import TheHeader from "./layouts/TheHeader.vue";
export default {
  components: { StoredSite, TheHeader },
};
</script>

<style></style>
