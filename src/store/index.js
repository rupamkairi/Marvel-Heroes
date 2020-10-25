import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: {},
  },
  mutations: {
    selectCharacter(state, payload) {
      state.selected = payload.character;
    },
  },
  actions: {},
  modules: {},
});
