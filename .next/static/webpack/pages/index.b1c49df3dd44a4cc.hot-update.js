"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/dropDown/index.js":
/*!**************************************!*\
  !*** ./components/dropDown/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiselect-react-dropdown */ \"./node_modules/multiselect-react-dropdown/dist/index.js\");\n/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst dropDown = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    displayValue: \"key\",\n                    hideSelectedList: true,\n                    onKeyPressFn: function noRefCheck() {},\n                    onRemove: function noRefCheck() {},\n                    onSearch: function noRefCheck() {},\n                    onSelect: onSelectHandler,\n                    options: food,\n                    showCheckbox: true,\n                    selectedValues: selectedOptions\n                }, void 0, false, {\n                    fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Selected Options:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        selectedOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    option.key,\n                                    option.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            \" - Qty  :  \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"number\",\n                                                value: option.counter || 1,\n                                                onChange: (e)=>updateCounter(option.key, parseInt(e.target.value, 10))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>onDeleteHandler(option.key),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, option.key, true, {\n                                fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/umanggoel/CN-website-copy/components/dropDown/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropDown);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Ryb3BEb3duL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3FCO0FBQ007QUFFckQsTUFBTUcsV0FBVztJQUNmLHFCQUNFOzswQkFDRSw4REFBQ0M7MEJBQ0MsNEVBQUNGLG1FQUFXQTtvQkFDVkcsY0FBYTtvQkFDYkMsZ0JBQWdCO29CQUNoQkMsY0FBYyxTQUFTQyxjQUFjO29CQUNyQ0MsVUFBVSxTQUFTRCxjQUFjO29CQUNqQ0UsVUFBVSxTQUFTRixjQUFjO29CQUNqQ0csVUFBVUM7b0JBQ1ZDLFNBQVNDO29CQUNUQyxZQUFZO29CQUNaQyxnQkFBZ0JDOzs7Ozs7Ozs7OzswQkFHcEIsOERBQUNiOzBCQUNDLDRFQUFDYzs7c0NBQ0MsOERBQUNDO3NDQUFHOzs7Ozs7d0JBQ0hGLGdCQUFnQkcsR0FBRyxDQUFDLENBQUNDLHVCQUNwQiw4REFBQ0M7O29DQUNFRCxPQUFPRSxHQUFHO29DQUNWRixPQUFPRyxVQUFVLGtCQUNoQjs7NENBQ0c7MERBQ0QsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxPQUFPTixPQUFPTyxPQUFPLElBQUk7Z0RBQ3pCQyxVQUFVLENBQUNDLElBQ1RDLGNBQWNWLE9BQU9FLEdBQUcsRUFBRVMsU0FBU0YsRUFBRUcsTUFBTSxDQUFDTixLQUFLLEVBQUU7Ozs7Ozs7O2tEQUszRCw4REFBQ087d0NBQU9DLFNBQVMsSUFBTUMsZ0JBQWdCZixPQUFPRSxHQUFHO2tEQUFHOzs7Ozs7OytCQWQ3Q0YsT0FBT0UsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUIvQjtBQUVBLCtEQUFlcEIsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Ryb3BEb3duL2luZGV4LmpzPzE0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE11bHRpc2VsZWN0IGZyb20gXCJtdWx0aXNlbGVjdC1yZWFjdC1kcm9wZG93blwiO1xuXG5jb25zdCBkcm9wRG93biA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPE11bHRpc2VsZWN0XG4gICAgICAgICAgZGlzcGxheVZhbHVlPVwia2V5XCJcbiAgICAgICAgICBoaWRlU2VsZWN0ZWRMaXN0XG4gICAgICAgICAgb25LZXlQcmVzc0ZuPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgb25SZW1vdmU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICBvblNlYXJjaD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgb3B0aW9ucz17Zm9vZH1cbiAgICAgICAgICBzaG93Q2hlY2tib3hcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17c2VsZWN0ZWRPcHRpb25zfSAvLyBQYXNzaW5nIHRoZSBzZWxlY3RlZE9wdGlvbnMgdG8gZGlzcGxheSBjaGVja2VkIG9wdGlvbnNcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxoMz5TZWxlY3RlZCBPcHRpb25zOjwvaDM+XG4gICAgICAgICAge3NlbGVjdGVkT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17b3B0aW9uLmtleX0+XG4gICAgICAgICAgICAgIHtvcHRpb24ua2V5fVxuICAgICAgICAgICAgICB7b3B0aW9uLmlzU2VsZWN0ZWQgJiYgKCAvLyBPbmx5IHJlbmRlciBjb3VudGVyIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtcIiAtIFF0eSAgOiAgXCJ9XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24uY291bnRlciB8fCAxfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnRlcihvcHRpb24ua2V5LCBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlSGFuZGxlcihvcHRpb24ua2V5KX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJvcERvd247Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTXVsdGlzZWxlY3QiLCJkcm9wRG93biIsImRpdiIsImRpc3BsYXlWYWx1ZSIsImhpZGVTZWxlY3RlZExpc3QiLCJvbktleVByZXNzRm4iLCJub1JlZkNoZWNrIiwib25SZW1vdmUiLCJvblNlYXJjaCIsIm9uU2VsZWN0Iiwib25TZWxlY3RIYW5kbGVyIiwib3B0aW9ucyIsImZvb2QiLCJzaG93Q2hlY2tib3giLCJzZWxlY3RlZFZhbHVlcyIsInNlbGVjdGVkT3B0aW9ucyIsInVsIiwiaDMiLCJtYXAiLCJvcHRpb24iLCJsaSIsImtleSIsImlzU2VsZWN0ZWQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImNvdW50ZXIiLCJvbkNoYW5nZSIsImUiLCJ1cGRhdGVDb3VudGVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwib25EZWxldGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dropDown/index.js\n"));

/***/ })

});