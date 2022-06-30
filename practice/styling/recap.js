const app = new Vue({
  el: "#app",
  data() {
    return {
      inputA: "",
      visible: true,
      color: "",
    };
  },
  methods: {
    handleInput(e) {
      this.inputA = e.target.value;
      e.target.value = "";
    },
    onClick() {
      this.visible = !this.visible;
    },
    handleColor(e) {
      this.color = e.target.value;
      e.target.value = "";
    },
  },
  computed: {
    setAClasses() {
      return {
        [this.inputA]: true,
        visible: this.visible,
        hidden: !this.visible,
      };
    },
    setBStyles() {
      return {
        backgroundColor: this.color,
      };
    },
  },
});
