/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profilePage",{

/***/ "./components/Navbar-responsive/index.js":
/*!***********************************************!*\
  !*** ./components/Navbar-responsive/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import React, { useEffect, useState, useRef } from \"react\";\n// import Link from \"next/link\";\n// import styles from \"@/styles/navBarResponsive.module.scss\";\n// import Image from \"next/image\";\n// const NavbarComponent = () => {\n//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);\n//   const dropdownRef = useRef(null);\n//   const toggleDropdown = () => {\n//     setIsDropdownOpen(!isDropdownOpen);\n//   };\n//   const closeDropdown = (event) => {\n//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n//       setIsDropdownOpen(false);\n//     }\n//   };\n//   useEffect(() => {\n//     window.addEventListener(\"click\", closeDropdown);\n//     return () => {\n//       window.removeEventListener(\"click\", closeDropdown);\n//     };\n//   }, []);\n//   return (\n//     <div className={styles.navcont}>\n//       <nav className={styles.mainnav}>\n//         <ul>\n//           <li>\n//             <span className={styles.mainnav}>Home</span>\n//           </li>\n//           <li>\n//             <span className={styles.mainnav}>\n//               <Link href=\"../orders\">Ninja&nbsp;</Link>\n//             </span>\n//             Box&nbsp;\n//           </li>\n//           <li>\n//             <span className={styles.mainnav}>\n//               <Link href=\"../profilePage\">Ninja&nbsp;</Link>\n//             </span>\n//             Buffet\n//           </li>\n//           <li>\n//             <span className={styles.mainnav}>Meal&nbsp;</span>Box\n//           </li>\n//           <li>\n//             <nobr>About Us</nobr>\n//           </li>\n//           <li>Blog</li>\n//         </ul>\n//         <a href=\"./\">\n//           <Image\n//             className={styles.navimg}\n//             src=\"/caterninja.webp\"\n//             alt=\"CaterNinja.com Logo\"\n//             width={200}\n//             height={45}\n//             priority\n//           />\n//         </a>\n//         <div className={styles.profileIcon}>\n//         <button className={styles.profileBtn} onClick={toggleDropdown}>\n//           <Image src=\"/user.png\" alt=\"profile btn\" width={30} height={30} />{\" \"}\n//         </button>\n//         <div\n//             className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : \"\"}`}\n//             onClick={(e) => e.stopPropagation()}\n//             ref={dropdownRef}\n//             >\n//             {/* <ul> */}\n//           <li> <Link href=\"../profilePage\">My Profile</Link> </li>\n//           <li>  <Link href=\"../profilePage\">My Orders</Link> </li>\n//           <li>  <Link href=\"../profilePage\">Log Out</Link> </li>\n//           {/* </ul> */}\n//           </div>\n//             </div>\n//       </nav>\n//     </div>\n//   );\n// };\n// export default NavbarComponent;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci1yZXNwb25zaXZlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDtBQUM5RCxnQ0FBZ0M7QUFDaEMsOERBQThEO0FBQzlELGtDQUFrQztBQUVsQyxrQ0FBa0M7QUFDbEMsaUVBQWlFO0FBQ2pFLHNDQUFzQztBQUV0QyxtQ0FBbUM7QUFDbkMsMENBQTBDO0FBQzFDLE9BQU87QUFFUCx1Q0FBdUM7QUFDdkMsZ0ZBQWdGO0FBQ2hGLGtDQUFrQztBQUNsQyxRQUFRO0FBQ1IsT0FBTztBQUVQLHNCQUFzQjtBQUN0Qix1REFBdUQ7QUFFdkQscUJBQXFCO0FBQ3JCLDREQUE0RDtBQUM1RCxTQUFTO0FBQ1QsWUFBWTtBQUNaLGFBQWE7QUFDYix1Q0FBdUM7QUFDdkMseUNBQXlDO0FBQ3pDLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsMkRBQTJEO0FBQzNELGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsZ0RBQWdEO0FBQ2hELDBEQUEwRDtBQUMxRCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsZ0RBQWdEO0FBQ2hELCtEQUErRDtBQUMvRCxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsb0VBQW9FO0FBQ3BFLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsd0NBQXdDO0FBQ3hDLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGVBQWU7QUFFZiwrQ0FBK0M7QUFDL0MsMEVBQTBFO0FBQzFFLG9GQUFvRjtBQUNwRixvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLHdGQUF3RjtBQUN4RixtREFBbUQ7QUFDbkQsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IscUVBQXFFO0FBQ3JFLHFFQUFxRTtBQUNyRSxtRUFBbUU7QUFDbkUsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci1yZXNwb25zaXZlL2luZGV4LmpzP2E5ODUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvbmF2QmFyUmVzcG9uc2l2ZS5tb2R1bGUuc2Nzc1wiO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbi8vIGNvbnN0IE5hdmJhckNvbXBvbmVudCA9ICgpID0+IHtcbi8vICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuXG4vLyAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuLy8gICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4vLyAgIH07XG5cbi8vICAgY29uc3QgY2xvc2VEcm9wZG93biA9IChldmVudCkgPT4ge1xuLy8gICAgIGlmIChkcm9wZG93blJlZi5jdXJyZW50ICYmICFkcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbi8vICAgICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbi8vICAgICB9XG4vLyAgIH07XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRHJvcGRvd24pO1xuXG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEcm9wZG93bik7XG4vLyAgICAgfTtcbi8vICAgfSwgW10pO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2Y29udH0+XG4vLyAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5uYXZ9PlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbm5hdn0+SG9tZTwvc3Bhbj5cbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW5uYXZ9PlxuLy8gICAgICAgICAgICAgICA8TGluayBocmVmPVwiLi4vb3JkZXJzXCI+TmluamEmbmJzcDs8L0xpbms+XG4vLyAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICBCb3gmbmJzcDtcbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW5uYXZ9PlxuLy8gICAgICAgICAgICAgICA8TGluayBocmVmPVwiLi4vcHJvZmlsZVBhZ2VcIj5OaW5qYSZuYnNwOzwvTGluaz5cbi8vICAgICAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgICAgICAgIEJ1ZmZldFxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbm5hdn0+TWVhbCZuYnNwOzwvc3Bhbj5Cb3hcbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxub2JyPkFib3V0IFVzPC9ub2JyPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgPGxpPkJsb2c8L2xpPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8YSBocmVmPVwiLi9cIj5cbi8vICAgICAgICAgICA8SW1hZ2Vcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmltZ31cbi8vICAgICAgICAgICAgIHNyYz1cIi9jYXRlcm5pbmphLndlYnBcIlxuLy8gICAgICAgICAgICAgYWx0PVwiQ2F0ZXJOaW5qYS5jb20gTG9nb1wiXG4vLyAgICAgICAgICAgICB3aWR0aD17MjAwfVxuLy8gICAgICAgICAgICAgaGVpZ2h0PXs0NX1cbi8vICAgICAgICAgICAgIHByaW9yaXR5XG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgPC9hPlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUljb259PlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVCdG59IG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufT5cbi8vICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3VzZXIucG5nXCIgYWx0PVwicHJvZmlsZSBidG5cIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IC8+e1wiIFwifVxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZHJvcGRvd25NZW51fSAke2lzRHJvcGRvd25PcGVuID8gc3R5bGVzLm9wZW4gOiBcIlwifWB9XG4vLyAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbi8vICAgICAgICAgICAgIHJlZj17ZHJvcGRvd25SZWZ9XG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICB7LyogPHVsPiAqL31cbi8vICAgICAgICAgICA8bGk+IDxMaW5rIGhyZWY9XCIuLi9wcm9maWxlUGFnZVwiPk15IFByb2ZpbGU8L0xpbms+IDwvbGk+XG4vLyAgICAgICAgICAgPGxpPiAgPExpbmsgaHJlZj1cIi4uL3Byb2ZpbGVQYWdlXCI+TXkgT3JkZXJzPC9MaW5rPiA8L2xpPlxuLy8gICAgICAgICAgIDxsaT4gIDxMaW5rIGhyZWY9XCIuLi9wcm9maWxlUGFnZVwiPkxvZyBPdXQ8L0xpbms+IDwvbGk+XG4vLyAgICAgICAgICAgey8qIDwvdWw+ICovfVxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L25hdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE5hdmJhckNvbXBvbmVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar-responsive/index.js\n"));

/***/ }),

/***/ "./pages/profilePage.js":
/*!******************************!*\
  !*** ./pages/profilePage.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar-responsive */ \"./components/Navbar-responsive/index.js\");\n/* harmony import */ var _components_Navbar_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Navbar_responsive__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CaterNinja.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        type: \"text/css\",\n                        charset: \"UTF-8\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        type: \"text/css\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                lineNumber: 12,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Navbar_responsive__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"/Users/umanggoel/CN-website-copy/pages/profilePage.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSU1BO0FBSndEO0FBQ2pDO0FBQzhCO0FBR2pDO0FBR1gsU0FBU0s7SUFDdEIscUJBQ0U7OzBCQUNDLDhEQUFDSCxrREFBSUE7O2tDQUNGLDhEQUFDSTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUUsTUFBSzt3QkFDMUJDLFNBQVE7d0JBQ1JGLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ0Y7d0JBQ0NDLEtBQUk7d0JBQ0pFLE1BQUs7d0JBQ0xELE1BQUs7Ozs7Ozs7Ozs7OzswQkFHUCw4REFBQ1gsc0VBQWdCQTs7Ozs7OztBQUl6QjtLQXRCd0JJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGVQYWdlLmpzPzFiYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhclJlc3BvbnNpdmUgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiYXItcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvbmF2QmFyUmVzcG9uc2l2ZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYXRlck5pbmphLmNvbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgPE5hdmJhclJlc3BvbnNpdmUvPiBcbiAgICAgIFxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiTmF2YmFyUmVzcG9uc2l2ZSIsIkhlYWQiLCJzdHlsZXMiLCJSZWFjdCIsIkhvbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsImNoYXJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profilePage.js\n"));

/***/ })

});