<template>
  <div class="treeBox">
    <div v-if="!isFirst" class="branch multi"></div>
    <div class="cell" @mouseover="calculatePos($event, 50)">
      <div class="image">
        <div class="item-stat" :style="position">
          <div class="item-detail">
            <ItemDetail
              :item="item"
              :img-u-r-l="getItemImage(item.image.full.split('.')[0])"
            />
          </div>
        </div>
        <img
          :class="{ active: item.image.full === activeItem.image.full }"
          :src="getItemImage(item.image.full.split('.')[0])"
          @click="changeActiveItem"
        />
      </div>
    </div>
    <div v-if="item.from && item.from.length >= 2" class="branch multi"></div>
    <div v-else-if="item.from" class="branch single"></div>
    <div
      v-if="item.from && item.from.length >= 2"
      class="branch limb"
      :style="{
        width: `${((item.from.length - 1) * 100) / item.from.length}%`,
      }"
    ></div>
    <TreeBox
      v-for="(child, id) in item.from"
      :key="id"
      :style="{ width: `${100 / item.from.length}%` }"
      :is-first="false"
      :item="itemList[child]"
      :active-item="activeItem"
      :item-list="itemList"
      :get-item-image="getItemImage"
      @changeActiveItem="relaySignal"
    />
  </div>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'TreeBox',
  props: {
    isFirst: Boolean,
    item: {
      type: Object,
      default: () => {},
    },
    activeItem: {
      type: Object,
      default: () => {},
    },
    itemList: {
      type: Object,
      default: () => {},
    },
    getItemImage: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      position: {},
    };
  },
  methods: {
    changeActiveItem() {
      this.$emit('changeActiveItem', this.item, 'formula');
    },
    relaySignal(item, mode) {
      this.$emit('changeActiveItem', item, mode);
    },
    calculatePos(event, initialVal) {
      this.position = utils.calculatePos(event, initialVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.treeBox {
  width: 100%;
  .cell {
    text-align: center;
    position: relative;
    font-size: 0;
    .image {
      width: 0.48rem;
      height: 0.48rem;
      display: inline-block;
      font-size: 0.2rem;
      color: red;
      @include rwd($sm) {
        width: 0.72rem;
        height: 0.72rem;
      }
      img {
        display: inline;
        cursor: pointer;
      }
    }
    .item-stat {
      position: absolute;
      height: inherit;
      display: none;
      z-index: 3;
      .item-detail {
        width: 3.7rem;
        color: #d3c7a9;
        border: 1px solid #93743d;
        text-align: left;
        background: #0d171c;
        font-family: 'Roboto', serif;
        font-size: 0.2rem;
      }
    }
    .image:hover .item-stat {
      display: block;
      @include rwd($sm) {
        display: none;
      }
    }
  }
  .active {
    border: 1px solid green;
  }

  .treeBox {
    vertical-align: top;
    display: inline-block;
  }

  .branch {
    width: 1.15px;
    height: 1.15px;
    margin: auto;
    overflow: hidden;
    background: white;
  }

  .multi {
    height: 6px;
  }

  .single {
    height: 12px;
  }
}
</style>
