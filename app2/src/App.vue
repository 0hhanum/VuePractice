<template>
  <div id="app">
    <!-- <section v-if="false">
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
    </div> -->
    <div>
      <button @click="setSelectedComponent('manage-item')">MANAGE</button>
      <button @click="setSelectedComponent('active-item')">ACTIVATE</button>
      <!-- 
      <active-item v-if="selectedComponent === 'active-item'"></active-item>
      <manage-item v-if="selectedComponent === 'manage-item'"></manage-item>
       -->
      <component :is="selectedComponent"></component>
    </div>
  </div>
</template>
<script>
import ActiveItem from "./components/ActiveItem.vue";
import ManageItem from "./components/ManageItem.vue";

export default {
  name: "app",
  components: {
    ActiveItem: ActiveItem,
    ManageItem: ManageItem,
  },
  data() {
    return {
      selectedComponent: "active-item",
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>
