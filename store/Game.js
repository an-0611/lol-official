export const state = () => ({
  apiLoading: true,
  // config: {},
});

// const UPDATE_CONFIG = 'UPDATE_CONFIG';

const UPDATE_APILOADING = 'UPDATE_APILOADING';

export const actions = {
  // async getConfig({ commit }) {
  //   // $ prefixed methods to directly get data
  //   // https://axios.nuxtjs.org/usage.html#shortcuts
  //   const res = await this.$api.$get('/api/config');
  //   commit(UPDATE_CONFIG, res);
  //   return res;
  // },
  updateAPILoading({ commit }, bool) {
    commit(UPDATE_APILOADING, bool);
  },
};

export const mutations = {
  // [UPDATE_CONFIG](state, payload) {
  //   state.config = payload;
  // },
  [UPDATE_APILOADING](state, bool) {
    state.apiLoading = bool;
  },
};
