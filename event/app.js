const app = new Vue({
  el: "#event",
  data() {
    return {
      counter: 0,
      placeholder: "Input a number",
      number: "",
      text: "",
      confirmedText: "",
      defaultVal: "",
    };
  },
  methods: {
    add() {
      this.counter += Number(this.number);
      this.number = "";
    },
    subtract() {
      this.counter -= Number(this.number);
      this.number = "";
    },
    setText(event, { defaultVal }) {
      this.text = defaultVal
        ? event.target.value + " " + defaultVal
        : event.target.value;
    },
    confirm(event) {
      this.confirmedText = this.text;
      event.target.value = "";
    },
    handleSubmit(event) {},
  },
});
