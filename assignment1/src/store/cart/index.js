import cartActions from './actions';
import cartMutations from './mutations';
import cartGetters from './getters';

export default {
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
