<template>
  <!-- <client-only> -->
    <div id="topbar" />
  <!-- </client-only> -->
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {
      REGION: process.env.REGION,
    };
  },
  // mounted() {
  //   if (window && this.REGION === 'tw') window.sitebar.create();
  // },
};
</script>
