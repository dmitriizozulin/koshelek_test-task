/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkoshelek_test_task"] = self["webpackChunkkoshelek_test_task"] || []).push([["src_components_Diff_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/Diff.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/Diff.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js\");\n/* harmony import */ var _SymbolsDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SymbolsDropDown */ \"./src/components/SymbolsDropDown.vue\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"Diff\",\n  components: {\n    SymbolsDropDown: _SymbolsDropDown__WEBPACK_IMPORTED_MODULE_0__.default\n  },\n  props: {\n    core: Object\n  },\n  setup: function setup(_ref) {\n    var core = _ref.core;\n    var currentSymbol = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(core.api.symbols[core.api.current_symbol]);\n    var diffs = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(core.store.getDiff()); // const currentDiff = reactive({value: diffs?.value[currentSymbol?.value]});\n\n    function onChangeCurrentSymbol(symbol) {\n      currentSymbol.value = core.api.symbols[symbol];\n    }\n\n    return {\n      core: core,\n      diffs: diffs,\n      currentSymbol: currentSymbol,\n      onChangeCurrentSymbol: onChangeCurrentSymbol\n    };\n  }\n});\n\n//# sourceURL=webpack://koshelek_test-task/./src/components/Diff.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/Diff.vue?vue&type=template&id=5f63a496&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/Diff.vue?vue&type=template&id=5f63a496&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/@vue/shared/dist/shared.esm-bundler.js\");\n\n\nvar _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)(\"data-v-5f63a496\");\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5f63a496\");\n\nvar _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"li\", null, \"Bids\", -1\n/* HOISTED */\n);\n\nvar _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"li\", null, \"Asks\", -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"br\", null, null, -1\n/* HOISTED */\n);\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();\n\nvar render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_symbols_drop_down = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"symbols-drop-down\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_symbols_drop_down, {\n    core: $setup.core,\n    \"on-change\": $setup.onChangeCurrentSymbol\n  }, null, 8\n  /* PROPS */\n  , [\"core\", \"on-change\"]), $setup.diffs ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    key: 0\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.diffs[$setup.currentSymbol], function (diff) {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"ul\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"li\", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(diff.date.toDateString()) + \" \" + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(diff.date.toTimeString()), 1\n    /* TEXT */\n    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"ul\", null, [_hoisted_1, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(diff[$setup.currentSymbol].bids, function (bid) {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"span\", null, \"Price: \" + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(bid[0]), 1\n      /* TEXT */\n      ), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"span\", null, \"Amount: \" + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(bid[1]), 1\n      /* TEXT */\n      )]);\n    }), 256\n    /* UNKEYED_FRAGMENT */\n    ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"ul\", null, [_hoisted_3, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(diff[$setup.currentSymbol].asks, function (ask) {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"span\", null, \"Price: \" + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(ask[0]), 1\n      /* TEXT */\n      ), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"span\", null, \"Amount: \" + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(ask[1]), 1\n      /* TEXT */\n      )]);\n    }), 256\n    /* UNKEYED_FRAGMENT */\n    ))])])]);\n  }), 256\n  /* UNKEYED_FRAGMENT */\n  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n});\n\n//# sourceURL=webpack://koshelek_test-task/./src/components/Diff.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/Diff.vue":
/*!*********************************!*\
  !*** ./src/components/Diff.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Diff_vue_vue_type_template_id_5f63a496_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Diff.vue?vue&type=template&id=5f63a496&scoped=true */ \"./src/components/Diff.vue?vue&type=template&id=5f63a496&scoped=true\");\n/* harmony import */ var _Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diff.vue?vue&type=script&lang=js */ \"./src/components/Diff.vue?vue&type=script&lang=js\");\n\n\n\n_Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Diff_vue_vue_type_template_id_5f63a496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render\n_Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = \"data-v-5f63a496\"\n/* hot reload */\nif (false) {}\n\n_Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = \"src/components/Diff.vue\"\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://koshelek_test-task/./src/components/Diff.vue?");

/***/ }),

/***/ "./src/components/Diff.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/components/Diff.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Diff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Diff.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/Diff.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://koshelek_test-task/./src/components/Diff.vue?");

/***/ }),

/***/ "./src/components/Diff.vue?vue&type=template&id=5f63a496&scoped=true":
/*!***************************************************************************!*\
  !*** ./src/components/Diff.vue?vue&type=template&id=5f63a496&scoped=true ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Diff_vue_vue_type_template_id_5f63a496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Diff_vue_vue_type_template_id_5f63a496_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Diff.vue?vue&type=template&id=5f63a496&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/Diff.vue?vue&type=template&id=5f63a496&scoped=true\");\n\n\n//# sourceURL=webpack://koshelek_test-task/./src/components/Diff.vue?");

/***/ })

}]);