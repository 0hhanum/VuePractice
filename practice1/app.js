var app = new Vue({
  el: "#app",
  data() {
    return {
      toDos: [],
      enteredValue: "",
    };
  },
  methods: {
    addToDo() {
      this.toDos.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
});
