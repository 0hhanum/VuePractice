export default {
  getTest(state, _, rootState, rootGetter) {
    console.log(rootState);
    console.log(rootGetter);
    return state.test;
  },
};
