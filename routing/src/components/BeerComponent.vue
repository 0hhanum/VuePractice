<template>
  <div>
    <div>DRINK BEER</div>
    <span v-if="selectedBeer"
      >{{ selectedBeer.name }} => {{ selectedBeer.taste }} / 5</span
    >
    <span v-else>Wrong Access</span>
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
  created() {
    const { beerName } = this.$route.params;
    this.selectedBeer = this.beers.find((beer) => beer.name === beerName);
  },
};
</script>

<style></style>
