<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <p>HOW WAS YOUR DAY?</p>
      <label for="mood">YOUR NOW MOOD</label>
      <input type="text" v-model="mood" />
      <div>
        <p>WANNA SLEEP ?</p>
        <input v-model="sleep" type="radio" value="YES" name="sleep" />
        <label for="YES">YES</label>
        <input v-model="sleep" type="radio" value="YEEES" name="sleep" />
        <label for="YEEES">YEEES</label>
        <input v-model="sleep" type="radio" value="YEEEEEEEES" name="sleep" />
        <label for="YEEEEEEEES">YEEEEEEEES</label>
      </div>
      <button>CLICKME</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mood: "",
      sleep: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit-mood", this.mood, this.sleep);
      this.mood = "";
      this.sleep = "";
    },
  },
};
</script>

<style></style>
