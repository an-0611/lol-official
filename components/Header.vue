<template>
  <div v-if="index && mainItems" id="header" ref="header">
    <div class="container">
      <div class="logo">
        <nuxt-link :to="index.navLink" />
      </div>
      <!-- pc nav -->
      <div class="pc-nav">
        <ul class="nav">
          <li
            v-for="(category, index) in mainItems"
            :key="category.navName"
            :style="{ width: 100 / mainItems.length + '%' }"
            @mouseover="handleDropdown(index)"
            @mouseleave="leaveNavItem"
            @click="closePcNav({ hasLink: category.navLink })"
          >
            <a
              v-if="urlJudge(category.navLink)"
              :href="category.navLink"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ category.navName }}
            </a>
            <nuxt-link
              v-else
              :to="category.navLink ? category.navLink : ''"
              :class="{ active: selectedIndex === index }"
            >
              {{ category.navName }}
            </nuxt-link>
          </li>
        </ul>
        <!-- pc dropdown -->
        <ul
          v-if="isShowDropdown"
          class="pc-dropdown"
          @mouseleave="leaveDropdown"
        >
          <div class="container">
            <div class="left"></div>
            <div class="right">
              <li
                v-for="(category, index) in mainItems"
                :key="category.navName"
                :style="{ width: 100 / mainItems.length + '%' }"
                @click="closePcNav({ hasLink: true })"
              >
                <div
                  v-for="all in category.dropdownLists"
                  :key="all.listName"
                  @mouseover="handleDropdown(index)"
                >
                  <a
                    v-if="urlJudge(all.listLink)"
                    :href="all.listLink"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {{ all.listName }}
                  </a>
                  <nuxt-link v-else :to="all.listLink">
                    {{ all.listName }}
                  </nuxt-link>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>

      <!-- mobile nav btn toggle -->
      <div
        id="navBtn"
        :class="{ active: isShowNavContent }"
        @click="toggleMNav"
      >
        <span class="line" />
        <span class="line" />
        <span class="line" />
      </div>

      <!-- mobile nav content -->
      <div id="m-nav" :class="{ active: isShowNavContent }">
        <div class="m-header">
          <div class="m-sidebar-logo" @click="closeMNav">
            <nuxt-link to="/" />
          </div>
        </div>
        <div class="m-content">
          <div
            v-for="(category, index) in mainItems"
            :key="category.navName"
            :class="['group', { isDownload: category.navLink === '/download' }]"
            @click="toggleMenuCollapse(index, category)"
          >
            <div class="title">{{ category.navName }}</div>
            <ul
              v-if="category.dropdownLists"
              :class="{ active: selectedIndex === index }"
            >
              <!-- v-show="selectedIndex === index" -->
              <li
                v-for="dropdownList in category.dropdownLists"
                :key="dropdownList.listName"
                @click="closeMNav"
              >
                <a
                  v-if="urlJudge(dropdownList.listLink)"
                  :href="dropdownList.listLink"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {{ dropdownList.listName }}
                </a>
                <nuxt-link v-else :to="dropdownList.listLink">{{
                  dropdownList.listName
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      isShowDropdown: false,
      selectedIndex: -1,
      isShowNavContent: false,
    };
  },
  computed: {
    ...mapState('Nav', ['index', 'mainItems']),
    urlJudge() {
      return (url) => {
        const isExternalLink = /^https?:\/\//i;
        return isExternalLink.test(url);
      };
    },
  },
  watch: {
    '$route.path'(newRoute) {
      if (newRoute !== '/') this.updateBgImgAndFgImg({ route: newRoute });
    },
  },
  methods: {
    ...mapActions('Nav', ['getNav', 'updateBgImgAndFgImg']),
    closePcNav({ hasLink }) {
      if (!hasLink) return;
      this.isShowDropdown = false;
    },
    toggleMNav() {
      this.isShowNavContent = !this.isShowNavContent;
    },
    closeMNav() {
      this.isShowNavContent = false;
      window.scrollTo(0, 0);
    },
    toggleMenuCollapse(index, category) {
      if (!category.dropdownLists.length)
        window.open(category.navLink, '_blank');
      if (this.selectedIndex === index) {
        this.selectedIndex = -1;
        return;
      }
      this.selectedIndex = index;
    },
    handleDropdown(index) {
      if (!this.mainItems[index].dropdownLists.length)
        this.isShowDropdown = false;
      else this.isShowDropdown = true;
      this.selectedIndex = index;
    },
    leaveNavItem() {
      this.selectedIndex = -1;
    },
    leaveDropdown() {
      this.leaveNavItem();
      this.isShowDropdown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#m-nav {
  display: none;
  @include rwd($sm) {
    width: 80%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    right: -85%;
    box-shadow: -3px 0 10px rgba(0, 0, 0, 0.7);
    transition: right 0.5s;
    &.active {
      right: 0;
    }
    .m-header {
      width: 100%;
      height: 1rem;
      @include position(absolute, $top: 0, $right: 0);
      background: #101215;
      .m-sidebar-logo {
        width: 1.8rem;
        height: 1rem;
        margin-left: 0.2rem;
        padding-top: 0.15rem;
        a {
          display: block;
          width: 2rem;
          height: 1rem;
          background: assetsUrl('logo.png') no-repeat;
          background-size: contain;
        }
      }
    }
    .m-content {
      width: 100%;
      height: 100%;
      @include position(absolute, $top: 1rem, $right: 0);
      color: white;
      background: #061d25;
      overflow-y: scroll;
      .group {
        padding: 0.2rem 0.3rem;
        text-align: left;
        &.isDownload {
          @include rwd($sm) {
            display: none;
          }
        }
        .title {
          font-size: 0.32rem;
          background: linear-gradient(#fce5b9, #d1ad6f);
          background-clip: text;
          -webkit-text-fill-color: tan;
          font-weight: 600;
        }
        ul {
          max-height: 0;
          transition: max-height 0.5s;
          overflow: hidden;
          &.active {
            max-height: 5rem;
          }
          li {
            display: block;
            padding: 0.1rem 0 0.1rem 0.3rem;
            &:before {
              content: '';
              display: inline-block;
              vertical-align: middle;
              border-top: 0.06rem solid #061d25;
              border-bottom: 0.06rem solid #061d25;
              border-left: 0.09rem solid white;
              margin-right: 0.2rem;
            }
            a {
              color: white;
              font-size: 0.28rem;
              display: inline-block;
              @include withRegion('th') {
                font-family: 'Kanit', Arial, Helvetica, sans-serif;
              }
            }
          }
        }
      }
    }
  }
}

#navBtn {
  display: none;
  @include rwd($sm) {
    width: 0.6rem;
    height: 0.6rem;
    padding: 0.12rem 0;
    border-radius: 50%;
    display: block;
    display: flex;
    flex-direction: column;
    background: #ccbe91;
    box-sizing: border-box;
    @include position(absolute, $top: 0, $right: 0.4rem, $bottom: 0);
    margin: auto 0;
    z-index: 100;
    .line {
      width: 0.29rem;
      height: 4px;
      margin: auto;
      display: block;
      background: black;
      border-radius: 21px;
      transition: all 0.3s ease-in-out;
    }
    &.active .line:nth-child(1) {
      transform: translateY(0.12rem) rotate(45deg);
    }
    &.active .line:nth-child(2) {
      opacity: 0;
    }
    &.active .line:nth-child(3) {
      transform: translateY(-0.12rem) rotate(-45deg);
    }
  }
}

#header {
  .container {
    padding: 0;
  }
  width: 100%;
  height: 0.7rem;
  z-index: 100;
  position: sticky;
  top: 0;
  background: #101215;
  @include rwd($sm) {
    height: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
  }
  .logo {
    width: 14%;
    height: 0.7rem;
    display: inline-block;
    @include rwd($sm) {
      width: 2rem;
      height: 1rem;
      margin: 0 auto;
      padding-left: 0;
      padding-top: 0.12rem;
    }
    a {
      width: 1.62rem;
      height: 0.6rem;
      margin-top: 0.05rem;
      display: block;
      background: assetsUrl('logo.png') no-repeat;
      background-size: contain;
      cursor: pointer;
      @include rwd($sm) {
        width: auto;
        height: 100%;
        margin-top: 0;
      }
    }
  }
  .pc-nav {
    width: 86%;
    height: 100%;
    float: right;
    display: block;
    @include rwd($sm) {
      display: none;
    }
    :hover ~ .pc-dropdown {
      display: block;
    }
    .nav {
      width: 100%;
      height: 100%;
      li {
        height: 100%;
        display: inline-block;
        text-align: center;
        vertical-align: top;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.18rem;
          height: 98%;
          background: linear-gradient(#fce5b9, #c19e68);
          background-clip: text;
          -webkit-text-fill-color: tan;
          font-weight: 600;
          @include withRegion('th') {
            font-family: 'Kanit', Arial, Helvetica, sans-serif;
          }
          &.active {
            color: red;
            border-bottom: 3px solid #0bc6e3;
          }
        }
      }
    }
    .pc-dropdown {
      width: 100%;
      height: auto;
      background: rgba($color: #061c25, $alpha: 0.9);
      position: absolute;
      top: 0.7rem;
      left: 0;
      z-index: 999;
      .container {
        .left,
        .right {
          float: left;
        }
        .left {
          width: 14%;
          &:before {
            content: '\200B';
          }
        }
        .right {
          width: 86%;
          li {
            display: inline-block;
            vertical-align: top;
            :hover {
              color: #0bc6e3;
            }
            a {
              font-size: 0.15rem;
              padding: 0.11rem 0;
              color: white;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
