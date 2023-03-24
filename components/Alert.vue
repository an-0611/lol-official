<template>
  <div v-if="tick && tick.length" id="alert">
    <div :class="['alertBox', status]">
      <div :class="['left', status]">
        <span :class="['icon', status]">
          <div class="top" />
          <div class="bottom" />
        </span>
        <p>{{ $t('LOL__MAIN_PAGE__SYSTEM_MESSAGE') }}</p>
      </div>
      <div :class="['right', status]">
        <div v-if="isMobileVersion" class="text" v-html="tick[0].content" />
        <MarqueeText v-else class="text" :text="tick[0].content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    tick: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isMobileVersion: false,
    };
  },
  computed: {
    status() {
      if (this.tick[0].type === 0) return 'blue';
      if (this.tick[0].type === 1) return 'orange';
      return 'red';
    },
  },
  mounted() {
    this.detectScreenWidth();
    window.addEventListener('resize', this.detectScreenWidth);
  },
  methods: {
    detectScreenWidth() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.isMobileVersion = true;
      } else {
        this.isMobileVersion = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #0bc6e4;
$orange: #f9b552;
$red: #be3030;

#alert {
  @include rwd($sm) {
    padding-top: 0.43rem;
  }
  .alertBox {
    padding: 0.15rem 0.31rem;
    margin: 0.62rem 0 0.76rem 0;
    background: black;
    position: relative;
    text-align: left;
    @include rwd($md) {
      padding: 0.13rem 0.31rem;
      margin: 0.44rem 0.38rem 0.77rem 0.38rem;
    }
    @include rwd($sm) {
      padding: 0.13rem 0.31rem 0.16rem 0.31rem;
      margin: 0 0.34rem 0.57rem 0.38rem;
    }
    &.blue {
      color: $blue;
    }
    &.orange {
      color: $orange;
    }
    &.red {
      color: $red;
    }
    &:before {
      content: '';
      @include position(absolute, $top: 0, $left: 0);
      width: 0;
      height: 0;
      border-right: 0.2rem solid transparent;
      border-top: 0.2rem solid white;
    }
    &:after {
      content: '';
      @include position(absolute, $right: 0, $bottom: 0);
      border-left: 0.2rem solid transparent;
      border-bottom: 0.2rem solid white;
    }
    .left {
      margin-right: 0.21rem;
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      border: none;
      font-size: 0.3rem;
      @include rwd($sm) {
        width: 100%;
        padding: 0 0 0.1rem;
        display: block;
        text-align: center;
        &.blue {
          border-bottom: 1px solid $blue;
        }
        &.orange {
          border-bottom: 1px solid $orange;
        }
        &.red {
          border-bottom: 1px solid $red;
        }
      }
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        display: inline-block;
        @include rwd($sm) {
          vertical-align: middle;
        }
        &.blue {
          background: $blue;
        }
        &.orange {
          background: $orange;
        }
        &.red {
          background: $red;
        }
        .top {
          width: 0.06rem;
          height: 0.16rem;
          margin: auto;
          margin-top: 0.07rem;
          margin-bottom: 0.03rem;
          background: black;
        }
        .bottom {
          width: 0.06rem;
          height: 0.06rem;
          margin: auto;
          background: black;
        }
      }
      p {
        font-weight: 600;
        margin-left: 0.13rem;
        display: inline-block;
        vertical-align: super;
        @include rwd($sm) {
          font-size: 0.34rem;
          vertical-align: middle;
        }
      }
    }
    .right {
      width: 9.4rem;
      height: 0.18rem;
      display: inline-block;
      padding-left: 0.23rem;
      text-align: left;
      @include rwd($lg) {
        width: 9.3rem;
      }
      @include rwd($md) {
        width: 6.5rem;
      }
      @include rwd($sm) {
        width: 6.2rem;
        padding: 0.2rem 0;
        line-height: 1.3;
      }
      &.blue {
        border-left: 1px solid $blue;
      }
      &.orange {
        border-left: 1px solid $orange;
      }
      &.red {
        border-left: 1px solid $red;
      }
      &.blue,
      &.orange,
      &.red {
        @include rwd($sm) {
          border: none;
        }
      }
      .text {
        width: 100%;
        font-size: 0.16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @include rwd($sm) {
          font-size: 0.27rem;
          overflow: visible;
          white-space: unset;
        }
      }
    }
  }
}
</style>
