const app = new Vue({
  el: "#progress",
  data() {
    return {
      interpolation: "hello",
      interpolationB: "text",
      link: "https://google.com",
      html: "<h1>HTML CAN BE RENDERED TOO.</h1>",
    };
  },
  methods: {
    method() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.interpolation : this.interpolationB;
    },
  },
});
