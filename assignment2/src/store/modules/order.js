import { writeDB, loadDB } from "@/firebase";

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
    setOrder(state, order) {
      state.orders = order;
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
      const id = Math.random().toString().slice(2);
      order["id"] = id;
      writeDB(`orders/${id}`, order);
      context.commit("addOrder", order);
    },
    async loadOrder(context) {
      await loadDB("orders").then((response) => {
        context.commit("setOrder", response);
      });
    },
  },
};
