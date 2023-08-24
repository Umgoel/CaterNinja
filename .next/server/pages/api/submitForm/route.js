"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/submitForm/route";
exports.ids = ["pages/api/submitForm/route"];
exports.modules = {

/***/ "../spec-extension/response":
/*!******************************************************************!*\
  !*** external "next/dist/server/web/spec-extension/response.js" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/response.js");

/***/ }),

/***/ "(api)/./pages/api/submitForm/route.js":
/*!***************************************!*\
  !*** ./pages/api/submitForm/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(api)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\nasync function POST(req) {\n    console.log(req);\n    const { fullname, email } = await req.json();\n    console.log(\"log inside API\");\n    console.log(\"Full Name\", fullname);\n    console.log(\"Email\", email);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        msg: \"hi from contact route\"\n    });\n} // return {\n //   statusCode: 200,\n //   body: JSON.stringify({\n //     msg: [\"hi from contact route\"],\n //   }),\n // };\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0Rm9ybS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUU1QixlQUFlQyxLQUFLQyxHQUFHO0lBQ3BDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxFQUFFRyxRQUFRLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1KLElBQUlLLElBQUk7SUFFMUNKLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUMsYUFBYUM7SUFDekJGLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRTtJQUVyQixPQUFPTix1RkFBaUIsQ0FBQztRQUN2QlEsS0FBSztJQUNQO0FBQ0YsRUFDRSxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQixzQ0FBc0M7Q0FDdEMsUUFBUTtDQUNSLEtBQUs7Q0FDUCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3BhZ2VzL2FwaS9zdWJtaXRGb3JtL3JvdXRlLmpzP2I0YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIGNvbnNvbGUubG9nKHJlcSlcbiAgY29uc3QgeyBmdWxsbmFtZSwgZW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coXCJsb2cgaW5zaWRlIEFQSVwiKTtcbiAgY29uc29sZS5sb2coXCJGdWxsIE5hbWVcIiwgZnVsbG5hbWUpO1xuICBjb25zb2xlLmxvZyhcIkVtYWlsXCIsIGVtYWlsKTtcbiAgXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgbXNnOiBcImhpIGZyb20gY29udGFjdCByb3V0ZVwiLFxuICB9KTtcbn1cbiAgLy8gcmV0dXJuIHtcbiAgLy8gICBzdGF0dXNDb2RlOiAyMDAsXG4gIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAvLyAgICAgbXNnOiBbXCJoaSBmcm9tIGNvbnRhY3Qgcm91dGVcIl0sXG4gIC8vICAgfSksXG4gIC8vIH07XG4vLyB9XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJmdWxsbmFtZSIsImVtYWlsIiwianNvbiIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/submitForm/route.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/web/exports/next-response.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/server/web/exports/next-response.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// This file is for modularized imports for next/server to get fully-treeshaking.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _response.NextResponse;\n    }\n}));\nconst _response = __webpack_require__(/*! ../spec-extension/response */ \"../spec-extension/response\");\n\n//# sourceMappingURL=next-response.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci93ZWIvZXhwb3J0cy9uZXh0LXJlc3BvbnNlLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ2E7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0IsbUJBQU8sQ0FBQyw4REFBNEI7O0FBRXREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanM/NmRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZm9yIG1vZHVsYXJpemVkIGltcG9ydHMgZm9yIG5leHQvc2VydmVyIHRvIGdldCBmdWxseS10cmVlc2hha2luZy5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3Jlc3BvbnNlLk5leHRSZXNwb25zZTtcbiAgICB9XG59KTtcbmNvbnN0IF9yZXNwb25zZSA9IHJlcXVpcmUoXCIuLi9zcGVjLWV4dGVuc2lvbi9yZXNwb25zZVwiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV4dC1yZXNwb25zZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/web/exports/next-response.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submitForm/route.js"));
module.exports = __webpack_exports__;

})();