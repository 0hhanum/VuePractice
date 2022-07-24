<template>
  <div id="rating-container">
    <div><button id="X" @click="$emit('close')">X</button></div>
    <ul>
      <li><button @click="rate(1)" class="rate-button">👎</button></li>
      <li><button @click="rate(2)" class="rate-button">🖕</button></li>
      <li><button @click="rate(3)" class="rate-button">👍</button></li>
    </ul>
    <p>{{ rating }}</p>
  </div>
</template>

<script>
export default {
  props: ["rateProp"],
  emit: ["close"],
  methods: {
    rate(rating) {
      this.rating = rating;
      this.$emit("rate", rating);
      this.$emit("close");
    },
  },
  data() {
    return {
      rating: this.rateProp,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
li {
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
}
.rate-button:active {
  font-size: 300px;
}
button {
  outline: none;
  border: none;
  background: transparent;
  font-size: xx-large;
}
#rating-container {
  height: 100%;
  width: 100%;
}
#rating-container div {
  position: relative;
  display: flex;
  justify-content: end;
  margin-bottom: -2.5rem;
}
</style>
