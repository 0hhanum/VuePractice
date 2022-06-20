const app = new Vue({
  el: "#app",
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    addGoals(e) {
      if (this.goal !== "") {
        this.goals.push(this.goal);
        this.goal = "";
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});
