export default {
  addItem(state, payload) {
    state.items.push(payload.value);
  },
  login(state) {
    state.loggedIn = true;
  },
  logout(state) {
    state.loggedIn = false;
  },
};
