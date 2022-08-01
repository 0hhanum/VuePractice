<template>
  <div id="container">
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
  props: ["beerName"], // from dynamic params :beerName
  data() {
    return {
      selectedBeer: null,
    };
  },
  methods: {
    getSelectedBeer(beerName) {
      // const { beerName } = this.$route.params;
      this.selectedBeer = this.beers.find((beer) => beer.name === beerName);
    },
  },
  created() {
    this.getSelectedBeer(this.beerName);
  },
  watch: {
    beerName(newBeerName) {
      this.getSelectedBeer(newBeerName);
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  background-color: black;
  color: white;
  height: 50px;
  align-content: center;
  align-items: center;
  justify-content: center;
}
button {
  margin-left: 50px;
}
</style>
