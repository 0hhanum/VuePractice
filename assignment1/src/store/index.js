import { createStore } from 'vuex';
import rootActions from './actions';
import rootMutations from './mutations';
import rootGetters from './getters';

import cartModule from './cart/index';

const store = createStore({
  modules: {
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
