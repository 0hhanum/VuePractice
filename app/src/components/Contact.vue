<template>
  <li>
    <h2>{{ person.name }} {{ person.favorite ? "(favorite)" : null }}</h2>
    <button @click="toggleDetails">
      {{ detailVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      {{ person.favorite ? "Remove" : "Add" }} Favorite
    </button>
    <ul v-if="detailVisible">
      <li><strong>Phone: </strong>{{ person.number }}</li>
      <li><strong>Email: </strong>{{ person.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  name: "contact-component",
  props: {
    person: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      detailVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailVisible = !this.detailVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.person.id);
    },
  },
};
</script>
