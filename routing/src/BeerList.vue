<template>
  <ul>
    <li v-for="beer in beers" :key="beer.name">
      <router-link :to="getBeerDetail(beer)">
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
  methods: {
    getBeerDetail(beer) {
      return `/beer/${beer.name}`;
    },
  },
  inject: ["beers"],
};
</script>

<style></style>
