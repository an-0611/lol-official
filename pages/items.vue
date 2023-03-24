<template>
  <div id="Items">
    <Banner :bread-data="breadData" />
    <div id="ItemsContent" class="container container1334">
      <Loading v-if="loading" style="margin: 1rem 0" />
      <div v-else class="itemsWrapper">
        <div id="preserveSearchBar">
          <div class="svgBorderBox">
            <svg viewBox="0 0 1320 230">
              <path
                d="M1319,1v208.59L1299.55,229L99,229H1V20.41L20.45,1L85,1H1319 M1320,0H85v0H20.03L0,20v210h99v0h1200.97l20.03-20V0L1320,0z"
              />
            </svg>
            <svg viewBox="0 0 960 230">
              <path
                d="M959,1v208.59L939.55,229L99,229H1V20.41L20.45,1L85,1H959 M960,0H85v0H20.03L0,20v210h99v0h840.97L960,210V0L960,0z"
              />
            </svg>
            <svg viewBox="0 0 680 80">
              <path
                d="M679,1v58.59L659.55,79L99,79H1V20.41L20.45,1L85,1H679 M680,0H85v0H20.03L0,20v60h99v0h560.97L680,60V0L680,0z"
              />
            </svg>
          </div>

          <SearchBar
            v-model="searchText"
            :placeholder="$t('LOL__ITEMS_PAGE__SEARCH_ITEMS')"
            :search-text="searchText"
            :selected-tab="selectedTab"
            :category="category"
            :handle-category="handleCategory"
            :handle-mobile-dropdown="handleMobileDropdown"
            :selected-name="selectedName"
            :show-dropdown="showDropdown"
          />

          <div class="detailFilter">
            <div
              v-for="(n, i) in Object.keys(filterGroups).length"
              :key="i"
              class="group"
            >
              <label
                v-for="(group, j) in filterGroups[i]"
                :key="j"
                :for="group.name"
                class="check"
              >
                <input
                  :id="group.name"
                  v-model="checkedNames"
                  type="checkbox"
                  :value="group.name"
                />{{ $t(group.i18n) }}
              </label>
            </div>
          </div>
        </div>

        <div
          v-if="items && !Object.keys(filterItems).length"
          class="noMappingChampion"
        >
          {{ $t('LOL__ITEMS_PAGE__NO_MAPPING_ITEMS') }}
        </div>
        <div class="boxs">
          <a
            v-for="(item, itemId) in filterItems"
            :key="itemId"
            class="box"
            @click="openItemModal(item)"
            @mouseover="calculatePos($event, 100)"
            @mouseleave="resetPos"
          >
            <div class="imgBox">
              <img :src="getItemImage(itemId)" />
            </div>
            <span class="name">{{
              item.name.replace('%i:ornnIcon% ', '')
            }}</span>
            <div class="tooltip" :style="position">
              <div class="info">
                <img class="icon" :src="getItemImage(itemId)" />
                <div class="tooltipName">
                  {{ item.name.replace('%i:ornnIcon% ', '') }}
                </div>
                <div class="price">{{ item.gold.total }}</div>
                <!-- {{ item.gold.base }} -->
              </div>
              <div class="desc" v-html="item.description" />
            </div>
          </a>
        </div>
        <div class="clearfix" />
      </div>
    </div>

    <div
      v-if="isShowModal && selectedItem"
      id="ItemModal"
      @click="closeItemModal()"
    >
      <div class="bg" />
      <div class="content" @click="clickItemModalContent($event)">
        <div class="topic">{{ $t('LOL__ITEMS_PAGE__POPUP__FORMULA') }}</div>
        <div class="formula">
          <TreeBox
            :is-first="true"
            :item="selectedItem"
            :active-item="activeItem"
            :get-item-image="getItemImage"
            :item-list="items"
            @changeActiveItem="changeActiveItem"
          />
        </div>
        <template v-if="activeItem">
          <div class="topic">{{ $t('LOL__ITEMS_PAGE__POPUP__ITEMS') }}</div>
          <ItemDetail
            :item="activeItem"
            :img-u-r-l="getItemImage(activeItem.image.full.split('.')[0])"
          />
        </template>
        <template v-if="activeItem.into">
          <div class="topic">
            {{ $t('LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS') }}
          </div>
          <div class="intoItemBox">
            <div
              v-for="itemId in activeItem.into"
              :key="itemId"
              class="image"
              @mouseover="calculatePos($event, 50)"
              @mouseleave="resetPos"
            >
              <div class="item-stat" :style="position">
                <div class="item-detail">
                  <ItemDetail
                    :item="items[itemId]"
                    :img-u-r-l="getItemImage(itemId)"
                  />
                </div>
              </div>
              <img
                :src="getItemImage(itemId)"
                @click="changeSelectedItem(itemId)"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex';
import utils from '@/utils';

export default {
  name: 'Items',
  async fetch({ store }) {
    await store.dispatch('DDragon/getDDragonEnvData');
    await store.dispatch('Champion/getAllItemsData');
  },
  data() {
    return {
      utils,
      breadData: [
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
          url: '/',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT',
          url: '/tutorial',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__ITEMS',
          url: '/items',
        },
      ],
      filterGroups: {
        0: [
          {
            name: 'Consumable',
            i18n: 'LOL__ITEMS_PAGE__FILTER__CONSUMABLE',
          },
          {
            name: 'GoldPer',
            i18n: 'LOL__ITEMS_PAGE__FILTER__GOLDPER',
          },
          {
            name: 'Vision',
            i18n: 'LOL__ITEMS_PAGE__FILTER__VISION',
          },
        ],
        1: [
          {
            name: 'Health',
            i18n: 'LOL__ITEMS_PAGE__FILTER__HEALTH',
          },
          {
            name: 'SpellBlock',
            i18n: 'LOL__ITEMS_PAGE__FILTER__SPELLBLOCK',
          },
          {
            name: 'HealthRegen',
            i18n: 'LOL__ITEMS_PAGE__FILTER__HEALTHREGEN',
          },
          {
            name: 'Armor',
            i18n: 'LOL__ITEMS_PAGE__FILTER__ARMOR',
          },
        ],
        2: [
          {
            name: 'Damage',
            i18n: 'LOL__ITEMS_PAGE__FILTER__DAMAGE',
          },
          {
            name: 'CriticalStrike',
            i18n: 'LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE',
          },
          {
            name: 'AttackSpeed',
            i18n: 'LOL__ITEMS_PAGE__FILTER__ATTACKSPEED',
          },
          {
            name: 'LifeSteal',
            i18n: 'LOL__ITEMS_PAGE__FILTER__LIFESTEAL',
          },
          {
            name: 'ArmorPenetration',
            i18n: 'LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION',
          },
        ],
        3: [
          {
            name: 'SpellDamage',
            i18n: 'LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE',
          },
          {
            name: 'CooldownReduction',
            i18n: 'LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION',
          },
          {
            name: 'Mana',
            i18n: 'LOL__ITEMS_PAGE__FILTER__MANA',
          },
          {
            name: 'ManaRegen',
            i18n: 'LOL__ITEMS_PAGE__FILTER__MANAREGEN',
          },
          {
            name: 'MagicPenetration',
            i18n: 'LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION',
          },
        ],
        4: [
          {
            name: 'Boots',
            i18n: 'LOL__ITEMS_PAGE__FILTER__BOOTS',
          },
          {
            name: 'NonbootsMovement',
            i18n: 'LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT',
          },
        ],
      },
      searchText: '',
      category: [
        {
          tag: 'All',
          name: 'LOL__ITEMS_PAGE__CATEGORY_ALL',
        },
        {
          tag: 'Tool',
          name: 'LOL__ITEMS_PAGE__CATEGORY_TOOL',
        },
        {
          tag: 'Defense',
          name: 'LOL__ITEMS_PAGE__CATEGORY_DEFENSE',
        },
        {
          tag: 'Attack',
          name: 'LOL__ITEMS_PAGE__CATEGORY_ATTACK',
        },
        {
          tag: 'Magic',
          name: 'LOL__ITEMS_PAGE__CATEGORY_MAGIC',
        },
        {
          tag: 'RunSpeed',
          name: 'LOL__ITEMS_PAGE__CATEGORY_RUNSPEED',
        },
      ],
      selectedTab: 'All',
      // The selectedTabChart key is self define it, and expect not same with item filter key. e.g. Attack !== Damage, Magic !== Mana
      // Actually it means the same in chinese , but wanna separate the key so rename it.
      selectedTabChart: {
        Tool: ['Consumable', 'GoldPer', 'Vision'],
        Defense: ['Health', 'SpellBlock', 'HealthRegen', 'Armor'],
        Attack: [
          'Damage',
          'CriticalStrike',
          'AttackSpeed',
          'LifeSteal',
          'ArmorPenetration',
        ],
        Magic: [
          'SpellDamage',
          'CooldownReduction',
          'Mana',
          'ManaRegen',
          'MagicPenetration',
        ],
        RunSpeed: ['Boots', 'NonbootsMovement'],
      },
      showDropdown: false,
      checkedNames: [],
      isShowModal: false,
      selectedItem: null,
      activeItem: null,
      position: {},
    };
  },
  computed: {
    ...mapState('DDragon', ['ddragonEnv']),
    ...mapState('Champion', ['items', 'loading']),
    filterItems() {
      const reg = new RegExp(this.searchText, 'i');
      const tabChart = this.selectedTabChart[this.selectedTab]; // means user selected the filter tab
      const isCheckedName = this.checkedNames.length
        ? (item) => utils.isInclude(item.tags, this.checkedNames)
        : (item) => item;
      const issearchText = this.searchText
        ? (item) => reg.test(item.name) || item.name.includes(this.searchText)
        : (item) => item;
      const isChartMappingItemTag = tabChart
        ? (item) => item.tags.filter((tag) => tabChart.includes(tag)).length
        : (item) => item;
      return utils.objectFilter(
        this.items,
        isCheckedName,
        issearchText,
        isChartMappingItemTag,
      );
    },
    selectedName() {
      return this.category.find((item) => item.tag === this.selectedTab).name;
    },
    getItemImage() {
      return (itemId) => {
        return `${this.ddragonEnv.cdn}/${this.ddragonEnv.dd}/img/item/${itemId}.png`;
      };
    },
  },
  methods: {
    openItemModal(item) {
      this.selectedItem = item;
      this.activeItem = item;
      this.handleItemModal(true);
    },
    closeItemModal() {
      this.handleItemModal(false);
    },
    handleCategory(name) {
      this.selectedTab = name;
      window.scrollTo(0, 0);
    },
    handleMobileDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleItemModal(bool) {
      this.isShowModal = bool;
      if (bool) document.body.classList.add('lock');
      else document.body.classList.remove('lock');
    },
    clickItemModalContent(event) {
      event.stopPropagation();
    },
    changeSelectedItem(num) {
      this.selectedItem = this.items[num];
      this.activeItem = this.items[num];
    },
    changeActiveItem(item, mode) {
      this.activeItem = item;
      if (mode !== 'formula') this.initialItem = item;
    },
    calculatePos(event, initialVal) {
      this.position = utils.calculatePos(event, initialVal);
    },
    resetPos() {
      this.position = { display: 'none' };
    },
  },
};
</script>

<style lang="scss" scoped>
#ItemsContent {
  margin-top: 0.55rem;
  padding: 0 0.07rem;
  @include rwd($sm) {
    margin-top: 0.38rem;
  }
  #preserveSearchBar {
    height: 2.3rem;
    margin-bottom: 0.65rem;
    position: relative;
    @include rwd($md) {
      width: 9.6rem;
      margin: 0 auto 0.65rem;
    }
    @include rwd($sm) {
      width: 6.8rem;
      height: 0.8rem;
      margin-bottom: 0.5rem;
      margin-top: 0.48rem;
      position: sticky;
      top: 1rem;
      z-index: 2;
    }
    &:before {
      content: '';
      display: block;
      width: 96%;
      height: 1px;
      background: #aaaaaa;
      @include position(absolute, $top: 0.49rem, $left: 0, $right: 0);
      margin: auto;
      text-align: center;
      @include rwd($sm) {
        display: none;
      }
    }
    .svgBorderBox {
      svg {
        @include position(absolute, $top: 0, $left: 0);
        fill: #aaaaaa;
        &:nth-child(1) {
          width: 13.2rem;
          height: 2.3rem;
          @include rwd($md) {
            display: none;
          }
        }
        &:nth-child(2) {
          display: none;
          width: 9.6rem;
          height: 2.3rem;
          @include rwd($md) {
            display: block;
          }
          @include rwd($sm) {
            display: none;
          }
        }
        &:nth-child(3) {
          display: none;
          width: 6.8rem;
          height: 0.8rem;
          @include rwd($sm) {
            display: block;
          }
        }
      }
    }
    ::v-deep .searchBar {
      .svgBox {
        display: none;
        @include rwd($sm) {
          display: block;
        }
      }
      input {
        @include rwd($md) {
          width: 1rem;
          margin-right: 0rem;
        }
        @include rwd($sm) {
          width: 2.25rem;
          height: auto;
          margin-left: 0.5rem;
          font-size: 0.28rem;
          display: inline-block;
          vertical-align: unset;
          top: -0.04rem;
        }
      }
      .category {
        padding: 0.11rem 0;
        margin: 0 0.45rem;
        font-size: 0.2rem;
        line-height: 0.3rem;
        vertical-align: middle;
        color: #626262;
        @include rwd($md) {
          margin: 0 0.5rem;
          font-size: 0.16rem;
          @include withRegion('th') {
            margin: 0 0.35rem;
          }
          @include withRegion('sg') {
            margin: 0 0.3rem;
            &:nth-child(8) {
              margin: 0 0.5rem;
            }
          }
          @include withRegion('ph') {
            margin: 0 0.3rem;
            &:nth-child(8) {
              margin: 0 0.5rem;
            }
          }
          @include withRegion('vn') {
            margin: 0 0.28rem;
          }
        }
        @include rwd($sm) {
          display: none;
        }
        &:first-of-type {
          margin-left: 1.3rem;
          @include withRegion('vn') {
            margin-left: 0.5rem;
          }
          @include rwd($md) {
            margin-left: 0.4rem;
          }
        }
        &.active {
          color: #bf975c;
          &:after {
            content: '';
            width: 100%;
            height: 3px;
            background: #bf975c;
            @include position(absolute, $left: 0, $bottom: -0.01rem);
          }
        }
      }
    }
    .detailFilter {
      width: 100%;
      height: 1.8rem;
      font-size: 0;
      position: relative;
      padding-left: 2rem;
      @include withRegion('th') {
        padding-left: 4rem;
      }
      @include withRegion('sg') {
        padding-left: 3.4rem;
      }
      @include withRegion('ph') {
        padding-left: 3.4rem;
      }
      @include withRegion('vn') {
        padding-left: 3rem;
      }
      @include rwd($md) {
        padding-left: 3rem;
        @include withRegion('th') {
          padding-left: 2.9rem;
        }
        @include withRegion('sg') {
          padding-left: 1.5rem;
        }
        @include withRegion('ph') {
          padding-left: 1.5rem;
        }
        @include withRegion('vn') {
          padding-left: 2.2rem;
        }
      }
      @include rwd($sm) {
        display: none;
      }
      .group {
        width: auto;
        height: 100%;
        font-size: 0.16rem;
        margin: 0 0.22rem;
        display: inline-block;
        text-align: left;
        vertical-align: top;
        @include withRegion('sg') {
          margin: 0 0.1rem 0 0;
        }
        @include withRegion('ph') {
          margin: 0 0.1rem 0 0;
        }
        @include withRegion('vn') {
          margin: 0 0.3rem 0 0;
        }
        @include rwd($md) {
          margin-left: 0;
          margin-right: 0.44rem;
          @include withRegion('th') {
            margin-right: 0.1rem;
          }
          @include withRegion('sg') {
            font-size: 0.12rem;
            margin-right: 0.03rem;
          }
          @include withRegion('ph') {
            font-size: 0.12rem;
            margin-right: 0.03rem;
          }
          @include withRegion('vn') {
            font-size: 0.12rem;
            margin-right: 0.05rem;
          }
        }
        &:nth-child(5n) {
          @include rwd($md) {
            margin-right: 0;
          }
        }
        .check {
          margin: 0.125rem 0;
          display: block;
          color: #626262;
          cursor: pointer;
          overflow: hidden;
          input {
            margin-right: 0.1rem;
            width: 0.13rem;
            height: 0.13rem;
            appearance: none;
            cursor: pointer;
            background: #c9c9c9;
            border-radius: 1px;
            &:checked {
              background: #52ada4;
            }
          }
        }
      }
    }
  }

  .itemsWrapper {
    width: 13.2rem;
    margin-top: 0.5rem;
    margin: auto;
    @include rwd($md) {
      width: 9.8rem;
      padding: 0 0.1rem;
    }
    @include rwd($sm) {
      width: 6.8rem;
      padding: 0 0.05rem;
    }
    .box {
      width: 0.85rem;
      height: 1.4rem;
      margin-right: 0.52rem;
      margin-bottom: 0.5rem;
      float: left;
      cursor: pointer;
      position: relative;
      @include rwd($md) {
        margin-right: 0.6rem;
        margin-bottom: 0.31rem;
      }
      @include rwd($sm) {
        width: 1.7rem;
        height: 2.85rem;
        margin-right: 0.8rem;
        margin-bottom: 0.5rem;
      }
      &:nth-child(10n) {
        margin-right: 0;
        @include rwd($md) {
          margin-right: 0.65rem;
        }
        @include rwd($sm) {
          margin-right: 0.8rem;
        }
      }
      &:nth-child(7n) {
        @include rwd($md) {
          margin-right: 0;
        }
        @include rwd($sm) {
          margin-right: 0.8rem;
        }
      }
      &:nth-child(3n) {
        @include rwd($sm) {
          margin-right: 0;
        }
      }
      &:hover .tooltip {
        display: block;
        @include rwd($sm) {
          display: none;
        }
      }
      .tooltip {
        display: none;
        width: 3.9rem;
        height: auto;
        background: rgba(20, 20, 22, 0.96);
        clip-path: polygon(0 0, 3.7rem 0, 3.9rem 0.2rem, 3.9rem 100%, 0 100%);
        margin-left: 0.28rem;
        padding: 0.1rem 0.3rem 0.3rem 0.25rem;
        position: absolute;
        z-index: 2000;
        .info {
          width: 100%;
          font-size: 0.2rem;
          text-align: left;
          .icon {
            width: 0.48rem;
            height: 0.48rem;
            float: left;
            border: 1px solid #8f7747;
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
          }
          .price {
            width: 2.7rem;
            height: 0.3rem;
            font-size: 0.16rem;
            font-weight: 600;
            float: right;
            color: #c1975e;
          }
        }
        .desc ::v-deep {
          color: white;
          float: left;
          text-align: left;
          margin-top: 6px;
          font-size: 0.16rem;
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
      .imgBox {
        width: 0.85rem;
        height: 0.85rem;
        display: block;
        position: relative;
        overflow: hidden;
        @include rwd($sm) {
          width: 1.7rem;
          height: 1.7rem;
        }
        img {
          display: block;
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 33%;
          padding-top: 33%;
          background-color: rgb(255, 255, 255);
          transform: translate(50%, -50%) rotate(45deg);
          transition: transform 0.5s ease 0s;
        }
      }
      .name {
        width: 100%;
        height: 0.55rem;
        padding: 0 0.07rem;
        font-size: 0.14rem;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: white;
        background-color: rgb(6, 28, 37);
        @include rwd($sm) {
          font-size: 0.3rem;
          height: 1.15rem;
        }
      }
    }
    .noMappingChampion {
      padding-bottom: 0.7rem;
    }
  }
}

#ItemModal {
  width: 100vw;
  height: 100vh;
  z-index: 100;
  @include position(fixed, $top: 0, $left: 0);
  .bg {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: black;
  }
  .content {
    width: 4.7rem;
    height: auto;
    @include position(fixed, $top: 50%, $left: 50%);
    transform: translate(-50%, -50%);
    background: #010913;
    z-index: 1000;
    padding-top: 0.05rem;
    @include rwd($sm) {
      width: 7rem;
      max-height: 80%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
        background: white;
      }
      &::-webkit-scrollbar-thumb {
        background: #49737b;
      }
    }
    .topic {
      width: 97%;
      height: 0.35rem;
      line-height: 0.35rem;
      font-weight: 600;
      font-size: 0.16rem;
      padding-left: 0.05rem;
      margin: auto;
      text-align: left;
      color: white;
      background: #0b323c;
      @include rwd($sm) {
        width: 6.8rem;
        height: auto;
        font-size: 0.3rem;
        padding: 0.15rem;
      }
    }
    .formula {
      padding: 0.1rem 0.2rem;
      box-sizing: border-box;
      @include rwd($sm) {
        padding: 0.35rem 0.2rem;
      }
    }
    .intoItemBox {
      text-align: left;
      @include rwd($sm) {
        padding: 0.1rem 0.2rem;
      }
      .image {
        display: inline-block;
        position: relative;
        &:hover .item-stat {
          display: block;
          @include rwd($sm) {
            display: none;
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
        img {
          width: 0.65rem;
          height: 0.65rem;
          margin: 0.1rem 0 0 0.07rem;
          cursor: pointer;
          @include rwd($sm) {
            width: 1.18rem;
            height: 1.18rem;
          }
        }
      }
    }
  }
}
</style>
