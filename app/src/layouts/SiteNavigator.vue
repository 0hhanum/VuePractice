<template>
  <div id="container">
    <div id="cardContainer">
      <BaseCard :styleProp="{ backgroundColor: 'white', width: '20%' }">
        <BaseButton
          @click.native="setSelected('StoredSites')"
          :mode="checkSelected('StoredSites')"
          >Stored Sites</BaseButton
        >
        <BaseButton
          @click.native="setSelected('AddSite')"
          :mode="checkSelected('AddSite')"
          >Add Sites</BaseButton
        >
      </BaseCard>
    </div>
    <div id="componentContainer">
      <component :is="selected" @submit-data="submitData"></component>
    </div>
  </div>
</template>

<script>
import StoredSites from "../components/resources/StoredSites.vue";
import AddSite from "../components/resources/AddSite.vue";

export default {
  components: { StoredSites, AddSite },
  data() {
    return {
      selected: "StoredSites",
    };
  },
  methods: {
    setSelected(selected) {
      this.selected = selected;
    },
    checkSelected(component) {
      return this.selected === component ? "flat" : null;
    },
    submitData(title, description, link) {
      return {
        title: title,
        description: description,
        link: link,
      };
    },
  },
  computed: {},
};
</script>

<style scoped>
#cardContainer {
  display: flex;
  justify-content: center;
  width: 80%;
}
#componentContainer {
  width: 80%;
}
#container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
