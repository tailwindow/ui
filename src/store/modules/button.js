const state = {
  value: ""
};

const getters = {
  value: state => {
    return state.value;
  }
};

const mutations = {
  value(state, value) {
    state.value = value;
  }
};

const actions = {
  updateValue({ commit }, payload) {
    commit("value", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
