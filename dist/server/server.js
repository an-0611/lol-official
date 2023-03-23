module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/ban","2":"pages/champions/_champion","3":"pages/champions/index","4":"pages/download","5":"pages/index","6":"pages/items","7":"pages/news/_category","8":"pages/news/articles/_content","9":"pages/news/index","10":"pages/serverStatus","11":"pages/tutorial"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return vueI18n; });
/* unused harmony export vueI18nLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return routesNameSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultLocaleRouteNameSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return strategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lazy; });
/* unused harmony export langDir */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return rootRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detectBrowserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differentDomains; });
/* unused harmony export seo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return vuex; });
/* unused harmony export parsePages */
/* unused harmony export pages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return beforeLanguageSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onLanguageSwitched; });
/* unused harmony export IS_UNIVERSAL_MODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCALE_CODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOCALE_ISO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE_DOMAIN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCALE_FILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_OPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return localeCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return trailingSlash; });
const vueI18n = {
  "silentTranslationWarn": true,
  "messages": {
    "tw": {
      "LOL__BAN_PAGE__BAN_STATUS": "封鎖狀態",
      "LOL__BAN_PAGE__LEVEL": "等級",
      "LOL__BAN_PAGE__ONE_MONTH": "最近一個月",
      "LOL__BAN_PAGE__REASON": "封鎖原因",
      "LOL__BAN_PAGE__SEARCH_SUMMONER": "搜尋召喚師",
      "LOL__BAN_PAGE__SUMMONER": "召喚師",
      "LOL__BAN_PAGE__THREE_MONTH": "最近三個月",
      "LOL__BAN_PAGE__TWO_MONTH": "最近兩個月",
      "LOL__BREADCRUMB_PAGE_NAME__BAN": "停權",
      "LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS": "停權名單",
      "LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS": "英雄",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION": "戰棋資訊",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC": "聯盟戰棋版本更新資訊",
      "LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD": "下載註冊",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT": "電競",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC": "電競相關資訊",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT": "活動",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC": "活動相關資訊",
      "LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT": "遊戲內容",
      "LOL__BREADCRUMB_PAGE_NAME__INDEX": "首頁",
      "LOL__BREADCRUMB_PAGE_NAME__INFO": "資訊",
      "LOL__BREADCRUMB_PAGE_NAME__INFO_DESC": "遊戲、系統與版本更新相關等資訊",
      "LOL__BREADCRUMB_PAGE_NAME__ITEMS": "道具",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION": "版本資訊",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC": "版本資訊詳細內容",
      "LOL__BREADCRUMB_PAGE_NAME__NEWS": "新聞",
      "LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS": "伺服器狀態",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM": "系統",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC": "系統相關資訊",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO": "影片",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC": "英雄聯盟影片",
      "LOL__CHAMPIONS_INNERPAGE_CHARACTER": "角色",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN": "刺客",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER": "鬥士",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE": "法師",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN": "射手",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT": "輔助",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK": "坦克",
      "LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN": "預設造型",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY": "難易度",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY": "簡單/普通/困難",
      "LOL__CHAMPIONS_INNERPAGE__E": "E",
      "LOL__CHAMPIONS_INNERPAGE__PASSIVE": "被動",
      "LOL__CHAMPIONS_INNERPAGE__Q": "Q",
      "LOL__CHAMPIONS_INNERPAGE__R": "R",
      "LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE": "技能介紹",
      "LOL__CHAMPIONS_INNERPAGE__SKIN": "造型",
      "LOL__CHAMPIONS_INNERPAGE__W": "W",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ALL": "全部",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN": "刺客",
      "LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER": "鬥士",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MAGE": "法師",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN": "射手",
      "LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT": "輔助",
      "LOL__CHAMPIONS_PAGE__CATEGORY_TANK": "坦克",
      "LOL__CHAMPIONS_PAGE__DESC": "我們有超過140個英雄並且還在持續增加，你可以用各種不同的方式精通他們，掌握並熟悉各種英雄吧！",
      "LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS": "沒有符合條件的英雄",
      "LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS": "搜尋英雄",
      "LOL__DOWNLOAD__ACCOUNT_APPLY_LINK": "https://google.com",
      "LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT": "更新檔",
      "LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC": "如果各位召喚師於更新時發生錯誤，可以試著用手動更新的方式來更新《英雄聯盟》。",
      "LOL__DOWNLOAD__CURRENT_VERSION__TOPIC": "當前版本更新檔",
      "LOL__DOWNLOAD__DRIVER__CONTENT_DESC": "為了維持《英雄聯盟》的最佳畫面表現，請定期更新顯卡驅動程式。尋找您需要的驅動程式。",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD": "AMD更新檔",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA": "NVIDIA驅動下載",
      "LOL__DOWNLOAD__DRIVER__TOPIC": "驅動程式",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_1": "2.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_2": "2 GB 以上",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_3": "Window XP SP3<br>Windows Vista<br>Window 7<br>(目前尚無法支援 Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_4": "內建顯示卡 HD3000 以上",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_5": "Windows 標準與相容",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1": "配備項目",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2": "基本配備",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3": "建議配備",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1": "CPU",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2": "主記憶體",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3": "作業系統",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4": "顯示卡",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5": "音效卡",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1": "3.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2": "4 GB 以上",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3": "Windows Vista (最新版本)<br>Window 7<br>(目前尚無法支援 Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4": "GeForce 8800 或更高等級",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5": "Windows 標準與相容",
      "LOL__DOWNLOAD__EAUIPMENT__TOPIC": "電腦配備需求",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_1": "更新日期",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_2": "適用版本號",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_3": "更新後版本號",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_4": "下載更新檔",
      "LOL__DOWNLOAD__HISTORY__TOPIC": "更新檔歷史清單",
      "LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC": "確認電腦目前所使用的版本，並下載對應的「手動更新檔」。",
      "LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC": "手動更新檔教學",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1": "帳號申請",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2": "遊戲下載",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3": "遊戲下載最快速",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1": "帳號申請",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2": "透過瀏覽器下載 (速度較慢)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3": "透過平台下載 (速度較快)",
      "LOL__FOOTER__COPYRIGHT": "Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. \"Demo\" and \"League of Legends\" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.",
      "LOL__FOOTER__LINKS__LINK_1_HREF": "////google.com/",
      "LOL__FOOTER__LINKS__LINK_1_NAME": "support",
      "LOL__FOOTER__LINKS__LINK_2_HREF": "//google.com/",
      "LOL__FOOTER__LINKS__LINK_2_NAME": "service",
      "LOL__FOOTER__LINKS__LINK_3_HREF": "//google.com/",
      "LOL__FOOTER__LINKS__LINK_3_NAME": "info",
      "LOL__FOOTER__LINKS__LINK_4_HREF": "//google.com/",
      "LOL__FOOTER__LINKS__LINK_4_NAME": "facebook",
      "LOL__FOOTER__LINKS__LINK_5_HREF": "FILL in region link5 url",
      "LOL__FOOTER__LINKS__LINK_5_NAME": "text-5",
      "LOL__FOOTER__PLAY_FOR_FREE__LINK": "/",
      "LOL__FOOTER__PLAY_FOR_FREE__TEXT": "免費遊玩",
      "LOL__ITEMS_PAGE__CATEGORY_ALL": "全部",
      "LOL__ITEMS_PAGE__CATEGORY_ATTACK": "攻擊",
      "LOL__ITEMS_PAGE__CATEGORY_DEFENSE": "防禦",
      "LOL__ITEMS_PAGE__CATEGORY_MAGIC": "魔法",
      "LOL__ITEMS_PAGE__CATEGORY_RUNSPEED": "跑速",
      "LOL__ITEMS_PAGE__CATEGORY_TOOL": "工具",
      "LOL__ITEMS_PAGE__FILTER__ARMOR": "物理防禦",
      "LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION": "物理穿透",
      "LOL__ITEMS_PAGE__FILTER__ATTACKSPEED": "攻速",
      "LOL__ITEMS_PAGE__FILTER__BOOTS": "鞋子",
      "LOL__ITEMS_PAGE__FILTER__CONSUMABLE": "消耗品",
      "LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION": "冷卻時間",
      "LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE": "爆擊",
      "LOL__ITEMS_PAGE__FILTER__DAMAGE": "物理攻擊",
      "LOL__ITEMS_PAGE__FILTER__GOLDPER": "金錢收入",
      "LOL__ITEMS_PAGE__FILTER__HEALTH": "生命值",
      "LOL__ITEMS_PAGE__FILTER__HEALTHREGEN": "生命回復",
      "LOL__ITEMS_PAGE__FILTER__LIFESTEAL": "吸血",
      "LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION": "魔法穿透",
      "LOL__ITEMS_PAGE__FILTER__MANA": "魔力值",
      "LOL__ITEMS_PAGE__FILTER__MANAREGEN": "魔力回復",
      "LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT": "其他跑速",
      "LOL__ITEMS_PAGE__FILTER__SPELLBLOCK": "魔法防禦",
      "LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE": "魔法攻擊",
      "LOL__ITEMS_PAGE__FILTER__VISION": "視野控制",
      "LOL__ITEMS_PAGE__NO_MAPPING_ITEMS": "沒有符合的道具",
      "LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS": "進階道具",
      "LOL__ITEMS_PAGE__POPUP__FORMULA": "合成公式",
      "LOL__ITEMS_PAGE__POPUP__ITEMS": "道具",
      "LOL__ITEMS_PAGE__SEARCH_ITEMS": "搜尋道具",
      "LOL__MAIN_PAGE__SYSTEM_MESSAGE": "系統訊息",
      "LOL__NEWS_PAGE__END": "已經到底了",
      "LOL__NEWS_PAGE__NO_MAPPING_NEWS": "沒有相關新聞",
      "LOL__NEWS_PAGE__SEARCH_PLACEHOLDER": "搜尋新聞主題",
      "LOL__NOT_FOUND__CONTENT": "沒有找到該頁面，點我回到首頁",
      "LOL__NOT_FOUND__TITLE": "404",
      "LOL__REMIND_TEXT__ONLY_TW_REGION": "※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href=\"https://google.com\" target=\"_blank\" rel=\"noreferrer noopener\" style=\"color: white\">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。",
      "LOL__SERVER_PAGE__CURRENT_EXCLUDE": "近期已排除",
      "LOL__SERVER_PAGE__CURRENT_STATUS": "當前狀態",
      "LOL__SERVER_PAGE__MALFUNCTION_MESSAGE": "故障訊息",
      "LOL__SERVER_PAGE__NORMAL_MESSAGE": "一般訊息",
      "LOL__SERVER_PAGE__SERVER_STATUS": "伺服器狀態",
      "LOL__SERVER_PAGE__WARNING_MESSAGE": "警示訊息",
      "LOL__TUTORIAL__CHAMPION__DESC": "英雄會隨著遊戲的進行變得更加強大，並透過賺取金錢來購買更強力的裝備。掌握這兩個關鍵，把握優勢對於壓制敵對並摧毀他們的基地來說是至關重要的。",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE": "賺取經驗",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC": "當英雄賺取一定經驗時，他們將會升級並且可以解鎖或強化技能，並獲得基礎數值的提升。通過擊殺敵方單位和英雄、獲得助攻和摧毀防禦塔來獲得經驗值。",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY": "賺取金錢",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC": "金錢是可以用來為你的英雄在遊戲內購買裝備的貨幣。透過擊殺敵方單位與英雄、參與擊殺、摧毀敵方建築物或裝備金錢收入裝備來賺取金錢。",
      "LOL__TUTORIAL__CHAMPION__SHOP": "商店",
      "LOL__TUTORIAL__CHAMPION__SHOP_DESC": "在商店，你可以用自己賺取的金錢買賣道具。 只有在重生平台旁才能使用它。",
      "LOL__TUTORIAL__CHAMPION__TOPIC": "強化你的英雄",
      "LOL__TUTORIAL__GET_START": "開始吧",
      "LOL__TUTORIAL__LEARN_BASIC": "從基礎學起",
      "LOL__TUTORIAL__MAP_CONTENT_1__DESC": "主堡是兩隊基地的核心。先摧毀敵方主堡的人將贏下遊戲。",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1": "主堡是小兵生成的地方。主堡後方式重生平台，你可以在重生平台快速回復生命與魔力，並且可以打開商店購物。",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2": "位於敵方基地中，敵方主堡就像我方主堡一樣。摧毀敵方主堡可以讓你的隊伍贏得勝利。",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1": "我方主堡",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2": "敵方主堡",
      "LOL__TUTORIAL__MAP_CONTENT_1__TOPIC": "摧毀基地",
      "LOL__TUTORIAL__MAP_CONTENT_2__DESC": "你的隊伍需要至少清理一條路線才能到達敵方主堡。在路線上阻礙你前進的是防禦塔與水晶兵營。每條路線有三座防禦塔與一座水晶兵營，而主堡則被兩座防禦塔保護著。",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1": "防禦塔會對敵方小兵與英雄造成傷害，並為自己的隊伍從戰爭迷霧中提供有限的視野。用你前方的小兵攻擊這些建築物以免受到傷害，並向前衝鋒吧。",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2": "每座水晶兵營都被防禦塔所保護。當水晶兵營被摧毀時，超級小兵會在該條路線上生成數分鐘。之後，當水晶兵營重生，超級小兵才會停止生成。",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1": "防禦塔",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2": "水晶兵營",
      "LOL__TUTORIAL__MAP_CONTENT_2__TOPIC": "清理路線",
      "LOL__TUTORIAL__MAP_CONTENT_3__DESC": "在路線之間的是野區，其中棲息著中立的野怪與各種植物。兩個最為重要的也怪是巴龍與飛龍。殺死這些單位可以為你的團隊提供獨特的強化，更可以逆轉遊戲的局勢。",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1": "巴龍是野區中最強力的野怪。擊殺巴龍會賦予擊殺隊伍額外物理攻擊、魔法攻擊、強化的回城時間，並且會大幅強化附近的小兵。",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2": "飛龍和巨龍，是會根據擊殺的飛龍屬性來賦予團隊獨特強化的強力野怪。有四種元素飛龍與一種遠古巨龍。",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1": "巴龍",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2": "飛龍",
      "LOL__TUTORIAL__MAP_CONTENT_3__TOPIC": "進入野區",
      "LOL__TUTORIAL__MAP_CONTENT_4__DESC": "在遊戲中，我們所建議的隊伍組成有五個位置。每個路線都有各自適合的英雄與角色 -- 全部嘗試看看或者選取那個你命定的路線吧。",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1": "在上路的英雄是團隊中強韌的打手，他們負責保護上路路線以及在會戰中針對敵方最強力的敵人。",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2": "打野英雄們是為了狩獵而生的。他們有技巧地在線路之間潛伏徘徊著，密切關注著最重要的中立野怪，並在對手放下警戒時發起致命的突襲。",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3": "中路英雄通常是那些帶有高爆發傷害的多功能英雄 ─ 無論是單打獨鬥或者是團隊合作。對他們來說，戰鬥是一場危險的舞蹈，他們總是得尋找機會秀爆對手。",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4": "下路英雄是隊伍的火力來源。做為隊上的至寶，他們在前期需要受到適當的保護，好讓它們可以取得足夠的金錢與經驗。",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5": "輔助英雄是隊伍的守護者。他們負責保全隊友的性命，並主要專注於幫助取得擊殺，在下路保護隊友變得更強。",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1": "上路",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2": "打野",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3": "中路",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4": "下路",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5": "輔助",
      "LOL__TUTORIAL__MAP_CONTENT_4__TOPIC": "選擇你的路線",
      "LOL__TUTORIAL__SKILL__EQUIPMENT": "裝備",
      "LOL__TUTORIAL__SKILL__SKILL": "技能",
      "LOL__TUTORIAL__SKILL__SKILL_DESC": "大多數的英雄擁有五個技能所組成的獨特技能組被動、三個基礎技能與大招。技能被分配在 Q、W、E 與 R 鍵。",
      "LOL__TUTORIAL__SKILL__SUMMONER_SKILL": "召喚師技能",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL": "解鎖你的技能",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC": "大多數的英雄擁有五個技能所組成的獨特技能組：被動、三個基礎技能與大絕。技能被分配在Q、W、E與R鍵。",
      "LOL__TUTORIAL__WELCOME": "歡迎來到召喚峽谷",
      "LOL__TUTORIAL__WELCOME_DESC": "英雄聯盟能學習的東西很多，就先從最基本的學起吧。<br>探索以下教學，了解並熟悉最受歡迎的遊戲模式。",
      "LOL__TUTORIAL__WHAT_IS_LOL": "英雄聯盟是什麼?",
      "LOL__TUTORIAL__WHAT_IS_LOL_DESC": "英雄聯盟是一款注重團隊的策略遊戲，兩個由五位強大英雄組成的隊伍進行對決以摧毀敵方基地。從140 名英雄忠選出屬於你的英雄，打出史詩級的精彩表現、確保擊殺並摧毀敵方防禦塔，並在戰鬥中一步步走向勝利。"
    },
    "sg": {
      "LOL__BAN_PAGE__BAN_STATUS": "Ban Status",
      "LOL__BAN_PAGE__LEVEL": "Level",
      "LOL__BAN_PAGE__ONE_MONTH": "Most Recent 1 Month",
      "LOL__BAN_PAGE__REASON": "Ban Reason",
      "LOL__BAN_PAGE__SEARCH_SUMMONER": "Search Summoner",
      "LOL__BAN_PAGE__SUMMONER": "Summoner",
      "LOL__BAN_PAGE__THREE_MONTH": "Most Recent 3 Months",
      "LOL__BAN_PAGE__TWO_MONTH": "Most Recent 2 Months",
      "LOL__BREADCRUMB_PAGE_NAME__BAN": "Ban",
      "LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS": "Ban List",
      "LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS": "Champions",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION": "TFT Patch Notes",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC": "TFT Patch Updates Details",
      "LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD": "Download & Registration",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT": "Esports",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC": "Esports News",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT": "Event",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC": "Event Details",
      "LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT": "Game Content",
      "LOL__BREADCRUMB_PAGE_NAME__INDEX": "Home",
      "LOL__BREADCRUMB_PAGE_NAME__INFO": "Information",
      "LOL__BREADCRUMB_PAGE_NAME__INFO_DESC": "Game Information, System Information, Patch Notes etc.,",
      "LOL__BREADCRUMB_PAGE_NAME__ITEMS": "Items",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION": "Patch Notes",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC": "Patch Notes Details",
      "LOL__BREADCRUMB_PAGE_NAME__NEWS": "News",
      "LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS": "Server Status",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM": "System",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC": "System Information",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO": "Video",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC": "Video Details",
      "LOL__CHAMPIONS_INNERPAGE_CHARACTER": "Characters",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN": "ASSASSIN",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER": "FIGHTER",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE": "MAGE",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN": "MARKSMAN",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT": "SUPPORT",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK": "TANK",
      "LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN": "Default Skin",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY": "Difficulty",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY": "Easy / Normal / Difficult",
      "LOL__CHAMPIONS_INNERPAGE__E": "E",
      "LOL__CHAMPIONS_INNERPAGE__PASSIVE": "Passive",
      "LOL__CHAMPIONS_INNERPAGE__Q": "Q",
      "LOL__CHAMPIONS_INNERPAGE__R": "R",
      "LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE": "Skills Introduction",
      "LOL__CHAMPIONS_INNERPAGE__SKIN": "Skins",
      "LOL__CHAMPIONS_INNERPAGE__W": "W",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ALL": "All",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN": "Assassin",
      "LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER": "Fighter",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MAGE": "Mage",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN": "Marksman",
      "LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT": "Support",
      "LOL__CHAMPIONS_PAGE__CATEGORY_TANK": "Tank",
      "LOL__CHAMPIONS_PAGE__DESC": "With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all!",
      "LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS": "No matching champions found.",
      "LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS": "Champion Search",
      "LOL__DOWNLOAD__ACCOUNT_APPLY_LINK": "https://sso.garena.com/ui/register",
      "LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT": "Download",
      "LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC": "If you encounter an error during the update, you can try to update the \"Game Client\" manually.",
      "LOL__DOWNLOAD__CURRENT_VERSION__TOPIC": "Current Patch",
      "LOL__DOWNLOAD__DRIVER__CONTENT_DESC": "In order to maintain the best graphic performances of \"League of Legends\", please update the graphics card driver regularly. Find the driver you need.",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD": "AMD Software Update",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA": "NVIDIA Software Update",
      "LOL__DOWNLOAD__DRIVER__TOPIC": "Driver",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_1": "2.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_2": "Above 2 GB",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_3": "Window XP SP3<br>Windows Vista<br>Window 7<br>(Currently unable to support Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_4": "Built-in graphics card HD3000 and above",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_5": "Windows Standards and Compatibility",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1": "Equipment Items",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2": "Minimum Requirements",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3": "Recommended Requirements",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1": "CPU",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2": "Random Access Memory(RAM)",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3": "Operating System",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4": "Graphics Card",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5": "Sound Card",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1": "3.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2": "Above 4 GB",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3": "Windows Vista (Latest Version)<br>Window 7<br>(Currently unable to support Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4": "GeForce 8800 or Higher",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5": "Windows Standards and Compatibility",
      "LOL__DOWNLOAD__EAUIPMENT__TOPIC": "System and Equipment Requirements",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_1": "Release Date",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_2": "Your version",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_3": "Updated Version",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_4": "Download the Patch File",
      "LOL__DOWNLOAD__HISTORY__TOPIC": "Patch Versions List",
      "LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC": "Confirm the current patch version of your computer, and download the corresponding \"manual patch file\".",
      "LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC": "Manual Patch Download Tutorial",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1": "Account Registration",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2": "Game Download",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3": "GPC Download",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1": "Garena Account Application",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2": "Download via Browser (Slower)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3": "Download via GPC (Faster)",
      "LOL__FOOTER__COPYRIGHT": "Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. \"Demo\" and \"League of Legends\" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.",
      "LOL__FOOTER__LINKS__LINK_1_HREF": "//dlgarenanow-a.akamaihd.net/mgames/spdtw/spdcenter/footer/LicensePage/license.html",
      "LOL__FOOTER__LINKS__LINK_1_NAME": "授權資訊",
      "LOL__FOOTER__LINKS__LINK_2_HREF": "https://www.garena.sg/support/",
      "LOL__FOOTER__LINKS__LINK_2_NAME": "Support Center",
      "LOL__FOOTER__LINKS__LINK_3_HREF": "https://contentgarena-a.akamaihd.net/legal/tos/tos_en.html",
      "LOL__FOOTER__LINKS__LINK_3_NAME": "Terms of Service",
      "LOL__FOOTER__LINKS__LINK_4_HREF": "https://www.facebook.com/",
      "LOL__FOOTER__LINKS__LINK_4_NAME": "Offficial Facebook Fan Page",
      "LOL__FOOTER__LINKS__LINK_5_HREF": "FILL in region link5 url",
      "LOL__FOOTER__LINKS__LINK_5_NAME": "link5",
      "LOL__FOOTER__PLAY_FOR_FREE__LINK": "/download",
      "LOL__FOOTER__PLAY_FOR_FREE__TEXT": "PLAY FOR FREE",
      "LOL__ITEMS_PAGE__CATEGORY_ALL": "All",
      "LOL__ITEMS_PAGE__CATEGORY_ATTACK": "Offensive",
      "LOL__ITEMS_PAGE__CATEGORY_DEFENSE": "Defensive",
      "LOL__ITEMS_PAGE__CATEGORY_MAGIC": "Magic",
      "LOL__ITEMS_PAGE__CATEGORY_RUNSPEED": "Movement Speed",
      "LOL__ITEMS_PAGE__CATEGORY_TOOL": "Tools",
      "LOL__ITEMS_PAGE__FILTER__ARMOR": "Armor",
      "LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION": "Armor Penetration",
      "LOL__ITEMS_PAGE__FILTER__ATTACKSPEED": "Attack Speed",
      "LOL__ITEMS_PAGE__FILTER__BOOTS": "Boots",
      "LOL__ITEMS_PAGE__FILTER__CONSUMABLE": "Consumables",
      "LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION": "Cooldown Reduction",
      "LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE": "Critical Strike",
      "LOL__ITEMS_PAGE__FILTER__DAMAGE": "Attack Damage",
      "LOL__ITEMS_PAGE__FILTER__GOLDPER": "Gold Income",
      "LOL__ITEMS_PAGE__FILTER__HEALTH": "Health",
      "LOL__ITEMS_PAGE__FILTER__HEALTHREGEN": "Health Regeneration",
      "LOL__ITEMS_PAGE__FILTER__LIFESTEAL": "Life Steal",
      "LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION": "Magic Penetration",
      "LOL__ITEMS_PAGE__FILTER__MANA": "Mana",
      "LOL__ITEMS_PAGE__FILTER__MANAREGEN": "Mana Regeneration",
      "LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT": "Other",
      "LOL__ITEMS_PAGE__FILTER__SPELLBLOCK": "Magic Resistance",
      "LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE": "Ability Power",
      "LOL__ITEMS_PAGE__FILTER__VISION": "Vision Control",
      "LOL__ITEMS_PAGE__NO_MAPPING_ITEMS": "No Matching Items Found",
      "LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS": "Advanced Item",
      "LOL__ITEMS_PAGE__POPUP__FORMULA": "Build Paths",
      "LOL__ITEMS_PAGE__POPUP__ITEMS": "Items",
      "LOL__ITEMS_PAGE__SEARCH_ITEMS": "Item Search",
      "LOL__MAIN_PAGE__SYSTEM_MESSAGE": "System Information",
      "LOL__NEWS_PAGE__END": "No remaining information",
      "LOL__NEWS_PAGE__NO_MAPPING_NEWS": "No related news",
      "LOL__NEWS_PAGE__SEARCH_PLACEHOLDER": "Search",
      "LOL__NOT_FOUND__CONTENT": "Page not found. Click me to return to the homepage",
      "LOL__NOT_FOUND__TITLE": "404 not found",
      "LOL__REMIND_TEXT__ONLY_TW_REGION": "※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href=\"https://terms.support.garena.com/tw\" target=\"_blank\" rel=\"noreferrer noopener\" style=\"color: white\">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。",
      "LOL__SERVER_PAGE__CURRENT_EXCLUDE": "Recently Resolved",
      "LOL__SERVER_PAGE__CURRENT_STATUS": "Current Status",
      "LOL__SERVER_PAGE__MALFUNCTION_MESSAGE": "Malfunction Information",
      "LOL__SERVER_PAGE__NORMAL_MESSAGE": "Normal Information",
      "LOL__SERVER_PAGE__SERVER_STATUS": "Server Status",
      "LOL__SERVER_PAGE__WARNING_MESSAGE": "Warning Message",
      "LOL__TUTORIAL__CHAMPION__DESC": "Champions get stronger by earning experience to level up and gold to buy more powerful items as the game progresses. Staying on top of these two factors is crucial to overpowering the enemy team and destroying their base.",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE": "EARN EXPERIENCE",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC": "When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defensive structures.",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY": "EARN GOLD",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC": "Gold is the in-game currency to buy items for your champion. Earn gold by killing enemy units and champions, assisting in a kill, destroying defensive structures, and equipping gold income items.",
      "LOL__TUTORIAL__CHAMPION__SHOP": "SHOP",
      "LOL__TUTORIAL__CHAMPION__SHOP_DESC": "The Shop is where you can buy and sell items with gold you’ve earned. It can only be accessed while you are at the Fountain.",
      "LOL__TUTORIAL__CHAMPION__TOPIC": "POWER UP YOUR CHAMPION",
      "LOL__TUTORIAL__GET_START": "LET'S GO",
      "LOL__TUTORIAL__LEARN_BASIC": "LEARN THE BASICS",
      "LOL__TUTORIAL__MAP_CONTENT_1__DESC": "The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1": "Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2": "Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1": "YOUR NEXUS",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2": "ENEMY NEXUS",
      "LOL__TUTORIAL__MAP_CONTENT_1__TOPIC": "DESTROY THE BASE",
      "LOL__TUTORIAL__MAP_CONTENT_2__DESC": "Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defensive structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1": "Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2": "Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1": "TURRETS",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2": "INHIBITORS",
      "LOL__TUTORIAL__MAP_CONTENT_2__TOPIC": "CLEAR THE PATH",
      "LOL__TUTORIAL__MAP_CONTENT_3__DESC": "In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1": "Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2": "Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are four Elemental Drakes and one Elder Dragon.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1": "BARON NASHOR",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2": "DRAKES",
      "LOL__TUTORIAL__MAP_CONTENT_3__TOPIC": "INTO THE JUNGLE",
      "LOL__TUTORIAL__MAP_CONTENT_4__DESC": "There are five positions that make up the recommended team comp for the game. Each lane lends itself to certain kinds of champions and roles—try them all or lock in to the lane that calls you.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1": "Champions in top lane are the tough solo fighters of the team. It’s their job to protect their lane and focus on the enemy team’s most powerful members.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2": "Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment opponents let their guard down.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3": "Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they’re always looking for an opportunity to outplay their opponent.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4": "Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5": "Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1": "TOP LANE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2": "JUNGLE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3": "MID LANE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4": "BOT LANE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5": "SUPPORT",
      "LOL__TUTORIAL__MAP_CONTENT_4__TOPIC": "CHOOSE YOUR LANE",
      "LOL__TUTORIAL__SKILL__EQUIPMENT": "ITEMS",
      "LOL__TUTORIAL__SKILL__SKILL": "ABILITIES",
      "LOL__TUTORIAL__SKILL__SKILL_DESC": "Most champions have a unique skill set made up of five skills: passive, three basic skills and ultimate. Skills are assigned to Q, W, E and R buttons.",
      "LOL__TUTORIAL__SKILL__SUMMONER_SKILL": "SUMMONER SPELLS",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL": "UNLOCK YOUR ABILITIES",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC": "Champions have five core abilities, two special spells, and up to seven items at a time. Figuring out the optimal ability order, summoner spells, and item build for your champion will help you succeed as a team.",
      "LOL__TUTORIAL__WELCOME": "WELCOME TO THE RIFT",
      "LOL__TUTORIAL__WELCOME_DESC": "There’s a lot to learn about League, so we’ll start with the essentials. Explore the guide below to get the rundown on the most popular game mode.",
      "LOL__TUTORIAL__WHAT_IS_LOL": "WHAT IS LEAGUE OF LEGENDS?",
      "LOL__TUTORIAL__WHAT_IS_LOL_DESC": "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory."
    },
    "th": {
      "LOL__BAN_PAGE__BAN_STATUS": "สถานะการแบน",
      "LOL__BAN_PAGE__LEVEL": "เลเวล",
      "LOL__BAN_PAGE__ONE_MONTH": "1 เดือน",
      "LOL__BAN_PAGE__REASON": "สาเหตุการแบน",
      "LOL__BAN_PAGE__SEARCH_SUMMONER": "ค้นหาซัมมอนเนอร์",
      "LOL__BAN_PAGE__SUMMONER": "ซัมมอนเนอร์",
      "LOL__BAN_PAGE__THREE_MONTH": "3 เดือน",
      "LOL__BAN_PAGE__TWO_MONTH": "2 เดือน",
      "LOL__BREADCRUMB_PAGE_NAME__BAN": "แบน",
      "LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS": "รายชื่อผู้ถูกแบน",
      "LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS": "แชมเปี้ยน",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION": "แพตช์โน๊ต",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC": "อัปเดตข้อมูลแพตช์ TFT ล่าสุด",
      "LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD": "ดาวน์โหลด & ลงทะเบียน",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT": "อีสปอร์ต",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC": "ข่าวสารเกี่ยวกับอีสปอร์ต",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT": "กิจกรรม",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC": "ข้อมูลกิจกรรม",
      "LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT": "ข้อมูลเกม",
      "LOL__BREADCRUMB_PAGE_NAME__INDEX": "หน้าหลัก",
      "LOL__BREADCRUMB_PAGE_NAME__INFO": "ข้อมูลประชาสัมพันธ์",
      "LOL__BREADCRUMB_PAGE_NAME__INFO_DESC": "ข้อมูลเกี่ยวกับเกม ระบบ แพตช์โน๊ต และอื่น ๆ",
      "LOL__BREADCRUMB_PAGE_NAME__ITEMS": "ไอเทม",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION": "แพตช์โน๊ต",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC": "อัปเดตข้อมูลแพตช์ล่าสุด",
      "LOL__BREADCRUMB_PAGE_NAME__NEWS": "ข่าวสาร",
      "LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS": "สถานะเซิร์ฟเวอร์",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM": "ระบบ",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC": "ข้อมูลเกี่ยวกับระบบ",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO": "วีดิโอ",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC": "วีดิโอล่าสุดของ League of Legends",
      "LOL__CHAMPIONS_INNERPAGE_CHARACTER": "ตัวละคร",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN": "มือสังหาร",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER": "นักสู้",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE": "นักเวท",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN": "มาคส์แมน",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT": "ซัพพอร์ต",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK": "แทงค์",
      "LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN": "สกินพื้นฐาน",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY": "ระดับความยาก",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY": "ง่าย / ปานกลาง / ยาก",
      "LOL__CHAMPIONS_INNERPAGE__E": "E",
      "LOL__CHAMPIONS_INNERPAGE__PASSIVE": "สกิลติดตัว",
      "LOL__CHAMPIONS_INNERPAGE__Q": "Q",
      "LOL__CHAMPIONS_INNERPAGE__R": "R",
      "LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE": "แนะนำสกิล",
      "LOL__CHAMPIONS_INNERPAGE__SKIN": "สกิน",
      "LOL__CHAMPIONS_INNERPAGE__W": "W",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ALL": "ทั้งหมด",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN": "มือสังหาร",
      "LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER": "นักสู้",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MAGE": "นักเวท",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN": "มาคส์แมน",
      "LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT": "ซัพพอร์ต",
      "LOL__CHAMPIONS_PAGE__CATEGORY_TANK": "แทงค์",
      "LOL__CHAMPIONS_PAGE__DESC": "ค้นหาสไตล์การเล่นที่ใช่จากแชมเปี้ยนกว่า 140 ตัว!",
      "LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS": "ไม่พบแชมเปี้ยนที่ตรงเงื่อนไข",
      "LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS": "ค้นหาแชมเปี้ยน",
      "LOL__DOWNLOAD__ACCOUNT_APPLY_LINK": "https://sso.garena.com/ui/register",
      "LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT": "แพตช์",
      "LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC": "หากคุณพบข้อผิดพลาดระหว่างการอัปเดต คุณอาจลองใช้การอัปเดตแพตช์แบบ Manual Patch",
      "LOL__DOWNLOAD__CURRENT_VERSION__TOPIC": "แพตช์ปัจจุบัน",
      "LOL__DOWNLOAD__DRIVER__CONTENT_DESC": "เพื่อรักษาการแสดงกราฟิกที่ดีที่สุดของ \"League of Legends\"  โปรดอัปเดตไดรเวอร์การ์ดแสดงผลเป็นประจำ ค้นหาไดรเวอร์ที่คุณต้องการ",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD": "อัพเดตซอฟต์แวร์ AMD",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA": "อัพเดตซอฟต์แวร์ NVIDIA",
      "LOL__DOWNLOAD__DRIVER__TOPIC": "ไดรเวอร์",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_1": "2.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_2": "มากกว่า 2.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_3": "Window XP SP3<br>Windows Vista<br>Window 7<br>(ไม่สามารถรองรับ Mac OS ได้ในขณะนี้)",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_4": "การ์ดแสดงผลในตัว HD3000 ขึ้นไป",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_5": "มาตรฐานและความเข้ากันได้ของ Windows",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1": "ไอเทมที่ติดตั้ง",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2": "ความต้องการขั้นต่ำ",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3": "ความต้องการที่แนะนำ",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1": "CPU",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2": "RAM",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3": "ระบบปฏิบัติการ",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4": "การ์ดจอ",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5": "การ์ดเสียง",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1": "3.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2": "มากกว่า 4 GB",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3": "Windows Vista (เวอร์ชั่นล่าสุด)<br>Window 7<br>(ไม่สามารถรองรับ Mac OS ได้ในขณะนี้)",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4": "GeForce 8800 หรือสูงกว่า",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5": "มาตรฐานและความเข้ากันได้ของ Windows",
      "LOL__DOWNLOAD__EAUIPMENT__TOPIC": "ข้อกำหนดของระบบและอุปกรณ์",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_1": "วันปล่อยแพตช์",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_2": "เวอร์ชั่นแพตช์ปัจจุบันของคุณ",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_3": "เวอร์ชันแพตช์หลังการอัปเดต",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_4": "ดาวน์โหลดไฟล์แพตช์",
      "LOL__DOWNLOAD__HISTORY__TOPIC": "ลิสต์ของเวอร์ชั่นแพตช์",
      "LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC": "ยืนยันเวอร์ชันแพตช์ปัจจุบันของคอมพิวเตอร์ของคุณ และดาวน์โหลด \"ไฟล์    Manual Patch\" ที่เกี่ยวข้อง",
      "LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC": "สอนการดาวน์โหลด Manual Patch",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1": "การสมัครบัญชี",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2": "ดาน์โหลดเกม",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3": "ดาน์โหลดเกม (เร็วที่สุด)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1": "การลงทะเบียนบัญชี Garena",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2": "ดาวน์โหลดด้วย Internet Browser (ซึ่งใช้เวลาดาวน์โหลดนานกว่า)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3": "ดาวน์โหลดด้วย GPC (ซึ่งใช้เวลาดาวน์โหลดน้อยกว่า)",
      "LOL__FOOTER__COPYRIGHT": "Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. \"Demo\" and \"League of Legends\" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.",
      "LOL__FOOTER__LINKS__LINK_1_HREF": "https://www.facebook.com/th.lol",
      "LOL__FOOTER__LINKS__LINK_1_NAME": "Facebook",
      "LOL__FOOTER__LINKS__LINK_2_HREF": "https://www.youtube.com/user/LoLPlayinter",
      "LOL__FOOTER__LINKS__LINK_2_NAME": "YouTube",
      "LOL__FOOTER__LINKS__LINK_3_HREF": "https://www.garena.co.th/tos",
      "LOL__FOOTER__LINKS__LINK_3_NAME": "ช่วยเหลือ",
      "LOL__FOOTER__LINKS__LINK_4_HREF": "https://www.garena.co.th/privacy",
      "LOL__FOOTER__LINKS__LINK_4_NAME": "เงื่อนไขการให้บริการ",
      "LOL__FOOTER__LINKS__LINK_5_HREF": "FILL in region link5 url",
      "LOL__FOOTER__LINKS__LINK_5_NAME": "link5",
      "LOL__FOOTER__PLAY_FOR_FREE__LINK": "https://lol.garena.in.th/",
      "LOL__FOOTER__PLAY_FOR_FREE__TEXT": "เล่นฟรี",
      "LOL__ITEMS_PAGE__CATEGORY_ALL": "ทั้งหมด",
      "LOL__ITEMS_PAGE__CATEGORY_ATTACK": "เชิงรุก",
      "LOL__ITEMS_PAGE__CATEGORY_DEFENSE": "เชิงรับ",
      "LOL__ITEMS_PAGE__CATEGORY_MAGIC": "พลังเวท",
      "LOL__ITEMS_PAGE__CATEGORY_RUNSPEED": "ความเร็วเคลื่อนที่",
      "LOL__ITEMS_PAGE__CATEGORY_TOOL": "เครื่องมือ",
      "LOL__ITEMS_PAGE__FILTER__ARMOR": "เกราะ",
      "LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION": "เจาะเกราะ",
      "LOL__ITEMS_PAGE__FILTER__ATTACKSPEED": "ความเร็วโจมตี",
      "LOL__ITEMS_PAGE__FILTER__BOOTS": "รองเท้า",
      "LOL__ITEMS_PAGE__FILTER__CONSUMABLE": "ของใช้",
      "LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION": "ลดคูลดาวน์",
      "LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE": "โจมตีคริติคอล",
      "LOL__ITEMS_PAGE__FILTER__DAMAGE": "พลังโจมตี",
      "LOL__ITEMS_PAGE__FILTER__GOLDPER": "รายได้",
      "LOL__ITEMS_PAGE__FILTER__HEALTH": "พลังชีวิต",
      "LOL__ITEMS_PAGE__FILTER__HEALTHREGEN": "ฟื้นฟูพลังชีวิต",
      "LOL__ITEMS_PAGE__FILTER__LIFESTEAL": "ดูดเลือด",
      "LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION": "เจาะเกราะเวท",
      "LOL__ITEMS_PAGE__FILTER__MANA": "มานา",
      "LOL__ITEMS_PAGE__FILTER__MANAREGEN": "ฟื้นฟูมานา",
      "LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT": "ไอเทมเพิ่มควา",
      "LOL__ITEMS_PAGE__FILTER__SPELLBLOCK": "ต้านทานเวท",
      "LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE": "พลังเวท",
      "LOL__ITEMS_PAGE__FILTER__VISION": "คุมวิสัยทัศน์",
      "LOL__ITEMS_PAGE__NO_MAPPING_ITEMS": "ไม่พบไอเทมที่ตรงการค้นหา",
      "LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS": "ไอเทมระดับสูง",
      "LOL__ITEMS_PAGE__POPUP__FORMULA": "ไอเทมที่ใช้ผสม",
      "LOL__ITEMS_PAGE__POPUP__ITEMS": "ไอเทม",
      "LOL__ITEMS_PAGE__SEARCH_ITEMS": "ค้นหาไอเทม",
      "LOL__MAIN_PAGE__SYSTEM_MESSAGE": "ข้อมูลระบบ",
      "LOL__NEWS_PAGE__END": "ไม่มีข้อมูลเพิ่มเติม",
      "LOL__NEWS_PAGE__NO_MAPPING_NEWS": "ไม่มีข่าวที่เกี่ยวข้อง",
      "LOL__NEWS_PAGE__SEARCH_PLACEHOLDER": "ค้นหาหัวข้อข่าว",
      "LOL__NOT_FOUND__CONTENT": "ไม่พบหน้านี้ให้ คลิกที่นี่เพื่อกลับไปที่หน้าแรก",
      "LOL__NOT_FOUND__TITLE": "404",
      "LOL__REMIND_TEXT__ONLY_TW_REGION": "※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href=\"https://terms.support.garena.com/tw\" target=\"_blank\" rel=\"noreferrer noopener\" style=\"color: white\">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。",
      "LOL__SERVER_PAGE__CURRENT_EXCLUDE": "พึ่งถูกแก้ไข",
      "LOL__SERVER_PAGE__CURRENT_STATUS": "สถานะปัจจุบัน",
      "LOL__SERVER_PAGE__MALFUNCTION_MESSAGE": "ข้อมูลเหตุขัดข้อง",
      "LOL__SERVER_PAGE__NORMAL_MESSAGE": "ข้อมูลทั่วไป",
      "LOL__SERVER_PAGE__SERVER_STATUS": "สถานะเซิร์ฟเวอร์",
      "LOL__SERVER_PAGE__WARNING_MESSAGE": "ข้อความแจ้งเตือน",
      "LOL__TUTORIAL__CHAMPION__DESC": "แชมเปี้ยนจะแข็งแกร่งขึ้นจากการเก็บค่าประสบการณ์เพื่อเพิ่มเลเวล และเก็บทองเพื่อซื้อไอเทมที่ทรงพลังขึ้นเรื่อย ๆ ทั้งสองปัจจัยนี้เป็นสิ่งสำคัญที่จะทำให้คุณเอาชนะคู่ต่อสู้ได้เพื่อเข้าไปทำลายฐานทัพของพวกเขา",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE": "เก็บค่าประสบการณ์",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC": "เมื่อแชมเปี้ยนได้รับค่าประสบการณ์ถึงจำนวนหนึ่ง พวกเขาจะอัปเลเวลและสามารถปลดล็อกหรือเพิ่มพลังให้กับสกิลต่าง ๆ และมีค่าพลังพื้นฐานเพิ่มขึ้น เก็บค่าประสบการณ์จากการสังหารแชมเปี้ยนและยูนิตฝ่ายศัตรู ช่วยเหลือในการสังหาร และทำลายสิ่งปลูกสร้างต่าง ๆ",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY": "เก็บสะสมทอง",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC": "ทองเป็นหน่วยเงินภายในเกมเพื่อใช้ในการซื้อไอเทมสำหรับแชมเปี้ยนของคุณ ทองจะสามารถเก็บสะสมได้จากการสังหารแชมเปี้ยนและยูนิตฝ่ายศัตรู ช่วยเหลือในการสังหาร ทำลายสิ่งปลุกสร้าง และสวมใส่ไอเทมเพิ่มรายรับ",
      "LOL__TUTORIAL__CHAMPION__SHOP": "ร้านค้า",
      "LOL__TUTORIAL__CHAMPION__SHOP_DESC": "ร้านค้าคืที่ที่คุณจะสามารถซื้อและขายไอเทมด้วยทองที่คุณสะสมมา สามารถใช้งานร้านค้าได้แค่ตอนที่คุณอยู่ในบริเวณจุดเกิดเท่านั้น",
      "LOL__TUTORIAL__CHAMPION__TOPIC": "เพิ่มพลังให้กับแชมเปี้ยนของคุณ",
      "LOL__TUTORIAL__GET_START": "ไปลุยกันเลย",
      "LOL__TUTORIAL__LEARN_BASIC": "เรียนรู้พื้นฐาน",
      "LOL__TUTORIAL__MAP_CONTENT_1__DESC": "Nexus คือใจกลางฐานทัพของทั้งสองทีม ทำลาย Nexus ของศัตรูก่อนอีกฝ่ายเพื่อชนะเกม",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1": "Nexus ของคุณจะเป็นจุดที่มินเนี่ยนจะเกิด ด้านหลัง Nexus ของคุณคือแท่นจุดเกิด ซึ่งเป็นที่ที่คุณจะสามารถเติมพลังชีวิตและมานาได้อย่างรวดเร็ว และใช้งานร้านค้าได้",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2": "Nexus ที่ตั้งอยู่ภายในฐานทัพของศัตรูจะมีหน้าตาเหมือนกับ Nexus ของคุณ หากทำลาย Nexus ของศัตรูได้แล้วจะทำให้ทีมของคุณชนะเกมทันที",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1": "Nexus ของคุณ",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2": "Nexus ของศัตรู",
      "LOL__TUTORIAL__MAP_CONTENT_1__TOPIC": "ทำลายฐาน",
      "LOL__TUTORIAL__MAP_CONTENT_2__DESC": "ทีมของคุณต้องทำลายทุกอย่างใน 1 เลนเป็นอย่างน้อย เพื่อที่จะเข้าถึง Nexus ของศัตรู สิ่งที่จะค่อยกั้นขวางทางของคุณคือป้อมปราการและ Inhibitor แต่ละเลนจะมีป้อมปราการ 3 ป้อมและ 1 Inhibitor และ Nexus แต่ละฝั่งจะมีป้อมปราการขวางอยู่ถึง 2 ป้อม",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1": "ป้อมปราการจะสร้างความเสียหายกับมินเนี่ยนและแชมเปี้ยนฝ่ายศัตรู และมอบวิสัยทัศน์ให้กับทีมของมัน โจมตีสิ่งปลูกสร้างเหล่านี้เวลาที่มีมินเนี่ยนของคุณอยู่ข้างหน้าเพื่อหลีกเลี่ยงการถูกป้อมยิง",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2": "Inhibitor แต่ละหลังจากมีป้อมปราการป้องกันอยู่ 1 ป้อม เมื่อถูกทำลายแล้วจะมีมินเนี่ยนยักษ์ออกมาที่เลนนั้นเป็นเวลาหลายนาที หลังจากนั้น Inhibitor จะฟื้นกลับมาใหม่และมินเนี่ยนยักษ์จะหยุดเกิด",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1": "ป้อมปราการ",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2": "Inhibitor",
      "LOL__TUTORIAL__MAP_CONTENT_2__TOPIC": "เคลียร์ทางให้ทีม",
      "LOL__TUTORIAL__MAP_CONTENT_3__DESC": "ตรงช่องว่างระหว่างเลนจะมีป่าอยู่ ซึ่งเป็นที่อยู่ของสัตว์ป่าและพืชพันธุ์ชนิดต่าง ๆ สัตว์ป่าที่สำคัญที่สุดคือบารอนและมังกร การสังหารยูนิตเหล่านี้จะมอบบัฟพิเศษให้กับทีมของคุณและสามารถช่วยให้เกมพลิกกลับมาได้",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1": "บารอน (Baron Nashor) คือสัตว์ป่าที่แข็งแกร่งที่สุดในป่า ทีมที่สังหารบารอนจะได้รับโบนัสพลังโจมตี พลังเวท วาร์ปกลับบ้านแบบเสริมพลัง และความสามารถในการเพิ่มพลังให้กับมินเนี่ยนที่อยู่รอบข้าง",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2": "มังกรคือสัตว์ป่าสุดแกร่งที่จะมอบโบนัสพิเศษตามธาตุของมันให้กับทีมที่สังหาร มังกรจะมีทั้งหมด 4 ธาตุและมีมหามังกร 1 ตัว",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1": "BARON NASHOR",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2": "มังกร",
      "LOL__TUTORIAL__MAP_CONTENT_3__TOPIC": "พิชิตผืนป่า",
      "LOL__TUTORIAL__MAP_CONTENT_4__DESC": "การจัดทีมทั่วไปจะจำแนกผู้เล่นในทีมออกเป็น 5 ตำแหน่ง แต่ละเลนจะต้องใช้ประเภทของแชมเปี้ยนที่แตกต่างกัน ลองเล่นหลาย ๆ เลนหรือไม่ก็เลือกเลนที่ถนัดแล้วไปให้สุดทางดู",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1": "แชมเปี้ยนที่อยู่เลนบนจะเป็นประเภทนักสู้ผู้เด็ดเดี่ยว หน้าที่ของเขาคือการปกป้องเลนและคอยจัดการกับสมาชิกที่แข็งแกร่งที่สุดของทีมศัตรูเป็นหลัก",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2": "ตำแหน่งป่ามีไว้สำหรับผู้มีใจรักในการไล่ล่า พวกเขาจะต้องคอยแอบย่องไปหาเลนต่าง ๆ และคอยสอดส่องสัตว์ป่าหรือสัตว์ในตำนานที่สำคัญเพื่อโจมตีพวกมันแล้วชิงบัฟมาให้ทีมในตอนที่ศัตรูเผลอ",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3": "เลนกลางคือที่อยู่ของแชมเปี้ยนที่มีดาเมจแรงสูง ผู้สามารถจัดการกับคู่ต่อสู้ได้ด้วยตนเองและในทีมไฟต์ สำหรับพวกเขาแล้ว การต่อสู้มันก็คือการเต้นรำอยู่ท่ามกลางความอันตราย และคอยสอดส่องหาโอกาสที่จะโค่นล้มคู่ต่อสู้อยู่เสมอ",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4": "แชมเปี้ยนเลนล่างคือระเบิดของทีม เหมือนดั่งสินค้าที่ทรงคุณค่า พวกเขาจะต้องได้รับการปกป้องในช่วงเริ่มเกมก่อนที่จะเก็บสะสมทองและค่าประสบการณ์เพียงพอจนสามารถพาทีมไปสู่ชัยชนะได้",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5": "แชมเปี้ยนซัพพอร์ตคือผู้พิทักษ์ของทีม หน้าที่ของพวกเขาคือคอยปกป้องเพื่อนร่วมทีม ช่วยเหลือทีมในการสังหารศัตรู และประคองให้เลนล่างสามารถฟาร์มทองจนแข็งแกร่งขึ้นมาได้",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1": "เลนบน",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2": "ป่า",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3": "เลนกลาง",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4": "เลนล่าง",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5": "ซัพพอร์ต",
      "LOL__TUTORIAL__MAP_CONTENT_4__TOPIC": "เลือกเลนของคุณ",
      "LOL__TUTORIAL__SKILL__EQUIPMENT": "ไอเทม",
      "LOL__TUTORIAL__SKILL__SKILL": "สกิล",
      "LOL__TUTORIAL__SKILL__SKILL_DESC": "แชมเปี้ยนจะมีสกิลหลักอยู่ 5 สกิล เวทพิเศษ 2 แบบ และสามารถสวมใส่ไอเทมได้สูงสุด 7 ชิ้นพร้อมกัน การค้นหาลำดับสกิลที่ควรอัป เวทซัมมอนเนอร์ที่ใช่ และการออกไอเทมที่ถูกต้องสำหรับแชมเปี้ยนของคุณจะช่วยให้ทีมของคุณประสบความสำเร็จ",
      "LOL__TUTORIAL__SKILL__SUMMONER_SKILL": "เวทซัมมอนเนอร์",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL": "ปลดล็อกสกิลของคุณ",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC": "แชมเปี้ยนจะมีสกิลหลักอยู่ 5 สกิล เวทพิเศษ 2 แบบ และสามารถสวมใส่ไอเทมได้สูงสุด 7 ชิ้นพร้อมกัน การค้นหาลำดับสกิลที่ควรอัป เวทซัมมอนเนอร์ที่ใช่ และการออกไอเทมที่ถูกต้องสำหรับแชมเปี้ยนของคุณจะช่วยให้ทีมของคุณประสบความสำเร็จ",
      "LOL__TUTORIAL__WELCOME": "ยินดีต้อนรับสู่ Summoner's Rift",
      "LOL__TUTORIAL__WELCOME_DESC": "League เป็นเกมที่ใช้เวลาในการเรียนรู้ เพราะฉะนั้นเราจะมาเริ่มกันที่สิ่งจำเป็นที่คุณควรรู้ก่อน ดูคู่มือด้านล่างเพื่ออ่านสรุปเกี่ยวกับโหมดที่มีผู้เล่นมากที่สุด",
      "LOL__TUTORIAL__WHAT_IS_LOL": "League of Legends คืออะไร?",
      "LOL__TUTORIAL__WHAT_IS_LOL_DESC": "League of Legends คือเกมวางแผนแบบทีมที่ทั้ง 2 ทีมจะต้องส่งแชมเปี้ยน 5 ตัวมาต่อสู้กันเพื่อทำลายฐานทัพของอีกฝ่าย มีแชมเปี้ยนกว่า 140 ตัวให้เลือกเล่นและโชว์ความสามารถ ใช้พวกมันในการสังหารศัตรูและทำลายป้อมปราการเพื่อฝ่าเข้าไปเก็บชัยชนะมาให้กับทีมของคืน"
    },
    "vn": {
      "LOL__MAIN_PAGE__MORE_NEWS": "XEM THÊM",
      "LOL__BAN_PAGE__BAN_STATUS": "Trạng Thái Khóa",
      "LOL__BAN_PAGE__LEVEL": "Cấp Độ",
      "LOL__BAN_PAGE__ONE_MONTH": "Một tháng",
      "LOL__BAN_PAGE__REASON": "Lý Do Khóa",
      "LOL__BAN_PAGE__SEARCH_SUMMONER": "Tìm Người Chơi",
      "LOL__BAN_PAGE__SUMMONER": "Người Chơi",
      "LOL__BAN_PAGE__THREE_MONTH": "Ba tháng",
      "LOL__BAN_PAGE__TWO_MONTH": "Hai tháng",
      "LOL__BREADCRUMB_PAGE_NAME__BAN": "Khóa Tài Khoản",
      "LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS": "Danh Sách Khóa",
      "LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS": "Tướng",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION": "Chi Tiết Cập Nhật ĐTCL",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC": "Chi tiết thông tin về bản cập nhật ĐTCL.",
      "LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD": "Tải & Đăng Ký",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT": "Esports",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC": "Tin tức mới nhất về Esports.",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT": "Sự Kiện",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC": "Chi tiết sự kiện.",
      "LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT": "Giới Thiệu",
      "LOL__BREADCRUMB_PAGE_NAME__INDEX": "Trang Chủ",
      "LOL__BREADCRUMB_PAGE_NAME__INFO": "Thông Tin",
      "LOL__BREADCRUMB_PAGE_NAME__INFO_DESC": "Các thông tin về trò chơi, hệ thống, chi tiết cập nhật, ...",
      "LOL__BREADCRUMB_PAGE_NAME__ITEMS": "Trang Bị",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION": "Chi Tiết Cập Nhật",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC": "Thông tin chi tiết về bản cập nhật.",
      "LOL__BREADCRUMB_PAGE_NAME__NEWS": "Tin Tức",
      "LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS": "Trạng Thái Dịch Vụ",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM": "Hệ Thống",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC": "Các thông tin liên quan tới hệ thống.",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO": "Video",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC": "Video mới nhất từ Liên Minh Huyền Thoại.",
      "LOL__CHAMPIONS_INNERPAGE_CHARACTER": "Vai Trò",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN": "SÁT THỦ",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER": "ĐẤU SĨ",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE": "PHÁP SƯ",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN": "XẠ THỦ",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT": "HỖ TRỢ",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK": "ĐỠ ĐÒN",
      "LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN": "Trang Phục Mặc Định",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY": "Độ Khó",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY": "Dễ / Trung Bình / Khó",
      "LOL__CHAMPIONS_INNERPAGE__E": "E",
      "LOL__CHAMPIONS_INNERPAGE__PASSIVE": "Nội tại",
      "LOL__CHAMPIONS_INNERPAGE__Q": "Q",
      "LOL__CHAMPIONS_INNERPAGE__R": "R",
      "LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE": "Giới Thiệu Kỹ Năng",
      "LOL__CHAMPIONS_INNERPAGE__SKIN": "Trang Phục",
      "LOL__CHAMPIONS_INNERPAGE__W": "W",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ALL": "Tất Cả",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN": "Sát Thủ",
      "LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER": "Đấu Sĩ",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MAGE": "Pháp Sư",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN": "Xạ Thủ",
      "LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT": "Hỗ Trợ",
      "LOL__CHAMPIONS_PAGE__CATEGORY_TANK": "Đỡ Đòn",
      "LOL__CHAMPIONS_PAGE__DESC": "Với hơn 150 vị tướng, chắc chắn bạn sẽ tìm được lựa chọn phù hợp với lối chơi của mình. Hãy luyện một, hoặc tất cả cũng được nhé!",
      "LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS": "Không tìm thấy tướng phù hợp.",
      "LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS": "Tìm Tướng",
      "LOL__DOWNLOAD__ACCOUNT_APPLY_LINK": "https://sso.garena.com/ui/register?locale=vi-VN",
      "LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT": "Bản Cập Nhật",
      "LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC": "Nếu bạn gặp phải lỗi trong khi cập nhật, hãy thử cập nhật lại \"Liên Minh huyền Thoại\" bằng cách thủ công.",
      "LOL__DOWNLOAD__CURRENT_VERSION__TOPIC": "Bản Hiện Tại",
      "LOL__DOWNLOAD__DRIVER__CONTENT_DESC": "Để có thể duy trì đồ họa của \"Liên Minh Huyền Thoại\" mượt mà nhất có thể, hãy cập nhật card màn hình thường xuyên. Hãy tìm driver mà bạn cần.",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD": "Cập nhật Phần mềm AMD",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA": "Cập nhật Phần mềm NVIDIA",
      "LOL__DOWNLOAD__DRIVER__TOPIC": "Driver",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_1": "2.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_2": "Trên 2 GB",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_3": "Window XP SP3<br>Windows Vista<br>Window 7<br>(Hiện tại đã không còn hỗ trợ Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_4": "Card màn hình liền máy HD3000 trở lên",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_5": "Windows Cơ Bản và Tương Thích",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1": "Cấu Hình",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2": "Cấu Hình Tối Thiểu",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3": "Cấu Hình Đề Nghị",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1": "CPU",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2": "Random Access Memory(RAM)",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3": "Hệ Điều Hành",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4": "Card Màn Hình",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5": "Card Âm Thanh",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1": "3.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2": "Trên 4 GB",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3": "Windows Vista (Bản mới nhất)<br>Window 7<br>(Hiện tại đã không còn hỗ trợ Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4": "GeForce 8800 hoặc cao hơn",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5": "Windows Cơ Bản và Tương Thích",
      "LOL__DOWNLOAD__EAUIPMENT__TOPIC": "Hệ Thống và Cấu Hình Đề Nghị",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_1": "Ngày Cập Nhật",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_2": "Bản Cũ",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_3": "Bản Mới",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_4": "Tải Ngay",
      "LOL__DOWNLOAD__HISTORY__TOPIC": "Danh Sách Cập Nhật",
      "LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC": "Hãy chắc chắn nắm được số bản cập nhật hiện tại trong máy, sau đó tải bản tương ứng để \"cập nhật thủ công\".",
      "LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC": "Hướng Dẫn Tải Bản Thủ Công",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1": "Tài Khoản",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2": "Tải Trò Chơi",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3": "Tải Trò Chơi (nhanh nhất)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1": "Tài Khoản Garena",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2": "Tải bằng Trình Duyệt Web (tốc độ chậm)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3": "Tải bằng GPC (tốc độ nhanh)",
      "LOL__FOOTER__COPYRIGHT": "Sản phẩm được hợp tác phát hành bởi Công ty TNHH Liên Minh Huyền Thoại & Công ty Cổ phần Giải trí và Thể thao Điện tử Việt Nam.\n\nVăn phòng đại diện: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54 đường Liễu Giai, phường Cống Vị, quận Ba Đình, thành phố Hà Nội, Việt Nam.\n\nĐiện thoại: (04)7305-3939; Fax: (04)3759-2429",
      "LOL__FOOTER__LINKS__LINK_1_HREF": "https://www.facebook.com/LienMinhHuyenThoai",
      "LOL__FOOTER__LINKS__LINK_1_NAME": "Facebook",
      "LOL__FOOTER__LINKS__LINK_2_HREF": "https://www.youtube.com/user/GarenaVietnam?view_as=subscriber?sub_confirmation=1",
      "LOL__FOOTER__LINKS__LINK_2_NAME": "Youtube",
      "LOL__FOOTER__LINKS__LINK_3_HREF": "https://www.garena.vn/terms",
      "LOL__FOOTER__LINKS__LINK_3_NAME": "Điều Khoản Dịch Vụ",
      "LOL__FOOTER__LINKS__LINK_4_HREF": "https://hotro.garena.vn/",
      "LOL__FOOTER__LINKS__LINK_4_NAME": "Trung Tâm Hỗ Trợ",
      "LOL__FOOTER__LINKS__LINK_5_HREF": "FILL in region link5 url",
      "LOL__FOOTER__LINKS__LINK_5_NAME": "link5",
      "LOL__FOOTER__PLAY_FOR_FREE__LINK": "https://lienminh.garena.vn/download",
      "LOL__FOOTER__PLAY_FOR_FREE__TEXT": "CHƠI MIỄN PHÍ",
      "LOL__ITEMS_PAGE__CATEGORY_ALL": "Tất Cả",
      "LOL__ITEMS_PAGE__CATEGORY_ATTACK": "Tấn Công",
      "LOL__ITEMS_PAGE__CATEGORY_DEFENSE": "Phòng Thủ",
      "LOL__ITEMS_PAGE__CATEGORY_MAGIC": "Phép Thuật",
      "LOL__ITEMS_PAGE__CATEGORY_RUNSPEED": "Tốc Độ",
      "LOL__ITEMS_PAGE__CATEGORY_TOOL": "Công Cụ",
      "LOL__ITEMS_PAGE__FILTER__ARMOR": "Giáp",
      "LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION": "Xuyên Giáp",
      "LOL__ITEMS_PAGE__FILTER__ATTACKSPEED": "Tốc Độ Đánh",
      "LOL__ITEMS_PAGE__FILTER__BOOTS": "Giày",
      "LOL__ITEMS_PAGE__FILTER__CONSUMABLE": "Vật Phẩm Tiêu Hao",
      "LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION": "Giảm Hồi Chiêu",
      "LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE": "Chí Mạng",
      "LOL__ITEMS_PAGE__FILTER__DAMAGE": "Sức Mạnh Công Kích",
      "LOL__ITEMS_PAGE__FILTER__GOLDPER": "Vàng Thu Nhập",
      "LOL__ITEMS_PAGE__FILTER__HEALTH": "Máu",
      "LOL__ITEMS_PAGE__FILTER__HEALTHREGEN": "Hồi Máu",
      "LOL__ITEMS_PAGE__FILTER__LIFESTEAL": "Hút Máu",
      "LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION": "Xuyên Kháng Phép",
      "LOL__ITEMS_PAGE__FILTER__MANA": "Năng Lượng",
      "LOL__ITEMS_PAGE__FILTER__MANAREGEN": "Hồi Năng Lượng",
      "LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT": "Khác",
      "LOL__ITEMS_PAGE__FILTER__SPELLBLOCK": "Kháng Phép",
      "LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE": "Sức Mạnh Phép Thuật",
      "LOL__ITEMS_PAGE__FILTER__VISION": "Kiểm Soát Tầm Nhìn",
      "LOL__ITEMS_PAGE__NO_MAPPING_ITEMS": "Không tìm thấy trang bị phù hợp",
      "LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS": "Trang Bị Nâng Cao",
      "LOL__ITEMS_PAGE__POPUP__FORMULA": "Lối Xây Dựng",
      "LOL__ITEMS_PAGE__POPUP__ITEMS": "Trang Bị",
      "LOL__ITEMS_PAGE__SEARCH_ITEMS": "Tìm Trang Bị",
      "LOL__MAIN_PAGE__SYSTEM_MESSAGE": "Thông Tin Hệ Thống",
      "LOL__NEWS_PAGE__END": "Không có thông tin gì thêm.",
      "LOL__NEWS_PAGE__NO_MAPPING_NEWS": "Không có Tin Liên quan",
      "LOL__NEWS_PAGE__SEARCH_PLACEHOLDER": "Tìm kiếm Thông tin",
      "LOL__NOT_FOUND__CONTENT": "Không tìm thấy thông tin trang, hãy ấn để quay lại trang chủ",
      "LOL__NOT_FOUND__TITLE": "404 not found",
      "LOL__REMIND_TEXT__ONLY_TW_REGION": "※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href=\"https://terms.support.garena.com/tw\" target=\"_blank\" rel=\"noreferrer noopener\" style=\"color: white\">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。",
      "LOL__SERVER_PAGE__CURRENT_EXCLUDE": "Mới Giải Quyết",
      "LOL__SERVER_PAGE__CURRENT_STATUS": "Trạng Thái Hiện Tại",
      "LOL__SERVER_PAGE__MALFUNCTION_MESSAGE": "Thông Tin Trục Trặc",
      "LOL__SERVER_PAGE__NORMAL_MESSAGE": "Thông Tin Thường",
      "LOL__SERVER_PAGE__SERVER_STATUS": "Trạng Thái Máy Chủ",
      "LOL__SERVER_PAGE__WARNING_MESSAGE": "Tin Nhắn Cảnh Báo",
      "LOL__TUTORIAL__CHAMPION__DESC": "Tướng sẽ mạnh dần bằng cách lên cấp khi nhận đủ lượng kinh nghiệm. Đồng thời, sử dụng vàng để mua những trang bị mạnh mẽ. Luôn bám sát hai yếu tố quyết định này sẽ giúp bạn hủy diệt đối thủ và phá hủy căn cứ của chúng.",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE": "NHẬN KINH NGHIỆM",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC": "Khi tướng có đủ lượng kinh nghiệm cần thiết, họ sẽ lên cấp và mở khóa những kỹ năng mạnh mẽ, cũng như các chỉ số cơ bản của mình. Nhận kinh nghiệm bằng cách hạ gục đơn vị và tướng địch, hỗ trợ hạ gục, và phá hủy công trình.",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY": "NHẬN VÀNG",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC": "Vàng là đơn vị bạn sẽ sử dụng trong trò chơi để mua trang bị cần thiết cho tướng. Nhận vàng bằng cách hạ gục đơn vị và tướng địch, hỗ trợ hạ gục, phá hủy công trình, và sử dụng các trang bị cung cấp vàng.",
      "LOL__TUTORIAL__CHAMPION__SHOP": "CỬA HÀNG",
      "LOL__TUTORIAL__CHAMPION__SHOP_DESC": "Cửa Hàng là nơi bạn sẽ mua/bán trang bị với vàng có được. Bạn chỉ có thể vào Cửa Hàng khi ở Bệ Đá Cổ.",
      "LOL__TUTORIAL__CHAMPION__TOPIC": "TĂNG SỨC MẠNH TƯỚNG CỦA BẠN",
      "LOL__TUTORIAL__GET_START": "ĐI THÔI NÀO",
      "LOL__TUTORIAL__LEARN_BASIC": "TÌM HIỂU CƠ BẢN",
      "LOL__TUTORIAL__MAP_CONTENT_1__DESC": "Nhà chính Nexus là con tim của căn cứ ở cả hai đội. Phá hủy Nhà chính Nexus của đối phương trước để chiến thắng.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1": "Nhà chính Nexus là nơi lính sẽ được triệu hồi. Sau Nhà chính Nexus chính là Bệ Đá Cổ, nơi bạn sẽ được hồi máu và năng lượng cũng như thoải mái mua sắm ở Cửa Hàng.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2": "Hãy xác định vị trí căn cứ của đối phương, Nhà chính Nexus của chúng cũng giống như bạn. Hãy phá hủy nó để chiến thắng.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1": "NHÀ CHÍNH CỦA BẠN",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2": "NHÀ CHÍNH ĐỐI THỦ",
      "LOL__TUTORIAL__MAP_CONTENT_1__TOPIC": "PHÁ HỦY CĂN CỨ",
      "LOL__TUTORIAL__MAP_CONTENT_2__DESC": "Đội của bạn cần phá hủy ít nhất một đường để có thể chạm tới Nhà chính Nexus địch. Những công trình phòng thủ nằm trên đường được gọi là Trụ và Nhà Lính. Mỗi đường sẽ có ba Trụ và một Nhà Lính, đồng thời, Nhà chính Nexus sẽ được hai Trụ bảo vệ nghiêm ngặt.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1": "Trụ sẽ gây sát thương lên lính và tướng địch, đồng thời cung cấp cho kẻ địch tầm nhìn tại khu vực đó. Tấn công những công trình này với lính phía trước để tránh sát thương từ nó và tiến thẳng tới căn cứ địch.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2": "Mỗi Nhà lính sẽ được bảo vệ bởi một Trụ. Khi phá hủy Nhà lính, lính siêu cấp sẽ được triệu hồi ở đường đó trong vài phút. Sau đó, Nhà lính sẽ được sửa lại và Lính Siêu Cấp cũng sẽ ngừng xuất hiện.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1": "TRỤ",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2": "NHÀ LÍNH",
      "LOL__TUTORIAL__MAP_CONTENT_2__TOPIC": "DỌN DẸP CON ĐƯỜNG",
      "LOL__TUTORIAL__MAP_CONTENT_3__DESC": "Giữa các đường chính là khu vực rừng, nơi quái vật trung lập và các loại quả tồn tại. Hai quái vật quan trọng và ảnh hưởng nhất tới trận đấu chính là Baron Nashor và Rồng. Hạ gục các đơn vị này sẽ cho đội của bạn bùa lợi mạnh mẽ, giúp đẩy mạnh lợi thế, và cũng có thể đảo ngược thế trận.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1": "Baron Nashor là quái vật mạnh nhất trong rừng. Đội hạ gục được nó sẽ nhận bùa lợi giúp tăng sức mạnh công kích, sức mạnh phép thuật, biến về được cường hóa, đồng thời tăng cấp sức mạnh của lính ở gần.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2": "Rồng là quái vật rất mạnh, cho bạn bùa lợi hữu ích dựa trên nguyên tố của rồng mà đội bạn hạ gục được. Có tất cả bốn loại Rồng Nguyên Tố và một Rồng Ngàn Tuổi.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1": "BARON NASHOR",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2": "RỒNG",
      "LOL__TUTORIAL__MAP_CONTENT_3__TOPIC": "KHÁM PHÁ RỪNG GIÀ",
      "LOL__TUTORIAL__MAP_CONTENT_4__DESC": "Có tất cả năm vị trí để bạn có thể thi đấu trong Liên Minh Huyền Thoại. Mỗi vị trí lại có những mục tiêu, nhiệm vụ và vị tướng khác nhau—hãy tìm hiểu tất cả hoặc chọn cho mình một đường phù hợp nhất với bản thân.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1": "Tướng đường trên là những đấu sĩ solo mạnh mẽ của đội. Nhiệm vụ của họ là bảo vệ đường và tập trung vào những chủ lực của đối thủ trong giao tranh.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2": "Tướng đi rừng dành phần lớn thời gian của mình để đi săn. Ẩn nấp giữa các đường, luôn để mắt tới những quái vật trung lập và chớp lấy khoảnh khắc kẻ địch không chú ý, tạo tiền đề cho đồng đội.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3": "Tướng đường giữa sở hữu khả năng dồn sát thương khủng—người có thể vừa solo, vừa giao tranh với đồng đội cực kỳ mạnh mẽ. Với họ, giao tranh là những cuộc vui đầy nguy hiểm, và họ là người luôn tìm kiếm những cơ hội để tỏa sáng, trên cơ đối thủ.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4": "Tướng đường dưới là quả bom nổ chậm của cả đội. Với trọng trách đặt nặng trên vai, họ cần được bảo vệ ở giai đoạn đầu trận để có thể tìm kiếm những chỉ số vàng và kinh nghiệm cần thiết, giúp họ tỏa sáng, gánh đội tới chiến thắng.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5": "Tướng hỗ trợ là người bảo vệ của đội. Họ là chìa khóa giúp cho đồng đội có thể sống sót, và cũng là nhân tố quan trọng trong những pha thiết lập giao tranh tìm kiếm lợi thế. Bảo vệ đồng đội tới khi họ trở nên mạnh hơn chính là mục tiêu của tướng hỗ trợ.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1": "ĐƯỜNG TRÊN",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2": "RỪNG",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3": "ĐƯỜNG GIỮA",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4": "ĐƯỜNG DƯỚI",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5": "HỖ TRỢ",
      "LOL__TUTORIAL__MAP_CONTENT_4__TOPIC": "CHỌN ĐƯỜNG",
      "LOL__TUTORIAL__SKILL__EQUIPMENT": "TRANG BỊ",
      "LOL__TUTORIAL__SKILL__SKILL": "KỸ NĂNG",
      "LOL__TUTORIAL__SKILL__SKILL_DESC": "Mỗi tướng sẽ có năm kỹ năng cốt lõi, hai phép bổ trợ, và tối đa bảy trang bị có thể đem theo cùng lúc. Hãy tự mình khám phá những cách nâng kỹ năng, sử dụng phép bổ trợ và trang bị cho riêng từng vị tướng. Nó sẽ giúp bạn cũng như cả đội thành công hơn trong việc giành chiến thắng.",
      "LOL__TUTORIAL__SKILL__SUMMONER_SKILL": "PHÉP BỔ TRỢ",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL": "MỞ KHÓA KỸ NĂNG",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC": "Mỗi tướng sẽ có năm kỹ năng cốt lõi, hai phép bổ trợ, và tối đa bảy trang bị có thể đem theo cùng lúc. Hãy tự mình khám phá những cách nâng kỹ năng, sử dụng phép bổ trợ và trang bị cho riêng từng vị tướng. Nó sẽ giúp bạn cũng như cả đội thành công hơn trong việc giành chiến thắng.",
      "LOL__TUTORIAL__WELCOME": "CHÀO MỪNG ĐẾN VỚI SUMMONER RIFT",
      "LOL__TUTORIAL__WELCOME_DESC": "Có rất nhiều thứ bạn cần học hỏi và tìm hiểu trong Liên Minh, vì vậy, hãy cùng bắt đầu với những thứ cốt lõi nhất. Khám phá hướng dẫn bên dưới để hiểu rõ hơn về chế độ chơi phổ biến nhất này.",
      "LOL__TUTORIAL__WHAT_IS_LOL": "LIÊN MINH HUYỀN THOẠI LÀ GÌ?",
      "LOL__TUTORIAL__WHAT_IS_LOL_DESC": "Liên Minh Huyền Thoại là một trò chơi chiến thuật đồng đội nơi hai đội với năm vị tướng mạnh mẽ sẽ đối đầu nhau nhằm mục tiêu phá hủy căn cứ đối phương. Chọn một trong hơn 150 vị tướng để tạo ra những pha thi đấu xuất thần, hạ gục đối thủ, san phẳng trụ địch và hướng đến chiến thắng vinh quang."
    },
    "ph": {
      "LOL__BAN_PAGE__BAN_STATUS": "Ban Status",
      "LOL__BAN_PAGE__LEVEL": "Level",
      "LOL__BAN_PAGE__ONE_MONTH": "Most Recent 1 Month",
      "LOL__BAN_PAGE__REASON": "Ban Reason",
      "LOL__BAN_PAGE__SEARCH_SUMMONER": "Search Summoner",
      "LOL__BAN_PAGE__SUMMONER": "Summoner",
      "LOL__BAN_PAGE__THREE_MONTH": "Most Recent 3 Months",
      "LOL__BAN_PAGE__TWO_MONTH": "Most Recent 2 Months",
      "LOL__BREADCRUMB_PAGE_NAME__BAN": "Ban",
      "LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS": "Ban List",
      "LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS": "Champions",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION": "TFT Patch Notes",
      "LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC": "TFT Patch Updates Details",
      "LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD": "Download & Registration",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT": "Esports",
      "LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC": "Esports News",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT": "Event",
      "LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC": "Event Details",
      "LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT": "Game Content",
      "LOL__BREADCRUMB_PAGE_NAME__INDEX": "Home",
      "LOL__BREADCRUMB_PAGE_NAME__INFO": "Information",
      "LOL__BREADCRUMB_PAGE_NAME__INFO_DESC": "Game Information, System Information, Patch Notes etc.,",
      "LOL__BREADCRUMB_PAGE_NAME__ITEMS": "Items",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION": "Patch Notes",
      "LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC": "Patch Notes Details",
      "LOL__BREADCRUMB_PAGE_NAME__NEWS": "News",
      "LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS": "Server Status",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM": "System",
      "LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC": "System Information",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO": "Video",
      "LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC": "Video Details",
      "LOL__CHAMPIONS_INNERPAGE_CHARACTER": "Characters",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN": "ASSASSIN",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER": "FIGHTER",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE": "MAGE",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN": "MARKSMAN",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT": "SUPPORT",
      "LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK": "TANK",
      "LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN": "Default Skin",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY": "Difficulty",
      "LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY": "Easy / Normal / Difficult",
      "LOL__CHAMPIONS_INNERPAGE__E": "E",
      "LOL__CHAMPIONS_INNERPAGE__PASSIVE": "Passive",
      "LOL__CHAMPIONS_INNERPAGE__Q": "Q",
      "LOL__CHAMPIONS_INNERPAGE__R": "R",
      "LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE": "Skills Introduction",
      "LOL__CHAMPIONS_INNERPAGE__SKIN": "Skins",
      "LOL__CHAMPIONS_INNERPAGE__W": "W",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ALL": "All",
      "LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN": "Assassin",
      "LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER": "Figher",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MAGE": "Mage",
      "LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN": "Marksman",
      "LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT": "Support",
      "LOL__CHAMPIONS_PAGE__CATEGORY_TANK": "Tank",
      "LOL__CHAMPIONS_PAGE__DESC": "With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all!",
      "LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS": "No matching champions found.",
      "LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS": "Champion Search",
      "LOL__DOWNLOAD__ACCOUNT_APPLY_LINK": "https://sso.garena.com/ui/register",
      "LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT": "Download",
      "LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC": "If you encounter an error during the update, you can try to update the \"Game Client\" manually.",
      "LOL__DOWNLOAD__CURRENT_VERSION__TOPIC": "Current Patch",
      "LOL__DOWNLOAD__DRIVER__CONTENT_DESC": "In order to maintain the best graphic performances of \"League of Legends\", please update the graphics card driver regularly. Find the driver you need.",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD": "AMD Software Update",
      "LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA": "NVIDIA Software Update",
      "LOL__DOWNLOAD__DRIVER__TOPIC": "Driver",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_1": "2.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_2": "Above 2 GB",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_3": "Window XP SP3<br>Windows Vista<br>Window 7<br>(Currently unable to support Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_4": "Built-in graphics card HD3000 and above",
      "LOL__DOWNLOAD__EAUIPMENT__BASIC_5": "Windows Standards and Compatibility",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1": "Equipment Items",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2": "Minimum Requirements",
      "LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3": "Recommended Requirements",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1": "CPU",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2": "Random Access Memory(RAM)",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3": "Operating System",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4": "Graphics Card",
      "LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5": "Sound Card",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1": "3.0 GHz",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2": "Above 4 GB",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3": "Windows Vista (Latest Version)<br>Window 7<br>(Currently unable to support Mac OS)",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4": "GeForce 8800 or Higher",
      "LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5": "Windows Standards and Compatibility",
      "LOL__DOWNLOAD__EAUIPMENT__TOPIC": "System and Equipment Requirements",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_1": "Release Date",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_2": "Your version",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_3": "Updated Version",
      "LOL__DOWNLOAD__HISTORY__CATEGORY_4": "Download the Patch File",
      "LOL__DOWNLOAD__HISTORY__TOPIC": "Patch Versions List",
      "LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC": "Confirm the current patch version of your computer, and download the corresponding \"manual patch file\".",
      "LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC": "Manual Patch Download Tutorial",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1": "Account Registration",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2": "Game Download",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3": "GPC Download",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1": "Garena Account Registration",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2": "Download via Browser (Slower)",
      "LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3": "Download via GPC (Faster)",
      "LOL__FOOTER__COPYRIGHT": "Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. \"Demo\" and \"League of Legends\" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.",
      "LOL__FOOTER__LINKS__LINK_1_HREF": "//dlgarenanow-a.akamaihd.net/mgames/spdtw/spdcenter/footer/LicensePage/license.html",
      "LOL__FOOTER__LINKS__LINK_1_NAME": "授權資訊",
      "LOL__FOOTER__LINKS__LINK_2_HREF": "https://www.garena.ph/support/",
      "LOL__FOOTER__LINKS__LINK_2_NAME": "Support Center",
      "LOL__FOOTER__LINKS__LINK_3_HREF": "https://contentgarena-a.akamaihd.net/legal/tos/tos_en.html",
      "LOL__FOOTER__LINKS__LINK_3_NAME": "Terms of Service",
      "LOL__FOOTER__LINKS__LINK_4_HREF": "https://www.facebook.com/lolph",
      "LOL__FOOTER__LINKS__LINK_4_NAME": "Offficial Facebook Fan Page",
      "LOL__FOOTER__LINKS__LINK_5_HREF": "FILL in region link5 url",
      "LOL__FOOTER__LINKS__LINK_5_NAME": "link5",
      "LOL__FOOTER__PLAY_FOR_FREE__LINK": "https://lol.garena.ph/download",
      "LOL__FOOTER__PLAY_FOR_FREE__TEXT": "PLAY FOR FREE",
      "LOL__ITEMS_PAGE__CATEGORY_ALL": "All",
      "LOL__ITEMS_PAGE__CATEGORY_ATTACK": "Offensive",
      "LOL__ITEMS_PAGE__CATEGORY_DEFENSE": "Defensive",
      "LOL__ITEMS_PAGE__CATEGORY_MAGIC": "Magic",
      "LOL__ITEMS_PAGE__CATEGORY_RUNSPEED": "Movement Speed",
      "LOL__ITEMS_PAGE__CATEGORY_TOOL": "Tools",
      "LOL__ITEMS_PAGE__FILTER__ARMOR": "Armor",
      "LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION": "Armor Penetration",
      "LOL__ITEMS_PAGE__FILTER__ATTACKSPEED": "Attack Speed",
      "LOL__ITEMS_PAGE__FILTER__BOOTS": "Boots",
      "LOL__ITEMS_PAGE__FILTER__CONSUMABLE": "Consumables",
      "LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION": "Cooldown Reduction",
      "LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE": "Critical Strike",
      "LOL__ITEMS_PAGE__FILTER__DAMAGE": "Attack Damage",
      "LOL__ITEMS_PAGE__FILTER__GOLDPER": "Gold Income",
      "LOL__ITEMS_PAGE__FILTER__HEALTH": "Health",
      "LOL__ITEMS_PAGE__FILTER__HEALTHREGEN": "Health Regeneration",
      "LOL__ITEMS_PAGE__FILTER__LIFESTEAL": "Life Steal",
      "LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION": "Magic Penetration",
      "LOL__ITEMS_PAGE__FILTER__MANA": "Mana",
      "LOL__ITEMS_PAGE__FILTER__MANAREGEN": "Mana Regeneration",
      "LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT": "Other",
      "LOL__ITEMS_PAGE__FILTER__SPELLBLOCK": "Magic Resistance",
      "LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE": "Ability Power",
      "LOL__ITEMS_PAGE__FILTER__VISION": "Vision Control",
      "LOL__ITEMS_PAGE__NO_MAPPING_ITEMS": "No Matching Items Found",
      "LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS": "Advanced Item",
      "LOL__ITEMS_PAGE__POPUP__FORMULA": "Build Paths",
      "LOL__ITEMS_PAGE__POPUP__ITEMS": "Items",
      "LOL__ITEMS_PAGE__SEARCH_ITEMS": "Item Search",
      "LOL__MAIN_PAGE__SYSTEM_MESSAGE": "System Information",
      "LOL__NEWS_PAGE__END": "No remaining information",
      "LOL__NEWS_PAGE__NO_MAPPING_NEWS": "No related news",
      "LOL__NEWS_PAGE__SEARCH_PLACEHOLDER": "Search",
      "LOL__NOT_FOUND__CONTENT": "Page not found. Click me to return to the homepage",
      "LOL__NOT_FOUND__TITLE": "404 not found",
      "LOL__REMIND_TEXT__ONLY_TW_REGION": "※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href=\"https://terms.support.garena.com/tw\" target=\"_blank\" rel=\"noreferrer noopener\" style=\"color: white\">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。",
      "LOL__SERVER_PAGE__CURRENT_EXCLUDE": "Recently Resolved",
      "LOL__SERVER_PAGE__CURRENT_STATUS": "Current Status",
      "LOL__SERVER_PAGE__MALFUNCTION_MESSAGE": "Malfunction Information",
      "LOL__SERVER_PAGE__NORMAL_MESSAGE": "Normal Information",
      "LOL__SERVER_PAGE__SERVER_STATUS": "Server Status",
      "LOL__SERVER_PAGE__WARNING_MESSAGE": "Warning Message",
      "LOL__TUTORIAL__CHAMPION__DESC": "Champions get stronger by earning experience to level up and gold to buy more powerful items as the game progresses. Staying on top of these two factors is crucial to overpowering the enemy team and destroying their base.",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE": "EARN EXPERIENCE",
      "LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC": "When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defensive structures.",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY": "EARN GOLD",
      "LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC": "Gold is the in-game currency to buy items for your champion. Earn gold by killing enemy units and champions, assisting in a kill, destroying defensive structures, and equipping gold income items.",
      "LOL__TUTORIAL__CHAMPION__SHOP": "SHOP",
      "LOL__TUTORIAL__CHAMPION__SHOP_DESC": "The Shop is where you can buy and sell items with gold you’ve earned. It can only be accessed while you are at the Fountain.",
      "LOL__TUTORIAL__CHAMPION__TOPIC": "POWER UP YOUR CHAMPION",
      "LOL__TUTORIAL__GET_START": "LET'S GO",
      "LOL__TUTORIAL__LEARN_BASIC": "LEARN THE BASICS",
      "LOL__TUTORIAL__MAP_CONTENT_1__DESC": "The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1": "Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2": "Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1": "YOUR NEXUS",
      "LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2": "ENEMY NEXUS",
      "LOL__TUTORIAL__MAP_CONTENT_1__TOPIC": "DESTROY THE BASE",
      "LOL__TUTORIAL__MAP_CONTENT_2__DESC": "Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defensive structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1": "Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2": "Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1": "TURRETS",
      "LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2": "INHIBITORS",
      "LOL__TUTORIAL__MAP_CONTENT_2__TOPIC": "CLEAR THE PATH",
      "LOL__TUTORIAL__MAP_CONTENT_3__DESC": "In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1": "Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2": "Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are four Elemental Drakes and one Elder Dragon.",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1": "BARON NASHOR",
      "LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2": "DRAKES",
      "LOL__TUTORIAL__MAP_CONTENT_3__TOPIC": "INTO THE JUNGLE",
      "LOL__TUTORIAL__MAP_CONTENT_4__DESC": "There are five positions that make up the recommended team comp for the game. Each lane lends itself to certain kinds of champions and roles—try them all or lock in to the lane that calls you.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1": "Champions in top lane are the tough solo fighters of the team. It’s their job to protect their lane and focus on the enemy team’s most powerful members.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2": "Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment opponents let their guard down.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3": "Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they’re always looking for an opportunity to outplay their opponent.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4": "Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5": "Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1": "TOP LANE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2": "JUNGLE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3": "MID LANE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4": "BOT LANE",
      "LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5": "SUPPORT",
      "LOL__TUTORIAL__MAP_CONTENT_4__TOPIC": "CHOOSE YOUR LANE",
      "LOL__TUTORIAL__SKILL__EQUIPMENT": "ITEMS",
      "LOL__TUTORIAL__SKILL__SKILL": "ABILITIES",
      "LOL__TUTORIAL__SKILL__SKILL_DESC": "Most champions have a unique skill set made up of five skills: passive, three basic skills and ultimate. Skills are assigned to Q, W, E and R buttons.",
      "LOL__TUTORIAL__SKILL__SUMMONER_SKILL": "SUMMONER SPELLS",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL": "UNLOCK YOUR ABILITIES",
      "LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC": "Champions have five core abilities, two special spells, and up to seven items at a time. Figuring out the optimal ability order, summoner spells, and item build for your champion will help you succeed as a team.",
      "LOL__TUTORIAL__WELCOME": "WELCOME TO THE RIFT",
      "LOL__TUTORIAL__WELCOME_DESC": "There’s a lot to learn about League, so we’ll start with the essentials. Explore the guide below to get the rundown on the most popular game mode.",
      "LOL__TUTORIAL__WHAT_IS_LOL": "WHAT IS LEAGUE OF LEGENDS?",
      "LOL__TUTORIAL__WHAT_IS_LOL_DESC": "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory."
    }
  }
};
const vueI18nLoader = false;
const locales = ["tw", "th", "vn", "sg", "ph"];
const defaultLocale = 'tw';
const routesNameSeparator = '___';
const defaultLocaleRouteNameSuffix = 'default';
const strategy = 'prefix_except_default';
const lazy = false;
const langDir = null;
const rootRedirect = null;
const detectBrowserLanguage = {
  "useCookie": true,
  "cookieCrossOrigin": false,
  "cookieDomain": null,
  "cookieKey": "i18n_redirected",
  "cookieSecure": false,
  "alwaysRedirect": false,
  "fallbackLocale": "",
  "onlyOnRoot": false
};
const differentDomains = false;
const seo = false;
const baseUrl = '';
const vuex = {
  "moduleName": "i18n",
  "syncLocale": false,
  "syncMessages": false,
  "syncRouteParams": true
};
const parsePages = true;
const pages = {};
const beforeLanguageSwitch = () => null;
const onLanguageSwitched = () => null;
const IS_UNIVERSAL_MODE = true;
const MODULE_NAME = 'nuxt-i18n';
const LOCALE_CODE_KEY = 'code';
const LOCALE_ISO_KEY = 'iso';
const LOCALE_DOMAIN_KEY = 'domain';
const LOCALE_FILE_KEY = 'file';
const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
};
const COMPONENT_OPTIONS_KEY = 'nuxtI18n';
const localeCodes = ["tw", "th", "vn", "sg", "ph"];
const trailingSlash = undefined;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getParam(paramName, url) {
  const href = url || window.location.href;
  const name = paramName.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function camelizeStr(str) {
  return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}

function snakifyStr(str) {
  return str.replace(/(?:^|\.?)([A-Z])/g, (_, x) => `_${x.toLowerCase()}`);
}

function convertCase(convertFunc) {
  function converter(thing) {
    if (Array.isArray(thing)) {
      return thing.map(i => converter(i));
    }

    if (thing instanceof Object) {
      const newObj = {};
      Object.keys(thing).forEach(k => {
        newObj[convertFunc(k)] = converter(thing[k]);
      });
      return newObj;
    }

    return thing;
  }

  return converter;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkRes(res) {
  if (res && 'error' in res) {
    const errMsg = {
      name: 'apiErr',
      msg: res.error
    };
    throw errMsg;
  }

  return res.data;
}

function catchErr(err) {
  if (err.name === 'apiErr') {
    return err.msg;
  }

  if (err.response && err.response.status) {
    return `${err.response.status} ${err.response.statusText}`;
  }

  return err;
}

function leadingZero(num, size) {
  let s = `${num}`;

  while (s.length < size) s = `0${s}`;

  return s;
}

function timeToYYMMDDHHMM(time) {
  const fillTime = new Date(time * 1000);
  const years = fillTime.getFullYear();
  const months = fillTime.getMonth() + 1;
  const days = fillTime.getDate();
  const hours = fillTime.getHours();
  const minutes = fillTime.getMinutes();
  return `${years}/${leadingZero(months, 2)}/${leadingZero(days, 2)} ${leadingZero(hours, 2)}:${leadingZero(minutes, 2)}`;
}

function timeToHHMMDDMMYY(time) {
  const fillTime = new Date(time * 1000);
  const years = fillTime.getFullYear();
  const months = fillTime.getMonth() + 1;
  const days = fillTime.getDate();
  const hours = fillTime.getHours();
  const minutes = fillTime.getMinutes();
  return `${leadingZero(hours, 2)}:${leadingZero(minutes, 2)} ${leadingZero(days, 2)}/${leadingZero(months, 2)}/${years}`;
}

function getScrollTop() {
  let scrollTop = 0;

  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.getElementById('app')) {
    scrollTop = document.getElementById('app').scrollTop;
  }

  return scrollTop;
}

function getClientHeight() {
  let clientHeight = 0;

  if (document.getElementById('app').clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.getElementById('app').clientHeight, document.documentElement.clientHeight);
  } else {
    clientHeight = Math.max(document.getElementById('app').clientHeight, document.documentElement.clientHeight);
  }

  return clientHeight;
}

function zeroPadding(key, lengthLimit) {
  if (key && key.length >= lengthLimit) return key;
  let newKey = '';

  while (newKey.length + key.length < lengthLimit) {
    newKey += '0';
  }

  return newKey + key;
}

function objectFilter(obj, predicate, predicate1 = item => item, predicate2 = item => item) {
  if (typeof predicate !== 'function') throw new Error('At least one predicate function!');
  return Object.keys(obj).filter(key => {
    return predicate(obj[key]) && predicate1(obj[key]) && predicate2(obj[key]);
  }).reduce(function (res, key) {
    const result = (res[key] = obj[key], res);
    return result;
  }, {});
}

function isInclude(parent, child) {
  return child.every(val => parent.includes(val));
}

function calculatePos(event, initialVal) {
  const width = window.innerWidth || document.body.clientWidth;
  const height = window.innerHeight || document.body.clientHeight;
  const result = {};
  let value = initialVal;

  if (event.clientX < width / 2) {
    // Adjust to prevent overflow
    if (event.clientX + 475 > width) {
      value -= event.clientX + 475 - width;
    }

    result.left = `${value}px`;
  } else {
    // Adjust to prevent overflow
    if (event.clientX - 475 < 0) {
      value += event.clientX - 475;
    }

    result.right = `${value}px`;
  }

  if (event.clientY < height / 2) {
    result.top = `${value}px`;
  } else {
    result.bottom = `${value}px`;
  }

  return result;
}

function resetAnimation({
  className
}) {
  const elem = document.getElementsByClassName(className);

  const toggleClassName = args => {
    return Array.from(args).forEach(el => {
      el.classList.remove(className);
      setTimeout(() => {
        el.classList.add(className);
      }, 0);
    });
  };

  toggleClassName(elem);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getParam,
  camelizeStr,
  snakifyStr,
  delay,
  camelizeKeys: convertCase(camelizeStr),
  snakifyKeys: convertCase(snakifyStr),
  checkRes,
  catchErr,
  timeToYYMMDDHHMM,
  timeToHHMMDDMMYY,
  getScrollTop,
  getClientHeight,
  zeroPadding,
  objectFilter,
  isInclude,
  calculatePos,
  resetAnimation
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6ef38c11", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("16006a58", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4e8213bc", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4a226751", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0a41c4f4", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
module.exports = __webpack_require__(59);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// /* eslint-disable */
// import { redirectMap } from '~/staticData';
// const paramReg = /\/:{1}\w+/gi;
// const defaultMobileReg = /^\/(m{1}\/?)/gi;
// function replaceParam(url, params) {
//   const matched = (url.match(paramReg) || [])
//     .map((match) => match.replace('/:', ''));
//   const result = matched.reduce((result, key) => {
//     const param = params[key];
//     if (param) {
//       return result.replace(`:${key}`, param);
//     }
//     return result;
//   }, url);
//   return result;
// }
// function matchRouteMap(url, params, map, from, to) {
//   const target = map.find((r) => replaceParam(r[from], params) === url);
//   if (target) {
//     return replaceParam(target[to], params);
//   }
//   return false;
// }
// function matchRouteHandler(map, { req, params, redirect, error }, from, to) {
//   const target = matchRouteMap(req.url, params, map, from, to);
//   if (!target) return error({ statusCode: 404 });
//   redirect(target);
// }
// function isMobileDevice(req) {
//   return /Android|webOS|iPhone|iPad|iPod|Opera Mini|IEMobile|BlackBerry/i.test(
//     req.headers['user-agent']
//   );
// }
// function isMobilePath(url, re) {
//   const mobileReg = re || defaultMobileReg;
//   return mobileReg.test(url);
// }
// function shouldGoMobile(req) {
//   return isMobileDevice(req) && !isMobilePath(req.url);
// }
// function shouldGoPc(req) {
//   return !isMobileDevice(req) && isMobilePath(req.url);
// }
// // default use 302 redirect, 301 will cause disk cache
// export default function(cx) {
//   if (process.server) {
//     const { req } = cx;
//     if (shouldGoMobile(req)) {
//       matchRouteHandler(redirectMap, cx, 'pc', 'm');
//     } else if (shouldGoPc(req)) {
//       matchRouteHandler(redirectMap, cx, 'm', 'pc');
//     }
//   }
// }

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_099ab939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_099ab939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_099ab939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_099ab939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_099ab939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_099ab939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-099ab939{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-099ab939{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-099ab939{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-099ab939{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#NotFoundPage #NotFoundPageContent[data-v-099ab939]{margin-bottom:.8rem}@media screen and (max-width:1000px){#NotFoundPage #NotFoundPageContent[data-v-099ab939]{padding:0 .2rem}}#NotFoundPage #NotFoundPageContent .notFound[data-v-099ab939]{height:4rem;display:flex;align-items:center;justify-content:center;flex-direction:column}#NotFoundPage #NotFoundPageContent .notFound .title[data-v-099ab939]{font-size:.4rem}#NotFoundPage #NotFoundPageContent .notFound .content[data-v-099ab939]{font-size:.2rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ac065e1c", content, true)

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(36);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700,900|Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=chinese-traditional,latin-ext,vietnamese);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box;font-size:16px;line-height:1.15;-webkit-text-size-adjust:none}*,:after,:before{box-sizing:inherit}body,h1,h2,h3,h4,h5,h6,ol,p,ul{margin:0;padding:0;font-weight:400}ol,ul{list-style:none}img{height:auto}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;outline:none}@font-face{font-family:footericon;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:\"Noto Sans TC\";font-style:normal;font-weight:400;src:url(https://cdngarenanow-a.akamaihd.net/games/lol/tw/web/media/upload/fonts/NotoSansTC-Medium.woff2) format(\"woff2\"),url(https://cdngarenanow-a.akamaihd.net/games/lol/tw/web/media/upload/fonts/NotoSansTC-Medium.woff) format(\"woff\"),url(https://cdngarenanow-a.akamaihd.net/games/lol/tw/web/media/upload/fonts/NotoSansTC-Medium.otf) format(\"opentype\")}html{height:100%;font-size:100px}@media screen and (max-width:1334px){html{font-size:7.49625vw}}@media screen and (max-width:1000px){html{font-size:10vw}html #J-sitebar{display:none}}@media screen and (max-width:750px){html{font-size:13.33333vw}}html body{width:100%;height:100%}html .lock{overflow:hidden}html a{text-decoration:none}html img{width:100%}html input::-webkit-input-placeholder{line-height:normal!important}html .swiper-pagination-bullet{width:.12rem;height:.12rem;background:#559392;opacity:1!important}html .swiper-pagination-bullet-active{background:#c2902d}html .swiper-container-horizontal>.swiper-pagination-bullets{bottom:.17rem}@media screen and (max-width:1000px){html .swiper-container-horizontal>.swiper-pagination-bullets{bottom:.04rem}}html .swiper-container{width:100%;height:100%}html .swiper-slide{text-align:center;font-size:18px}html .clearfix{clear:both}*,:after,:before{box-sizing:border-box;margin:0}a{color:#1398e6}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.6ff7df1.ttf";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.1f3a3c8.woff";

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#app{position:relative;z-index:1;width:100%;height:100%;font-size:.36rem;font-family:Roboto,Arial,Helvetica,\"Droid Sans\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;text-align:center;background:#fff;line-height:1}html[data-region=tw] #app{font-family:\"Noto Sans TC\",Arial,Helvetica,\"Droid Sans\",sans-serif!important}#app [v-cloak]{display:none}@media screen and (max-width:750px){#app .main{padding-top:1rem;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}}#app .container{width:12.2rem;height:100%;margin:auto}#app .container.container1334{width:13.34rem}@media screen and (max-width:1000px){#app .container.container1334{width:10rem}}@media screen and (max-width:750px){#app .container.container1334{width:7.5rem;height:auto}}@media screen and (max-width:1000px){#app .container{width:10rem}}@media screen and (max-width:750px){#app .container{width:7.5rem;height:auto}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1c267e16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1c267e16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1c267e16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1c267e16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1c267e16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1c267e16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-1c267e16{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-1c267e16{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-1c267e16{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-1c267e16{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#m-nav[data-v-1c267e16]{display:none}@media screen and (max-width:750px){#m-nav[data-v-1c267e16]{width:80%;height:100%;display:block;position:fixed;top:0;right:-85%;box-shadow:-3px 0 10px rgba(0,0,0,.7);transition:right .5s}#m-nav.active[data-v-1c267e16]{right:0}#m-nav .m-header[data-v-1c267e16]{width:100%;height:1rem;position:absolute;top:0;right:0;background:#101215}#m-nav .m-header .m-sidebar-logo[data-v-1c267e16]{width:1.8rem;height:1rem;margin-left:.2rem;padding-top:.15rem}#m-nav .m-header .m-sidebar-logo a[data-v-1c267e16]{display:block;width:2rem;height:1rem;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/logo.png) no-repeat;background-size:contain}#m-nav .m-content[data-v-1c267e16]{width:100%;height:100%;position:absolute;top:1rem;right:0;color:#fff;background:#061d25;overflow-y:scroll}#m-nav .m-content .group[data-v-1c267e16]{padding:.2rem .3rem;text-align:left}}@media screen and (max-width:750px)and (max-width:750px){#m-nav .m-content .group.isDownload[data-v-1c267e16]{display:none}}@media screen and (max-width:750px){#m-nav .m-content .group .title[data-v-1c267e16]{font-size:.32rem;background:linear-gradient(#fce5b9,#d1ad6f);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:tan;font-weight:600}}@media screen and (max-width:750px){#m-nav .m-content .group ul[data-v-1c267e16]{max-height:0;transition:max-height .5s;overflow:hidden}#m-nav .m-content .group ul.active[data-v-1c267e16]{max-height:5rem}#m-nav .m-content .group ul li[data-v-1c267e16]{display:block;padding:.1rem 0 .1rem .3rem}#m-nav .m-content .group ul li[data-v-1c267e16]:before{content:\"\";display:inline-block;vertical-align:middle;border-top:.06rem solid #061d25;border-bottom:.06rem solid #061d25;border-left:.09rem solid #fff;margin-right:.2rem}#m-nav .m-content .group ul li a[data-v-1c267e16]{color:#fff;font-size:.28rem;display:inline-block}html[data-region=th] #m-nav .m-content .group ul li a[data-v-1c267e16]{font-family:\"Kanit\",Arial,Helvetica,sans-serif}}#navBtn[data-v-1c267e16]{display:none}@media screen and (max-width:750px){#navBtn[data-v-1c267e16]{width:.6rem;height:.6rem;padding:.12rem 0;border-radius:50%;display:block;display:flex;flex-direction:column;background:#ccbe91;box-sizing:border-box;position:absolute;top:0;right:.4rem;bottom:0;margin:auto 0;z-index:100}#navBtn .line[data-v-1c267e16]{width:.29rem;height:4px;margin:auto;display:block;background:#000;border-radius:21px;transition:all .3s ease-in-out}#navBtn.active .line[data-v-1c267e16]:first-child{transform:translateY(.12rem) rotate(45deg)}#navBtn.active .line[data-v-1c267e16]:nth-child(2){opacity:0}#navBtn.active .line[data-v-1c267e16]:nth-child(3){transform:translateY(-.12rem) rotate(-45deg)}}#header[data-v-1c267e16]{width:100%;height:.7rem;z-index:100;position:-webkit-sticky;position:sticky;top:0;background:#101215}#header .container[data-v-1c267e16]{padding:0}@media screen and (max-width:750px){#header[data-v-1c267e16]{height:1rem;position:fixed;top:0;left:0;z-index:98}}#header .logo[data-v-1c267e16]{width:14%;height:.7rem;display:inline-block}@media screen and (max-width:750px){#header .logo[data-v-1c267e16]{width:2rem;height:1rem;margin:0 auto;padding-left:0;padding-top:.12rem}}#header .logo a[data-v-1c267e16]{width:1.62rem;height:.6rem;margin-top:.05rem;display:block;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/logo.png) no-repeat;background-size:contain;cursor:pointer}@media screen and (max-width:750px){#header .logo a[data-v-1c267e16]{width:auto;height:100%;margin-top:0}}#header .pc-nav[data-v-1c267e16]{width:86%;height:100%;float:right;display:block}@media screen and (max-width:750px){#header .pc-nav[data-v-1c267e16]{display:none}}#header .pc-nav :hover~.pc-dropdown[data-v-1c267e16]{display:block}#header .pc-nav .nav[data-v-1c267e16]{width:100%;height:100%}#header .pc-nav .nav li[data-v-1c267e16]{height:100%;display:inline-block;text-align:center;vertical-align:top}#header .pc-nav .nav li a[data-v-1c267e16]{display:flex;align-items:center;justify-content:center;font-size:.18rem;height:98%;background:linear-gradient(#fce5b9,#c19e68);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:tan;font-weight:600}html[data-region=th] #header .pc-nav .nav li a[data-v-1c267e16]{font-family:\"Kanit\",Arial,Helvetica,sans-serif}#header .pc-nav .nav li a.active[data-v-1c267e16]{color:red;border-bottom:3px solid #0bc6e3}#header .pc-nav .pc-dropdown[data-v-1c267e16]{width:100%;height:auto;background:rgba(6,28,37,.9);position:absolute;top:.7rem;left:0;z-index:999}#header .pc-nav .pc-dropdown .container .left[data-v-1c267e16],#header .pc-nav .pc-dropdown .container .right[data-v-1c267e16]{float:left}#header .pc-nav .pc-dropdown .container .left[data-v-1c267e16]{width:14%}#header .pc-nav .pc-dropdown .container .left[data-v-1c267e16]:before{content:\"​\"}#header .pc-nav .pc-dropdown .container .right[data-v-1c267e16]{width:86%}#header .pc-nav .pc-dropdown .container .right li[data-v-1c267e16]{display:inline-block;vertical-align:top}#header .pc-nav .pc-dropdown .container .right li[data-v-1c267e16] :hover{color:#0bc6e3}#header .pc-nav .pc-dropdown .container .right li a[data-v-1c267e16]{font-size:.15rem;padding:.11rem 0;color:#fff;display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_af4fec6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_af4fec6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_af4fec6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_af4fec6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_af4fec6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_af4fec6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-af4fec6c{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-af4fec6c{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-af4fec6c{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-af4fec6c{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#footer[data-v-af4fec6c]{padding:10px 0 50px;margin-top:-10px;color:#fff;background:#101215}@media screen and (max-width:1000px){#footer[data-v-af4fec6c]{padding:50px 0}}#footer .remind-text[data-v-af4fec6c]{font-size:15px;margin:40px 55px 0;padding:18px 20px;border:1px solid #404447;text-align:left;box-sizing:border-box}@media screen and (max-width:1000px){#footer .remind-text[data-v-af4fec6c]{margin:0 37px 28px;padding:18px 29px}}#footer .bottom[data-v-af4fec6c]{width:1000px;font:12px Microsoft JhengHei,arial;display:flex;align-items:center;justify-content:center;flex-direction:column;margin:40px auto 0}@media screen and (max-width:1000px){#footer .bottom[data-v-af4fec6c]{width:auto;display:block;margin:0}}html[data-region=tw] #footer .bottom[data-v-af4fec6c]{align-items:unset;flex-direction:unset}#footer .bottom .logos[data-v-af4fec6c]{width:180px;height:45px;display:flex;margin:0 auto 20px;background-position:center 0}html[data-region=tw] #footer .bottom .logos[data-v-af4fec6c]{width:200px;height:45px;background-size:100% 100%}html[data-region=vn] #footer .bottom .logos[data-v-af4fec6c]{width:100%;height:65px;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/footer/logos-vn.png) no-repeat;background-position:center 0}@media screen and (max-width:1000px){#footer .bottom .logos[data-v-af4fec6c]{width:320px;margin:0 auto 20px}}#footer .bottom .cnt[data-v-af4fec6c]{flex:1;text-align:left}html[data-region=tw] #footer .bottom .cnt[data-v-af4fec6c]{font-size:12px}@media screen and (max-width:1000px){html[data-region=tw] #footer .bottom .cnt[data-v-af4fec6c]{width:auto;text-align:center}}html[data-region=tw] #footer .bottom .cnt .links[data-v-af4fec6c]{padding:6px 0;margin:8px 0 0;display:inline-block;background:#2d2d2d}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]{color:#fff;display:inline-flex;align-items:center;flex:1 1 auto;padding:0 10px;position:relative;box-sizing:border-box;font-family:footericon;cursor:pointer}@media screen and (max-width:1000px){html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]{font-size:13px}}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]:before{content:\"\";font-family:footericon;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 5px 0 0}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]:after{content:\"\";position:absolute;top:5px;right:0;bottom:5px;width:1px;background:currentColor}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]:nth-child(2):before{content:\"\"}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]:nth-child(3):before{content:\"\"}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]:nth-child(4):before{content:\"\"}html[data-region=tw] #footer .bottom .cnt .links .link[data-v-af4fec6c]:last-child:after{display:none}html[data-region=vn] #footer .bottom .cnt .vn-playForFree[data-v-af4fec6c]{margin-top:30px;text-align:center}html[data-region=vn] #footer .bottom .cnt .vn-playForFree .playForFree[data-v-af4fec6c]{color:#fff;width:180px;height:50px;line-height:52px;font-size:16px;font-weight:600;margin-right:30px;display:inline-block;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/footer/playForFree.png) no-repeat;background-size:contain;vertical-align:middle}@media screen and (max-width:750px){html[data-region=vn] #footer .bottom .cnt .vn-playForFree .playForFree[data-v-af4fec6c]{display:none}}html[data-region=vn] #footer .bottom .cnt .vn-playForFree .age-limit[data-v-af4fec6c]{width:116px;height:51px;line-height:52px;font-size:16px;vertical-align:middle;display:inline-block;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/footer/vn-12.png) no-repeat;background-size:contain}#footer .bottom .cnt .copyrights[data-v-af4fec6c]{color:#fff;line-height:1.4;text-align:center;padding:0 5px}html[data-region=tw] #footer .bottom .cnt .copyrights[data-v-af4fec6c]{text-align:left}@media screen and (max-width:1000px){html[data-region=tw] #footer .bottom .cnt .copyrights[data-v-af4fec6c]{width:100%;max-width:500px;margin:auto;text-align:center}}#footer .bottom .cnt .social-links[data-v-af4fec6c]{margin-top:30px;text-align:center}#footer .bottom .cnt .social-links .playForFree[data-v-af4fec6c]{width:180px;height:50px;line-height:52px;font-size:16px;font-weight:600;display:inline-block;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/footer/playForFree.png) no-repeat;background-size:contain;vertical-align:middle}@media screen and (max-width:750px){#footer .bottom .cnt .social-links .playForFree[data-v-af4fec6c]{display:none}}#footer .bottom .cnt .social-links .links[data-v-af4fec6c]{padding:6px 0;font-size:15px;font-weight:600;display:inline-block;vertical-align:middle}html[data-region=th] #footer .bottom .cnt .social-links .links[data-v-af4fec6c]{vertical-align:sub;margin-top:20px}#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]{color:#fff;display:inline-flex;align-items:center;flex:1 1 auto;padding:0 10px;position:relative;box-sizing:border-box;font-family:footericon;cursor:pointer}#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]:before{content:\"\";font-size:1.3em;font-family:footericon;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 .05rem 0 0}#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]:nth-child(2):before{content:\"\"}#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]:nth-child(3):before{content:\"\"}#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]:nth-child(4):before,#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]:nth-child(5):before{content:\"\"}#footer .bottom .cnt .social-links .links .link[data-v-af4fec6c]:last-child:after{display:none}#footer .bottom .cnt .social-links .links .link .link-txt[data-v-af4fec6c]{font-size:10px}#footer .bottom .lv[data-v-af4fec6c]{display:flex;flex:1;margin-left:19px;text-align:left;font-size:0}@media screen and (max-width:1000px){#footer .bottom .lv[data-v-af4fec6c]{margin:15px auto 0;display:inline-block;text-align:center}}#footer .bottom .lv .lv-icon--12[data-v-af4fec6c]{width:45px;height:45px;margin-right:10px;display:inline-block;background:url(https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/icon-15.png) no-repeat;background-size:cover}@media screen and (max-width:1000px){#footer .bottom .lv .lv-icon--12[data-v-af4fec6c]{margin-right:7px}}#footer .bottom .lv .lv-text[data-v-af4fec6c]{max-width:90%;font-size:10px;display:inline-block;vertical-align:top}@media screen and (max-width:1000px){#footer .bottom .lv .lv-text[data-v-af4fec6c]{text-align:left;max-width:280px}}#footer .bottom .lv .lv-text p[data-v-af4fec6c]{line-height:1.4}#footer .bottom .lv .lv-text .service-region[data-v-af4fec6c]{color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  async nuxtServerInit({
    dispatch
  }, {
    req
  }) {
    await dispatch('Nav/getNav', {
      route: req.url
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  actions
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const state = () => ({
  banList: [],
  loading: true
});

const TOGGLE_BAN_LOADING = 'TOGGLE_BAN_LOADING';
const UPDATE_BAN_LIST = 'UPDATE_BAN_LIST';
const actions = {
  async getBanList({
    commit
  }, {
    months
  }) {
    try {
      commit(TOGGLE_BAN_LOADING, true);
      const res = await this.$api.$get('/api/ban/month', {
        params: {
          delta_month: months
        }
      });
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_BAN_LIST, data.banList);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_BAN_LOADING, false);
    }
  },

  async getBanSummoner({
    commit
  }, {
    name
  }) {
    try {
      commit(TOGGLE_BAN_LOADING, true);
      const res = await this.$api.$get('/api/ban/search', {
        params: {
          summoner: name
        }
      });
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_BAN_LIST, data.banList);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_BAN_LOADING, false);
    }
  }

};
/* eslint-disable no-param-reassign, no-shadow */

const mutations = {
  [TOGGLE_BAN_LOADING](state, bool) {
    state.loading = bool;
  },

  [UPDATE_BAN_LIST](state, banList) {
    state.banList = banList;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const initialBreadData = [{
  name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
  url: '/'
}, {
  name: 'LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT',
  url: '/champions'
}, {
  name: 'LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS',
  url: '/champions'
}];

const state = () => ({
  champions: null,
  loading: true,
  // detail page
  buttonsText: ['LOL__CHAMPIONS_INNERPAGE__PASSIVE', 'LOL__CHAMPIONS_INNERPAGE__Q', 'LOL__CHAMPIONS_INNERPAGE__W', 'LOL__CHAMPIONS_INNERPAGE__E', 'LOL__CHAMPIONS_INNERPAGE__R'],
  championInfo: null,
  breadData: initialBreadData,
  selectedSkill: 0,
  selectedVideoUrl: null,
  // items
  items: null
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_CHAMPIONS = 'UPDATE_CHAMPIONS';
const UPDATE_CHAMPION_INFO = 'UPDATE_CHAMPION_INFO';
const UPDATE_BREAD_DATA = 'UPDATE_BREAD_DATA';
const RESET_BREAD_DATA = 'RESET_BREAD_DATA';
const INITIAL_VIDEO_KEY = 'INITIAL_VIDEO_KEY';
const UPDATE_VIDEO_KEY = 'UPDATE_VIDEO_KEY';
const UPDATE_SELECTED_SKILL = 'UPDATE_SELECTED_SKILL';
const UPDATE_ITEMS = 'UPDATE_ITEMS';
const actions = {
  async getAllChampionsData({
    commit,
    rootState
  }) {
    try {
      commit(TOGGLE_LOADING, true);
      const {
        cdn,
        dd
      } = rootState.DDragon.ddragonEnv;
      const url = `${cdn}/${dd}/data/${"zh_TW"}/champion.json`;
      const res = await fetch(url).then(res => res.json());
      if (res.data) commit(UPDATE_CHAMPIONS, res.data);
    } catch (error) {// console.log(error);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },

  async getChampionsDetail({
    commit,
    rootState
  }, championName) {
    try {
      const {
        cdn,
        dd
      } = rootState.DDragon.ddragonEnv;
      const url = `${cdn}/${dd}/data/${"zh_TW"}/champion/${championName}.json`;
      const res = await fetch(url).then(res => res.json());
      const championInfo = res.data[championName];
      const championKey = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].zeroPadding(championInfo.key, 4);
      commit(RESET_BREAD_DATA);
      commit(UPDATE_CHAMPION_INFO, championInfo);
      commit(UPDATE_BREAD_DATA, {
        name: championInfo.name,
        url: championName
      });
      commit(INITIAL_VIDEO_KEY, championKey);
    } catch (error) {// alert(error);
    }
  },

  handleSelectedSkill({
    state,
    commit
  }, index) {
    const championKey = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].zeroPadding(state.championInfo.key, 4);
    commit(UPDATE_SELECTED_SKILL, index);
    commit(UPDATE_VIDEO_KEY, {
      championKey,
      index
    });
    _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].resetAnimation({
      className: 'fadeIn'
    });
  },

  async getAllItemsData({
    commit,
    rootState
  }) {
    try {
      commit(TOGGLE_LOADING, true);
      const {
        cdn,
        dd
      } = rootState.DDragon.ddragonEnv;
      const url = `${cdn}/${dd}/data/${"zh_TW"}/item.json`;
      const res = await fetch(url).then(res => res.json());
      commit(UPDATE_ITEMS, res.data);
    } catch (error) {// alert(error);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  }

};
const mutations = {
  [TOGGLE_LOADING](state, status) {
    state.loading = status;
  },

  [UPDATE_CHAMPIONS](state, champions) {
    state.champions = champions;
  },

  [UPDATE_CHAMPION_INFO](state, championInfo) {
    state.championInfo = championInfo;
  },

  [UPDATE_BREAD_DATA](state, data) {
    state.breadData.push(data);
  },

  [RESET_BREAD_DATA](state) {
    state.breadData = initialBreadData.slice();
  },

  [INITIAL_VIDEO_KEY](state, championKey) {
    state.selectedVideoUrl = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_P1.mp4`;
  },

  [UPDATE_VIDEO_KEY](state, {
    championKey,
    index
  }) {
    const skillEng = ['P', 'Q', 'W', 'E', 'R'];
    state.selectedVideoUrl = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_${skillEng[index]}1.mp4`;
  },

  [UPDATE_SELECTED_SKILL](state, index) {
    state.selectedSkill = index;
  },

  [UPDATE_ITEMS](state, items) {
    state.items = items;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const state = () => ({
  ddragonEnv: null
}); // const TOGGLE_LOADING = 'TOGGLE_LOADING';


const UPDATE_DDRAGON_ENV_DATA = 'UPDATE_DDRAGON_ENV_DATA';
const actions = {
  async getDDragonEnvData({
    commit
  }) {
    try {
      const res = await fetch('https://ddragon.leagueoflegends.com/realms/tw.json').then(res => res.json());
      commit(UPDATE_DDRAGON_ENV_DATA, res);
    } catch (error) {// alert(error);
    }
  }

};
/* eslint-disable no-param-reassign, no-shadow */

const mutations = {
  [UPDATE_DDRAGON_ENV_DATA](state, ddragonEnv) {
    state.ddragonEnv = ddragonEnv;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const state = () => ({
  loading: true,
  accountRegisterLink: null,
  browserDownloadLink: null,
  platformDownloadLink: null,
  currentUpdateFile: null,
  updates: null,
  updateTutorialVideo: null,
  requirement: null,
  driver: null
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_DOWNLOAD = 'UPDATE_DOWNLOAD';
const actions = {
  async getDownloadInfo({
    commit
  }) {
    try {
      // commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/download/info'); // commit(TOGGLE_LOADING, false);

      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_DOWNLOAD, data);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {// commit(TOGGLE_LOADING, false);
    }
  }

};
/* eslint-disable no-param-reassign, no-shadow */

const mutations = {
  [TOGGLE_LOADING](state, status) {
    state.loading = status;
  },

  [UPDATE_DOWNLOAD](state, data) {
    state.accountRegisterLink = data.accountRegisterLink;
    state.browserDownloadLink = data.browserDownloadLink;
    state.platformDownloadLink = data.platformDownloadLink;
    state.currentUpdateFile = data.currentUpdateFile;
    state.updates = data.updates;
    state.updateTutorialVideo = data.updateTutorialVideo;
    state.requirement = data.requirement;
    state.driver = data.driver;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  apiLoading: true // config: {},

}); // const UPDATE_CONFIG = 'UPDATE_CONFIG';

const UPDATE_APILOADING = 'UPDATE_APILOADING';
const actions = {
  // async getConfig({ commit }) {
  //   // $ prefixed methods to directly get data
  //   // https://axios.nuxtjs.org/usage.html#shortcuts
  //   const res = await this.$api.$get('/api/config');
  //   commit(UPDATE_CONFIG, res);
  //   return res;
  // },
  updateAPILoading({
    commit
  }, bool) {
    commit(UPDATE_APILOADING, bool);
  }

};
const mutations = {
  // [UPDATE_CONFIG](state, payload) {
  //   state.config = payload;
  // },
  [UPDATE_APILOADING](state, bool) {
    state.apiLoading = bool;
  }

};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const state = () => ({
  mainLoading: false,
  banners: [],
  news: [],
  tick: null
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_MAIN = 'UPDATE_MAIN';
const actions = {
  async getMain({
    commit
  }) {
    try {
      commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/index');
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_MAIN, data);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  }

};
const mutations = {
  [TOGGLE_LOADING](state, bool) {
    state.mainLoading = bool;
  },

  [UPDATE_MAIN](state, data) {
    state.banners = data.banners;
    state.news = data.news;
    state.tick = data.tick;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const state = () => ({
  navLoading: false,
  index: null,
  mainItems: [],
  bgImg: '',
  fgImg: ''
});

const mappingRoute = (state, route) => {
  let target;
  const {
    mainItems
  } = state;

  for (let i = 0; i < mainItems.length; i++) {
    const nav = mainItems[i];

    if (nav.navLink === route) {
      target = {
        bgImg: nav.bgImg,
        fgImg: nav.fgImg
      };
      break;
    }

    const {
      dropdownLists
    } = nav;

    if (Array.isArray(dropdownLists)) {
      for (let j = 0; j < dropdownLists.length; j++) {
        const navList = dropdownLists[j];

        if (navList.listLink === route) {
          target = {
            bgImg: navList.bgImg,
            fgImg: navList.fgImg
          };
          break;
        }
      }
    }
  }

  return target;
};

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_NAV = 'UPDATE_NAV';
const UPDATE_BGIMG_AND_FGIMG = 'UPDATE_BGIMG_AND_FGIMG';
const actions = {
  async getNav({
    dispatch,
    commit
  }, {
    route
  }) {
    try {
      commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/navigation-menu');
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_NAV, data);
      if (route !== '/') dispatch('updateBgImgAndFgImg', {
        route
      });
    } catch (error) {// this.app.$sentry.captureException(error);
      // const errMsg = utils.catchErr(error);
      // console(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },

  updateBgImgAndFgImg({
    commit
  }, {
    route
  }) {
    commit(UPDATE_BGIMG_AND_FGIMG, route);
  }

};
const mutations = {
  [TOGGLE_LOADING](state, bool) {
    state.navLoading = bool;
  },

  [UPDATE_NAV](state, data) {
    state.index = data.index;
    state.mainItems = data.mainItems;
  },

  [UPDATE_BGIMG_AND_FGIMG](state, currentRoute) {
    const target = mappingRoute(state, currentRoute);

    if (target) {
      state.bgImg = target.bgImg;
      state.fgImg = target.fgImg;
    }
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const state = () => ({
  topicNewsLoading: true,
  topicNews: [],
  firstTimeLoading: true,
  refetchLoading: false,
  footprint: null,
  news: [],
  page: 1,
  next: false,
  newContent: {},
  categoriesLoading: true,
  categories: [],
  category: null,
  subCategories: []
});

const TOGGLE_TOPIC_NEWS_LOADING = 'TOGGLE_TOPIC_NEWS_LOADING';
const UPDATE_TOPIC_NEWS = 'UPDATE_TOPIC_NEWS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_REFETCH_LOADING = 'TOGGLE_REFETCH_LOADING';
const UPDATE_NEWS = 'UPDATE_NEWS';
const UPDATE_MORE_NEWS = 'UPDATE_MORE_NEWS';
const UPDATE_NEW_CONTENT = 'UPDATE_NEW_CONTENT';
const UPDATE_PAGE = 'UPDATE_PAGE';
const HAS_MORE_ARTICLE = 'HAS_MORE_ARTICLE';
const TOGGLE_CATEGORIES_LOADING = 'TOGGLE_CATEGORIES_LOADING';
const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const RESET_NEWS = 'RESET_NEWS';
const actions = {
  async getTopicNews({
    commit
  }) {
    try {
      commit(TOGGLE_TOPIC_NEWS_LOADING, true);
      const res = await this.$api.$get('/api/news/topic');
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_TOPIC_NEWS, data);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_TOPIC_NEWS_LOADING, false);
    }
  },

  async getNews({
    commit
  }, {
    category,
    keyword,
    perPage,
    page
  }) {
    try {
      commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/news/search', {
        params: {
          category,
          keyword,
          per_page: perPage,
          page
        }
      });
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_NEWS, data);
      if (data.news.length) commit(UPDATE_PAGE);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  },

  async getMoreNews({
    state,
    commit
  }, {
    category,
    keyword,
    perPage
  }) {
    try {
      commit(TOGGLE_REFETCH_LOADING, true);
      const {
        page
      } = state;
      const res = await this.$api.$get('/api/news/search', {
        params: {
          category,
          keyword,
          per_page: perPage,
          page
        }
      });
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      const {
        next
      } = data;
      commit(UPDATE_PAGE);
      commit(UPDATE_MORE_NEWS, data);
      if (next) commit(HAS_MORE_ARTICLE, true);else commit(HAS_MORE_ARTICLE, false);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      await commit(TOGGLE_REFETCH_LOADING, false);
    }
  },

  async getNewsCategories({
    commit
  }) {
    try {
      await commit(TOGGLE_CATEGORIES_LOADING, true);
      const res = await this.$api.$get('/api/news/categories');
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_CATEGORIES, data);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      await commit(TOGGLE_CATEGORIES_LOADING, false);
    }
  },

  async getNewContent({
    commit
  }, {
    newId
  }) {
    try {
      await commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/news/detail', {
        params: {
          news_id: newId
        }
      });
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_NEW_CONTENT, data);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      await commit(TOGGLE_LOADING, false);
    }
  },

  resetNews({
    commit
  }) {
    commit(RESET_NEWS);
  }

};
/* eslint-disable no-param-reassign, no-shadow */

const mutations = {
  [TOGGLE_TOPIC_NEWS_LOADING](state, bool) {
    state.topicNewsLoading = bool;
  },

  [UPDATE_TOPIC_NEWS](state, data) {
    state.topicNews = data.news;
  },

  [TOGGLE_LOADING](state, bool) {
    state.firstTimeLoading = bool;
  },

  [TOGGLE_REFETCH_LOADING](state, bool) {
    state.refetchLoading = bool;
  },

  [UPDATE_NEWS](state, data) {
    state.footprint = data.footprint;
    state.news = data.news;
    state.category = data.category;
    state.subCategories = data.subCategories;
  },

  [UPDATE_MORE_NEWS](state, data) {
    const newNews = state.news.concat(data.news);
    state.news = newNews;
  },

  [UPDATE_NEW_CONTENT](state, data) {
    state.footprint = data.footprint;
    state.newContent = data.newsDetail;
  },

  [UPDATE_PAGE](state) {
    const newCount = state.page + 1;
    state.page = newCount;
  },

  [HAS_MORE_ARTICLE](state, bool) {
    state.next = bool;
  },

  [TOGGLE_CATEGORIES_LOADING](state, bool) {
    state.categoriesLoading = bool;
  },

  [UPDATE_CATEGORIES](state, data) {
    state.categories = data.categories;
  },

  [RESET_NEWS](state) {
    state.firstTimeLoading = true;
    state.refetchLoading = false;
    state.news = [];
    state.page = 1;
    state.next = true;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const state = () => ({
  lists: [],
  loading: true
});

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const UPDATE_SERVER_STATUS_LIST = 'UPDATE_SERVER_STATUS_LIST';
const actions = {
  async getIndexTicks({
    commit
  }) {
    try {
      commit(TOGGLE_LOADING, true);
      const res = await this.$api.$get('/api/index/ticks');
      const data = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkRes(res);
      commit(UPDATE_SERVER_STATUS_LIST, data);
    } catch (error) {// const errMsg = utils.catchErr(error);
      // alert(errMsg);
    } finally {
      commit(TOGGLE_LOADING, false);
    }
  }

};
/* eslint-disable no-param-reassign, no-shadow */

const mutations = {
  [TOGGLE_LOADING](state, status) {
    state.loading = status;
  },

  [UPDATE_SERVER_STATUS_LIST](state, list) {
    state.lists = list;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state,
  actions,
  mutations
});

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("is-https");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLanguageAsync", function() { return loadLanguageAsync; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = [];
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const localeObject = app.i18n.locales.find(l => l[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_CODE_KEY */ "b"]] === locale);

    if (localeObject) {
      const file = localeObject[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_FILE_KEY */ "d"]];

      if (file) {// Hiding template directives from eslint so that parsing doesn't break.

        /*  */
      } else {
        // eslint-disable-next-line no-console
        console.warn(`[${_options__WEBPACK_IMPORTED_MODULE_0__[/* MODULE_NAME */ "f"]}] Could not find lang file for locale ${locale}`);
      }
    }
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0542ed34", content, true)

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:\"swiper-icons\";src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(-1*var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-moz-font-feature-settings:normal,;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(20);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(21);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/tw/middleware.js
const middleware = {};
middleware['redirect'] = __webpack_require__(27);
middleware['redirect'] = middleware['redirect'].default || middleware['redirect'];
/* harmony default export */ var tw_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/tw/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "ROSETTA_REGION": "tw",
        "REGION": "tw",
        "CDN": "https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img",
        "LANG_MAP": "{\"tw\":2}",
        "LOCALE": "tw",
        "REFERER": "https://test-lol.garena.tw",
        "DDRAGON_LOCALE": "zh_TW"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/tw/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(7);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(17);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(15);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/tw/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/tw/router.js





const _26eb9bf2 = () => interopDefault(__webpack_require__.e(/* import() | pages/ban */ 1).then(__webpack_require__.bind(null, 142)));

const _05da8fe0 = () => interopDefault(__webpack_require__.e(/* import() | pages/champions/index */ 3).then(__webpack_require__.bind(null, 143)));

const _1e3b3135 = () => interopDefault(__webpack_require__.e(/* import() | pages/download */ 4).then(__webpack_require__.bind(null, 144)));

const _6d28c063 = () => interopDefault(__webpack_require__.e(/* import() | pages/items */ 6).then(__webpack_require__.bind(null, 145)));

const _493b61fa = () => interopDefault(__webpack_require__.e(/* import() | pages/news/index */ 9).then(__webpack_require__.bind(null, 146)));

const _88c9af16 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 5).then(__webpack_require__.bind(null, 147)));

const _9039167c = () => interopDefault(__webpack_require__.e(/* import() | pages/serverStatus */ 10).then(__webpack_require__.bind(null, 148)));

const _006c390b = () => interopDefault(__webpack_require__.e(/* import() | pages/tutorial */ 11).then(__webpack_require__.bind(null, 149)));

const _1491cb06 = () => interopDefault(__webpack_require__.e(/* import() | pages/news/articles/_content */ 8).then(__webpack_require__.bind(null, 150)));

const _5b6dd1f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/champions/_champion */ 2).then(__webpack_require__.bind(null, 151)));

const _4981628e = () => interopDefault(__webpack_require__.e(/* import() | pages/news/_category */ 7).then(__webpack_require__.bind(null, 152))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
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
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/tw/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=099ab939&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"NotFoundPage"}},[_vm._ssrNode("<div id=\"NotFoundPageContent\" class=\"container\" data-v-099ab939>","</div>",[_vm._ssrNode("<div class=\"notFound\" data-v-099ab939>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-099ab939>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('LOL__NOT_FOUND__TITLE'))+"\n      ")+"</div> "),_vm._ssrNode("<div class=\"content\" data-v-099ab939>","</div>",[_c('nuxt-link',{attrs:{"to":'/'}},[_vm._v("\n          "+_vm._s(_vm.$t('LOL__NOT_FOUND__CONTENT'))+"\n        ")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=099ab939&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  layout: 'error'
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "099ab939",
  "5e6e6392"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/tw/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/tw/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/tw/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/tw/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "01ce8738"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/global.scss
var assets_global = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3ef3ffcd&
var defaultvue_type_template_id_3ef3ffcd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._ssrNode("<div class=\"main\">","</div>",[_c('Topbar'),_vm._ssrNode(" "),_c('Header'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)])}
var defaultvue_type_template_id_3ef3ffcd_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3ef3ffcd&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_3ef3ffcd_render,
  defaultvue_type_template_id_3ef3ffcd_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "2bec0430"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Topbar: __webpack_require__(60).default,Header: __webpack_require__(61).default,Footer: __webpack_require__(62).default})

// CONCATENATED MODULE: ./.nuxt/tw/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./.nuxt/tw/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(43), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(44), 'Ban.js');
  resolveStoreModules(__webpack_require__(45), 'Champion.js');
  resolveStoreModules(__webpack_require__(46), 'DDragon.js');
  resolveStoreModules(__webpack_require__(47), 'Download.js');
  resolveStoreModules(__webpack_require__(48), 'Game.js');
  resolveStoreModules(__webpack_require__(49), 'Main.js');
  resolveStoreModules(__webpack_require__(50), 'Nav.js');
  resolveStoreModules(__webpack_require__(51), 'News.js');
  resolveStoreModules(__webpack_require__(52), 'ServerStatus.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const storeModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(storeModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/tw/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// CONCATENATED MODULE: ./.nuxt/tw/gtm.utils.js
const logSyle = 'background: #2E495E;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;';
function log(...args) {// eslint-disable-next-line no-console
}
// CONCATENATED MODULE: ./.nuxt/tw/gtm.js

const _layer = 'dataLayer';
const _id = '';

function gtmClient(ctx, initialized) {
  return {
    init(id = _id) {
      if (initialized[id] || !window._gtm_inject) {
        return;
      }

      window._gtm_inject(id);

      initialized[id] = true;
      log('init', id);
    },

    push(obj) {
      if (!window[_layer]) {
        window[_layer] = [];
      }

      window[_layer].push(obj);

      log('push', obj);
    }

  };
}

function gtmServer(ctx, initialized) {
  const events = [];
  const inits = [];
  ctx.beforeNuxtRender(() => {
    if (!inits.length && !events.length) {
      return;
    }

    const gtmScript = ctx.app.head.script.find(s => s.hid == 'gtm-script');
    gtmScript.innerHTML = `window['${_layer}']=${JSON.stringify(events)};${gtmScript.innerHTML}`;

    if (inits.length) {
      gtmScript.innerHTML += `;${JSON.stringify(inits)}.forEach(function(i){window._gtm_inject(i)})`;
    }

    const gtmIframe = ctx.app.head.noscript.find(s => s.hid == 'gtm-noscript');

    const renderIframe = id => `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>`;

    if (inits.length) {
      gtmIframe.innerHTML += inits.map(renderIframe);
    }
  });
  return {
    init(id = _id) {
      if (initialized[id]) {
        return;
      }

      inits.push(id);
      initialized[id] = true;
      log('init', id);
    },

    push(obj) {
      events.push(obj);
      log('push', JSON.stringify(obj));
    }

  };
}

function startPageTracking(ctx) {
  ctx.app.router.afterEach(to => {
    setTimeout(() => {
      ctx.$gtm.push(to.gtm || {
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: '' + to.fullPath,
        pageTitle: typeof document !== 'undefined' && document.title || '',
        event: 'nuxtRoute'
      });
    }, 250);
  });
}

/* harmony default export */ var gtm = (function (ctx, inject) {
  const runtimeConfig = ctx.$config && ctx.$config.gtm || {};
  const autoInit = true;
  const id = '';
  const runtimeId = runtimeConfig.id;
  const initialized = autoInit && id ? {
    [id]: true
  } : {};
  const $gtm =  false ? undefined : gtmServer(ctx, initialized);

  if (autoInit && runtimeId && runtimeId !== id) {
    $gtm.init(runtimeId);
  }

  ctx.$gtm = $gtm;
  inject('gtm', ctx.$gtm);
});
// CONCATENATED MODULE: ./.nuxt/tw/nuxt-i18n/middleware.js

/** @type {import('@nuxt/types').Middleware} */

tw_middleware.nuxti18n = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
// EXTERNAL MODULE: ./.nuxt/tw/nuxt-i18n/options.js
var nuxt_i18n_options = __webpack_require__(0);

// CONCATENATED MODULE: ./.nuxt/tw/nuxt-i18n/plugin.routing.js




function localePath(route, locale) {
  const localizedRoute = localeRoute.call(this, route, locale);

  if (!localizedRoute) {
    return;
  }

  return localizedRoute.fullPath;
}

function localeRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  const localizedRoute = Object.assign({}, route);

  if (route.path && !route.name) {
    const isDefaultLocale = locale === nuxt_i18n_options["j" /* defaultLocale */]; // if route has a path defined but no name, resolve full route using the path

    const isPrefixed = // don't prefix default locale
    !(isDefaultLocale && [nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["t" /* strategy */])) && // no prefix for any language
    !(nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) && // no prefix for different domains
    !i18n.differentDomains;
    let path = isPrefixed ? `/${locale}${route.path}` : route.path;
    path = path.replace(/\/+$/, '') + (nuxt_i18n_options["u" /* trailingSlash */] ? '/' : '') || '/';
    localizedRoute.path = path;
  } else {
    if (!route.name && !route.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  return this.router.resolve(localizedRoute).route;
}

function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;

  if (!route) {
    return '';
  }

  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["w" /* vuex */].moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const lang = i18n.locales.find(l => l[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]] === locale);

    if (lang && lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]]) {
      let protocol;

      if (true) {
        const isHTTPS = __webpack_require__(53);

        protocol = this.req && isHTTPS(this.req) ? 'https' : 'http';
      } else {}

      path = protocol + '://' + lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]] + path;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Could not find domain name for locale ${locale}`);
    }
  }

  return path;
}

function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return null;
  }

  return route.name.split(nuxt_i18n_options["s" /* routesNameSeparator */])[0];
}

function getLocaleRouteName(routeName, locale) {
  let name = routeName + (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX ? '' : nuxt_i18n_options["s" /* routesNameSeparator */] + locale);

  if (locale === nuxt_i18n_options["j" /* defaultLocale */] && nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    name += nuxt_i18n_options["s" /* routesNameSeparator */] + nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */];
  }

  return name;
}

const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app
  } = context;
  app.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = NuxtContextProxy(context, localeRoute);
  app.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
});
// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__(22);
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(18);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./.nuxt/tw/nuxt-i18n/seo-head.js


const nuxtI18nSeo = function () {
  if (!(external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) || !this.$i18n || !this.$i18n.locale || !this.$i18n.locales || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] === false || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] && this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]].seo === false) {
    return {};
  }

  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.locales.find(l => codeFromLocale(l) === this.$i18n.locale);
  const currentLocaleIso = isoFromLocale(currentLocale);

  if (currentLocale && currentLocaleIso) {
    metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
  }

  addHreflangLinks.bind(this)(this.$i18n.locales, this.$i18n.__baseUrl, metaObject.link);
  addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
  addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
  addAlternateOgLocales.bind(this)(this.$i18n.locales, currentLocaleIso, metaObject.meta);
  return metaObject;
};

function addHreflangLinks(locales, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
    return;
  }

  const localeMap = new Map();

  for (const locale of locales) {
    const localeIso = isoFromLocale(locale);

    if (!localeIso) {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Locale ISO code is required to generate alternate link`);
      continue;
    }

    const [language, region] = localeIso.split('-');

    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }

    localeMap.set(localeIso, locale);
  }

  for (const [iso, mapLocale] of localeMap.entries()) {
    link.push({
      hid: `i18n-alt-${iso}`,
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(mapLocale.code),
      hreflang: iso
    });
  }

  if (nuxt_i18n_options["j" /* defaultLocale */]) {
    link.push({
      hid: 'i18n-xd',
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(nuxt_i18n_options["j" /* defaultLocale */]),
      hreflang: 'x-default'
    });
  }
}

function addCanonicalLinks(baseUrl, link) {
  const currentRoute = this.localeRoute({ ...this.$route,
    name: this.getRouteBaseName()
  });
  const canonicalPath = currentRoute ? currentRoute.path : null;

  if (!canonicalPath) {
    return;
  }

  link.push({
    hid: 'i18n-can',
    rel: 'canonical',
    href: baseUrl + canonicalPath
  });
}

function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

  if (!hasCurrentLocaleAndIso) {
    return;
  }

  meta.push({
    hid: 'i18n-og',
    property: 'og:locale',
    // Replace dash with underscore as defined in spec: language_TERRITORY
    content: underscoreIsoFromLocale(currentLocale)
  });
}

function addAlternateOgLocales(locales, currentLocaleIso, meta) {
  const localesWithoutCurrent = locales.filter(locale => {
    const localeIso = isoFromLocale(locale);
    return localeIso && localeIso !== currentLocaleIso;
  });
  const alternateLocales = localesWithoutCurrent.map(locale => ({
    hid: `i18n-og-alt-${isoFromLocale(locale)}`,
    property: 'og:locale:alternate',
    content: underscoreIsoFromLocale(locale)
  }));
  meta.push(...alternateLocales);
}

function isoFromLocale(locale) {
  return locale[nuxt_i18n_options["e" /* LOCALE_ISO_KEY */]];
}

function underscoreIsoFromLocale(locale) {
  return isoFromLocale(locale).replace(/-/g, '_');
}

function codeFromLocale(locale) {
  return locale[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]];
}
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(19);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(55);

// CONCATENATED MODULE: ./.nuxt/tw/nuxt-i18n/utils-common.js


/**
 * Parses locales provided from browser through `accept-language` header.
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

const parseAcceptLanguage = input => {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
};
/**
 * Find locale code that best matches provided list of browser locales.
 * @param {string[]} appLocales The user-configured locale codes that are to be matched.
 * @param {string[]} browserLocales The locales to match against configured.
 * @return {string?}
 */

const matchBrowserLocale = (appLocales, browserLocales) => {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // First pass: match exact locale.

  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedCode = appLocales.find(appCode => appCode.toLowerCase() === browserCode.toLowerCase());

    if (matchedCode) {
      matchedLocales.push({
        code: matchedCode,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    if (browserCode.includes('-')) {
      // For backwards-compatibility, this is lower-cased before comparing.
      const languageCode = browserCode.split('-')[0].toLowerCase();

      if (appLocales.includes(languageCode)) {
        // Deduct a thousandth for being non-exact match.
        matchedLocales.push({
          code: languageCode,
          score: 0.999 - index / browserLocales.length
        });
        break;
      }
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : null;
};
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 * @param {string | function} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @return {string}
 */

const resolveBaseUrl = (baseUrl, context) => {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  return baseUrl;
};
/**
 * Get locale code that corresponds to current hostname
 * @param  {object} locales
 * @param  {object} [req] Request object
 * @param  {{ localDomainKey: string, localeCodeKey: string }} options
 * @return {string | null} Locade code found if any
 */

const getLocaleDomain = (locales, req, {
  localDomainKey,
  localeCodeKey
}) => {
  let host = null;

  if (false) {} else if (req) {
    host = req.headers['x-forwarded-host'] || req.headers.host;
  }

  if (host) {
    const matchingLocale = locales.find(l => l[localDomainKey] === host);

    if (matchingLocale) {
      return matchingLocale[localeCodeKey];
    }
  }

  return null;
};
/**
 * Creates getter for getLocaleFromRoute
 * @param  {string[]} localeCodes
 * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
 * @return {(route) => string| null}
 */

const createLocaleFromRouteGetter = (localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) => {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = new RegExp(`^/${localesPattern}/`, 'i');
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {Object} route
   * @param  {string[]} localeCodes
   * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
   * @return {string | null} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return null;
  };

  return getLocaleFromRoute;
};
/**
 * @param {object} [req]
 * @param {{ useCookie: boolean, localeCodes: string[], cookieKey: string}} options
 * @return {string | void}
 */

const getLocaleCookie = (req, {
  useCookie,
  cookieKey,
  localeCodes
}) => {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
};
/**
 * @param {string} locale
 * @param {object} [res]
 * @param {{ useCookie: boolean, cookieDomain: string, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

const setLocaleCookie = (locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) => {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (typeof headers === 'string') {
      headers = [headers];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
};
const registerStore = (store, vuex, localeCodes, moduleName) => {
  store.registerModule(vuex.moduleName, {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => locale => routeParams[locale] || {}
      } : {})
    }
  }, {
    preserveState: !!store.state[vuex.moduleName]
  });
};
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 * @param  {Store} store     Vuex store
 * @param  {String} locale   Current locale
 * @param  {Object} messages Current messages
 * @param  {{ vuex: object }} options
 * @return {Promise(void)}
 */

const syncVuex = async (store, locale = null, messages = null, {
  vuex
}) => {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
};

const isObject = value => value && !Array.isArray(value) && typeof value === 'object';
/**
 * Validate setRouteParams action's payload
 * @param {object} routeParams The action's payload
 * @param {string[]} localeCodes
 * @param {string} moduleName
 */


const validateRouteParams = (routeParams, localeCodes, moduleName) => {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(`[${moduleName}] Route params should be an object`);
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for key ${key} which is not a valid locale`);
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for locale ${key} with a non-object value`);
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/tw/nuxt-i18n/plugin.main.js






external_vue_default.a.use(external_vue_i18n_default.a);
const {
  alwaysRedirect,
  onlyOnRoot,
  fallbackLocale
} = nuxt_i18n_options["l" /* detectBrowserLanguage */];
const getLocaleFromRoute = createLocaleFromRouteGetter(nuxt_i18n_options["o" /* localeCodes */], {
  routesNameSeparator: nuxt_i18n_options["s" /* routesNameSeparator */],
  defaultLocaleRouteNameSuffix: nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */]
});
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (nuxt_i18n_options["w" /* vuex */] && store) {
    registerStore(store, nuxt_i18n_options["w" /* vuex */], nuxt_i18n_options["o" /* localeCodes */], nuxt_i18n_options["f" /* MODULE_NAME */]);
  }

  if ( true && nuxt_i18n_options["n" /* lazy */]) {
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale) {
        langs[locale] = app.i18n.getLocaleMessage(locale);
      }

      if (fallbackLocale && locale !== fallbackLocale) {
        langs[fallbackLocale] = app.i18n.getLocaleMessage(fallbackLocale);
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } = nuxt_i18n_options["l" /* detectBrowserLanguage */];

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    } // Abort if newLocale did not change


    if (newLocale === app.i18n.locale) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    } // Lazy-loading enabled


    if (nuxt_i18n_options["n" /* lazy */]) {
      const {
        loadLanguageAsync
      } = __webpack_require__(56); // Load fallback locale.


      if (app.i18n.fallbackLocale && newLocale !== app.i18n.fallbackLocale) {
        await loadLanguageAsync(context, app.i18n.fallbackLocale);
      }

      await loadLanguageAsync(context, newLocale);
    }

    app.i18n.locale = newLocale;
    await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), {
      vuex: nuxt_i18n_options["w" /* vuex */]
    }); // Must retrieve from context as it might have changed since plugin initialization.

    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getRedirectPathForLocale = (route, locale) => {
    if (!locale || app.i18n.differentDomains || nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!onlyOnRoot || locale !== nuxt_i18n_options["j" /* defaultLocale */] || nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (redirectPath === route.fullPath) {
      return '';
    }

    return redirectPath;
  }; // Called by middleware on navigation (also on the initial one).


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["r" /* rootRedirect */]) {
      let statusCode = 302;
      let path = nuxt_i18n_options["r" /* rootRedirect */];

      if (typeof nuxt_i18n_options["r" /* rootRedirect */] !== 'string') {
        statusCode = nuxt_i18n_options["r" /* rootRedirect */].statusCode;
        path = nuxt_i18n_options["r" /* rootRedirect */].path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
    const finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    await app.i18n.setLocale(finalLocale);
    return [null, null];
  };

  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}

    if (onlyOnRoot && nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX && route.path !== '/') {
      return false;
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      matchedLocale = matchBrowserLocale(nuxt_i18n_options["o" /* localeCodes */], parseAcceptLanguage(req.headers['accept-language']));
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return false;
  };

  const extendVueI18nInstance = i18n => {
    i18n.locales = nuxt_i18n_options["p" /* locales */];
    i18n.defaultLocale = nuxt_i18n_options["j" /* defaultLocale */];
    i18n.differentDomains = nuxt_i18n_options["m" /* differentDomains */];
    i18n.beforeLanguageSwitch = nuxt_i18n_options["i" /* beforeLanguageSwitch */];
    i18n.onLanguageSwitched = nuxt_i18n_options["q" /* onLanguageSwitched */];

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["o" /* localeCodes */]
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.__baseUrl = app.i18n.__baseUrl;
  }; // Set instance options


  const vueI18nOptions = typeof nuxt_i18n_options["v" /* vueI18n */] === 'function' ? Object(nuxt_i18n_options["v" /* vueI18n */])(context) : lodash_clonedeep_default()(nuxt_i18n_options["v" /* vueI18n */]);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  app.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
  app.i18n.__onNavigate = onNavigate; // Inject seo function

  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      app.i18n.locales.forEach(locale => {
        locale.domain = store.state.localeDomains[locale.code];
      });
    }
  }

  let finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage(route);

  if (!finalLocale) {
    if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncLocale && store && store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale !== '') {
      finalLocale = store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const options = {
        localDomainKey: nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */],
        localeCodeKey: nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]
      };
      const domainLocale = getLocaleDomain(nuxt_i18n_options["p" /* locales */], req, options);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    } else if (useCookie) {
      finalLocale = app.i18n.getLocaleCookie();
    }
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(23);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/tw/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var tw_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./plugins/axios.js

/* harmony default export */ var plugins_axios = (({
  $axios
}, inject) => {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/json'
    },
    transformResponse: [function (data) {
      let resp = data; // for prod response is different from dev

      if (typeof data === 'string') {
        resp = JSON.parse(data);
      }

      return utils["a" /* default */].camelizeKeys(resp);
    }]
  }); // Inject to context as $api

  inject('api', api);
});
// CONCATENATED MODULE: ./i18n/message.js
/* harmony default export */ var message = ({
  tw: {
    LOL__BAN_PAGE__BAN_STATUS: '封鎖狀態',
    LOL__BAN_PAGE__LEVEL: '等級',
    LOL__BAN_PAGE__ONE_MONTH: '最近一個月',
    LOL__BAN_PAGE__REASON: '封鎖原因',
    LOL__BAN_PAGE__SEARCH_SUMMONER: '搜尋召喚師',
    LOL__BAN_PAGE__SUMMONER: '召喚師',
    LOL__BAN_PAGE__THREE_MONTH: '最近三個月',
    LOL__BAN_PAGE__TWO_MONTH: '最近兩個月',
    LOL__BREADCRUMB_PAGE_NAME__BAN: '停權',
    LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS: '停權名單',
    LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS: '英雄',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION: '戰棋資訊',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC: '聯盟戰棋版本更新資訊',
    LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD: '下載註冊',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT: '電競',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC: '電競相關資訊',
    LOL__BREADCRUMB_PAGE_NAME__EVENT: '活動',
    LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC: '活動相關資訊',
    LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT: '遊戲內容',
    LOL__BREADCRUMB_PAGE_NAME__INDEX: '首頁',
    LOL__BREADCRUMB_PAGE_NAME__INFO: '資訊',
    LOL__BREADCRUMB_PAGE_NAME__INFO_DESC: '遊戲、系統與版本更新相關等資訊',
    LOL__BREADCRUMB_PAGE_NAME__ITEMS: '道具',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION: '版本資訊',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC: '版本資訊詳細內容',
    LOL__BREADCRUMB_PAGE_NAME__NEWS: '新聞',
    LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS: '伺服器狀態',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM: '系統',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC: '系統相關資訊',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO: '影片',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC: '英雄聯盟影片',
    LOL__CHAMPIONS_INNERPAGE_CHARACTER: '角色',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN: '刺客',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER: '鬥士',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE: '法師',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN: '射手',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT: '輔助',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK: '坦克',
    LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN: '預設造型',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY: '難易度',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY: '簡單/普通/困難',
    LOL__CHAMPIONS_INNERPAGE__E: 'E',
    LOL__CHAMPIONS_INNERPAGE__PASSIVE: '被動',
    LOL__CHAMPIONS_INNERPAGE__Q: 'Q',
    LOL__CHAMPIONS_INNERPAGE__R: 'R',
    LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE: '技能介紹',
    LOL__CHAMPIONS_INNERPAGE__SKIN: '造型',
    LOL__CHAMPIONS_INNERPAGE__W: 'W',
    LOL__CHAMPIONS_PAGE__CATEGORY_ALL: '全部',
    LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN: '刺客',
    LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER: '鬥士',
    LOL__CHAMPIONS_PAGE__CATEGORY_MAGE: '法師',
    LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN: '射手',
    LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT: '輔助',
    LOL__CHAMPIONS_PAGE__CATEGORY_TANK: '坦克',
    LOL__CHAMPIONS_PAGE__DESC: '我們有超過140個英雄並且還在持續增加，你可以用各種不同的方式精通他們，掌握並熟悉各種英雄吧！',
    LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS: '沒有符合條件的英雄',
    LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS: '搜尋英雄',
    LOL__DOWNLOAD__ACCOUNT_APPLY_LINK: 'https://google.com',
    LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT: '更新檔',
    LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC: '如果各位召喚師於更新時發生錯誤，可以試著用手動更新的方式來更新《英雄聯盟》。',
    LOL__DOWNLOAD__CURRENT_VERSION__TOPIC: '當前版本更新檔',
    LOL__DOWNLOAD__DRIVER__CONTENT_DESC: '為了維持《英雄聯盟》的最佳畫面表現，請定期更新顯卡驅動程式。尋找您需要的驅動程式。',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD: 'AMD更新檔',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA: 'NVIDIA驅動下載',
    LOL__DOWNLOAD__DRIVER__TOPIC: '驅動程式',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_1: '2.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_2: '2 GB 以上',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_3: 'Window XP SP3<br>Windows Vista<br>Window 7<br>(目前尚無法支援 Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_4: '內建顯示卡 HD3000 以上',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_5: 'Windows 標準與相容',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1: '配備項目',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2: '基本配備',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3: '建議配備',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1: 'CPU',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2: '主記憶體',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3: '作業系統',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4: '顯示卡',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5: '音效卡',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1: '3.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2: '4 GB 以上',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3: 'Windows Vista (最新版本)<br>Window 7<br>(目前尚無法支援 Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4: 'GeForce 8800 或更高等級',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5: 'Windows 標準與相容',
    LOL__DOWNLOAD__EAUIPMENT__TOPIC: '電腦配備需求',
    LOL__DOWNLOAD__HISTORY__CATEGORY_1: '更新日期',
    LOL__DOWNLOAD__HISTORY__CATEGORY_2: '適用版本號',
    LOL__DOWNLOAD__HISTORY__CATEGORY_3: '更新後版本號',
    LOL__DOWNLOAD__HISTORY__CATEGORY_4: '下載更新檔',
    LOL__DOWNLOAD__HISTORY__TOPIC: '更新檔歷史清單',
    LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC: '確認電腦目前所使用的版本，並下載對應的「手動更新檔」。',
    LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC: '手動更新檔教學',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1: '帳號申請',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2: '遊戲下載',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3: '遊戲下載最快速',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1: '帳號申請',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2: '透過瀏覽器下載 (速度較慢)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3: '透過平台下載 (速度較快)',
    LOL__FOOTER__COPYRIGHT: 'Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. "Demo" and "League of Legends" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.',
    // LOL__FOOTER__LINKS__LINK_1_HREF:
    //   '//dlgarenanow-a.akamaihd.net/mgames/spdtw/spdcenter/footer/LicensePage/license.html',
    LOL__FOOTER__LINKS__LINK_1_HREF: '////google.com/',
    LOL__FOOTER__LINKS__LINK_1_NAME: 'support',
    // LOL__FOOTER__LINKS__LINK_2_HREF: '//tw.support.garena.com/',
    LOL__FOOTER__LINKS__LINK_2_HREF: '//google.com/',
    LOL__FOOTER__LINKS__LINK_2_NAME: 'service',
    // LOL__FOOTER__LINKS__LINK_3_HREF: '//service.garena.tw/standard/1',
    LOL__FOOTER__LINKS__LINK_3_HREF: '//google.com/',
    LOL__FOOTER__LINKS__LINK_3_NAME: 'info',
    LOL__FOOTER__LINKS__LINK_4_HREF: '//google.com/',
    LOL__FOOTER__LINKS__LINK_4_NAME: 'facebook',
    LOL__FOOTER__LINKS__LINK_5_HREF: 'FILL in region link5 url',
    LOL__FOOTER__LINKS__LINK_5_NAME: 'text-5',
    LOL__FOOTER__PLAY_FOR_FREE__LINK: '/',
    LOL__FOOTER__PLAY_FOR_FREE__TEXT: '免費遊玩',
    LOL__ITEMS_PAGE__CATEGORY_ALL: '全部',
    LOL__ITEMS_PAGE__CATEGORY_ATTACK: '攻擊',
    LOL__ITEMS_PAGE__CATEGORY_DEFENSE: '防禦',
    LOL__ITEMS_PAGE__CATEGORY_MAGIC: '魔法',
    LOL__ITEMS_PAGE__CATEGORY_RUNSPEED: '跑速',
    LOL__ITEMS_PAGE__CATEGORY_TOOL: '工具',
    LOL__ITEMS_PAGE__FILTER__ARMOR: '物理防禦',
    LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION: '物理穿透',
    LOL__ITEMS_PAGE__FILTER__ATTACKSPEED: '攻速',
    LOL__ITEMS_PAGE__FILTER__BOOTS: '鞋子',
    LOL__ITEMS_PAGE__FILTER__CONSUMABLE: '消耗品',
    LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION: '冷卻時間',
    LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE: '爆擊',
    LOL__ITEMS_PAGE__FILTER__DAMAGE: '物理攻擊',
    LOL__ITEMS_PAGE__FILTER__GOLDPER: '金錢收入',
    LOL__ITEMS_PAGE__FILTER__HEALTH: '生命值',
    LOL__ITEMS_PAGE__FILTER__HEALTHREGEN: '生命回復',
    LOL__ITEMS_PAGE__FILTER__LIFESTEAL: '吸血',
    LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION: '魔法穿透',
    LOL__ITEMS_PAGE__FILTER__MANA: '魔力值',
    LOL__ITEMS_PAGE__FILTER__MANAREGEN: '魔力回復',
    LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT: '其他跑速',
    LOL__ITEMS_PAGE__FILTER__SPELLBLOCK: '魔法防禦',
    LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE: '魔法攻擊',
    LOL__ITEMS_PAGE__FILTER__VISION: '視野控制',
    LOL__ITEMS_PAGE__NO_MAPPING_ITEMS: '沒有符合的道具',
    LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS: '進階道具',
    LOL__ITEMS_PAGE__POPUP__FORMULA: '合成公式',
    LOL__ITEMS_PAGE__POPUP__ITEMS: '道具',
    LOL__ITEMS_PAGE__SEARCH_ITEMS: '搜尋道具',
    LOL__MAIN_PAGE__SYSTEM_MESSAGE: '系統訊息',
    LOL__NEWS_PAGE__END: '已經到底了',
    LOL__NEWS_PAGE__NO_MAPPING_NEWS: '沒有相關新聞',
    LOL__NEWS_PAGE__SEARCH_PLACEHOLDER: '搜尋新聞主題',
    LOL__NOT_FOUND__CONTENT: '沒有找到該頁面，點我回到首頁',
    LOL__NOT_FOUND__TITLE: '404',
    LOL__REMIND_TEXT__ONLY_TW_REGION: '※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href="https://google.com" target="_blank" rel="noreferrer noopener" style="color: white">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。',
    LOL__SERVER_PAGE__CURRENT_EXCLUDE: '近期已排除',
    LOL__SERVER_PAGE__CURRENT_STATUS: '當前狀態',
    LOL__SERVER_PAGE__MALFUNCTION_MESSAGE: '故障訊息',
    LOL__SERVER_PAGE__NORMAL_MESSAGE: '一般訊息',
    LOL__SERVER_PAGE__SERVER_STATUS: '伺服器狀態',
    LOL__SERVER_PAGE__WARNING_MESSAGE: '警示訊息',
    LOL__TUTORIAL__CHAMPION__DESC: '英雄會隨著遊戲的進行變得更加強大，並透過賺取金錢來購買更強力的裝備。掌握這兩個關鍵，把握優勢對於壓制敵對並摧毀他們的基地來說是至關重要的。',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE: '賺取經驗',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC: '當英雄賺取一定經驗時，他們將會升級並且可以解鎖或強化技能，並獲得基礎數值的提升。通過擊殺敵方單位和英雄、獲得助攻和摧毀防禦塔來獲得經驗值。',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY: '賺取金錢',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC: '金錢是可以用來為你的英雄在遊戲內購買裝備的貨幣。透過擊殺敵方單位與英雄、參與擊殺、摧毀敵方建築物或裝備金錢收入裝備來賺取金錢。',
    LOL__TUTORIAL__CHAMPION__SHOP: '商店',
    LOL__TUTORIAL__CHAMPION__SHOP_DESC: '在商店，你可以用自己賺取的金錢買賣道具。 只有在重生平台旁才能使用它。',
    LOL__TUTORIAL__CHAMPION__TOPIC: '強化你的英雄',
    LOL__TUTORIAL__GET_START: '開始吧',
    LOL__TUTORIAL__LEARN_BASIC: '從基礎學起',
    LOL__TUTORIAL__MAP_CONTENT_1__DESC: '主堡是兩隊基地的核心。先摧毀敵方主堡的人將贏下遊戲。',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1: '主堡是小兵生成的地方。主堡後方式重生平台，你可以在重生平台快速回復生命與魔力，並且可以打開商店購物。',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2: '位於敵方基地中，敵方主堡就像我方主堡一樣。摧毀敵方主堡可以讓你的隊伍贏得勝利。',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1: '我方主堡',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2: '敵方主堡',
    LOL__TUTORIAL__MAP_CONTENT_1__TOPIC: '摧毀基地',
    LOL__TUTORIAL__MAP_CONTENT_2__DESC: '你的隊伍需要至少清理一條路線才能到達敵方主堡。在路線上阻礙你前進的是防禦塔與水晶兵營。每條路線有三座防禦塔與一座水晶兵營，而主堡則被兩座防禦塔保護著。',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1: '防禦塔會對敵方小兵與英雄造成傷害，並為自己的隊伍從戰爭迷霧中提供有限的視野。用你前方的小兵攻擊這些建築物以免受到傷害，並向前衝鋒吧。',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2: '每座水晶兵營都被防禦塔所保護。當水晶兵營被摧毀時，超級小兵會在該條路線上生成數分鐘。之後，當水晶兵營重生，超級小兵才會停止生成。',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1: '防禦塔',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2: '水晶兵營',
    LOL__TUTORIAL__MAP_CONTENT_2__TOPIC: '清理路線',
    LOL__TUTORIAL__MAP_CONTENT_3__DESC: '在路線之間的是野區，其中棲息著中立的野怪與各種植物。兩個最為重要的也怪是巴龍與飛龍。殺死這些單位可以為你的團隊提供獨特的強化，更可以逆轉遊戲的局勢。',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1: '巴龍是野區中最強力的野怪。擊殺巴龍會賦予擊殺隊伍額外物理攻擊、魔法攻擊、強化的回城時間，並且會大幅強化附近的小兵。',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2: '飛龍和巨龍，是會根據擊殺的飛龍屬性來賦予團隊獨特強化的強力野怪。有四種元素飛龍與一種遠古巨龍。',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1: '巴龍',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2: '飛龍',
    LOL__TUTORIAL__MAP_CONTENT_3__TOPIC: '進入野區',
    LOL__TUTORIAL__MAP_CONTENT_4__DESC: '在遊戲中，我們所建議的隊伍組成有五個位置。每個路線都有各自適合的英雄與角色 -- 全部嘗試看看或者選取那個你命定的路線吧。',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1: '在上路的英雄是團隊中強韌的打手，他們負責保護上路路線以及在會戰中針對敵方最強力的敵人。',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2: '打野英雄們是為了狩獵而生的。他們有技巧地在線路之間潛伏徘徊著，密切關注著最重要的中立野怪，並在對手放下警戒時發起致命的突襲。',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3: '中路英雄通常是那些帶有高爆發傷害的多功能英雄 ─ 無論是單打獨鬥或者是團隊合作。對他們來說，戰鬥是一場危險的舞蹈，他們總是得尋找機會秀爆對手。',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4: '下路英雄是隊伍的火力來源。做為隊上的至寶，他們在前期需要受到適當的保護，好讓它們可以取得足夠的金錢與經驗。',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5: '輔助英雄是隊伍的守護者。他們負責保全隊友的性命，並主要專注於幫助取得擊殺，在下路保護隊友變得更強。',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1: '上路',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2: '打野',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3: '中路',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4: '下路',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5: '輔助',
    LOL__TUTORIAL__MAP_CONTENT_4__TOPIC: '選擇你的路線',
    LOL__TUTORIAL__SKILL__EQUIPMENT: '裝備',
    LOL__TUTORIAL__SKILL__SKILL: '技能',
    LOL__TUTORIAL__SKILL__SKILL_DESC: '大多數的英雄擁有五個技能所組成的獨特技能組被動、三個基礎技能與大招。技能被分配在 Q、W、E 與 R 鍵。',
    LOL__TUTORIAL__SKILL__SUMMONER_SKILL: '召喚師技能',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL: '解鎖你的技能',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC: '大多數的英雄擁有五個技能所組成的獨特技能組：被動、三個基礎技能與大絕。技能被分配在Q、W、E與R鍵。',
    LOL__TUTORIAL__WELCOME: '歡迎來到召喚峽谷',
    LOL__TUTORIAL__WELCOME_DESC: '英雄聯盟能學習的東西很多，就先從最基本的學起吧。<br>探索以下教學，了解並熟悉最受歡迎的遊戲模式。',
    LOL__TUTORIAL__WHAT_IS_LOL: '英雄聯盟是什麼?',
    LOL__TUTORIAL__WHAT_IS_LOL_DESC: '英雄聯盟是一款注重團隊的策略遊戲，兩個由五位強大英雄組成的隊伍進行對決以摧毀敵方基地。從140 名英雄忠選出屬於你的英雄，打出史詩級的精彩表現、確保擊殺並摧毀敵方防禦塔，並在戰鬥中一步步走向勝利。'
  },
  sg: {
    LOL__BAN_PAGE__BAN_STATUS: 'Ban Status',
    LOL__BAN_PAGE__LEVEL: 'Level',
    LOL__BAN_PAGE__ONE_MONTH: 'Most Recent 1 Month',
    LOL__BAN_PAGE__REASON: 'Ban Reason',
    LOL__BAN_PAGE__SEARCH_SUMMONER: 'Search Summoner',
    LOL__BAN_PAGE__SUMMONER: 'Summoner',
    LOL__BAN_PAGE__THREE_MONTH: 'Most Recent 3 Months',
    LOL__BAN_PAGE__TWO_MONTH: 'Most Recent 2 Months',
    LOL__BREADCRUMB_PAGE_NAME__BAN: 'Ban',
    LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS: 'Ban List',
    LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS: 'Champions',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION: 'TFT Patch Notes',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC: 'TFT Patch Updates Details',
    LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD: 'Download & Registration',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT: 'Esports',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC: 'Esports News',
    LOL__BREADCRUMB_PAGE_NAME__EVENT: 'Event',
    LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC: 'Event Details',
    LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT: 'Game Content',
    LOL__BREADCRUMB_PAGE_NAME__INDEX: 'Home',
    LOL__BREADCRUMB_PAGE_NAME__INFO: 'Information',
    LOL__BREADCRUMB_PAGE_NAME__INFO_DESC: 'Game Information, System Information, Patch Notes etc.,',
    LOL__BREADCRUMB_PAGE_NAME__ITEMS: 'Items',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION: 'Patch Notes',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC: 'Patch Notes Details',
    LOL__BREADCRUMB_PAGE_NAME__NEWS: 'News',
    LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS: 'Server Status',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM: 'System',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC: 'System Information',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO: 'Video',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC: 'Video Details',
    LOL__CHAMPIONS_INNERPAGE_CHARACTER: 'Characters',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN: 'ASSASSIN',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER: 'FIGHTER',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE: 'MAGE',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN: 'MARKSMAN',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT: 'SUPPORT',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK: 'TANK',
    LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN: 'Default Skin',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY: 'Difficulty',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY: 'Easy / Normal / Difficult',
    LOL__CHAMPIONS_INNERPAGE__E: 'E',
    LOL__CHAMPIONS_INNERPAGE__PASSIVE: 'Passive',
    LOL__CHAMPIONS_INNERPAGE__Q: 'Q',
    LOL__CHAMPIONS_INNERPAGE__R: 'R',
    LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE: 'Skills Introduction',
    LOL__CHAMPIONS_INNERPAGE__SKIN: 'Skins',
    LOL__CHAMPIONS_INNERPAGE__W: 'W',
    LOL__CHAMPIONS_PAGE__CATEGORY_ALL: 'All',
    LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN: 'Assassin',
    LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER: 'Fighter',
    LOL__CHAMPIONS_PAGE__CATEGORY_MAGE: 'Mage',
    LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN: 'Marksman',
    LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT: 'Support',
    LOL__CHAMPIONS_PAGE__CATEGORY_TANK: 'Tank',
    LOL__CHAMPIONS_PAGE__DESC: 'With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all!',
    LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS: 'No matching champions found.',
    LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS: 'Champion Search',
    LOL__DOWNLOAD__ACCOUNT_APPLY_LINK: 'https://sso.garena.com/ui/register',
    LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT: 'Download',
    LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC: 'If you encounter an error during the update, you can try to update the "Game Client" manually.',
    LOL__DOWNLOAD__CURRENT_VERSION__TOPIC: 'Current Patch',
    LOL__DOWNLOAD__DRIVER__CONTENT_DESC: 'In order to maintain the best graphic performances of "League of Legends", please update the graphics card driver regularly. Find the driver you need.',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD: 'AMD Software Update',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA: 'NVIDIA Software Update',
    LOL__DOWNLOAD__DRIVER__TOPIC: 'Driver',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_1: '2.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_2: 'Above 2 GB',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_3: 'Window XP SP3<br>Windows Vista<br>Window 7<br>(Currently unable to support Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_4: 'Built-in graphics card HD3000 and above',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_5: 'Windows Standards and Compatibility',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1: 'Equipment Items',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2: 'Minimum Requirements',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3: 'Recommended Requirements',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1: 'CPU',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2: 'Random Access Memory(RAM)',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3: 'Operating System',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4: 'Graphics Card',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5: 'Sound Card',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1: '3.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2: 'Above 4 GB',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3: 'Windows Vista (Latest Version)<br>Window 7<br>(Currently unable to support Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4: 'GeForce 8800 or Higher',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5: 'Windows Standards and Compatibility',
    LOL__DOWNLOAD__EAUIPMENT__TOPIC: 'System and Equipment Requirements',
    LOL__DOWNLOAD__HISTORY__CATEGORY_1: 'Release Date',
    LOL__DOWNLOAD__HISTORY__CATEGORY_2: 'Your version',
    LOL__DOWNLOAD__HISTORY__CATEGORY_3: 'Updated Version',
    LOL__DOWNLOAD__HISTORY__CATEGORY_4: 'Download the Patch File',
    LOL__DOWNLOAD__HISTORY__TOPIC: 'Patch Versions List',
    LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC: 'Confirm the current patch version of your computer, and download the corresponding "manual patch file".',
    LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC: 'Manual Patch Download Tutorial',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1: 'Account Registration',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2: 'Game Download',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3: 'GPC Download',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1: 'Garena Account Application',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2: 'Download via Browser (Slower)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3: 'Download via GPC (Faster)',
    LOL__FOOTER__COPYRIGHT: 'Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. "Demo" and "League of Legends" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.',
    LOL__FOOTER__LINKS__LINK_1_HREF: '//dlgarenanow-a.akamaihd.net/mgames/spdtw/spdcenter/footer/LicensePage/license.html',
    LOL__FOOTER__LINKS__LINK_1_NAME: '授權資訊',
    LOL__FOOTER__LINKS__LINK_2_HREF: 'https://www.garena.sg/support/',
    LOL__FOOTER__LINKS__LINK_2_NAME: 'Support Center',
    LOL__FOOTER__LINKS__LINK_3_HREF: 'https://contentgarena-a.akamaihd.net/legal/tos/tos_en.html',
    LOL__FOOTER__LINKS__LINK_3_NAME: 'Terms of Service',
    LOL__FOOTER__LINKS__LINK_4_HREF: 'https://www.facebook.com/',
    LOL__FOOTER__LINKS__LINK_4_NAME: 'Offficial Facebook Fan Page',
    LOL__FOOTER__LINKS__LINK_5_HREF: 'FILL in region link5 url',
    LOL__FOOTER__LINKS__LINK_5_NAME: 'link5',
    LOL__FOOTER__PLAY_FOR_FREE__LINK: '/download',
    LOL__FOOTER__PLAY_FOR_FREE__TEXT: 'PLAY FOR FREE',
    LOL__ITEMS_PAGE__CATEGORY_ALL: 'All',
    LOL__ITEMS_PAGE__CATEGORY_ATTACK: 'Offensive',
    LOL__ITEMS_PAGE__CATEGORY_DEFENSE: 'Defensive',
    LOL__ITEMS_PAGE__CATEGORY_MAGIC: 'Magic',
    LOL__ITEMS_PAGE__CATEGORY_RUNSPEED: 'Movement Speed',
    LOL__ITEMS_PAGE__CATEGORY_TOOL: 'Tools',
    LOL__ITEMS_PAGE__FILTER__ARMOR: 'Armor',
    LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION: 'Armor Penetration',
    LOL__ITEMS_PAGE__FILTER__ATTACKSPEED: 'Attack Speed',
    LOL__ITEMS_PAGE__FILTER__BOOTS: 'Boots',
    LOL__ITEMS_PAGE__FILTER__CONSUMABLE: 'Consumables',
    LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION: 'Cooldown Reduction',
    LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE: 'Critical Strike',
    LOL__ITEMS_PAGE__FILTER__DAMAGE: 'Attack Damage',
    LOL__ITEMS_PAGE__FILTER__GOLDPER: 'Gold Income',
    LOL__ITEMS_PAGE__FILTER__HEALTH: 'Health',
    LOL__ITEMS_PAGE__FILTER__HEALTHREGEN: 'Health Regeneration',
    LOL__ITEMS_PAGE__FILTER__LIFESTEAL: 'Life Steal',
    LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION: 'Magic Penetration',
    LOL__ITEMS_PAGE__FILTER__MANA: 'Mana',
    LOL__ITEMS_PAGE__FILTER__MANAREGEN: 'Mana Regeneration',
    LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT: 'Other',
    LOL__ITEMS_PAGE__FILTER__SPELLBLOCK: 'Magic Resistance',
    LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE: 'Ability Power',
    LOL__ITEMS_PAGE__FILTER__VISION: 'Vision Control',
    LOL__ITEMS_PAGE__NO_MAPPING_ITEMS: 'No Matching Items Found',
    LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS: 'Advanced Item',
    LOL__ITEMS_PAGE__POPUP__FORMULA: 'Build Paths',
    LOL__ITEMS_PAGE__POPUP__ITEMS: 'Items',
    LOL__ITEMS_PAGE__SEARCH_ITEMS: 'Item Search',
    LOL__MAIN_PAGE__SYSTEM_MESSAGE: 'System Information',
    LOL__NEWS_PAGE__END: 'No remaining information',
    LOL__NEWS_PAGE__NO_MAPPING_NEWS: 'No related news',
    LOL__NEWS_PAGE__SEARCH_PLACEHOLDER: 'Search',
    LOL__NOT_FOUND__CONTENT: 'Page not found. Click me to return to the homepage',
    LOL__NOT_FOUND__TITLE: '404 not found',
    LOL__REMIND_TEXT__ONLY_TW_REGION: '※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href="https://terms.support.garena.com/tw" target="_blank" rel="noreferrer noopener" style="color: white">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。',
    LOL__SERVER_PAGE__CURRENT_EXCLUDE: 'Recently Resolved',
    LOL__SERVER_PAGE__CURRENT_STATUS: 'Current Status',
    LOL__SERVER_PAGE__MALFUNCTION_MESSAGE: 'Malfunction Information',
    LOL__SERVER_PAGE__NORMAL_MESSAGE: 'Normal Information',
    LOL__SERVER_PAGE__SERVER_STATUS: 'Server Status',
    LOL__SERVER_PAGE__WARNING_MESSAGE: 'Warning Message',
    LOL__TUTORIAL__CHAMPION__DESC: 'Champions get stronger by earning experience to level up and gold to buy more powerful items as the game progresses. Staying on top of these two factors is crucial to overpowering the enemy team and destroying their base.',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE: 'EARN EXPERIENCE',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC: 'When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defensive structures.',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY: 'EARN GOLD',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC: 'Gold is the in-game currency to buy items for your champion. Earn gold by killing enemy units and champions, assisting in a kill, destroying defensive structures, and equipping gold income items.',
    LOL__TUTORIAL__CHAMPION__SHOP: 'SHOP',
    LOL__TUTORIAL__CHAMPION__SHOP_DESC: 'The Shop is where you can buy and sell items with gold you’ve earned. It can only be accessed while you are at the Fountain.',
    LOL__TUTORIAL__CHAMPION__TOPIC: 'POWER UP YOUR CHAMPION',
    LOL__TUTORIAL__GET_START: "LET'S GO",
    LOL__TUTORIAL__LEARN_BASIC: 'LEARN THE BASICS',
    LOL__TUTORIAL__MAP_CONTENT_1__DESC: 'The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1: 'Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2: 'Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1: 'YOUR NEXUS',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2: 'ENEMY NEXUS',
    LOL__TUTORIAL__MAP_CONTENT_1__TOPIC: 'DESTROY THE BASE',
    LOL__TUTORIAL__MAP_CONTENT_2__DESC: 'Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defensive structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1: 'Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2: 'Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1: 'TURRETS',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2: 'INHIBITORS',
    LOL__TUTORIAL__MAP_CONTENT_2__TOPIC: 'CLEAR THE PATH',
    LOL__TUTORIAL__MAP_CONTENT_3__DESC: 'In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1: 'Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2: 'Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are four Elemental Drakes and one Elder Dragon.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1: 'BARON NASHOR',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2: 'DRAKES',
    LOL__TUTORIAL__MAP_CONTENT_3__TOPIC: 'INTO THE JUNGLE',
    LOL__TUTORIAL__MAP_CONTENT_4__DESC: 'There are five positions that make up the recommended team comp for the game. Each lane lends itself to certain kinds of champions and roles—try them all or lock in to the lane that calls you.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1: 'Champions in top lane are the tough solo fighters of the team. It’s their job to protect their lane and focus on the enemy team’s most powerful members.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2: 'Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment opponents let their guard down.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3: 'Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they’re always looking for an opportunity to outplay their opponent.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4: 'Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5: 'Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1: 'TOP LANE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2: 'JUNGLE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3: 'MID LANE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4: 'BOT LANE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5: 'SUPPORT',
    LOL__TUTORIAL__MAP_CONTENT_4__TOPIC: 'CHOOSE YOUR LANE',
    LOL__TUTORIAL__SKILL__EQUIPMENT: 'ITEMS',
    LOL__TUTORIAL__SKILL__SKILL: 'ABILITIES',
    LOL__TUTORIAL__SKILL__SKILL_DESC: 'Most champions have a unique skill set made up of five skills: passive, three basic skills and ultimate. Skills are assigned to Q, W, E and R buttons.',
    LOL__TUTORIAL__SKILL__SUMMONER_SKILL: 'SUMMONER SPELLS',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL: 'UNLOCK YOUR ABILITIES',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC: 'Champions have five core abilities, two special spells, and up to seven items at a time. Figuring out the optimal ability order, summoner spells, and item build for your champion will help you succeed as a team.',
    LOL__TUTORIAL__WELCOME: 'WELCOME TO THE RIFT',
    LOL__TUTORIAL__WELCOME_DESC: 'There’s a lot to learn about League, so we’ll start with the essentials. Explore the guide below to get the rundown on the most popular game mode.',
    LOL__TUTORIAL__WHAT_IS_LOL: 'WHAT IS LEAGUE OF LEGENDS?',
    LOL__TUTORIAL__WHAT_IS_LOL_DESC: 'League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.'
  },
  th: {
    LOL__BAN_PAGE__BAN_STATUS: 'สถานะการแบน',
    LOL__BAN_PAGE__LEVEL: 'เลเวล',
    LOL__BAN_PAGE__ONE_MONTH: '1 เดือน',
    LOL__BAN_PAGE__REASON: 'สาเหตุการแบน',
    LOL__BAN_PAGE__SEARCH_SUMMONER: 'ค้นหาซัมมอนเนอร์',
    LOL__BAN_PAGE__SUMMONER: 'ซัมมอนเนอร์',
    LOL__BAN_PAGE__THREE_MONTH: '3 เดือน',
    LOL__BAN_PAGE__TWO_MONTH: '2 เดือน',
    LOL__BREADCRUMB_PAGE_NAME__BAN: 'แบน',
    LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS: 'รายชื่อผู้ถูกแบน',
    LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS: 'แชมเปี้ยน',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION: 'แพตช์โน๊ต',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC: 'อัปเดตข้อมูลแพตช์ TFT ล่าสุด',
    LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD: 'ดาวน์โหลด & ลงทะเบียน',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT: 'อีสปอร์ต',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC: 'ข่าวสารเกี่ยวกับอีสปอร์ต',
    LOL__BREADCRUMB_PAGE_NAME__EVENT: 'กิจกรรม',
    LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC: 'ข้อมูลกิจกรรม',
    LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT: 'ข้อมูลเกม',
    LOL__BREADCRUMB_PAGE_NAME__INDEX: 'หน้าหลัก',
    LOL__BREADCRUMB_PAGE_NAME__INFO: 'ข้อมูลประชาสัมพันธ์',
    LOL__BREADCRUMB_PAGE_NAME__INFO_DESC: 'ข้อมูลเกี่ยวกับเกม ระบบ แพตช์โน๊ต และอื่น ๆ',
    LOL__BREADCRUMB_PAGE_NAME__ITEMS: 'ไอเทม',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION: 'แพตช์โน๊ต',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC: 'อัปเดตข้อมูลแพตช์ล่าสุด',
    LOL__BREADCRUMB_PAGE_NAME__NEWS: 'ข่าวสาร',
    LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS: 'สถานะเซิร์ฟเวอร์',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM: 'ระบบ',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC: 'ข้อมูลเกี่ยวกับระบบ',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO: 'วีดิโอ',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC: 'วีดิโอล่าสุดของ League of Legends',
    LOL__CHAMPIONS_INNERPAGE_CHARACTER: 'ตัวละคร',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN: 'มือสังหาร',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER: 'นักสู้',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE: 'นักเวท',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN: 'มาคส์แมน',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT: 'ซัพพอร์ต',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK: 'แทงค์',
    LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN: 'สกินพื้นฐาน',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY: 'ระดับความยาก',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY: 'ง่าย / ปานกลาง / ยาก',
    LOL__CHAMPIONS_INNERPAGE__E: 'E',
    LOL__CHAMPIONS_INNERPAGE__PASSIVE: 'สกิลติดตัว',
    LOL__CHAMPIONS_INNERPAGE__Q: 'Q',
    LOL__CHAMPIONS_INNERPAGE__R: 'R',
    LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE: 'แนะนำสกิล',
    LOL__CHAMPIONS_INNERPAGE__SKIN: 'สกิน',
    LOL__CHAMPIONS_INNERPAGE__W: 'W',
    LOL__CHAMPIONS_PAGE__CATEGORY_ALL: 'ทั้งหมด',
    LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN: 'มือสังหาร',
    LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER: 'นักสู้',
    LOL__CHAMPIONS_PAGE__CATEGORY_MAGE: 'นักเวท',
    LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN: 'มาคส์แมน',
    LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT: 'ซัพพอร์ต',
    LOL__CHAMPIONS_PAGE__CATEGORY_TANK: 'แทงค์',
    LOL__CHAMPIONS_PAGE__DESC: 'ค้นหาสไตล์การเล่นที่ใช่จากแชมเปี้ยนกว่า 140 ตัว!',
    LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS: 'ไม่พบแชมเปี้ยนที่ตรงเงื่อนไข',
    LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS: 'ค้นหาแชมเปี้ยน',
    LOL__DOWNLOAD__ACCOUNT_APPLY_LINK: 'https://sso.garena.com/ui/register',
    LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT: 'แพตช์',
    LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC: 'หากคุณพบข้อผิดพลาดระหว่างการอัปเดต คุณอาจลองใช้การอัปเดตแพตช์แบบ Manual Patch',
    LOL__DOWNLOAD__CURRENT_VERSION__TOPIC: 'แพตช์ปัจจุบัน',
    LOL__DOWNLOAD__DRIVER__CONTENT_DESC: 'เพื่อรักษาการแสดงกราฟิกที่ดีที่สุดของ "League of Legends"  โปรดอัปเดตไดรเวอร์การ์ดแสดงผลเป็นประจำ ค้นหาไดรเวอร์ที่คุณต้องการ',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD: 'อัพเดตซอฟต์แวร์ AMD',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA: 'อัพเดตซอฟต์แวร์ NVIDIA',
    LOL__DOWNLOAD__DRIVER__TOPIC: 'ไดรเวอร์',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_1: '2.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_2: 'มากกว่า 2.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_3: 'Window XP SP3<br>Windows Vista<br>Window 7<br>(ไม่สามารถรองรับ Mac OS ได้ในขณะนี้)',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_4: 'การ์ดแสดงผลในตัว HD3000 ขึ้นไป',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_5: 'มาตรฐานและความเข้ากันได้ของ Windows',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1: 'ไอเทมที่ติดตั้ง',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2: 'ความต้องการขั้นต่ำ',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3: 'ความต้องการที่แนะนำ',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1: 'CPU',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2: 'RAM',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3: 'ระบบปฏิบัติการ',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4: 'การ์ดจอ',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5: 'การ์ดเสียง',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1: '3.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2: 'มากกว่า 4 GB',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3: 'Windows Vista (เวอร์ชั่นล่าสุด)<br>Window 7<br>(ไม่สามารถรองรับ Mac OS ได้ในขณะนี้)',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4: 'GeForce 8800 หรือสูงกว่า',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5: 'มาตรฐานและความเข้ากันได้ของ Windows',
    LOL__DOWNLOAD__EAUIPMENT__TOPIC: 'ข้อกำหนดของระบบและอุปกรณ์',
    LOL__DOWNLOAD__HISTORY__CATEGORY_1: 'วันปล่อยแพตช์',
    LOL__DOWNLOAD__HISTORY__CATEGORY_2: 'เวอร์ชั่นแพตช์ปัจจุบันของคุณ',
    LOL__DOWNLOAD__HISTORY__CATEGORY_3: 'เวอร์ชันแพตช์หลังการอัปเดต',
    LOL__DOWNLOAD__HISTORY__CATEGORY_4: 'ดาวน์โหลดไฟล์แพตช์',
    LOL__DOWNLOAD__HISTORY__TOPIC: 'ลิสต์ของเวอร์ชั่นแพตช์',
    LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC: 'ยืนยันเวอร์ชันแพตช์ปัจจุบันของคอมพิวเตอร์ของคุณ และดาวน์โหลด "ไฟล์    Manual Patch" ที่เกี่ยวข้อง',
    LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC: 'สอนการดาวน์โหลด Manual Patch',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1: 'การสมัครบัญชี',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2: 'ดาน์โหลดเกม',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3: 'ดาน์โหลดเกม (เร็วที่สุด)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1: 'การลงทะเบียนบัญชี Garena',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2: 'ดาวน์โหลดด้วย Internet Browser (ซึ่งใช้เวลาดาวน์โหลดนานกว่า)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3: 'ดาวน์โหลดด้วย GPC (ซึ่งใช้เวลาดาวน์โหลดน้อยกว่า)',
    LOL__FOOTER__COPYRIGHT: 'Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. "Demo" and "League of Legends" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.',
    LOL__FOOTER__LINKS__LINK_1_HREF: 'https://www.facebook.com/th.lol',
    LOL__FOOTER__LINKS__LINK_1_NAME: 'Facebook',
    LOL__FOOTER__LINKS__LINK_2_HREF: 'https://www.youtube.com/user/LoLPlayinter',
    LOL__FOOTER__LINKS__LINK_2_NAME: 'YouTube',
    LOL__FOOTER__LINKS__LINK_3_HREF: 'https://www.garena.co.th/tos',
    LOL__FOOTER__LINKS__LINK_3_NAME: 'ช่วยเหลือ',
    LOL__FOOTER__LINKS__LINK_4_HREF: 'https://www.garena.co.th/privacy',
    LOL__FOOTER__LINKS__LINK_4_NAME: 'เงื่อนไขการให้บริการ',
    LOL__FOOTER__LINKS__LINK_5_HREF: 'FILL in region link5 url',
    LOL__FOOTER__LINKS__LINK_5_NAME: 'link5',
    LOL__FOOTER__PLAY_FOR_FREE__LINK: 'https://lol.garena.in.th/',
    LOL__FOOTER__PLAY_FOR_FREE__TEXT: 'เล่นฟรี',
    LOL__ITEMS_PAGE__CATEGORY_ALL: 'ทั้งหมด',
    LOL__ITEMS_PAGE__CATEGORY_ATTACK: 'เชิงรุก',
    LOL__ITEMS_PAGE__CATEGORY_DEFENSE: 'เชิงรับ',
    LOL__ITEMS_PAGE__CATEGORY_MAGIC: 'พลังเวท',
    LOL__ITEMS_PAGE__CATEGORY_RUNSPEED: 'ความเร็วเคลื่อนที่',
    LOL__ITEMS_PAGE__CATEGORY_TOOL: 'เครื่องมือ',
    LOL__ITEMS_PAGE__FILTER__ARMOR: 'เกราะ',
    LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION: 'เจาะเกราะ',
    LOL__ITEMS_PAGE__FILTER__ATTACKSPEED: 'ความเร็วโจมตี',
    LOL__ITEMS_PAGE__FILTER__BOOTS: 'รองเท้า',
    LOL__ITEMS_PAGE__FILTER__CONSUMABLE: 'ของใช้',
    LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION: 'ลดคูลดาวน์',
    LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE: 'โจมตีคริติคอล',
    LOL__ITEMS_PAGE__FILTER__DAMAGE: 'พลังโจมตี',
    LOL__ITEMS_PAGE__FILTER__GOLDPER: 'รายได้',
    LOL__ITEMS_PAGE__FILTER__HEALTH: 'พลังชีวิต',
    LOL__ITEMS_PAGE__FILTER__HEALTHREGEN: 'ฟื้นฟูพลังชีวิต',
    LOL__ITEMS_PAGE__FILTER__LIFESTEAL: 'ดูดเลือด',
    LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION: 'เจาะเกราะเวท',
    LOL__ITEMS_PAGE__FILTER__MANA: 'มานา',
    LOL__ITEMS_PAGE__FILTER__MANAREGEN: 'ฟื้นฟูมานา',
    LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT: 'ไอเทมเพิ่มควา',
    LOL__ITEMS_PAGE__FILTER__SPELLBLOCK: 'ต้านทานเวท',
    LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE: 'พลังเวท',
    LOL__ITEMS_PAGE__FILTER__VISION: 'คุมวิสัยทัศน์',
    LOL__ITEMS_PAGE__NO_MAPPING_ITEMS: 'ไม่พบไอเทมที่ตรงการค้นหา',
    LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS: 'ไอเทมระดับสูง',
    LOL__ITEMS_PAGE__POPUP__FORMULA: 'ไอเทมที่ใช้ผสม',
    LOL__ITEMS_PAGE__POPUP__ITEMS: 'ไอเทม',
    LOL__ITEMS_PAGE__SEARCH_ITEMS: 'ค้นหาไอเทม',
    LOL__MAIN_PAGE__SYSTEM_MESSAGE: 'ข้อมูลระบบ',
    LOL__NEWS_PAGE__END: 'ไม่มีข้อมูลเพิ่มเติม',
    LOL__NEWS_PAGE__NO_MAPPING_NEWS: 'ไม่มีข่าวที่เกี่ยวข้อง',
    LOL__NEWS_PAGE__SEARCH_PLACEHOLDER: 'ค้นหาหัวข้อข่าว',
    LOL__NOT_FOUND__CONTENT: 'ไม่พบหน้านี้ให้ คลิกที่นี่เพื่อกลับไปที่หน้าแรก',
    LOL__NOT_FOUND__TITLE: '404',
    LOL__REMIND_TEXT__ONLY_TW_REGION: '※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href="https://terms.support.garena.com/tw" target="_blank" rel="noreferrer noopener" style="color: white">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。',
    LOL__SERVER_PAGE__CURRENT_EXCLUDE: 'พึ่งถูกแก้ไข',
    LOL__SERVER_PAGE__CURRENT_STATUS: 'สถานะปัจจุบัน',
    LOL__SERVER_PAGE__MALFUNCTION_MESSAGE: 'ข้อมูลเหตุขัดข้อง',
    LOL__SERVER_PAGE__NORMAL_MESSAGE: 'ข้อมูลทั่วไป',
    LOL__SERVER_PAGE__SERVER_STATUS: 'สถานะเซิร์ฟเวอร์',
    LOL__SERVER_PAGE__WARNING_MESSAGE: 'ข้อความแจ้งเตือน',
    LOL__TUTORIAL__CHAMPION__DESC: 'แชมเปี้ยนจะแข็งแกร่งขึ้นจากการเก็บค่าประสบการณ์เพื่อเพิ่มเลเวล และเก็บทองเพื่อซื้อไอเทมที่ทรงพลังขึ้นเรื่อย ๆ ทั้งสองปัจจัยนี้เป็นสิ่งสำคัญที่จะทำให้คุณเอาชนะคู่ต่อสู้ได้เพื่อเข้าไปทำลายฐานทัพของพวกเขา',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE: 'เก็บค่าประสบการณ์',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC: 'เมื่อแชมเปี้ยนได้รับค่าประสบการณ์ถึงจำนวนหนึ่ง พวกเขาจะอัปเลเวลและสามารถปลดล็อกหรือเพิ่มพลังให้กับสกิลต่าง ๆ และมีค่าพลังพื้นฐานเพิ่มขึ้น เก็บค่าประสบการณ์จากการสังหารแชมเปี้ยนและยูนิตฝ่ายศัตรู ช่วยเหลือในการสังหาร และทำลายสิ่งปลูกสร้างต่าง ๆ',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY: 'เก็บสะสมทอง',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC: 'ทองเป็นหน่วยเงินภายในเกมเพื่อใช้ในการซื้อไอเทมสำหรับแชมเปี้ยนของคุณ ทองจะสามารถเก็บสะสมได้จากการสังหารแชมเปี้ยนและยูนิตฝ่ายศัตรู ช่วยเหลือในการสังหาร ทำลายสิ่งปลุกสร้าง และสวมใส่ไอเทมเพิ่มรายรับ',
    LOL__TUTORIAL__CHAMPION__SHOP: 'ร้านค้า',
    LOL__TUTORIAL__CHAMPION__SHOP_DESC: 'ร้านค้าคืที่ที่คุณจะสามารถซื้อและขายไอเทมด้วยทองที่คุณสะสมมา สามารถใช้งานร้านค้าได้แค่ตอนที่คุณอยู่ในบริเวณจุดเกิดเท่านั้น',
    LOL__TUTORIAL__CHAMPION__TOPIC: 'เพิ่มพลังให้กับแชมเปี้ยนของคุณ',
    LOL__TUTORIAL__GET_START: 'ไปลุยกันเลย',
    LOL__TUTORIAL__LEARN_BASIC: 'เรียนรู้พื้นฐาน',
    LOL__TUTORIAL__MAP_CONTENT_1__DESC: 'Nexus คือใจกลางฐานทัพของทั้งสองทีม ทำลาย Nexus ของศัตรูก่อนอีกฝ่ายเพื่อชนะเกม',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1: 'Nexus ของคุณจะเป็นจุดที่มินเนี่ยนจะเกิด ด้านหลัง Nexus ของคุณคือแท่นจุดเกิด ซึ่งเป็นที่ที่คุณจะสามารถเติมพลังชีวิตและมานาได้อย่างรวดเร็ว และใช้งานร้านค้าได้',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2: 'Nexus ที่ตั้งอยู่ภายในฐานทัพของศัตรูจะมีหน้าตาเหมือนกับ Nexus ของคุณ หากทำลาย Nexus ของศัตรูได้แล้วจะทำให้ทีมของคุณชนะเกมทันที',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1: 'Nexus ของคุณ',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2: 'Nexus ของศัตรู',
    LOL__TUTORIAL__MAP_CONTENT_1__TOPIC: 'ทำลายฐาน',
    LOL__TUTORIAL__MAP_CONTENT_2__DESC: 'ทีมของคุณต้องทำลายทุกอย่างใน 1 เลนเป็นอย่างน้อย เพื่อที่จะเข้าถึง Nexus ของศัตรู สิ่งที่จะค่อยกั้นขวางทางของคุณคือป้อมปราการและ Inhibitor แต่ละเลนจะมีป้อมปราการ 3 ป้อมและ 1 Inhibitor และ Nexus แต่ละฝั่งจะมีป้อมปราการขวางอยู่ถึง 2 ป้อม',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1: 'ป้อมปราการจะสร้างความเสียหายกับมินเนี่ยนและแชมเปี้ยนฝ่ายศัตรู และมอบวิสัยทัศน์ให้กับทีมของมัน โจมตีสิ่งปลูกสร้างเหล่านี้เวลาที่มีมินเนี่ยนของคุณอยู่ข้างหน้าเพื่อหลีกเลี่ยงการถูกป้อมยิง',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2: 'Inhibitor แต่ละหลังจากมีป้อมปราการป้องกันอยู่ 1 ป้อม เมื่อถูกทำลายแล้วจะมีมินเนี่ยนยักษ์ออกมาที่เลนนั้นเป็นเวลาหลายนาที หลังจากนั้น Inhibitor จะฟื้นกลับมาใหม่และมินเนี่ยนยักษ์จะหยุดเกิด',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1: 'ป้อมปราการ',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2: 'Inhibitor',
    LOL__TUTORIAL__MAP_CONTENT_2__TOPIC: 'เคลียร์ทางให้ทีม',
    LOL__TUTORIAL__MAP_CONTENT_3__DESC: 'ตรงช่องว่างระหว่างเลนจะมีป่าอยู่ ซึ่งเป็นที่อยู่ของสัตว์ป่าและพืชพันธุ์ชนิดต่าง ๆ สัตว์ป่าที่สำคัญที่สุดคือบารอนและมังกร การสังหารยูนิตเหล่านี้จะมอบบัฟพิเศษให้กับทีมของคุณและสามารถช่วยให้เกมพลิกกลับมาได้',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1: 'บารอน (Baron Nashor) คือสัตว์ป่าที่แข็งแกร่งที่สุดในป่า ทีมที่สังหารบารอนจะได้รับโบนัสพลังโจมตี พลังเวท วาร์ปกลับบ้านแบบเสริมพลัง และความสามารถในการเพิ่มพลังให้กับมินเนี่ยนที่อยู่รอบข้าง',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2: 'มังกรคือสัตว์ป่าสุดแกร่งที่จะมอบโบนัสพิเศษตามธาตุของมันให้กับทีมที่สังหาร มังกรจะมีทั้งหมด 4 ธาตุและมีมหามังกร 1 ตัว',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1: 'BARON NASHOR',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2: 'มังกร',
    LOL__TUTORIAL__MAP_CONTENT_3__TOPIC: 'พิชิตผืนป่า',
    LOL__TUTORIAL__MAP_CONTENT_4__DESC: 'การจัดทีมทั่วไปจะจำแนกผู้เล่นในทีมออกเป็น 5 ตำแหน่ง แต่ละเลนจะต้องใช้ประเภทของแชมเปี้ยนที่แตกต่างกัน ลองเล่นหลาย ๆ เลนหรือไม่ก็เลือกเลนที่ถนัดแล้วไปให้สุดทางดู',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1: 'แชมเปี้ยนที่อยู่เลนบนจะเป็นประเภทนักสู้ผู้เด็ดเดี่ยว หน้าที่ของเขาคือการปกป้องเลนและคอยจัดการกับสมาชิกที่แข็งแกร่งที่สุดของทีมศัตรูเป็นหลัก',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2: 'ตำแหน่งป่ามีไว้สำหรับผู้มีใจรักในการไล่ล่า พวกเขาจะต้องคอยแอบย่องไปหาเลนต่าง ๆ และคอยสอดส่องสัตว์ป่าหรือสัตว์ในตำนานที่สำคัญเพื่อโจมตีพวกมันแล้วชิงบัฟมาให้ทีมในตอนที่ศัตรูเผลอ',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3: 'เลนกลางคือที่อยู่ของแชมเปี้ยนที่มีดาเมจแรงสูง ผู้สามารถจัดการกับคู่ต่อสู้ได้ด้วยตนเองและในทีมไฟต์ สำหรับพวกเขาแล้ว การต่อสู้มันก็คือการเต้นรำอยู่ท่ามกลางความอันตราย และคอยสอดส่องหาโอกาสที่จะโค่นล้มคู่ต่อสู้อยู่เสมอ',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4: 'แชมเปี้ยนเลนล่างคือระเบิดของทีม เหมือนดั่งสินค้าที่ทรงคุณค่า พวกเขาจะต้องได้รับการปกป้องในช่วงเริ่มเกมก่อนที่จะเก็บสะสมทองและค่าประสบการณ์เพียงพอจนสามารถพาทีมไปสู่ชัยชนะได้',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5: 'แชมเปี้ยนซัพพอร์ตคือผู้พิทักษ์ของทีม หน้าที่ของพวกเขาคือคอยปกป้องเพื่อนร่วมทีม ช่วยเหลือทีมในการสังหารศัตรู และประคองให้เลนล่างสามารถฟาร์มทองจนแข็งแกร่งขึ้นมาได้',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1: 'เลนบน',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2: 'ป่า',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3: 'เลนกลาง',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4: 'เลนล่าง',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5: 'ซัพพอร์ต',
    LOL__TUTORIAL__MAP_CONTENT_4__TOPIC: 'เลือกเลนของคุณ',
    LOL__TUTORIAL__SKILL__EQUIPMENT: 'ไอเทม',
    LOL__TUTORIAL__SKILL__SKILL: 'สกิล',
    LOL__TUTORIAL__SKILL__SKILL_DESC: 'แชมเปี้ยนจะมีสกิลหลักอยู่ 5 สกิล เวทพิเศษ 2 แบบ และสามารถสวมใส่ไอเทมได้สูงสุด 7 ชิ้นพร้อมกัน การค้นหาลำดับสกิลที่ควรอัป เวทซัมมอนเนอร์ที่ใช่ และการออกไอเทมที่ถูกต้องสำหรับแชมเปี้ยนของคุณจะช่วยให้ทีมของคุณประสบความสำเร็จ',
    LOL__TUTORIAL__SKILL__SUMMONER_SKILL: 'เวทซัมมอนเนอร์',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL: 'ปลดล็อกสกิลของคุณ',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC: 'แชมเปี้ยนจะมีสกิลหลักอยู่ 5 สกิล เวทพิเศษ 2 แบบ และสามารถสวมใส่ไอเทมได้สูงสุด 7 ชิ้นพร้อมกัน การค้นหาลำดับสกิลที่ควรอัป เวทซัมมอนเนอร์ที่ใช่ และการออกไอเทมที่ถูกต้องสำหรับแชมเปี้ยนของคุณจะช่วยให้ทีมของคุณประสบความสำเร็จ',
    LOL__TUTORIAL__WELCOME: "ยินดีต้อนรับสู่ Summoner's Rift",
    LOL__TUTORIAL__WELCOME_DESC: 'League เป็นเกมที่ใช้เวลาในการเรียนรู้ เพราะฉะนั้นเราจะมาเริ่มกันที่สิ่งจำเป็นที่คุณควรรู้ก่อน ดูคู่มือด้านล่างเพื่ออ่านสรุปเกี่ยวกับโหมดที่มีผู้เล่นมากที่สุด',
    LOL__TUTORIAL__WHAT_IS_LOL: 'League of Legends คืออะไร?',
    LOL__TUTORIAL__WHAT_IS_LOL_DESC: 'League of Legends คือเกมวางแผนแบบทีมที่ทั้ง 2 ทีมจะต้องส่งแชมเปี้ยน 5 ตัวมาต่อสู้กันเพื่อทำลายฐานทัพของอีกฝ่าย มีแชมเปี้ยนกว่า 140 ตัวให้เลือกเล่นและโชว์ความสามารถ ใช้พวกมันในการสังหารศัตรูและทำลายป้อมปราการเพื่อฝ่าเข้าไปเก็บชัยชนะมาให้กับทีมของคืน'
  },
  vn: {
    LOL__MAIN_PAGE__MORE_NEWS: 'XEM THÊM',
    LOL__BAN_PAGE__BAN_STATUS: 'Trạng Thái Khóa',
    LOL__BAN_PAGE__LEVEL: 'Cấp Độ',
    LOL__BAN_PAGE__ONE_MONTH: 'Một tháng',
    LOL__BAN_PAGE__REASON: 'Lý Do Khóa',
    LOL__BAN_PAGE__SEARCH_SUMMONER: 'Tìm Người Chơi',
    LOL__BAN_PAGE__SUMMONER: 'Người Chơi',
    LOL__BAN_PAGE__THREE_MONTH: 'Ba tháng',
    LOL__BAN_PAGE__TWO_MONTH: 'Hai tháng',
    LOL__BREADCRUMB_PAGE_NAME__BAN: 'Khóa Tài Khoản',
    LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS: 'Danh Sách Khóa',
    LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS: 'Tướng',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION: 'Chi Tiết Cập Nhật ĐTCL',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC: 'Chi tiết thông tin về bản cập nhật ĐTCL.',
    LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD: 'Tải & Đăng Ký',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT: 'Esports',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC: 'Tin tức mới nhất về Esports.',
    LOL__BREADCRUMB_PAGE_NAME__EVENT: 'Sự Kiện',
    LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC: 'Chi tiết sự kiện.',
    LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT: 'Giới Thiệu',
    LOL__BREADCRUMB_PAGE_NAME__INDEX: 'Trang Chủ',
    LOL__BREADCRUMB_PAGE_NAME__INFO: 'Thông Tin',
    LOL__BREADCRUMB_PAGE_NAME__INFO_DESC: 'Các thông tin về trò chơi, hệ thống, chi tiết cập nhật, ...',
    LOL__BREADCRUMB_PAGE_NAME__ITEMS: 'Trang Bị',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION: 'Chi Tiết Cập Nhật',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC: 'Thông tin chi tiết về bản cập nhật.',
    LOL__BREADCRUMB_PAGE_NAME__NEWS: 'Tin Tức',
    LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS: 'Trạng Thái Dịch Vụ',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM: 'Hệ Thống',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC: 'Các thông tin liên quan tới hệ thống.',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO: 'Video',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC: 'Video mới nhất từ Liên Minh Huyền Thoại.',
    LOL__CHAMPIONS_INNERPAGE_CHARACTER: 'Vai Trò',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN: 'SÁT THỦ',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER: 'ĐẤU SĨ',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE: 'PHÁP SƯ',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN: 'XẠ THỦ',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT: 'HỖ TRỢ',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK: 'ĐỠ ĐÒN',
    LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN: 'Trang Phục Mặc Định',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY: 'Độ Khó',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY: 'Dễ / Trung Bình / Khó',
    LOL__CHAMPIONS_INNERPAGE__E: 'E',
    LOL__CHAMPIONS_INNERPAGE__PASSIVE: 'Nội tại',
    LOL__CHAMPIONS_INNERPAGE__Q: 'Q',
    LOL__CHAMPIONS_INNERPAGE__R: 'R',
    LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE: 'Giới Thiệu Kỹ Năng',
    LOL__CHAMPIONS_INNERPAGE__SKIN: 'Trang Phục',
    LOL__CHAMPIONS_INNERPAGE__W: 'W',
    LOL__CHAMPIONS_PAGE__CATEGORY_ALL: 'Tất Cả',
    LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN: 'Sát Thủ',
    LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER: 'Đấu Sĩ',
    LOL__CHAMPIONS_PAGE__CATEGORY_MAGE: 'Pháp Sư',
    LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN: 'Xạ Thủ',
    LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT: 'Hỗ Trợ',
    LOL__CHAMPIONS_PAGE__CATEGORY_TANK: 'Đỡ Đòn',
    LOL__CHAMPIONS_PAGE__DESC: 'Với hơn 150 vị tướng, chắc chắn bạn sẽ tìm được lựa chọn phù hợp với lối chơi của mình. Hãy luyện một, hoặc tất cả cũng được nhé!',
    LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS: 'Không tìm thấy tướng phù hợp.',
    LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS: 'Tìm Tướng',
    LOL__DOWNLOAD__ACCOUNT_APPLY_LINK: 'https://sso.garena.com/ui/register?locale=vi-VN',
    LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT: 'Bản Cập Nhật',
    LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC: 'Nếu bạn gặp phải lỗi trong khi cập nhật, hãy thử cập nhật lại "Liên Minh huyền Thoại" bằng cách thủ công.',
    LOL__DOWNLOAD__CURRENT_VERSION__TOPIC: 'Bản Hiện Tại',
    LOL__DOWNLOAD__DRIVER__CONTENT_DESC: 'Để có thể duy trì đồ họa của "Liên Minh Huyền Thoại" mượt mà nhất có thể, hãy cập nhật card màn hình thường xuyên. Hãy tìm driver mà bạn cần.',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD: 'Cập nhật Phần mềm AMD',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA: 'Cập nhật Phần mềm NVIDIA',
    LOL__DOWNLOAD__DRIVER__TOPIC: 'Driver',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_1: '2.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_2: 'Trên 2 GB',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_3: 'Window XP SP3<br>Windows Vista<br>Window 7<br>(Hiện tại đã không còn hỗ trợ Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_4: 'Card màn hình liền máy HD3000 trở lên',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_5: 'Windows Cơ Bản và Tương Thích',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1: 'Cấu Hình',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2: 'Cấu Hình Tối Thiểu',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3: 'Cấu Hình Đề Nghị',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1: 'CPU',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2: 'Random Access Memory(RAM)',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3: 'Hệ Điều Hành',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4: 'Card Màn Hình',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5: 'Card Âm Thanh',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1: '3.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2: 'Trên 4 GB',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3: 'Windows Vista (Bản mới nhất)<br>Window 7<br>(Hiện tại đã không còn hỗ trợ Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4: 'GeForce 8800 hoặc cao hơn',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5: 'Windows Cơ Bản và Tương Thích',
    LOL__DOWNLOAD__EAUIPMENT__TOPIC: 'Hệ Thống và Cấu Hình Đề Nghị',
    LOL__DOWNLOAD__HISTORY__CATEGORY_1: 'Ngày Cập Nhật',
    LOL__DOWNLOAD__HISTORY__CATEGORY_2: 'Bản Cũ',
    LOL__DOWNLOAD__HISTORY__CATEGORY_3: 'Bản Mới',
    LOL__DOWNLOAD__HISTORY__CATEGORY_4: 'Tải Ngay',
    LOL__DOWNLOAD__HISTORY__TOPIC: 'Danh Sách Cập Nhật',
    LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC: 'Hãy chắc chắn nắm được số bản cập nhật hiện tại trong máy, sau đó tải bản tương ứng để "cập nhật thủ công".',
    LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC: 'Hướng Dẫn Tải Bản Thủ Công',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1: 'Tài Khoản',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2: 'Tải Trò Chơi',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3: 'Tải Trò Chơi (nhanh nhất)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1: 'Tài Khoản Garena',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2: 'Tải bằng Trình Duyệt Web (tốc độ chậm)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3: 'Tải bằng GPC (tốc độ nhanh)',
    LOL__FOOTER__COPYRIGHT: 'Sản phẩm được hợp tác phát hành bởi Công ty TNHH Liên Minh Huyền Thoại & Công ty Cổ phần Giải trí và Thể thao Điện tử Việt Nam.\n\nVăn phòng đại diện: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54 đường Liễu Giai, phường Cống Vị, quận Ba Đình, thành phố Hà Nội, Việt Nam.\n\nĐiện thoại: (04)7305-3939; Fax: (04)3759-2429',
    LOL__FOOTER__LINKS__LINK_1_HREF: 'https://www.facebook.com/LienMinhHuyenThoai',
    LOL__FOOTER__LINKS__LINK_1_NAME: 'Facebook',
    LOL__FOOTER__LINKS__LINK_2_HREF: 'https://www.youtube.com/user/GarenaVietnam?view_as=subscriber?sub_confirmation=1',
    LOL__FOOTER__LINKS__LINK_2_NAME: 'Youtube',
    LOL__FOOTER__LINKS__LINK_3_HREF: 'https://www.garena.vn/terms',
    LOL__FOOTER__LINKS__LINK_3_NAME: 'Điều Khoản Dịch Vụ',
    LOL__FOOTER__LINKS__LINK_4_HREF: 'https://hotro.garena.vn/',
    LOL__FOOTER__LINKS__LINK_4_NAME: 'Trung Tâm Hỗ Trợ',
    LOL__FOOTER__LINKS__LINK_5_HREF: 'FILL in region link5 url',
    LOL__FOOTER__LINKS__LINK_5_NAME: 'link5',
    LOL__FOOTER__PLAY_FOR_FREE__LINK: 'https://lienminh.garena.vn/download',
    LOL__FOOTER__PLAY_FOR_FREE__TEXT: 'CHƠI MIỄN PHÍ',
    LOL__ITEMS_PAGE__CATEGORY_ALL: 'Tất Cả',
    LOL__ITEMS_PAGE__CATEGORY_ATTACK: 'Tấn Công',
    LOL__ITEMS_PAGE__CATEGORY_DEFENSE: 'Phòng Thủ',
    LOL__ITEMS_PAGE__CATEGORY_MAGIC: 'Phép Thuật',
    LOL__ITEMS_PAGE__CATEGORY_RUNSPEED: 'Tốc Độ',
    LOL__ITEMS_PAGE__CATEGORY_TOOL: 'Công Cụ',
    LOL__ITEMS_PAGE__FILTER__ARMOR: 'Giáp',
    LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION: 'Xuyên Giáp',
    LOL__ITEMS_PAGE__FILTER__ATTACKSPEED: 'Tốc Độ Đánh',
    LOL__ITEMS_PAGE__FILTER__BOOTS: 'Giày',
    LOL__ITEMS_PAGE__FILTER__CONSUMABLE: 'Vật Phẩm Tiêu Hao',
    LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION: 'Giảm Hồi Chiêu',
    LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE: 'Chí Mạng',
    LOL__ITEMS_PAGE__FILTER__DAMAGE: 'Sức Mạnh Công Kích',
    LOL__ITEMS_PAGE__FILTER__GOLDPER: 'Vàng Thu Nhập',
    LOL__ITEMS_PAGE__FILTER__HEALTH: 'Máu',
    LOL__ITEMS_PAGE__FILTER__HEALTHREGEN: 'Hồi Máu',
    LOL__ITEMS_PAGE__FILTER__LIFESTEAL: 'Hút Máu',
    LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION: 'Xuyên Kháng Phép',
    LOL__ITEMS_PAGE__FILTER__MANA: 'Năng Lượng',
    LOL__ITEMS_PAGE__FILTER__MANAREGEN: 'Hồi Năng Lượng',
    LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT: 'Khác',
    LOL__ITEMS_PAGE__FILTER__SPELLBLOCK: 'Kháng Phép',
    LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE: 'Sức Mạnh Phép Thuật',
    LOL__ITEMS_PAGE__FILTER__VISION: 'Kiểm Soát Tầm Nhìn',
    LOL__ITEMS_PAGE__NO_MAPPING_ITEMS: 'Không tìm thấy trang bị phù hợp',
    LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS: 'Trang Bị Nâng Cao',
    LOL__ITEMS_PAGE__POPUP__FORMULA: 'Lối Xây Dựng',
    LOL__ITEMS_PAGE__POPUP__ITEMS: 'Trang Bị',
    LOL__ITEMS_PAGE__SEARCH_ITEMS: 'Tìm Trang Bị',
    LOL__MAIN_PAGE__SYSTEM_MESSAGE: 'Thông Tin Hệ Thống',
    LOL__NEWS_PAGE__END: 'Không có thông tin gì thêm.',
    LOL__NEWS_PAGE__NO_MAPPING_NEWS: 'Không có Tin Liên quan',
    LOL__NEWS_PAGE__SEARCH_PLACEHOLDER: 'Tìm kiếm Thông tin',
    LOL__NOT_FOUND__CONTENT: 'Không tìm thấy thông tin trang, hãy ấn để quay lại trang chủ',
    LOL__NOT_FOUND__TITLE: '404 not found',
    LOL__REMIND_TEXT__ONLY_TW_REGION: '※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href="https://terms.support.garena.com/tw" target="_blank" rel="noreferrer noopener" style="color: white">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。',
    LOL__SERVER_PAGE__CURRENT_EXCLUDE: 'Mới Giải Quyết',
    LOL__SERVER_PAGE__CURRENT_STATUS: 'Trạng Thái Hiện Tại',
    LOL__SERVER_PAGE__MALFUNCTION_MESSAGE: 'Thông Tin Trục Trặc',
    LOL__SERVER_PAGE__NORMAL_MESSAGE: 'Thông Tin Thường',
    LOL__SERVER_PAGE__SERVER_STATUS: 'Trạng Thái Máy Chủ',
    LOL__SERVER_PAGE__WARNING_MESSAGE: 'Tin Nhắn Cảnh Báo',
    LOL__TUTORIAL__CHAMPION__DESC: 'Tướng sẽ mạnh dần bằng cách lên cấp khi nhận đủ lượng kinh nghiệm. Đồng thời, sử dụng vàng để mua những trang bị mạnh mẽ. Luôn bám sát hai yếu tố quyết định này sẽ giúp bạn hủy diệt đối thủ và phá hủy căn cứ của chúng.',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE: 'NHẬN KINH NGHIỆM',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC: 'Khi tướng có đủ lượng kinh nghiệm cần thiết, họ sẽ lên cấp và mở khóa những kỹ năng mạnh mẽ, cũng như các chỉ số cơ bản của mình. Nhận kinh nghiệm bằng cách hạ gục đơn vị và tướng địch, hỗ trợ hạ gục, và phá hủy công trình.',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY: 'NHẬN VÀNG',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC: 'Vàng là đơn vị bạn sẽ sử dụng trong trò chơi để mua trang bị cần thiết cho tướng. Nhận vàng bằng cách hạ gục đơn vị và tướng địch, hỗ trợ hạ gục, phá hủy công trình, và sử dụng các trang bị cung cấp vàng.',
    LOL__TUTORIAL__CHAMPION__SHOP: 'CỬA HÀNG',
    LOL__TUTORIAL__CHAMPION__SHOP_DESC: 'Cửa Hàng là nơi bạn sẽ mua/bán trang bị với vàng có được. Bạn chỉ có thể vào Cửa Hàng khi ở Bệ Đá Cổ.',
    LOL__TUTORIAL__CHAMPION__TOPIC: 'TĂNG SỨC MẠNH TƯỚNG CỦA BẠN',
    LOL__TUTORIAL__GET_START: 'ĐI THÔI NÀO',
    LOL__TUTORIAL__LEARN_BASIC: 'TÌM HIỂU CƠ BẢN',
    LOL__TUTORIAL__MAP_CONTENT_1__DESC: 'Nhà chính Nexus là con tim của căn cứ ở cả hai đội. Phá hủy Nhà chính Nexus của đối phương trước để chiến thắng.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1: 'Nhà chính Nexus là nơi lính sẽ được triệu hồi. Sau Nhà chính Nexus chính là Bệ Đá Cổ, nơi bạn sẽ được hồi máu và năng lượng cũng như thoải mái mua sắm ở Cửa Hàng.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2: 'Hãy xác định vị trí căn cứ của đối phương, Nhà chính Nexus của chúng cũng giống như bạn. Hãy phá hủy nó để chiến thắng.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1: 'NHÀ CHÍNH CỦA BẠN',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2: 'NHÀ CHÍNH ĐỐI THỦ',
    LOL__TUTORIAL__MAP_CONTENT_1__TOPIC: 'PHÁ HỦY CĂN CỨ',
    LOL__TUTORIAL__MAP_CONTENT_2__DESC: 'Đội của bạn cần phá hủy ít nhất một đường để có thể chạm tới Nhà chính Nexus địch. Những công trình phòng thủ nằm trên đường được gọi là Trụ và Nhà Lính. Mỗi đường sẽ có ba Trụ và một Nhà Lính, đồng thời, Nhà chính Nexus sẽ được hai Trụ bảo vệ nghiêm ngặt.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1: 'Trụ sẽ gây sát thương lên lính và tướng địch, đồng thời cung cấp cho kẻ địch tầm nhìn tại khu vực đó. Tấn công những công trình này với lính phía trước để tránh sát thương từ nó và tiến thẳng tới căn cứ địch.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2: 'Mỗi Nhà lính sẽ được bảo vệ bởi một Trụ. Khi phá hủy Nhà lính, lính siêu cấp sẽ được triệu hồi ở đường đó trong vài phút. Sau đó, Nhà lính sẽ được sửa lại và Lính Siêu Cấp cũng sẽ ngừng xuất hiện.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1: 'TRỤ',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2: 'NHÀ LÍNH',
    LOL__TUTORIAL__MAP_CONTENT_2__TOPIC: 'DỌN DẸP CON ĐƯỜNG',
    LOL__TUTORIAL__MAP_CONTENT_3__DESC: 'Giữa các đường chính là khu vực rừng, nơi quái vật trung lập và các loại quả tồn tại. Hai quái vật quan trọng và ảnh hưởng nhất tới trận đấu chính là Baron Nashor và Rồng. Hạ gục các đơn vị này sẽ cho đội của bạn bùa lợi mạnh mẽ, giúp đẩy mạnh lợi thế, và cũng có thể đảo ngược thế trận.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1: 'Baron Nashor là quái vật mạnh nhất trong rừng. Đội hạ gục được nó sẽ nhận bùa lợi giúp tăng sức mạnh công kích, sức mạnh phép thuật, biến về được cường hóa, đồng thời tăng cấp sức mạnh của lính ở gần.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2: 'Rồng là quái vật rất mạnh, cho bạn bùa lợi hữu ích dựa trên nguyên tố của rồng mà đội bạn hạ gục được. Có tất cả bốn loại Rồng Nguyên Tố và một Rồng Ngàn Tuổi.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1: 'BARON NASHOR',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2: 'RỒNG',
    LOL__TUTORIAL__MAP_CONTENT_3__TOPIC: 'KHÁM PHÁ RỪNG GIÀ',
    LOL__TUTORIAL__MAP_CONTENT_4__DESC: 'Có tất cả năm vị trí để bạn có thể thi đấu trong Liên Minh Huyền Thoại. Mỗi vị trí lại có những mục tiêu, nhiệm vụ và vị tướng khác nhau—hãy tìm hiểu tất cả hoặc chọn cho mình một đường phù hợp nhất với bản thân.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1: 'Tướng đường trên là những đấu sĩ solo mạnh mẽ của đội. Nhiệm vụ của họ là bảo vệ đường và tập trung vào những chủ lực của đối thủ trong giao tranh.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2: 'Tướng đi rừng dành phần lớn thời gian của mình để đi săn. Ẩn nấp giữa các đường, luôn để mắt tới những quái vật trung lập và chớp lấy khoảnh khắc kẻ địch không chú ý, tạo tiền đề cho đồng đội.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3: 'Tướng đường giữa sở hữu khả năng dồn sát thương khủng—người có thể vừa solo, vừa giao tranh với đồng đội cực kỳ mạnh mẽ. Với họ, giao tranh là những cuộc vui đầy nguy hiểm, và họ là người luôn tìm kiếm những cơ hội để tỏa sáng, trên cơ đối thủ.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4: 'Tướng đường dưới là quả bom nổ chậm của cả đội. Với trọng trách đặt nặng trên vai, họ cần được bảo vệ ở giai đoạn đầu trận để có thể tìm kiếm những chỉ số vàng và kinh nghiệm cần thiết, giúp họ tỏa sáng, gánh đội tới chiến thắng.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5: 'Tướng hỗ trợ là người bảo vệ của đội. Họ là chìa khóa giúp cho đồng đội có thể sống sót, và cũng là nhân tố quan trọng trong những pha thiết lập giao tranh tìm kiếm lợi thế. Bảo vệ đồng đội tới khi họ trở nên mạnh hơn chính là mục tiêu của tướng hỗ trợ.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1: 'ĐƯỜNG TRÊN',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2: 'RỪNG',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3: 'ĐƯỜNG GIỮA',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4: 'ĐƯỜNG DƯỚI',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5: 'HỖ TRỢ',
    LOL__TUTORIAL__MAP_CONTENT_4__TOPIC: 'CHỌN ĐƯỜNG',
    LOL__TUTORIAL__SKILL__EQUIPMENT: 'TRANG BỊ',
    LOL__TUTORIAL__SKILL__SKILL: 'KỸ NĂNG',
    LOL__TUTORIAL__SKILL__SKILL_DESC: 'Mỗi tướng sẽ có năm kỹ năng cốt lõi, hai phép bổ trợ, và tối đa bảy trang bị có thể đem theo cùng lúc. Hãy tự mình khám phá những cách nâng kỹ năng, sử dụng phép bổ trợ và trang bị cho riêng từng vị tướng. Nó sẽ giúp bạn cũng như cả đội thành công hơn trong việc giành chiến thắng.',
    LOL__TUTORIAL__SKILL__SUMMONER_SKILL: 'PHÉP BỔ TRỢ',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL: 'MỞ KHÓA KỸ NĂNG',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC: 'Mỗi tướng sẽ có năm kỹ năng cốt lõi, hai phép bổ trợ, và tối đa bảy trang bị có thể đem theo cùng lúc. Hãy tự mình khám phá những cách nâng kỹ năng, sử dụng phép bổ trợ và trang bị cho riêng từng vị tướng. Nó sẽ giúp bạn cũng như cả đội thành công hơn trong việc giành chiến thắng.',
    LOL__TUTORIAL__WELCOME: 'CHÀO MỪNG ĐẾN VỚI SUMMONER RIFT',
    LOL__TUTORIAL__WELCOME_DESC: 'Có rất nhiều thứ bạn cần học hỏi và tìm hiểu trong Liên Minh, vì vậy, hãy cùng bắt đầu với những thứ cốt lõi nhất. Khám phá hướng dẫn bên dưới để hiểu rõ hơn về chế độ chơi phổ biến nhất này.',
    LOL__TUTORIAL__WHAT_IS_LOL: 'LIÊN MINH HUYỀN THOẠI LÀ GÌ?',
    LOL__TUTORIAL__WHAT_IS_LOL_DESC: 'Liên Minh Huyền Thoại là một trò chơi chiến thuật đồng đội nơi hai đội với năm vị tướng mạnh mẽ sẽ đối đầu nhau nhằm mục tiêu phá hủy căn cứ đối phương. Chọn một trong hơn 150 vị tướng để tạo ra những pha thi đấu xuất thần, hạ gục đối thủ, san phẳng trụ địch và hướng đến chiến thắng vinh quang.'
  },
  ph: {
    LOL__BAN_PAGE__BAN_STATUS: 'Ban Status',
    LOL__BAN_PAGE__LEVEL: 'Level',
    LOL__BAN_PAGE__ONE_MONTH: 'Most Recent 1 Month',
    LOL__BAN_PAGE__REASON: 'Ban Reason',
    LOL__BAN_PAGE__SEARCH_SUMMONER: 'Search Summoner',
    LOL__BAN_PAGE__SUMMONER: 'Summoner',
    LOL__BAN_PAGE__THREE_MONTH: 'Most Recent 3 Months',
    LOL__BAN_PAGE__TWO_MONTH: 'Most Recent 2 Months',
    LOL__BREADCRUMB_PAGE_NAME__BAN: 'Ban',
    LOL__BREADCRUMB_PAGE_NAME__BAN_LISTS: 'Ban List',
    LOL__BREADCRUMB_PAGE_NAME__CHAMPIONS: 'Champions',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION: 'TFT Patch Notes',
    LOL__BREADCRUMB_PAGE_NAME__CHESS_VERSION_DESC: 'TFT Patch Updates Details',
    LOL__BREADCRUMB_PAGE_NAME__DOWNLOAD: 'Download & Registration',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT: 'Esports',
    LOL__BREADCRUMB_PAGE_NAME__ESPORT_DESC: 'Esports News',
    LOL__BREADCRUMB_PAGE_NAME__EVENT: 'Event',
    LOL__BREADCRUMB_PAGE_NAME__EVENT_DESC: 'Event Details',
    LOL__BREADCRUMB_PAGE_NAME__GAME_CONTENT: 'Game Content',
    LOL__BREADCRUMB_PAGE_NAME__INDEX: 'Home',
    LOL__BREADCRUMB_PAGE_NAME__INFO: 'Information',
    LOL__BREADCRUMB_PAGE_NAME__INFO_DESC: 'Game Information, System Information, Patch Notes etc.,',
    LOL__BREADCRUMB_PAGE_NAME__ITEMS: 'Items',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION: 'Patch Notes',
    LOL__BREADCRUMB_PAGE_NAME__LOL_VERSION_DESC: 'Patch Notes Details',
    LOL__BREADCRUMB_PAGE_NAME__NEWS: 'News',
    LOL__BREADCRUMB_PAGE_NAME__SERVER_STATUS: 'Server Status',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM: 'System',
    LOL__BREADCRUMB_PAGE_NAME__SYSTEM_DESC: 'System Information',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO: 'Video',
    LOL__BREADCRUMB_PAGE_NAME__VIDEO_DESC: 'Video Details',
    LOL__CHAMPIONS_INNERPAGE_CHARACTER: 'Characters',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN: 'ASSASSIN',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER: 'FIGHTER',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE: 'MAGE',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN: 'MARKSMAN',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT: 'SUPPORT',
    LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK: 'TANK',
    LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN: 'Default Skin',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY: 'Difficulty',
    LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY: 'Easy / Normal / Difficult',
    LOL__CHAMPIONS_INNERPAGE__E: 'E',
    LOL__CHAMPIONS_INNERPAGE__PASSIVE: 'Passive',
    LOL__CHAMPIONS_INNERPAGE__Q: 'Q',
    LOL__CHAMPIONS_INNERPAGE__R: 'R',
    LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE: 'Skills Introduction',
    LOL__CHAMPIONS_INNERPAGE__SKIN: 'Skins',
    LOL__CHAMPIONS_INNERPAGE__W: 'W',
    LOL__CHAMPIONS_PAGE__CATEGORY_ALL: 'All',
    LOL__CHAMPIONS_PAGE__CATEGORY_ASSASSIN: 'Assassin',
    LOL__CHAMPIONS_PAGE__CATEGORY_FIGHTER: 'Figher',
    LOL__CHAMPIONS_PAGE__CATEGORY_MAGE: 'Mage',
    LOL__CHAMPIONS_PAGE__CATEGORY_MARKSMAN: 'Marksman',
    LOL__CHAMPIONS_PAGE__CATEGORY_SUPPORT: 'Support',
    LOL__CHAMPIONS_PAGE__CATEGORY_TANK: 'Tank',
    LOL__CHAMPIONS_PAGE__DESC: 'With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all!',
    LOL__CHAMPIONS_PAGE__NO_MAPPING_CHAMPIONS: 'No matching champions found.',
    LOL__CHAMPIONS_PAGE__SEARCH_CHAMPIONS: 'Champion Search',
    LOL__DOWNLOAD__ACCOUNT_APPLY_LINK: 'https://sso.garena.com/ui/register',
    LOL__DOWNLOAD__BTN__UPDATE_FILE_TEXT: 'Download',
    LOL__DOWNLOAD__CURRENT_VERSION__CONTENT_DESC: 'If you encounter an error during the update, you can try to update the "Game Client" manually.',
    LOL__DOWNLOAD__CURRENT_VERSION__TOPIC: 'Current Patch',
    LOL__DOWNLOAD__DRIVER__CONTENT_DESC: 'In order to maintain the best graphic performances of "League of Legends", please update the graphics card driver regularly. Find the driver you need.',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_AMD: 'AMD Software Update',
    LOL__DOWNLOAD__DRIVER__CONTENT__BTN_TEXT_NVIDIA: 'NVIDIA Software Update',
    LOL__DOWNLOAD__DRIVER__TOPIC: 'Driver',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_1: '2.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_2: 'Above 2 GB',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_3: 'Window XP SP3<br>Windows Vista<br>Window 7<br>(Currently unable to support Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_4: 'Built-in graphics card HD3000 and above',
    LOL__DOWNLOAD__EAUIPMENT__BASIC_5: 'Windows Standards and Compatibility',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_1: 'Equipment Items',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_2: 'Minimum Requirements',
    LOL__DOWNLOAD__EAUIPMENT__CATEGORY_3: 'Recommended Requirements',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_1: 'CPU',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_2: 'Random Access Memory(RAM)',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_3: 'Operating System',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_4: 'Graphics Card',
    LOL__DOWNLOAD__EAUIPMENT__ITEM_NAME_5: 'Sound Card',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_1: '3.0 GHz',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_2: 'Above 4 GB',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_3: 'Windows Vista (Latest Version)<br>Window 7<br>(Currently unable to support Mac OS)',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_4: 'GeForce 8800 or Higher',
    LOL__DOWNLOAD__EAUIPMENT__SUGGEST_5: 'Windows Standards and Compatibility',
    LOL__DOWNLOAD__EAUIPMENT__TOPIC: 'System and Equipment Requirements',
    LOL__DOWNLOAD__HISTORY__CATEGORY_1: 'Release Date',
    LOL__DOWNLOAD__HISTORY__CATEGORY_2: 'Your version',
    LOL__DOWNLOAD__HISTORY__CATEGORY_3: 'Updated Version',
    LOL__DOWNLOAD__HISTORY__CATEGORY_4: 'Download the Patch File',
    LOL__DOWNLOAD__HISTORY__TOPIC: 'Patch Versions List',
    LOL__DOWNLOAD__MANUAL_UPDATE__CONTENT_DESC: 'Confirm the current patch version of your computer, and download the corresponding "manual patch file".',
    LOL__DOWNLOAD__MANUAL_UPDATE__TOPIC: 'Manual Patch Download Tutorial',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_1: 'Account Registration',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_2: 'Game Download',
    LOL__DOWNLOAD__QUICK_LINK__LINK_BTN_TEXT_3: 'GPC Download',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_1: 'Garena Account Registration',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_2: 'Download via Browser (Slower)',
    LOL__DOWNLOAD__QUICK_LINK__LINK_DESC_TEXT_3: 'Download via GPC (Faster)',
    LOL__FOOTER__COPYRIGHT: 'Copyright © Demo. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Demo, Inc. "Demo" and "League of Legends" are trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.',
    LOL__FOOTER__LINKS__LINK_1_HREF: '//dlgarenanow-a.akamaihd.net/mgames/spdtw/spdcenter/footer/LicensePage/license.html',
    LOL__FOOTER__LINKS__LINK_1_NAME: '授權資訊',
    LOL__FOOTER__LINKS__LINK_2_HREF: 'https://www.garena.ph/support/',
    LOL__FOOTER__LINKS__LINK_2_NAME: 'Support Center',
    LOL__FOOTER__LINKS__LINK_3_HREF: 'https://contentgarena-a.akamaihd.net/legal/tos/tos_en.html',
    LOL__FOOTER__LINKS__LINK_3_NAME: 'Terms of Service',
    LOL__FOOTER__LINKS__LINK_4_HREF: 'https://www.facebook.com/lolph',
    LOL__FOOTER__LINKS__LINK_4_NAME: 'Offficial Facebook Fan Page',
    LOL__FOOTER__LINKS__LINK_5_HREF: 'FILL in region link5 url',
    LOL__FOOTER__LINKS__LINK_5_NAME: 'link5',
    LOL__FOOTER__PLAY_FOR_FREE__LINK: 'https://lol.garena.ph/download',
    LOL__FOOTER__PLAY_FOR_FREE__TEXT: 'PLAY FOR FREE',
    LOL__ITEMS_PAGE__CATEGORY_ALL: 'All',
    LOL__ITEMS_PAGE__CATEGORY_ATTACK: 'Offensive',
    LOL__ITEMS_PAGE__CATEGORY_DEFENSE: 'Defensive',
    LOL__ITEMS_PAGE__CATEGORY_MAGIC: 'Magic',
    LOL__ITEMS_PAGE__CATEGORY_RUNSPEED: 'Movement Speed',
    LOL__ITEMS_PAGE__CATEGORY_TOOL: 'Tools',
    LOL__ITEMS_PAGE__FILTER__ARMOR: 'Armor',
    LOL__ITEMS_PAGE__FILTER__ARMORPENETRATION: 'Armor Penetration',
    LOL__ITEMS_PAGE__FILTER__ATTACKSPEED: 'Attack Speed',
    LOL__ITEMS_PAGE__FILTER__BOOTS: 'Boots',
    LOL__ITEMS_PAGE__FILTER__CONSUMABLE: 'Consumables',
    LOL__ITEMS_PAGE__FILTER__COOLDOWNREDUCTION: 'Cooldown Reduction',
    LOL__ITEMS_PAGE__FILTER__CRITICALSTRIKE: 'Critical Strike',
    LOL__ITEMS_PAGE__FILTER__DAMAGE: 'Attack Damage',
    LOL__ITEMS_PAGE__FILTER__GOLDPER: 'Gold Income',
    LOL__ITEMS_PAGE__FILTER__HEALTH: 'Health',
    LOL__ITEMS_PAGE__FILTER__HEALTHREGEN: 'Health Regeneration',
    LOL__ITEMS_PAGE__FILTER__LIFESTEAL: 'Life Steal',
    LOL__ITEMS_PAGE__FILTER__MAGICPENETRATION: 'Magic Penetration',
    LOL__ITEMS_PAGE__FILTER__MANA: 'Mana',
    LOL__ITEMS_PAGE__FILTER__MANAREGEN: 'Mana Regeneration',
    LOL__ITEMS_PAGE__FILTER__NONBOOTSMOVEMENT: 'Other',
    LOL__ITEMS_PAGE__FILTER__SPELLBLOCK: 'Magic Resistance',
    LOL__ITEMS_PAGE__FILTER__SPELLDAMAGE: 'Ability Power',
    LOL__ITEMS_PAGE__FILTER__VISION: 'Vision Control',
    LOL__ITEMS_PAGE__NO_MAPPING_ITEMS: 'No Matching Items Found',
    LOL__ITEMS_PAGE__POPUP__ADVANCE_ITEMS: 'Advanced Item',
    LOL__ITEMS_PAGE__POPUP__FORMULA: 'Build Paths',
    LOL__ITEMS_PAGE__POPUP__ITEMS: 'Items',
    LOL__ITEMS_PAGE__SEARCH_ITEMS: 'Item Search',
    LOL__MAIN_PAGE__SYSTEM_MESSAGE: 'System Information',
    LOL__NEWS_PAGE__END: 'No remaining information',
    LOL__NEWS_PAGE__NO_MAPPING_NEWS: 'No related news',
    LOL__NEWS_PAGE__SEARCH_PLACEHOLDER: 'Search',
    LOL__NOT_FOUND__CONTENT: 'Page not found. Click me to return to the homepage',
    LOL__NOT_FOUND__TITLE: '404 not found',
    LOL__REMIND_TEXT__ONLY_TW_REGION: '※若消費者為限制行為能力人或無行為能力人，應於消費者之法定代理人閱讀、瞭解並同意<a href="https://terms.support.garena.com/tw" target="_blank" rel="noreferrer noopener" style="color: white">本契約</a>之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。<br />※如為未滿20歲之未成年使用者，需經由家長同意方可購買與使用商城服務。',
    LOL__SERVER_PAGE__CURRENT_EXCLUDE: 'Recently Resolved',
    LOL__SERVER_PAGE__CURRENT_STATUS: 'Current Status',
    LOL__SERVER_PAGE__MALFUNCTION_MESSAGE: 'Malfunction Information',
    LOL__SERVER_PAGE__NORMAL_MESSAGE: 'Normal Information',
    LOL__SERVER_PAGE__SERVER_STATUS: 'Server Status',
    LOL__SERVER_PAGE__WARNING_MESSAGE: 'Warning Message',
    LOL__TUTORIAL__CHAMPION__DESC: 'Champions get stronger by earning experience to level up and gold to buy more powerful items as the game progresses. Staying on top of these two factors is crucial to overpowering the enemy team and destroying their base.',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE: 'EARN EXPERIENCE',
    LOL__TUTORIAL__CHAMPION__EARN_EXPERIENCE_DESC: 'When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defensive structures.',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY: 'EARN GOLD',
    LOL__TUTORIAL__CHAMPION__EARN_MONEY_DESC: 'Gold is the in-game currency to buy items for your champion. Earn gold by killing enemy units and champions, assisting in a kill, destroying defensive structures, and equipping gold income items.',
    LOL__TUTORIAL__CHAMPION__SHOP: 'SHOP',
    LOL__TUTORIAL__CHAMPION__SHOP_DESC: 'The Shop is where you can buy and sell items with gold you’ve earned. It can only be accessed while you are at the Fountain.',
    LOL__TUTORIAL__CHAMPION__TOPIC: 'POWER UP YOUR CHAMPION',
    LOL__TUTORIAL__GET_START: "LET'S GO",
    LOL__TUTORIAL__LEARN_BASIC: 'LEARN THE BASICS',
    LOL__TUTORIAL__MAP_CONTENT_1__DESC: 'The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_1: 'Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_DESC_2: 'Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_1: 'YOUR NEXUS',
    LOL__TUTORIAL__MAP_CONTENT_1__SUB_CONTENT_TOPIC_2: 'ENEMY NEXUS',
    LOL__TUTORIAL__MAP_CONTENT_1__TOPIC: 'DESTROY THE BASE',
    LOL__TUTORIAL__MAP_CONTENT_2__DESC: 'Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defensive structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_1: 'Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_DESC_2: 'Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_1: 'TURRETS',
    LOL__TUTORIAL__MAP_CONTENT_2__SUB_CONTENT_TOPIC_2: 'INHIBITORS',
    LOL__TUTORIAL__MAP_CONTENT_2__TOPIC: 'CLEAR THE PATH',
    LOL__TUTORIAL__MAP_CONTENT_3__DESC: 'In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_1: 'Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_DESC_2: 'Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are four Elemental Drakes and one Elder Dragon.',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_1: 'BARON NASHOR',
    LOL__TUTORIAL__MAP_CONTENT_3__SUB_CONTENT_TOPIC_2: 'DRAKES',
    LOL__TUTORIAL__MAP_CONTENT_3__TOPIC: 'INTO THE JUNGLE',
    LOL__TUTORIAL__MAP_CONTENT_4__DESC: 'There are five positions that make up the recommended team comp for the game. Each lane lends itself to certain kinds of champions and roles—try them all or lock in to the lane that calls you.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_1: 'Champions in top lane are the tough solo fighters of the team. It’s their job to protect their lane and focus on the enemy team’s most powerful members.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_2: 'Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment opponents let their guard down.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_3: 'Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they’re always looking for an opportunity to outplay their opponent.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_4: 'Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_DESC_5: 'Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_1: 'TOP LANE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_2: 'JUNGLE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_3: 'MID LANE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_4: 'BOT LANE',
    LOL__TUTORIAL__MAP_CONTENT_4__SUB_CONTENT_TOPIC_5: 'SUPPORT',
    LOL__TUTORIAL__MAP_CONTENT_4__TOPIC: 'CHOOSE YOUR LANE',
    LOL__TUTORIAL__SKILL__EQUIPMENT: 'ITEMS',
    LOL__TUTORIAL__SKILL__SKILL: 'ABILITIES',
    LOL__TUTORIAL__SKILL__SKILL_DESC: 'Most champions have a unique skill set made up of five skills: passive, three basic skills and ultimate. Skills are assigned to Q, W, E and R buttons.',
    LOL__TUTORIAL__SKILL__SUMMONER_SKILL: 'SUMMONER SPELLS',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL: 'UNLOCK YOUR ABILITIES',
    LOL__TUTORIAL__SKILL__UNLOCK_SKILL_DESC: 'Champions have five core abilities, two special spells, and up to seven items at a time. Figuring out the optimal ability order, summoner spells, and item build for your champion will help you succeed as a team.',
    LOL__TUTORIAL__WELCOME: 'WELCOME TO THE RIFT',
    LOL__TUTORIAL__WELCOME_DESC: 'There’s a lot to learn about League, so we’ll start with the essentials. Explore the guide below to get the rundown on the most popular game mode.',
    LOL__TUTORIAL__WHAT_IS_LOL: 'WHAT IS LEAGUE OF LEGENDS?',
    LOL__TUTORIAL__WHAT_IS_LOL_DESC: 'League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.'
  }
});
// CONCATENATED MODULE: ./i18n/index.js
// import axios from 'axios';

const langMap = JSON.parse("{\"tw\":2}");
const loadedRegions = {}; // const regionPostfix =
//   process.env.ROSETTA_REGION !== 'sg' ? `-${process.env.ROSETTA_REGION}` : '';
// async

const fetchMessage = region => {
  // async asyncData({ app, req }) {
  //   const referrer = process.client ? window.document.referrer :  req.headers.referer
  //   app.$axios.setHeader('Referer', referrer)
  // }
  // 1. nuxt server axios can't set request header.
  // 2. can't get server process.env parameter
  // const isDev = process.env.NODE_ENV === 'development';
  // const rosettaUrl = isDev
  //   ? `https://rosetta${regionPostfix}.garenanow.com/transify/${
  //       process.env.TRANSIFY_ID
  //     }?lang=${langMap[process.env.ROSETTA_REGION]}`
  //   : `/api/index/rosetta?resource_id=${process.env.TRANSIFY_ID}&lang=${
  //       langMap[process.env.ROSETTA_REGION]
  //     }`; // 會抓到 /api/index 的資料
  // try {
  //   const res = await axios.get(
  //     rosettaUrl,
  //     isDev
  //       ? {
  //           headers: { referer: process.env.REFERER },
  //         }
  //       : {},
  //   );
  //   if (res.status === 200) {
  //     // console.log(res.data.LOL__FOOTER__LINKS__LINK_1_HREF);
  //     return res.data;
  //   }
  //   throw new Error(`[nuxt-i18n] Fetch i18n failed with status ${res.status}`);
  // } catch (e) {
  //   // eslint-disable-next-line no-console
  //   console.warn('[nuxt-i18n] Referring to local translation');
  //   return message[process.env.ROSETTA_REGION];
  // }
  return message["tw"];
};

async function loadLocale(i18n, region) {
  if (!Object.keys(langMap).includes(region)) {
    // eslint-disable-next-line no-console
    return console.warn(`[nuxt-i18n] Undefined i18n region: ${region}`);
  }

  if (region in loadedRegions) {
    return i18n.setLocale(region);
  }

  const message = await fetchMessage(region);
  i18n.setLocaleMessage(region, message);
  loadedRegions[region] = true;
  return i18n.setLocale(region);
}
// CONCATENATED MODULE: ./plugins/i18n.js

/* harmony default export */ var plugins_i18n = (async ({
  app
}) => {
  const {
    i18n
  } = app;
  await loadLocale(i18n, "tw");
});
// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(24);
var external_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(external_vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(57);

// CONCATENATED MODULE: ./plugins/swiper.js



external_vue_default.a.use(external_vue_awesome_swiper_default.a);
// EXTERNAL MODULE: ./.nuxt/tw/empty.js
var tw_empty = __webpack_require__(16);

// CONCATENATED MODULE: ./.nuxt/tw/index.js











/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./gtm.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../../plugins/axios (mode: 'all')

 // Source: ../../plugins/i18n (mode: 'all')

 // Source: ../../plugins/swiper (mode: 'all')

 // Source: ../../plugins/polyfills (mode: 'client')

 // Source: ../../plugins/particles (mode: 'client')

 // Source: ../../plugins/layout (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  const registerModule = store.registerModule;

  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({
    preserveState: false
  }, options)); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.


  const app = {
    head: {
      "htmlAttrs": {
        "lang": "tw",
        "data-region": "tw"
      },
      "title": "League of Legends - Demo",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=containc"
      }, {
        "hid": "description",
        "name": "description",
        "content": "League of Legends - Demo"
      }, {
        "property": "og:title",
        "content": "League of Legends - Demo"
      }, {
        "property": "og:description",
        "content": "League of Legends - Demo"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "https:\u002F\u002Fcdngarenanow-a.akamaihd.net\u002Fgames\u002Flol\u002Ftw\u002Fweb\u002Fmedia\u002Fupload\u002Ficons\u002Ffavicon.ico?version=20200212"
      }],
      "style": [],
      "script": [{
        "hid": "gtm-script",
        "innerHTML": "if(!window._gtm_init){window._gtm_init=1;(function (w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"
      }],
      "noscript": [{
        "hid": "gtm-noscript",
        "pbody": true,
        "innerHTML": ""
      }],
      "__dangerouslyDisableSanitizersByTagID": {
        "gtm-script": ["innerHTML"],
        "gtm-noscript": ["innerHTML"]
      }
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/tw/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/tw/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof gtm === 'function') {
    await gtm(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof tw_axios === 'function') {
    await tw_axios(app.context, inject);
  }

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }

  if (typeof plugins_i18n === 'function') {
    await plugins_i18n(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/swiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/swiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.3.4/src/history/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 1
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/tw/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/tw/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof tw_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return tw_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof tw_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return tw_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Topbar.vue?vue&type=template&id=e8088b60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{attrs:{"id":"topbar"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Topbar.vue?vue&type=template&id=e8088b60&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Topbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Topbarvue_type_script_lang_js_ = ({
  name: 'Topbar',

  data() {
    return {
      REGION: "tw"
    };
  },

  mounted() {// if (window && this.REGION === 'tw') window.sitebar.create();
  }

});
// CONCATENATED MODULE: ./components/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Topbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Topbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6cab920c"
  
)

/* harmony default export */ var Topbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=1c267e16&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.index && _vm.mainItems)?_c('div',{ref:"header",attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-1c267e16>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-1c267e16>","</div>",[_c('nuxt-link',{attrs:{"to":_vm.index.navLink}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pc-nav\" data-v-1c267e16>","</div>",[_vm._ssrNode("<ul class=\"nav\" data-v-1c267e16>","</ul>",_vm._l((_vm.mainItems),function(category,index){return _vm._ssrNode("<li"+(_vm._ssrStyle(null,{ width: 100 / _vm.mainItems.length + '%' }, null))+" data-v-1c267e16>","</li>",[(_vm.urlJudge(category.navLink))?_vm._ssrNode("<a"+(_vm._ssrAttr("href",category.navLink))+" target=\"_blank\" rel=\"noreferrer noopener\" data-v-1c267e16>","</a>",[_vm._ssrNode(_vm._ssrEscape("\n            "+_vm._s(category.navName)+"\n          "))],2):_c('nuxt-link',{class:{ active: _vm.selectedIndex === index },attrs:{"to":category.navLink ? category.navLink : ''}},[_vm._v("\n            "+_vm._s(category.navName)+"\n          ")])],1)}),0),_vm._ssrNode(" "),(_vm.isShowDropdown)?_vm._ssrNode("<ul class=\"pc-dropdown\" data-v-1c267e16>","</ul>",[_vm._ssrNode("<div class=\"container\" data-v-1c267e16>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-1c267e16></div> "),_vm._ssrNode("<div class=\"right\" data-v-1c267e16>","</div>",_vm._l((_vm.mainItems),function(category,index){return _vm._ssrNode("<li"+(_vm._ssrStyle(null,{ width: 100 / _vm.mainItems.length + '%' }, null))+" data-v-1c267e16>","</li>",_vm._l((category.dropdownLists),function(all){return _vm._ssrNode("<div data-v-1c267e16>","</div>",[(_vm.urlJudge(all.listLink))?_vm._ssrNode("<a"+(_vm._ssrAttr("href",all.listLink))+" target=\"_blank\" rel=\"noreferrer noopener\" data-v-1c267e16>","</a>",[_vm._ssrNode(_vm._ssrEscape("\n                  "+_vm._s(all.listName)+"\n                "))],2):_c('nuxt-link',{attrs:{"to":all.listLink}},[_vm._v("\n                  "+_vm._s(all.listName)+"\n                ")])],1)}),0)}),0)],2)]):_vm._e()],2),_vm._ssrNode(" <div id=\"navBtn\""+(_vm._ssrClass(null,{ active: _vm.isShowNavContent }))+" data-v-1c267e16><span class=\"line\" data-v-1c267e16></span> <span class=\"line\" data-v-1c267e16></span> <span class=\"line\" data-v-1c267e16></span></div> "),_vm._ssrNode("<div id=\"m-nav\""+(_vm._ssrClass(null,{ active: _vm.isShowNavContent }))+" data-v-1c267e16>","</div>",[_vm._ssrNode("<div class=\"m-header\" data-v-1c267e16>","</div>",[_vm._ssrNode("<div class=\"m-sidebar-logo\" data-v-1c267e16>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"m-content\" data-v-1c267e16>","</div>",_vm._l((_vm.mainItems),function(category,index){return _vm._ssrNode("<div"+(_vm._ssrClass(null,['group', { isDownload: category.navLink === '/download' }]))+" data-v-1c267e16>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-1c267e16>"+_vm._ssrEscape(_vm._s(category.navName))+"</div> "),(category.dropdownLists)?_vm._ssrNode("<ul"+(_vm._ssrClass(null,{ active: _vm.selectedIndex === index }))+" data-v-1c267e16>","</ul>",_vm._l((category.dropdownLists),function(dropdownList){return _vm._ssrNode("<li data-v-1c267e16>","</li>",[(_vm.urlJudge(dropdownList.listLink))?_vm._ssrNode("<a"+(_vm._ssrAttr("href",dropdownList.listLink))+" target=\"_blank\" rel=\"noreferrer noopener\" data-v-1c267e16>","</a>",[_vm._ssrNode(_vm._ssrEscape("\n                "+_vm._s(dropdownList.listName)+"\n              "))],2):_c('nuxt-link',{attrs:{"to":dropdownList.listLink}},[_vm._v(_vm._s(dropdownList.listName))])],1)}),0):_vm._e()],2)}),0)],2)],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=1c267e16&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'Header',

  data() {
    return {
      isShowDropdown: false,
      selectedIndex: -1,
      isShowNavContent: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])('Nav', ['index', 'mainItems']),

    urlJudge() {
      return url => {
        const isExternalLink = /^https?:\/\//i;
        return isExternalLink.test(url);
      };
    }

  },
  watch: {
    '$route.path'(newRoute) {
      if (newRoute !== '/') this.updateBgImgAndFgImg({
        route: newRoute
      });
    }

  },
  methods: { ...Object(external_vuex_["mapActions"])('Nav', ['getNav', 'updateBgImgAndFgImg']),

    closePcNav({
      hasLink
    }) {
      if (!hasLink) return;
      this.isShowDropdown = false;
    },

    toggleMNav() {
      this.isShowNavContent = !this.isShowNavContent;
    },

    closeMNav() {
      this.isShowNavContent = false;
      window.scrollTo(0, 0);
    },

    toggleMenuCollapse(index, category) {
      if (!category.dropdownLists.length) window.open(category.navLink, '_blank');

      if (this.selectedIndex === index) {
        this.selectedIndex = -1;
        return;
      }

      this.selectedIndex = index;
    },

    handleDropdown(index) {
      if (!this.mainItems[index].dropdownLists.length) this.isShowDropdown = false;else this.isShowDropdown = true;
      this.selectedIndex = index;
    },

    leaveNavItem() {
      this.selectedIndex = -1;
    },

    leaveDropdown() {
      this.leaveNavItem();
      this.isShowDropdown = false;
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c267e16",
  "ee07b30a"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=af4fec6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"footer"}},[_vm._ssrNode("<div class=\"container\" data-v-af4fec6c>"+((_vm.isTwRegion)?("<div class=\"remind-text\" data-v-af4fec6c><p data-v-af4fec6c>"+(_vm._s(_vm.$t('LOL__REMIND_TEXT__ONLY_TW_REGION')))+"</p></div>"):"<!---->")+" <div class=\"bottom\" data-v-af4fec6c><div class=\"cnt\" data-v-af4fec6c><div class=\"copyrights\" data-v-af4fec6c>"+(_vm._s(_vm.$t('LOL__FOOTER__COPYRIGHT')))+"</div> "+((_vm.isTwRegion)?("<div data-v-af4fec6c><div class=\"links\" data-v-af4fec6c>"+(_vm._ssrList((_vm.mappingLinks),function(link,index){return ("<a"+(_vm._ssrAttr("href",_vm.$t(link.href)))+" target=\"_blank\" rel=\"noreferrer noopener\" class=\"link\" data-v-af4fec6c><div class=\"link-txt\" data-v-af4fec6c>"+_vm._ssrEscape(_vm._s(_vm.$t(link.text)))+"</div></a>")}))+"</div></div>"):("<div class=\"social-links\" data-v-af4fec6c>"+((_vm.isThRegion || _vm.isSimpRegion)?("<a"+(_vm._ssrAttr("href",_vm.$t('LOL__FOOTER__PLAY_FOR_FREE__LINK')))+" class=\"playForFree\" data-v-af4fec6c>"+_vm._ssrEscape(_vm._s(_vm.$t('LOL__FOOTER__PLAY_FOR_FREE__TEXT')))+"</a>"):"<!---->")+" <div class=\"links\" data-v-af4fec6c>"+(_vm._ssrList((_vm.mappingLinks),function(link,index){return ("<a"+(_vm._ssrAttr("href",("" + (_vm.$t(link.href)))))+" target=\"_blank\" rel=\"noreferrer noopener\" class=\"link\" data-v-af4fec6c><div class=\"link-txt\" data-v-af4fec6c>"+_vm._ssrEscape(_vm._s(_vm.$t(link.text)))+"</div></a>")}))+"</div></div>"))+" "+((_vm.isVnRegion)?("<div class=\"vn-playForFree\" data-v-af4fec6c><a"+(_vm._ssrAttr("href",_vm.$t('LOL__FOOTER__PLAY_FOR_FREE__LINK')))+" class=\"playForFree\" data-v-af4fec6c>"+_vm._ssrEscape(_vm._s(_vm.$t('LOL__FOOTER__PLAY_FOR_FREE__TEXT')))+"</a> <span class=\"age-limit\" data-v-af4fec6c></span></div>"):"<!---->")+"</div> "+((_vm.isTwRegion)?("<div class=\"lv\" data-v-af4fec6c><div class=\"lv-icon--12\" data-v-af4fec6c></div> <div class=\"lv-text\" data-v-af4fec6c><p data-v-af4fec6c>\n            本遊戲為DEMO，遊戲情節涉及暴力、菸酒畫面。<br data-v-af4fec6c>\n            遊戲內另提供購買虛擬遊戲幣、物品等付費服務。<br data-v-af4fec6c>\n            請注意遊戲時間，避免沈迷。\n          </p> <div class=\"service-region\" data-v-af4fec6c>本遊戲服務區域為DEMO。</div></div></div>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=af4fec6c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: 'Footer',

  data() {
    return {
      REGION: "tw",
      links: [{
        href: 'LOL__FOOTER__LINKS__LINK_1_HREF',
        text: 'LOL__FOOTER__LINKS__LINK_1_NAME'
      }, {
        href: 'LOL__FOOTER__LINKS__LINK_2_HREF',
        text: 'LOL__FOOTER__LINKS__LINK_2_NAME'
      }, {
        href: 'LOL__FOOTER__LINKS__LINK_3_HREF',
        text: 'LOL__FOOTER__LINKS__LINK_3_NAME'
      }, {
        href: 'LOL__FOOTER__LINKS__LINK_4_HREF',
        text: 'LOL__FOOTER__LINKS__LINK_4_NAME'
      }, {
        href: 'LOL__FOOTER__LINKS__LINK_5_HREF',
        text: 'LOL__FOOTER__LINKS__LINK_5_NAME'
      }]
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
      if (this.isTwRegion || this.isThRegion || this.isVnRegion) return this.links.slice(0, 4);
      return []; // simp region links
    }

  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "af4fec6c",
  "67c9c289"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map