import moduleGetter from "./getters";

export default {
  state() {
    return {
      test: "hello~",
    };
  },
  getters: moduleGetter,
};
