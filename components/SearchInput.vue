<template>
  <div class="searchInputBox">
    <svg viewBox="0 0 437 50">
      <path
        d="M436,1v28.59L416.55,49L98,49H1V20.41L20.45,1L84,1H436 M437,0H84v0H20.03L0,20v30h98v0h318.97L437,30V0L437,0z"
      />
    </svg>
    <svg viewBox="0 0 680 80">
      <path
        d="M679,1v58.59L659.55,79L99,79H1V20.41L20.45,1L85,1H679 M680,0H85v0H20.03L0,20v60h99v0h560.97L680,60V0L680,0z"
      />
    </svg>
    <svg viewBox="0 0 40 40">
      <path
        d="M36.91,33.46l-7.45-7.45c1.81-2.52,2.81-5.53,2.81-8.69c0-3.99-1.55-7.74-4.38-10.56c-2.82-2.82-6.57-4.38-10.57-4.38c-3.99,0-7.74,1.55-10.57,4.38c-2.82,2.82-4.38,6.57-4.38,10.56s1.55,7.74,4.38,10.57c2.82,2.82,6.57,4.38,10.57,4.38c3.17,0,6.17-0.99,8.69-2.81l7.45,7.45c0.48,0.48,1.1,0.71,1.72,0.71c0.62,0,1.25-0.24,1.72-0.71C37.86,35.96,37.86,34.41,36.91,33.46z M10.2,24.44c-1.9-1.9-2.95-4.43-2.95-7.12S8.3,12.1,10.2,10.2c1.9-1.9,4.43-2.95,7.12-2.95s5.22,1.05,7.12,2.95c1.9,1.9,2.95,4.43,2.95,7.12s-1.05,5.22-2.95,7.12c-1.9,1.9-4.43,2.95-7.12,2.95S12.1,26.34,10.2,24.44z"
      />
    </svg>
    <input
      type="text"
      :placeholder="placeholder"
      :value="searchText"
      @input="$emit('input', $event.target.value)"
      @change="searchNews"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    searchText: {
      type: String,
      default: '',
    },
    searchNews: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.searchInputBox {
  position: relative;
  font-size: 0.36rem;
  height: 0.5rem;
  @include rwd($sm) {
    height: 0.8rem;
  }
  svg {
    fill: #aaaaaa;
    &:nth-child(1) {
      @include position(absolute, $top: 0, $left: 0);
      @include rwd($sm) {
        display: none;
      }
    }
    &:nth-child(2) {
      display: none;
      @include position(absolute, $top: 0, $left: 0);
      @include rwd($sm) {
        display: block;
      }
    }
    &:nth-child(3) {
      width: 0.35rem;
      height: 0.35rem;
      @include position(absolute, $top: 0.08rem, $left: 0.2rem, $bottom: 0);
      fill: #bb996b;
      @include rwd($sm) {
        width: 0.55rem;
        height: 0.55rem;
        top: 0.12rem;
        left: 0.3rem;
      }
    }
  }
  input {
    width: 3rem;
    height: 0.3rem;
    font-size: 0.2rem;
    line-height: 0.32rem;
    border: none;
    text-align: center;
    @include position(absolute, 0, 0, 0, 0);
    margin: auto;
    @include rwd($sm) {
      width: 4.5rem;
      height: 0.6rem;
      font-size: 0.3rem;
    }
  }
}
</style>
