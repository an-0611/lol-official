<template>
  <div class="itemInfoBox">
    <div class="info">
      <img class="icon" :src="imgURL" />
      <div class="tooltipName">
        {{ item.name.replace('%i:ornnIcon% ', '') }}
      </div>
      <div class="price">{{ item.gold.total }}</div>
      <div class="clearfix"></div>
    </div>
    <div class="desc" v-html="stripHref(item.description)" />
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    imgURL: {
      type: String,
      default: '',
    },
  },
  methods: {
    // Strip href in item information
    stripHref(str) {
      return str.replace(/href='[A-Za-z]+'/g, '');
    },
  },
};
</script>

<style lang="scss" scoped>
.itemInfoBox {
  padding: 0.1rem;
  z-index: 1000;
  width: 100%;
  height: auto;
  @include rwd($sm) {
    padding: 0.2rem;
  }
  .info {
    width: 100%;
    font-size: 0.2rem;
    text-align: left;
    .icon {
      width: 0.64rem;
      height: 0.64rem;
      float: left;
      border: 1px solid #8f7747;
      @include rwd($sm) {
        width: 1.18rem;
        height: 1.18rem;
      }
    }
    .tooltipName {
      width: 2.7rem;
      height: 0.3rem;
      color: white;
      font-size: 0.16rem;
      line-height: 0.3rem;
      font-weight: 600;
      float: right;
      background: none;
      margin-top: 0.05rem;
      @include rwd($sm) {
        width: 5.1rem;
        font-size: 0.35rem;
        margin-top: 0.2rem;
      }
    }
    .price {
      width: 2.7rem;
      height: 0.3rem;
      font-size: 0.16rem;
      font-weight: 600;
      float: right;
      color: #c1975e;
      margin-top: 0.05rem;
      @include rwd($sm) {
        width: 5.1rem;
        font-size: 0.35rem;
        margin-top: 0.2rem;
      }
    }
  }
  .desc ::v-deep {
    color: white;
    text-align: left;
    margin-top: 0.1rem;
    font-size: 0.16rem;
    @include rwd($sm) {
      font-size: 0.3rem;
      margin-top: 0.4rem;
    }
    grouplimit {
      color: #0babce;
    }
    a {
      color: red;
    }
    stats {
      color: #0babce !important;
      font {
        color: #0babce !important;
      }
    }
  }
}
</style>
