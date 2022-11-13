import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  menuList: []
};

const getters = {};

const mutations = {
  CLEAR_STATE(s) {
    const i = state();
    Object.keys(i).forEach(k => {
      s[k] = i[k];
    });
  },
  setMenuList(state, list) {
    state.menuList = list;
  }
};

const actions = {
  clearAllState({ commit }) {
    commit("CLEAR_STATE");
    Object.keys(modules).forEach(i => commit(`${i}/CLEAR_STATE`));
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
