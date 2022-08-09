export default {
  getChildState(state, getters, rootState, rootGetters) {
    console.log(state);
    console.log(getters);
    console.log(rootState);
    console.log(rootGetters);
  },
  getItems(state) {
    return [...state.items, "1", "2", "3"];
  },
  getItems2(_, getter) {
    const items = getter.getItems;
    items.pop();
    return items;
  },
  getIsLoggedIn(state) {
    return state.loggedIn;
  },
};
