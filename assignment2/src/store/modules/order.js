export default {
  state() {
    return {
      orders: [],
    };
  },
  mutations: {
    addOrder(state, order) {
      order["id"] = new Date().toISOString();
      state.orders.push(order);
    },
  },
  getters: {
    getOrders(state, _, _2, rootGetters) {
      const user = rootGetters.getCurrentUser;
      return state.orders.filter((order) => order.orderer === user);
    },
  },
  actions: {
    addOrder(context, order) {
      context.commit("addOrder", order);
    },
  },
};
