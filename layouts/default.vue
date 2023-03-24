<template>
  <div id="app">
    <div v-cloak class="main">
      <Topbar />
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
};
</script>

<style lang="scss">
#app {
  position: relative;
  z-index: 1; /* will cause position fixed object can scroll (mobile) */
  width: 100%;
  height: 100%;
  font-size: 0.36rem;
  font-family: Roboto, Arial, Helvetica, 'Droid Sans', sans-serif;
  // font-family: 'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  background: white;
  line-height: 1;

  /* setup default font */
  @include withRegion('tw') {
    font-family: 'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif !important;
  }

  [v-cloak] {
    display: none;
  }

  .main {
    @include rwd($sm) {
      padding-top: 1rem;
      @include noTouchOrSelect();
    }
  }
  .container {
    width: 12.2rem;
    height: 100%;
    margin: auto;
    &.container1334 {
      width: 13.34rem;
      @include rwd($md) {
        width: 10rem;
      }
      @include rwd($sm) {
        width: 7.5rem;
        height: auto;
      }
    }
    @include rwd($md) {
      width: 10rem;
    }
    @include rwd($sm) {
      width: 7.5rem;
      height: auto;
    }
  }
}
</style>
