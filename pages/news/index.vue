<template>
  <div id="NewsPage">
    <Banner :bread-data="breadData" />
    <!-- for pc version, top news -->
    <div class="topNews">
      <div
        :class="['topNewsBox container', { topicLoading: topicNewsLoading }]"
      >
        <Loading v-if="topicNewsLoading" />
        <template v-else>
          <div
            v-for="topNew in topicNews"
            :key="topNew.name"
            class="topNewsItem"
          >
            <svg viewBox="0 0 360 140">
              <path
                d="M339.59,1L359,20.41V139H1V1H339.59 M340,0H0v140h360V20L340,0L340,0z"
              />
            </svg>
            <svg viewBox="0 0 300 140">
              <path
                d="M279.59,1L299,20.41V139H1V1H279.59 M280,0H0v140h300V20L280,0L280,0z"
              />
            </svg>
            <nuxt-link
              v-if="topNew.id && !topNew.externalLink"
              class="new-link"
              :to="`/news/articles/${topNew.id}`"
            >
              <div
                class="new-bg"
                :style="{ background: `url(${topNew.img})` }"
              ></div>
              <div class="new-box">
                <p class="new-tag">{{ topNew.subtitle }}</p>
                <h2 class="new-title">{{ topNew.title }}</h2>
              </div>
            </nuxt-link>
            <a
              v-else
              :href="topNew.externalLink"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                class="new-bg"
                :style="{ background: `url(${topNew.img})` }"
              ></div>
              <div class="new-box">
                <p class="new-tag">{{ topNew.subtitle }}</p>
                <h2 class="new-title">{{ topNew.title }}</h2>
              </div>
            </a>
          </div>
        </template>
      </div>
    </div>
    <!-- for m version, category -->
    <div class="swiper-box">
      <Loading v-if="categoriesLoading" />
      <div v-else class="container">
        <swiper ref="mySwiper" :options="swiperOptions" class="news_swiper">
          <swiper-slide
            v-for="category in categories"
            :key="category.name"
            class="m-categoryBox"
            :style="{ background: `url(${category.img})` }"
          >
            <p>{{ category.name }}</p>
            <nuxt-link :to="category.url"></nuxt-link>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>

    <div id="newsContent" class="container">
      <div class="top">
        <SearchInput
          v-model="searchText"
          :placeholder="$t('LOL__NEWS_PAGE__SEARCH_PLACEHOLDER')"
          :search-text="searchText"
          :search-news="searchNews"
        />
      </div>
      <div class="left">
        <!-- first time fetch news loading -->
        <Loading v-show="firstTimeLoading" />
        <template v-show="!firstTimeLoading">
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
      <div class="right fixed">
        <Loading v-if="categoriesLoading" />
        <div v-else id="categoryBoxContainer">
          <div
            v-for="category in categories"
            :key="category.name"
            class="categoryBox"
            :style="{ background: `url(${category.img})` }"
          >
            <p>{{ category.name }}</p>
            <nuxt-link :to="category.url" />
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
  name: 'MainPage',
  async fetch({ store }) {
    await store.dispatch('News/resetNews');
    await store.dispatch('News/getTopicNews');
    await store.dispatch('News/getNewsCategories');
    await store.dispatch('News/getNews', {
      category: '',
      keyword: '',
      perPage: 6,
      page: 1,
    });
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
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        slidesPerViewFit: true,
        roundLengths: true,
        calculateHeight: true,
      },
      // reachFixHeight: false,
      overFixHeight: 0,
    };
  },
  computed: {
    ...mapState('News', [
      'topicNewsLoading',
      'topicNews',
      'firstTimeLoading',
      'refetchLoading',
      'news',
      'page',
      'next',
      'categoriesLoading',
      'categories',
    ]),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    if (!this.firstTimeLoading)
      window.addEventListener('scroll', this.scrollToFetchNews);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToFetchNews);
  },
  methods: {
    ...mapActions('News', [
      'resetNews',
      'getTopicNews',
      'getNews',
      'getMoreNews',
      'getNewsCategories',
    ]),
    searchNews() {
      this.resetNews();
      this.getNews({
        category: '',
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
              category: '',
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
.topNews {
  background: assetsUrl('bg-news.jpg');
  @include rwd($sm) {
    display: none;
  }
  .topNewsBox {
    width: 12rem;
    padding: 0.67rem 0 0.73rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.topicLoading {
      justify-content: center;
    }
    @include rwd($md) {
      width: 9.6rem;
      padding: 0.67rem 0.2rem 0.73rem 0.2rem;
      margin-left: 0.24rem;
    }
    .topNewsItem {
      width: 3.6rem;
      height: 1.4rem;
      display: inline-block;
      position: relative;
      background: white;
      transition: all 0.3s ease-in-out;
      clip-path: polygon(
        -0.36rem -0.36rem,
        3.4rem 0,
        3.6rem 0.2rem,
        3.6rem 1.4rem,
        -0.36rem 1.4rem
      );

      @include fadeInUp(1s);
      @include rwd($md) {
        width: 3rem;
        clip-path: polygon(
          -0.36rem -0.36rem,
          2.8rem 0,
          3rem 0.2rem,
          3rem 1.4rem,
          -0.36rem 1.4rem
        );
      }
      &:hover {
        clip-path: polygon(
          -0.36rem -0.36rem,
          3.6rem 0,
          3.6rem 0,
          3.6rem 1.4rem,
          -0.36rem 1.4rem
        );
        @include rwd($md) {
          clip-path: polygon(
            -0.36rem -0.36rem,
            3rem 0,
            3rem 0,
            3rem 1.4rem,
            -0.36rem 1.4rem
          );
        }
        svg {
          &:nth-child(1) path {
            d: path(
              'M339.59,1L359,1V139H1V1H339.59 M340,0H0v140h360V0L340,0L340,0z'
            );
          }
          &:nth-child(2) path {
            d: path(
              'M279.59,1L299,1V139H1V1H279.59 M280,0H0v140h300V0L280,0L280,0z'
            );
          }
        }
      }
      svg {
        &:nth-child(1) {
          @include position(absolute, $top: 0, $left: 0);
          @include svgBorder(360, 140);
          @include rwd($md) {
            display: none;
          }
        }
        &:nth-child(2) {
          display: none;
          @include position(absolute, $top: 0, $left: 0);
          @include svgBorder(300, 140);
          @include rwd($md) {
            display: block;
          }
        }
        path {
          transition: all 0.3s ease-in-out;
        }
      }

      .new-bg {
        width: 1.5rem;
        height: 1rem;
        @include position(absolute, $top: 0, $left: -0.1rem, $bottom: 0);
        margin: auto 0;
        background-size: 100% 100% !important;
        background-position: center !important;
        @include rwd($md) {
          width: 1rem;
        }
      }
      .new-box {
        width: 2rem;
        height: 1rem;
        padding: 0.03rem 0.25rem 0.03rem 0;
        line-height: 1.4;
        @include position(absolute, $top: 0, $right: 0, $bottom: 0);
        margin: auto 0;
        text-align: left;
        overflow: hidden;
        @include rwd($md) {
          width: 1.95rem;
          padding: 0.03rem 0.1rem 0.03rem 0;
        }
        p,
        .new-title {
          color: black;
          font-size: 0.14rem;
          text-overflow: ellipsis;
        }
        .new-tag {
          color: #0bc9e7;
        }
        .new-title {
          font-size: 0.17rem;
          font-weight: 600;
          margin: 0.05rem 0;
        }
      }
      .new-link {
        width: 100%;
        height: 100%;
        display: block;
      }
      &:after {
        content: '';
        width: 0;
        height: 0;
        @include position(absolute, 0, 0);
        border-top: 0.15rem solid transparent;
        border-left: 0.15rem solid transparent;
      }
    }
  }
}
// only mobile
.swiper-box {
  display: none;
  @include rwd($sm) {
    width: 7.5rem;
    padding: 0.26rem 0 0.26rem 0.33rem;
    display: block;
    overflow: hidden;
    .container {
      @include fadeInUp(1s);
      .news_swiper {
        .swiper-slide {
          width: 3rem;
          &:last-child {
            margin-right: 0.71rem;
          }
        }
        .m-categoryBox {
          height: 1.3rem;
          background-size: 100% 100% !important;
          background-repeat: no-repeat !important;
          position: relative;
          &:after {
            content: '';
            width: 0;
            height: 0;
            @include position(absolute, 0, 0);
            border-top: 0.15rem solid white;
            // border-bottom: 6px solid #061D25;
            border-left: 0.15rem solid transparent;
          }
          p {
            color: white;
            padding: 0.2rem 0 0 0.2rem;
            font-size: 0.28rem;
            font-weight: 600;
            text-align: left;
            @include position(absolute, $top: 0, $left: 0);
          }
          a {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }
  }
}
#newsContent {
  padding-top: 0;
  font-size: 0;
  .top {
    width: 4.4rem;
    height: 1.4rem;
    margin: auto;
    padding-top: 0.4rem;
    @include rwd($sm) {
      width: 6.8rem;
      margin: 0 auto;
      padding: 0.3rem 0;
      border-top: 1px solid black;
      border-left: unset;
      border-right: unset;
    }
  }
  .left {
    width: 8.5rem;
    display: inline-block;
    @include rwd($md) {
      width: 7.3rem;
    }
    @include rwd($sm) {
      width: 100%;
    }
    #news ::v-deep {
      padding: 0.15rem 0 0 0;
      margin-right: 0;
      @include fadeInUp(1s);
      .newItem {
        width: 100%;
        margin-bottom: 0.62rem;
        @include rwd($md) {
          margin-right: 0;
          height: auto;
        }
        @include rwd($sm) {
          height: 8rem;
          svg {
            left: 0.52rem;
          }
        }
        .imgBox,
        .info {
          display: inline-block;
          overflow: unset;
          vertical-align: top;
          .category {
            font-size: 0.14rem;
          }
          .title {
            font-size: 0.2rem;
            padding: 0.1rem 0;
          }
          .content {
            font-size: 0.14rem;
            height: 0.6rem;
          }
          .time {
            font-size: 0.14rem;
            margin: 0;
          }
        }
        .imgBox {
          width: 3.4rem;
          @include rwd($md) {
            width: 3.4rem;
          }
          @include rwd($sm) {
            width: 100%;
          }
        }
        .info {
          width: 5.1rem;
          height: 1.8rem;
          margin: 0;
          padding: 0.1rem 0.7rem 0 0.7rem;
          box-sizing: border-box;
          @include rwd($md) {
            width: 3.8rem;
            margin: 0;
            padding: 0.1rem 0.2rem 0 0.17rem;
          }
          @include rwd($sm) {
            width: 100%;
            height: auto;
            padding: 0.36rem 0.52rem;
          }
          .category {
            font-size: 0.14rem;
            @include rwd($sm) {
              font-size: 0.3rem;
            }
          }
          .title {
            @include rwd($sm) {
              font-size: 0.4rem;
              padding: 0.14rem 0 0.22rem 0;
            }
          }
          .content {
            @include rwd($sm) {
              font-size: 0.28rem;
              height: 1.2rem;
              margin-bottom: 0.17rem;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              -webkit-box-pack: center;
              display: -webkit-box;
              word-break: break-word;
            }
          }
          .time {
            @include rwd($sm) {
              font-size: 0.24rem;
            }
          }
        }
      }
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
  .right {
    width: 3.7rem;
    height: 100%;
    padding: 0.1rem 0 0 0.56rem;
    margin-bottom: 0.3rem;
    border-left: 1px solid gray;
    display: inline-block;
    vertical-align: top;
    @include rwd($md) {
      width: 2.57rem;
      padding: 0.14rem 0 0 0.1rem;
    }
    @include rwd($sm) {
      display: none;
    }
    &.fixed {
      position: sticky;
      top: 0.8rem;
    }
    #categoryBoxContainer {
      overflow: hidden scroll;
      height: 100%;
      // max-height: 8.7rem;
      max-height: 7.9rem;
      &::-webkit-scrollbar {
        display: none;
      }
      .categoryBox {
        width: 3rem;
        height: 1rem;
        margin-bottom: 0.2rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        cursor: pointer;
        @include fadeInUp(1s);
        @include rwd($md) {
          width: 2.36rem;
        }
        &:after {
          content: '';
          width: 0;
          height: 0;
          @include position(absolute, 0, 0);
          border-top: 9px solid white;
          border-left: 9px solid transparent;
        }
        p {
          color: white;
          padding: 0.2rem 0 0 0.2rem;
          font-size: 0.19rem;
          font-weight: 600;
          text-align: left;
          @include rwd($md) {
            padding: 0.18rem 0 0 0.18rem;
          }
        }
        a {
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          top: 0;
        }
      }
    }
  }
}
</style>
