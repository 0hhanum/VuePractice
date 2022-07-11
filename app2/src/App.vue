<template>
  <div id="app">
    <card-template>
      <ContentComponent />
    </card-template>
  </div>
</template>
<script>
import ContentComponent from "./components/Content";
export default {
  name: "app",
  components: {
    ContentComponent: ContentComponent,
  },
};
</script>
