<template>
  <div id="breadCrumb">
    <div class="container">
      <ul>
        <li v-for="(item, index) in breadData" :key="index">
          <nuxt-link :to="item.url">{{
            $t(item.name) ? $t(item.name) : name
          }}</nuxt-link>
          <span v-if="index < breadData.length - 1" class="interrupt">></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadData: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
#breadCrumb {
  @include position(absolute, $bottom: 0.15rem);
  width: 100%;
  z-index: 3;
  ul {
    margin: auto;
    text-align: left;
    padding: 0 0.1rem;
    @include rwd($md) {
      padding: 0 0.25rem;
    }

    li {
      margin-right: 0.1rem;
      display: inline-block;
      a {
        font-size: 0.15rem;
        color: #9c9e9d;
        font-weight: 600;
        &:last-child {
          color: white;
        }
      }
      .interrupt {
        font-size: 0.15rem;
        color: #9c9e9d;
      }
    }
  }
}
</style>
