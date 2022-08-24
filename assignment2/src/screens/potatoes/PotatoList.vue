<template>
  <div>
    <section id="filter">
      <PotatoFilter
        ref="filter"
        @weight-changed="weightChanged"
        @name-changed="nameChanged"
        @price-changed="priceChanged"
      ></PotatoFilter>
    </section>
    <section>
      <BaseCard>
        <div class="controls">
          <BaseButton @click.native="refresh">REFRESH</BaseButton>
          <BaseButton :link="true" to="/register"
            >REGISTER MY POTATO</BaseButton
          >
        </div>
      </BaseCard>
      <ul v-if="hasPotatoes">
        <BaseCard>
          <PotatoComponent
            v-for="potato in getFilteredPotatoes"
            :key="potato.id"
            :potato="potato"
        /></BaseCard>
      </ul>
      <BaseCard v-else>
        <h1>NO POTATOES -_- ;</h1>
      </BaseCard>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PotatoComponent from "@/components/PotatoComponent.vue";
import PotatoFilter from "@/components/PotatoFilter.vue";

export default {
  data() {
    return {
      filterName: "",
      filterWeight: null,
      filterPrice: null,
    };
  },
  computed: {
    ...mapGetters(["getPotatoes", "hasPotatoes"]),
    getFilteredPotatoes() {
      let potatoes = this.getPotatoes;
      potatoes = potatoes.filter((potato) => {
        let filterToggle = true;
        if (this.filterName) {
          filterToggle = potato.name
            .toLowerCase()
            .includes(this.filterName.toLowerCase());
        }
        if (this.filterWeight) {
          filterToggle = potato.weight <= this.filterWeight;
        }
        if (this.filterPrice) {
          filterToggle = potato.price <= this.filterPrice;
        }
        return filterToggle;
      });
      return potatoes;
    },
  },
  components: { PotatoComponent, PotatoFilter },
  methods: {
    nameChanged(name) {
      this.filterName = name;
    },
    weightChanged(weight) {
      this.filterWeight = weight;
    },
    priceChanged(price) {
      this.filterPrice = price;
    },
    refresh() {
      this.$store.dispatch("loadPotatoes");
    },
  },
};
</script>

<style scoped>
.controls {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.controls a {
  text-decoration: none;
}
</style>
