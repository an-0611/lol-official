import utils from '~/utils';
import services from '~/services/index';

const state = () => ({
  loading: true,
  accountRegisterLink: null,
  browserDownloadLink: null,
  platformDownloadLink: null,
  currentUpdateFile: null,
  updates: null,
  updateTutorialVideo: null,
  requirement: null,
  driver: null,
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_DOWNLOAD = 'UPDATE_DOWNLOAD';

const actions = {
  async getDownloadInfo({ commit }) {
    try {
      // commit(TOGGLE_LOADING, true);
      // const res = await this.$api.$get('/api/download/info');
      // commit(TOGGLE_LOADING, false);
      const res = await services.getDownloadInfo;
      const data = utils.checkRes(res);
      commit(UPDATE_DOWNLOAD, data);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      // commit(TOGGLE_LOADING, false);
    }
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [TOGGLE_LOADING](state, status) {
    state.loading = status;
  },
  [UPDATE_DOWNLOAD](state, data) {
    state.accountRegisterLink = data.accountRegisterLink;
    state.browserDownloadLink = data.browserDownloadLink;
    state.platformDownloadLink = data.platformDownloadLink;
    state.currentUpdateFile = data.currentUpdateFile;
    state.updates = data.updates;
    state.updateTutorialVideo = data.updateTutorialVideo;
    state.requirement = data.requirement;
    state.driver = data.driver;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
