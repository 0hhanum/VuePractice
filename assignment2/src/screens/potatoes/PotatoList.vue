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
      <ul v-if="hasPotatoes">
        <BaseCard>
          <div class="controls">
            <BaseButton @click.native="sendSignInLink">REFRESH</BaseButton>
            <BaseButton :link="true" to="/register"
              >REGISTER MY POTATO</BaseButton
            >
          </div>
          <PotatoComponent
            v-for="potato in getFilteredPotatoes"
            :key="potato.id"
            :potato="potato"
        /></BaseCard>
      </ul>
      <h1 v-else>NO POTATOES -_- ;</h1>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PotatoComponent from "@/components/PotatoComponent.vue";
import PotatoFilter from "@/components/PotatoFilter.vue";
import { sendSignInLink } from "@/firebase";

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
    sendSignInLink() {
      sendSignInLink("rntls123@naver.com");
      this.toastMessage("Verification mail is sent !", "success");
    },
  },
  inject: ["toastMessage"],
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
