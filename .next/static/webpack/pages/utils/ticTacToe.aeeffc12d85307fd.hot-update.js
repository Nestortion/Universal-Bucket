"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/utils/ticTacToe",{

/***/ "./others/jotaiTicTacToe.js":
/*!**********************************!*\
  !*** ./others/jotaiTicTacToe.js ***!
  \**********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IsClickedAtom\": function() { return /* binding */ IsClickedAtom; },\n/* harmony export */   \"changeHasWinnerAtom\": function() { return /* binding */ changeHasWinnerAtom; },\n/* harmony export */   \"changeIsClickedAtom\": function() { return /* binding */ changeIsClickedAtom; },\n/* harmony export */   \"changeMarkAtom\": function() { return /* binding */ changeMarkAtom; },\n/* harmony export */   \"changeTurnAtom\": function() { return /* binding */ changeTurnAtom; },\n/* harmony export */   \"hasWinnerAtom\": function() { return /* binding */ hasWinnerAtom; },\n/* harmony export */   \"markAtom\": function() { return /* binding */ markAtom; },\n/* harmony export */   \"readHasWinnerAtom\": function() { return /* binding */ readHasWinnerAtom; },\n/* harmony export */   \"readIsClickedAtom\": function() { return /* binding */ readIsClickedAtom; },\n/* harmony export */   \"readMarkAtom\": function() { return /* binding */ readMarkAtom; },\n/* harmony export */   \"readTurnAtom\": function() { return /* binding */ readTurnAtom; },\n/* harmony export */   \"resetGameAtom\": function() { return /* binding */ resetGameAtom; },\n/* harmony export */   \"resetScoreAtom\": function() { return /* binding */ resetScoreAtom; },\n/* harmony export */   \"scoreAtom\": function() { return /* binding */ scoreAtom; },\n/* harmony export */   \"turnAtom\": function() { return /* binding */ turnAtom; },\n/* harmony export */   \"updateScoreAtom\": function() { return /* binding */ updateScoreAtom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar turnAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(true);\nvar markAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImCross, {}, void 0, false, {\n    fileName: \"D:\\\\Desktop\\\\New folder\\\\Universal-Bucket\\\\others\\\\jotaiTicTacToe.js\",\n    lineNumber: 6,\n    columnNumber: 23\n}, undefined));\nvar scoreAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    x: 0,\n    o: 0\n});\nvar hasWinnerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(false);\n// const cellsAtom = atom([[1], [2], [3], [4], [5], [6], [7], [8], [9]])\nvar IsClickedAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(true);\nvar changeTurnAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(turnAtom, !get(turnAtom));\n});\nvar changeMarkAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(markAtom, get(turnAtom) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImCross, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\New folder\\\\Universal-Bucket\\\\others\\\\jotaiTicTacToe.js\",\n        lineNumber: 16,\n        columnNumber: 33\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegCircle, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\New folder\\\\Universal-Bucket\\\\others\\\\jotaiTicTacToe.js\",\n        lineNumber: 16,\n        columnNumber: 47\n    }, _this));\n});\nvar updateScoreAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(scoreAtom, scoreSetter(get(turnAtom), get(scoreAtom)));\n});\nfunction scoreSetter(boolean, atom) {\n    var score = atom;\n    if (boolean) {\n        score.x + 1;\n        return score;\n    } else {\n        score.o + 1;\n        return score;\n    }\n}\nvar changeHasWinnerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(hasWinnerAtom, true);\n});\nvar resetScoreAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(scoreAtom, {\n        x: 0,\n        o: 0\n    });\n});\nvar changeIsClickedAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(IsClickedAtom, !get(IsClickedAtom));\n});\nvar readMarkAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(function(get) {\n    return get(markAtom);\n});\nvar readTurnAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(function(get) {\n    return get(turnAtom);\n});\nvar readIsClickedAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(function(get) {\n    return get(IsClickedAtom);\n});\nvar readHasWinnerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(function(get) {\n    return get(hasWinnerAtom);\n});\n// const updateCellsAtom = atom(null, (get, set) => {\n//   set(cellsAtom, setCells(get(cellsAtom)))\n// })\n// function setCells(cells) {\n//   let currentCells = cells\n//   currentCells[cellNum] = [...currentCells[cellNum], turn ? 'x' : 'o']\n//   return currentCells\n// }\nvar resetGameAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set) {\n    set(turnAtom, true);\n    set(markAtom, /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImCross, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\New folder\\\\Universal-Bucket\\\\others\\\\jotaiTicTacToe.js\",\n        lineNumber: 64,\n        columnNumber: 17\n    }, _this));\n    set(hasWinnerAtom, false);\n    set(IsClickedAtom, true);\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxHQUFHO1dBQUtBLEdBQUcsQ0FBQ0YsYUFBYSxDQUFDO0NBQUEsQ0FBQztBQUMzRCxJQUFNZSxpQkFBaUIsR0FBR3hCLDJDQUFJLENBQUMsU0FBQ1csR0FBRztXQUFLQSxHQUFHLENBQUNILGFBQWEsQ0FBQztDQUFBLENBQUM7QUFFM0QscURBQXFEO0FBQ3JELDZDQUE2QztBQUM3QyxLQUFLO0FBRUwsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUU3Qix5RUFBeUU7QUFDekUsd0JBQXdCO0FBQ3hCLElBQUk7QUFDSixJQUFNaUIsYUFBYSxHQUFHekIsMkNBQUksQ0FBQyxJQUFJLEVBQUUsU0FBQ1csR0FBRyxFQUFFQyxHQUFHLEVBQUs7SUFDN0NBLEdBQUcsQ0FBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQztJQUNuQlMsR0FBRyxDQUFDUixRQUFRLGdCQUFFLDhEQUFDSCxtREFBTzs7OzthQUFHLENBQUM7SUFDMUJXLEdBQUcsQ0FBQ0osYUFBYSxFQUFFLEtBQUssQ0FBQztJQUN6QkksR0FBRyxDQUFDSCxhQUFhLEVBQUUsSUFBSSxDQUFDO0FBQzFCLENBQUMsQ0FBQztBQW1CRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9vdGhlcnMvam90YWlUaWNUYWNUb2UuanM/ZTk3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tIH0gZnJvbSAnam90YWknXHJcbmltcG9ydCB7IEltQ3Jvc3MgfSBmcm9tICdyZWFjdC1pY29ucy9pbSdcclxuaW1wb3J0IHsgRmFSZWdDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmNvbnN0IHR1cm5BdG9tID0gYXRvbSh0cnVlKVxyXG5jb25zdCBtYXJrQXRvbSA9IGF0b20oPEltQ3Jvc3MgLz4pXHJcbmNvbnN0IHNjb3JlQXRvbSA9IGF0b20oeyB4OiAwLCBvOiAwIH0pXHJcbmNvbnN0IGhhc1dpbm5lckF0b20gPSBhdG9tKGZhbHNlKVxyXG4vLyBjb25zdCBjZWxsc0F0b20gPSBhdG9tKFtbMV0sIFsyXSwgWzNdLCBbNF0sIFs1XSwgWzZdLCBbN10sIFs4XSwgWzldXSlcclxuY29uc3QgSXNDbGlja2VkQXRvbSA9IGF0b20odHJ1ZSlcclxuXHJcbmNvbnN0IGNoYW5nZVR1cm5BdG9tID0gYXRvbShudWxsLCAoZ2V0LCBzZXQpID0+IHtcclxuICBzZXQodHVybkF0b20sICFnZXQodHVybkF0b20pKVxyXG59KVxyXG5jb25zdCBjaGFuZ2VNYXJrQXRvbSA9IGF0b20obnVsbCwgKGdldCwgc2V0KSA9PiB7XHJcbiAgc2V0KG1hcmtBdG9tLCBnZXQodHVybkF0b20pID8gPEltQ3Jvc3MgLz4gOiA8RmFSZWdDaXJjbGUgLz4pXHJcbn0pXHJcblxyXG5jb25zdCB1cGRhdGVTY29yZUF0b20gPSBhdG9tKG51bGwsIChnZXQsIHNldCkgPT4ge1xyXG4gIHNldChzY29yZUF0b20sIHNjb3JlU2V0dGVyKGdldCh0dXJuQXRvbSksIGdldChzY29yZUF0b20pKSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIHNjb3JlU2V0dGVyKGJvb2xlYW4sIGF0b20pIHtcclxuICBsZXQgc2NvcmUgPSBhdG9tXHJcblxyXG4gIGlmIChib29sZWFuKSB7XHJcbiAgICBzY29yZS54ICsgMVxyXG4gICAgcmV0dXJuIHNjb3JlXHJcbiAgfSBlbHNlIHtcclxuICAgIHNjb3JlLm8gKyAxXHJcbiAgICByZXR1cm4gc2NvcmVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZUhhc1dpbm5lckF0b20gPSBhdG9tKG51bGwsIChnZXQsIHNldCkgPT4ge1xyXG4gIHNldChoYXNXaW5uZXJBdG9tLCB0cnVlKVxyXG59KVxyXG5cclxuY29uc3QgcmVzZXRTY29yZUF0b20gPSBhdG9tKG51bGwsIChnZXQsIHNldCkgPT4ge1xyXG4gIHNldChzY29yZUF0b20sIHsgeDogMCwgbzogMCB9KVxyXG59KVxyXG5cclxuY29uc3QgY2hhbmdlSXNDbGlja2VkQXRvbSA9IGF0b20obnVsbCwgKGdldCwgc2V0KSA9PiB7XHJcbiAgc2V0KElzQ2xpY2tlZEF0b20sICFnZXQoSXNDbGlja2VkQXRvbSkpXHJcbn0pXHJcblxyXG5jb25zdCByZWFkTWFya0F0b20gPSBhdG9tKChnZXQpID0+IGdldChtYXJrQXRvbSkpXHJcbmNvbnN0IHJlYWRUdXJuQXRvbSA9IGF0b20oKGdldCkgPT4gZ2V0KHR1cm5BdG9tKSlcclxuY29uc3QgcmVhZElzQ2xpY2tlZEF0b20gPSBhdG9tKChnZXQpID0+IGdldChJc0NsaWNrZWRBdG9tKSlcclxuY29uc3QgcmVhZEhhc1dpbm5lckF0b20gPSBhdG9tKChnZXQpID0+IGdldChoYXNXaW5uZXJBdG9tKSlcclxuXHJcbi8vIGNvbnN0IHVwZGF0ZUNlbGxzQXRvbSA9IGF0b20obnVsbCwgKGdldCwgc2V0KSA9PiB7XHJcbi8vICAgc2V0KGNlbGxzQXRvbSwgc2V0Q2VsbHMoZ2V0KGNlbGxzQXRvbSkpKVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gc2V0Q2VsbHMoY2VsbHMpIHtcclxuLy8gICBsZXQgY3VycmVudENlbGxzID0gY2VsbHNcclxuXHJcbi8vICAgY3VycmVudENlbGxzW2NlbGxOdW1dID0gWy4uLmN1cnJlbnRDZWxsc1tjZWxsTnVtXSwgdHVybiA/ICd4JyA6ICdvJ11cclxuLy8gICByZXR1cm4gY3VycmVudENlbGxzXHJcbi8vIH1cclxuY29uc3QgcmVzZXRHYW1lQXRvbSA9IGF0b20obnVsbCwgKGdldCwgc2V0KSA9PiB7XHJcbiAgc2V0KHR1cm5BdG9tLCB0cnVlKVxyXG4gIHNldChtYXJrQXRvbSwgPEltQ3Jvc3MgLz4pXHJcbiAgc2V0KGhhc1dpbm5lckF0b20sIGZhbHNlKVxyXG4gIHNldChJc0NsaWNrZWRBdG9tLCB0cnVlKVxyXG59KVxyXG5cclxuZXhwb3J0IHtcclxuICBjaGFuZ2VIYXNXaW5uZXJBdG9tLFxyXG4gIGNoYW5nZUlzQ2xpY2tlZEF0b20sXHJcbiAgY2hhbmdlTWFya0F0b20sXHJcbiAgY2hhbmdlVHVybkF0b20sXHJcbiAgdXBkYXRlU2NvcmVBdG9tLFxyXG4gIHR1cm5BdG9tLFxyXG4gIG1hcmtBdG9tLFxyXG4gIHNjb3JlQXRvbSxcclxuICBoYXNXaW5uZXJBdG9tLFxyXG4gIElzQ2xpY2tlZEF0b20sXHJcbiAgcmVzZXRHYW1lQXRvbSxcclxuICByZXNldFNjb3JlQXRvbSxcclxuICByZWFkSXNDbGlja2VkQXRvbSxcclxuICByZWFkTWFya0F0b20sXHJcbiAgcmVhZEhhc1dpbm5lckF0b20sXHJcbiAgcmVhZFR1cm5BdG9tLFxyXG59XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwiSW1Dcm9zcyIsIkZhUmVnQ2lyY2xlIiwidHVybkF0b20iLCJtYXJrQXRvbSIsInNjb3JlQXRvbSIsIngiLCJvIiwiaGFzV2lubmVyQXRvbSIsIklzQ2xpY2tlZEF0b20iLCJjaGFuZ2VUdXJuQXRvbSIsImdldCIsInNldCIsImNoYW5nZU1hcmtBdG9tIiwidXBkYXRlU2NvcmVBdG9tIiwic2NvcmVTZXR0ZXIiLCJib29sZWFuIiwic2NvcmUiLCJjaGFuZ2VIYXNXaW5uZXJBdG9tIiwicmVzZXRTY29yZUF0b20iLCJjaGFuZ2VJc0NsaWNrZWRBdG9tIiwicmVhZE1hcmtBdG9tIiwicmVhZFR1cm5BdG9tIiwicmVhZElzQ2xpY2tlZEF0b20iLCJyZWFkSGFzV2lubmVyQXRvbSIsInJlc2V0R2FtZUF0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./others/jotaiTicTacToe.js\n"));

/***/ })

});