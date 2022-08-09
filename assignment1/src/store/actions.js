export default {
  login(state) {
    const timeout = setTimeout(() => {
      state.commit('login');
      clearTimeout(timeout);
    }, 200);
  },
  logout(state) {
    const timeout = setTimeout(() => {
      state.commit('logout');
      clearTimeout(timeout);
    }, 200);
  },
};
