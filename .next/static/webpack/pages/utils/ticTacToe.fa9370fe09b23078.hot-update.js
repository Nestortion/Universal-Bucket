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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cell; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Styles_CellStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/CellStyled */ \"./Components/Styles/CellStyled.jsx\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Cell(param) {\n    var turn = param.turn, setTurn = param.setTurn, mark = param.mark;\n    var clickHandle = function clickHandle(e) {\n        e.preventDefault();\n        if (turn) {\n            setCellMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                lineNumber: 14,\n                columnNumber: 19\n            }, this));\n        } else {\n            setCellMark(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegCircle, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n                lineNumber: 16,\n                columnNumber: 19\n            }, this));\n        }\n        if (isClicked) {\n            e.currentTarget.classList.add(\"isClicked\");\n        }\n        e.currentTarget.classList.add(\"cell-marked\");\n        console.log(turn);\n        setTurn(!turn);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isClicked = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.ImCross, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n        lineNumber: 9,\n        columnNumber: 44\n    }, this)), cellMark = ref1[0], setCellMark = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_CellStyled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mark\",\n            onClick: clickHandle,\n            children: cellMark\n        }, void 0, false, {\n            fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\Universal Bucket\\\\Components\\\\TicTacToe\\\\Cell.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Cell, \"mzEhsFcAjkrPmLSQkJ92cFlIQ6E=\");\n_c = Cell;\nvar _c;\n$RefreshReg$(_c, \"Cell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1RpY1RhY1RvZS9DZWxsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE2QztBQUNMO0FBQ0k7QUFDWjtBQUVqQixTQUFTSSxJQUFJLENBQUMsS0FBdUIsRUFBRTtRQUF2QkMsSUFBSSxHQUFOLEtBQXVCLENBQXJCQSxJQUFJLEVBQUVDLE9BQU8sR0FBZixLQUF1QixDQUFmQSxPQUFPLEVBQUVDLElBQUksR0FBckIsS0FBdUIsQ0FBTkEsSUFBSTtRQUt2Q0MsV0FBVyxHQUFwQixTQUFTQSxXQUFXLENBQUNDLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEIsSUFBSUwsSUFBSSxFQUFFO1lBQ1JNLFdBQVcsZUFBQyw4REFBQ1YsbURBQU87Ozs7b0JBQUcsQ0FBQztRQUMxQixPQUFPO1lBQ0xVLFdBQVcsZUFBQyw4REFBQ1QsdURBQVc7Ozs7b0JBQUcsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSVUsU0FBUyxFQUFFO1lBQ2JILENBQUMsQ0FBQ0ksYUFBYSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDNUMsQ0FBQztRQUNETixDQUFDLENBQUNJLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osSUFBSSxDQUFDO1FBQ2pCQyxPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO0lBQ2hCLENBQUM7O0lBakJELElBQW9CRixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQTNCUyxTQUFTLEdBQUlULEdBQWMsR0FBbEI7SUFFaEIsSUFBZ0NBLElBQXFCLEdBQXJCQSwrQ0FBUSxlQUFDLDhEQUFDRixtREFBTzs7OztZQUFHLENBQUMsRUFBOUNpQixRQUFRLEdBQWlCZixJQUFxQixHQUF0QyxFQUFFUSxXQUFXLEdBQUlSLElBQXFCLEdBQXpCO0lBZ0I1QixxQkFDRSw4REFBQ0gsMERBQVU7a0JBQ1QsNEVBQUNtQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxNQUFNO1lBQUNDLE9BQU8sRUFBRWIsV0FBVztzQkFDdkNVLFFBQVE7Ozs7O2dCQUNMOzs7OztZQUNLLENBQ2Q7QUFDSCxDQUFDO0dBMUJ1QmQsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvVGljVGFjVG9lL0NlbGwuanN4PzM3MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGxTdHlsZWQgZnJvbSAnLi4vU3R5bGVzL0NlbGxTdHlsZWQnXHJcbmltcG9ydCB7IEltQ3Jvc3MgfSBmcm9tICdyZWFjdC1pY29ucy9pbSdcclxuaW1wb3J0IHsgRmFSZWdDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGwoeyB0dXJuLCBzZXRUdXJuLCBtYXJrIH0pIHtcclxuICBjb25zdCBbaXNDbGlja2VkXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGNvbnN0IFtjZWxsTWFyaywgc2V0Q2VsbE1hcmtdID0gdXNlU3RhdGUoPEltQ3Jvc3MgLz4pXHJcblxyXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKHR1cm4pIHtcclxuICAgICAgc2V0Q2VsbE1hcmsoPEltQ3Jvc3MgLz4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDZWxsTWFyayg8RmFSZWdDaXJjbGUgLz4pXHJcbiAgICB9XHJcbiAgICBpZiAoaXNDbGlja2VkKSB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKVxyXG4gICAgfVxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWFya2VkJylcclxuICAgIGNvbnNvbGUubG9nKHR1cm4pXHJcbiAgICBzZXRUdXJuKCF0dXJuKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENlbGxTdHlsZWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya1wiIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfT5cclxuICAgICAgICB7Y2VsbE1hcmt9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DZWxsU3R5bGVkPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2VsbFN0eWxlZCIsIkltQ3Jvc3MiLCJGYVJlZ0NpcmNsZSIsInVzZVN0YXRlIiwiQ2VsbCIsInR1cm4iLCJzZXRUdXJuIiwibWFyayIsImNsaWNrSGFuZGxlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0Q2VsbE1hcmsiLCJpc0NsaWNrZWQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsImNlbGxNYXJrIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/TicTacToe/Cell.jsx\n"));

/***/ })

});