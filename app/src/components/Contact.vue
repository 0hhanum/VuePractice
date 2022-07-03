<template>
  <li>
    <h2>{{ person.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
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
    person: Object,
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
  },
};
</script>
