import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26eb9bf2 = () => interopDefault(import('../../pages/ban.vue' /* webpackChunkName: "pages/ban" */))
const _05da8fe0 = () => interopDefault(import('../../pages/champions/index.vue' /* webpackChunkName: "pages/champions/index" */))
const _1e3b3135 = () => interopDefault(import('../../pages/download.vue' /* webpackChunkName: "pages/download" */))
const _6d28c063 = () => interopDefault(import('../../pages/items.vue' /* webpackChunkName: "pages/items" */))
const _493b61fa = () => interopDefault(import('../../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _88c9af16 = () => interopDefault(import('../../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _9039167c = () => interopDefault(import('../../pages/serverStatus.vue' /* webpackChunkName: "pages/serverStatus" */))
const _006c390b = () => interopDefault(import('../../pages/tutorial.vue' /* webpackChunkName: "pages/tutorial" */))
const _1491cb06 = () => interopDefault(import('../../pages/news/articles/_content.vue' /* webpackChunkName: "pages/news/articles/_content" */))
const _5b6dd1f4 = () => interopDefault(import('../../pages/champions/_champion.vue' /* webpackChunkName: "pages/champions/_champion" */))
const _4981628e = () => interopDefault(import('../../pages/news/_category.vue' /* webpackChunkName: "pages/news/_category" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ban",
    component: _26eb9bf2,
    name: "ban___tw"
  }, {
    path: "/champions",
    component: _05da8fe0,
    name: "champions___tw"
  }, {
    path: "/download",
    component: _1e3b3135,
    name: "download___tw"
  }, {
    path: "/items",
    component: _6d28c063,
    name: "items___tw"
  }, {
    path: "/news",
    component: _493b61fa,
    name: "news___tw"
  }, {
    path: "/ph",
    component: _88c9af16,
    name: "index___ph"
  }, {
    path: "/serverStatus",
    component: _9039167c,
    name: "serverStatus___tw"
  }, {
    path: "/sg",
    component: _88c9af16,
    name: "index___sg"
  }, {
    path: "/th",
    component: _88c9af16,
    name: "index___th"
  }, {
    path: "/tutorial",
    component: _006c390b,
    name: "tutorial___tw"
  }, {
    path: "/vn",
    component: _88c9af16,
    name: "index___vn"
  }, {
    path: "/ph/ban",
    component: _26eb9bf2,
    name: "ban___ph"
  }, {
    path: "/ph/champions",
    component: _05da8fe0,
    name: "champions___ph"
  }, {
    path: "/ph/download",
    component: _1e3b3135,
    name: "download___ph"
  }, {
    path: "/ph/items",
    component: _6d28c063,
    name: "items___ph"
  }, {
    path: "/ph/news",
    component: _493b61fa,
    name: "news___ph"
  }, {
    path: "/ph/serverStatus",
    component: _9039167c,
    name: "serverStatus___ph"
  }, {
    path: "/ph/tutorial",
    component: _006c390b,
    name: "tutorial___ph"
  }, {
    path: "/sg/ban",
    component: _26eb9bf2,
    name: "ban___sg"
  }, {
    path: "/sg/champions",
    component: _05da8fe0,
    name: "champions___sg"
  }, {
    path: "/sg/download",
    component: _1e3b3135,
    name: "download___sg"
  }, {
    path: "/sg/items",
    component: _6d28c063,
    name: "items___sg"
  }, {
    path: "/sg/news",
    component: _493b61fa,
    name: "news___sg"
  }, {
    path: "/sg/serverStatus",
    component: _9039167c,
    name: "serverStatus___sg"
  }, {
    path: "/sg/tutorial",
    component: _006c390b,
    name: "tutorial___sg"
  }, {
    path: "/th/ban",
    component: _26eb9bf2,
    name: "ban___th"
  }, {
    path: "/th/champions",
    component: _05da8fe0,
    name: "champions___th"
  }, {
    path: "/th/download",
    component: _1e3b3135,
    name: "download___th"
  }, {
    path: "/th/items",
    component: _6d28c063,
    name: "items___th"
  }, {
    path: "/th/news",
    component: _493b61fa,
    name: "news___th"
  }, {
    path: "/th/serverStatus",
    component: _9039167c,
    name: "serverStatus___th"
  }, {
    path: "/th/tutorial",
    component: _006c390b,
    name: "tutorial___th"
  }, {
    path: "/vn/ban",
    component: _26eb9bf2,
    name: "ban___vn"
  }, {
    path: "/vn/champions",
    component: _05da8fe0,
    name: "champions___vn"
  }, {
    path: "/vn/download",
    component: _1e3b3135,
    name: "download___vn"
  }, {
    path: "/vn/items",
    component: _6d28c063,
    name: "items___vn"
  }, {
    path: "/vn/news",
    component: _493b61fa,
    name: "news___vn"
  }, {
    path: "/vn/serverStatus",
    component: _9039167c,
    name: "serverStatus___vn"
  }, {
    path: "/vn/tutorial",
    component: _006c390b,
    name: "tutorial___vn"
  }, {
    path: "/ph/news/articles/:content?",
    component: _1491cb06,
    name: "news-articles-content___ph"
  }, {
    path: "/sg/news/articles/:content?",
    component: _1491cb06,
    name: "news-articles-content___sg"
  }, {
    path: "/th/news/articles/:content?",
    component: _1491cb06,
    name: "news-articles-content___th"
  }, {
    path: "/vn/news/articles/:content?",
    component: _1491cb06,
    name: "news-articles-content___vn"
  }, {
    path: "/news/articles/:content?",
    component: _1491cb06,
    name: "news-articles-content___tw"
  }, {
    path: "/ph/champions/:champion",
    component: _5b6dd1f4,
    name: "champions-champion___ph"
  }, {
    path: "/ph/news/:category",
    component: _4981628e,
    name: "news-category___ph"
  }, {
    path: "/sg/champions/:champion",
    component: _5b6dd1f4,
    name: "champions-champion___sg"
  }, {
    path: "/sg/news/:category",
    component: _4981628e,
    name: "news-category___sg"
  }, {
    path: "/th/champions/:champion",
    component: _5b6dd1f4,
    name: "champions-champion___th"
  }, {
    path: "/th/news/:category",
    component: _4981628e,
    name: "news-category___th"
  }, {
    path: "/vn/champions/:champion",
    component: _5b6dd1f4,
    name: "champions-champion___vn"
  }, {
    path: "/vn/news/:category",
    component: _4981628e,
    name: "news-category___vn"
  }, {
    path: "/champions/:champion",
    component: _5b6dd1f4,
    name: "champions-champion___tw"
  }, {
    path: "/news/:category",
    component: _4981628e,
    name: "news-category___tw"
  }, {
    path: "/",
    component: _88c9af16,
    name: "index___tw"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
