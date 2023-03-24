<template>
  <div id="ServerStatusPage">
    <Banner :bread-data="breadData" />
    <div id="serverStatusPageContent" class="container container1334">
      <div class="left">
        <div class="title">{{ $t('LOL__SERVER_PAGE__SERVER_STATUS') }}</div>
        <div class="message blue">
          <svg viewBox="0 0 180 50">
            <path
              d="M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179 M180,0H84v0H20.03L0,20v30h98v0h61.97L180,30V0L180,0z"
            />
          </svg>
          {{ $t('LOL__SERVER_PAGE__NORMAL_MESSAGE') }}
        </div>
        <div class="message orange">
          <svg viewBox="0 0 180 50">
            <path
              d="M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179 M180,0H84v0H20.03L0,20v30h98v0h61.97L180,30V0L180,0z"
            />
          </svg>
          {{ $t('LOL__SERVER_PAGE__WARNING_MESSAGE') }}
        </div>
        <div class="message red">
          <svg viewBox="0 0 180 50">
            <path
              d="M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179 M180,0H84v0H20.03L0,20v30h98v0h61.97L180,30V0L180,0z"
            />
          </svg>
          {{ $t('LOL__SERVER_PAGE__MALFUNCTION_MESSAGE') }}
        </div>
      </div>
      <div class="right">
        <div class="filterOption">
          <div class="svgBorderBox">
            <svg viewBox="0 0 940 50">
              <path
                d="M939,1v28.59L919.55,49H98H1V20.41L20.45,1H84H939 M940,0H84l0,0H20.03L0,20v30h98l0,0h821.97L940,30V0L940,0z"
              />
            </svg>
            <svg viewBox="0 0 720 50">
              <path
                d="M719,1v28.59L699.55,49H98H1V20.41L20.45,1H84H719 M720,0H84l0,0H20.03L0,20v30h98l0,0h601.97L720,30V0L720,0z"
              />
            </svg>
            <svg viewBox="0 0 680 80">
              <path
                d="M679,1v58.59L659.55,79L99,79H1V20.41L20.45,1L85,1H679 M680,0H85v0H20.03L0,20v60h99v0h560.97L680,60V0L680,0z"
              />
            </svg>
          </div>
          <div
            :class="['option', { active: selectedOption === 'currentTicks' }]"
            @click="changeTicks('currentTicks')"
          >
            {{ $t('LOL__SERVER_PAGE__CURRENT_STATUS') }}
          </div>
          <div
            :class="['option', { active: selectedOption === 'solvedTicks' }]"
            @click="changeTicks('solvedTicks')"
          >
            {{ $t('LOL__SERVER_PAGE__CURRENT_EXCLUDE') }}
          </div>
        </div>
        <div class="lists">
          <Loading v-if="loading" class="loading" />
          <template v-else>
            <div
              v-for="(list, index) in selectedList"
              :key="index"
              class="list"
            >
              <div
                :class="[
                  'message',
                  {
                    blue: list.type === 0,
                    orange: list.type === 1,
                    red: list.type === 2,
                  },
                ]"
              >
                <svg viewBox="0 0 180 50">
                  <path
                    d="M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179 M180,0H84v0H20.03L0,20v30h98v0h61.97L180,30V0L180,0z"
                  />
                </svg>
                <svg viewBox="0 0 640 70">
                  <path
                    d="M639,1v48.59L619.55,69H100H1V20.41L20.45,1H84H639 M640,0H84l0,0H20.03L0,20v50h100l0,0h519.97L640,50V0L640,0z"
                  />
                </svg>
                {{ messageJudge(list.type) }}
              </div>
              <p v-if="list.title" class="title">{{ list.title }}</p>
              <p class="enhance">{{ list.message }}</p>
              <div class="time">{{ transformTime(list.time) }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/utils';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ServerStatusPage',
  async fetch({ store }) {
    await store.dispatch('ServerStatus/getIndexTicks');
  },
  data() {
    return {
      breadData: [
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
          url: '/',
        },
        {
          name: 'LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS',
          url: '/serverStatus',
        },
      ],
      selectedOption: 'currentTicks',
    };
  },
  computed: {
    ...mapState('ServerStatus', ['lists', 'loading']),
    messageJudge() {
      return (type) => {
        if (type === 1) return this.$t('LOL__SERVER_PAGE__WARNING_MESSAGE');
        if (type === 2) return this.$t('LOL__SERVER_PAGE__MALFUNCTION_MESSAGE');
        return this.$t('LOL__SERVER_PAGE__NORMAL_MESSAGE');
      };
    },
    selectedList() {
      return this.lists[this.selectedOption];
    },
    transformTime() {
      return (time) => {
        return utils.timeToYYMMDDHHMM(time);
      };
    },
  },
  methods: {
    ...mapActions('ServerStatus', ['getIndexTicks']),
    changeTicks(status) {
      this.selectedOption = status;
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #0bc6e4;
$orange: #f9b552;
$red: #be3030;

#ServerStatusPage {
  height: auto;
  #serverStatusPageContent {
    font-size: 0;
    margin: 0.58rem auto 1.8rem;
    padding: 0 0.55rem;
    @include rwd($md) {
      padding: 0 0.1rem;
    }
    @include rwd($sm) {
      margin: 0.33rem auto 1rem;
    }
    .left,
    .right {
      font-size: 0.2rem;
      display: inline-block;
      vertical-align: top;
      text-align: left;
      .message {
        width: 1.72rem;
        height: 0.4rem;
        margin: auto;
        padding: 0.12rem 0;
        font-size: 0.16rem;
        font-weight: 600;
        text-align: center;
        position: relative;
        &.blue {
          background: $blue;
        }
        &.orange {
          background: $orange;
        }
        &.red {
          background: $red;
        }
      }
    }
    .left {
      width: 2.5rem;
      height: 3.77rem;
      margin-right: 0.3rem;
      background: black;
      position: relative;
      @include rwd($md) {
        width: 2.3rem;
        margin-right: 0.2rem;
      }
      @include rwd($sm) {
        display: none;
      }
      &:before {
        content: '';
        @include position(absolute, $top: 0, $left: 0);
        width: 0;
        height: 0;
        border-right: 0.2rem solid transparent;
        border-top: 0.2rem solid white;
      }
      &:after {
        content: '';
        @include position(absolute, $right: 0, $bottom: 0);
        border-left: 0.2rem solid transparent;
        border-bottom: 0.2rem solid white;
      }
      .title {
        width: 2rem;
        margin: auto;
        padding: 0.2rem 0;
        font-size: 0.25rem;
        color: white;
        border-bottom: 1px solid white;
        text-align: center;
      }
      .message {
        margin-top: 0.45rem;
        svg {
          &:nth-child(1) {
            width: 1.8rem;
            height: 0.5rem;
            stroke: #edebf0;
            @include position(absolute, $top: -0.05rem, $left: -0.04rem);
            @include rwd($sm) {
              display: none;
            }
          }
        }
      }
    }
    .right {
      width: 9.4rem;
      @include rwd($md) {
        width: 7.2rem;
      }
      @include rwd($sm) {
        width: 6.8rem;
      }
      .message {
        margin: 0;
        @include rwd($sm) {
          width: 6.3rem;
          height: 0.6rem;
          font-size: 0.28rem;
          padding: 0.2rem 0;
        }
        svg {
          &:nth-child(1) {
            width: 1.8rem;
            height: 0.5rem;
            stroke: #bab4b6;
            @include position(absolute, $top: -0.05rem, $left: -0.04rem);
            @include rwd($sm) {
              display: none;
            }
          }
          &:nth-child(2) {
            display: none;
            @include rwd($sm) {
              width: 6.4rem;
              height: 0.7rem;
              stroke: #bab4b6;
              @include position(absolute, $top: -0.05rem, $left: -0.05rem);
              display: block;
            }
          }
        }
      }
      .filterOption {
        height: 0.5rem;
        font-size: 0;
        text-align: center;
        position: relative;
        @include rwd($sm) {
          height: 0.8rem;
        }
        .svgBorderBox {
          @include position(absolute, $top: 0, $left: 0);
          svg {
            &:nth-child(1) {
              @include svgBorder(940, 50);
              @include rwd($md) {
                display: none;
              }
            }
            &:nth-child(2) {
              display: none;
              @include rwd($md) {
                @include svgBorder(720, 50);
                display: block;
              }
              @include rwd($sm) {
                display: none;
              }
            }
            &:nth-child(3) {
              display: none;
              @include rwd($sm) {
                @include svgBorder(680, 80);
                display: block;
              }
            }
          }
        }
        .option {
          width: 2.5rem;
          height: 100%;
          padding-top: 0.15rem;
          font-size: 0.17rem;
          font-weight: 600;
          display: inline-block;
          margin-left: 0.2rem;
          cursor: pointer;
          position: relative;
          @include rwd($sm) {
            padding-top: 0.24rem;
            font-size: 0.28rem;
            margin-left: -0.05rem;
          }
          &.active {
            color: #bf975c;
            border-bottom: 3px solid #bf975c;
          }
        }
      }
      .lists {
        padding-top: 0.2rem;
        @include rwd($sm) {
          padding-top: 0;
        }
        .loading {
          margin: 1rem 0;
          text-align: center;
        }
        .list {
          padding: 0.3rem 0.25rem;
          margin-top: 0.4rem;
          height: auto;
          background: #eeeeee;
          @include fadeInUp(1s);
          @include rwd($sm) {
            height: 6.5rem;
            padding: 0.3rem 0.2rem;
          }
          ::v-deep .title {
            color: #579594;
            font-size: 0.25rem;
            font-weight: 600;
            margin: 0.42rem 0 0.18rem;
            @include rwd($sm) {
              margin: 0.29rem 0 0.16rem 0.1rem;
              font-size: 0.34rem;
            }
          }
          ::v-deep p {
            color: #898989;
            font-size: 0.18rem;
            @include rwd($sm) {
              font-size: 0.28rem;
              margin-left: 0.1rem;
            }
            &.enhance {
              color: black;
              font-weight: 600;
              font-size: 0.17rem;
              margin-top: 0.2rem;
              @include rwd($sm) {
                font-size: 0.28rem;
              }
            }
          }
          ::v-deep .time {
            margin-top: 0.4rem;
            font-size: 0.14rem;
            text-align: right;
            @include rwd($md) {
              margin-top: 0.2rem;
              margin-right: 0.1rem;
            }
            @include rwd($sm) {
              font-size: 0.25rem;
              margin-top: 1.2rem;
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
