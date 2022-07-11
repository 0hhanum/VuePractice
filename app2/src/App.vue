<template>
  <div id="app">
    <card-template>
      <template v-slot:firstSlot>
        <ContentComponent />
      </template>
      <template v-slot:secondSlot>
        <ContentComponent2 />
      </template>
    </card-template>
  </div>
</template>
<script>
import ContentComponent from "./components/Content";
import ContentComponent2 from "./components/Content2";
export default {
  name: "app",
  components: {
    ContentComponent: ContentComponent,
    ContentComponent2: ContentComponent2,
  },
};
</script>
