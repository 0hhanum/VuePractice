<template>
  <ul>
    <li v-for="beer in beers" :key="beer.name">
      <router-link :to="`/beer/${beer.name}`">
        {{ beer.name }} &rarr; {{ beer.taste }} / 5
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  inject: ["beers"],
};
</script>

<style></style>
