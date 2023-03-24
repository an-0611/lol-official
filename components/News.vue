<template>
  <div id="news">
    <div v-for="(item, index) in news" :key="index" class="newItem">
      <nuxt-link v-if="!item.externalLink" :to="`/news/articles/${item.id}`">
        <svg viewBox="0 0 320 240">
          <path d="M299.57,1l19.42,19.39V239h-318V1H299.57" />
        </svg>
        <svg viewBox="0 0 646 481">
          <path d="M625.4,1L645,20.8V480H1V1H625.4" />
        </svg>

        <div class="imgBox">
          <!-- <img :src="item.img" /> -->
          <img :src="`/lol-official/imgs/340x224-1.jpg`" />
        </div>
        <div class="info">
          <p class="category">{{ item.subtitle }}</p>
          <h2 class="title">{{ item.title }}</h2>
          <p class="content" v-html="item.description"></p>
          <p class="time">{{ transformTime(item.updatedAt) }}</p>
        </div>
      </nuxt-link>
      <a
        v-else
        :href="item.externalLink"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg viewBox="0 0 320 240">
          <path d="M299.57,1l19.42,19.39V239h-318V1H299.57" />
        </svg>
        <svg viewBox="0 0 646 481">
          <path d="M625.4,1L645,20.8V480H1V1H625.4" />
        </svg>

        <div class="imgBox">
          <img :src="item.img" />
        </div>
        <div class="info">
          <p class="category">{{ item.subtitle }}</p>
          <h2 class="title">{{ item.title }}</h2>
          <p class="content" v-html="item.description"></p>
          <p class="time">{{ transformTime(item.updatedAt) }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'News',
  props: {
    news: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      REGION: process.env.REGION,
    };
  },
  computed: {
    transformTime() {
      return (time) => {
        if (process.env.REGION === 'vn') {
          return utils.timeToHHMMDDMMYY(time);
        }
        return utils.timeToYYMMDDHHMM(time);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
#news {
  width: 100%;
  overflow: hidden;
  padding-top: 0.1rem;
  @include rwd($sm) {
    padding-top: 0.15rem; // same with svg $top.
  }
  .newItem {
    width: 3.4rem;
    margin-right: 1rem;
    float: left;
    cursor: pointer;
    position: relative;
    overflow: unset;
    &:nth-child(3n) {
      margin-right: 0;
    }
    @include rwd($md) {
      &:nth-child(3n) {
        margin-right: 1rem;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
    @include rwd($sm) {
      width: 6.8rem;
      height: auto;
      margin: auto;
      vertical-align: top;
    }
    svg {
      &:nth-child(1) {
        @include position(absolute, $top: -0.08rem, $left: 0.1rem);
        @include svgBorder(320, 240);
        @include rwd($sm) {
          display: none;
        }
        &:hover path {
          d: path('M299.57,1l19.42,0V239h-318V1H299.57');
        }
      }
      &:nth-child(2) {
        display: none;
        @include position(absolute, $top: -0.15rem, $left: 0.15rem);
        @include svgBorder(646, 481);
        @include rwd($sm) {
          display: block;
        }
        &:active path {
          d: path('M625.4,1L645,0V480H1V1H625.4');
        }
      }
      path {
        transition: all 0.3s ease-in-out;
      }
    }
    .imgBox {
      img {
        height: 2.24rem;
        @include rwd($sm) {
          width: 6.8rem;
          height: 4.5rem;
        }
      }
    }

    .info {
      margin: 0.18rem 0;
      padding: 0 0.08rem;
      font-size: 0.14rem;
      text-align: left;
      height: 1.8rem;
      @include rwd($sm) {
        height: 3.2rem;
        font-size: 0.3rem;
        padding: 0.06rem 0.16rem;
        margin-bottom: 0.6rem;
      }
      .category {
        color: #0ac6e4;
        font-weight: 600;
        @include rwd($sm) {
          font-size: 0.3rem;
        }
      }
      .title {
        font-size: 0.21rem;
        padding: 0.08rem 0 0.1rem 0;
        color: black;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 900;
        @include rwd($sm) {
          padding: 0.18rem 0 0.2rem 0;
          font-size: 0.38rem;
        }
        // @include withRegion('th') {
        //   font-family: 'Kanit', Arial, Helvetica, sans-serif;
        // }
        @include withRegion('vn') {
          overflow: visible;
          white-space: normal;
        }
      }
      .content,
      .time {
        color: gray;
        overflow: hidden;
        @include rwd($sm) {
          margin: 0;
        }
      }
      .content {
        height: 0.6rem;
        margin-bottom: 0.1rem;
        line-height: 1.4;
        @include rwd($sm) {
          height: 1.2rem;
          margin-bottom: 0.25rem;
        }
      }
      .time {
        margin-bottom: 0.42rem;
        @include rwd($md) {
          margin-bottom: 0.47rem;
        }
        @include rwd($sm) {
        }
      }
    }
  }
}
</style>
