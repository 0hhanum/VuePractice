export default {
  getQty(state) {
    return state.qty;
  },
  getItems(state) {
    return state.items;
  },
  getTotal(state) {
    return state.total.toFixed(2);
  },
};
