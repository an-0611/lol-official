import utils from '~/utils';

const initialBreadData = [
  {
    name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
    url: '/',
  },
  {
    name: 'LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT',
    url: '/champions',
  },
  {
    name: 'LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS',
    url: '/champions',
  },
];

const state = () => ({
  champions: null,
  loading: true,
  // detail page
  buttonsText: [
    'LOL__CHAMPIONS_INNERPAGE__PASSIVE',
    'LOL__CHAMPIONS_INNERPAGE__Q',
    'LOL__CHAMPIONS_INNERPAGE__W',
    'LOL__CHAMPIONS_INNERPAGE__E',
    'LOL__CHAMPIONS_INNERPAGE__R',
  ],
  championInfo: null,
  breadData: initialBreadData,
  selectedSkill: 0,
  selectedVideoUrl: null,
  // items
  items: null,
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_CHAMPIONS = 'UPDATE_CHAMPIONS';
const UPDATE_CHAMPION_INFO = 'UPDATE_CHAMPION_INFO';
const UPDATE_BREAD_DATA = 'UPDATE_BREAD_DATA';
const RESET_BREAD_DATA = 'RESET_BREAD_DATA';
const INITIAL_VIDEO_KEY = 'INITIAL_VIDEO_KEY';
const UPDATE_VIDEO_KEY = 'UPDATE_VIDEO_KEY';
const UPDATE_SELECTED_SKILL = 'UPDATE_SELECTED_SKILL';

const UPDATE_ITEMS = 'UPDATE_ITEMS';

const actions = {
  async getAllChampionsData({ commit, rootState }) {
    try {
      commit(TOGGLE_LOADING, true);
      const { cdn, dd } = rootState.DDragon.ddragonEnv;
      const url = `${cdn}/${dd}/data/${process.env.DDRAGON_LOCALE}/champion.json`;
      const res = await fetch(url).then((res) => res.json());
      if (res.data) commit(UPDATE_CHAMPIONS, res.data);
    } catch (error) {
      // console.log(error);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },
  async getChampionsDetail({ commit, rootState }, championName) {
    try {
      const { cdn, dd } = rootState.DDragon.ddragonEnv;
      const url = `${cdn}/${dd}/data/${process.env.DDRAGON_LOCALE}/champion/${championName}.json`;
      const res = await fetch(url).then((res) => res.json());
      const championInfo = res.data[championName];
      const championKey = utils.zeroPadding(championInfo.key, 4);
      commit(RESET_BREAD_DATA);
      commit(UPDATE_CHAMPION_INFO, championInfo);
      commit(UPDATE_BREAD_DATA, {
        name: championInfo.name,
        url: championName,
      });
      commit(INITIAL_VIDEO_KEY, championKey);
    } catch (error) {
      // alert(error);
    }
  },
  handleSelectedSkill({ state, commit }, index) {
    const championKey = utils.zeroPadding(state.championInfo.key, 4);
    commit(UPDATE_SELECTED_SKILL, index);
    commit(UPDATE_VIDEO_KEY, { championKey, index });
    utils.resetAnimation({ className: 'fadeIn' });
  },
  async getAllItemsData({ commit, rootState }) {
    try {
      commit(TOGGLE_LOADING, true);
      const { cdn, dd } = rootState.DDragon.ddragonEnv;
      const url = `${cdn}/${dd}/data/${process.env.DDRAGON_LOCALE}/item.json`;
      const res = await fetch(url).then((res) => res.json());
      commit(UPDATE_ITEMS, res.data);
    } catch (error) {
      // alert(error);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },
};

const mutations = {
  [TOGGLE_LOADING](state, status) {
    state.loading = status;
  },
  [UPDATE_CHAMPIONS](state, champions) {
    state.champions = champions;
  },
  [UPDATE_CHAMPION_INFO](state, championInfo) {
    state.championInfo = championInfo;
  },
  [UPDATE_BREAD_DATA](state, data) {
    state.breadData.push(data);
  },
  [RESET_BREAD_DATA](state) {
    state.breadData = initialBreadData.slice();
  },
  [INITIAL_VIDEO_KEY](state, championKey) {
    state.selectedVideoUrl = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_P1.mp4`;
  },
  [UPDATE_VIDEO_KEY](state, { championKey, index }) {
    const skillEng = ['P', 'Q', 'W', 'E', 'R'];
    state.selectedVideoUrl = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_${skillEng[index]}1.mp4`;
  },
  [UPDATE_SELECTED_SKILL](state, index) {
    state.selectedSkill = index;
  },
  [UPDATE_ITEMS](state, items) {
    state.items = items;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
