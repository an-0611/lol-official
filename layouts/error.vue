<template>
  <div id="NotFoundPage">
    <div id="NotFoundPageContent" class="container">
      <div class="notFound">
        <div class="title">
          {{ $t('LOL__NOT_FOUND__TITLE') }}
        </div>
        <div class="content">
          <nuxt-link :to="'/'">
            {{ $t('LOL__NOT_FOUND__CONTENT') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
};
</script>

<style lang="scss" scoped>
#NotFoundPage {
  #NotFoundPageContent {
    margin-bottom: 0.8rem;
    @include rwd($md) {
      padding: 0 0.2rem;
    }
    .notFound {
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title {
        font-size: 0.4rem;
      }
      .content {
        font-size: 0.2rem;
      }
    }
  }
}
</style>
