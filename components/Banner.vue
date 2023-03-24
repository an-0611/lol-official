<template>
  <div
    id="blurBackground"
    :style="{
      backgroundImage: `url('${bgImg}'), url(${defaultBg})`,
    }"
  >
    <div class="fgImg" :style="{ backgroundImage: `url(${fgImg})` }">
      <svg viewBox="0 0 1200 150">
        <path d="M1179.57,1l19.42,19.39V149H0.99V1L1179.57,1" />
      </svg>
      <svg viewBox="0 0 960 150">
        <path d="M939.57,1l19.42,19.39V149h-958V1L939.57,1" />
      </svg>
    </div>
    <BreadCrumb :bread-data="breadData" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Banner',
  props: {
    breadData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      defaultBg: `${process.env.CDN}/clear2.jpg`,
    };
  },
  computed: {
    ...mapState('Nav', ['bgImg', 'fgImg']),
  },
};
</script>

<style lang="scss" scoped>
#blurBackground {
  width: 100%;
  height: 2.5rem;
  position: relative;
  background-size: 100% 100%;
  box-sizing: border-box;
  z-index: 1;
  @include rwd($sm) {
    display: none;
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
  }
  .container {
    padding: 0 0.3rem;
  }
  .fgImg {
    @include position(absolute, 0.45rem, 0, 0, 0);
    margin: 0 auto;
    text-align: center;
    width: 12.2rem;
    height: 1.3rem;
    z-index: 5;
    background-repeat: no-repeat;
    background-position: center center;
    @include rwd($md) {
      width: 9.8rem;
    }
    svg {
      &:nth-child(1) {
        @include position(absolute, $top: -0.1rem, $left: 0.1rem);
        @include svgBorder(1200, 150, #8a8b86);
        @include rwd($md) {
          display: none;
        }
      }
      &:nth-child(2) {
        display: none;
        @include position(absolute, $top: -0.1rem, $left: 0.1rem);
        @include svgBorder(960, 150, #8a8b86);
        @include rwd($md) {
          display: block;
        }
      }
    }
  }
}
</style>
