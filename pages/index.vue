<template>
  <div id="MainPage">
    <div
      v-if="index"
      id="blurBackground"
      :style="{ backgroundImage: `url(${index.bgImg})` }"
    >
      <div class="container">
        <template v-if="!mainLoading">
          <svg viewBox="0 0 1200 420">
            <path d="M1178.1,1l20.9,20.9V419H1V1H1178.1" />
          </svg>
          <svg viewBox="0 0 908 318">
            <path d="M886.1,1L907,21.9V317H1V1H886.1" />
          </svg>
          <svg viewBox="0 0 680 240">
            <path d="M658.1,1L679,21.9V239H1V1H658.1" />
          </svg>
        </template>
        <swiper ref="mySwiper" :options="swiperOptions" class="_swiper">
          <swiper-slide v-for="(banner, index) in banners" :key="index">
            <a :href="banner.url" target="_blank">
              <img :src="banner.img" />
            </a>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
        </swiper>
      </div>
    </div>

    <Loading v-if="mainLoading" />
    <div v-else class="container mainPageContent">
      <!-- <client-only> -->
        <Alert :tick="tick" />
      <!-- </client-only> -->
      <div class="center">
        <News :news="news" />
        <div v-if="REGION === 'vn'" class="btn">
          <nuxt-link to="/news">
            {{ $t('LOL__MAIN_PAGE__MORE_NEWS') }}
            <svg viewBox="0 0 180 50">
              <path d="M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179" />
            </svg>
            <svg viewBox="0 0 294 82">
              <path d="M293,1v60.59L273.59,81H1V20.41L20.41,1H293" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  async fetch({ store }) {
    await store.dispatch('Main/getMain');
  },
  data() {
    return {
      REGION: process.env.REGION,
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
  computed: {
    ...mapState('Nav', ['index']),
    ...mapState('Main', ['mainLoading', 'banners', 'news', 'tick']),
  },
};
</script>

<style lang="scss">
#MainPage {
  #blurBackground {
    width: 100%;
    height: 5.2rem;
    position: relative;
    background-size: 100% 100%;
    box-sizing: border-box;
    z-index: 1;
    @include rwd($md) {
      height: 3.9rem;
    }
    @include rwd($sm) {
      height: 2.9rem;
    }
    &:after {
      content: '';
      width: 100%;
      height: 99%;
      @include position(absolute, 0, 0, 0, 0);
      margin: auto;
      background: inherit;
      filter: blur(5px);
      z-index: 2;
      @include rwd($sm) {
        filter: unset;
      }
    }
    .container {
      padding: 0;
      padding-top: 0.45rem;
      position: relative;
      @include rwd($sm) {
        padding-top: 0.25rem;
        height: inherit;
      }
      svg {
        z-index: 10;
        pointer-events: none;
        &:nth-child(1) {
          @include position(absolute, $top: 0.35rem, $left: 0.1rem);
          @include svgBorder(1200, 420);
          @include rwd($md) {
            display: none;
          }
        }
        &:nth-child(2) {
          display: none;
          @include position(absolute, $top: 0.35rem, $left: 0.42rem);
          @include svgBorder(908, 318);
          @include rwd($md) {
            display: block;
          }
          @include rwd($sm) {
            display: none;
          }
        }
        &:nth-child(3) {
          display: none;
          @include position(absolute, $top: 0.18rem, $left: 0.35rem);
          @include svgBorder(680, 240);
          @include rwd($sm) {
            display: block;
          }
        }
      }
    }
    ._swiper {
      z-index: 3;
      box-sizing: border-box;
      width: 12.2rem;
      @include rwd($md) {
        width: 9.2rem;
      }
      @include rwd($sm) {
        width: 7rem;
      }
      .swiper-slide img {
        width: 100%;
        height: 4rem;
        cursor: pointer;
        @include rwd($md) {
          height: 3rem;
        }
        @include rwd($sm) {
          height: 2.27rem;
        }
      }
    }
  }
  .mainPageContent {
    margin-top: 0.76rem;
    @include rwd($sm) {
      margin-top: 0;
    }
    @include fadeInUp(1s);
    .center {
      margin: 0.3rem 0;
      @include rwd($md) {
        margin: 0.3rem 1.1rem;
      }
      @include rwd($sm) {
        margin: 0.3rem 0.36rem;
      }
      .btn {
        width: 3.7rem;
        height: 0.4rem;
        margin: 0 auto 0.8rem;
        @include rwd($sm) {
          margin: 0 auto 1.2rem;
        }
        a {
          width: 1.72rem;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.16rem;
          color: black;
          display: inline-block;
          background: #0bc6e4;
          position: relative;
          @include rwd($sm) {
            width: 2.8rem;
            height: 0.65rem;
            line-height: 0.65rem;
            font-size: 0.28rem;
            text-align: center;
          }
          svg {
            &:nth-child(1) {
              @include svgBorder(180, 50, #edebf0);
              @include position(absolute, $top: -0.05rem, $left: -0.04rem);
              @include rwd($sm) {
                display: none;
              }
            }
            &:nth-child(2) {
              display: none;
              @include svgBorder(294, 82, #edebf0);
              @include position(absolute, $top: -0.08rem, $left: -0.06rem);
              @include rwd($sm) {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>
