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

/***/ "./Components/Header.jsx":
/*!*******************************!*\
  !*** ./Components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Styles_HeaderStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles/HeaderStyled */ \"./Components/Styles/HeaderStyled.jsx\");\n\n\n\nfunction Header(param) {\n    var headerText = param.headerText;\n    var _this = this;\n    var text = \"\".concat(headerText);\n    var content = text.split(\" \");\n    var singleWord;\n    if (!(content > 1)) {\n        singleWord = [\n            content[0].slice(0, Math.ceil(content[0].length / 2)),\n            content[0].slice(Math.ceil(content[0].length / 2), content[0].length), \n        ];\n    }\n    var color = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_HeaderStyled__WEBPACK_IMPORTED_MODULE_2__.HeaderStyled, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: headerText ? content.length > 1 ? content.map(function(word) {\n                color = !color;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    className: color ? \"primary\" : \"secondary\",\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this);\n            }) : singleWord.map(function(word) {\n                color = !color;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    className: color ? \"primary\" : \"secondary\",\n                    children: word\n                }, void 0, false, {\n                    fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: \"primary\",\n                        children: \"Welcome to the\\xa0\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: \"secondary\",\n                        children: \"Universal Bucket\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\Header.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBeUI7QUFDMkI7QUFFcEQsU0FBU0UsTUFBTSxDQUFDLEtBQWMsRUFBRTtRQUFoQixVQUFZLEdBQVosS0FBYyxDQUFaQyxVQUFVOztJQUMxQixJQUFNQyxJQUFJLEdBQUcsRUFBQyxDQUFhLE9BQVhELFVBQVUsQ0FBRTtJQUU1QixJQUFNRSxPQUFPLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUUvQixJQUFJQyxVQUFVO0lBRWQsSUFBSSxDQUFDLENBQUNGLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNsQkUsVUFBVSxHQUFHO1lBQ1hGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxJQUFJLENBQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ00sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JETixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ00sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNNLE1BQU0sQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxJQUFJQyxLQUFLLEdBQUcsS0FBSztJQUVqQixxQkFDRSw4REFBQ1gsOERBQVk7a0JBQ1gsNEVBQUNZLE1BQUk7c0JBQ0ZWLFVBQVUsR0FDVEUsT0FBTyxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxHQUNoQk4sT0FBTyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO2dCQUNwQkgsS0FBSyxHQUFHLENBQUNBLEtBQUs7Z0JBQ2QscUJBQ0UsOERBQUNJLFFBQU07b0JBQUNDLFNBQVMsRUFBRUwsS0FBSyxHQUFHLFNBQVMsR0FBRyxXQUFXOzt3QkFDL0NHLElBQUk7d0JBQUMsTUFDUjs7Ozs7O3lCQUFTLENBQ1Y7WUFDSCxDQUFDLENBQUMsR0FFRlIsVUFBVSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO2dCQUN2QkgsS0FBSyxHQUFHLENBQUNBLEtBQUs7Z0JBQ2QscUJBQ0UsOERBQUNJLFFBQU07b0JBQUNDLFNBQVMsRUFBRUwsS0FBSyxHQUFHLFNBQVMsR0FBRyxXQUFXOzhCQUMvQ0csSUFBSTs7Ozs7eUJBQ0UsQ0FDVjtZQUNILENBQUMsQ0FBQyxpQkFHSiw4REFBQ0YsTUFBSTs7a0NBQ0gsOERBQUNHLFFBQU07d0JBQUNDLFNBQVMsRUFBQyxTQUFTO2tDQUFDLG9CQUFvQjs7Ozs7NEJBQVM7a0NBQ3pELDhEQUFDRCxRQUFNO3dCQUFDQyxTQUFTLEVBQUMsV0FBVztrQ0FBQyxrQkFBZ0I7Ozs7OzRCQUFTOzs7Ozs7b0JBQ2xEOzs7OztnQkFFSjs7Ozs7WUFDTSxDQUNoQjtBQUNILENBQUM7QUFoRFFmLEtBQUFBLE1BQU07QUFrRGYsK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4P2MyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXJTdHlsZWQgfSBmcm9tICcuL1N0eWxlcy9IZWFkZXJTdHlsZWQnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBoZWFkZXJUZXh0IH0pIHtcclxuICBjb25zdCB0ZXh0ID0gYCR7aGVhZGVyVGV4dH1gXHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXh0LnNwbGl0KCcgJylcclxuXHJcbiAgbGV0IHNpbmdsZVdvcmRcclxuXHJcbiAgaWYgKCEoY29udGVudCA+IDEpKSB7XHJcbiAgICBzaW5nbGVXb3JkID0gW1xyXG4gICAgICBjb250ZW50WzBdLnNsaWNlKDAsIE1hdGguY2VpbChjb250ZW50WzBdLmxlbmd0aCAvIDIpKSxcclxuICAgICAgY29udGVudFswXS5zbGljZShNYXRoLmNlaWwoY29udGVudFswXS5sZW5ndGggLyAyKSwgY29udGVudFswXS5sZW5ndGgpLFxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgbGV0IGNvbG9yID0gZmFsc2VcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJTdHlsZWQ+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtoZWFkZXJUZXh0ID8gKFxyXG4gICAgICAgICAgY29udGVudC5sZW5ndGggPiAxID8gKFxyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgod29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yID0gIWNvbG9yXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjb2xvciA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfT5cclxuICAgICAgICAgICAgICAgICAge3dvcmR9Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBzaW5nbGVXb3JkLm1hcCgod29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yID0gIWNvbG9yXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjb2xvciA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfT5cclxuICAgICAgICAgICAgICAgICAge3dvcmR9XHJcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInByaW1hcnlcIj5XZWxjb21lIHRvIHRoZSZuYnNwOzwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPlVuaXZlcnNhbCBCdWNrZXQ8L3N0cm9uZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L0hlYWRlclN0eWxlZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXJTdHlsZWQiLCJIZWFkZXIiLCJoZWFkZXJUZXh0IiwidGV4dCIsImNvbnRlbnQiLCJzcGxpdCIsInNpbmdsZVdvcmQiLCJzbGljZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiY29sb3IiLCJzcGFuIiwibWFwIiwid29yZCIsInN0cm9uZyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Header.jsx\n"));

/***/ })

});