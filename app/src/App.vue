<template>
  <section id="app">
    <header>
      <h1>People</h1>
    </header>
    <add-person @submit-person="handleSubmit" />
    <ul>
      <contact-component
        v-for="person in people"
        :key="person.id"
        :person="person"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact="deleteContact"
      />
    </ul>
  </section>
</template>

<script>
import AddPerson from "./components/AddPerson.vue";
const app = {
  name: "App",
  data() {
    return {
      people: [
        {
          id: "goodthing",
          name: "hanum",
          number: "123",
          email: "ewef@asd.com",
          favorite: false,
        },
        {
          id: "hello",
          name: "hah",
          number: "12 121",
          email: "ewesdf@asd.com",
          favorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(id) {
      const identifiedPerson = this.people.find((person) => person.id === id);
      identifiedPerson.favorite = !identifiedPerson.favorite;
    },
    handleSubmit(e) {
      const target = e.target;
      const newPerson = { favorite: false };
      for (let input of target) {
        const prop = input.id;
        const value = input.value;
        newPerson[prop] = value;
      }
      this.people.push(newPerson);
    },
    deleteContact(id) {
      this.people = this.people.filter((person) => person.id !== id);
    },
  },
  components: {
    "add-person": AddPerson,
  },
};
export default app;
</script>

<style></style>
