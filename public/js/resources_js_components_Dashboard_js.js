(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_js"],{

/***/ "./resources/js/components/Dashboard.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Dashboard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/Todo/actions */ "./resources/js/redux/Todo/actions.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Dashboard() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.authenticateReducer;
  }),
      name = _useSelector.name,
      email = _useSelector.email;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.todoReducer;
  }),
      todo = _useSelector2.todo,
      loader = _useSelector2.loader;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();

  var handleGetTodo = function handleGetTodo() {
    dispatch({
      type: _redux_Todo_actions__WEBPACK_IMPORTED_MODULE_1__.default.GET_TODO,
      payload: {
        'id': 'teste'
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "dashboard",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
      children: ["Name: ", name]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
      children: ["Email: ", email]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      children: todo
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loader,
      onClick: handleGetTodo,
      type: "primary",
      size: "large",
      children: "Load Todo"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

}]);