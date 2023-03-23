exports.ids = [7];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("10bd0470", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5380e97d", content, true, context)
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchInput.vue?vue&type=template&id=7053fadc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"searchInputBox"},[_vm._ssrNode("<svg viewBox=\"0 0 437 50\" data-v-7053fadc><path d=\"M436,1v28.59L416.55,49L98,49H1V20.41L20.45,1L84,1H436 M437,0H84v0H20.03L0,20v30h98v0h318.97L437,30V0L437,0z\" data-v-7053fadc></path></svg> <svg viewBox=\"0 0 680 80\" data-v-7053fadc><path d=\"M679,1v58.59L659.55,79L99,79H1V20.41L20.45,1L85,1H679 M680,0H85v0H20.03L0,20v60h99v0h560.97L680,60V0L680,0z\" data-v-7053fadc></path></svg> <svg viewBox=\"0 0 40 40\" data-v-7053fadc><path d=\"M36.91,33.46l-7.45-7.45c1.81-2.52,2.81-5.53,2.81-8.69c0-3.99-1.55-7.74-4.38-10.56c-2.82-2.82-6.57-4.38-10.57-4.38c-3.99,0-7.74,1.55-10.57,4.38c-2.82,2.82-4.38,6.57-4.38,10.56s1.55,7.74,4.38,10.57c2.82,2.82,6.57,4.38,10.57,4.38c3.17,0,6.17-0.99,8.69-2.81l7.45,7.45c0.48,0.48,1.1,0.71,1.72,0.71c0.62,0,1.25-0.24,1.72-0.71C37.86,35.96,37.86,34.41,36.91,33.46z M10.2,24.44c-1.9-1.9-2.95-4.43-2.95-7.12S8.3,12.1,10.2,10.2c1.9-1.9,4.43-2.95,7.12-2.95s5.22,1.05,7.12,2.95c1.9,1.9,2.95,4.43,2.95,7.12s-1.05,5.22-2.95,7.12c-1.9,1.9-4.43,2.95-7.12,2.95S12.1,26.34,10.2,24.44z\" data-v-7053fadc></path></svg> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("value",_vm.searchText))+" data-v-7053fadc>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchInput.vue?vue&type=template&id=7053fadc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchInput.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SearchInputvue_type_script_lang_js_ = ({
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    searchText: {
      type: String,
      default: ''
    },
    searchNews: {
      type: Function,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/SearchInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchInputvue_type_script_lang_js_ = (SearchInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/SearchInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7053fadc",
  "6f828284"
  
)

/* harmony default export */ var SearchInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_11da7b11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_11da7b11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_11da7b11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_11da7b11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_11da7b11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_11da7b11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-11da7b11{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-11da7b11{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-11da7b11{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-11da7b11{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#newsContent .top[data-v-11da7b11]{width:4.4rem;height:1.5rem;margin:auto;padding-top:.5rem}@media screen and (max-width:750px){#newsContent .top[data-v-11da7b11]{width:6.8rem;height:auto;padding:.4rem 0}}#newsContent .center[data-v-11da7b11]{margin:.3rem 0;display:inline-block}@media screen and (max-width:1000px){#newsContent .center[data-v-11da7b11]{margin:.3rem 1.1rem}}@media screen and (max-width:750px){#newsContent .center[data-v-11da7b11]{width:7.5rem;margin:0;padding:.3rem .36rem}}#newsContent .center .loadingSection[data-v-11da7b11]{position:relative;height:1.5rem}@media screen and (max-width:750px){#newsContent .center .loadingSection[data-v-11da7b11]{height:2rem}}#newsContent .center .noMoreNews[data-v-11da7b11]{padding:.45rem 0;font-size:.2rem}@media screen and (max-width:750px){#newsContent .center .noMoreNews[data-v-11da7b11]{font-size:.25rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDescBar_vue_vue_type_style_index_0_id_e6a94d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDescBar_vue_vue_type_style_index_0_id_e6a94d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDescBar_vue_vue_type_style_index_0_id_e6a94d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDescBar_vue_vue_type_style_index_0_id_e6a94d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDescBar_vue_vue_type_style_index_0_id_e6a94d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDescBar_vue_vue_type_style_index_0_id_e6a94d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-e6a94d46{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-e6a94d46{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-e6a94d46{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-e6a94d46{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@media screen and (max-width:750px){#newsDescBar[data-v-e6a94d46]{padding:0}}#newsDescBar .box[data-v-e6a94d46]{height:.7rem;margin:0 0 .3rem;padding:.16rem .2rem;color:#fff;background:#061c25;position:relative;text-align:left}@media screen and (max-width:1000px){#newsDescBar .box[data-v-e6a94d46]{margin:0 .37rem .3rem;padding:.16rem .1rem .16rem .2rem}}@media screen and (max-width:750px){#newsDescBar .box[data-v-e6a94d46]{padding:.1rem .3rem;height:2.8rem;margin-bottom:.44rem}}#newsDescBar .box[data-v-e6a94d46]:before{content:\"\";position:absolute;top:0;left:0;width:0;height:0;border-right:.2rem solid transparent;border-top:.2rem solid #fff}#newsDescBar .box[data-v-e6a94d46]:after{content:\"\";position:absolute;right:0;bottom:0;border-left:.2rem solid transparent;border-bottom:.2rem solid #fff}#newsDescBar .box .left[data-v-e6a94d46]{display:inline-block;font-size:0;margin-left:.28rem}@media screen and (max-width:1000px){#newsDescBar .box .left[data-v-e6a94d46]{margin-left:.2rem}}@media screen and (max-width:750px){#newsDescBar .box .left[data-v-e6a94d46]{width:100%;padding-bottom:.2rem;margin:auto;text-align:center;border-bottom:1px solid #fff}}#newsDescBar .box .left p[data-v-e6a94d46]{font-size:.36rem;font-weight:600;padding-right:.2rem;border-right:1px solid #fff}@media screen and (max-width:750px){#newsDescBar .box .left p[data-v-e6a94d46]{border:none}}#newsDescBar .box .middle[data-v-e6a94d46]{height:.4rem;font-size:0;padding:.11rem 0 .11rem .1rem;display:inline-block;vertical-align:top;text-align:left}@media screen and (max-width:750px){#newsDescBar .box .middle[data-v-e6a94d46]{width:100%;height:auto;padding:.2rem 0;border:none}}#newsDescBar .box .middle p[data-v-e6a94d46]{font-size:.16rem;display:inline-block;vertical-align:middle}@media screen and (max-width:750px){#newsDescBar .box .middle p[data-v-e6a94d46]{font-size:.3rem}}#newsDescBar .box .right[data-v-e6a94d46]{width:3.7rem;height:.4rem;margin-right:.13rem;font-size:0;float:right;text-align:left;vertical-align:middle}@media screen and (max-width:1000px){#newsDescBar .box .right[data-v-e6a94d46]{margin-right:.2rem}}@media screen and (max-width:750px){#newsDescBar .box .right[data-v-e6a94d46]{width:6.2rem;margin:.3rem 0;text-align:left}}#newsDescBar .box .right a[data-v-e6a94d46]{width:1.72rem;height:100%;font-size:.17rem;padding:.1rem 0;color:#000;display:inline-block;background:#0bc6e4;text-align:center;position:relative}#newsDescBar .box .right a[data-v-e6a94d46]:first-child{margin-right:.16rem}@media screen and (max-width:750px){#newsDescBar .box .right a[data-v-e6a94d46]:first-child{margin-right:.4rem}}@media screen and (max-width:750px){#newsDescBar .box .right a[data-v-e6a94d46]{width:2.8rem;height:.65rem;padding-top:.2rem;font-size:.28rem;text-align:center}}#newsDescBar .box .right a svg[data-v-e6a94d46]:first-child{width:1.8rem;height:.5rem;position:absolute;top:-.05rem;left:-.04rem}#newsDescBar .box .right a svg:first-child path[data-v-e6a94d46]{fill:none;stroke:#edebf0;stroke-width:1px;stroke-linecap:round;stroke-dasharray:460;-webkit-animation:svgAnimation460-data-v-e6a94d46 2.5s ease 1 backwards;animation:svgAnimation460-data-v-e6a94d46 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation460-data-v-e6a94d46{0%{stroke-dashoffset:460}to{stroke-dashoffset:0}}@keyframes svgAnimation460-data-v-e6a94d46{0%{stroke-dashoffset:460}to{stroke-dashoffset:0}}@media screen and (max-width:750px){#newsDescBar .box .right a svg[data-v-e6a94d46]:first-child{display:none}}#newsDescBar .box .right a svg[data-v-e6a94d46]:nth-child(2){display:none;width:2.94rem;height:.82rem;position:absolute;top:-.08rem;left:-.06rem}#newsDescBar .box .right a svg:nth-child(2) path[data-v-e6a94d46]{fill:none;stroke:#edebf0;stroke-width:1px;stroke-linecap:round;stroke-dasharray:752;-webkit-animation:svgAnimation752-data-v-e6a94d46 2.5s ease 1 backwards;animation:svgAnimation752-data-v-e6a94d46 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation752-data-v-e6a94d46{0%{stroke-dashoffset:752}to{stroke-dashoffset:0}}@keyframes svgAnimation752-data-v-e6a94d46{0%{stroke-dashoffset:752}to{stroke-dashoffset:0}}@media screen and (max-width:750px){#newsDescBar .box .right a svg[data-v-e6a94d46]:nth-child(2){display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsDescBar.vue?vue&type=template&id=e6a94d46&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"newsDescBar"}},[_vm._ssrNode("<div class=\"box\" data-v-e6a94d46>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-e6a94d46>"+((_vm.category)?("<p data-v-e6a94d46>"+_vm._ssrEscape(_vm._s(_vm.category.name))+"</p>"):"<!---->")+"</div> <div class=\"middle\" data-v-e6a94d46>"+((_vm.category)?("<p data-v-e6a94d46>"+_vm._ssrEscape(_vm._s(_vm.category.desc))+"<br data-v-e6a94d46></p>"):"<!---->")+"</div> "),(_vm.subCategories)?_vm._ssrNode("<div class=\"right\" data-v-e6a94d46>","</div>",_vm._l((_vm.subCategories),function(subCategory,index){return _c('nuxt-link',{key:index,attrs:{"to":subCategory.url}},[_vm._v("\n        "+_vm._s(subCategory.name)+"\n        "),_c('svg',{attrs:{"viewBox":"0 0 180 50"}},[_c('path',{attrs:{"d":"M179,1v28.59L159.55,49L98,49H1V20.41L20.45,1L84,1H179"}})]),_vm._v(" "),_c('svg',{attrs:{"viewBox":"0 0 294 82"}},[_c('path',{attrs:{"d":"M293,1v60.59L273.59,81H1V20.41L20.41,1H293"}})])])}),1):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NewsDescBar.vue?vue&type=template&id=e6a94d46&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsDescBar.vue?vue&type=script&lang=js&
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

/* harmony default export */ var NewsDescBarvue_type_script_lang_js_ = ({
  name: 'NewsDescBar',
  computed: { ...Object(external_vuex_["mapState"])('News', ['category', 'subCategories'])
  }
});
// CONCATENATED MODULE: ./components/NewsDescBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsDescBarvue_type_script_lang_js_ = (NewsDescBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/NewsDescBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsDescBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6a94d46",
  "ecdd9b1e"
  
)

/* harmony default export */ var NewsDescBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/_category.vue?vue&type=template&id=11da7b11&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"NewsCategoryPage"}},[_c('Banner',{attrs:{"bread-data":_vm.breadData}}),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"newsContent\" class=\"container\" data-v-11da7b11>","</div>",[_vm._ssrNode("<div class=\"top\" data-v-11da7b11>","</div>",[_c('SearchInput',{attrs:{"placeholder":_vm.$t('LOL__NEWS_PAGE__SEARCH_PLACEHOLDER'),"search-text":_vm.searchText,"search-news":_vm.searchNews},model:{value:(_vm.searchText),callback:function ($$v) {_vm.searchText=$$v},expression:"searchText"}})],1),_vm._ssrNode(" "),_c('NewsDescBar'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"center\" data-v-11da7b11>","</div>",[(_vm.firstTimeLoading)?_c('Loading'):[(_vm.news.length)?_c('News',{attrs:{"news":_vm.news}}):_c('div',[_vm._v(_vm._s(_vm.$t('LOL__NEWS_PAGE__NO_MAPPING_NEWS')))])],_vm._ssrNode(" "),_vm._ssrNode("<div class=\"loadingSection\""+(_vm._ssrStyle(null,null, { display: (!_vm.firstTimeLoading) ? '' : 'none' }))+" data-v-11da7b11>","</div>",[_c('Loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.refetchLoading),expression:"refetchLoading"}],staticClass:"loading"}),_vm._ssrNode(" <div class=\"noMoreNews\""+(_vm._ssrStyle(null,null, { display: (!_vm.next) ? '' : 'none' }))+" data-v-11da7b11>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('LOL__NEWS_PAGE__END'))+"\n        ")+"</div>")],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news/_category.vue?vue&type=template&id=11da7b11&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: external "debounce"
var external_debounce_ = __webpack_require__(63);

// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/_category.vue?vue&type=script&lang=js&
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



/* harmony default export */ var _categoryvue_type_script_lang_js_ = ({
  name: 'NewsCategoryPage',

  async fetch({
    store,
    params
  }) {
    await Promise.all([store.dispatch('News/resetNews'), store.dispatch('News/getNews', {
      category: params.category,
      keyword: '',
      perPage: 6,
      page: 1
    })]);
  },

  validate({
    params
  }) {
    return /\w+$/g.test(params.category);
  },

  data() {
    return {
      searchText: '',
      breadData: [{
        name: 'LOL__BREADCRUMB_PAGE_NAME__INDEX',
        url: '/'
      }, {
        name: 'LOL__BREADCRUMB_PAGE_NAME__NEWS',
        url: '/news'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])('News', ['firstTimeLoading', 'refetchLoading', 'footprint', 'news', 'page', 'next']),

    category() {
      return this.$route.params.category;
    }

  },

  mounted() {
    if (this.footprint) this.breadData.push(...this.footprint);
    if (!this.firstTimeLoading) window.addEventListener('scroll', this.scrollToFetchNews);
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollToFetchNews);
  },

  methods: { ...Object(external_vuex_["mapActions"])('News', ['resetNews', 'getNews', 'getMoreNews']),

    searchNews() {
      this.resetNews();
      this.getNews({
        category: this.category,
        keyword: this.searchText,
        perPage: 6,
        page: this.page
      });
    },

    scrollToFetchNews: Object(external_debounce_["debounce"])(function () {
      if (!this.next) {
        window.removeEventListener('scroll', this.scrollToFetchNews);
      } else {
        const target = document.getElementById('news');

        if (target) {
          const newsHeight = target.offsetHeight + target.offsetTop;

          if (utils["a" /* default */].getScrollTop() + utils["a" /* default */].getClientHeight() >= newsHeight) {
            this.getMoreNews({
              category: this.category,
              keyword: this.searchText,
              perPage: 6
            });
          }
        }
      }
    }, 300)
  }
});
// CONCATENATED MODULE: ./pages/news/_category.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_categoryvue_type_script_lang_js_ = (_categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/news/_category.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11da7b11",
  "70314027"
  
)

/* harmony default export */ var _category = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Banner: __webpack_require__(75).default,SearchInput: __webpack_require__(103).default,NewsDescBar: __webpack_require__(140).default,Loading: __webpack_require__(72).default,News: __webpack_require__(84).default})


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4990e98c", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a398361a", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("dff236b2", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_6d14d9a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_6d14d9a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_6d14d9a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_6d14d9a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_6d14d9a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_6d14d9a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-6d14d9a5{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-6d14d9a5{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-6d14d9a5{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-6d14d9a5{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#breadCrumb[data-v-6d14d9a5]{position:absolute;bottom:.15rem;width:100%;z-index:3}#breadCrumb ul[data-v-6d14d9a5]{margin:auto;text-align:left;padding:0 .1rem}@media screen and (max-width:1000px){#breadCrumb ul[data-v-6d14d9a5]{padding:0 .25rem}}#breadCrumb ul li[data-v-6d14d9a5]{margin-right:.1rem;display:inline-block}#breadCrumb ul li a[data-v-6d14d9a5]{font-size:.15rem;color:#9c9e9d;font-weight:600}#breadCrumb ul li a[data-v-6d14d9a5]:last-child{color:#fff}#breadCrumb ul li .interrupt[data-v-6d14d9a5]{font-size:.15rem;color:#9c9e9d}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_eda30ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_eda30ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_eda30ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_eda30ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_eda30ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_eda30ac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-eda30ac2{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-eda30ac2{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-eda30ac2{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-eda30ac2{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes lds-roller-data-v-eda30ac2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-roller-data-v-eda30ac2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.loading[data-v-eda30ac2]{width:100%;height:100%}.loading .lds-roller[data-v-eda30ac2]{display:inline-block;position:relative;width:80px;height:80px}.loading .lds-roller div[data-v-eda30ac2]{-webkit-animation:lds-roller-data-v-eda30ac2 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-roller-data-v-eda30ac2 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:40px 40px}.loading .lds-roller div[data-v-eda30ac2]:after{content:\"\";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#fff;margin:-4px 0 0 -4px;background:grey}.loading .lds-roller div[data-v-eda30ac2]:first-child{-webkit-animation-delay:-36ms;animation-delay:-36ms}.loading .lds-roller div[data-v-eda30ac2]:first-child:after{top:63px;left:63px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.loading .lds-roller div[data-v-eda30ac2]:nth-child(2):after{top:68px;left:56px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(3){-webkit-animation-delay:-.108s;animation-delay:-.108s}.loading .lds-roller div[data-v-eda30ac2]:nth-child(3):after{top:71px;left:48px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(4){-webkit-animation-delay:-.144s;animation-delay:-.144s}.loading .lds-roller div[data-v-eda30ac2]:nth-child(4):after{top:72px;left:40px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.loading .lds-roller div[data-v-eda30ac2]:nth-child(5):after{top:71px;left:32px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(6){-webkit-animation-delay:-.216s;animation-delay:-.216s}.loading .lds-roller div[data-v-eda30ac2]:nth-child(6):after{top:68px;left:24px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(7){-webkit-animation-delay:-.252s;animation-delay:-.252s}.loading .lds-roller div[data-v-eda30ac2]:nth-child(7):after{top:63px;left:17px}.loading .lds-roller div[data-v-eda30ac2]:nth-child(8){-webkit-animation-delay:-.288s;animation-delay:-.288s}.loading .lds-roller div[data-v-eda30ac2]:nth-child(8):after{top:56px;left:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadCrumb.vue?vue&type=template&id=6d14d9a5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"breadCrumb"}},[_vm._ssrNode("<div class=\"container\" data-v-6d14d9a5>","</div>",[_vm._ssrNode("<ul data-v-6d14d9a5>","</ul>",_vm._l((_vm.breadData),function(item,index){return _vm._ssrNode("<li data-v-6d14d9a5>","</li>",[_c('nuxt-link',{attrs:{"to":item.url}},[_vm._v(_vm._s(_vm.$t(item.name) ? _vm.$t(item.name) : _vm.name))]),_vm._ssrNode(" "+((index < _vm.breadData.length - 1)?("<span class=\"interrupt\" data-v-6d14d9a5>&gt;</span>"):"<!---->"))],2)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BreadCrumb.vue?vue&type=template&id=6d14d9a5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadCrumb.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BreadCrumbvue_type_script_lang_js_ = ({
  name: 'BreadCrumb',
  props: {
    breadData: {
      type: Array,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/BreadCrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BreadCrumbvue_type_script_lang_js_ = (BreadCrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/BreadCrumb.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BreadCrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d14d9a5",
  "23210dd1"
  
)

/* harmony default export */ var BreadCrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading.vue?vue&type=template&id=eda30ac2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading"},[_vm._ssrNode("<div class=\"lds-roller\" data-v-eda30ac2>"+(_vm._ssrList((8),function(n){return ("<div data-v-eda30ac2></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading.vue?vue&type=template&id=eda30ac2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'Loading'
});
// CONCATENATED MODULE: ./components/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Loading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "eda30ac2",
  "44c1f0be"
  
)

/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_2dc44e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_2dc44e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_2dc44e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_2dc44e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_2dc44e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_2dc44e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-2dc44e30{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-2dc44e30{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-2dc44e30{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-2dc44e30{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#blurBackground[data-v-2dc44e30]{width:100%;height:2.5rem;position:relative;background-size:100% 100%;box-sizing:border-box;z-index:1}@media screen and (max-width:750px){#blurBackground[data-v-2dc44e30]{display:none}}#blurBackground[data-v-2dc44e30]:after{content:\"\";width:100%;height:99%;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background:inherit;-webkit-filter:blur(5px);filter:blur(5px);z-index:2}#blurBackground .container[data-v-2dc44e30]{padding:0 .3rem}#blurBackground .fgImg[data-v-2dc44e30]{position:absolute;top:.45rem;right:0;bottom:0;left:0;margin:0 auto;text-align:center;width:12.2rem;height:1.3rem;z-index:5;background-repeat:no-repeat;background-position:50%}@media screen and (max-width:1000px){#blurBackground .fgImg[data-v-2dc44e30]{width:9.8rem}}#blurBackground .fgImg svg[data-v-2dc44e30]:first-child{position:absolute;top:-.1rem;left:.1rem;width:12rem;height:1.5rem}#blurBackground .fgImg svg:first-child path[data-v-2dc44e30]{fill:none;stroke:#8a8b86;stroke-width:1px;stroke-linecap:round;stroke-dasharray:2700;-webkit-animation:svgAnimation2700-data-v-2dc44e30 2.5s ease 1 backwards;animation:svgAnimation2700-data-v-2dc44e30 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation2700-data-v-2dc44e30{0%{stroke-dashoffset:2700}to{stroke-dashoffset:0}}@keyframes svgAnimation2700-data-v-2dc44e30{0%{stroke-dashoffset:2700}to{stroke-dashoffset:0}}@media screen and (max-width:1000px){#blurBackground .fgImg svg[data-v-2dc44e30]:first-child{display:none}}#blurBackground .fgImg svg[data-v-2dc44e30]:nth-child(2){display:none;position:absolute;top:-.1rem;left:.1rem;width:9.6rem;height:1.5rem}#blurBackground .fgImg svg:nth-child(2) path[data-v-2dc44e30]{fill:none;stroke:#8a8b86;stroke-width:1px;stroke-linecap:round;stroke-dasharray:2220;-webkit-animation:svgAnimation2220-data-v-2dc44e30 2.5s ease 1 backwards;animation:svgAnimation2220-data-v-2dc44e30 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation2220-data-v-2dc44e30{0%{stroke-dashoffset:2220}to{stroke-dashoffset:0}}@keyframes svgAnimation2220-data-v-2dc44e30{0%{stroke-dashoffset:2220}to{stroke-dashoffset:0}}@media screen and (max-width:1000px){#blurBackground .fgImg svg[data-v-2dc44e30]:nth-child(2){display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner.vue?vue&type=template&id=2dc44e30&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({
    backgroundImage: ("url('" + _vm.bgImg + "'), url(" + _vm.defaultBg + ")"),
  }),attrs:{"id":"blurBackground"}},[_vm._ssrNode("<div class=\"fgImg\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.fgImg + ")") }, null))+" data-v-2dc44e30><svg viewBox=\"0 0 1200 150\" data-v-2dc44e30><path d=\"M1179.57,1l19.42,19.39V149H0.99V1L1179.57,1\" data-v-2dc44e30></path></svg> <svg viewBox=\"0 0 960 150\" data-v-2dc44e30><path d=\"M939.57,1l19.42,19.39V149h-958V1L939.57,1\" data-v-2dc44e30></path></svg></div> "),_c('BreadCrumb',{attrs:{"bread-data":_vm.breadData}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner.vue?vue&type=template&id=2dc44e30&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  name: 'Banner',
  props: {
    breadData: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {
      defaultBg: `${"https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img"}/clear2.jpg`
    };
  },

  computed: { ...Object(external_vuex_["mapState"])('Nav', ['bgImg', 'fgImg'])
  }
});
// CONCATENATED MODULE: ./components/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2dc44e30",
  "54c148cc"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BreadCrumb: __webpack_require__(71).default})


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("219ca5f1", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("314de61a", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_3b5727dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_3b5727dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_3b5727dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_3b5727dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_3b5727dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_3b5727dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-3b5727dc{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-3b5727dc{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-3b5727dc{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-3b5727dc{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}#news[data-v-3b5727dc]{width:100%;overflow:hidden;padding-top:.1rem}@media screen and (max-width:750px){#news[data-v-3b5727dc]{padding-top:.15rem}}#news .newItem[data-v-3b5727dc]{width:3.4rem;margin-right:1rem;float:left;cursor:pointer;position:relative;overflow:unset}#news .newItem[data-v-3b5727dc]:nth-child(3n){margin-right:0}@media screen and (max-width:1000px){#news .newItem[data-v-3b5727dc]:nth-child(3n){margin-right:1rem}#news .newItem[data-v-3b5727dc]:nth-child(2n){margin-right:0}}@media screen and (max-width:750px){#news .newItem[data-v-3b5727dc]{width:6.8rem;height:auto;margin:auto;vertical-align:top}}#news .newItem svg[data-v-3b5727dc]:first-child{position:absolute;top:-.08rem;left:.1rem;width:3.2rem;height:2.4rem}#news .newItem svg:first-child path[data-v-3b5727dc]{fill:none;stroke:#c2c1c1;stroke-width:1px;stroke-linecap:round;stroke-dasharray:1120;-webkit-animation:svgAnimation1120-data-v-3b5727dc 2.5s ease 1 backwards;animation:svgAnimation1120-data-v-3b5727dc 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation1120-data-v-3b5727dc{0%{stroke-dashoffset:1120}to{stroke-dashoffset:0}}@keyframes svgAnimation1120-data-v-3b5727dc{0%{stroke-dashoffset:1120}to{stroke-dashoffset:0}}@media screen and (max-width:750px){#news .newItem svg[data-v-3b5727dc]:first-child{display:none}}#news .newItem svg:first-child:hover path[data-v-3b5727dc]{d:path(\"M299.57,1l19.42,0V239h-318V1H299.57\")}#news .newItem svg[data-v-3b5727dc]:nth-child(2){display:none;position:absolute;top:-.15rem;left:.15rem;width:6.46rem;height:4.81rem}#news .newItem svg:nth-child(2) path[data-v-3b5727dc]{fill:none;stroke:#c2c1c1;stroke-width:1px;stroke-linecap:round;stroke-dasharray:2254;-webkit-animation:svgAnimation2254-data-v-3b5727dc 2.5s ease 1 backwards;animation:svgAnimation2254-data-v-3b5727dc 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation2254-data-v-3b5727dc{0%{stroke-dashoffset:2254}to{stroke-dashoffset:0}}@keyframes svgAnimation2254-data-v-3b5727dc{0%{stroke-dashoffset:2254}to{stroke-dashoffset:0}}@media screen and (max-width:750px){#news .newItem svg[data-v-3b5727dc]:nth-child(2){display:block}}#news .newItem svg:nth-child(2):active path[data-v-3b5727dc]{d:path(\"M625.4,1L645,0V480H1V1H625.4\")}#news .newItem svg path[data-v-3b5727dc]{transition:all .3s ease-in-out}#news .newItem .imgBox img[data-v-3b5727dc]{height:2.24rem}@media screen and (max-width:750px){#news .newItem .imgBox img[data-v-3b5727dc]{width:6.8rem;height:4.5rem}}#news .newItem .info[data-v-3b5727dc]{margin:.18rem 0;padding:0 .08rem;font-size:.14rem;text-align:left;height:1.8rem}@media screen and (max-width:750px){#news .newItem .info[data-v-3b5727dc]{height:3.2rem;font-size:.3rem;padding:.06rem .16rem;margin-bottom:.6rem}}#news .newItem .info .category[data-v-3b5727dc]{color:#0ac6e4;font-weight:600}@media screen and (max-width:750px){#news .newItem .info .category[data-v-3b5727dc]{font-size:.3rem}}#news .newItem .info .title[data-v-3b5727dc]{font-size:.21rem;padding:.08rem 0 .1rem;color:#000;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-weight:900}@media screen and (max-width:750px){#news .newItem .info .title[data-v-3b5727dc]{padding:.18rem 0 .2rem;font-size:.38rem}}html[data-region=th] #news .newItem .info .title[data-v-3b5727dc]{font-family:\"Kanit\",Arial,Helvetica,sans-serif}html[data-region=vn] #news .newItem .info .title[data-v-3b5727dc]{overflow:visible;white-space:normal}#news .newItem .info .content[data-v-3b5727dc],#news .newItem .info .time[data-v-3b5727dc]{color:grey;overflow:hidden}@media screen and (max-width:750px){#news .newItem .info .content[data-v-3b5727dc],#news .newItem .info .time[data-v-3b5727dc]{margin:0}}#news .newItem .info .content[data-v-3b5727dc]{height:.6rem;margin-bottom:.1rem;line-height:1.4}@media screen and (max-width:750px){#news .newItem .info .content[data-v-3b5727dc]{height:1.2rem;margin-bottom:.25rem}}#news .newItem .info .time[data-v-3b5727dc]{margin-bottom:.42rem}@media screen and (max-width:1000px){#news .newItem .info .time[data-v-3b5727dc]{margin-bottom:.47rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/News.vue?vue&type=template&id=3b5727dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"news"}},_vm._l((_vm.news),function(item,index){return _vm._ssrNode("<div class=\"newItem\" data-v-3b5727dc>","</div>",[(!item.externalLink)?_c('nuxt-link',{attrs:{"to":("/news/articles/" + (item.id))}},[_c('svg',{attrs:{"viewBox":"0 0 320 240"}},[_c('path',{attrs:{"d":"M299.57,1l19.42,19.39V239h-318V1H299.57"}})]),_vm._v(" "),_c('svg',{attrs:{"viewBox":"0 0 646 481"}},[_c('path',{attrs:{"d":"M625.4,1L645,20.8V480H1V1H625.4"}})]),_vm._v(" "),_c('div',{staticClass:"imgBox"},[_c('img',{attrs:{"src":"/imgs/340x224-1.jpg"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('p',{staticClass:"category"},[_vm._v(_vm._s(item.subtitle))]),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',{staticClass:"content",domProps:{"innerHTML":_vm._s(item.description)}}),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v(_vm._s(_vm.transformTime(item.updatedAt)))])])]):_c('a',{attrs:{"href":item.externalLink,"target":"_blank","rel":"noreferrer noopener"}},[_c('svg',{attrs:{"viewBox":"0 0 320 240"}},[_c('path',{attrs:{"d":"M299.57,1l19.42,19.39V239h-318V1H299.57"}})]),_vm._v(" "),_c('svg',{attrs:{"viewBox":"0 0 646 481"}},[_c('path',{attrs:{"d":"M625.4,1L645,20.8V480H1V1H625.4"}})]),_vm._v(" "),_c('div',{staticClass:"imgBox"},[_c('img',{attrs:{"src":item.img}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('p',{staticClass:"category"},[_vm._v(_vm._s(item.subtitle))]),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',{staticClass:"content",domProps:{"innerHTML":_vm._s(item.description)}}),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v(_vm._s(_vm.transformTime(item.updatedAt)))])])])],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/News.vue?vue&type=template&id=3b5727dc&scoped=true&

// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/News.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  name: 'News',
  props: {
    news: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {
      REGION: "tw"
    };
  },

  computed: {
    transformTime() {
      return time => {
        if (false) {}

        return utils["a" /* default */].timeToYYMMDDHHMM(time);
      };
    }

  }
});
// CONCATENATED MODULE: ./components/News.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/News.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b5727dc",
  "1bf33941"
  
)

/* harmony default export */ var News = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_7053fadc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_7053fadc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_7053fadc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_7053fadc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_7053fadc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_7053fadc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-7053fadc{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-7053fadc{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-7053fadc{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-7053fadc{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}.searchInputBox[data-v-7053fadc]{position:relative;font-size:.36rem;height:.5rem}@media screen and (max-width:750px){.searchInputBox[data-v-7053fadc]{height:.8rem}}.searchInputBox svg[data-v-7053fadc]{fill:#aaa}.searchInputBox svg[data-v-7053fadc]:first-child{position:absolute;top:0;left:0}@media screen and (max-width:750px){.searchInputBox svg[data-v-7053fadc]:first-child{display:none}}.searchInputBox svg[data-v-7053fadc]:nth-child(2){display:none;position:absolute;top:0;left:0}@media screen and (max-width:750px){.searchInputBox svg[data-v-7053fadc]:nth-child(2){display:block}}.searchInputBox svg[data-v-7053fadc]:nth-child(3){width:.35rem;height:.35rem;position:absolute;top:.08rem;bottom:0;left:.2rem;fill:#bb996b}@media screen and (max-width:750px){.searchInputBox svg[data-v-7053fadc]:nth-child(3){width:.55rem;height:.55rem;top:.12rem;left:.3rem}}.searchInputBox input[data-v-7053fadc]{width:3rem;height:.3rem;font-size:.2rem;line-height:.32rem;border:none;text-align:center;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}@media screen and (max-width:750px){.searchInputBox input[data-v-7053fadc]{width:4.5rem;height:.6rem;font-size:.3rem}}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=_category.js.map