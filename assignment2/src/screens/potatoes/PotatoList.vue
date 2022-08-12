<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>REFRESH</button>
        <router-link to="/register">REGISTER</router-link>
      </div>
      <ul v-if="hasPotatoes">
        <PotatoComponent
          v-for="potato in getPotatoes"
          :key="potato.id"
          :potato="potato"
        />
      </ul>
      <h1 v-else>NO POTATOES -_-;</h1>
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

<style scoped></style>
