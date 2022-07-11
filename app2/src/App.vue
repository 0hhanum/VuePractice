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
    <card-template>
      <template v-slot:firstSlot>
        <ContentComponent3 :styles="{ color: 'red' }" />
      </template>
      <template v-slot:secondSlot> </template>
    </card-template>
  </div>
</template>
<script>
import ContentComponent from "./components/Content";
import ContentComponent2 from "./components/Content2";
import ContentComponent3 from "./components/Content3";
// import ContentComponent4 from "./components/Content4";
export default {
  name: "app",
  components: {
    ContentComponent: ContentComponent,
    ContentComponent2: ContentComponent2,
    ContentComponent3: ContentComponent3,
  },
};
</script>
