<template>
  <div id="BanPage">
    <Banner :bread-data="breadData" />
    <div id="banPageContent" class="container container1334">
      <div class="banListWrapper">
        <SearchBar
          v-model="searchText"
          :placeholder="$t('LOL__BAN_PAGE__SEARCH_SUMMONER')"
          :search-text="searchText"
          :selected-tab="selectedTab"
          :category="category"
          :handle-category="handleCategory"
          :handle-mobile-dropdown="handleMobileDropdown"
          :selected-name="selectedName"
          :show-dropdown="showDropdown"
          :on-change="searchSummoner"
        />
        <Loading v-if="loading" style="margin: 1rem 0" />
        <div
          v-for="(lists, index) in banList"
          v-else
          :key="index"
          class="banList"
        >
          <div class="date">
            {{ `${lists.date.year}/${lists.date.month}/${lists.date.date}` }}
          </div>
          <div class="lists">
            <div v-for="user in lists.user" :key="user.summoner" class="list">
              <div class="field">
                <span class="key">{{ $t('LOL__BAN_PAGE__SUMMONER') }}</span>
                <span class="value">{{ user.summoner }}</span>
              </div>
              <div class="field">
                <span class="key">{{ $t('LOL__BAN_PAGE__LEVEL') }}</span>
                <span class="value">{{ user.level }}</span>
              </div>
              <div class="field">
                <span class="key">{{ $t('LOL__BAN_PAGE__REASON') }}</span>
                <span class="value">{{ user.reason }}</span>
              </div>
              <div class="field">
                <span class="key">{{ $t('LOL__BAN_PAGE__BAN_STATUS') }}</span>
                <span class="value">{{ user.status }}</span>
              </div>
            </div>
            <div class="clearboth" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState, mapActions } from 'vuex';

export default {
  name: 'BanListPage',
  async fetch({ store }) {
    await store.dispatch('Ban/getBanList', { months: '0' });
  },
  data() {
    return {
      breadData: [
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
          url: '/',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__BAN',
          url: '/ban',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS',
          url: '/ban',
        },
      ],
      searchText: '',
      category: [
        {
          tag: '0',
          name: 'LOL__BAN_PAGE__ONE_MONTH',
        },
        {
          tag: '1',
          name: 'LOL__BAN_PAGE__TWO_MONTH',
        },
        {
          tag: '2',
          name: 'LOL__BAN_PAGE__THREE_MONTH',
        },
      ],
      selectedTab: '0',
      showDropdown: false,
    };
  },
  computed: {
    ...mapState('Ban', ['banList', 'loading']),
    filterCategory() {
      return this.category.filter((item) => item.tag !== this.selectedTab);
    },
    selectedName() {
      if (this.searchText) return this.category[this.category.length - 1].name;
      return this.category.find((item) => item.tag === this.selectedTab).name;
    },
  },
  methods: {
    ...mapActions('Ban', ['getBanList', 'getBanSummoner']),
    handleCategory(name) {
      this.searchText = '';
      this.selectedTab = name;
      this.getBanList({ months: this.selectedTab });
      window.scrollTo(0, 0);
    },
    handleMobileDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    searchSummoner(event) {
      if (event.target.value) {
        if (this.selectedTab !== '2') this.selectedTab = '2';
        this.getBanSummoner({ name: this.searchText });
      } else {
        this.getBanList({ months: this.selectedTab });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#banPageContent {
  margin-bottom: 0.8rem;
  padding: 0 0.07rem;
  @include rwd($md) {
    padding: 0 0.2rem;
  }
  @include rwd($sm) {
    padding: 0 0.3rem;
  }
  .banListWrapper {
    width: 13.2rem;
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    @include fadeInUp(1s);
    @include rwd($md) {
      width: 9.6rem;
    }
    @include rwd($sm) {
      width: 6.8rem;
    }
    ::v-deep .category {
      margin: 0 0.45rem;
      &:first-of-type {
        margin-left: 2.8rem;
        @include rwd($md) {
          margin-left: 1.3rem;
        }
        @include rwd($sm) {
          margin: 0;
        }
      }
    }

    .banList {
      padding: 0.6rem 0 0;
      @include rwd($sm) {
        padding: 0;
      }
      .date {
        font-size: 0.26rem;
        padding-left: 0.1rem;
        color: #c49567;
        font-weight: 600;
        text-align: left;
        @include rwd($sm) {
          font-size: 0.45rem;
        }
      }
      .lists {
        // font-size: 0;
        text-align: left;
        @include fadeInUp(1s);
        @include rwd($sm) {
          margin-top: 0.1rem;
        }
        .list {
          width: 3.2rem;
          height: 1.75rem;
          margin-top: 0.2rem;
          margin-right: 0.13rem;
          float: left;
          background: #e5e5e5;
          font-size: 0.2rem;
          color: white;
          text-align: left;
          padding: 0.2rem 0.13rem;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            border-left: 0.2rem solid transparent;
            border-top: 0.2rem solid white;
          }
          &:nth-child(4n) {
            margin-right: 0;
            @include rwd($md) {
              margin-right: 0.13rem;
            }
          }
          &:nth-child(3n) {
            @include rwd($md) {
              margin-right: 0;
            }
          }
          @include rwd($md) {
            width: 3.1rem;
            margin-right: 0.13rem;
          }
          @include rwd($sm) {
            width: 6.8rem;
            height: 2rem;
            padding: 0.18rem 0.33rem;
          }
          .field {
            margin-bottom: 0.16rem;
            span {
              font-size: 0.14rem;
              font-weight: 600;
              vertical-align: top;
              display: inline-block;
              @include rwd($sm) {
                font-size: 0.24rem;
              }
            }
            .key {
              width: 0.66rem;
              color: black;
              @include rwd($sm) {
                width: 1.2rem;
              }
            }
            .value {
              width: 2.1rem;
              color: #5d8f8a;
              @include rwd($sm) {
                width: 4.7rem;
              }
            }
          }
        }
        .clearboth {
          clear: both;
        }
      }
    }
  }
}
</style>
