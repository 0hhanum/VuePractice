<template>
  <div>
    <section>FILTER</section>
    <section>
      <ul v-if="hasPotatoes">
        <BaseCard>
          <div class="controls">
            <BaseButton>REFRESH</BaseButton>
            <BaseButton link="true" to="/register"
              >REGISTER MY POTATO</BaseButton
            >
          </div>
          <PotatoComponent
            v-for="potato in getPotatoes"
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

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPotatoes", "hasPotatoes"]),
  },
  components: { PotatoComponent },
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
