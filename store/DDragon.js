const state = () => ({
  ddragonEnv: null,
});

// const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_DDRAGON_ENV_DATA = 'UPDATE_DDRAGON_ENV_DATA';

const actions = {
  async getDDragonEnvData({ commit }) {
    try {
      const res = await fetch(
        'https://ddragon.leagueoflegends.com/realms/tw.json',
      ).then((res) => res.json());
      commit(UPDATE_DDRAGON_ENV_DATA, res);
    } catch (error) {
      // alert(error);
    }
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [UPDATE_DDRAGON_ENV_DATA](state, ddragonEnv) {
    state.ddragonEnv = ddragonEnv;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
