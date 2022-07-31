<template>
  <div>
    <div>DRINK BEER</div>
    <span v-if="selectedBeer"
      >{{ selectedBeer.name }} => {{ selectedBeer.taste }} / 5</span
    >
    <span v-else>Wrong Access</span>
    <router-link to="/beer/cass"><button>GO TO CASS</button></router-link>
  </div>
</template>

<script>
export default {
  inject: ["beers"],
  data() {
    return {
      selectedBeer: null,
    };
  },
  methods: {
    getSelectedBeer() {
      const { beerName } = this.$route.params;
      this.selectedBeer = this.beers.find((beer) => beer.name === beerName);
    },
  },
  created() {
    this.getSelectedBeer();
  },
  watch: {
    $route() {
      this.getSelectedBeer();
    },
  },
};
</script>

<style></style>
