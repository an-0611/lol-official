<template>
  <div class="searchBar">
    <div class="svgBox">
      <svg viewBox="0 0 1320 50">
        <path
          d="M1319,1v28.59L1299.55,49L99,49H1V20.41L20.45,1L85,1H1319 M1320,0H85v0H20.03L0,20v30h99v0h1200.97L1320,30V0L1320,0z"
        />
      </svg>
      <svg viewBox="0 0 960 50">
        <path
          d="M959,1v28.59L939.55,49L99,49H1V20.41L20.45,1L85,1H959 M960,0H85v0H20.03L0,20v30h99v0h840.97L960,30V0L960,0z"
        />
      </svg>
      <svg viewBox="0 0 680 80">
        <path
          d="M679,1v58.59L659.55,79L99,79H1V20.41L20.45,1L85,1H679 M680,0H85v0H20.03L0,20v60h99v0h560.97L680,60V0L680,0z"
        />
      </svg>
    </div>
    <svg class="magnifier" viewBox="0 0 40 40">
      <path
        d="M36.91,33.46l-7.45-7.45c1.81-2.52,2.81-5.53,2.81-8.69c0-3.99-1.55-7.74-4.38-10.56c-2.82-2.82-6.57-4.38-10.57-4.38c-3.99,0-7.74,1.55-10.57,4.38c-2.82,2.82-4.38,6.57-4.38,10.56s1.55,7.74,4.38,10.57c2.82,2.82,6.57,4.38,10.57,4.38c3.17,0,6.17-0.99,8.69-2.81l7.45,7.45c0.48,0.48,1.1,0.71,1.72,0.71c0.62,0,1.25-0.24,1.72-0.71C37.86,35.96,37.86,34.41,36.91,33.46z M10.2,24.44c-1.9-1.9-2.95-4.43-2.95-7.12S8.3,12.1,10.2,10.2c1.9-1.9,4.43-2.95,7.12-2.95s5.22,1.05,7.12,2.95c1.9,1.9,2.95,4.43,2.95,7.12s-1.05,5.22-2.95,7.12c-1.9,1.9-4.43,2.95-7.12,2.95S12.1,26.34,10.2,24.44z"
      />
    </svg>
    <input
      type="text"
      :placeholder="placeholder"
      :value="searchText"
      @input="$emit('input', $event.target.value)"
      @change="onChange"
    />
    <!-- for pc -->
    <span
      v-for="item in category"
      :key="item.tag"
      :class="['category', { active: selectedTab === item.tag }]"
      @click="handleCategory(item.tag)"
      >{{ $t(item.name) }}</span
    >
    <!-- for mobile -->
    <div class="m-category" @click="handleMobileDropdown">
      <p :class="{ isRotate: showDropdown }">{{ $t(selectedName) }}</p>
      <div v-if="showDropdown" class="m-dropdown">
        <div
          v-for="item in category"
          :key="item.tag"
          class="item"
          :value="item.tag"
          @click="handleCategory(item.tag)"
        >
          {{ $t(item.name) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    searchText: {
      type: String,
      default: '',
    },
    selectedTab: {
      type: String,
      default: '',
    },
    category: {
      type: Array,
      default: () => {},
    },
    handleCategory: {
      type: Function,
      default: () => {},
    },
    handleMobileDropdown: {
      type: Function,
      default: () => {},
    },
    selectedName: {
      type: String,
      default: '',
    },
    showDropdown: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotateIcon {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.searchBar {
  height: 0.5rem;
  text-align: left;
  background: white;
  @include rwd($md) {
    width: 9.6rem;
    margin: auto;
  }
  @include rwd($sm) {
    width: 6.8rem;
    height: 0.8rem;
    margin-bottom: 0.3rem;
    position: sticky;
    top: 1rem;
    z-index: 2;
  }
  .svgBox {
    position: relative;
    svg {
      @include position(absolute, $top: 0, $left: 0);
      fill: #aaaaaa;
      &:nth-child(1) {
        @include rwd($md) {
          display: none;
        }
      }
      &:nth-child(2) {
        display: none;
        @include rwd($md) {
          display: block;
        }
        @include rwd($sm) {
          display: none;
        }
      }
      &:nth-child(3) {
        display: none;
        @include rwd($sm) {
          display: block;
        }
      }
    }
  }
  .magnifier {
    width: 0.3rem;
    height: 0.3rem;
    fill: #bb996b;
    @include position(relative, $top: 0.06rem, $left: 0.3rem);
    @include rwd($sm) {
      width: 0.55rem;
      height: 0.55rem;
      top: 0.12rem;
      left: 0.3rem;
    }
  }
  input {
    width: 1.5rem;
    height: 0.35rem;
    font-size: 0.17rem;
    font-weight: 600;
    margin-left: 0.3rem;
    margin-top: 0.08rem;
    border: none;
    border-radius: unset;
    border-right: 1px solid #626262;
    text-align: left;
    vertical-align: top;
    position: relative;
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
    width: auto;
    height: 0.5rem;
    margin: 0 0.2rem;
    font-size: 0.17rem;
    font-weight: 600;
    line-height: 0.5rem;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    position: relative;
    color: #626262;
    @include rwd($sm) {
      display: none;
    }
    @include rrwd($sm) {
      &:hover {
        color: #bf975c;
        border-bottom: 3px solid #bf975c;
      }
    }
    &:first-of-type {
      margin-left: 2rem;
      @include rwd($md) {
        margin-left: 0.8rem;
      }
      @include rwd($sm) {
        margin: 0;
      }
    }
    &.active {
      color: #bf975c;
      border-bottom: 3px solid #bf975c;
    }
  }
  .m-category {
    display: none;
    @include rwd($sm) {
      width: 3.15rem;
      height: 100%;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      position: relative;
    }
    p {
      color: #bb996b;
      font-size: 0.28rem;
      font-weight: 600;
      padding-top: 0.2rem;
      text-indent: -0.3rem;
      text-align: center;
      position: relative;
      display: block;
      &:after {
        content: '';
        @include position(absolute, $top: 0.28rem, $right: 0.2rem);
        display: block;
        width: 0.24rem;
        height: 0.17rem;
        background: assetsUrl('icon-caret.png');
        background-size: cover;
        transition: all 0.5s;
      }
      &.isRotate {
        &:after {
          transform: rotate(180deg);
        }
      }
    }
    .m-dropdown {
      width: 3.26rem;
      height: auto;
      border: 1px solid #aaaaaa;
      border-top: none;
      background: white;
      @include position(absolute, $top: 0.75rem, $left: -0.1rem);
      z-index: 2;
      padding-top: 0.3rem;
      .item {
        color: #626262;
        font-size: 0.28rem;
        padding: 0 0.2rem 0.35rem 0;
      }
    }
  }
}
</style>
