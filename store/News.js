import utils from '~/utils';

const state = () => ({
  topicNewsLoading: true,
  topicNews: [],
  firstTimeLoading: true,
  refetchLoading: false,
  footprint: null,
  news: [],
  page: 1,
  next: false,
  newContent: {},
  categoriesLoading: true,
  categories: [],
  category: null,
  subCategories: [],
});

const TOGGLE_TOPIC_NEWS_LOADING = 'TOGGLE_TOPIC_NEWS_LOADING';
const UPDATE_TOPIC_NEWS = 'UPDATE_TOPIC_NEWS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_REFETCH_LOADING = 'TOGGLE_REFETCH_LOADING';
const UPDATE_NEWS = 'UPDATE_NEWS';
const UPDATE_MORE_NEWS = 'UPDATE_MORE_NEWS';
const UPDATE_NEW_CONTENT = 'UPDATE_NEW_CONTENT';
const UPDATE_PAGE = 'UPDATE_PAGE';
const HAS_MORE_ARTICLE = 'HAS_MORE_ARTICLE';
const TOGGLE_CATEGORIES_LOADING = 'TOGGLE_CATEGORIES_LOADING';
const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const RESET_NEWS = 'RESET_NEWS';

const actions = {
  async getTopicNews({ commit }) {
    try {
      commit(TOGGLE_TOPIC_NEWS_LOADING, true);
      const res = await this.$api.$get('/api/news/topic');
      const data = utils.checkRes(res);
      commit(UPDATE_TOPIC_NEWS, data);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_TOPIC_NEWS_LOADING, false);
    }
  },
  async getNews({ commit }, { category, keyword, perPage, page }) {
    try {
      commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/news/search', {
        params: {
          category,
          keyword,
          per_page: perPage,
          page,
        },
      });
      const data = utils.checkRes(res);
      commit(UPDATE_NEWS, data);
      if (data.news.length) commit(UPDATE_PAGE);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },
  async getMoreNews({ state, commit }, { category, keyword, perPage }) {
    try {
      commit(TOGGLE_REFETCH_LOADING, true);
      const { page } = state;
      const res = await this.$api.$get('/api/news/search', {
        params: {
          category,
          keyword,
          per_page: perPage,
          page,
        },
      });
      const data = utils.checkRes(res);
      const { next } = data;
      commit(UPDATE_PAGE);
      commit(UPDATE_MORE_NEWS, data);
      if (next) commit(HAS_MORE_ARTICLE, true);
      else commit(HAS_MORE_ARTICLE, false);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      await commit(TOGGLE_REFETCH_LOADING, false);
    }
  },
  async getNewsCategories({ commit }) {
    try {
      await commit(TOGGLE_CATEGORIES_LOADING, true);
      const res = await this.$api.$get('/api/news/categories');
      const data = utils.checkRes(res);
      commit(UPDATE_CATEGORIES, data);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      await commit(TOGGLE_CATEGORIES_LOADING, false);
    }
  },
  async getNewContent({ commit }, { newId }) {
    try {
      await commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/news/detail', {
        params: { news_id: newId },
      });
      const data = utils.checkRes(res);
      commit(UPDATE_NEW_CONTENT, data);
    } catch (error) {
      // const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      await commit(TOGGLE_LOADING, false);
    }
  },
  resetNews({ commit }) {
    commit(RESET_NEWS);
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [TOGGLE_TOPIC_NEWS_LOADING](state, bool) {
    state.topicNewsLoading = bool;
  },
  [UPDATE_TOPIC_NEWS](state, data) {
    state.topicNews = data.news;
  },
  [TOGGLE_LOADING](state, bool) {
    state.firstTimeLoading = bool;
  },
  [TOGGLE_REFETCH_LOADING](state, bool) {
    state.refetchLoading = bool;
  },
  [UPDATE_NEWS](state, data) {
    state.footprint = data.footprint;
    state.news = data.news;
    state.category = data.category;
    state.subCategories = data.subCategories;
  },
  [UPDATE_MORE_NEWS](state, data) {
    const newNews = state.news.concat(data.news);
    state.news = newNews;
  },
  [UPDATE_NEW_CONTENT](state, data) {
    state.footprint = data.footprint;
    state.newContent = data.newsDetail;
  },
  [UPDATE_PAGE](state) {
    const newCount = state.page + 1;
    state.page = newCount;
  },
  [HAS_MORE_ARTICLE](state, bool) {
    state.next = bool;
  },
  [TOGGLE_CATEGORIES_LOADING](state, bool) {
    state.categoriesLoading = bool;
  },
  [UPDATE_CATEGORIES](state, data) {
    state.categories = data.categories;
  },
  [RESET_NEWS](state) {
    state.firstTimeLoading = true;
    state.refetchLoading = false;
    state.news = [];
    state.page = 1;
    state.next = true;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
