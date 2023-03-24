<template>
  <div id="TutorialPage">
    <div id="tutorialPageContent" class="container">
      <div class="titleSection">
        <div ref="titleWrapper" class="titleWrapper" data-rateY="6.0">
          <div class="smallTitle">{{ $t('LOL__TUTORIAL__LEARN_BASIC') }}</div>
          <div class="title">{{ $t('LOL__TUTORIAL__WELCOME') }}</div>
        </div>
        <div class="description" v-html="$t('LOL__TUTORIAL__WELCOME_DESC')" />
        <div class="btn" @click="scrollToVideo">
          <svg viewBox="0 0 180 58">
            <path d="M179,1v36.59L159.55,57L99,57H1V20.41L20.45,1L85,1H179" />
          </svg>
          {{ $t('LOL__TUTORIAL__GET_START') }}
        </div>
      </div>

      <div id="canvasSection"></div>

      <div ref="bgAnchorPoint" class="bg">
        <div class="parallaxLayer b1" data-rateY="2.2" data-rateZ="-1.1"></div>
        <div class="parallaxLayer b2" data-rateY="2" data-rateZ="1.5"></div>
        <div class="parallaxLayer b3" data-rateY="1.8" data-rateZ="1.6"></div>
        <div class="parallaxLayer b4" data-rateY="1.6" data-rateZ="1.8"></div>
        <div class="parallaxLayer b5" data-rateY="1.5" data-rateZ="2.3"></div>
        <div class="parallaxLayer b6" data-rateY="-3.0" data-rateZ="2.8"></div>
        <div class="parallaxLayer b7" data-rateY="-1.1" data-rateZ="5"></div>
      </div>

      <div ref="videoAnchorPoint" class="videoSection">
        <div class="videoBg" />
        <div ref="videoBox" class="videoBox fadeUp hide">
          <div class="box">
            <video
              preload="none"
              style="object-fit: cover; object-position: center center"
              muted
              loop
              playsinline
              autoplay
            >
              <source
                :src="`${CDN}/tutorial/tutorialVideo.mp4`"
                type="video/mp4"
              />
            </video>
            <div ref="videoContent" class="content" data-rateY="6.0">
              <div class="title">{{ $t('LOL__TUTORIAL__WHAT_IS_LOL') }}</div>
              <div class="desc">
                {{ $t('LOL__TUTORIAL__WHAT_IS_LOL_DESC') }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mapSection">
        <div class="mapBg">
          <div class="interactiveSection">
            <div ref="interactiveWrapper" class="interactiveWrapper">
              <div class="interactiveContent">
                <div class="interactiveBg" />
                <template v-if="mapContents">
                  <transition-group name="fade" tag="div">
                    <div
                      v-for="(n, i) in mapContents.length"
                      v-show="currentMapSectionAnchor === i"
                      :key="i + 1"
                      :class="`section${i} sectionLayer`"
                    >
                      <template v-if="i !== 3">
                        <div
                          :class="[
                            { blueBox: i === 0 },
                            { turretsBox: i === 1 },
                            { baronNashorBox: i === 2 },
                            { active: mapContents[i].currentIndex === 0 },
                          ]"
                        >
                          <svg class="svgCross" viewBox="0 0 100 100">
                            <path
                              d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 0)"
                          >
                            <path
                              d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                          <div class="enlargeImg"></div>
                        </div>
                        <div
                          :class="[
                            { redBox: i === 0 },
                            { inhibitorsBox: i === 1 },
                            { drakesBox: i === 2 },
                            { active: mapContents[i].currentIndex === 1 },
                          ]"
                        >
                          <svg class="svgCross" viewBox="0 0 100 100">
                            <path
                              d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 1)"
                          >
                            <path
                              d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                          <div class="enlargeImg"></div>
                        </div>
                      </template>
                      <template v-else>
                        <div
                          :class="[
                            'topLaneBox',
                            { active: mapContents[i].currentIndex === 0 },
                          ]"
                        >
                          <svg class="svgRoute">
                            <path
                              fill-opacity="0.3"
                              d="M11.11 100l16.67-16.67h55.55V27.78L100 11.11V100z"
                            ></path>
                            <path
                              fill-opacity="0.3"
                              d="M38.94 38.94v22.24h22.24V38.94z"
                            ></path>
                            <path
                              d="M0 0v88.89l16.67-16.67V16.67h55.55L88.89 0z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 0)"
                          >
                            <path
                              d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                            ></path>
                            <path
                              d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                            ></path>
                            <path
                              d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                        </div>
                        <div
                          :class="[
                            'jungleBox',
                            { active: mapContents[i].currentIndex === 1 },
                          ]"
                        >
                          <svg class="svgRoute">
                            <path
                              d="M81.82 0a124.75 124.75 0 00-27.27 36.36 160.53 160.53 0 014.54 22.73S63.6 50 63.64 50c0-13.25 18.18-50 18.18-50zM31.82 59.09c-5.54-14.94-12.45-20-27.27-27.27C18.07 43 22.73 72.73 22.73 72.73S39.16 79.68 50 100C66 63 38.2 23.47 18.18 0c9.34 23.47 13.64 34 13.64 59.09zM63.64 72.73v13.63l18.18-18.18c0-15.1.11-29.71 13.63-40.91C77 36.33 63.64 62.09 63.64 72.73z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 1)"
                          >
                            <path
                              d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                            ></path>
                            <path
                              d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                            ></path>
                            <path
                              d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                        </div>
                        <div
                          :class="[
                            'midLaneBox',
                            { active: mapContents[i].currentIndex === 2 },
                          ]"
                        >
                          <svg class="svgRoute">
                            <path
                              d="M16.67 100L100 16.67V0H83.33L0 83.33V100z"
                            ></path>
                            <path
                              fill-opacity="0.3"
                              d="M83.33 50L100 33.33V100H33.33L50 83.33h33.33zM66.67 0L50 16.67H16.67V50L0 66.67V0z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 2)"
                          >
                            <path
                              d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                            ></path>
                            <path
                              d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                            ></path>
                            <path
                              d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                        </div>
                        <div
                          :class="[
                            'botLaneBox',
                            { active: mapContents[i].currentIndex === 3 },
                          ]"
                        >
                          <svg class="svgRoute">
                            <path
                              d="M11.11 100l16.67-16.67h55.55V27.78L100 11.11V100z"
                            ></path>
                            <path
                              fill-opacity="0.3"
                              d="M38.94 38.94v22.24h22.24V38.94z"
                            ></path>
                            <path
                              fill-opacity="0.3"
                              d="M0 0v88.89l16.67-16.67V16.67h55.55L88.89 0z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 3)"
                          >
                            <path
                              d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                            ></path>
                            <path
                              d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                            ></path>
                            <path
                              d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                        </div>
                        <div
                          :class="[
                            'supportBox',
                            { active: mapContents[i].currentIndex === 4 },
                          ]"
                        >
                          <svg class="svgRoute">
                            <path
                              d="M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z"
                            ></path>
                          </svg>
                          <svg
                            class="svgCircle"
                            viewBox="0 0 100 100"
                            @click="slideSwiper(i, 4)"
                          >
                            <path
                              d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                            ></path>
                            <path
                              d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                            ></path>
                            <path
                              d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"
                            ></path>
                          </svg>
                          <div class="circle rotateAnimation"></div>
                        </div>
                      </template>
                    </div>
                  </transition-group>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div
          v-for="(n, i) in 4"
          :key="i"
          :class="['leftSection', { isFirst: i === 0, isSecond: i === 1 }]"
        >
          <div ref="mobileMapWrapper" class="mobileMapWrapper">
            <div class="wrapper">
              <div class="bg"></div>

              <div class="m-sectionLayer">
                <template v-if="i !== 3">
                  <div
                    :class="[
                      { blueBox: i === 0 },
                      { turretsBox: i === 1 },
                      { baronNashorBox: i === 2 },
                      { active: mapContents[i].currentIndex === 0 },
                    ]"
                  >
                    <svg class="svgCross" viewBox="0 0 100 100">
                      <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 0)"
                    >
                      <path
                        d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                      ></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                    <div class="enlargeImg"></div>
                  </div>
                  <div
                    :class="[
                      { redBox: i === 0 },
                      { inhibitorsBox: i === 1 },
                      { drakesBox: i === 2 },
                      { active: mapContents[i].currentIndex === 1 },
                    ]"
                  >
                    <svg class="svgCross" viewBox="0 0 100 100">
                      <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 1)"
                    >
                      <path
                        d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                      ></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                    <div class="enlargeImg"></div>
                  </div>
                </template>
                <template v-else>
                  <div
                    :class="[
                      'topLaneBox',
                      { active: mapContents[i].currentIndex === 0 },
                    ]"
                  >
                    <svg class="svgRoute">
                      <path
                        fill-opacity="0.3"
                        d="M11.11 100l16.67-16.67h55.55V27.78L100 11.11V100z"
                      ></path>
                      <path
                        fill-opacity="0.3"
                        d="M38.94 38.94v22.24h22.24V38.94z"
                      ></path>
                      <path
                        d="M0 0v88.89l16.67-16.67V16.67h55.55L88.89 0z"
                      ></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 0)"
                    >
                      <path
                        d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                      ></path>
                      <path
                        d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                      ></path>
                      <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                  </div>
                  <div
                    :class="[
                      'jungleBox',
                      { active: mapContents[i].currentIndex === 1 },
                    ]"
                  >
                    <svg class="svgRoute">
                      <path
                        d="M81.82 0a124.75 124.75 0 00-27.27 36.36 160.53 160.53 0 014.54 22.73S63.6 50 63.64 50c0-13.25 18.18-50 18.18-50zM31.82 59.09c-5.54-14.94-12.45-20-27.27-27.27C18.07 43 22.73 72.73 22.73 72.73S39.16 79.68 50 100C66 63 38.2 23.47 18.18 0c9.34 23.47 13.64 34 13.64 59.09zM63.64 72.73v13.63l18.18-18.18c0-15.1.11-29.71 13.63-40.91C77 36.33 63.64 62.09 63.64 72.73z"
                      ></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 1)"
                    >
                      <path
                        d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                      ></path>
                      <path
                        d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                      ></path>
                      <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                  </div>
                  <div
                    :class="[
                      'midLaneBox',
                      { active: mapContents[i].currentIndex === 2 },
                    ]"
                  >
                    <svg class="svgRoute">
                      <path
                        d="M16.67 100L100 16.67V0H83.33L0 83.33V100z"
                      ></path>
                      <path
                        fill-opacity="0.3"
                        d="M83.33 50L100 33.33V100H33.33L50 83.33h33.33zM66.67 0L50 16.67H16.67V50L0 66.67V0z"
                      ></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 2)"
                    >
                      <path
                        d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                      ></path>
                      <path
                        d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                      ></path>
                      <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                  </div>
                  <div
                    :class="[
                      'botLaneBox',
                      { active: mapContents[i].currentIndex === 3 },
                    ]"
                  >
                    <svg class="svgRoute">
                      <path
                        d="M11.11 100l16.67-16.67h55.55V27.78L100 11.11V100z"
                      ></path>
                      <path
                        fill-opacity="0.3"
                        d="M38.94 38.94v22.24h22.24V38.94z"
                      ></path>
                      <path
                        fill-opacity="0.3"
                        d="M0 0v88.89l16.67-16.67V16.67h55.55L88.89 0z"
                      ></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 3)"
                    >
                      <path
                        d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                      ></path>
                      <path
                        d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                      ></path>
                      <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                  </div>
                  <div
                    :class="[
                      'supportBox',
                      { active: mapContents[i].currentIndex === 4 },
                    ]"
                  >
                    <svg class="svgRoute">
                      <path
                        d="M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z"
                      ></path>
                    </svg>
                    <svg
                      class="svgCircle"
                      viewBox="0 0 100 100"
                      @click="slideSwiper(i, 4)"
                    >
                      <path
                        d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                      ></path>
                      <path
                        d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                      ></path>
                      <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                    </svg>
                    <div class="circle rotateAnimation"></div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="content">
            <section class="top">
              <h3 class="topic">{{ $t(mapContents[i].topic) }}</h3>
              <p class="desc">{{ $t(mapContents[i].desc) }}</p>
            </section>
            <section class="bottom">
              <p class="currentPage">
                {{ mapContents[i].currentIndex + 1 }} /
                {{ mapContents[i].subContents.length }}
              </p>
              <swiper
                :ref="`mySwiper${i}`"
                :options="swiperOptions[i]"
                class="map_swiper"
                @slideChange="slideChange(i)"
              >
                <swiper-slide
                  v-for="(subContent, index) in mapContents[i].subContents"
                  :key="index"
                >
                  <h4>{{ $t(subContent.topic) }}</h4>
                  <p>{{ $t(subContent.desc) }}</p>
                </swiper-slide>
              </swiper>
              <div class="btnBox">
                <button :class="`prevBtn prevBtn${i}`">
                  <svg viewBox="0 0 53 53">
                    <path
                      d="M0,53h53V0L10.8,0L0,10.86L0,53z M11.22,1H52v51H1V11.27L11.22,1z"
                    />
                  </svg>
                  <svg viewBox="0 0 54 40">
                    <path
                      d="M0,40h54V0H10.8L0,10.86V40z M11.22,1H53v38H1V11.27L11.22,1z"
                    />
                  </svg>
                  <svg viewBox="0 0 70 53">
                    <path
                      d="M0,53h70V0H10.8L0,10.86V53z M11.22,1H69v51H1V11.27L11.22,1z"
                    />
                  </svg>
                  <svg class="svgArrow" viewBox="0 0 100 100">
                    <path
                      d="M96.53 46.53A3.47 3.47 0 1193.06 50a3.47 3.47 0 013.47-3.47zM73.76 53.47H13.29l23 23-4.91 4.91L0 50l31.38-31.38 4.91 4.91-23 23h60.47z"
                    ></path>
                  </svg>
                </button>
                <button :class="`nextBtn nextBtn${i}`">
                  <svg viewBox="0 0 53 53">
                    <path
                      d="M53,0H0v53h42.2L53,42.14V0z M41.78,52H1V1h51v40.73L41.78,52z"
                    />
                  </svg>
                  <svg viewBox="0 0 54 40">
                    <path
                      d="M54,0H0v40h43.2L54,29.14V0z M42.78,39H1V1h52v27.73L42.78,39z"
                    />
                  </svg>
                  <svg viewBox="0 0 70 53">
                    <path
                      d="M70,0H0v53h59.2L70,42.14V0z M58.78,52H1V1h68v40.73L58.78,52z"
                    />
                  </svg>
                  <svg class="svgArrow" viewBox="0 0 100 100">
                    <path
                      d="M3.47 53.47A3.47 3.47 0 116.94 50a3.47 3.47 0 01-3.47 3.47zM26.24 46.53h60.47l-23-23 4.91-4.91L100 50 68.62 81.38l-4.91-4.91 23-23H26.24z"
                    ></path>
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="championSection">
        <div class="title">{{ $t('LOL__TUTORIAL__CHAMPION__TOPIC') }}</div>
        <div class="description">
          {{ $t('LOL__TUTORIAL__CHAMPION__DESC') }}
        </div>
        <div class="schematic">
          <div class="svgBorderBox">
            <svg viewBox="0 0 1300 460">
              <path
                d="M1260,0H0v460h1300V40L1260,0z M1,459V1h1258.59L1299,40.41v129.75h-2.76v120h2.76V459H1z"
              />
            </svg>
            <svg viewBox="0 0 880 500">
              <path
                d="M859.33,1.66l19.41,19.41v478.59h-878v-498H859.33 M859.74,0.66h-860v500h880v-480L859.74,0.66L859.74,0.66z"
              />
            </svg>
            <svg viewBox="0 0 690 395">
              <path
                d="M669.59,1.5L689,20.91V394.5H1V1.5H669.59 M670,0.5H0v395h690v-375L670,0.5L670,0.5z"
              />
            </svg>
          </div>
          <video
            v-show="selectedItemIndex === 0 || selectedItemIndex === 1"
            ref="championVideo"
            preload="metadata"
            class="fadeIn"
            playsinline
            autoplay
            muted
          >
            <source :src="selectedChampionVideoUrl" type="video/mp4" />
          </video>
          <img
            v-show="selectedItemIndex === 2"
            :src="`${CDN}/tutorial/shop.jpg`"
            alt=""
            class="fadeIn"
          />
          <div class="content">
            <div
              v-for="(item, index) in optionItems"
              :key="index"
              class="itemBox"
              @click="toggleItemIndex(index)"
            >
              <div class="topic">
                <svg
                  viewBox="0 0 100 100"
                  :class="{ active: selectedItemIndex === index }"
                >
                  <path d="M0 40v20h100V40z"></path>
                </svg>
                <svg
                  viewBox="0 0 100 100"
                  :class="{ active: selectedItemIndex !== index }"
                >
                  <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                </svg>
                {{ $t(item.topic) }}
              </div>
              <p :class="['desc', { active: selectedItemIndex === index }]">
                {{ $t(item.desc) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="separate">
        <div class="box">
          <svg viewBox="0 0 82.51 11.84">
            <path
              class="st0"
              d="M81.91.11l.6.6-2.99 2.99H45l-3.86 3.53-3.86-3.53H2.77L0 .93l.6-.6 2.52 2.52h34.49l3.54 3.23 3.53-3.23h34.49L81.91.11z"
            ></path>
            <path
              class="st1"
              d="M52.05.56h-.23l-.16.17c-3.47 3.46-6.93 6.93-10.4 10.4L30.86.73 30.7.56h-.23"
            ></path>
          </svg>
        </div>
      </div>

      <div class="skillSection">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="title">
          {{ $t('LOL__TUTORIAL__SKILL__UNLOCK_SKILL') }}
        </div>
        <div class="description">
          {{ $t('LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC') }}
        </div>
        <div class="progressBox">
          <div class="progress">
            <div class="left">
              <div class="line"></div>
            </div>
            <div class="middle">
              <button
                :class="{ active: selectedPos === 'skillPos' }"
                @click="togglePos('skillPos')"
              >
                <span class="name">{{
                  $t('LOL__TUTORIAL__SKILL__SKILL')
                }}</span>
                <span class="optionBulletContainer">
                  <span
                    :class="['bullet', { active: selectedPos === 'skillPos' }]"
                  ></span>
                </span>
              </button>
              <button
                :class="{ active: selectedPos === 'summonerSkillPos' }"
                @click="togglePos('summonerSkillPos')"
              >
                <span class="name">{{
                  $t('LOL__TUTORIAL__SKILL__SUMMONER_SKILL')
                }}</span>
                <span class="optionBulletContainer">
                  <span
                    :class="[
                      'bullet',
                      { active: selectedPos === 'summonerSkillPos' },
                    ]"
                  ></span>
                </span>
              </button>
              <button
                :class="{ active: selectedPos === 'equipmentPos' }"
                @click="togglePos('equipmentPos')"
              >
                <span class="name">{{
                  $t('LOL__TUTORIAL__SKILL__EQUIPMENT')
                }}</span>
                <span class="optionBulletContainer">
                  <span
                    :class="[
                      'bullet',
                      { active: selectedPos === 'equipmentPos' },
                    ]"
                  ></span>
                </span>
              </button>
              <div class="lightPoint">
                <div :class="['frame', selectedPos]">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="progressBoxContent">
          {{ $t('LOL__TUTORIAL__SKILL__SKILL_DESC') }}
        </div>
        <div
          :class="[
            'characterColumn',
            {
              left: selectedPos === 'skillPos',
              middle: selectedPos === 'summonerSkillPos',
              right: selectedPos === 'equipmentPos',
            },
          ]"
        >
          <img :src="`${CDN}/tutorial/skill-1.png`" />
          <img :src="`${CDN}/tutorial/skill-2.png`" />
          <img :src="`${CDN}/tutorial/skill-3.png`" />
          <img
            :class="['skillImg', { active: selectedPos === 'skillPos' }]"
            :src="`${CDN}/tutorial/skill-4.png`"
            @click="togglePos('skillPos')"
          />
          <img
            :class="[
              'summonerSpellsImg',
              { active: selectedPos === 'summonerSkillPos' },
            ]"
            :src="`${CDN}/tutorial/skill-5.png`"
            @click="togglePos('summonerSkillPos')"
          />
          <img
            :class="['itemsImg', { active: selectedPos === 'equipmentPos' }]"
            :src="`${CDN}/tutorial/skill-6.png`"
            @click="togglePos('equipmentPos')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'debounce';
import utils from '@/utils';

export default {
  name: 'TutorialPage',
  data() {
    return {
      CDN: process.env.CDN,
      optionItems: [
        {
          topic: 'LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE',
          desc: 'LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC',
        },
        {
          topic: 'LOL__TUTORIAL__CHAMPION__EARN_MONEY',
          desc: 'LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC',
        },
        {
          topic: 'LOL__TUTORIAL__CHAMPION__SHOP',
          desc: 'LOL__TUTORIAL__CHAMPION__SHOP_DESC',
        },
      ],
      selectedItemIndex: 0,
      selectedPos: 'skillPos',
      isLeave: false,
      mapContents: [
        {
          currentIndex: 0,
          topic: 'LOL__TUTORIAL__MAP_CONTENT_1__TOPIC',
          desc: 'LOL__TUTORIAL__MAP_CONTENT_1__DESC',
          subContents: [
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2',
            },
          ],
        },
        {
          currentIndex: 0,
          topic: 'LOL__TUTORIAL__MAP_CONTENT_2__TOPIC',
          desc: 'LOL__TUTORIAL__MAP_CONTENT_2__DESC',
          subContents: [
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2',
            },
          ],
        },
        {
          currentIndex: 0,
          topic: 'LOL__TUTORIAL__MAP_CONTENT_3__TOPIC',
          desc: 'LOL__TUTORIAL__MAP_CONTENT_3__DESC',
          subContents: [
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2',
            },
          ],
        },
        {
          currentIndex: 0,
          topic: 'LOL__TUTORIAL__MAP_CONTENT_4__TOPIC',
          desc: 'LOL__TUTORIAL__MAP_CONTENT_4__DESC',
          subContents: [
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4',
            },
            {
              topic: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5',
              desc: 'LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5',
            },
          ],
        },
      ],
      currentMapSectionAnchor: 0, // 0, 1, 2, 3
      selectedChampionVideoUrl: `${process.env.CDN}/tutorial/championVideo1.mp4`,
      championVideos: [
        `${process.env.CDN}/tutorial/championVideo1.mp4`,
        `${process.env.CDN}/tutorial/championVideo2.mp4`,
      ],
    };
  },
  computed: {
    titleWrapper() {
      return this.$refs.titleWrapper;
    },
    videoAnchorPoint() {
      return this.$refs.videoAnchorPoint;
    },
    videoBox() {
      return this.$refs.videoBox;
    },
    videoContent() {
      return this.$refs.videoContent;
    },
    interactiveWrapper() {
      return this.$refs.interactiveWrapper;
    },
    mobileMapWrapper() {
      return this.$refs.mobileMapWrapper;
    },
    championVideo() {
      return this.$refs.championVideo;
    },
    swiperOptions() {
      return this.mapContents.map((el, index) => {
        return {
          speed: 800,
          navigation: {
            nextEl: `.nextBtn${index}`,
            prevEl: `.prevBtn${index}`,
          },
        };
      });
    },
  },
  mounted() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
    window.particlesJS('canvasSection', {
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: ['#60C7F0'],
        },
        shape: {
          type: 'edge',
          stroke: {
            width: 0,
            color: '#000000',
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.2,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 2,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 4,
          direction: 'top',
          random: true,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: true,
            rotateX: 1000,
            rotateY: 1000,
          },
        },
      },

      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'bubble',
          },
          onclick: {
            enable: false,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 300,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 100,
            size: 7.5,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 1,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
    this.handleScroll();
    this.handleMapScale();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.handleMapAnchor);
    window.addEventListener('resize', this.handleMapScale);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.handleMapAnchor);
    window.removeEventListener('resize', this.handleMapScale);
  },
  methods: {
    scrollToVideo() {
      const videoSection = this.$refs.videoAnchorPoint;
      window.scrollTo({
        top: videoSection.offsetTop + 300,
        behavior: 'smooth',
      });
    },
    toggleItemIndex(index) {
      if (this.selectedItemIndex === index) return;
      if (index === 0 || index === 1) {
        // video
        this.selectedChampionVideoUrl = this.championVideos[index];
        utils.resetAnimation({ className: 'fadeIn' });
        this.championVideo.load();
      }
      this.selectedItemIndex = index;
    },
    togglePos(type) {
      this.selectedPos = type;
    },
    handleScroll: debounce(function () {
      const scrollHeight = window.pageYOffset;
      const navHeight =
        document.getElementById('header') &&
        document.getElementById('header').clientHeight;
      // handleTitleWrapper
      const titlePosY =
        window.pageYOffset * this.titleWrapper.dataset.ratey * -1;
      this.titleWrapper.style.transform = `perspective(1000px) translate3d(0px, ${
        titlePosY / 50
      }px, 0px)`;

      // handleVideoBox
      if (navHeight) {
        if (window.innerWidth > 750) {
          if (scrollHeight - navHeight > this.videoAnchorPoint.offsetTop) {
            this.videoBox.classList.remove('hide');
          } else {
            this.videoBox.classList.add('hide');
          }
        } else if (
          scrollHeight >
          this.videoAnchorPoint.offsetTop + window.innerWidth / 2
        ) {
          this.videoBox.classList.remove('hide');
        } else {
          this.videoBox.classList.add('hide');
        }
      }

      // handleVideoContent
      const contentPosY =
        window.pageYOffset * this.videoContent.dataset.ratey * -1;
      this.videoContent.style.transform = `perspective(1000px) translate3d(0px, ${
        contentPosY / 50
      }px, 0px)`;

      // handleBgLayer
      const target = document.querySelectorAll('.parallaxLayer');
      const { length } = target;
      let i = 0;
      for (i; i < length; i++) {
        const posY = window.pageYOffset * target[i].dataset.ratey;
        const posZ = window.pageYOffset * target[i].dataset.ratez;
        if (posY > 2500) break;
        target[i].style.transform = `perspective(1000px) translate3d(0px, ${
          posY / 150
        }px, ${posZ / 150}px)`;
      }
    }, 5),
    handleMapAnchor: debounce(function () {
      const mapSectionTopHeight =
        document.querySelector('.mapSection') &&
        document.querySelector('.mapSection').offsetTop;
      const sections = document.querySelectorAll('.mapSection .leftSection');
      if (mapSectionTopHeight && sections) {
        if (window.pageYOffset > mapSectionTopHeight) {
          for (let i = 0; i < sections.length; i++) {
            if (
              window.pageYOffset -
                mapSectionTopHeight -
                sections[i].offsetHeight / 2.5 <
              sections[i].offsetTop
            ) {
              this.currentMapSectionAnchor = i;
              break;
            }
          }
        }
      }
    }, 10),
    handleMapScale() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1920) {
        this.interactiveWrapper.style.transform = `scale3d(1, 1, 1)`;
      } else if (windowWidth < 1920 && windowWidth >= 1000) {
        const offset = windowWidth / 1920;
        this.interactiveWrapper.style.transform = `scale3d(${offset}, ${offset}, 1)`;
      } else if (windowWidth < 1000) {
        const offset = windowWidth / 1400;
        for (let i = 0; i < this.mobileMapWrapper.length; i++) {
          this.mobileMapWrapper[
            i
          ].style.transform = `scale3d(${offset}, ${offset}, 1)`;
        }
      }
    },
    slideChange(i) {
      const [swiperInstance] = this.$refs[`mySwiper${i}`];
      const { activeIndex } = swiperInstance.$swiper;
      this.$set(this.mapContents[i], 'currentIndex', activeIndex);
    },
    slideSwiper(swiperIndex, pageIndex) {
      const [swiperInstance] = this.$refs[`mySwiper${swiperIndex}`];
      swiperInstance.$swiper.slideTo(pageIndex, 1000, false);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(150px);
  }
}

@keyframes rotateCircle {
  from {
    transform: rotate(30deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.hide {
  opacity: 0;
}

.fadeUp {
  animation: fade-up 0.4s ease-out;
}

#tutorialPageContent {
  width: 100%;
  position: relative;
  .titleSection {
    padding-top: 0.7rem;
    box-sizing: border-box;
    @include position(absolute, $left: 0, $right: 0);
    z-index: 8;
    @include rwd($sm) {
      padding-top: 0.45rem;
    }
    .titleWrapper {
      .smallTitle {
        font-size: 0.24rem;
        font-weight: 600;
        @include rwd($sm) {
          font-size: 0.3rem;
        }
      }
      .title {
        font-size: 1.2rem;
        @include rwd($sm) {
          font-size: 0.8rem;
        }
      }
    }
    .description {
      margin-top: 0.3rem;
      font-size: 0.16rem;
      @include rwd($sm) {
        margin-top: 0.1rem;
        font-size: 0.25rem;
      }
    }
    .btn {
      width: 1.7rem;
      height: 0.48rem;
      line-height: 0.48rem;
      margin: 0.4rem auto 0;
      font-size: 0.2rem;
      font-weight: 600;
      background: #cfa85b;
      cursor: pointer;
      position: relative;
      @include rwd($sm) {
        margin: 0.6rem auto 0;
      }
      svg {
        @include position(absolute, $top: -0.05rem, $left: -0.05rem);
        @include svgBorder(180, 58, #dbd1bd);
      }
    }
  }

  #canvasSection {
    width: 100%;
    @include position(absolute, $top: 20vh, $left: 0);
    z-index: 7;
    mix-blend-mode: screen;
    @include rwd($sm) {
      top: 45vh;
    }
  }

  .bg {
    position: relative;
    width: 100%;
    height: 14.2rem;
    background: white;
    perspective-origin: 50% 75%;
    z-index: 3;
    perspective: 100px;
    overflow: hidden auto;
    @include rwd($sm) {
      height: 6.8rem;
      top: 3rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    #particles {
      width: 100%;
      @include position(absolute, $top: 0, $left: 0);
      z-index: 7;
    }
    .b1 {
      background: assetsUrl('tutorial/bg1.png') no-repeat;
    }
    .b2 {
      background: assetsUrl('tutorial/bg2.png') no-repeat;
    }
    .b3 {
      background: assetsUrl('tutorial/bg3.png') no-repeat;
    }
    .b4 {
      background: assetsUrl('tutorial/bg4.png') no-repeat;
    }
    .b5 {
      background: assetsUrl('tutorial/bg5.png') no-repeat;
    }
    .b6 {
      background: assetsUrl('tutorial/bg6.png') no-repeat;
    }
    .b7 {
      background: assetsUrl('tutorial/bg7.png') no-repeat;
    }
    .b1,
    .b2,
    .b3,
    .b4,
    .b5,
    .b6,
    .b7 {
      @include position(absolute, $left: 0, $bottom: 0);
      width: 100%;
      height: 85%;
      background-size: cover;
      will-change: transform;
      background-repeat: no-repeat;
      background-position: 50% 0%;
      transition: transform 0.2s;
    }
  }

  .videoSection {
    width: 100%;
    height: 220vh;
    height: 200vh;
    color: white;
    background: #07121b;
    position: relative;
    margin-top: -50vh;
    @include rwd($sm) {
      // margin-top: -70vh;
      // top: -25vh;
      margin-top: 0;
    }
    .videoBg {
      width: 100%;
      height: 100%;
      // background: #09121B;
      // background-image: linear-gradient(white, #09121B)
      @include position(absolute, $bottom: 0);
    }
    .videoBox {
      position: sticky;
      top: 0;
      transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
      z-index: 3;
      .box {
        position: relative;
        video {
          width: calc(100vw - 0.18rem);
          height: 100vh;
          display: block;
        }
        .content {
          @include position(absolute, $top: 57%, $left: 0, $right: 0);
          .title {
            width: 43%;
            font-size: 0.72rem;
            font-weight: 600;
            margin: 0 auto 0.15rem;
            @include rwd($md) {
              width: 100%;
            }
          }
          .desc {
            width: 7rem;
            font-size: 0.17rem;
            margin: auto;
            @include rwd($sm) {
              font-size: 0.26rem;
            }
          }
        }
      }
    }
  }

  .mapSection {
    width: 100%;
    height: 420vh;
    position: relative;
    @include rwd($md) {
      // height: 400vh;
      height: auto;
    }
    @include rwd($sm) {
      height: auto;
    }
    .mapBg {
      position: sticky;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100vh;
      background: #09121b;
      overflow: hidden;
      @include rwd($md) {
        display: none;
      }
      .interactiveSection {
        width: 100%;
        height: 100%;
        z-index: 1000;
        position: sticky;
        top: 0;
        .interactiveWrapper {
          position: relative;
          width: 100%;
          height: 100%;
          margin-left: 15%;
          .interactiveContent {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 1028px;
            height: 640px;
            transform: translate(-50%, -50%);
            .interactiveBg {
              position: absolute;
              background: #09121b assetsUrl('tutorial/map-lg.png') no-repeat;
              width: 2000px;
              height: 1244px;
              left: -517px;
              top: -182px;
              background-position: center center;
              background-size: 100% 100%;
            }
            .fade-enter-active,
            .fade-leave-active {
              transition: opacity 0.5s;
            }
            .fade-enter,
            .fade-leave-to {
              opacity: 0;
            }
            .sectionLayer {
              .blueBox,
              .redBox,
              .turretsBox,
              .inhibitorsBox,
              .baronNashorBox,
              .drakesBox,
              .topLaneBox,
              .jungleBox,
              .midLaneBox,
              .botLaneBox,
              .supportBox {
                position: absolute;
                width: 100%;
                height: 100%;
                &.active {
                  svg {
                    opacity: 0;
                    pointer-events: none;
                  }
                  .circle,
                  .enlargeImg {
                    opacity: 1;
                  }
                }
              }
              svg,
              .circle,
              .enlargeImg {
                transition: opacity 500ms ease-in-out;
              }
              svg {
                &.svgCross {
                  width: 15px;
                  height: 15px;
                }
                &.svgCircle {
                  width: 60px;
                  height: 60px;
                }
                opacity: 1;
                fill: rgb(255, 255, 255);
                cursor: pointer;
                z-index: 2;
                position: absolute;
              }
              .circle {
                width: 190px;
                height: 190px;
                opacity: 0;
                z-index: 1;
                &.rotateAnimation {
                  animation: rotateCircle 0.5s ease forwards;
                }
              }
              .enlargeImg {
                width: 158px;
                height: 148px;
                border-radius: 50%;
                opacity: 0;
                z-index: 0;
                background-position: center center !important;
                background-size: cover !important;
                animation: rotateCircle 0.5s ease forwards;
              }
            }
            .section0 {
              .blueBox {
                svg {
                  &.svgCross {
                    @include position(absolute, $top: 84.5%, $left: 9.6%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 81.5%, $left: 7.5%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 69%, $left: 1.2%);
                  background: assetsUrl('tutorial/blue_circle.png') no-repeat;
                  background-size: 100% 100%;
                }
                .enlargeImg {
                  @include position(absolute, $top: 73.5%, $left: 2.7%);
                  background: assetsUrl('tutorial/blue_nexus.jpg') no-repeat;
                }
              }
              .redBox {
                svg {
                  &.svgCross {
                    @include position(absolute, $top: 5.1%, $left: 83.5%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 2.2%, $left: 81.4%);
                  }
                }
                .circle {
                  @include position(absolute, $top: -8.8%, $left: 75%);
                  background: assetsUrl('tutorial/red_circle.png') no-repeat;
                  background-size: 100% 100%;
                }
                .enlargeImg {
                  @include position(absolute, $top: -4.3%, $left: 76.5%);
                  background: assetsUrl('tutorial/red_nexus.jpg') no-repeat;
                }
              }
            }
            .section1 {
              .turretsBox {
                svg {
                  &.svgCross {
                    @include position(absolute, $top: 31.7%, $left: 61.6%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 28.5%, $left: 59.4%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 15.8%, $left: 52.8%);
                  background: assetsUrl('tutorial/red_circle.png') no-repeat;
                  background-size: 100% 100%;
                }
                .enlargeImg {
                  @include position(absolute, $top: 20.3%, $left: 54.3%);
                  background: assetsUrl('tutorial/turrets.jpg') no-repeat;
                }
              }
              .inhibitorsBox {
                svg {
                  &.svgCross {
                    @include position(absolute, $top: 13.2%, $left: 75.4%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 10.1%, $left: 73.2%);
                  }
                }
                .circle {
                  @include position(absolute, $top: -1.5%, $left: 67.2%);
                  background: assetsUrl('tutorial/red_circle.png') no-repeat;
                  background-size: 100% 100%;
                }
                .enlargeImg {
                  @include position(absolute, $top: 3%, $left: 68.7%);
                  background: assetsUrl('tutorial/inhibitors.jpg') no-repeat;
                }
              }
            }
            .section2 {
              .baronNashorBox {
                svg {
                  &.svgCross {
                    @include position(absolute, $top: 17.9%, $left: 38.8%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 15%, $left: 36.7%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 3.5%, $left: 30.6%);
                  background: assetsUrl('tutorial/blue_circle.png') no-repeat;
                  background-size: 100% 100%;
                }
                .enlargeImg {
                  @include position(absolute, $top: 8%, $left: 32.1%);
                  background: assetsUrl('tutorial/baron.jpg') no-repeat;
                }
              }
              .drakesBox {
                svg {
                  &.svgCross {
                    @include position(absolute, $top: 62.5%, $left: 69.4%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 59.6%, $left: 67.2%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 47.8%, $left: 61.4%);
                  background: assetsUrl('tutorial/blue_circle.png') no-repeat;
                  background-size: 100% 100%;
                }
                .enlargeImg {
                  @include position(absolute, $top: 52.3%, $left: 62.9%);
                  background: assetsUrl('tutorial/drakes.jpg') no-repeat;
                }
              }
            }
            .section3 {
              .topLaneBox,
              .jungleBox,
              .midLaneBox,
              .botLaneBox,
              .supportBox {
                svg {
                  &.svgRoute {
                    transform: scale(0.25, 0.25);
                  }
                }
                .circle {
                  width: 120px;
                  height: 120px;
                }
              }
              .topLaneBox {
                svg {
                  &.svgRoute {
                    @include position(absolute, $top: -1.7%, $left: 14.3%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 4%, $left: 23.5%);
                  }
                }
                .circle {
                  @include position(absolute, $top: -0.8%, $left: 20.4%);
                  background: assetsUrl('tutorial/UI_top-2.png') no-repeat;
                  background-size: 100% 100%;
                }
              }
              .jungleBox {
                svg {
                  &.svgRoute {
                    @include position(absolute, $top: 29.5%, $left: 24.6%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 35%, $left: 33.8%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 30.4%, $left: 30.7%);
                  background: assetsUrl('tutorial/UI_jungle-2.png') no-repeat;
                  background-size: 100% 100%;
                }
              }
              .midLaneBox {
                svg {
                  &.svgRoute {
                    @include position(absolute, $top: 30.3%, $left: 41.6%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 36%, $left: 50.8%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 30.4%, $left: 47.7%);
                  background: assetsUrl('tutorial/UI_mid-2.png') no-repeat;
                  background-size: 100% 100%;
                }
              }
              .botLaneBox {
                svg {
                  &.svgRoute {
                    @include position(absolute, $top: 74%, $left: 78.6%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 79.5%, $left: 87.8%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 74.9%, $left: 84.7%);
                  background: assetsUrl('tutorial/UI_bot-2.png') no-repeat;
                  background-size: 100% 100%;
                }
              }
              .supportBox {
                svg {
                  &.svgRoute {
                    @include position(absolute, $top: 82%, $left: 55.6%);
                  }
                  &.svgCircle {
                    @include position(absolute, $top: 87.5%, $left: 64.9%);
                  }
                }
                .circle {
                  @include position(absolute, $top: 82.9%, $left: 61.8%);
                  background: assetsUrl('tutorial/UI_support-2.png') no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
      }
    }

    .leftSection {
      // width: 32%;
      width: 5rem;
      height: auto;
      text-align: left;
      z-index: 2;
      position: relative;
      box-sizing: border-box;
      padding-top: 10vh;
      overflow: hidden;
      @include rwd($md) {
        width: 100%;
        height: 100vh;
        padding-top: 0;
        background: #09121b assetsUrl('tutorial/map-md.png') no-repeat;
        background-position: top center;
      }
      @include rwd($sm) {
        background: #09121b;
        // height: calc(100vh - 1rem);
      }
      &.isFirst {
        position: absolute;
        left: 0px;
        top: 25vh;
        @include rwd($md) {
          position: relative;
          left: unset;
          top: unset;
        }
      }
      &:not(.isFirst) {
        margin-top: 25vh;
        @include rwd($md) {
          margin-top: 0;
        }
        .mobileMapWrapper {
          .wrapper {
            // @include rwd($sm) {
            //   top: -25%;
            // }
          }
        }
        // .content {
        //   top: 53vh;
        // }
      }
      .mobileMapWrapper {
        @include position(absolute, $left: 0, $right: 0);
        // position: relative;
        height: 100%;
        .wrapper {
          display: none;
          @include rwd($md) {
            display: block;
            position: absolute;
            left: 50%;
            top: 25%;
            width: 1028px;
            height: 640px;
            transform: translate(-50%, -50%);
          }
          @include rwd($sm) {
            top: 10%;
          }
          .bg {
            position: absolute;
            width: 2000px;
            height: 1244px;
            left: -517px;
            top: -182px;
            z-index: 0;
            @include rwd($md) {
              background: #09121b assetsUrl('tutorial/map-md.png') no-repeat;
              background-size: 100% 100%;
              background-position: center center;
            }
            @include rwd($sm) {
              background: #09121b assetsUrl('tutorial/map-sm.png') no-repeat;
              background-size: 100% 100%;
              background-position: center center;
            }
          }
          .m-sectionLayer {
            .blueBox,
            .redBox,
            .turretsBox,
            .inhibitorsBox,
            .baronNashorBox,
            .drakesBox,
            .topLaneBox,
            .jungleBox,
            .midLaneBox,
            .botLaneBox,
            .supportBox {
              position: absolute;
              width: 100%;
              height: 100%;
              &.active {
                svg {
                  opacity: 0;
                  pointer-events: none;
                }
                .circle,
                .enlargeImg {
                  opacity: 1;
                }
              }
            }
            svg,
            .circle,
            .enlargeImg {
              transition: opacity 500ms ease-in-out;
            }
            svg {
              &.svgCross {
                width: 15px;
                height: 15px;
              }
              &.svgCircle {
                width: 60px;
                height: 60px;
              }
              opacity: 1;
              fill: rgb(255, 255, 255);
              cursor: pointer;
              z-index: 2;
              position: absolute;
            }
            .circle {
              width: 190px;
              height: 190px;
              opacity: 0;
              z-index: 1;
              &.rotateAnimation {
                animation: rotateCircle 0.5s ease forwards;
              }
            }
            .enlargeImg {
              width: 158px;
              height: 148px;
              border-radius: 50%;
              opacity: 0;
              z-index: 0;
              background-position: center center !important;
              background-size: cover !important;
              animation: rotateCircle 0.5s ease forwards;
            }

            .blueBox {
              svg {
                &.svgCross {
                  @include position(absolute, $top: 84.5%, $left: 9.6%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 81.5%, $left: 7.5%);
                }
              }
              .circle {
                @include position(absolute, $top: 69%, $left: 1.2%);
                background: assetsUrl('tutorial/blue_circle.png') no-repeat;
                background-size: 100% 100%;
              }
              .enlargeImg {
                @include position(absolute, $top: 73.5%, $left: 2.7%);
                background: assetsUrl('tutorial/blue_nexus.jpg') no-repeat;
              }
            }
            .redBox {
              svg {
                &.svgCross {
                  @include position(absolute, $top: 5.1%, $left: 83.5%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 2.2%, $left: 81.4%);
                }
              }
              .circle {
                @include position(absolute, $top: -8.8%, $left: 75%);
                background: assetsUrl('tutorial/red_circle.png') no-repeat;
                background-size: 100% 100%;
              }
              .enlargeImg {
                @include position(absolute, $top: -4.3%, $left: 76.5%);
                background: assetsUrl('tutorial/red_nexus.jpg') no-repeat;
              }
            }
            .turretsBox {
              svg {
                &.svgCross {
                  @include position(absolute, $top: 31.7%, $left: 61.6%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 28.5%, $left: 59.4%);
                }
              }
              .circle {
                @include position(absolute, $top: 15.8%, $left: 52.8%);
                background: assetsUrl('tutorial/red_circle.png') no-repeat;
                background-size: 100% 100%;
              }
              .enlargeImg {
                @include position(absolute, $top: 20.3%, $left: 54.3%);
                background: assetsUrl('tutorial/turrets.jpg') no-repeat;
              }
            }
            .inhibitorsBox {
              svg {
                &.svgCross {
                  @include position(absolute, $top: 13.2%, $left: 75.4%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 10.1%, $left: 73.2%);
                }
              }
              .circle {
                @include position(absolute, $top: -1.5%, $left: 67.2%);
                background: assetsUrl('tutorial/red_circle.png') no-repeat;
                background-size: 100% 100%;
              }
              .enlargeImg {
                @include position(absolute, $top: 3%, $left: 68.7%);
                background: assetsUrl('tutorial/inhibitors.jpg') no-repeat;
              }
            }
            .baronNashorBox {
              svg {
                &.svgCross {
                  @include position(absolute, $top: 17.9%, $left: 38.8%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 15%, $left: 36.7%);
                }
              }
              .circle {
                @include position(absolute, $top: 3.5%, $left: 30.6%);
                background: assetsUrl('tutorial/blue_circle.png') no-repeat;
                background-size: 100% 100%;
              }
              .enlargeImg {
                @include position(absolute, $top: 8%, $left: 32.1%);
                background: assetsUrl('tutorial/baron.jpg') no-repeat;
              }
            }
            .drakesBox {
              svg {
                &.svgCross {
                  @include position(absolute, $top: 62.5%, $left: 69.4%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 59.6%, $left: 67.2%);
                }
              }
              .circle {
                @include position(absolute, $top: 47.8%, $left: 61.4%);
                background: assetsUrl('tutorial/blue_circle.png') no-repeat;
                background-size: 100% 100%;
              }
              .enlargeImg {
                @include position(absolute, $top: 52.3%, $left: 62.9%);
                background: assetsUrl('tutorial/drakes.jpg') no-repeat;
              }
            }
            .topLaneBox,
            .jungleBox,
            .midLaneBox,
            .botLaneBox,
            .supportBox {
              svg {
                &.svgRoute {
                  transform: scale(0.25, 0.25);
                }
              }
              .circle {
                width: 120px;
                height: 120px;
              }
            }
            .topLaneBox {
              svg {
                &.svgRoute {
                  @include position(absolute, $top: -1.7%, $left: 14.3%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 4%, $left: 23.5%);
                }
              }
              .circle {
                @include position(absolute, $top: -0.8%, $left: 20.4%);
                background: assetsUrl('tutorial/UI_top-2.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            .jungleBox {
              svg {
                &.svgRoute {
                  @include position(absolute, $top: 29.5%, $left: 24.6%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 35%, $left: 33.8%);
                }
              }
              .circle {
                @include position(absolute, $top: 30.4%, $left: 30.7%);
                background: assetsUrl('tutorial/UI_jungle-2.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            .midLaneBox {
              svg {
                &.svgRoute {
                  @include position(absolute, $top: 30.3%, $left: 41.6%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 36%, $left: 50.8%);
                }
              }
              .circle {
                @include position(absolute, $top: 30.4%, $left: 47.7%);
                background: assetsUrl('tutorial/UI_mid-2.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            .botLaneBox {
              svg {
                &.svgRoute {
                  @include position(absolute, $top: 74%, $left: 78.6%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 79.5%, $left: 87.8%);
                }
              }
              .circle {
                @include position(absolute, $top: 74.9%, $left: 84.7%);
                background: assetsUrl('tutorial/UI_bot-2.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            .supportBox {
              svg {
                &.svgRoute {
                  @include position(absolute, $top: 82%, $left: 55.6%);
                }
                &.svgCircle {
                  @include position(absolute, $top: 87.5%, $left: 64.9%);
                }
              }
              .circle {
                @include position(absolute, $top: 82.9%, $left: 61.8%);
                background: assetsUrl('tutorial/UI_support-2.png') no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }

      .content {
        color: white;
        padding-left: 10%;
        @include rwd($md) {
          padding: 5%;
          @include position(absolute, $left: 0, $right: 0, $top: 53vh);
          position: absolute;
        }
        @include rwd($sm) {
          top: 0;
          padding-top: 57vh;
          position: relative;
          pointer-events: none;
        }
        .top {
          width: 100%;
          padding: 0 6%;
          margin-bottom: 20%;
          @include rwd($md) {
            padding: 0 2%;
            margin-bottom: 3%;
          }
          .topic {
            font-size: 0.6rem;
            font-weight: 600;
            margin-bottom: 0.1rem;
            letter-spacing: -0.05rem;
            @include withRegion('vn') {
              letter-spacing: 0;
            }
            @include rwd($md) {
              font-size: 0.36rem;
              letter-spacing: 0;
            }
            @include rwd($sm) {
              font-size: 0.4rem;
              margin-bottom: 0.15rem;
            }
          }
          .desc {
            font-size: 0.17rem;
            @include rwd($sm) {
              font-size: 0.2rem;
              line-height: 0.25rem;
            }
          }
        }
        .bottom {
          // width: 100%;
          width: 4.5rem;
          padding: 6%;
          border: 1px solid rgb(93, 97, 102);
          position: relative;
          @include rwd($md) {
            width: 100%;
            padding: 4%;
          }
          @include rwd($sm) {
            pointer-events: visible;
          }
          .currentPage {
            color: rgb(93, 97, 102);
            font-size: 0.15rem;
            margin-bottom: 0.1rem;
            text-indent: 0.02rem;
            @include rwd($sm) {
              font-size: 0.22rem;
            }
          }
          .map_swiper .swiper-slide {
            min-height: 1.6rem;
            margin-bottom: 0.2rem;
            @include rwd($md) {
              min-height: 1rem;
              margin-bottom: 0.1rem;
            }
            h4 {
              font-size: 0.26rem;
              font-weight: 600;
              margin-bottom: 0.1rem;
              text-align: left;
              @include withRegion('vn') {
                margin-top: 0.1rem;
              }
            }
            p {
              font-size: 0.17rem;
              line-height: 0.26rem;
              text-align: left;
              @include rwd($sm) {
                font-size: 0.2rem;
                padding-bottom: 0.1rem;
              }
            }
          }
          .btnBox {
            @include rwd($md) {
              text-align: right;
            }
            button {
              width: 0.52rem;
              height: 0.52rem;
              border: none;
              background: none;
              cursor: pointer;
              position: relative;
              // 現在$md 跟LG 尺寸一樣 等圖出來要再多個MD 尺寸
              @include rwd($sm) {
                width: 0.7rem;
                height: 0.53rem;
              }
              &.prevBtn,
              &.nextBtn {
                svg {
                  @include position(absolute, 0, 0, 0, 0);
                  margin: auto;
                  &:nth-child(1) {
                    @include svgBorder(53, 53, #0cceef);
                    @include rwd($md) {
                      display: none;
                    }
                  }
                  &:nth-child(2) {
                    display: none;
                    @include svgBorder(54, 40, #0cceef);
                    @include rwd($md) {
                      display: block;
                    }
                    @include rwd($sm) {
                      display: none;
                    }
                  }
                  &:nth-child(3) {
                    display: none;
                    @include svgBorder(70, 53, #0cceef);
                    @include rwd($sm) {
                      display: block;
                    }
                  }
                }
              }
              &.prevBtn:hover,
              &.nextBtn:hover {
                svg {
                  fill: #13d8f6;
                }
              }
              .svgArrow {
                display: block;
                width: 0.2rem;
                height: 0.2rem;
                // 現在$md 跟LG 尺寸一樣 等圖出來要再多個MD 尺寸
                @include rwd($sm) {
                  width: 0.35rem;
                  height: 0.35rem;
                }
                fill: rgb(11, 198, 227);
                stroke: rgb(11, 198, 227);
                margin: auto;
                transition: fill 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                  stroke 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
              }
            }
          }
        }
      }
    }
  }

  .championSection {
    width: 100%;
    height: 8.8rem;
    @include rwd($md) {
      height: auto;
    }
    .title {
      font-size: 0.6rem;
      font-weight: 600;
      padding-top: 1.45rem;
      @include rwd($md) {
        padding-top: 0.85rem;
      }
      @include rwd($sm) {
        padding-top: 0.8rem;
      }
    }
    .description {
      width: 6.8rem;
      margin: 0.12rem auto 0;
      font-size: 0.16rem;
      line-height: 0.25rem;
      @include rwd($sm) {
        font-size: 0.25rem;
      }
    }
    .schematic {
      width: 13.2rem;
      height: 4.7rem;
      margin: 0.55rem auto 0;
      padding-top: 0.15rem;
      position: relative;
      @include rwd($md) {
        width: 10rem;
        height: auto;
      }
      @include rwd($sm) {
        width: 7.1rem;
        margin: 0.25rem auto 0;
      }
      .svgBorderBox {
        @include position(absolute, $top: 0.05rem, $left: 0.2rem);
        @include rwd($md) {
          left: 0.6rem;
        }
        @include rwd($sm) {
          left: 0.1rem;
        }
        svg {
          &:nth-child(1) {
            @include svgBorder(1300, 460, #c1c1c1);
            @include rwd($md) {
              display: none;
            }
          }
          &:nth-child(2) {
            display: none;
            @include rwd($md) {
              @include svgBorder(880, 500, #c1c1c1);
              display: block;
            }
            @include rwd($sm) {
              display: none;
            }
          }
          &:nth-child(3) {
            display: none;
            @include rwd($sm) {
              @include svgBorder(690, 395, #c1c1c1);
              display: block;
            }
          }
          path {
            fill: #c1c1c1;
          }
        }
      }
      video,
      img {
        margin: auto 0;
        width: 7.8rem;
        height: 4.4rem;
        object-fit: cover;
        // &.fadeIn {
        //   @include fadeIn(1.5s);
        // }
        @include rwd($md) {
          width: 9rem;
          height: 4.8rem;
        }
        @include rwd($sm) {
          width: 7.1rem;
          height: 3.78rem;
        }
      }
      .content {
        width: 5.1rem;
        height: 4.4rem;
        padding: 0.8rem 0.45rem;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        vertical-align: top;
        text-align: left;
        @include rwd($md) {
          width: 8.7rem;
          height: 3.4rem;
          padding: 0.2rem 0.45rem;
        }
        @include rwd($sm) {
          width: 7.1rem;
          padding: 0.2rem 0.15rem;
          height: auto;
        }
        .itemBox {
          padding: 0.25rem 0.2rem;
          &:nth-child(1),
          &:nth-child(2) {
            border-bottom: 1px solid black;
          }
          .topic {
            font-size: 0.17rem;
            font-weight: 600;
            padding: 0 0.75rem 0 0.2rem;
            cursor: pointer;
            position: relative;
            @include rwd($sm) {
              font-size: 0.29rem;
            }
            svg {
              width: 0.1rem;
              height: 0.1rem;
              @include position(absolute, $top: 0, $left: 0, $bottom: 0);
              margin: auto;
              fill: rgb(11, 198, 227);
              opacity: 0;
              transition: opacity 0.5s ease 0s;
              &.active {
                opacity: 1;
              }
            }
          }
          .desc {
            font-size: 0.14rem;
            line-height: 0.2rem;
            padding: 0.08rem 0 0 0.1rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out 0s;
            @include rwd($sm) {
              font-size: 0.23rem;
              line-height: 0.28rem;
            }
            &.active {
              max-height: 1.5rem;
              overflow-y: auto;
            }
          }
        }
      }
    }
  }

  .separate {
    width: 100%;
    height: 0.4rem;
    box-sizing: border-box;
    max-width: 10.8rem;
    display: flex;
    align-items: center;
    margin: auto;
    @include rwd($sm) {
      width: 6.8rem;
    }
    &:before {
      content: '';
      display: block;
      width: 10.7rem;
      height: 1px;
      background-color: rgb(193, 193, 193);
    }
    &:after {
      content: '';
      display: block;
      width: 10.7rem;
      height: 1px;
      background-color: rgb(193, 193, 193);
    }
    .box {
      width: 23px;
      flex: 0 0 auto;
      svg {
        position: relative;
        display: block;
        width: 100px;
        height: 13px;
        left: 50%;
        transform: translateX(-50%);
        .st0 {
          fill: rgb(193, 193, 193);
        }
        .st1 {
          fill: none;
          stroke: rgb(193, 193, 193);
          stroke-miterlimit: 10;
        }
      }
    }
  }

  .skillSection {
    width: 100%;
    height: 8.3rem;
    margin-top: 0.7rem;
    position: relative;
    @include rwd($sm) {
      overflow: hidden;
    }
    .bg1,
    .bg2 {
      width: 100%;
      height: 100%;
      @include position(absolute, 0, 0, 0, 0);
      margin: auto;
      background: assetsUrl('tutorial/skillBg-1.jpg') no-repeat;
      background-size: cover;
    }
    .bg2 {
      background: assetsUrl('tutorial/skillBg-2.png') no-repeat;
      background-size: cover;
    }
    .title {
      font-size: 0.6rem;
      font-weight: 600;
      position: relative;
    }
    .description {
      width: 8rem;
      margin: 0.15rem auto 0;
      font-size: 0.15rem;
      position: relative;
      @include rwd($sm) {
        width: 6.4rem;
      }
    }
    .progressBox {
      position: relative;
      max-width: 6rem;
      z-index: 1;
      margin: 0.4rem auto 0;
      .progress {
        width: 100%;
        display: flex;
        position: relative;
        .left {
          position: relative;
          // flex: 1;
          .line {
            width: 100%;
            height: 1px;
            @include position(absolute, $left: 0, $bottom: 0.17rem);
            background-color: rgb(186, 194, 204);
          }
        }
        .middle {
          position: relative;
          display: inline-flex;
          flex: 2;
          button {
            display: flex;
            flex-direction: column;
            -webkit-box-align: stretch;
            align-items: stretch;
            background-color: transparent;
            color: rgb(186, 194, 204);
            flex: 1 1 auto;
            padding: 12px;
            border-width: 0px;
            border-style: none;
            border-color: initial;
            border-image: initial;
            transition: color 300ms ease 0s;
            @include rwd($sm) {
              padding: 6px;
            }
            cursor: pointer;
            &.active {
              color: black;
            }
            &:hover {
              color: black;
              .optionBulletContainer .bullet {
                background: black;
              }
            }
            .name {
              font-size: 0.15rem;
              @include rwd($sm) {
                font-size: 12px;
              }
            }
            .optionBulletContainer {
              display: block;
              position: relative;
              width: calc(100% + 24px);
              margin-top: 8px;
              margin-left: -12px;
              z-index: 1;
              &:before,
              &:after {
                content: '';
                @include position(absolute, $bottom: 0.045rem);
                width: 50%;
                height: 1px;
                background-color: rgb(186, 194, 204);
                transition: width 0ms ease 0ms;
              }
              &:before {
                left: 0px;
                width: calc(50% - 10px);
                transition: width 240ms ease 360ms;
              }
              &:after {
                right: 0px;
                width: calc(50% - 10px);
                transition: width 240ms ease 360ms;
              }
              .bullet {
                display: block;
                width: 0.1rem;
                height: 0.1rem;
                margin: auto;
                background-color: rgb(186, 194, 204);
                border-radius: 50%;
                transition: background-color 300ms ease 0s;
                &.active {
                  opacity: 0;
                  color: rgb(1, 1, 1);
                  transition: opacity 240ms ease 360ms;
                }
              }
            }
          }
          .lightPoint {
            width: 70%;
            height: 2px;
            position: absolute;
            bottom: 0.15rem;
            left: 0;
            right: 0;
            margin: auto;
            .frame {
              width: 0.2rem;
              height: 0.2rem;
              margin: -0.1rem 0 0 -0.1rem;
              color: rgb(208, 168, 92);
              position: absolute;
              z-index: 1;
              will-change: left;
              transition: left 600ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
              border-width: 2px;
              border-style: solid;
              border-radius: 100%;
              @include rwd($sm) {
                margin: -0.05rem 0 0 -0.1rem;
              }
              &.skillPos {
                left: 0;
              }
              &.summonerSkillPos {
                left: 50%;
              }
              &.equipmentPos {
                left: 100%;
              }
              span {
                width: 0.1rem;
                height: 0.1rem;
                @include position(absolute, $top: 50%, $left: 50%);
                transform: translate(-50%, -50%);
                display: block;
                background-color: currentcolor;
                border-radius: 50%;
                transition: color 300ms ease 0s;
              }
            }
          }
        }
        .right {
          position: relative;
          // flex: 1;
          .line {
            width: 100%;
            height: 1px;
            @include position(absolute, $left: 0, $bottom: 0.17rem);
            background-color: rgb(186, 194, 204);
          }
        }
      }
    }
    .progressBoxContent {
      width: 5.5rem;
      font-size: 0.15rem;
      margin: 0.2rem auto 0;
      position: relative;
    }
    .characterColumn {
      width: 9.36rem;
      height: 1.9rem;
      margin: 0.9rem auto 0;
      position: relative;
      @include rwd($sm) {
        transition: left 600ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        &.left {
          left: 0;
        }
        &.middle {
          left: -1.5rem;
        }
        &.right {
          left: -3rem;
        }
      }
      img {
        @include position(absolute, $top: 0, $left: 0);
      }
      .skillImg,
      .summonerSpellsImg,
      .itemsImg {
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 300ms ease 0s;
        &.active {
          opacity: 1;
        }
        &:hover {
          opacity: 1;
        }
      }
      .skillImg {
        width: 3.66rem;
        height: 0.8rem;
        top: 0.32rem;
        left: 1.7rem;
        z-index: 1;
      }
      .summonerSpellsImg {
        width: 1.14rem;
        height: 0.58rem;
        top: 0.32rem;
        left: 5.4rem;
      }
      .itemsImg {
        width: 2.2rem;
        height: 1.1rem;
        top: 0.28rem;
        left: 6.88rem;
      }
    }
  }
}
</style>
