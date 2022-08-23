import { writeDB, loadDB } from "@/firebase";

export default {
  state() {
    return {
      potatoes: [],
    };
  },
  mutations: {
    addPotato(state, potato) {
      state.potatoes.push(potato);
    },
    setPotatoes(state, payload) {
      state.potatoes = payload;
    },
  },
  getters: {
    hasPotatoes(state) {
      return state.potatoes && state.potatoes.length > 0;
    },
    getPotatoes(state) {
      return state.potatoes;
    },
  },
  actions: {
    async addPotato(context, payload) {
      const { potato } = payload;
      await writeDB(`potatoes/${potato.id.toString().slice(2)}`, potato);
      context.commit("addPotato", potato);
    },
    async loadPotatoes(context) {
      await loadDB("potatoes").then((response) => {
        context.commit("setPotatoes", response);
      });
    },
  },
};
