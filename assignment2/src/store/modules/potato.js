export default {
  state() {
    return {
      potatoes: [
        { id: "p1", name: "The great pota", weight: 5, price: 30 },
        { id: "p2", name: "COOLPOTA", weight: 51, price: 20 },
        { id: "p3", name: "FUTATO", weight: 5, price: 30 },
      ],
    };
  },
  mutations: {},
  getters: {
    hasPotatoes(state) {
      return state.potatoes && state.potatoes.length > 0;
    },
    getPotatoes(state) {
      return state.potatoes;
    },
  },
  actions: {},
};
