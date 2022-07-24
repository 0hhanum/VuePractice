<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <p>HOW WAS YOUR DAY?</p>
      <label for="mood">YOUR MOOD</label>
      <input type="text" v-model="mood" />
      <ErrorMessage v-if="showInputError">Input Required</ErrorMessage>
      <div>
        <p>WANNA SLEEP ?</p>
        <input v-model="sleep" type="radio" value="YES" name="sleep" />
        <label for="YES">YES</label>
        <input v-model="sleep" type="radio" value="YEEES" name="sleep" />
        <label for="YEEES">YEEES</label>
        <input v-model="sleep" type="radio" value="YEEEEEEEES" name="sleep" />
        <label for="YEEEEEEEES">YEEEEEEEES</label>
      </div>
      <ErrorMessage v-if="showSelectionError">Selection Required</ErrorMessage>
      <button>CLICKME</button>
    </form>
  </div>
</template>

<script>
import ErrorMessage from "./components/ErrorMessage.vue";

export default {
  data() {
    return {
      mood: "",
      sleep: "",
      showInputError: false,
      showSelectionError: false,
    };
  },
  methods: {
    handleSubmit() {
      this.showInputError = this.mood === "" ? true : false;
      this.showSelectionError = this.sleep === "" ? true : false;
      if (this.mood && this.sleep) {
        this.$emit("submit-mood", this.mood, this.sleep);
        this.mood = "";
        this.sleep = "";
      }
    },
  },
  components: { ErrorMessage },
};
</script>

<style></style>
