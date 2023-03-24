import utils from '~/utils';

const state = () => ({
  navLoading: false,
  index: null,
  mainItems: [],
  bgImg: '',
  fgImg: '',
});

const mappingRoute = (state, route) => {
  let target;
  const { mainItems } = state;
  for (let i = 0; i < mainItems.length; i++) {
    const nav = mainItems[i];
    if (nav.navLink === route) {
      target = {
        bgImg: nav.bgImg,
        fgImg: nav.fgImg,
      };
      break;
    }
    const { dropdownLists } = nav;
    if (Array.isArray(dropdownLists)) {
      for (let j = 0; j < dropdownLists.length; j++) {
        const navList = dropdownLists[j];
        if (navList.listLink === route) {
          target = {
            bgImg: navList.bgImg,
            fgImg: navList.fgImg,
          };
          break;
        }
      }
    }
  }
  return target;
};

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_NAV = 'UPDATE_NAV';
const UPDATE_BGIMG_AND_FGIMG = 'UPDATE_BGIMG_AND_FGIMG';

const actions = {
  async getNav({ dispatch, commit }, { route }) {
    try {
      commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/navigation-menu');
      const data = utils.checkRes(res);
      commit(UPDATE_NAV, data);
      if (route !== '/') dispatch('updateBgImgAndFgImg', { route });
    } catch (error) {
      // this.app.$sentry.captureException(error);
      // const errMsg = utils.catchErr(error);
      // console(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },
  updateBgImgAndFgImg({ commit }, { route }) {
    commit(UPDATE_BGIMG_AND_FGIMG, route);
  },
};

const mutations = {
  [TOGGLE_LOADING](state, bool) {
    state.navLoading = bool;
  },
  [UPDATE_NAV](state, data) {
    state.index = data.index;
    state.mainItems = data.mainItems;
  },
  [UPDATE_BGIMG_AND_FGIMG](state, currentRoute) {
    const target = mappingRoute(state, currentRoute);
    if (target) {
      state.bgImg = target.bgImg;
      state.fgImg = target.fgImg;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
