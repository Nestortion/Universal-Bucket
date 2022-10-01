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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cell; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Styles_CellStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/CellStyled */ \"./Components/Styles/CellStyled.jsx\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Cell(param) {\n    var turn = param.turn, setTurn = param.setTurn, mark = param.mark, setMark = param.setMark, cellNum = param.cellNum, setCells = param.setCells, cells = param.cells;\n    var checkWinner = function checkWinner(cells) {\n        var winningCombination = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ], \n        ];\n        winningCombination.forEach(function(combination) {\n            if (!cells[combination[0]][1] || !cells[combination[1]][1] || !cells[combination[1]][1]) {\n                console.log(cells[1][1]);\n                console.log(\"no winner yet\");\n            } else if (cells[combination[0]][1] === cells[combination[1]][1] && cells[combination[1]][1] === cells[combination[2]][1]) {\n                console.log(\"\".concat(turn ? \"x\" : \"o\", \" is the winner\"));\n            }\n        });\n    };\n    var clickHandle = function clickHandle(e) {\n        e.preventDefault();\n        setTurn(!turn);\n        if (turn) {\n            setCellMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                lineNumber: 54,\n                columnNumber: 19\n            }, this));\n            setMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegCircle, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                lineNumber: 55,\n                columnNumber: 15\n            }, this));\n        } else {\n            setCellMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegCircle, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                lineNumber: 57,\n                columnNumber: 19\n            }, this));\n            setMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                lineNumber: 58,\n                columnNumber: 15\n            }, this));\n        }\n        if (isClicked) {\n            e.currentTarget.classList.add(\"isClicked\");\n            e.currentTarget.classList.remove(\"hover\");\n            setIsClicked(false);\n        }\n        e.currentTarget.classList.add(\"cell-marked\");\n        var currentCells = cells;\n        currentCells[cellNum] = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentCells[cellNum]).concat([\n            turn ? \"x\" : \"o\"\n        ]);\n        setCells(currentCells);\n        checkWinner(cells);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isClicked = ref[0], setIsClicked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n        lineNumber: 17,\n        columnNumber: 44\n    }, this)), cellMark = ref1[0], setCellMark = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_CellStyled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mark hover\",\n            onClick: isClicked ? clickHandle : null,\n            children: [\n                cellMark,\n                mark\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n};\n_s(Cell, \"mzEhsFcAjkrPmLSQkJ92cFlIQ6E=\");\n_c = Cell;\nvar _c;\n$RefreshReg$(_c, \"Cell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkO0FBQ0gsQ0FBQztHQTlFdUJILElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL1RpY1RhY1RvZS9DZWxsLmpzeD8zNzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDZWxsU3R5bGVkIGZyb20gJy4uL1N0eWxlcy9DZWxsU3R5bGVkJ1xyXG5pbXBvcnQgeyBJbUNyb3NzIH0gZnJvbSAncmVhY3QtaWNvbnMvaW0nXHJcbmltcG9ydCB7IEZhUmVnQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGwoe1xyXG4gIHR1cm4sXHJcbiAgc2V0VHVybixcclxuICBtYXJrLFxyXG4gIHNldE1hcmssXHJcbiAgY2VsbE51bSxcclxuICBzZXRDZWxscyxcclxuICBjZWxscyxcclxufSkge1xyXG4gIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBbY2VsbE1hcmssIHNldENlbGxNYXJrXSA9IHVzZVN0YXRlKDxJbUNyb3NzIC8+KVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1dpbm5lcihjZWxscykge1xyXG4gICAgY29uc3Qgd2lubmluZ0NvbWJpbmF0aW9uID0gW1xyXG4gICAgICBbMCwgMSwgMl0sXHJcbiAgICAgIFszLCA0LCA1XSxcclxuICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICBbMCwgMywgNl0sXHJcbiAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICBbMCwgNCwgOF0sXHJcbiAgICAgIFsyLCA0LCA2XSxcclxuICAgIF1cclxuXHJcbiAgICB3aW5uaW5nQ29tYmluYXRpb24uZm9yRWFjaCgoY29tYmluYXRpb24pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFjZWxsc1tjb21iaW5hdGlvblswXV1bMV0gfHxcclxuICAgICAgICAhY2VsbHNbY29tYmluYXRpb25bMV1dWzFdIHx8XHJcbiAgICAgICAgIWNlbGxzW2NvbWJpbmF0aW9uWzFdXVsxXVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjZWxsc1sxXVsxXSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHdpbm5lciB5ZXQnKVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGNlbGxzW2NvbWJpbmF0aW9uWzBdXVsxXSA9PT0gY2VsbHNbY29tYmluYXRpb25bMV1dWzFdICYmXHJcbiAgICAgICAgY2VsbHNbY29tYmluYXRpb25bMV1dWzFdID09PSBjZWxsc1tjb21iaW5hdGlvblsyXV1bMV1cclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dHVybiA/ICd4JyA6ICdvJ30gaXMgdGhlIHdpbm5lcmApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja0hhbmRsZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBzZXRUdXJuKCF0dXJuKVxyXG4gICAgaWYgKHR1cm4pIHtcclxuICAgICAgc2V0Q2VsbE1hcmsoPEltQ3Jvc3MgLz4pXHJcbiAgICAgIHNldE1hcmsoPEZhUmVnQ2lyY2xlIC8+KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q2VsbE1hcmsoPEZhUmVnQ2lyY2xlIC8+KVxyXG4gICAgICBzZXRNYXJrKDxJbUNyb3NzIC8+KVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQ2xpY2tlZCkge1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaXNDbGlja2VkJylcclxuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJylcclxuICAgICAgc2V0SXNDbGlja2VkKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWFya2VkJylcclxuXHJcbiAgICBsZXQgY3VycmVudENlbGxzID0gY2VsbHNcclxuXHJcbiAgICBjdXJyZW50Q2VsbHNbY2VsbE51bV0gPSBbLi4uY3VycmVudENlbGxzW2NlbGxOdW1dLCB0dXJuID8gJ3gnIDogJ28nXVxyXG5cclxuICAgIHNldENlbGxzKGN1cnJlbnRDZWxscylcclxuXHJcbiAgICBjaGVja1dpbm5lcihjZWxscylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2VsbFN0eWxlZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrIGhvdmVyXCIgb25DbGljaz17aXNDbGlja2VkID8gY2xpY2tIYW5kbGUgOiBudWxsfT5cclxuICAgICAgICB7Y2VsbE1hcmt9XHJcbiAgICAgICAge21hcmt9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DZWxsU3R5bGVkPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2VsbFN0eWxlZCIsIkltQ3Jvc3MiLCJGYVJlZ0NpcmNsZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2VsbCIsInR1cm4iLCJzZXRUdXJuIiwibWFyayIsInNldE1hcmsiLCJjZWxsTnVtIiwic2V0Q2VsbHMiLCJjZWxscyIsImNoZWNrV2lubmVyIiwid2lubmluZ0NvbWJpbmF0aW9uIiwiZm9yRWFjaCIsImNvbWJpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsImNsaWNrSGFuZGxlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0Q2VsbE1hcmsiLCJpc0NsaWNrZWQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0SXNDbGlja2VkIiwiY3VycmVudENlbGxzIiwiY2VsbE1hcmsiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/TicTacToe/Cell.jsx\n"));

/***/ })

});