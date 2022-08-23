import { writeDB, loadDB } from "@/firebase";

export default {
  state() {
    return {
      orders: [],
    };
  },
  mutations: {
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
    async addOrder(context, order) {
      const id = Math.random().toString().slice(2);
      order["id"] = id;
      await writeDB(`orders/${id}`, order);
    },
    async loadOrder(context) {
      await loadDB("orders").then((response) => {
        context.commit("setOrder", response);
      });
    },
  },
};
