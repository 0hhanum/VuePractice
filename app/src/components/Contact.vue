<template>
  <li>
    <h2>{{ person.name }} {{ favorite ? "(favorite)" : null }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
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
      id: String,
      name: String,
      number: String,
      email: String,
    },
  },
  data() {
    return {
      detailVisible: false,
      favorite: this.person.favorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailVisible = !this.detailVisible;
    },
    toggleFavorite() {
      this.favorite = !this.favorite;
    },
  },
};
</script>
