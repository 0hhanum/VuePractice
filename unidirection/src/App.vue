<template>
  <div>
    <div class="input">
      <select id="x">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <div class="input">
      <select id="y" :value="y" @change="yChange">
        <option value="string">string</option>
        <option value="num">num</option>
      </select>
      <select id="yType" :value="yType" @change="yTypeChange">
        <option v-for="o in selectedOption" :key="o" value="o">{{ o }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      y: null,
      optionA: [1, 2, 3],
      optionB: [1],
      selectedOption: [],
    };
  },
  watch: {},
  methods: {
    yChange(y) {
      const value = y.target.value;
      console.log(value);
      console.log(this.y);
      if (value === "num") {
        this.selectedOption = this.optionA;
      } else {
        this.selectedOption = this.optionB;
      }
    },
  },
};
</script>

<style></style>
