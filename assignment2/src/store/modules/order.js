export default {
  state() {
    return {
      orders: [],
    };
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order);
    },
  },
  getters: {},
  actions: {
    addOrder(context, order) {
      context.commit("addOrder", order);
    },
  },
};
