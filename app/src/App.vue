<template>
  <section id="app">
    <header>
      <h1>People</h1>
    </header>
    <ul>
      <contact-component
        v-for="person in people"
        :key="person.id"
        :person="person"
        @toggle-favorite="toggleFavoriteStatus"
      />
    </ul>
  </section>
</template>

<script>
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
  },
};
export default app;
</script>

<style></style>
