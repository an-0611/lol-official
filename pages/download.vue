<template>
  <div id="DownloadPage">
    <Banner :bread-data="breadData" />
    <div id="DownloadPageContent" class="container">
      <Loading v-if="!loading" style="margin: 1rem 0" />
      <div v-else class="download">
        <div class="section quickLink">
          <div class="link">
            <div class="btn">
              <a :href="accountRegisterLink" target="_blank">
                {{ $t('LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1') }}
              </a>
            </div>
            <div class="text">
              {{ $t('LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1') }}
            </div>
          </div>
          <div class="link">
            <div class="btn">
              <a href="javascript:void(0)" @click="beforeDownloadMainProgram">
                {{ $t('LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2') }}
              </a>
            </div>
            <div class="text">
              {{ $t('LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2') }}
            </div>
          </div>
          <div class="link">
            <div class="btn">
              <a :href="platformDownloadLink" target="_blank">
                {{ $t('LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3') }}
              </a>
            </div>
            <div class="text">
              {{ $t('LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3') }}
            </div>
          </div>
        </div>
        <div v-if="currentUpdateFile" class="section currentVersion">
          <div class="topic">
            {{ $t('LOL__DOWNLOAD__CURRENT_VERSION__TOPIC') }}
          </div>
          <div class="content">
            <div class="desc">
              {{ $t('LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC') }}
            </div>
            <div class="divider" />
            <div class="remind">
              {{ currentUpdateFile.desc }}
            </div>
            <div class="btn">
              <a href="javascript:void(0)" @click="beforeUpdateManualPatcher">
                {{ $t('LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT') }}
              </a>
            </div>
          </div>
        </div>
        <div v-if="updates" class="section history">
          <div class="topic">
            {{ $t('LOL__DOWNLOAD__HISTORY__TOPIC') }}
          </div>
          <div class="content">
            <div class="head">
              <div class="category">
                {{ $t('LOL__DOWNLOAD__HISTORY__CATEGORY_1') }}
              </div>
              <div class="category">
                {{ $t('LOL__DOWNLOAD__HISTORY__CATEGORY_2') }}
              </div>
              <div class="category">
                {{ $t('LOL__DOWNLOAD__HISTORY__CATEGORY_3') }}
              </div>
              <div class="category">
                {{ $t('LOL__DOWNLOAD__HISTORY__CATEGORY_4') }}
              </div>
            </div>
            <div v-for="(update, index) in updates" :key="index" class="row">
              <div class="column">{{ update.time }}</div>
              <div class="column">{{ update.adaptVersion }}</div>
              <div class="column">{{ update.updatedVersion }}</div>
              <div class="column">
                <div class="btn">
                  <a :href="update.link">
                    {{ $t('LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="updateTutorialVideo" class="section manualUpdate">
          <div class="topic">
            {{ $t('LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC') }}
          </div>
          <div class="content">
            <div class="desc">
              {{ $t('LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC') }}
            </div>
            <div class="divider" />
            <iframe
              class="updateTutorialVideo"
              :src="updateTutorialVideo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div v-if="requirement" class="section requirement">
          <div class="topic">{{ $t('LOL__DOWNLOAD__EAUIPMENT__TOPIC') }}</div>
          <div class="content">
            <div class="head">
              <div
                v-for="(head, index) in requirementTitle"
                :key="index"
                class="category"
              >
                {{ $t(head) }}
              </div>
            </div>
            <div
              v-for="(content, index) in requirement"
              :key="index"
              class="row"
            >
              <div class="column">{{ $t(content.subject) }}</div>
              <div class="column black" v-html="$t(content.basic)" />
              <div class="column black" v-html="$t(content.recommand)" />
            </div>
          </div>
        </div>
        <div class="section driver">
          <div class="topic">{{ $t('LOL__DOWNLOAD__DRIVER__TOPIC') }}</div>
          <div class="content">
            <div class="desc">
              {{ $t('LOL__DOWNLOAD__DRIVER__CONTENT_DESC') }}
            </div>
            <template v-if="driver">
              <div class="divider" />
              <div
                v-for="(d, driverIndex) in driver"
                :key="driverIndex"
                :class="['btn', { firstBtn: driverIndex === 0 }]"
              >
                <a :href="d.link" target="_blank">
                  {{ d.name }}
                </a>
              </div>
              <div class="clear" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex';

export default {
  name: 'DownloadPage',
  async fetch({ store }) {
    await store.dispatch('Download/getDownloadInfo');
  },
  data() {
    return {
      breadData: [
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
          url: '/',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD',
          url: '/download',
        },
      ],
      quickLinks: [
        {
          btnText: 'LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1',
          descText: 'LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1',
        },
        {
          btnText: 'LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2',
          descText: 'LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2',
        },
        {
          btnText: 'LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3',
          descText: 'LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3',
        },
      ],
      requirementTitle: [
        'LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1',
        'LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2',
        'LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3',
      ],
    };
  },
  computed: {
    ...mapState('Download', [
      'loading',
      'accountRegisterLink',
      'browserDownloadLink',
      'platformDownloadLink',
      'currentUpdateFile',
      'updates',
      'updateTutorialVideo',
      'requirement',
      'driver',
    ]),
  },
  beforeMount() {
    if (window && window.innerWidth <= 750) {
      this.$router.push('/');
    }
  },
  methods: {
    beforeDownloadMainProgram() {
      if (this.$gtag) {
        this.$gtag('event', 'click', {
          event_category: 'Installer click',
          event_label: 'download page',
          value: '1',
        });
        // this.$gtm.push({
        //   event: 'Click',
        //   name: 'Installer click',
        //   label: 'download page',
        //   value: 1,
        // });
      }
      window.open(this.browserDownloadLink, '_blank');
    },
    beforeUpdateManualPatcher() {
      if (this.$gtag) {
        this.$gtag('event', 'click', {
          event_category: 'Manual Patcher click',
          event_label: 'download page',
          value: '1',
        });
        // this.$gtm.push({
        //   event: 'Click',
        //   name: 'Manual Patcher click',
        //   label: 'download page',
        //   value: 1,
        // });
      }
      window.open(this.currentUpdateFile.link, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
#DownloadPageContent {
  margin-bottom: 0.8rem;
  @include rwd($md) {
    padding: 0 0.2rem;
  }
  @include rwd($sm) {
    display: none;
  }
  .download {
    .btn {
      width: 2.1rem;
      height: 0.4rem;
      color: #013745;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.18rem;
      font-weight: 600;
      background: #0bc6e4;
      letter-spacing: 0.01rem;
      display: inline-block;
      cursor: pointer;
      @include rwd($md) {
        width: 1.65rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.15rem;
      }
      a {
        color: #013745;
        display: block;
      }
    }
    .section {
      margin-top: 0.7rem;
      text-align: left;
      @include rwd($md) {
        margin-top: 0.6rem;
      }
      &:first-of-type {
        margin-top: 0.6rem;
        @include rwd($md) {
          margin-top: 0.25rem;
        }
      }
      .topic {
        height: 0.3rem;
        margin-left: 0.35rem;
        line-height: 0.3rem;
        font-size: 0.3rem;
        font-weight: 600;
        letter-spacing: 0.01rem;
        color: #b59668;
        display: inline-block;
        position: relative;
        &:before,
        &:after {
          content: '';
          width: 0.08rem;
          height: 0.08rem;
          border: 1px solid #b59668;
          transform: rotate(45deg);
          z-index: 1;
          display: inline-block;
          vertical-align: middle;
          @include position(absolute, 0, 0, 0, -0.32rem);
          margin: auto 0;
        }
        &:after {
          @include position(absolute, 0, 0, 0, -0.27rem);
        }
      }
      .desc {
        font-size: 0.16rem;
        font-weight: 600;
        letter-spacing: 0.01rem;
      }
      .content {
        height: auto;
        font-size: 0.15rem;
        margin-top: 0.2rem;
        padding: 0.35rem 0.4rem 0.3rem;
        border: 1px solid #c1c1c1;
        @include rwd($md) {
          padding: 0.35rem 0.27rem 0.3rem;
        }
        .divider {
          width: 100%;
          height: 0.01rem;
          margin: 0.2rem 0;
          background: #c1c1c1;
        }
      }
    }
    .quickLink {
      height: 3.3rem;
      font-size: 0;
      @include rwd($md) {
        height: 2.6rem;
      }
      .link {
        width: 2.7rem;
        height: 3.3rem;
        display: inline-block;
        position: relative;
        @include rwd($md) {
          width: 2.13rem;
          height: 2.6rem;
        }
        .btn {
          @include position(absolute, $bottom: 0.4rem, $left: 0, $right: 0);
          margin: 0 auto;
          @include rwd($md) {
            bottom: 0.35rem;
          }
        }
        .text {
          @include position(absolute, $bottom: 0, $left: 0, $right: 0);
          font-size: 0.14rem;
          color: #75e0e6;
          text-align: center;
          width: 100%;
          height: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:nth-child(1) {
          background: assetsUrl('banner/apply.jpg') no-repeat;
          background-size: contain;
          .btn {
            background: #f5c04c;
          }
        }
        &:nth-child(2) {
          margin-left: 0.3rem;
          background: assetsUrl('banner/download1.jpg') no-repeat;
          background-size: contain;
          @include rwd($md) {
            margin-left: 0.22rem;
          }
        }
        &:nth-child(3) {
          width: 6.2rem;
          margin-left: 0.3rem;
          background: assetsUrl('banner/download2.jpg') no-repeat;
          background-size: contain;
          @include rwd($md) {
            width: 4.87rem;
            margin-left: 0.22rem;
          }
          .btn {
            width: 3rem;
            @include rwd($md) {
              width: 2.35rem;
            }
          }
        }
      }
    }
    .currentVersion {
      height: 2.6rem;
      .remind {
        color: #167271;
        font-size: 0.24rem;
        letter-spacing: 0.01rem;
        word-break: break-word;
        @include rwd($md) {
          font-size: 0.18rem;
        }
      }
      .btn {
        margin-top: 0.22rem;
        @include rwd($md) {
          width: 2.1rem;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.18rem;
        }
      }
    }
    .history {
      height: auto;
      .head {
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0;
        background: #061d25;
        text-align: center;
        .category {
          width: 2.8rem;
          font-size: 0.18rem;
          color: #eeeeee;
          display: inline-block;
          letter-spacing: 0.01rem;
          @include rwd($md) {
            width: 2.25rem;
          }
        }
      }
      .row {
        padding: 0.12rem 0;
        font-size: 0;
        background: #eeeeee;
        text-align: center;
        border-bottom: 0.01rem solid #c1c1c1;
        .column {
          width: 2.8rem;
          color: #4f8684;
          font-size: 0.2rem;
          display: inline-block;
          @include rwd($md) {
            width: 2.25rem;
            font-size: 0.18rem;
            vertical-align: middle;
          }
          .btn {
            margin: auto;
            @include rwd($md) {
              width: 2rem;
              height: 0.4rem;
              line-height: 0.4rem;
              font-size: 0.18rem;
            }
          }
        }
      }
    }
    .manualUpdate {
      height: 7.4rem;
      .content {
        @include rwd($md) {
          padding: 0.25rem 0.4rem 0.4rem;
        }
        .updateTutorialVideo {
          width: 9.3rem;
          height: 5.23rem;
          margin: 0.27rem 0.85rem 0.15rem;
          @include rwd($md) {
            width: 8.78rem;
            height: 4.93rem;
            margin: 0.2rem 0 0 0;
          }
        }
      }
    }
    .requirement {
      height: auto;
      .content {
        @include rwd($md) {
          padding: 0.35rem;
        }
        .head {
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0;
          background: #061d25;
          text-align: center;
          .category {
            width: 3.7rem;
            font-size: 0.18rem;
            color: #eeeeee;
            display: inline-block;
            letter-spacing: 0.01rem;
            @include rwd($md) {
              width: 2.92rem;
            }
          }
        }
        .row {
          padding: 0.22rem 0;
          font-size: 0;
          background: #eeeeee;
          text-align: center;
          border-bottom: 0.01rem solid #c1c1c1;
          @include rwd($md) {
            padding: 0.16rem 0;
          }
          .column {
            width: 3.7rem;
            color: #4f8684;
            font-size: 0.2rem;
            display: inline-block;
            vertical-align: middle;
            @include rwd($md) {
              width: 2.92rem;
              font-size: 0.18rem;
            }
            &.black {
              color: #535352;
            }
          }
        }
      }
    }
    .driver {
      height: auto;
      .content {
        @include rwd($md) {
          padding: 0.3rem 0.4rem;
        }
        .btn {
          float: left;
          width: 2.05rem;
          margin-right: 0.2rem;
          margin-bottom: 0.2rem;
          @include rwd($md) {
            width: 1.95rem;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.18rem;
          }
        }
        .clear {
          clear: both;
        }
      }
    }
  }
}
</style>
