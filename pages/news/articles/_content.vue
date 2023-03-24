<template>
  <div id="NewsContentPage" :class="{ isPatchNote }">
    <Loading v-if="firstTimeLoading" style="padding: 1rem 0" />
    <template v-else>
      <div
        id="blurBackground"
        :style="{
          backgroundImage: `url('${newContent.backgroundImg}'), url('${defaultBg}')`,
        }"
      >
        <BreadCrumb :bread-data="breadData" />
      </div>
      <div id="newsContentPageContent" class="container">
        <div
          :class="[
            'newBannerBox',
            { unsetBanner: !newContent.img || isBannerError },
          ]"
        >
          <svg viewBox="0 0 1200 420">
            <path d="M1179.66,1.13l19.41,19.41v398.59H1.07v-418H1179.66" />
          </svg>
          <svg viewBox="0 0 956 335">
            <path d="M955,1v313.59L935.55,334H100H1V20.41L20.45,1H86H955" />
          </svg>
          <svg viewBox="0 0 718 250">
            <path d="M717,1v228.59L697.55,249H100H1V20.41L20.45,1H86H717" />
          </svg>
          <img class="newBanner" :src="newContent.img" @error="hideBanner" />
        </div>
        <div :class="['contentBox', { black: isPatchNote }]">
          <h2 class="title">
            <svg viewBox="0 0 1200 70">
              <path
                d="M1199,1v48.59L1179.55,69L100,69H1V20.41L20.45,1L86,1H1199"
              />
            </svg>
            <svg viewBox="0 0 956 70">
              <path d="M954,2v45.3L933.1,68H2V22.9L23,2H954" />
            </svg>
            <svg viewBox="0 0 714 80">
              <path
                d="M713,1v58.58L693.55,79L100,79H1V20.41L20.45,1L86,1H713"
              />
            </svg>
            {{ newContent.title }}
          </h2>
          <div
            ref="content"
            :class="['content', { black: isPatchNote }]"
            v-html="newContent.content"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NewsContentPage',
  // async fetch({ store, params }) {
  //   await store.dispatch('News/getNewContent', {
  //     newId: params.content,
  //   });
  // },
  // validate({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.content);
  // },
  data() {
    return {
      breadData: [
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
          url: '/',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__NEWS',
          url: '/news',
        },
      ],
      defaultBg: `${process.env.CDN}/clear2.jpg`,
      isBannerError: false,
    };
  },
  computed: {
    ...mapState('News', ['newContent', 'footprint', 'firstTimeLoading']),
    isPatchNote() {
      return this.newContent.type !== 'normal';
    },
  },
  mounted() {
    // if (this.newContent?.externalLink) {
    //   window.location.replace(this.newContent.externalLink);
    //   return;
    // }
    this.getNewContent({ newId: this.$route.params.content });
    //
    if (this.footprint) this.breadData.push(...this.footprint);
    const tables = document.querySelectorAll('table');
    if (tables) {
      tables.forEach((table) => {
        table.parentNode.style.overflow = 'auto';
      });
    }
    // if (process.env.REGION === 'vn') {
    //   this.replaceVNOldNewsLink();
    // }
  },
  methods: {
    ...mapActions('News', ['getNewContent']),
    hideBanner() {
      this.isBannerError = true;
    },
    replaceVNOldNewsLink() {
      // vn region to replace old news category slash to double slash
      const contentDom = this.$refs.content;
      const links = contentDom.querySelectorAll('a');
      const replaceTarget = [
        'tingame',
        'khuyen-mai-game',
        'giai-dau-game',
        'news-m/community-m',
        'cam-nang',
      ];
      const re = new RegExp(replaceTarget.join('|'), 'i');
      links.forEach((link) => {
        const linkHref = link.getAttribute('href');
        if (linkHref && re.test(linkHref)) {
          const newHref = linkHref.replace(/^(\w+)/, '/$1');
          link.setAttribute('href', newHref);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#NewsContentPage {
  &.isPatchNote {
    background: black;
  }
  #blurBackground {
    width: 100%;
    height: 2.5rem;
    position: relative;
    background-size: 100% 100%;
    box-sizing: border-box;
    z-index: 1;
    &:after {
      content: '';
      width: 100%;
      height: 99%;
      @include position(absolute, 0, 0, 0, 0);
      margin: auto;
      background: inherit;
      filter: blur(5px);
      z-index: 2;
    }
    @include rwd($sm) {
      height: 1.6rem;
    }
    .container {
      padding: 0 0.3rem;
    }
  }

  #breadCrumb ::v-deep {
    @include position(relative, $top: 0);
    ul {
      padding-top: 0.1rem;
      @include rwd($md) {
        padding: 0.05rem 0 0 0.23rem;
        li {
          a {
            font-size: 0.2rem;
          }
        }
      }
    }
    @include rwd($sm) {
      opacity: 0;
      pointer-events: none;
    }
  }

  #newsContentPageContent {
    @include fadeInUp(1s);
    color: white;
    position: relative;
    top: -1.7rem;
    z-index: 1;
    @include rwd($md) {
      top: -1.75rem;
      padding: 0 0.13rem;
    }
    @include rwd($sm) {
      top: -1.2rem;
      padding: 0 0.1rem;
    }
    ::v-deep {
      &::-webkit-scrollbar {
        width: 0px;
        height: 6px;
      }
      &::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgb(61, 155, 163);
        border-radius: 21px;
      }
      img {
        width: auto;
        max-width: 100%;
      }
    }
    .newBannerBox {
      position: relative;
      &.unsetBanner {
        opacity: 0;
        height: 1.5rem;
        @include rwd($sm) {
          height: 1rem;
        }
      }

      svg {
        &:nth-child(1) {
          @include position(absolute, $top: -0.1rem, $left: 0.1rem);
          @include svgBorder(1200, 420, #898989);
          @include rwd($md) {
            display: none;
          }
        }
        &:nth-child(2) {
          display: none;
          @include position(absolute, $top: -0.1rem, $left: 0.09rem);
          @include svgBorder(956, 335, #898989);
          @include rwd($md) {
            display: block;
          }
          @include rwd($sm) {
            display: none;
          }
        }
        &:nth-child(3) {
          display: none;
          @include position(absolute, $top: -0.05rem, $left: 0.07rem);
          @include svgBorder(718, 250, #898989);
          @include rwd($sm) {
            display: block;
          }
        }
      }
      .newBanner {
        width: 12.2rem;
        height: 4rem;
        @include rwd($md) {
          width: 9.7rem;
          height: 3.2rem;
        }
        @include rwd($sm) {
          width: 7.3rem;
          height: 2.4rem;
        }
      }
    }
    .contentBox {
      // default font-size
      // font-size: 0.2rem;
      position: relative;
      padding: 0 0.1rem;
      @include rwd($sm) {
        padding: 0 0.05rem;
      }
      @include withRegion('vn') {
        ::v-deep a {
          position: unset !important;
        }
      }
      &.black {
        div,
        p,
        span,
        font,
        h2 {
          color: white;
        }
        .title {
          svg {
            &:nth-child(1) {
              @include svgBorder(1200, 70, #898989);
            }
            &:nth-child(2) {
              @include svgBorder(956, 70, #898989);
            }
            &:nth-child(3) {
              @include svgBorder(714, 80, #898989);
            }
          }
        }
      }
      font {
        display: block;
      }
      div,
      p,
      span,
      font,
      h2 {
        color: black;
        text-align: left;
      }
      .title {
        width: 100%;
        height: 0.7rem;
        margin: 0.4rem 0 0.2rem;
        padding: 0 0.5rem;
        font-size: 0.3rem;
        line-height: 0.7rem;
        text-align: center;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @include withRegion('vn') {
          font-size: 0.24rem;
          font-style: italic;
          font-weight: bold;
        }
        @include rwd($sm) {
          height: 0.8rem;
          font-size: 0.36rem;
          line-height: 0.84rem;
          @include withRegion('vn') {
            font-size: 0.24rem;
          }
        }
        svg {
          &:nth-child(1) {
            @include position(absolute, $top: 0, $left: 0);
            @include svgBorder(1200, 70, #898989);
            @include rwd($md) {
              display: none;
            }
          }
          &:nth-child(2) {
            display: none;
            @include position(absolute, $top: 0, $left: 0);
            @include svgBorder(954, 70, #898989);
            @include rwd($md) {
              display: block;
            }
            @include rwd($sm) {
              display: none;
            }
          }
          &:nth-child(3) {
            display: none;
            @include position(absolute, $top: 0, $left: 0);
            @include svgBorder(714, 80, #898989);
            @include rwd($sm) {
              display: block;
            }
          }
        }
      }
      .content ::v-deep {
        font-size: 0.16rem;
        line-height: 0.24rem;
        color: #1e282d;
        @include withRegion('vn') {
          padding: 0 0.6rem;
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          ol,
          p,
          ul {
            margin-bottom: 0.1rem;
          }
        }
        @include rwd($md) {
          // for normal page
          padding: 0.1rem 0.48rem;
        }
        @include rwd($sm) {
          // for normal page
          padding: 0 0.3rem;
        }
        &.black {
          padding: 0 0 1px;
          @include rwd($md) {
            padding: 0.3rem 0;
          }
          @include rwd($sm) {
            padding: 0.2rem 0.07rem;
          }
        }
        ol,
        ul {
          list-style: revert;
        }
        .cyan {
          color: #51d1e8;
        }
        .deepCyan {
          color: #0596aa;
        }
        .khaki {
          color: #c89b3c;
        }
        .red {
          color: #ff2345;
        }
        .black {
          color: #5c5d73;
        }
        .notice {
          color: #51d1e8;
          font-size: 0.16rem;
          margin: 0.3rem 0;
        }
        .title {
          color: #be976c;
          font-size: 0.24rem;
          margin: 0.07rem 0;
        }
        .subTitle {
          color: #55908c;
          font-size: 0.16rem;
          margin: 0.07rem 0;
        }
        .desc {
          color: #1d262d;
          font-size: 0.16rem;
          margin: 0.07rem 0;
        }
        .notice,
        .title,
        .subTitle,
        .desc {
          @include rwd($sm) {
            font-size: 0.28rem;
          }
        }
      }
    }
  }
}
</style>
