import utils from '~/utils';
import services from '~/services/index';

const state = () => ({
  mainLoading: false,
  banners: [],
  news: [],
  tick: null,
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_MAIN = 'UPDATE_MAIN';

const actions = {
  async getMain({ commit }) {
    try {
      commit(TOGGLE_LOADING, true);
      // const res = await this.$api.$get('/api/index');
      const res = await services.getMain;
      const data = utils.checkRes(res);
      commit(UPDATE_MAIN, data);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },
};

const mutations = {
  [TOGGLE_LOADING](state, bool) {
    state.mainLoading = bool;
  },
  [UPDATE_MAIN](state, data) {
    state.banners = data.banners;
    state.news = data.news;
    state.tick = data.tick;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
