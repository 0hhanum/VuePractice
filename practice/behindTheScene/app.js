const app = new Vue({
  el: "#app",
  data() {
    return {
      currentUserInput: "",
      message: "",
    };
  },
  methods: {
    saveInput(e) {
      this.currentUserInput = e.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate...");
  },
  created() {
    console.log("created...");
  },
  beforeMount() {
    console.log("before mounted..");
  },
  mounted() {
    console.log("mounted...");
  },
  beforeUpdate() {
    console.log("beforeUpdate...");
  },
  updated() {
    console.log("updated...");
  },
  beforeUnmount() {
    console.log("beforeUnmount..");
  },
  unmounted() {
    console.log("unmounted..");
  },
});

const app2 = new Vue({
  el: "#app2",
  template: `
  <p>{{ favorite }}</p>
  `,
  data() {
    return {
      favorite: "burger",
    };
  },
});
