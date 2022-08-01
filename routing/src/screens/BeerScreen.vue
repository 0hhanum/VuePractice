<template>
  <div>
    <p>DRINK BEER</p>
    <router-view></router-view>
    <ul>
      <li v-for="beer in beers" :key="beer.name">
        <router-link :to="getBeerDetail(beer)">
          {{ beer.name }} &rarr; {{ beer.taste }} / 5
        </router-link>
      </li>
    </ul>
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

<style scoped>
a {
  display: flex;
  margin-bottom: 60px;
  height: 40px;
  text-decoration: none;
  border-bottom: 1px solid rgba(1, 1, 1, 0.4);
}

a.router-link-active {
  border-bottom: 1px solid red;
}
</style>
