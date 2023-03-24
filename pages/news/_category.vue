<template>
  <div id="NewsCategoryPage">
    <Banner :bread-data="breadData" />
    <div id="newsContent" class="container">
      <div class="top">
        <SearchInput
          v-model="searchText"
          :placeholder="$t('LOL__NEWS_PAGE__SEARCH_PLACEHOLDER')"
          :search-text="searchText"
          :search-news="searchNews"
        />
      </div>
      <NewsDescBar />
      <!-- first time fetch news loading -->
      <div class="center">
        <Loading v-if="firstTimeLoading" />
        <template v-else>
          <News v-if="news.length" :news="news" />
          <div v-else>{{ $t('LOL__NEWS_PAGE__NO_MAPPING_NEWS') }}</div>
        </template>
        <!-- second time fetch news loading -->
        <div v-show="!firstTimeLoading" class="loadingSection">
          <Loading v-show="refetchLoading" class="loading" />
          <div v-show="!next" class="noMoreNews">
            {{ $t('LOL__NEWS_PAGE__END') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { debounce } from 'debounce';
import utils from '@/utils';

export default {
  name: 'NewsCategoryPage',
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('News/resetNews'),
      store.dispatch('News/getNews', {
        category: params.category,
        keyword: '',
        perPage: 6,
        page: 1,
      }),
    ]);
  },
  validate({ params }) {
    return /\w+$/g.test(params.category);
  },
  data() {
    return {
      searchText: '',
      breadData: [
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
          url: '/',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__NEWS',
          url: '/news',
        },
      ],
    };
  },
  computed: {
    ...mapState('News', [
      'firstTimeLoading',
      'refetchLoading',
      'footprint',
      'news',
      'page',
      'next',
    ]),
    category() {
      return this.$route.params.category;
    },
  },
  mounted() {
    if (this.footprint) this.breadData.push(...this.footprint);
    if (!this.firstTimeLoading)
      window.addEventListener('scroll', this.scrollToFetchNews);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToFetchNews);
  },
  methods: {
    ...mapActions('News', ['resetNews', 'getNews', 'getMoreNews']),
    searchNews() {
      this.resetNews();
      this.getNews({
        category: this.category,
        keyword: this.searchText,
        perPage: 6,
        page: this.page,
      });
    },
    scrollToFetchNews: debounce(function () {
      if (!this.next) {
        window.removeEventListener('scroll', this.scrollToFetchNews);
      } else {
        const target = document.getElementById('news');
        if (target) {
          const newsHeight = target.offsetHeight + target.offsetTop;
          if (utils.getScrollTop() + utils.getClientHeight() >= newsHeight) {
            this.getMoreNews({
              category: this.category,
              keyword: this.searchText,
              perPage: 6,
            });
          }
        }
      }
    }, 300),
  },
};
</script>

<style lang="scss" scoped>
#newsContent {
  .top {
    width: 4.4rem;
    height: 1.5rem;
    margin: auto;
    padding-top: 0.5rem;
    @include rwd($sm) {
      width: 6.8rem;
      height: auto;
      padding: 0.4rem 0;
    }
  }
  .center {
    margin: 0.3rem 0;
    display: inline-block;
    @include rwd($md) {
      margin: 0.3rem 1.1rem;
    }
    @include rwd($sm) {
      width: 7.5rem;
      margin: 0;
      padding: 0.3rem 0.36rem;
    }
    .loadingSection {
      position: relative;
      height: 1.5rem;
      @include rwd($sm) {
        height: 2rem;
      }
    }
    .noMoreNews {
      padding: 0.45rem 0;
      font-size: 0.2rem;
      @include rwd($sm) {
        font-size: 0.25rem;
      }
    }
  }
}
</style>
