<template>
  <div id="footer">
    <div class="container">
      <div v-if="isTwRegion" class="remind-text">
        <p v-html="$t('LOL__REMIND_TEXT__ONLY_TW_REGION')" />
      </div>
      <div class="bottom">
        <!-- <div class="logos" /> -->
        <div class="cnt">
          <!-- all region copyright -->
          <div class="copyrights" v-html="$t('LOL__FOOTER__COPYRIGHT')" />
          <!-- social link with tw -->
          <div v-if="isTwRegion">
            <div class="links">
              <a
                v-for="(link, index) in mappingLinks"
                :key="index"
                :href="$t(link.href)"
                target="_blank"
                rel="noreferrer noopener"
                class="link"
              >
                <div class="link-txt">{{ $t(link.text) }}</div>
              </a>
            </div>
          </div>
          <!-- all region social link except tw-->
          <div v-else class="social-links">
            <a
              v-if="isThRegion || isSimpRegion"
              :href="$t('LOL__FOOTER__PLAY_FOR_FREE__LINK')"
              class="playForFree"
              >{{ $t('LOL__FOOTER__PLAY_FOR_FREE__TEXT') }}</a
            >
            <div class="links">
              <a
                v-for="(link, index) in mappingLinks"
                :key="index"
                :href="`${$t(link.href)}`"
                target="_blank"
                rel="noreferrer noopener"
                class="link"
              >
                <div class="link-txt">{{ $t(link.text) }}</div>
              </a>
            </div>
          </div>
          <!-- only for vn, play for free section -->
          <div v-if="isVnRegion" class="vn-playForFree">
            <a
              :href="$t('LOL__FOOTER__PLAY_FOR_FREE__LINK')"
              class="playForFree"
              >{{ $t('LOL__FOOTER__PLAY_FOR_FREE__TEXT') }}</a
            >
            <span class="age-limit" />
          </div>
        </div>
        <!-- only for tw, game desc section -->
        <div v-if="isTwRegion" class="lv">
          <div class="lv-icon--12"></div>
          <div class="lv-text">
            <p>
              本遊戲為DEMO，遊戲情節涉及暴力、菸酒畫面。<br />
              遊戲內另提供購買虛擬遊戲幣、物品等付費服務。<br />
              請注意遊戲時間，避免沈迷。
            </p>
            <div class="service-region">本遊戲服務區域為DEMO。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      REGION: process.env.REGION,
      links: [
        {
          href: 'LOL__FOOTER__LINKS__LINK_1_HREF',
          text: 'LOL__FOOTER__LINKS__LINK_1_NAME',
        },
        {
          href: 'LOL__FOOTER__LINKS__LINK_2_HREF',
          text: 'LOL__FOOTER__LINKS__LINK_2_NAME',
        },
        {
          href: 'LOL__FOOTER__LINKS__LINK_3_HREF',
          text: 'LOL__FOOTER__LINKS__LINK_3_NAME',
        },
        {
          href: 'LOL__FOOTER__LINKS__LINK_4_HREF',
          text: 'LOL__FOOTER__LINKS__LINK_4_NAME',
        },
        {
          href: 'LOL__FOOTER__LINKS__LINK_5_HREF',
          text: 'LOL__FOOTER__LINKS__LINK_5_NAME',
        },
      ],
    };
  },
  computed: {
    isTwRegion() {
      return this.REGION === 'tw';
    },
    isVnRegion() {
      return this.REGION === 'vn';
    },
    isThRegion() {
      return this.REGION === 'th';
    },
    isSimpRegion() {
      return this.REGION === 'sg' || this.REGION === 'ph';
    },
    mappingLinks() {
      if (this.isTwRegion || this.isThRegion || this.isVnRegion)
        return this.links.slice(0, 4);
      return []; // simp region links
    },
  },
};
</script>

<style lang="scss">
#footer {
  padding: 10px 0 50px;
  margin-top: -10px;
  @include rwd($md) {
    padding: 50px 0;
  }
  color: white;
  background: #101215;
  .remind-text {
    font-size: 15px;
    margin: 40px 55px 0;
    padding: 18px 20px;
    border: 1px solid #404447;
    text-align: left;
    box-sizing: border-box;
    @include rwd($md) {
      margin: 0 37px 28px 37px;
      padding: 18px 29px;
    }
  }
  .bottom {
    // width: 10rem;
    width: 1000px;
    font: 12px Microsoft JhengHei, arial;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 40px auto 0;
    @include rwd($md) {
      width: auto;
      display: block;
      margin: 0;
    }
    @include withRegion('tw') {
      align-items: unset;
      flex-direction: unset;
    }

    // .logos {
    //   width: 180px;
    //   height: 45px;
    //   display: flex;
    //   margin: 0 auto 20px;
    //   background: assetsUrl('footer/logos.png') no-repeat;
    //   background-position: center 0%;
    //   @include withRegion('tw') {
    //     width: 200px;
    //     height: 45px;
    //     background-size: 100% 100%;
    //   }
    //   @include withRegion('vn') {
    //     width: 100%;
    //     height: 65px;
    //     background: assetsUrl('footer/logos-vn.png') no-repeat;
    //     background-position: center 0%;
    //   }
    //   @include rwd($md) {
    //     width: 320px;
    //     margin: 0 auto 20px;
    //   }
    // }
    
    .cnt {
      flex: 1;
      // text-align: left;
      // @include withRegion('tw') {
        font-size: 12px;
        @include rwd($md) {
          width: auto;
          text-align: center;
        }
        .links {
          padding: 6px 0;
          margin: 8px 0 0;
          display: inline-block;
          background: #2d2d2d;
          .link {
            color: white;
            display: inline-flex;
            align-items: center;
            flex: 1 1 auto;
            padding: 0 10px;
            position: relative;
            box-sizing: border-box;
            font-family: footericon;
            cursor: pointer;
            @include rwd($md) {
              font-size: 13px;
            }
            &:before {
              content: '\e901';
              font-family: footericon;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              margin: 0 5px 0 0;
            }
            &:after {
              content: '';
              @include position(absolute, $top: 5px, $right: 0, $bottom: 5px);
              width: 1px;
              background: currentColor;
            }
            &:nth-child(2):before {
              content: '\e901';
            }
            &:nth-child(3):before {
              content: '\e902';
            }
            &:nth-child(4):before {
              content: '\e900';
            }
            &:last-child {
              &:after {
                display: none;
              }
            }
          }
        }
      // }
      // @include withRegion('vn') {
      //   .vn-playForFree {
      //     margin-top: 30px;
      //     text-align: center;
      //     .playForFree {
      //       color: #fff;
      //       width: 180px;
      //       height: 50px;
      //       line-height: 52px;
      //       font-size: 16px;
      //       font-weight: 600;
      //       margin-right: 30px;
      //       display: inline-block;
      //       background: assetsUrl('footer/playForFree.png') no-repeat;
      //       background-size: contain;
      //       vertical-align: middle;
      //       @include rwd($sm) {
      //         display: none;
      //       }
      //     }
      //     .age-limit {
      //       width: 116px;
      //       height: 51px;
      //       line-height: 52px;
      //       font-size: 16px;
      //       vertical-align: middle;
      //       display: inline-block;
      //       background: assetsUrl('footer/vn-12.png') no-repeat;
      //       background-size: contain;
      //     }
      //   }
      // }
      .copyrights {
        color: white;
        line-height: 1.4;
        text-align: center;
        padding: 0 5px;
        @include withRegion('tw') {
          text-align: left;
          @include rwd($md) {
            width: 100%;
            max-width: 500px;
            margin: auto;
            text-align: center;
          }
        }
      }
      .social-links {
        margin-top: 30px;
        text-align: center;
        .playForFree {
          width: 180px;
          height: 50px;
          line-height: 52px;
          font-size: 16px;
          font-weight: 600;
          display: inline-block;
          background: assetsUrl('footer/playForFree.png') no-repeat;
          background-size: contain;
          vertical-align: middle;
          @include rwd($sm) {
            display: none;
          }
        }
        .links {
          padding: 6px 0;
          font-size: 15px;
          font-weight: 600;
          display: inline-block;
          vertical-align: middle;
          @include withRegion('th') {
            vertical-align: sub;
            margin-top: 20px;
          }
          .link {
            color: white;
            display: inline-flex;
            align-items: center;
            flex: 1 1 auto;
            padding: 0 10px;
            position: relative;
            box-sizing: border-box;
            font-family: footericon;
            cursor: pointer;
            &:before {
              content: '\e900';
              font-size: 1.3em;
              font-family: footericon;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              margin: 0 0.05rem 0 0;
            }
            &:nth-child(2):before {
              content: '\e904';
            }
            &:nth-child(3):before {
              content: '\e901';
            }
            &:nth-child(4):before {
              content: '\e902';
            }
            &:nth-child(5):before {
              content: '\e902';
            }
            &:last-child {
              &:after {
                display: none;
              }
            }
            .link-txt {
              font-size: 10px;
            }
          }
        }
      }
    }
    .lv {
      display: flex;
      flex: 1;
      margin-left: 19px;
      text-align: left;
      font-size: 0;
      @include rwd($md) {
        margin: 15px auto 0;
        display: inline-block;
        text-align: center;
      }
      .lv-icon--12 {
        width: 45px;
        height: 45px;
        margin-right: 10px;
        display: inline-block;
        background: assetsUrl('icon-15.png') no-repeat;
        background-size: cover;
        @include rwd($md) {
          margin-right: 7px;
        }
      }
      .lv-text {
        max-width: 90%;
        font-size: 10px;
        display: inline-block;
        vertical-align: top;
        @include rwd($md) {
          text-align: left;
          max-width: 280px;
        }
        p {
          line-height: 1.4;
        }
        .service-region {
          color: red;
        }
      }
    }
  }
}
</style>
