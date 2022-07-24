<template>
  <div>
    <TheHeader title="SITES" />
    <SiteNavigator />
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";
import SiteNavigator from "./layouts/SiteNavigator.vue";

export default {
  components: { TheHeader, SiteNavigator },
};
</script>

<style>
body {
  min-width: 1060px;
}
</style>
