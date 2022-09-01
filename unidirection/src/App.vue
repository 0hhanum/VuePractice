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
      yType: null,
      optionA: [1, 2, 3],
      optionB: [1],
      selectedOption: [],
    };
  },
  watch: {
    yType() {
      console.log("watching yTYPE changed...");
    },
    y() {
      console.log("watching y changed...");
    },
  },
  methods: {
    yChange(y) {
      const value = y.target.value;
      console.log("y changed");
      if (value === "num") {
        this.selectedOption = this.optionA;
        this.yType = this.yType || 1;
      } else {
        this.selectedOption = this.optionB;
        if (this.yType !== 1) {
          this.yType = 1;
        }
      }
      this.y = value;
    },
    yTypeChange(yType) {
      console.log("yType Changed");
      const value = yType.target.value;
      if (y === "str" && value !== 1) {
        console.log("have to change");
      }
      this.yType = value;
    },
  },
};
</script>

<style></style>
