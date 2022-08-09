export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  async login(context) {
    const request = await setTimeout(() => {
      context.commit("login");
      clearTimeout(request);
    }, 3000);
  },
  async logout(context) {
    const request = await setTimeout(() => {
      context.commit("logout");
      clearTimeout(request);
    }, 3000);
  },
};
