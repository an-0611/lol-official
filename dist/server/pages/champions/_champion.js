exports.ids = [2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fc24917c", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_champion_vue_vue_type_style_index_0_id_45896a2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_champion_vue_vue_type_style_index_0_id_45896a2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_champion_vue_vue_type_style_index_0_id_45896a2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_champion_vue_vue_type_style_index_0_id_45896a2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_champion_vue_vue_type_style_index_0_id_45896a2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_champion_vue_vue_type_style_index_0_id_45896a2b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes fadeIn-data-v-45896a2b{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-45896a2b{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInUp-data-v-45896a2b{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-45896a2b{0%{opacity:0;transform:translate3d(0,40%,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes rightFadeIn-data-v-45896a2b{0%{opacity:0;-webkit-clip-path:polygon(100% 100%,100% 100%,100% 100%);clip-path:polygon(100% 100%,100% 100%,100% 100%)}to{opacity:1;-webkit-clip-path:polygon(100% 100%,-200% 100%,100% -200%);clip-path:polygon(100% 100%,-200% 100%,100% -200%)}}@keyframes rightFadeIn-data-v-45896a2b{0%{opacity:0;-webkit-clip-path:polygon(100% 100%,100% 100%,100% 100%);clip-path:polygon(100% 100%,100% 100%,100% 100%)}to{opacity:1;-webkit-clip-path:polygon(100% 100%,-200% 100%,100% -200%);clip-path:polygon(100% 100%,-200% 100%,100% -200%)}}@-webkit-keyframes leftFadeIn-data-v-45896a2b{0%{opacity:0;-webkit-clip-path:polygon(0 0,0 0,0 0);clip-path:polygon(0 0,0 0,0 0)}to{opacity:1;-webkit-clip-path:polygon(0 0,200% 0,0 200%);clip-path:polygon(0 0,200% 0,0 200%)}}@keyframes leftFadeIn-data-v-45896a2b{0%{opacity:0;-webkit-clip-path:polygon(0 0,0 0,0 0);clip-path:polygon(0 0,0 0,0 0)}to{opacity:1;-webkit-clip-path:polygon(0 0,200% 0,0 200%);clip-path:polygon(0 0,200% 0,0 200%)}}#championInnerPage[data-v-45896a2b]{background:#000;position:relative}#championInnerPage #blurBackground[data-v-45896a2b]{position:absolute;top:0;width:100%;height:7.5rem;z-index:1}@media screen and (max-width:1000px){#championInnerPage #blurBackground[data-v-45896a2b]{height:3.9rem}}@media screen and (max-width:750px){#championInnerPage #blurBackground[data-v-45896a2b]{height:2.9rem}}#championInnerPage #blurBackground[data-v-45896a2b]:after{content:\"\";width:100%;height:99%;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background:inherit;-webkit-filter:blur(5px);filter:blur(5px);z-index:2}#championInnerPage #breadCrumb[data-v-45896a2b] {position:relative;bottom:0}#championInnerPage #breadCrumb[data-v-45896a2b]  ul{padding:.14rem 0 0 .05rem}@media screen and (max-width:1000px){#championInnerPage #breadCrumb[data-v-45896a2b]  ul{padding:.12rem 0 0;margin-left:.2rem}#championInnerPage #breadCrumb[data-v-45896a2b]  ul li a{font-size:.18rem}}@media screen and (max-width:750px){#championInnerPage #breadCrumb[data-v-45896a2b] {opacity:0;pointer-events:none}}#championInnerPage .container .mainSection[data-v-45896a2b]{color:#fff;height:7.49rem;margin-top:.32rem;position:relative;z-index:2;font-size:0}@media screen and (max-width:1000px){#championInnerPage .container .mainSection[data-v-45896a2b]{margin-top:.2rem;height:8rem}}@media screen and (max-width:750px){#championInnerPage .container .mainSection[data-v-45896a2b]{margin-top:.1rem;height:11.35rem}}#championInnerPage .container .mainSection .bg[data-v-45896a2b]{position:relative;height:5.8rem;margin:0 .6rem;-webkit-mask-image:linear-gradient(#000 65%,transparent 98%);mask-image:linear-gradient(#000 65%,transparent 98%);background-size:cover!important;background-position:50%!important;overflow:hidden}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .bg[data-v-45896a2b]{margin:0}}#championInnerPage .container .mainSection .content[data-v-45896a2b]{width:10.8rem;height:2.85rem;margin:auto;position:relative;top:-1.15rem}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content[data-v-45896a2b]{width:9rem;height:3.2rem;top:-1rem}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content[data-v-45896a2b]{width:7.1rem;height:6.4rem;top:-.87rem}}#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]{position:absolute;top:0;left:0;fill:#323943}html[data-region=vn] #championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]{fill:#000}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]:first-child{display:none}}#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]:nth-child(2){display:none}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]:nth-child(2){display:block}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]:nth-child(2){display:none}}#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]:nth-child(3){display:none}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .svgContentBorder[data-v-45896a2b]:nth-child(3){display:block}}#championInnerPage .container .mainSection .content .title[data-v-45896a2b]{color:#918f94;position:relative;top:-.7rem;font-size:.18rem;opacity:0;-webkit-animation-name:rightFadeIn-data-v-45896a2b;animation-name:rightFadeIn-data-v-45896a2b;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:2.8s;animation-duration:2.8s;-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-animation-timing-function:cubic-bezier(.165,.84,.44,1);animation-timing-function:cubic-bezier(.165,.84,.44,1);-webkit-clip-path:polygon(100% 100%,-200% 100%,100% -200%);clip-path:polygon(100% 100%,-200% 100%,100% -200%)}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .title[data-v-45896a2b]{padding-left:.25rem}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .title[data-v-45896a2b]{font-size:.3rem;top:-.86rem}}html[data-region=vn] #championInnerPage .container .mainSection .content .title[data-v-45896a2b]{color:#fff;font-style:italic;font-weight:700}#championInnerPage .container .mainSection .content .name[data-v-45896a2b]{position:relative;top:-.7rem;font-size:1rem;z-index:1;opacity:0;-webkit-animation-name:leftFadeIn-data-v-45896a2b;animation-name:leftFadeIn-data-v-45896a2b;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-timing-function:cubic-bezier(.165,.84,.44,1);animation-timing-function:cubic-bezier(.165,.84,.44,1);-webkit-clip-path:polygon(0 0,200% 0,0 200%);clip-path:polygon(0 0,200% 0,0 200%)}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .name[data-v-45896a2b]{padding-left:.25rem}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .name[data-v-45896a2b]{top:-.87rem}}html[data-region=vn] #championInnerPage .container .mainSection .content .name[data-v-45896a2b]{font-style:italic;font-weight:700}#championInnerPage .container .mainSection .content .bottom[data-v-45896a2b]{width:10.8rem;height:100%;font-size:0;position:relative;top:-1.35rem}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .bottom[data-v-45896a2b]{width:9rem}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom[data-v-45896a2b]{width:7.1rem}}#championInnerPage .container .mainSection .content .bottom .tags[data-v-45896a2b]{width:2.65rem;height:100%;padding:1.22rem 0 0 .9rem;display:inline-block;vertical-align:top;opacity:0;-webkit-animation:fadeIn-data-v-45896a2b 1s;animation:fadeIn-data-v-45896a2b 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.1s;animation-delay:.1s}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .bottom .tags[data-v-45896a2b]{width:4.5rem;height:1.95rem;padding:.86rem 0 0 1.1rem;margin:auto}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .tags[data-v-45896a2b]{width:3.55rem;height:2.95rem;padding:.9rem 0 0 .17rem}}#championInnerPage .container .mainSection .content .bottom .tags[data-v-45896a2b]  svg{width:.33rem;height:.33rem}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .tags[data-v-45896a2b]  svg{width:.8rem;height:.8rem}}#championInnerPage .container .mainSection .content .bottom .tags[data-v-45896a2b]  svg path{fill:#d7a25e}#championInnerPage .container .mainSection .content .bottom .tags p[data-v-45896a2b]{font-size:.14rem;margin-top:.1rem}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .tags p[data-v-45896a2b]{font-size:.3rem;margin-top:.19rem}}#championInnerPage .container .mainSection .content .bottom .tags p[data-v-45896a2b]:nth-child(3){color:#d7a25e;margin-top:.03rem}#championInnerPage .container .mainSection .content .bottom .difficulty[data-v-45896a2b]{width:2.7rem;height:100%;font-size:.2rem;display:inline-block;vertical-align:top;padding:1.28rem 1.05rem 0 0;opacity:0;-webkit-animation:fadeIn-data-v-45896a2b 1s;animation:fadeIn-data-v-45896a2b 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.3s;animation-delay:.3s}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .bottom .difficulty[data-v-45896a2b]{width:4.5rem;height:1.95rem;padding:.95rem 1.1rem 0 0;margin:auto}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .difficulty[data-v-45896a2b]{width:3.55rem;height:2.95rem;padding:1.23rem .15rem 0 0}}#championInnerPage .container .mainSection .content .bottom .difficulty .scaleBox .scale[data-v-45896a2b]{display:inline-block;width:.15rem;height:.08rem;padding-right:.01rem;opacity:1;background-color:#053041;background-clip:content-box;transform:skewX(-50deg)}#championInnerPage .container .mainSection .content .bottom .difficulty .scaleBox .scale.active[data-v-45896a2b]{background:#09cedf}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .difficulty .scaleBox .scale[data-v-45896a2b]{width:.45rem;height:.24rem}}#championInnerPage .container .mainSection .content .bottom .difficulty p[data-v-45896a2b]{font-size:.14rem;margin-top:.14rem}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .difficulty p[data-v-45896a2b]{font-size:.3rem;margin-top:.36rem}}#championInnerPage .container .mainSection .content .bottom .difficulty p[data-v-45896a2b]:nth-child(3){font-size:.16rem;color:#d7a25e;margin-top:.05rem}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .difficulty p[data-v-45896a2b]:nth-child(3){font-size:.3rem}}#championInnerPage .container .mainSection .content .bottom .lore[data-v-45896a2b]{width:5.4rem;height:100%;display:inline-block;vertical-align:top;opacity:0;-webkit-animation:fadeIn-data-v-45896a2b 1s;animation:fadeIn-data-v-45896a2b 1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.5s;animation-delay:.5s}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .bottom .lore[data-v-45896a2b]{width:8.2rem;height:1.24rem;border-top:1px solid #323943}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .lore[data-v-45896a2b]{width:6.5rem;height:3.3rem}}#championInnerPage .container .mainSection .content .bottom .lore p[data-v-45896a2b]{font-size:.14rem;padding:.03rem .03rem 0 .6rem;margin:1.12rem .6rem 0 0;border-left:1px solid #313943;text-align:left;height:1.25rem;overflow:auto}#championInnerPage .container .mainSection .content .bottom .lore p[data-v-45896a2b]::-webkit-scrollbar{width:2px;background:#313943}#championInnerPage .container .mainSection .content .bottom .lore p[data-v-45896a2b]::-webkit-scrollbar-button{width:0;height:0}#championInnerPage .container .mainSection .content .bottom .lore p[data-v-45896a2b]::-webkit-scrollbar-thumb{background:#d6a15e}@media screen and (max-width:1000px){#championInnerPage .container .mainSection .content .bottom .lore p[data-v-45896a2b]{height:1rem;padding:.28rem .07rem 0;margin:0 auto;border:none}}@media screen and (max-width:750px){#championInnerPage .container .mainSection .content .bottom .lore p[data-v-45896a2b]{font-size:.25rem;padding:0;margin:.44rem auto 0;height:2.3rem}}#championInnerPage .container .interruptSymbol[data-v-45896a2b]{width:.2rem;height:.6rem;margin:.2rem auto 0;padding-top:.02rem}@media screen and (max-width:1000px){#championInnerPage .container .interruptSymbol[data-v-45896a2b]{display:none}}#championInnerPage .container .interruptSymbol .straightLine[data-v-45896a2b]{width:.02rem;height:.3rem;margin:auto;background:#313943}#championInnerPage .container .interruptSymbol .square[data-v-45896a2b]{width:.08rem;height:.08rem;border:1px solid #313943;transform:rotate(45deg);margin:.06rem auto auto;z-index:1}#championInnerPage .container .interruptSymbol .square2[data-v-45896a2b]{margin-top:-.03rem;z-index:0}#championInnerPage .container .skillSection[data-v-45896a2b]{color:#fff;width:100%;height:7rem;margin:auto;font-size:0;position:relative}@media screen and (max-width:1000px){#championInnerPage .container .skillSection[data-v-45896a2b]{display:flex;align-items:center;flex-direction:column-reverse;height:auto}}#championInnerPage .container .skillSection[data-v-45896a2b]  svg{width:5.6rem;height:5.6rem;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;opacity:.3}@media screen and (max-width:1000px){#championInnerPage .container .skillSection[data-v-45896a2b]  svg{top:5.5rem}}#championInnerPage .container .skillSection[data-v-45896a2b]  svg path{fill:#313943}#championInnerPage .container .skillSection .left[data-v-45896a2b]{width:7.13rem;height:100%;display:inline-block;vertical-align:top;position:relative}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left[data-v-45896a2b]{width:9rem;height:auto}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left[data-v-45896a2b]{width:7.5rem}}#championInnerPage .container .skillSection .left .skillTitle[data-v-45896a2b]{font-size:.63rem;margin:1.51rem 0 0 1.18rem;text-align:left}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillTitle[data-v-45896a2b]{margin:.3rem 0 0;text-align:center}}#championInnerPage .container .skillSection .left .skillItems[data-v-45896a2b]{width:5.5rem;height:1.75rem;margin:auto;font-size:0}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems[data-v-45896a2b]{width:9rem;height:1.4rem}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillItems[data-v-45896a2b]{width:7.2rem;height:2rem;margin:auto}}#championInnerPage .container .skillSection .left .skillItems .item[data-v-45896a2b]{width:.9rem;height:100%;font-size:.2rem;margin:0 .1rem;display:inline-block;position:relative;cursor:pointer}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems .item[data-v-45896a2b]{width:1.8rem;margin:0}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillItems .item[data-v-45896a2b]{width:1.44rem}}#championInnerPage .container .skillSection .left .skillItems .item .imgBox svg[data-v-45896a2b]{display:none}#championInnerPage .container .skillSection .left .skillItems .item .point .verticalLine[data-v-45896a2b]{opacity:0;height:0;position:absolute;top:0;transition:.5s}#championInnerPage .container .skillSection .left .skillItems .item.active[data-v-45896a2b]{pointer-events:none}#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox[data-v-45896a2b]{position:relative}#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox img[data-v-45896a2b]{margin-top:.57rem}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox img[data-v-45896a2b]{margin-top:.48rem}}#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox svg[data-v-45896a2b]{display:block;width:.71rem;height:.71rem;position:absolute;right:0;bottom:-.55rem;left:0;margin:auto;z-index:1;opacity:1}#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox svg path[data-v-45896a2b]{fill:none;stroke:#d0a85c;stroke-width:1px;stroke-linecap:round;stroke-dasharray:284;-webkit-animation:svgAnimation284-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation284-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation284-data-v-45896a2b{0%{stroke-dashoffset:284}to{stroke-dashoffset:0}}@keyframes svgAnimation284-data-v-45896a2b{0%{stroke-dashoffset:284}to{stroke-dashoffset:0}}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox svg[data-v-45896a2b]{width:.74rem;height:.74rem;top:.49rem;bottom:0}#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox svg path[data-v-45896a2b]{fill:none;stroke:#d0a85c;stroke-width:1px;stroke-linecap:round;stroke-dasharray:296;-webkit-animation:svgAnimation296-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation296-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation296-data-v-45896a2b{0%{stroke-dashoffset:296}to{stroke-dashoffset:0}}@keyframes svgAnimation296-data-v-45896a2b{0%{stroke-dashoffset:296}to{stroke-dashoffset:0}}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox svg[data-v-45896a2b]{width:1.1rem;height:1.1rem;top:.45rem;bottom:0}#championInnerPage .container .skillSection .left .skillItems .item.active .imgBox svg path[data-v-45896a2b]{fill:none;stroke:#d0a85c;stroke-width:1px;stroke-linecap:round;stroke-dasharray:440;-webkit-animation:svgAnimation440-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation440-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation440-data-v-45896a2b{0%{stroke-dashoffset:440}to{stroke-dashoffset:0}}@keyframes svgAnimation440-data-v-45896a2b{0%{stroke-dashoffset:440}to{stroke-dashoffset:0}}}#championInnerPage .container .skillSection .left .skillItems .item.active .point[data-v-45896a2b]{width:.15rem;height:.15rem;color:#d0a85c;background:inherit;border-width:2px;border-style:solid;border-radius:100%;bottom:.02rem}#championInnerPage .container .skillSection .left .skillItems .item.active .point .verticalLine[data-v-45896a2b]{width:.01rem;height:.25rem;opacity:1;background:#d0a85c;position:absolute;top:-.25rem;right:0;left:0;margin:auto}#championInnerPage .container .skillSection .left .skillItems .item.active .point .innerPoint[data-v-45896a2b]{display:block;width:.05rem;height:.05rem;background:#d0a85c;border-radius:100%;position:relative;top:.03rem;right:0;left:0;margin:auto}#championInnerPage .container .skillSection .left .skillItems .item img[data-v-45896a2b]{width:.6rem;height:.6rem;margin:.8rem auto 0;position:relative;vertical-align:top;transition:all .2s ease-in-out}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems .item img[data-v-45896a2b]{margin:.48rem auto 0}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillItems .item img[data-v-45896a2b]{width:.95rem;height:.95rem}}#championInnerPage .container .skillSection .left .skillItems .item:not(.active):hover img[data-v-45896a2b]{margin-top:.75rem}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems .item:not(.active):hover img[data-v-45896a2b]{margin-top:.65rem}}#championInnerPage .container .skillSection .left .skillItems .item .point[data-v-45896a2b]{width:.1rem;height:.1rem;background:#313943;border-radius:50%;position:absolute;right:0;bottom:.04rem;left:0;margin:auto;transition:background-color .2s ease-in-out;z-index:3}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillItems .item .point[data-v-45896a2b]{display:none}}#championInnerPage .container .skillSection .left .skillUnderLine[data-v-45896a2b]{width:100%;height:1px;background:#313943;position:relative;top:-.1rem;z-index:2}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillUnderLine[data-v-45896a2b]{display:none}}#championInnerPage .container .skillSection .left .skillDesc[data-v-45896a2b]{width:4.65rem;height:2rem;padding-top:.32rem;margin:auto;text-align:left;font-size:.14rem}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillDesc[data-v-45896a2b]{width:9rem;height:1.7rem;padding:.05rem 0 0 .05rem}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillDesc[data-v-45896a2b]{width:6.3rem;height:auto}}#championInnerPage .container .skillSection .left .skillDesc .tag[data-v-45896a2b]{color:#08bedb}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillDesc .tag[data-v-45896a2b]{font-size:.3rem}}#championInnerPage .container .skillSection .left .skillDesc .name[data-v-45896a2b]{margin-top:.05rem;font-size:.2rem;font-weight:600}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillDesc .name[data-v-45896a2b]{margin-top:.1rem;font-size:.24rem}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillDesc .name[data-v-45896a2b]{font-size:.38rem}}#championInnerPage .container .skillSection .left .skillDesc .desc[data-v-45896a2b]{margin-top:.06rem;margin-left:.02rem}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .left .skillDesc .desc[data-v-45896a2b]{margin-top:.14rem;margin-bottom:.2rem}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .left .skillDesc .desc[data-v-45896a2b]{font-size:.3rem}}#championInnerPage .container .skillSection .right[data-v-45896a2b]{width:6.21rem;height:100%;display:inline-block;vertical-align:top;position:relative}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .right[data-v-45896a2b]{width:9rem;height:auto;margin-top:.5rem}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .right[data-v-45896a2b]{width:7.5rem}}#championInnerPage .container .skillSection .right svg[data-v-45896a2b]{opacity:.7;margin:auto}#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:first-child{width:6rem;height:3.7rem;position:absolute;top:.75rem;right:0;bottom:0;left:.02rem}#championInnerPage .container .skillSection .right svg:first-child path[data-v-45896a2b]{fill:none;stroke:#323a44;stroke-width:1px;stroke-linecap:round;stroke-dasharray:1940;-webkit-animation:svgAnimation1940-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation1940-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation1940-data-v-45896a2b{0%{stroke-dashoffset:1940}to{stroke-dashoffset:0}}@keyframes svgAnimation1940-data-v-45896a2b{0%{stroke-dashoffset:1940}to{stroke-dashoffset:0}}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:first-child{display:none}}#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:nth-child(2){display:none}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:nth-child(2){display:block;width:8.8rem;height:5.3rem;position:absolute;top:0;right:0;bottom:0;left:.02rem}#championInnerPage .container .skillSection .right svg:nth-child(2) path[data-v-45896a2b]{fill:none;stroke:#323a44;stroke-width:1px;stroke-linecap:round;stroke-dasharray:2820;-webkit-animation:svgAnimation2820-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation2820-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation2820-data-v-45896a2b{0%{stroke-dashoffset:2820}to{stroke-dashoffset:0}}@keyframes svgAnimation2820-data-v-45896a2b{0%{stroke-dashoffset:2820}to{stroke-dashoffset:0}}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:nth-child(2){display:none}}#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:nth-child(3){display:none}@media screen and (max-width:750px){#championInnerPage .container .skillSection .right svg[data-v-45896a2b]:nth-child(3){display:block;width:6.9rem;height:4.34rem;position:absolute;top:.12rem;right:0;bottom:0;left:.02rem}#championInnerPage .container .skillSection .right svg:nth-child(3) path[data-v-45896a2b]{fill:none;stroke:#323a44;stroke-width:1px;stroke-linecap:round;stroke-dasharray:2248;-webkit-animation:svgAnimation2248-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation2248-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation2248-data-v-45896a2b{0%{stroke-dashoffset:2248}to{stroke-dashoffset:0}}@keyframes svgAnimation2248-data-v-45896a2b{0%{stroke-dashoffset:2248}to{stroke-dashoffset:0}}}#championInnerPage .container .skillSection .right video[data-v-45896a2b]{width:6.2rem;height:3.5rem;margin-top:2.14rem;-o-object-fit:cover;object-fit:cover}#championInnerPage .container .skillSection .right video.fadeIn[data-v-45896a2b]{-webkit-animation:fadeIn-data-v-45896a2b 1s;animation:fadeIn-data-v-45896a2b 1s}@media screen and (max-width:1000px){#championInnerPage .container .skillSection .right video[data-v-45896a2b]{width:9rem;height:5.1rem;margin:0}}@media screen and (max-width:750px){#championInnerPage .container .skillSection .right video[data-v-45896a2b]{width:7.1rem;height:4.15rem;margin-top:.12rem}}#championInnerPage .container .modelingSection[data-v-45896a2b]{width:100%;height:9rem;margin-top:.98rem;position:relative}@media screen and (max-width:1000px){#championInnerPage .container .modelingSection[data-v-45896a2b]{height:7.6rem;margin-top:1.97rem}}@media screen and (max-width:750px){#championInnerPage .container .modelingSection[data-v-45896a2b]{height:6.3rem;margin-top:1.9rem}}#championInnerPage .container .modelingSection h3[data-v-45896a2b]{width:3.1rem;padding:.3rem 0 .1rem .05rem;font-size:.63rem;color:#fff;margin-left:.27rem;border-bottom:1px solid #fff;position:absolute;top:0;left:0;z-index:3}@media screen and (max-width:1000px){#championInnerPage .container .modelingSection h3[data-v-45896a2b]{width:9rem;padding:.3rem .1rem;margin-left:.48rem;top:-1.4rem;border:none}}@media screen and (max-width:750px){#championInnerPage .container .modelingSection h3[data-v-45896a2b]{width:7.5rem;margin-left:0}}html[data-region=vn] #championInnerPage .container .modelingSection h3[data-v-45896a2b]{font-size:revert}#championInnerPage .container .modelingSection .swiperBox[data-v-45896a2b]{width:3.8rem;height:6.09rem;margin-top:1.13rem;padding-left:.72rem;position:absolute;top:0;left:0;z-index:2;overflow:hidden}@media screen and (max-width:1000px){#championInnerPage .container .modelingSection .swiperBox[data-v-45896a2b]{width:8.2rem;height:2.1rem;padding-left:0;top:unset;bottom:0;left:0;right:0;margin:auto}}@media screen and (max-width:750px){#championInnerPage .container .modelingSection .swiperBox[data-v-45896a2b]{width:6.5rem;height:2rem}}#championInnerPage .container .modelingSection .shadow[data-v-45896a2b]{width:3.6rem;background:#000;opacity:.75;z-index:1;position:absolute;top:0;right:0;bottom:0;left:0}@media screen and (max-width:1000px){#championInnerPage .container .modelingSection .shadow[data-v-45896a2b]{width:10rem;height:2.1rem;top:unset;bottom:0}}@media screen and (max-width:750px){#championInnerPage .container .modelingSection .shadow[data-v-45896a2b]{display:none}}.thumb-example[data-v-45896a2b]{background-color:#000}.swiper .swiper-slide[data-v-45896a2b]{background-size:cover;background-position:50%}.swiper.gallery-top[data-v-45896a2b]{height:100%;width:100%;position:absolute;top:0;left:0;margin:auto 0}.swiper.gallery-top img[data-v-45896a2b]{height:7.2rem}@media screen and (max-width:1000px){.swiper.gallery-top img[data-v-45896a2b]{height:5.5rem}}@media screen and (max-width:750px){.swiper.gallery-top img[data-v-45896a2b]{height:4.13rem}}.swiper.gallery-thumbs[data-v-45896a2b]{height:9.6rem;box-sizing:border-box;position:relative;top:-3.7rem;left:0;overflow:unset}@media screen and (max-width:1000px){.swiper.gallery-thumbs[data-v-45896a2b]{top:.3rem;height:1.4rem}}.swiper.gallery-thumbs .swiper-slide[data-v-45896a2b]{width:3.2rem;height:.8rem;opacity:.4;cursor:pointer;text-align:left;transition:opacity .2s ease-in-out}@media screen and (max-width:1000px){.swiper.gallery-thumbs .swiper-slide[data-v-45896a2b]{width:1.6rem}}.swiper.gallery-thumbs .swiper-slide[data-v-45896a2b]:hover{opacity:1}.swiper.gallery-thumbs .swiper-slide.swiper-slide-active svg[data-v-45896a2b]:first-child{display:block;width:2.95rem;height:.9rem;position:absolute;top:.05rem;left:.05rem}.swiper.gallery-thumbs .swiper-slide.swiper-slide-active svg:first-child path[data-v-45896a2b]{fill:none;stroke:#3d3937;stroke-width:1px;stroke-linecap:round;stroke-dasharray:770;-webkit-animation:svgAnimation770-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation770-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation770-data-v-45896a2b{0%{stroke-dashoffset:770}to{stroke-dashoffset:0}}@keyframes svgAnimation770-data-v-45896a2b{0%{stroke-dashoffset:770}to{stroke-dashoffset:0}}@media screen and (max-width:1000px){.swiper.gallery-thumbs .swiper-slide.swiper-slide-active svg[data-v-45896a2b]:first-child{display:none}}@media screen and (max-width:1000px){.swiper.gallery-thumbs .swiper-slide.swiper-slide-active svg[data-v-45896a2b]:nth-child(2){position:absolute;top:-.07rem;left:-.1rem;z-index:1;width:1.13rem;height:1.13rem;display:block}.swiper.gallery-thumbs .swiper-slide.swiper-slide-active svg:nth-child(2) path[data-v-45896a2b]{fill:none;stroke-width:1px;stroke-linecap:round;stroke-dasharray:452;-webkit-animation:svgAnimation452-data-v-45896a2b 2.5s ease 1 backwards;animation:svgAnimation452-data-v-45896a2b 2.5s ease 1 backwards}@-webkit-keyframes svgAnimation452-data-v-45896a2b{0%{stroke-dashoffset:452}to{stroke-dashoffset:0}}@keyframes svgAnimation452-data-v-45896a2b{0%{stroke-dashoffset:452}to{stroke-dashoffset:0}}.swiper.gallery-thumbs .swiper-slide.swiper-slide-active svg:nth-child(2) path[data-v-45896a2b]{stroke:#d0a85c}}.swiper.gallery-thumbs .swiper-slide svg[data-v-45896a2b]{display:none}.swiper.gallery-thumbs .swiper-slide.swiper-slide-active img[data-v-45896a2b]{transform:scale(1)}.swiper.gallery-thumbs .swiper-slide img[data-v-45896a2b]{width:1rem;height:1rem;transform:scale(.6);vertical-align:middle;transition:transform .2s ease-in-out;-o-object-fit:cover;object-fit:cover}@media screen and (max-width:1000px){.swiper.gallery-thumbs .swiper-slide img[data-v-45896a2b]{transform:scale(1)}}.swiper.gallery-thumbs .swiper-slide.swiper-slide-active span[data-v-45896a2b]{margin-left:.15rem}@media screen and (max-width:1000px){.swiper.gallery-thumbs .swiper-slide.swiper-slide-active span[data-v-45896a2b]{margin-left:0}}.swiper.gallery-thumbs .swiper-slide span[data-v-45896a2b]{width:1.7rem;height:auto;display:inline-block;font-size:.14rem;color:#fff;font-weight:600;vertical-align:middle;transition:margin .2s ease-in-out}@media screen and (max-width:1000px){.swiper.gallery-thumbs .swiper-slide span[data-v-45896a2b]{display:block;text-align:center;width:1rem;margin-top:.2rem;font-size:.14rem}}.swiper.gallery-thumbs .swiper-slide-active[data-v-45896a2b]{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChampionIcons.vue?vue&type=template&id=0ac38b62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"viewBox":"0 0 100 100"}},[_vm._ssrNode(((_vm.tag === 'Mage')?("<path d=\"M84.48 77.3h13.41l-3.83-12.93h-9.58a36.73 36.73 0 00-27.54 12.45L50 85l-6.94-8.14a36.73 36.73 0 00-27.54-12.49H5.94L2.11 77.3h13.41a36.73 36.73 0 0127.54 12.45l.71.72h-9.1v7.42h30.9v-7.42h-9.1l.71-.72a35.85 35.85 0 0127.3-12.45\"></path> <path d=\"M56.23 54.31L50 62.21l-6.23-7.9a5.42 5.42 0 01-.24-6.47L50 37.31l6.47 10.53a5.42 5.42 0 01-.24 6.47M42.58 28.93l-7.91 12.69a13.37 13.37 0 00.72 15.09L50 75.14l14.61-18.43a13 13 0 00.72-15.09L50 17l-.48.72a5.58 5.58 0 01-4.31 1.68c-4.07 0-7.18-8.62 4.55-17.24 0 0-28.74 5.5-14.85 30.41z\"></path>"):"<!---->")+" "+((_vm.tag === 'Fighter')?("<path d=\"M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z\"></path> <path d=\"M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z\"></path>"):"<!---->")+" "+((_vm.tag === 'Marksman')?("<path d=\"M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42\"></path> <path d=\"M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z\"></path>"):"<!---->")+" "+((_vm.tag === 'Tank')?("<path d=\"M85.92 63.89L55 90V67.48h7.42v-9.1H37.55v9.1H45v22.75L14.08 63.89 8.33 21l27.54-10.51a39.13 39.13 0 0128.26 0L91.67 21zM66.28 5a47.61 47.61 0 00-32.56 0L2.11 17.19l6.7 49.57L41.86 95A13 13 0 0050 97.89 12.5 12.5 0 0058.14 95l33.05-28.24 6.7-49.57z\"></path> <path d=\"M78.74 32.28L62 21.26v5.27H38v-5.27l-16.26 7.19a2.9 2.9 0 00-1.67 3.11l4.31 19.16a3.22 3.22 0 002.15 2.15l11.26 2.4V50h23.94v5.27l11.5-2.4a2.52 2.52 0 002.15-2.15l4.31-15.57a2.39 2.39 0 00-1-2.87M57.42 20.07H42.58L50 11.68z\"></path>"):"<!---->")+" "+((_vm.tag === 'Assassin')?("<path d=\"M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z\"></path> <path d=\"M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z\"></path>"):"<!---->")+" "+((_vm.tag === 'Support')?("<path d=\"M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z\"></path>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ChampionIcons.vue?vue&type=template&id=0ac38b62&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChampionIcons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChampionIconsvue_type_script_lang_js_ = ({
  name: 'ChampionsIcon',
  props: {
    tag: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/ChampionIcons.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ChampionIconsvue_type_script_lang_js_ = (ChampionIconsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChampionIcons.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChampionIconsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "efb6249a"
  
)

/* harmony default export */ var ChampionIcons = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/champions/_champion.vue?vue&type=template&id=45896a2b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"championInnerPage"}},[_vm._ssrNode(((_vm.championInfo.id)?("<div id=\"blurBackground\""+(_vm._ssrStyle(null,("background: linear-gradient(black 1%, transparent 10%) center center, linear-gradient(to top, black 2%, transparent 15%) center center, url(" + (_vm.transformCDN(
      _vm.championInfo.id
    )) + "_0.jpg), url(" + _vm.noneImg + ") center center / cover no-repeat;"), null))+" data-v-45896a2b></div>"):"<!---->")+" "),_c('BreadCrumb',{attrs:{"bread-data":_vm.breadData}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container container1334\" data-v-45896a2b>","</div>",[(_vm.championInfo.id)?_vm._ssrNode("<div class=\"mainSection\" data-v-45896a2b>","</div>",[_vm._ssrNode("<div class=\"bg\""+(_vm._ssrStyle(null,("background: url(" + (_vm.transformCDN(
          _vm.championInfo.id
        )) + "_0.jpg), url(" + _vm.noneImg + ") no-repeat;"), null))+" data-v-45896a2b></div> "),_vm._ssrNode("<div class=\"content\" data-v-45896a2b>","</div>",[_vm._ssrNode("<svg viewBox=\"0 0 1080 286\" class=\"svgContentBorder\" data-v-45896a2b><polygon points=\"910,0 910,1 1079,1 1079,285 1,285 1,1 170,1 170,0 0,0 0,286 1080,286 1080,0\" data-v-45896a2b></polygon></svg> <svg viewBox=\"0 0 900 320\" class=\"svgContentBorder\" data-v-45896a2b><polygon points=\"730,0 730,1 899,1 899,319 1,319 1,1 170,1 170,0 0,0 0,320 900,320 900,0\" data-v-45896a2b></polygon></svg> <svg viewBox=\"0 0 708 640\" class=\"svgContentBorder\" data-v-45896a2b><polygon points=\"635,0 635,1 707,1 707,639 1,639 1,1 75,1 75,0 0,0 0,640 708,640 708,0\" data-v-45896a2b></polygon></svg> <div class=\"title\" data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.championInfo.title))+"</div> <div class=\"name\" data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.championInfo.name))+"</div> "),_vm._ssrNode("<div class=\"bottom\" data-v-45896a2b>","</div>",[(_vm.championInfo && _vm.championInfo.tags)?_vm._ssrNode("<div class=\"tags\" data-v-45896a2b>","</div>",[_c('ChampionIcons',{attrs:{"tag":_vm.championInfo.tags[0]}}),_vm._ssrNode(" <p data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.$t('LOL__CHAMPIONS_INNERPAGE_CHARACTER')))+"</p> <p data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.positionTransify(_vm.championInfo.tags[0])))+"</p>")],2):_vm._e(),_vm._ssrNode(" <div class=\"difficulty\" data-v-45896a2b><span class=\"scaleBox\" data-v-45896a2b><span"+(_vm._ssrClass(null,[
                  'scale',
                  { active: _vm.championInfo.info.difficulty >= 0 } ]))+" data-v-45896a2b></span> <span"+(_vm._ssrClass(null,[
                  'scale',
                  { active: _vm.championInfo.info.difficulty > 3 } ]))+" data-v-45896a2b></span> <span"+(_vm._ssrClass(null,[
                  'scale',
                  { active: _vm.championInfo.info.difficulty > 7 } ]))+" data-v-45896a2b></span></span> <p data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.$t('LOL__CHAMPIONS_INNERPAGE__DIFFICULTY')))+"</p> <p data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.$t('LOL__CHAMPIONS_INNERPAGE__DIFFICULTY_CATEGORY')))+"</p></div> <div class=\"lore\" data-v-45896a2b><p data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.championInfo.lore))+"</p></div>")],2)],2)],2):_vm._e(),_vm._ssrNode(" <div class=\"interruptSymbol\" data-v-45896a2b><div class=\"straightLine\" data-v-45896a2b></div> <div class=\"square square1\" data-v-45896a2b></div> <div class=\"square square2\" data-v-45896a2b></div></div> "),(_vm.championInfo)?_vm._ssrNode("<div class=\"skillSection\" data-v-45896a2b>","</div>",[(_vm.championInfo.tags)?[_c('ChampionIcons',{attrs:{"tag":_vm.championInfo.tags[0]}})]:_vm._e(),_vm._ssrNode(" <div class=\"left\" data-v-45896a2b><h2 class=\"skillTitle\" data-v-45896a2b>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('LOL__CHAMPIONS_INNERPAGE__SKILLS_INTRODUCE'))+"\n        ")+"</h2> <div class=\"skillItems\" data-v-45896a2b>"+((_vm.championInfo.passive && _vm.championInfo.passive.image.full)?("<div"+(_vm._ssrClass(null,['item', 'passive', { active: _vm.selectedSkill === 0 }]))+" data-v-45896a2b><div class=\"imgBox\" data-v-45896a2b><svg viewBox=\"0 0 71 71\" data-v-45896a2b><path d=\"M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z\" data-v-45896a2b></path></svg> <img"+(_vm._ssrAttr("src",((_vm.ddragonEnv.cdn) + "/" + (_vm.ddragonEnv.dd) + "/img/passive/" + (_vm.championInfo.passive.image.full))))+" data-v-45896a2b></div> <span class=\"point\" data-v-45896a2b><span class=\"verticalLine\" data-v-45896a2b></span> <span class=\"innerPoint\" data-v-45896a2b></span></span></div>"):"<!---->")+" "+((_vm.championInfo.spells)?((_vm._ssrList((_vm.championInfo.spells),function(skill,index){return ("<div"+(_vm._ssrClass(null,['item', { active: _vm.selectedSkill === index + 1 }]))+" data-v-45896a2b><div class=\"imgBox\" data-v-45896a2b><svg viewBox=\"0 0 71 71\" data-v-45896a2b><path d=\"M50.57,1l19.42,19.39V70h-69V1H50.57 M50.99,0H0v71h71V19.98L50.99,0L50.99,0z\" data-v-45896a2b></path></svg> <img"+(_vm._ssrAttr("src",((_vm.ddragonEnv.cdn) + "/" + (_vm.ddragonEnv.dd) + "/img/spell/" + (skill.image.full))))+" data-v-45896a2b></div> <span class=\"point\" data-v-45896a2b><span class=\"verticalLine\" data-v-45896a2b></span> <span class=\"innerPoint\" data-v-45896a2b></span></span></div>")}))):"<!---->")+"</div> <div class=\"skillUnderLine\" data-v-45896a2b></div> <div class=\"skillDesc\" data-v-45896a2b>"+((
              _vm.selectedSkill === 0 &&
              _vm.championInfo.passive &&
              _vm.championInfo.passive.name
            )?("<div data-v-45896a2b><div class=\"tag\" data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.$t(_vm.buttonsText[_vm.selectedSkill])))+"</div> <div class=\"name\" data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.championInfo.passive.name))+"</div> <div class=\"desc\" data-v-45896a2b>"+(_vm._s(_vm.championInfo.passive.description))+"</div></div>"):"<!---->")+" "+((_vm.championInfo.spells && _vm.selectedSkill)?("<div data-v-45896a2b><div class=\"tag\" data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.$t(_vm.buttonsText[_vm.selectedSkill])))+"</div> <div class=\"name\" data-v-45896a2b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.championInfo.spells[_vm.selectedSkill - 1].name)+"\n            ")+"</div> <div class=\"desc\" data-v-45896a2b>"+(_vm._s(_vm.championInfo.spells[_vm.selectedSkill - 1].description))+"</div></div>"):"<!---->")+"</div></div> <div class=\"right\" data-v-45896a2b><svg viewBox=\"0 0 600 370\" data-v-45896a2b><path d=\"M579.57,1l19.42,19.39V369h-598V1H579.57 M579.99,0H0v370h600V19.98L579.99,0L579.99,0z\" data-v-45896a2b></path></svg> <svg viewBox=\"0 0 880 530\" data-v-45896a2b><path d=\"M859.57,1l19.42,19.39V529h-878V1H859.57 M859.99,0H0v530h880V19.98L859.99,0L859.99,0z\" data-v-45896a2b></path></svg> <svg viewBox=\"0 0 690 434\" data-v-45896a2b><path d=\"M669.57,1l19.42,19.39V433h-688V1H669.57 M669.99,0H0v434h690V19.98L669.99,0L669.99,0z\" data-v-45896a2b></path></svg> "+((_vm.championInfo.key)?("<video id=\"skillVideo\" playsinline autoplay=\"autoplay\" muted=\"muted\" class=\"fadeIn\" data-v-45896a2b><source"+(_vm._ssrAttr("src",_vm.selectedVideoUrl))+" type=\"video/mp4\" data-v-45896a2b></video>"):"<!---->")+"</div>")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"modelingSection\" data-v-45896a2b>","</div>",[_c('swiper',{ref:"swiperTop",staticClass:"swiper gallery-top",attrs:{"options":_vm.swiperOptionTop}},_vm._l((_vm.championInfo.skins),function(skin){return _c('swiper-slide',{key:skin.num},[(_vm.championInfo.id)?_c('img',{attrs:{"src":((_vm.transformCDN(_vm.championInfo.id)) + "_" + (skin.num) + ".jpg")},on:{"error":_vm.displayDefaultImage}}):_vm._e()])}),1),_vm._ssrNode(" <h3 data-v-45896a2b>"+_vm._ssrEscape(_vm._s(_vm.$t('LOL__CHAMPIONS_INNERPAGE__SKIN')))+"</h3> "),_vm._ssrNode("<div class=\"swiperBox\" data-v-45896a2b>","</div>",[_c('swiper',{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{"options":_vm.swiperOptionThumbs}},_vm._l((_vm.championInfo.skins),function(skin){return _c('swiper-slide',{key:skin.num},[_c('svg',{attrs:{"viewBox":"0 0 295 90"}},[_c('path',{attrs:{"d":"M274.57,1l19.42,19.39V89h-293V1H274.57 M274.99,0H0v90h295V19.98L274.99,0L274.99,0z"}})]),_vm._v(" "),_c('svg',{attrs:{"viewBox":"0 0 115 115"}},[_c('path',{attrs:{"d":"M94.57,1l19.42,19.39V114h-113V1H94.57 M94.99,0H0v115h115V19.98L94.99,0L94.99,0z"}})]),_vm._v(" "),(_vm.championInfo.id)?_c('img',{attrs:{"src":((_vm.transformCDN(_vm.championInfo.id)) + "_" + (skin.num) + ".jpg")},on:{"error":_vm.displayDefaultImage}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(skin.name === 'default'
                ? _vm.$t('LOL__CHAMPIONS_INNERPAGE__DEFAULT_SKIN')
                : skin.name))])])}),1)],1),_vm._ssrNode(" <div class=\"shadow\" data-v-45896a2b></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/champions/_champion.vue?vue&type=template&id=45896a2b&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/champions/_champion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _championvue_type_script_lang_js_ = ({
  name: 'ChampionInnerPage',

  async fetch({
    store,
    params
  }) {
    await store.dispatch('DDragon/getDDragonEnvData');
    await store.dispatch('Champion/getChampionsDetail', params.champion);
  },

  data() {
    return {
      cdnPath: 'https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/',
      swiperOptionTop: {
        slidesPerView: 5,
        fadeEffect: {
          crossFade: true
        },
        effect: 'fade'
      },
      swiperOptionThumbs: {
        direction: 'horizontal',
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        spaceBetween: 0,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        breakpoints: {
          751: {
            slidesPerView: 5,
            spaceBetween: 80
          },
          1001: {
            direction: 'vertical',
            slidesPerView: 10
          }
        }
      },
      rolePositionMap: {
        Marksman: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MARKSMAN',
        Fighter: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_FIGHTER',
        Tank: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_TANK',
        Assassin: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_ASSASSIN',
        Support: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_SUPPORT',
        Mage: 'LOL__CHAMPIONS_INNERPAGE_ROLE_POSITION_MAGE'
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])('DDragon', ['ddragonEnv']),
    ...Object(external_vuex_["mapState"])('Champion', ['buttonsText', 'championInfo', 'breadData', 'selectedSkill', 'selectedVideoUrl']),

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
      return type => {
        if (type === 1) return this.$t('LOL__SERVER_PAGE__MALFUNCTION_MESSAGE');
        if (type === 2) return this.$t('LOL__SERVER_PAGE__NORMAL_MESSAGE');
        return this.$t('LOL__SERVER_PAGE__WARNING_MESSAGE');
      };
    },

    positionTransify() {
      return ddragonPosition => {
        return this.$t(this.rolePositionMap[ddragonPosition]);
      };
    },

    transformCDN() {
      return id => {
        return `${this.cdnPath + id.toLowerCase()}`;
      };
    },

    noneImg() {
      return `${this.cdnPath}none.jpg`;
    }

  },
  watch: {
    selectedSkill() {
      this.skillVideo.load();
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.swiperTop.controller.control = this.swiperThumbs;
      this.swiperThumbs.controller.control = this.swiperTop;
    });
  },

  methods: { ...Object(external_vuex_["mapActions"])('Champion', ['handleSelectedSkill']),

    displayDefaultImage(e) {
      e.target.src = this.noneImg;
    }

  }
});
// CONCATENATED MODULE: ./pages/champions/_champion.vue?vue&type=script&lang=js&
 /* harmony default export */ var champions_championvue_type_script_lang_js_ = (_championvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/champions/_champion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  champions_championvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "45896a2b",
  "b5de5de6"
  
)

/* harmony default export */ var _champion = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BreadCrumb: __webpack_require__(71).default,ChampionIcons: __webpack_require__(139).default})


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

/***/ })

};;
//# sourceMappingURL=_champion.js.map