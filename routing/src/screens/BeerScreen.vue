<template>
  <div>
    <p>DRINK BEER</p>
    <ul>
      <li v-for="beer in beers" :key="beer.name">
        <router-link :to="getBeerDetail(beer)">
          {{ beer.name }} &rarr; {{ beer.taste }} / 5
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    getBeerDetail(beer) {
      // return `/beer/${beer.name}`;

      const routerObject = {
        // path: `/beer/${beer.name}`,
        name: "beer-detail",
        params: {
          beerName: beer.name,
        },
      };
      return routerObject;
    },
  },
  inject: ["beers"],
};
</script>

<style></style>
