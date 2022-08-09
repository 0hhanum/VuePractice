export default {
  addProductToCart(state, productData) {
    state.commit('addProductToCart', productData);
  },
  removeProductFromCart(state, prodId) {
    state.commit('removeProductFromCart', prodId);
  },
};
