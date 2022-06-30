const app = new Vue({
  el: "#task",
  data() {
    return {
      number: 0,
      result: 0,
      output: "",
    };
  },
  methods: {
    add() {
      this.result += Number(this.number);
      this.number = "";
    },
    subtract() {
      this.result -= Number(this.number);
      this.number = "";
    },
  },
  watch: {
    result(value) {
      this.output = value < 38 ? "NOT YET" : "TOO MUCH";
    },
    output(value) {
      if (value !== "") {
        setTimeout(() => (this.output = ""), 3000);
        clearTimeout();
      }
    },
  },
});
