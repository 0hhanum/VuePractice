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
          number: "12 1231",
          email: "ewef@asd.com",
        },
        {
          id: "hello",
          name: "hah",
          number: "12 121",
          email: "ewesdf@asd.com",
        },
      ],
    };
  },
};
export default app;
</script>

<style></style>
