<template>
  <div id="app">
    <section v-if="false">
      <card-template>
        <template #firstSlot>
          <ContentComponent />
        </template>
        <template #secondSlot>
          <ContentComponent2 />
        </template>
      </card-template>
      <card-template>
        <template #firstSlot>
          <ContentComponent3 :styles="{ color: 'red' }" />
        </template>
      </card-template>
    </section>
    <div>
      <goals-component>
        <template #default="slotProps">{{ slotProps.goal }}</template>
      </goals-component>
    </div>
  </div>
</template>
<script>
import ContentComponent from "./components/Content";
import ContentComponent2 from "./components/Content2";
import ContentComponent3 from "./components/Content3";
// import ContentComponent4 from "./components/Content4";
import Goals from "./components/Goals";

export default {
  name: "app",
  components: {
    ContentComponent: ContentComponent,
    ContentComponent2: ContentComponent2,
    ContentComponent3: ContentComponent3,
    GoalsComponent: Goals,
  },
};
</script>
