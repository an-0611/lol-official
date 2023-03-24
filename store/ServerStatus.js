import utils from '~/utils';
import services from '../services';

const state = () => ({
  lists: [],
  loading: true,
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_SERVER_STATUS_LIST = 'UPDATE_SERVER_STATUS_LIST';

const actions = {
  async getIndexTicks({ commit }) {
    try {
      commit(TOGGLE_LOADING, true);
      // const res = await this.$api.$get('/api/index/ticks');
      const res = services.getTick;
      const data = utils.checkRes(res);
      commit(UPDATE_SERVER_STATUS_LIST, data);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [TOGGLE_LOADING](state, status) {
    state.loading = status;
  },
  [UPDATE_SERVER_STATUS_LIST](state, list) {
    state.lists = list;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
