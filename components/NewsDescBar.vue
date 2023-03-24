<template>
  <div id="newsDescBar">
    <div class="box">
      <div class="left">
        <p v-if="category">{{ category.name }}</p>
      </div>
      <div class="middle">
        <p v-if="category">{{ category.desc }}<br /></p>
      </div>
      <div v-if="subCategories" class="right">
        <nuxt-link
          v-for="(subCategory, index) in subCategories"
          :key="index"
          :to="subCategory.url"
        >
          {{ subCategory.name }}
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
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NewsDescBar',
  computed: {
    ...mapState('News', ['category', 'subCategories']),
  },
};
</script>

<style lang="scss" scoped>
$blue: #0bc6e4;

#newsDescBar {
  @include rwd($sm) {
    padding: 0;
  }
  .box {
    height: 0.7rem;
    margin: 0 0 0.3rem;
    padding: 0.16rem 0.2rem;
    color: white;
    background: #061c25;
    position: relative;
    text-align: left;
    @include rwd($md) {
      margin: 0 0.37rem 0.3rem;
      padding: 0.16rem 0.1rem 0.16rem 0.2rem;
    }
    @include rwd($sm) {
      padding: 0.1rem 0.3rem;
      height: 2.8rem;
      margin-bottom: 0.44rem;
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
      display: inline-block;
      font-size: 0;
      margin-left: 0.28rem;
      @include rwd($md) {
        margin-left: 0.2rem;
      }
      @include rwd($sm) {
        width: 100%;
        padding-bottom: 0.2rem;
        margin: auto;
        text-align: center;
        border-bottom: 1px solid white;
      }
      p {
        font-size: 0.36rem;
        font-weight: 600;
        padding-right: 0.2rem;
        border-right: 1px solid white;
        @include rwd($sm) {
          border: none;
        }
      }
    }
    .middle {
      height: 0.4rem;
      font-size: 0;
      padding: 0.11rem 0 0.11rem 0.1rem;
      display: inline-block;
      vertical-align: top;
      text-align: left;
      @include rwd($sm) {
        width: 100%;
        height: auto;
        padding: 0.2rem 0;
        border: none;
      }
      p {
        font-size: 0.16rem;
        display: inline-block;
        vertical-align: middle;
        @include rwd($sm) {
          font-size: 0.3rem;
        }
      }
    }
    .right {
      width: 3.7rem;
      height: 0.4rem;
      margin-right: 0.13rem;
      font-size: 0;
      float: right;
      text-align: left;
      vertical-align: middle;
      @include rwd($md) {
        margin-right: 0.2rem;
      }
      @include rwd($sm) {
        width: 6.2rem;
        margin: 0.3rem 0;
        text-align: left;
      }
      a {
        width: 1.72rem;
        height: 100%;
        font-size: 0.17rem;
        padding: 0.1rem 0;
        color: black;
        display: inline-block;
        background: $blue;
        text-align: center;
        position: relative;
        &:first-child {
          margin-right: 0.16rem;
          @include rwd($sm) {
            margin-right: 0.4rem;
          }
        }
        @include rwd($sm) {
          width: 2.8rem;
          height: 0.65rem;
          padding-top: 0.2rem;
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
</style>
