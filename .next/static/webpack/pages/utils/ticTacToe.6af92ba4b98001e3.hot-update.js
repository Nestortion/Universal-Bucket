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

/***/ "./Components/TicTacToe/Cell.jsx":
/*!***************************************!*\
  !*** ./Components/TicTacToe/Cell.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cell; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Styles_CellStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/CellStyled */ \"./Components/Styles/CellStyled.jsx\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nfunction Cell(param) {\n    var turn = param.turn, setTurn = param.setTurn, mark = param.mark, setMark = param.setMark, cellNum = param.cellNum, setCells = param.setCells, cells = param.cells, setHasWinner = param.setHasWinner, setScore = param.setScore, score = param.score, reset = param.reset, setReset = param.setReset;\n    var checkWinner = function checkWinner(cells) {\n        var winningCombination = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ], \n        ];\n        winningCombination.forEach(function(combination) {\n            if (!cells[combination[0]][1] || !cells[combination[1]][1] || !cells[combination[1]][1]) {} else if (cells[combination[0]][1] === cells[combination[1]][1] && cells[combination[1]][1] === cells[combination[2]][1]) {\n                setHasWinner(true);\n                setScore(turn ? score[0]++ : score[1]++);\n            }\n        });\n    };\n    if (!reset) {\n        var _$clickHandle = function _$clickHandle(e) {\n            e.preventDefault();\n            setTurn(!turn);\n            if (turn) {\n                setCellMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n                    fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this));\n                setMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegCircle, {}, void 0, false, {\n                    fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this));\n            } else {\n                setCellMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegCircle, {}, void 0, false, {\n                    fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this));\n                setMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n                    fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this));\n            }\n            if (_$isClicked) {\n                e.currentTarget.classList.add(\"isClicked\");\n                e.currentTarget.classList.remove(\"hover\");\n                setIsClicked(false);\n            }\n            e.currentTarget.classList.add(\"cell-marked\");\n            var currentCells = cells;\n            currentCells[cellNum] = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentCells[cellNum]).concat([\n                turn ? \"x\" : \"o\"\n            ]);\n            setCells(currentCells);\n            checkWinner(cells);\n        };\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), _$isClicked = ref[0], setIsClicked = ref[1];\n        var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n            fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n            lineNumber: 23,\n            columnNumber: 46\n        }, this)), _$cellMark = ref1[0], setCellMark = ref1[1];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_CellStyled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mark hover\",\n            onClick: isClicked ? _$clickHandle : null,\n            children: [\n                cellMark,\n                mark\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n};\n_c = Cell;\nvar _c;\n$RefreshReg$(_c, \"Cell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCw0RUFBQ2lDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFlBQVk7WUFBQ0MsT0FBTyxFQUFFVixTQUFTLEdBQUdKLGFBQVcsR0FBRyxJQUFJOztnQkFDaEVXLFFBQVE7Z0JBQ1J6QixJQUFJOzs7Ozs7Z0JBQ0Q7Ozs7O1lBQ0ssQ0FDZDtBQUNILENBQUM7QUFsRnVCSCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvVGljVGFjVG9lL0NlbGwuanN4PzM3MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGxTdHlsZWQgZnJvbSAnLi4vU3R5bGVzL0NlbGxTdHlsZWQnXHJcbmltcG9ydCB7IEltQ3Jvc3MgfSBmcm9tICdyZWFjdC1pY29ucy9pbSdcclxuaW1wb3J0IHsgRmFSZWdDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGwoe1xyXG4gIHR1cm4sXHJcbiAgc2V0VHVybixcclxuICBtYXJrLFxyXG4gIHNldE1hcmssXHJcbiAgY2VsbE51bSxcclxuICBzZXRDZWxscyxcclxuICBjZWxscyxcclxuICBzZXRIYXNXaW5uZXIsXHJcbiAgc2V0U2NvcmUsXHJcbiAgc2NvcmUsXHJcbiAgcmVzZXQsXHJcbiAgc2V0UmVzZXQsXHJcbn0pIHtcclxuICBpZiAoIXJlc2V0KSB7XHJcbiAgICBjb25zdCBbaXNDbGlja2VkLCBzZXRJc0NsaWNrZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICBjb25zdCBbY2VsbE1hcmssIHNldENlbGxNYXJrXSA9IHVzZVN0YXRlKDxJbUNyb3NzIC8+KVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICBzZXRUdXJuKCF0dXJuKVxyXG4gICAgICBpZiAodHVybikge1xyXG4gICAgICAgIHNldENlbGxNYXJrKDxJbUNyb3NzIC8+KVxyXG4gICAgICAgIHNldE1hcmsoPEZhUmVnQ2lyY2xlIC8+KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldENlbGxNYXJrKDxGYVJlZ0NpcmNsZSAvPilcclxuICAgICAgICBzZXRNYXJrKDxJbUNyb3NzIC8+KVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0NsaWNrZWQpIHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaXNDbGlja2VkJylcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKVxyXG4gICAgICAgIHNldElzQ2xpY2tlZChmYWxzZSlcclxuICAgICAgfVxyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnY2VsbC1tYXJrZWQnKVxyXG5cclxuICAgICAgbGV0IGN1cnJlbnRDZWxscyA9IGNlbGxzXHJcblxyXG4gICAgICBjdXJyZW50Q2VsbHNbY2VsbE51bV0gPSBbLi4uY3VycmVudENlbGxzW2NlbGxOdW1dLCB0dXJuID8gJ3gnIDogJ28nXVxyXG5cclxuICAgICAgc2V0Q2VsbHMoY3VycmVudENlbGxzKVxyXG4gICAgICBjaGVja1dpbm5lcihjZWxscylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrV2lubmVyKGNlbGxzKSB7XHJcbiAgICBjb25zdCB3aW5uaW5nQ29tYmluYXRpb24gPSBbXHJcbiAgICAgIFswLCAxLCAyXSxcclxuICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICBbNiwgNywgOF0sXHJcbiAgICAgIFswLCAzLCA2XSxcclxuICAgICAgWzEsIDQsIDddLFxyXG4gICAgICBbMiwgNSwgOF0sXHJcbiAgICAgIFswLCA0LCA4XSxcclxuICAgICAgWzIsIDQsIDZdLFxyXG4gICAgXVxyXG5cclxuICAgIHdpbm5pbmdDb21iaW5hdGlvbi5mb3JFYWNoKChjb21iaW5hdGlvbikgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWNlbGxzW2NvbWJpbmF0aW9uWzBdXVsxXSB8fFxyXG4gICAgICAgICFjZWxsc1tjb21iaW5hdGlvblsxXV1bMV0gfHxcclxuICAgICAgICAhY2VsbHNbY29tYmluYXRpb25bMV1dWzFdXHJcbiAgICAgICkge1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGNlbGxzW2NvbWJpbmF0aW9uWzBdXVsxXSA9PT0gY2VsbHNbY29tYmluYXRpb25bMV1dWzFdICYmXHJcbiAgICAgICAgY2VsbHNbY29tYmluYXRpb25bMV1dWzFdID09PSBjZWxsc1tjb21iaW5hdGlvblsyXV1bMV1cclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0SGFzV2lubmVyKHRydWUpXHJcbiAgICAgICAgc2V0U2NvcmUodHVybiA/IHNjb3JlWzBdKysgOiBzY29yZVsxXSsrKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDZWxsU3R5bGVkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmsgaG92ZXJcIiBvbkNsaWNrPXtpc0NsaWNrZWQgPyBjbGlja0hhbmRsZSA6IG51bGx9PlxyXG4gICAgICAgIHtjZWxsTWFya31cclxuICAgICAgICB7bWFya31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NlbGxTdHlsZWQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDZWxsU3R5bGVkIiwiSW1Dcm9zcyIsIkZhUmVnQ2lyY2xlIiwidXNlU3RhdGUiLCJDZWxsIiwidHVybiIsInNldFR1cm4iLCJtYXJrIiwic2V0TWFyayIsImNlbGxOdW0iLCJzZXRDZWxscyIsImNlbGxzIiwic2V0SGFzV2lubmVyIiwic2V0U2NvcmUiLCJzY29yZSIsInJlc2V0Iiwic2V0UmVzZXQiLCJjaGVja1dpbm5lciIsIndpbm5pbmdDb21iaW5hdGlvbiIsImZvckVhY2giLCJjb21iaW5hdGlvbiIsImNsaWNrSGFuZGxlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0Q2VsbE1hcmsiLCJpc0NsaWNrZWQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0SXNDbGlja2VkIiwiY3VycmVudENlbGxzIiwiY2VsbE1hcmsiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/TicTacToe/Cell.jsx\n"));

/***/ })

});