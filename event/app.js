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
    alert() {
      alert("hello");
    },
    setTextA(event) {
      this.text = event.target.value;
    },
    handleKeydown(e) {
      this.confirmedText = e.target.value;
      e.target.value = "";
    },
    reset() {
      this.text = "";
    },
    testExecute() {
      console.log("executed methods");
      return this.text;
    },
  },
  computed: {
    testComputed() {
      console.log("executed computed");
      return this.text;
    },
  },
});
