(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/App.jsx":
/*!*********************!*\
  !*** ./app/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _modules_pages_newsletters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pages/newsletters */ \"./app/modules/pages/newsletters.jsx\");\n\n\n\n\n\n\nconst sitespeedStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      light: '#4b81a0',\n      main: '#155571',\n      dark: '#002c46',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff9f7c',\n      main: '#e36f4f',\n      dark: '#ac4025',\n      contrastText: '#fff'\n    },\n    background: {\n      default: '#f5f5f5'\n    }\n  },\n  props: {\n    MuiTextField: {\n      variant: 'outlined'\n    }\n  },\n  title: {\n    flexGrow: 1,\n    color: 'white',\n    textDecoration: 'none'\n  }\n});\n\nfunction App(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => setGlobalWait(true), []);\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./app/App.jsx?");

/***/ }),

/***/ "./app/components/newsletter-item.jsx":
/*!********************************************!*\
  !*** ./app/components/newsletter-item.jsx ***!
  \********************************************/
/*! exports provided: NewsletterItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsletterItem\", function() { return NewsletterItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\n\nfunction NewsletterItem(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => setGlobalWait(true), []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"newsletter-item\");\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterItem);\n\n//# sourceURL=webpack:///./app/components/newsletter-item.jsx?");

/***/ }),

/***/ "./app/components/newsletter-list.jsx":
/*!********************************************!*\
  !*** ./app/components/newsletter-list.jsx ***!
  \********************************************/
/*! exports provided: NewsletterList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsletterList\", function() { return NewsletterList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _newsletter_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsletter-item */ \"./app/components/newsletter-item.jsx\");\n/* harmony import */ var _subscribe_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribe-form */ \"./app/components/subscribe-form.jsx\");\n\n\n\n\n\n\n\nconst sitespeedStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      light: '#4b81a0',\n      main: '#155571',\n      dark: '#002c46',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff9f7c',\n      main: '#e36f4f',\n      dark: '#ac4025',\n      contrastText: '#fff'\n    },\n    background: {\n      default: '#f5f5f5'\n    }\n  },\n  props: {\n    MuiTextField: {\n      variant: 'outlined'\n    }\n  },\n  title: {\n    flexGrow: 1,\n    color: 'white',\n    textDecoration: 'none'\n  }\n});\nfunction NewsletterList(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => setGlobalWait(true), []);\n  return (\n    /*#__PURE__*/\n    // props.newsletters.map(n => (\n    //   <div>\n    //     <NewsletterItem item={n} />\n    //   </div>\n    // ));\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subscribe_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n  );\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterList);\n\n//# sourceURL=webpack:///./app/components/newsletter-list.jsx?");

/***/ }),

/***/ "./app/components/subscribe-form.jsx":
/*!*******************************************!*\
  !*** ./app/components/subscribe-form.jsx ***!
  \*******************************************/
/*! exports provided: SubscribeForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubscribeForm\", function() { return SubscribeForm; });\nfunction SubscribeForm(props) {}\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubscribeForm);\n\n//# sourceURL=webpack:///./app/components/subscribe-form.jsx?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./app/App.jsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/modules/pages/newsletters.jsx":
/*!*******************************************!*\
  !*** ./app/modules/pages/newsletters.jsx ***!
  \*******************************************/
/*! exports provided: Newsletter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Newsletter\", function() { return Newsletter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_newsletter_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/newsletter-list */ \"./app/components/newsletter-list.jsx\");\n\n\n\n\n\n\nconst sitespeedStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      light: '#4b81a0',\n      main: '#155571',\n      dark: '#002c46',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff9f7c',\n      main: '#e36f4f',\n      dark: '#ac4025',\n      contrastText: '#fff'\n    },\n    background: {\n      default: '#f5f5f5'\n    }\n  },\n  props: {\n    MuiTextField: {\n      variant: 'outlined'\n    }\n  },\n  title: {\n    flexGrow: 1,\n    color: 'white',\n    textDecoration: 'none'\n  }\n});\nfunction Newsletter(props) {\n  const [globalWait, setGlobalWait] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [newsletters, setNewsletters] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    title: 'People Who Have Not Seen Forrest Gump',\n    description: 'This is a short newsletter',\n    imageSrc: 'https://cdn.arstechnica.net/wp-content/uploads/2018/10/gump-1200-800x534.jpg',\n    selected: false\n  }, {\n    title: 'People Who Own More Than One Drill',\n    description: 'A Newsletter for drill enthusiasts',\n    imageSrc: 'https://toolconsult.com/wp-content/uploads/2016/01/top-10-best-cordless-drills-review.jpg',\n    selected: true\n  }, {\n    title: 'title',\n    description: 'desc',\n    imageSrc: 'img',\n    selected: false\n  }]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => setGlobalWait(true), []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"title\"\n  }, \" Newsletters \"), \"Select all the newsletters you'd like to receive\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_newsletter_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    newsletters: newsletters\n  }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Newsletter);\n\n//# sourceURL=webpack:///./app/modules/pages/newsletters.jsx?");

/***/ })

},[["./app/index.js","runtime","vendor"]]]);