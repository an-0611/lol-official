import utils from '~/utils';

const state = () => ({
  banList: [],
  loading: true,
});

const TOGGLE_BAN_LOADING = 'TOGGLE_BAN_LOADING';
const UPDATE_BAN_LIST = 'UPDATE_BAN_LIST';

const actions = {
  async getBanList({ commit }, { months }) {
    try {
      commit(TOGGLE_BAN_LOADING, true);
      const res = await this.$api.$get('/api/ban/month', {
        params: { delta_month: months },
      });
      const data = utils.checkRes(res);
      commit(UPDATE_BAN_LIST, data.banList);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_BAN_LOADING, false);
    }
  },
  async getBanSummoner({ commit }, { name }) {
    try {
      commit(TOGGLE_BAN_LOADING, true);
      const res = await this.$api.$get('/api/ban/search', {
        params: { summoner: name },
      });
      const data = utils.checkRes(res);
      commit(UPDATE_BAN_LIST, data.banList);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_BAN_LOADING, false);
    }
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [TOGGLE_BAN_LOADING](state, bool) {
    state.loading = bool;
  },
  [UPDATE_BAN_LIST](state, banList) {
    state.banList = banList;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
