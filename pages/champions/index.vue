<template>
  <div id="Champions">
    <Banner :bread-data="breadData" />
    <div id="championsContent" class="container container1334">
      <div class="remind">{{ $t('LOL__CHAMPIONS_PAGE__DESC') }}</div>
      <Loading v-if="loading" style="margin: 1rem 0" />
      <div v-else class="championsWrapper">
        <SearchBar
          v-model="searchText"
          :category="category"
          :placeholder="$t('LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS')"
          :search-text="searchText"
          :selected-tab="selectedTab"
          :handle-category="handleCategory"
          :handle-mobile-dropdown="handleMobileDropdown"
          :selected-name="selectedName"
          :show-dropdown="showDropdown"
        />
        <div
          v-if="champions && !Object.keys(filterChampions).length"
          class="noMappingChampion"
        >
          {{ $t('LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS') }}
        </div>
        <div class="boxs">
          <nuxt-link
            v-for="(item, index) in filterChampions"
            :key="index"
            :to="`/champions/${item.id}`"
            class="box"
          >
            <div class="imgBox">
              <img
                :src="championImage(item.id)"
                :alt="item.id"
                @error="displayDefaultImage"
              />
            </div>
            <span class="name">{{ item.name }}</span>
          </nuxt-link>
        </div>
        <div class="clearfix" />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex';
import utils from '@/utils';

export default {
  name: 'Champions',
  async fetch({ store }) {
    await store.dispatch('DDragon/getDDragonEnvData');
    await store.dispatch('Champion/getAllChampionsData');
  },
  data() {
    return {
      CDN: process.env.CDN,
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
          name: 'LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS',
          url: '/champions',
        },
      ],
      category: [
        {
          tag: 'All',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_ALL',
        },
        {
          tag: 'Marksman',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN',
        },
        {
          tag: 'Fighter',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER',
        },
        {
          tag: 'Tank',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_TANK',
        },
        {
          tag: 'Assassin',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN',
        },
        {
          tag: 'Support',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT',
        },
        {
          tag: 'Mage',
          name: 'LOL__CHAMPIONS_PAGE__CATEGORY_MAGE',
        },
      ],
      searchText: '',
      selectedTab: 'All',
      showDropdown: false,
    };
  },
  computed: {
    ...mapState('Nav', ['bgImg', 'fgImg']),
    ...mapState('DDragon', ['ddragonEnv']),
    ...mapState('Champion', ['champions', 'loading']),
    filterChampions() {
      if (!this.searchText && this.selectedTab === 'All') return this.champions;
      const reg = new RegExp(this.searchText, 'i');
      if (this.selectedTab !== 'All' && this.searchText)
        return utils.objectFilter(
          this.champions,
          (champion) =>
            (reg.test(champion.id) ||
              champion.name.includes(this.searchText)) &&
            champion.tags.includes(this.selectedTab),
        );
      if (this.searchText)
        return utils.objectFilter(
          this.champions,
          (champion) =>
            reg.test(champion.id) || champion.name.includes(this.searchText),
        );
      return utils.objectFilter(this.champions, (champion) =>
        champion.tags.includes(this.selectedTab),
      );
    },
    selectedName() {
      return this.category.find((item) => item.tag === this.selectedTab).name;
    },
    championImage() {
      return (championId) => {
        return `https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${championId}_0.jpg`;
      };
    },
  },
  methods: {
    handleCategory(name) {
      this.selectedTab = name;
      window.scrollTo(0, 0);
    },
    handleMobileDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    displayDefaultImage(e) {
      e.target.src =
        'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/none.jpg';
    },
  },
  // head() {
  //   return {
  //     title: this.$t('LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS'),
  //     meta: [
  //       {
  //         name: 'viewport',
  //         content:
  //           'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
  //       },
  //     ],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
#championsContent {
  margin-top: 0.5rem;
  padding: 0 0.07rem;
  @include rwd($sm) {
    margin-top: 0.38rem;
  }
  .remind {
    width: 4.8rem;
    font-size: 0.16rem;
    margin: 0.3rem auto 0.5rem;
    @include rwd($sm) {
      width: 6.7rem;
      font-size: 0.28rem;
      margin: 0.3rem auto;
    }
  }

  .championsWrapper {
    width: 13.2rem;
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0 0.02rem;
    @include fadeInUp(1s);
    @include rwd($md) {
      width: 9.6rem;
    }
    @include rwd($sm) {
      width: 6.8rem;
    }

    .boxs {
      padding: 0.6rem 0 0;
      @include rwd($md) {
        padding: 0.6rem 0.8rem 0;
      }
      @include rwd($sm) {
        padding: 0;
      }
      .box {
        width: 2.47rem;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
        float: left;
        overflow: hidden;
        position: relative;
        @include rwd($sm) {
          width: 3.2rem;
          margin-right: 0.35rem;
          margin-bottom: 0.3rem;
        }
        &:nth-child(5n) {
          margin-right: 0;
          @include rwd($md) {
            margin-right: 0.2rem;
          }
          @include rwd($sm) {
            margin-right: 0.35rem;
          }
        }
        &:nth-child(3n) {
          @include rwd($md) {
            margin-right: 0;
          }
          @include rwd($sm) {
            margin-right: 0.35rem;
          }
        }
        &:nth-child(2n) {
          @include rwd($sm) {
            margin-right: 0;
          }
        }
        &:hover .imgBox:after {
          transform: translate(100%, -100%) rotate(45deg);
        }
        &:hover .imgBox img {
          transform: scale(1.02);
        }
        &:hover .name {
          padding-left: 0.3rem;
          background-color: rgb(0, 102, 128);
        }
        .imgBox {
          width: 2.5rem;
          height: 2.8rem;
          display: block;
          position: relative;
          overflow: hidden;
          @include rwd($sm) {
            width: 3.2rem;
            height: 3.6rem;
          }
          img {
            display: block;
            transform: scale(1.05);
            transition: 0.3s ease-in-out;
          }
          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 11%;
            padding-top: 11%;
            background-color: rgb(255, 255, 255);
            transform: translate(50%, -50%) rotate(45deg);
            transition: transform 0.5s ease 0s;
          }
        }
        .name {
          width: 100%;
          font-size: 0.25rem;
          padding: 0.1rem 0.1rem 0.1rem 0.2rem;
          display: block;
          margin: auto;
          overflow: hidden;
          color: white;
          background-color: rgb(6, 28, 37);
          text-align: left;
          transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          @include rwd($sm) {
            padding: 0.2rem 0.1rem 0.1rem 0.2rem;
            height: 0.65rem;
          }
        }
      }
    }

    .clearfix {
      clear: both;
    }
    .noMappingChampion {
      padding: 0.7rem 0;
    }
  }
}
</style>
