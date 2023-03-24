<template>
  <div
    ref="marqueeWrapper"
    class="marquee"
    :class="{ 'marquee--active': isMarquee }"
  >
    <div ref="marqueeContent" :style="{ animationDuration: `${duration}s` }">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isMarquee: false,
      contentWidth: null,
    };
  },
  computed: {
    content({ isMarquee, text }) {
      if (isMarquee && window.screen.width > 750) {
        return `${text}  ${text}`;
      }
      return text;
    },
    duration({ contentWidth }) {
      const ratio = 0.04 * window.screen.width;
      return contentWidth ? Math.floor(contentWidth / ratio) : 0;
    },
  },
  mounted() {
    this.handleCheckIsMarquee();
  },
  methods: {
    handleCheckIsMarquee() {
      const { marqueeWrapper, marqueeContent } = this.$refs;
      const { offsetWidth: wrapperWidth } = marqueeWrapper;
      const { offsetWidth: contentWidth } = marqueeContent;
      if (wrapperWidth < contentWidth) {
        this.isMarquee = true;
        this.contentWidth = contentWidth;
      }
    },
  },
};
</script>

<style lang="scss">
.marquee {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    white-space: nowrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &--active.marquee {
    > div {
      left: 0%;
      animation-name: move-left;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
}

@keyframes move-left {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
