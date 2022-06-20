const app = new Vue({
  el: "#app",
  data() {
    return {
      inputValue: "",
      goals: [],
      visible: true,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    addGoal() {
      this.goals.push(this.inputValue);
      this.inputValue = "";
    },
  },
});
