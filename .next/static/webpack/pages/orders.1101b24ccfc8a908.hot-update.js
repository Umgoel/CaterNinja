/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/dropdown.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/dropdown.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap\\\");\\n.dropdown_main__eB6BX {\\n  min-height: 100vh;\\n}\\n\\n.dropdown_container__WYfrk {\\n  display: flex;\\n  height: 100vh;\\n}\\n\\n.dropdown_multidropdownbox__yzikC {\\n  width: 50%;\\n  /* Add other styling as needed */\\n}\\n\\n.dropdown_ordersContainer__29XJM {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR {\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR .dropdown_selectedOptionsHeading__wEJWM {\\n  text-align: center;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR .dropdown_optionListItem__G_nfz {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin: 10px 0;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR .dropdown_optionListItem__G_nfz .dropdown_optionName__g1B8v {\\n  flex: 1 1;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR .dropdown_optionListItem__G_nfz .dropdown_quantityLabel__XVBQm {\\n  margin-right: 8px;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR .dropdown_optionListItem__G_nfz .dropdown_quantityInput__e_u4s {\\n  width: 40px;\\n}\\n.dropdown_ordersContainer__29XJM .dropdown_ordersList__XLxeR .dropdown_optionListItem__G_nfz .dropdown_deleteButton__js3Se {\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/dropdown.module.scss\"],\"names\":[],\"mappings\":\"AAAQ,wFAAA;AAER;EAME,iBAAA;AALF;;AAOA;EACE,aAAA;EAGA,aAAA;AANF;;AASA;EACE,UAAA;EACA,gCAAA;AANF;;AASA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AANF;AAQE;EACE,gBAAA;EACA,UAAA;EACA,SAAA;AANJ;AAQI;EACE,kBAAA;AANN;AASI;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,cAAA;AAPN;AASM;EACE,SAAA;AAPR;AAUM;EACE,iBAAA;AARR;AAWM;EACE,WAAA;AATR;AAYM;EACE,gBAAA;EACA,YAAA;EACA,eAAA;AAVR\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap\\\");\\n$font-family-base: Montserrat;\\n.main {\\n  // display: flex;\\n  // flex-direction: column;\\n  // justify-content: space-between;\\n  // align-items: center;\\n  // padding: 6rem;\\n  min-height: 100vh;\\n}\\n.container {\\n  display: flex;\\n  // justify-content: center; // Center items horizontally\\n  // align-items: center; // Center items vertically\\n  height: 100vh; // Adjust this to control the height of the container\\n}\\n\\n.multidropdownbox {\\n  width: 50%;\\n  /* Add other styling as needed */\\n}\\n\\n.ordersContainer {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\\n  .ordersList {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n\\n    .selectedOptionsHeading {\\n      text-align: center;\\n    }\\n\\n    .optionListItem {\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-between;\\n      margin: 10px 0;\\n\\n      .optionName {\\n        flex: 1;\\n      }\\n\\n      .quantityLabel {\\n        margin-right: 8px;\\n      }\\n\\n      .quantityInput {\\n        width: 40px;\\n      }\\n\\n      .deleteButton {\\n        background: none;\\n        border: none;\\n        cursor: pointer;\\n      }\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"dropdown_main__eB6BX\",\n\t\"container\": \"dropdown_container__WYfrk\",\n\t\"multidropdownbox\": \"dropdown_multidropdownbox__yzikC\",\n\t\"ordersContainer\": \"dropdown_ordersContainer__29XJM\",\n\t\"ordersList\": \"dropdown_ordersList__XLxeR\",\n\t\"selectedOptionsHeading\": \"dropdown_selectedOptionsHeading__wEJWM\",\n\t\"optionListItem\": \"dropdown_optionListItem__G_nfz\",\n\t\"optionName\": \"dropdown_optionName__g1B8v\",\n\t\"quantityLabel\": \"dropdown_quantityLabel__XVBQm\",\n\t\"quantityInput\": \"dropdown_quantityInput__e_u4s\",\n\t\"deleteButton\": \"dropdown_deleteButton__js3Se\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9kcm9wZG93bi5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EscUlBQXFJLHlCQUF5QixzQkFBc0IsR0FBRyxnQ0FBZ0Msa0JBQWtCLGtCQUFrQixHQUFHLHVDQUF1QyxlQUFlLHdDQUF3QyxzQ0FBc0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsZ0VBQWdFLHFCQUFxQixlQUFlLGNBQWMsR0FBRyx3R0FBd0csdUJBQXVCLEdBQUcsZ0dBQWdHLGtCQUFrQix3QkFBd0IsbUNBQW1DLG1CQUFtQixHQUFHLDRIQUE0SCxjQUFjLEdBQUcsK0hBQStILHNCQUFzQixHQUFHLCtIQUErSCxnQkFBZ0IsR0FBRyw4SEFBOEgscUJBQXFCLGlCQUFpQixvQkFBb0IsR0FBRyxPQUFPLGtHQUFrRyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsb0hBQW9ILGdDQUFnQyxTQUFTLHFCQUFxQiw4QkFBOEIsc0NBQXNDLDJCQUEyQixxQkFBcUIsc0JBQXNCLEdBQUcsY0FBYyxrQkFBa0IsZ0NBQWdDLHdEQUF3RCw2Q0FBNkMsd0RBQXdELHVCQUF1QixlQUFlLHdDQUF3QyxzQkFBc0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLG1CQUFtQix1QkFBdUIsaUJBQWlCLGdCQUFnQixpQ0FBaUMsMkJBQTJCLE9BQU8seUJBQXlCLHNCQUFzQiw0QkFBNEIsdUNBQXVDLHVCQUF1Qix1QkFBdUIsa0JBQWtCLFNBQVMsMEJBQTBCLDRCQUE0QixTQUFTLDBCQUEwQixzQkFBc0IsU0FBUyx5QkFBeUIsMkJBQTJCLHVCQUF1QiwwQkFBMEIsU0FBUyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDNXdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZHJvcGRvd24ubW9kdWxlLnNjc3M/ZmRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4uZHJvcGRvd25fbWFpbl9fZUI2Qlgge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5kcm9wZG93bl9jb250YWluZXJfX1dZZnJrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZHJvcGRvd25fbXVsdGlkcm9wZG93bmJveF9feXppa0Mge1xcbiAgd2lkdGg6IDUwJTtcXG4gIC8qIEFkZCBvdGhlciBzdHlsaW5nIGFzIG5lZWRlZCAqL1xcbn1cXG5cXG4uZHJvcGRvd25fb3JkZXJzQ29udGFpbmVyX18yOVhKTSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRyb3Bkb3duX29yZGVyc0NvbnRhaW5lcl9fMjlYSk0gLmRyb3Bkb3duX29yZGVyc0xpc3RfX1hMeGVSIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uZHJvcGRvd25fb3JkZXJzQ29udGFpbmVyX18yOVhKTSAuZHJvcGRvd25fb3JkZXJzTGlzdF9fWEx4ZVIgLmRyb3Bkb3duX3NlbGVjdGVkT3B0aW9uc0hlYWRpbmdfX3dFSldNIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRyb3Bkb3duX29yZGVyc0NvbnRhaW5lcl9fMjlYSk0gLmRyb3Bkb3duX29yZGVyc0xpc3RfX1hMeGVSIC5kcm9wZG93bl9vcHRpb25MaXN0SXRlbV9fR19uZnoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmRyb3Bkb3duX29yZGVyc0NvbnRhaW5lcl9fMjlYSk0gLmRyb3Bkb3duX29yZGVyc0xpc3RfX1hMeGVSIC5kcm9wZG93bl9vcHRpb25MaXN0SXRlbV9fR19uZnogLmRyb3Bkb3duX29wdGlvbk5hbWVfX2cxQjh2IHtcXG4gIGZsZXg6IDEgMTtcXG59XFxuLmRyb3Bkb3duX29yZGVyc0NvbnRhaW5lcl9fMjlYSk0gLmRyb3Bkb3duX29yZGVyc0xpc3RfX1hMeGVSIC5kcm9wZG93bl9vcHRpb25MaXN0SXRlbV9fR19uZnogLmRyb3Bkb3duX3F1YW50aXR5TGFiZWxfX1hWQlFtIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG4uZHJvcGRvd25fb3JkZXJzQ29udGFpbmVyX18yOVhKTSAuZHJvcGRvd25fb3JkZXJzTGlzdF9fWEx4ZVIgLmRyb3Bkb3duX29wdGlvbkxpc3RJdGVtX19HX25meiAuZHJvcGRvd25fcXVhbnRpdHlJbnB1dF9fZV91NHMge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcbi5kcm9wZG93bl9vcmRlcnNDb250YWluZXJfXzI5WEpNIC5kcm9wZG93bl9vcmRlcnNMaXN0X19YTHhlUiAuZHJvcGRvd25fb3B0aW9uTGlzdEl0ZW1fX0dfbmZ6IC5kcm9wZG93bl9kZWxldGVCdXR0b25fX2pzM1NlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZHJvcGRvd24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQVEsd0ZBQUE7QUFFUjtFQU1FLGlCQUFBO0FBTEY7O0FBT0E7RUFDRSxhQUFBO0VBR0EsYUFBQTtBQU5GOztBQVNBO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTkY7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFOSjtBQVFJO0VBQ0Usa0JBQUE7QUFOTjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBUE47QUFTTTtFQUNFLFNBQUE7QUFQUjtBQVVNO0VBQ0UsaUJBQUE7QUFSUjtBQVdNO0VBQ0UsV0FBQTtBQVRSO0FBWU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4kZm9udC1mYW1pbHktYmFzZTogTW9udHNlcnJhdDtcXG4ubWFpbiB7XFxuICAvLyBkaXNwbGF5OiBmbGV4O1xcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvLyBwYWRkaW5nOiA2cmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvLyBDZW50ZXIgaXRlbXMgaG9yaXpvbnRhbGx5XFxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyOyAvLyBDZW50ZXIgaXRlbXMgdmVydGljYWxseVxcbiAgaGVpZ2h0OiAxMDB2aDsgLy8gQWRqdXN0IHRoaXMgdG8gY29udHJvbCB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXJcXG59XFxuXFxuLm11bHRpZHJvcGRvd25ib3gge1xcbiAgd2lkdGg6IDUwJTtcXG4gIC8qIEFkZCBvdGhlciBzdHlsaW5nIGFzIG5lZWRlZCAqL1xcbn1cXG5cXG4ub3JkZXJzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgLm9yZGVyc0xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIC5zZWxlY3RlZE9wdGlvbnNIZWFkaW5nIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm9wdGlvbkxpc3RJdGVtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcblxcbiAgICAgIC5vcHRpb25OYW1lIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgfVxcblxcbiAgICAgIC5xdWFudGl0eUxhYmVsIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAucXVhbnRpdHlJbnB1dCB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlbGV0ZUJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwiZHJvcGRvd25fbWFpbl9fZUI2QlhcIixcblx0XCJjb250YWluZXJcIjogXCJkcm9wZG93bl9jb250YWluZXJfX1dZZnJrXCIsXG5cdFwibXVsdGlkcm9wZG93bmJveFwiOiBcImRyb3Bkb3duX211bHRpZHJvcGRvd25ib3hfX3l6aWtDXCIsXG5cdFwib3JkZXJzQ29udGFpbmVyXCI6IFwiZHJvcGRvd25fb3JkZXJzQ29udGFpbmVyX18yOVhKTVwiLFxuXHRcIm9yZGVyc0xpc3RcIjogXCJkcm9wZG93bl9vcmRlcnNMaXN0X19YTHhlUlwiLFxuXHRcInNlbGVjdGVkT3B0aW9uc0hlYWRpbmdcIjogXCJkcm9wZG93bl9zZWxlY3RlZE9wdGlvbnNIZWFkaW5nX193RUpXTVwiLFxuXHRcIm9wdGlvbkxpc3RJdGVtXCI6IFwiZHJvcGRvd25fb3B0aW9uTGlzdEl0ZW1fX0dfbmZ6XCIsXG5cdFwib3B0aW9uTmFtZVwiOiBcImRyb3Bkb3duX29wdGlvbk5hbWVfX2cxQjh2XCIsXG5cdFwicXVhbnRpdHlMYWJlbFwiOiBcImRyb3Bkb3duX3F1YW50aXR5TGFiZWxfX1hWQlFtXCIsXG5cdFwicXVhbnRpdHlJbnB1dFwiOiBcImRyb3Bkb3duX3F1YW50aXR5SW5wdXRfX2VfdTRzXCIsXG5cdFwiZGVsZXRlQnV0dG9uXCI6IFwiZHJvcGRvd25fZGVsZXRlQnV0dG9uX19qczNTZVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/dropdown.module.scss\n"));

/***/ })

});