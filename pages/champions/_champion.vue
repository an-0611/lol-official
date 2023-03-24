<template>
  <div id="championInnerPage">
    <div
      v-if="championInfo.id"
      id="blurBackground"
      :style="`background: linear-gradient(black 1%, transparent 10%) center center, linear-gradient(to top, black 2%, transparent 15%) center center, url(${transformCDN(
        championInfo.id,
      )}_0.jpg), url(${noneImg}) center center / cover no-repeat;`"
    ></div>
    <BreadCrumb :bread-data="breadData" />
    <div class="container container1334">
      <div v-if="championInfo.id" class="mainSection">
        <div
          class="bg"
          :style="`background: url(${transformCDN(
            championInfo.id,
          )}_0.jpg), url(${noneImg}) no-repeat;`"
        />
        <div class="content">
          <svg class="svgContentBorder" viewBox="0 0 1080 286">
            <polygon
              points="910,0 910,1 1079,1 1079,285 1,285 1,1 170,1 170,0 0,0 0,286 1080,286 1080,0"
            />
          </svg>
          <svg class="svgContentBorder" viewBox="0 0 900 320">
            <polygon
              points="730,0 730,1 899,1 899,319 1,319 1,1 170,1 170,0 0,0 0,320 900,320 900,0"
            />
          </svg>
          <svg class="svgContentBorder" viewBox="0 0 708 640">
            <polygon
              points="635,0 635,1 707,1 707,639 1,639 1,1 75,1 75,0 0,0 0,640 708,640 708,0"
            />
          </svg>
          <div class="title">{{ championInfo.title }}</div>
          <div class="name">{{ championInfo.name }}</div>
          <div class="bottom">
            <div v-if="championInfo && championInfo.tags" class="tags">
              <ChampionIcons :tag="championInfo.tags[0]" />
              <p>{{ $t('LOL__CHAMPIONS_INNERPAGE_CHARACTER') }}</p>
              <p>{{ positionTransify(championInfo.tags[0]) }}</p>
            </div>
            <div class="difficulty">
              <span class="scaleBox">
                <span
                  :class="[
                    'scale',
                    { active: championInfo.info.difficulty >= 0 },
                  ]"
                ></span>
                <span
                  :class="[
                    'scale',
                    { active: championInfo.info.difficulty > 3 },
                  ]"
                ></span>
                <span
                  :class="[
                    'scale',
                    { active: championInfo.info.difficulty > 7 },
                  ]"
                ></span>
              </span>
              <p>{{ $t('LOL__CHAMPIONS_INNERPAGE__DIFFICULTY') }}</p>
              <p>{{ $t('LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY') }}</p>
            </div>
            <div class="lore">
              <p>{{ championInfo.lore }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="interruptSymbol">
        <div class="straightLine" />
        <div class="square square1" />
        <div class="square square2" />
      </div>
      <div v-if="championInfo" class="skillSection">
        <template v-if="championInfo.tags">
          <ChampionIcons :tag="championInfo.tags[0]" />
        </template>
        <div class="left">
          <h2 class="skillTitle">
            {{ $t('LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE') }}
          </h2>
          <div class="skillItems">
            <template
              v-if="championInfo.passive && championInfo.passive.image.full"
            >
              <div
                :class="['item', 'passive', { active: selectedSkill === 0 }]"
                @click="handleSelectedSkill(0)"
              >
                <div class="imgBox">
                  <svg viewBox="0 0 71 71">
                    <path
                      d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                    />
                  </svg>
                  <img
                    :src="`${ddragonEnv.cdn}/${ddragonEnv.dd}/img/passive/${championInfo.passive.image.full}`"
                  />
                </div>
                <span class="point">
                  <span class="verticalLine" />
                  <span class="innerPoint" />
                </span>
              </div>
            </template>
            <template v-if="championInfo.spells">
              <div
                v-for="(skill, index) in championInfo.spells"
                :key="index"
                :class="['item', { active: selectedSkill === index + 1 }]"
                @click="handleSelectedSkill(index + 1)"
              >
                <div class="imgBox">
                  <svg viewBox="0 0 71 71">
                    <path
                      d="M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z"
                    />
                  </svg>
                  <img
                    :src="`${ddragonEnv.cdn}/${ddragonEnv.dd}/img/spell/${skill.image.full}`"
                  />
                </div>
                <span class="point">
                  <span class="verticalLine" />
                  <span class="innerPoint" />
                </span>
              </div>
            </template>
          </div>
          <div class="skillUnderLine" />
          <div class="skillDesc">
            <div
              v-if="
                selectedSkill === 0 &&
                championInfo.passive &&
                championInfo.passive.name
              "
            >
              <div class="tag">{{ $t(buttonsText[selectedSkill]) }}</div>
              <div class="name">{{ championInfo.passive.name }}</div>
              <div class="desc" v-html="championInfo.passive.description"></div>
            </div>
            <div v-if="championInfo.spells && selectedSkill">
              <div class="tag">{{ $t(buttonsText[selectedSkill]) }}</div>
              <div class="name">
                {{ championInfo.spells[selectedSkill - 1].name }}
              </div>
              <div
                class="desc"
                v-html="championInfo.spells[selectedSkill - 1].description"
              ></div>
            </div>
          </div>
        </div>
        <div class="right">
          <svg viewBox="0 0 600 370">
            <path
              d="M579.57,1l19.42,19.39V369h-598V1H579.57 M579.99,0H0v370h600V19.98L579.99,0L579.99,0z"
            />
          </svg>
          <svg viewBox="0 0 880 530">
            <path
              d="M859.57,1l19.42,19.39V529h-878V1H859.57 M859.99,0H0v530h880V19.98L859.99,0L859.99,0z"
            />
          </svg>
          <svg viewBox="0 0 690 434">
            <path
              d="M669.57,1l19.42,19.39V433h-688V1H669.57 M669.99,0H0v434h690V19.98L669.99,0L669.99,0z"
            />
          </svg>
          <video
            v-if="championInfo.key"
            id="skillVideo"
            ref="skillVideo"
            class="fadeIn"
            playsinline
            autoplay
            muted
          >
            <source :src="selectedVideoUrl" type="video/mp4" />
          </video>
          <!-- <video id="skillVideo" autoplay muted controls="true" :src="selectedVideoUrl" type="video/mp4" v-if="championInfo.key"></video> -->
        </div>
      </div>
      <div class="modelingSection">
        <!-- swiper 1  -->
        <swiper
          ref="swiperTop"
          class="swiper gallery-top"
          :options="swiperOptionTop"
        >
          <swiper-slide v-for="skin in championInfo.skins" :key="skin.num">
            <img
              v-if="championInfo.id"
              :src="`${transformCDN(championInfo.id)}_${skin.num}.jpg`"
              @error="displayDefaultImage"
            />
          </swiper-slide>
        </swiper>
        <!--  -->
        <h3>{{ $t('LOL__CHAMPIONS_INNERPAGE__SKIN') }}</h3>
        <div class="swiperBox">
          <!-- swiper2 -->
          <swiper
            ref="swiperThumbs"
            class="swiper gallery-thumbs"
            :options="swiperOptionThumbs"
          >
            <swiper-slide v-for="skin in championInfo.skins" :key="skin.num">
              <svg viewBox="0 0 295 90">
                <path
                  d="M274.57,1l19.42,19.39V89h-293V1H274.57 M274.99,0H0v90h295V19.98L274.99,0L274.99,0z"
                />
              </svg>
              <svg viewBox="0 0 115 115">
                <path
                  d="M94.57,1l19.42,19.39V114h-113V1H94.57 M94.99,0H0v115h115V19.98L94.99,0L94.99,0z"
                />
              </svg>
              <img
                v-if="championInfo.id"
                :src="`${transformCDN(championInfo.id)}_${skin.num}.jpg`"
                @error="displayDefaultImage"
              />
              <span>{{
                skin.name === 'default'
                  ? $t('LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN')
                  : skin.name
              }}</span>
            </swiper-slide>
          </swiper>
        </div>
        <div class="shadow" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ChampionInnerPage',
  async fetch({ store, params }) {
    await store.dispatch('DDragon/getDDragonEnvData');
    await store.dispatch('Champion/getChampionsDetail', params.champion);
  },
  data() {
    return {
      cdnPath:
        'https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/',
      swiperOptionTop: {
        slidesPerView: 5,
        fadeEffect: { crossFade: true },
        effect: 'fade',
      },
      swiperOptionThumbs: {
        direction: 'horizontal',
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        spaceBetween: 0,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        breakpoints: {
          751: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
          1001: {
            direction: 'vertical',
            slidesPerView: 10,
          },
        },
      },
      rolePositionMap: {
        Marksman: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN',
        Fighter: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER',
        Tank: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK',
        Assassin: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN',
        Support: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT',
        Mage: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE',
      },
    };
  },
  computed: {
    ...mapState('DDragon', ['ddragonEnv']),
    ...mapState('Champion', [
      'buttonsText',
      'championInfo',
      'breadData',
      'selectedSkill',
      'selectedVideoUrl',
    ]),
    skillVideo() {
      return this.$refs.skillVideo;
    },
    swiperTop() {
      return this.$refs.swiperTop.$swiper;
    },
    swiperThumbs() {
      return this.$refs.swiperThumbs.$swiper;
    },
    messageJudge() {
      return (type) => {
        if (type === 1) return this.$t('LOL__SERVER_PAGE__MALFUNCTION_MESSAGE');
        if (type === 2) return this.$t('LOL__SERVER_PAGE__NORMAL_MESSAGE');
        return this.$t('LOL__SERVER_PAGE__WARNING_MESSAGE');
      };
    },
    positionTransify() {
      return (ddragonPosition) => {
        return this.$t(this.rolePositionMap[ddragonPosition]);
      };
    },
    transformCDN() {
      return (id) => {
        return `${this.cdnPath + id.toLowerCase()}`;
      };
    },
    noneImg() {
      return `${this.cdnPath}none.jpg`;
    },
  },
  watch: {
    selectedSkill() {
      this.skillVideo.load();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperTop.controller.control = this.swiperThumbs;
      this.swiperThumbs.controller.control = this.swiperTop;
    });
  },
  methods: {
    ...mapActions('Champion', ['handleSelectedSkill']),
    displayDefaultImage(e) {
      e.target.src = this.noneImg;
    },
  },
};
</script>

<style lang="scss" scoped>
$gray: #313943;
$gray1: #323a44;
$orange: #d0a85c;
$orange1: #d7a25e;

@keyframes rightFadeIn {
  from {
    opacity: 0;
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
  }
  to {
    opacity: 1;
    clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
  }
}

@keyframes leftFadeIn {
  from {
    opacity: 0;
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
  }
  to {
    opacity: 1;
    clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
  }
}

#championInnerPage {
  background: black;
  position: relative;
  #blurBackground {
    @include position(absolute, $top: 0);
    width: 100%;
    height: 7.5rem;
    z-index: 1;
    @include rwd($md) {
      height: 3.9rem;
    }
    @include rwd($sm) {
      height: 2.9rem;
    }
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
  }

  #breadCrumb ::v-deep {
    @include position(relative, $bottom: 0);
    ul {
      padding: 0.14rem 0 0 0.05rem;
      @include rwd($md) {
        padding: 0.12rem 0 0 0;
        margin-left: 0.2rem;
        li {
          a {
            font-size: 0.18rem;
          }
        }
      }
    }
    @include rwd($sm) {
      opacity: 0;
      pointer-events: none;
    }
  }
  .container {
    .mainSection {
      color: white;
      height: 7.49rem;
      margin-top: 0.32rem;
      position: relative;
      z-index: 2;
      font-size: 0;
      @include rwd($md) {
        margin-top: 0.2rem;
        height: 8rem;
      }
      @include rwd($sm) {
        margin-top: 0.1rem;
        height: 11.35rem;
      }
      .bg {
        position: relative;
        margin: 0 0.6rem;
        height: 5.8rem;
        margin: 0 0.6rem;
        mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
        background-size: cover !important;
        background-position: center !important;
        overflow: hidden;
        @include rwd($md) {
          margin: 0;
        }
      }
      .content {
        width: 10.8rem;
        height: 2.85rem;
        margin: auto;
        @include position(relative, $top: -1.15rem);
        @include rwd($md) {
          width: 9rem;
          height: 3.2rem;
          top: -1rem;
        }
        @include rwd($sm) {
          width: 7.1rem;
          height: 6.4rem;
          top: -0.87rem;
        }
        .svgContentBorder {
          @include position(absolute, $top: 0, $left: 0);
          fill: #323943;
          @include withRegion('vn') {
            fill: #000;
          }
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
        .title {
          color: #918f94;
          @include position(relative, $top: -0.7rem);
          font-size: 0.18rem;
          opacity: 0;
          animation-name: rightFadeIn;
          animation-fill-mode: forwards;
          animation-duration: 2800ms;
          animation-delay: 600ms;
          animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
          clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
          @include rwd($md) {
            padding-left: 0.25rem;
          }
          @include rwd($sm) {
            font-size: 0.3rem;
            top: -0.86rem;
          }
          @include withRegion('vn') {
            color: white;
            font-style: italic;
            font-weight: bold;
          }
        }
        .name {
          @include position(relative, $top: -0.7rem);
          font-size: 1rem;
          z-index: 1;
          opacity: 0;
          animation-name: leftFadeIn;
          animation-fill-mode: forwards;
          animation-duration: 2000ms;
          animation-delay: 500ms;
          animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
          clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
          @include rwd($md) {
            padding-left: 0.25rem;
          }
          @include rwd($sm) {
            top: -0.87rem;
          }
          @include withRegion('vn') {
            font-style: italic;
            font-weight: bold;
          }
        }
        .bottom {
          width: 10.8rem;
          height: 100%;
          font-size: 0;
          @include position(relative, $top: -1.35rem);
          @include rwd($md) {
            width: 9rem;
          }
          @include rwd($sm) {
            width: 7.1rem;
          }
          .tags {
            width: 2.65rem;
            height: 100%;
            padding: 1.22rem 0 0 0.9rem;
            display: inline-block;
            vertical-align: top;
            opacity: 0;
            @include fadeIn(1s);
            animation-fill-mode: forwards;
            animation-delay: 100ms;
            @include rwd($md) {
              width: 4.5rem;
              height: 1.95rem;
              padding: 0.86rem 0 0 1.1rem;
              margin: auto;
            }
            @include rwd($sm) {
              width: 3.55rem;
              height: 2.95rem;
              padding: 0.9rem 0 0 0.17rem;
            }
            ::v-deep svg {
              width: 0.33rem;
              height: 0.33rem;
              @include rwd($sm) {
                width: 0.8rem;
                height: 0.8rem;
              }
              path {
                fill: $orange1;
              }
            }
            p {
              font-size: 0.14rem;
              margin-top: 0.1rem;
              @include rwd($sm) {
                font-size: 0.3rem;
                margin-top: 0.19rem;
              }
              &:nth-child(3) {
                color: $orange1;
                margin-top: 0.03rem;
              }
            }
          }
          .difficulty {
            width: 2.7rem;
            height: 100%;
            font-size: 0.2rem;
            display: inline-block;
            vertical-align: top;
            padding: 1.28rem 1.05rem 0 0;
            opacity: 0;
            @include fadeIn(1s);
            animation-fill-mode: forwards;
            animation-delay: 300ms;
            @include rwd($md) {
              width: 4.5rem;
              height: 1.95rem;
              padding: 0.95rem 1.1rem 0 0;
              margin: auto;
            }
            @include rwd($sm) {
              width: 3.55rem;
              height: 2.95rem;
              padding: 1.23rem 0.15rem 0 0;
            }
            .scaleBox {
              .scale {
                display: inline-block;
                width: 0.15rem;
                height: 0.08rem;
                padding-right: 0.01rem;
                opacity: 1;
                background-color: #053041;
                background-clip: content-box;
                transform: skewX(-50deg);
                &.active {
                  background: #09cedf;
                }
                @include rwd($sm) {
                  width: 0.45rem;
                  height: 0.24rem;
                }
              }
            }
            p {
              font-size: 0.14rem;
              margin-top: 0.14rem;
              @include rwd($sm) {
                font-size: 0.3rem;
                margin-top: 0.36rem;
              }
              &:nth-child(3) {
                font-size: 0.16rem;
                color: $orange1;
                margin-top: 0.05rem;
                @include rwd($sm) {
                  font-size: 0.3rem;
                }
              }
            }
          }
          .lore {
            width: 5.4rem;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            opacity: 0;
            @include fadeIn(1s);
            animation-fill-mode: forwards;
            animation-delay: 500ms;
            @include rwd($md) {
              width: 8.2rem;
              height: 1.24rem;
              border-top: 1px solid #323943;
            }
            @include rwd($sm) {
              width: 6.5rem;
              height: 3.3rem;
            }
            p {
              font-size: 0.14rem;
              padding: 0.03rem 0.03rem 0 0.6rem;
              margin: 1.12rem 0.6rem 0 0;
              border-left: 1px solid $gray;
              text-align: left;
              height: 1.25rem;
              overflow: auto;
              // &::-webkit-scrollbar {
              //   width: 0;
              // }
              &::-webkit-scrollbar {
                width: 2px;
                background: $gray;
              }
              &::-webkit-scrollbar-button {
                width: 0px;
                height: 0px;
              }
              &::-webkit-scrollbar-thumb {
                background: #d6a15e;
              }
              @include rwd($md) {
                height: 1rem;
                padding: 0.28rem 0.07rem 0;
                margin: 0 auto;
                border: none;
              }
              @include rwd($sm) {
                font-size: 0.25rem;
                padding: 0;
                margin: 0.44rem auto 0;
                height: 2.3rem;
              }
            }
          }
        }
      }
    }
    .interruptSymbol {
      width: 0.2rem;
      height: 0.6rem;
      margin: 0.2rem auto 0;
      padding-top: 0.02rem;
      @include rwd($md) {
        display: none;
      }
      .straightLine {
        width: 0.02rem;
        height: 0.3rem;
        margin: auto;
        background: $gray;
      }
      .square {
        width: 0.08rem;
        height: 0.08rem;
        margin: auto;
        border: 1px solid $gray;
        transform: rotate(45deg);
        margin-top: 0.06rem;
        z-index: 1;
      }
      .square2 {
        margin-top: -0.03rem;
        z-index: 0;
      }
    }
    .skillSection {
      color: white;
      width: 100%;
      height: 7rem;
      margin: auto;
      font-size: 0;
      @include position(relative);
      @include rwd($md) {
        display: flex;
        align-items: center;
        // flex-direction: column;
        flex-direction: column-reverse;
        height: auto;
      }
      ::v-deep svg {
        width: 5.6rem;
        height: 5.6rem;
        @include position(absolute, 0, 0, 0, 0);
        margin: auto;
        opacity: 0.3;
        @include rwd($md) {
          top: 5.5rem;
        }
        path {
          fill: $gray;
        }
      }
      .left {
        width: 7.13rem;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        position: relative;
        @include rwd($md) {
          width: 9rem;
          height: auto;
        }
        @include rwd($sm) {
          width: 7.5rem;
        }
        .skillTitle {
          font-size: 0.63rem;
          margin: 1.51rem 0 0 1.18rem;
          text-align: left;
          @include rwd($md) {
            margin: 0.3rem 0 0 0;
            text-align: center;
          }
        }
        .skillItems {
          width: 5.5rem;
          height: 1.75rem;
          margin: auto;
          font-size: 0;
          @include rwd($md) {
            width: 9rem;
            height: 1.4rem;
          }
          @include rwd($sm) {
            width: 7.2rem;
            height: 2rem;
            margin-left: 0;
            margin: auto;
          }
          .item {
            width: 0.9rem;
            height: 100%;
            font-size: 0.2rem;
            margin: 0 0.1rem;
            display: inline-block;
            position: relative;
            cursor: pointer;
            @include rwd($md) {
              width: 1.8rem;
              margin: 0;
            }
            @include rwd($sm) {
              width: 1.44rem;
            }
            .imgBox svg {
              display: none;
            }
            .point .verticalLine {
              opacity: 0;
              height: 0;
              @include position(absolute, $top: 0);
              transition: 0.5s;
            }
            &.active {
              pointer-events: none;
              .imgBox {
                position: relative;
                img {
                  margin-top: 0.57rem;
                  @include rwd($md) {
                    margin-top: 0.48rem;
                  }
                }
                svg {
                  display: block;
                  @include svgBorder(71, 71, $orange);
                  @include position(
                    absolute,
                    $left: 0,
                    $right: 0,
                    $bottom: -0.55rem
                  );
                  margin: auto;
                  z-index: 1;
                  opacity: 1;
                  @include rwd($md) {
                    @include svgBorder(74, 74, $orange);
                    top: 0.49rem;
                    bottom: 0;
                  }
                  @include rwd($sm) {
                    @include svgBorder(110, 110, $orange);
                    top: 0.45rem;
                    bottom: 0;
                  }
                }
              }
              .point {
                width: 0.15rem;
                height: 0.15rem;
                color: $orange;
                background: inherit;
                border-width: 2px;
                border-style: solid;
                border-radius: 100%;
                bottom: 0.02rem;
                .verticalLine {
                  width: 0.01rem;
                  height: 0.25rem;
                  opacity: 1;
                  background: $orange;
                  @include position(
                    absolute,
                    $top: -0.25rem,
                    $left: 0,
                    $right: 0
                  );
                  margin: auto;
                }
                .innerPoint {
                  display: block;
                  width: 0.05rem;
                  height: 0.05rem;
                  background: $orange;
                  border-radius: 100%;
                  @include position(
                    relative,
                    $top: 0.03rem,
                    $left: 0,
                    $right: 0
                  );
                  margin: auto;
                }
              }
            }
            img {
              width: 0.6rem;
              height: 0.6rem;
              margin: 0.8rem auto 0;
              position: relative;
              vertical-align: top;
              transition: all 0.2s ease-in-out;
              @include rwd($md) {
                margin: 0.48rem auto 0;
              }
              @include rwd($sm) {
                width: 0.95rem;
                height: 0.95rem;
              }
            }
            &:not(.active):hover img {
              margin-top: 0.75rem;
              @include rwd($md) {
                margin-top: 0.65rem;
              }
            }
            .point {
              width: 0.1rem;
              height: 0.1rem;
              background: $gray;
              border-radius: 50%;
              @include position(
                absolute,
                $left: 0,
                $right: 0,
                $bottom: 0.04rem
              );
              margin: auto;
              transition: background-color 0.2s ease-in-out;
              z-index: 3;
              @include rwd($md) {
                display: none;
              }
            }
          }
        }
        .skillUnderLine {
          width: 100%;
          height: 1px;
          background: $gray;
          @include position(relative, $top: -0.1rem);
          z-index: 2;
          @include rwd($md) {
            display: none;
          }
        }
        .skillDesc {
          width: 4.65rem;
          height: 2rem;
          padding-top: 0.32rem;
          margin: auto;
          text-align: left;
          font-size: 0.14rem;
          @include rwd($md) {
            width: 9rem;
            height: 1.7rem;
            padding: 0.05rem 0 0 0.05rem;
          }
          @include rwd($sm) {
            width: 6.3rem;
            height: auto;
          }
          .tag {
            color: #08bedb;
            @include rwd($sm) {
              font-size: 0.3rem;
            }
          }
          .name {
            margin-top: 0.05rem;
            font-size: 0.2rem;
            font-weight: 600;
            @include rwd($md) {
              margin-top: 0.1rem;
              font-size: 0.24rem;
            }
            @include rwd($sm) {
              font-size: 0.38rem;
            }
          }
          .desc {
            margin-top: 0.06rem;
            margin-left: 0.02rem;
            @include rwd($md) {
              margin-top: 0.14rem;
              margin-bottom: 0.2rem;
            }
            @include rwd($sm) {
              font-size: 0.3rem;
            }
          }
        }
      }
      .right {
        width: 6.21rem;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        position: relative;
        @include rwd($md) {
          width: 9rem;
          height: auto;
          margin-top: 0.5rem;
        }
        @include rwd($sm) {
          width: 7.5rem;
        }
        svg {
          opacity: 0.7;
          margin: auto;
          &:nth-child(1) {
            @include svgBorder(600, 370, $gray1);
            @include position(absolute, 0.75rem, 0, 0, 0.02rem);
            @include rwd($md) {
              display: none;
            }
          }
          &:nth-child(2) {
            display: none;
            @include rwd($md) {
              display: block;
              @include svgBorder(880, 530, $gray1);
              @include position(absolute, 0, 0, 0, 0.02rem);
            }
            @include rwd($sm) {
              display: none;
            }
          }
          &:nth-child(3) {
            display: none;
            @include rwd($sm) {
              display: block;
              @include svgBorder(690, 434, $gray1);
              @include position(absolute, 0.12rem, 0, 0, 0.02rem);
            }
          }
        }
        video {
          &.fadeIn {
            @include fadeIn(1s);
          }
          width: 6.2rem;
          height: 3.5rem;
          margin-top: 2.14rem;
          object-fit: cover;
          @include rwd($md) {
            width: 9rem;
            height: 5.1rem;
            margin: 0;
          }
          @include rwd($sm) {
            width: 7.1rem;
            height: 4.15rem;
            margin-top: 0.12rem;
          }
        }
      }
    }
    .modelingSection {
      width: 100%;
      height: 9rem;
      margin-top: 0.98rem;
      position: relative;
      @include rwd($md) {
        height: 7.6rem;
        margin-top: 1.97rem;
      }
      @include rwd($sm) {
        height: 6.3rem;
        margin-top: 1.9rem;
      }
      h3 {
        width: 3.1rem;
        padding: 0.3rem 0 0.1rem 0.05rem;
        font-size: 0.63rem;
        color: white;
        margin-left: 0.27rem;
        border-bottom: 1px solid white;
        @include position(absolute, $top: 0, $left: 0);
        z-index: 3;
        @include rwd($md) {
          width: 9rem;
          padding: 0.3rem 0.1rem;
          margin-left: 0.48rem;
          top: -1.4rem;
          border: none;
        }
        @include rwd($sm) {
          width: 7.5rem;
          margin-left: 0;
        }
        @include withRegion('vn') {
          font-size: revert;
        }
      }
      .swiperBox {
        width: 3.8rem;
        height: 6.09rem;
        margin-top: 1.13rem;
        padding-left: 0.72rem;
        @include position(absolute, $top: 0, $left: 0);
        z-index: 2;
        overflow: hidden;
        @include rwd($md) {
          width: 8.2rem;
          height: 2.1rem;
          padding-left: 0;
          top: unset;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        @include rwd($sm) {
          width: 6.5rem;
          height: 2rem;
        }
      }
      .shadow {
        width: 3.6rem;
        background: black;
        opacity: 0.75;
        z-index: 1;
        @include position(absolute, 0, 0, 0, 0);
        @include rwd($md) {
          width: 10rem;
          height: 2.1rem;
          top: unset;
          bottom: 0rem;
        }
        @include rwd($sm) {
          display: none;
        }
      }
    }
  }
}
.thumb-example {
  background-color: #000;
}
.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  &.gallery-top {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto 0;
    img {
      height: 7.2rem;
      @include rwd($md) {
        height: 5.5rem;
      }
      @include rwd($sm) {
        height: 4.13rem;
      }
    }
  }
  &.gallery-thumbs {
    height: 9.6rem;
    box-sizing: border-box;
    position: relative;
    top: -3.7rem;
    left: 0;
    overflow: unset;
    @include rwd($md) {
      top: 0.3rem;
      height: 1.4rem;
    }
  }
  &.gallery-thumbs .swiper-slide {
    width: 3.2rem;
    height: 0.8rem;
    opacity: 0.4;
    cursor: pointer;
    text-align: left;
    transition: opacity 0.2s ease-in-out;
    @include rwd($md) {
      width: 1.6rem;
    }
    &:hover {
      opacity: 1;
    }
    &.swiper-slide-active svg {
      &:nth-child(1) {
        display: block;
        @include svgBorder(295, 90, #3d3937);
        @include position(absolute, $top: 0.05rem, $left: 0.05rem);
        @include rwd($md) {
          display: none;
        }
      }
      &:nth-child(2) {
        @include rwd($md) {
          @include position(absolute, $top: -0.07rem, $left: -0.1rem);
          z-index: 1;
          @include svgBorder(113, 113, $orange);
          width: 1.13rem;
          height: 1.13rem;
          display: block;
          path {
            stroke: $orange;
          }
        }
      }
    }
    svg {
      display: none;
    }
    &.swiper-slide-active img {
      transform: scale(1);
    }
    img {
      width: 1rem;
      height: 1rem;
      transform: scale(0.6);
      vertical-align: middle;
      transition: transform 0.2s ease-in-out;
      object-fit: cover;
      @include rwd($md) {
        transform: scale(1);
      }
    }
    &.swiper-slide-active span {
      margin-left: 0.15rem;
      @include rwd($md) {
        margin-left: 0;
      }
    }
    span {
      width: 1.7rem;
      height: auto;
      display: inline-block;
      vertical-align: middle;
      font-size: 0.14rem;
      color: white;
      font-weight: 600;
      vertical-align: middle;

      transition: margin 0.2s ease-in-out;
      @include rwd($md) {
        display: block;
        text-align: center;
        width: 1rem;
        margin-top: 0.2rem;
        font-size: 0.14rem;
      }
    }
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
