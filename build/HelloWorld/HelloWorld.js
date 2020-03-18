/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux":
/*!***********************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!../common/component/card_box/card_box.ux?name=card_box */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux?name=card_box")
var $app_template$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!./HelloWorld.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux!./HelloWorld.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\HelloWorld\\HelloWorld.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\HelloWorld\\HelloWorld.ux!../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./HelloWorld.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux")

$app_define$('@app-component/HelloWorld', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/HelloWorld',{ packagerName:'fa-toolkit', packagerVersion: '2.2.0-Stable.301'})

/***/ }),

/***/ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/en-US.js":
/*!************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/GitHub/none/src/i18n/en-US.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = void 0;
var message = {
  KiwilimonCard: {
    "ability": {
      "name": "Kiwilímon",
      "logoUrl": "https://www.kiwilimon.com/favicon-32x32.png?v=6.5.26"
    },
    "content": {
      "menu": [{
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/155/th5-320x320-36809.jpg",
        "name": "Cake ",
        "subtitle": "Lorenza A.",
        "status": ""
      }, {
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/3037/th5-320x320-27155.jpg",
        "name": "Cheesecake",
        "subtitle": "D´Gari",
        "status": ""
      }, {
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/11662/th5-320x320-18263.jpg",
        "name": "Pay",
        "subtitle": "Monserrat",
        "status": ""
      }]
    }
  },
  buttonLinkArray: [{
    "buttonText": "See more"
  }]
};
exports.message = message;

/***/ }),

/***/ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/es-MX.js":
/*!************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/GitHub/none/src/i18n/es-MX.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = void 0;
var message = {
  KiwilimonCard: {
    "ability": {
      "name": "Kiwilímon",
      "logoUrl": "https://www.kiwilimon.com/favicon-32x32.png?v=6.5.26"
    },
    "content": {
      "menu": [{
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/155/th5-320x320-36809.jpg",
        "name": "Pastel ",
        "subtitle": "Lorenza A.",
        "status": ""
      }, {
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/3037/th5-320x320-27155.jpg",
        "name": "Cheesecake",
        "subtitle": "D´Gari",
        "status": ""
      }, {
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/11662/th5-320x320-18263.jpg",
        "name": "Pay ",
        "subtitle": "Monserrat",
        "status": ""
      }]
    }
  },
  buttonLinkArray: [{
    "buttonText": "Ver mas"
  }]
};
exports.message = message;

/***/ }),

/***/ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/zh-CN.js":
/*!************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/GitHub/none/src/i18n/zh-CN.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = void 0;
var message = {
  KiwilimonCard: {
    "ability": {
      "name": "Kiwilímon",
      "logoUrl": "https://www.kiwilimon.com/favicon-32x32.png?v=6.5.26"
    },
    "content": {
      "menu": [{
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/155/th5-320x320-36809.jpg",
        "name": "粉彩 ",
        "subtitle": "Lorenza A.",
        "status": ""
      }, {
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/3037/th5-320x320-27155.jpg",
        "name": "乳酪蛋糕",
        "subtitle": "D´Gari",
        "status": ""
      }, {
        "imageUrl": "https://cdn.kiwilimon.com/recetaimagen/11662/th5-320x320-18263.jpg",
        "name": "工资",
        "subtitle": "Monserrat",
        "status": ""
      }]
    }
  },
  buttonLinkArray: [{
    "buttonText": "看更多"
  }]
};
exports.message = message;

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\HelloWorld\\HelloWorld.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\HelloWorld\\HelloWorld.ux!../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux!c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".text-color-primary": {
    "color": "rgba(0,0,0,0.9)"
  },
  ".text-color-secondary": {
    "color": "rgba(0,0,0,0.6)"
  },
  ".text-color-tertiary": {
    "color": "rgba(0,0,0,0.38)"
  },
  ".contentBox": {
    "flexDirection": "column"
  },
  ".restaurant_title": {
    "fontSize": "37.5px",
    "color": "rgba(0,0,0,0.9)",
    "fontWeight": "500"
  },
  ".subtitle": {
    "fontSize": "29.16667px",
    "color": "rgba(0,0,0,0.6)",
    "fontWeight": "400",
    "marginLeft": "33.33333px"
  },
  ".range": {
    "fontSize": "29.16667px",
    "color": "rgba(0,0,0,0.6)",
    "fontWeight": "400",
    "marginBottom": "33.33333px"
  },
  ".menu": {
    "justifyContent": "space-between"
  },
  ".menu-item": {
    "flexDirection": "column",
    "alignItems": "flex-start"
  },
  ".menu-item image": {
    "borderRadius": "8.33333px",
    "marginBottom": "16.66667px",
    "width": "208.33333px",
    "height": "208.33333px"
  },
  ".newLabel": {
    "height": "41.66667px",
    "paddingTop": "12.5px",
    "paddingRight": "8.33333px",
    "paddingBottom": "12.5px",
    "paddingLeft": "8.33333px",
    "marginTop": "16.66667px",
    "marginLeft": "129.16667px",
    "fontSize": "20.83333px",
    "fontWeight": "400",
    "color": "#ffffff",
    "backgroundColor": "#FF7500",
    "borderRadius": "4.16667px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\common\\component\\card_box\\card_box.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\common\\component\\card_box\\card_box.ux!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux!c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".text-color-primary": {
    "color": "rgba(0,0,0,0.9)"
  },
  ".text-color-secondary": {
    "color": "rgba(0,0,0,0.6)"
  },
  ".text-color-tertiary": {
    "color": "rgba(0,0,0,0.38)"
  },
  ".card_box": {
    "flexDirection": "column",
    "paddingLeft": "33.33333px",
    "paddingRight": "33.33333px"
  },
  ".title_box": {
    "height": "100px",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title_logo": {
    "width": "33.33333px",
    "height": "33.33333px",
    "borderRadius": "8.33333px"
  },
  ".title": {
    "marginLeft": "16.66667px",
    "color": "rgba(0,0,0,0.9)",
    "fontSize": "25px"
  },
  ".button_box": {
    "height": "100px",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".menu": {
    "marginRight": "50px",
    "color": "#007dff",
    "fontWeight": "500",
    "fontSize": "29.16667px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "card_box",
  "attr": {
    "widgetid": "774e7eff-c8be-4a6e-8fba-dc7f29413793",
    "titleMsg": function () {return this.$t('message.KiwilimonCard.ability')},
    "menuMsg": function () {return this.$t('message.buttonLinkArray')}
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "contentBox"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "menu"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "menu-item"
              ],
              "repeat": function () {return this.$t('message.KiwilimonCard.content.menu')},
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": [
                    "stack"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.imageUrl}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.status}
                      },
                      "shown": function () {return this.$item.status==='NEW'},
                      "classList": [
                        "newLabel"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "id": "name",
                    "value": function () {return this.$item.name}
                  },
                  "classList": [
                    "food_name"
                  ],
                  "id": "name"
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.subtitle}
                  },
                  "classList": [
                    "food_price"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "card_box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title_box"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.titleMsg.logoUrl}
          },
          "classList": [
            "title_logo"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.titleMsg.name}
          },
          "classList": [
            "title"
          ]
        }
      ]
    },
    {
      "type": "slot",
      "attr": {}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "button_box"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.menuMsg},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.menuMsg[this.$idx].buttonText}
              },
              "classList": [
                "menu"
              ],
              "events": {
                "click": function(evt){this.menuClick(this.$idx,evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!c:/Users/Giovanny Corona/Documents/GitHub/none/src/HelloWorld/HelloWorld.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.configuration"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locales = {
  "zh-CN": __webpack_require__(/*! ../i18n/zh-CN.js */ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/zh-CN.js"),
  "en-US": __webpack_require__(/*! ../i18n/en-US.js */ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/en-US.js"),
  "es-MX": __webpack_require__(/*! ../i18n/es-MX.js */ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/es-MX.js"),
  "es-ES": __webpack_require__(/*! ../i18n/es-MX.js */ "../../Users/Giovanny Corona/Documents/GitHub/none/src/i18n/es-MX.js")
};

var localeObject = _system2["default"].getLocale();

var local = localeObject.language + '-' + localeObject.countryOrRegion;

if (local.includes("es")) {
  local = "es-MX";
} else {
  local = "en-US";
}

var $i18n = new I18n({
  locale: local,
  messages: locales,
  fallbackLocale: "".concat(local)
});
module.exports = {
  data: {
    i18n: $i18n
  },
  onInit: function onInit() {
    this.$on('menu-click', this.close1);
  },
  menuClick: function menuClick(event) {
    try {
      _system3["default"].getPackageInfo({
        packageName: "com.kiwilimon2",
        success: function success(data) {
          if (1 < 2) {
            _system4["default"].push({
              uri: "kiwilimonapp://www.kiwilimon.com/receta/botanas/botanas-con-salchicha/banderillas-con-salsa-picante"
            });
          }
        },
        fail: function fail(errormsg, errorcode) {
          _system4["default"].push({
            uri: "appmarket://details?id=com.kiwilimon2"
          });
        }
      });
    } catch (error) {}

    _system5["default"].hasInstalled({
      "package": "com.kiwilimon2",
      success: function success(data) {
        console.log("handling success: " + data.result);
      },
      fail: function fail(data, code) {
        _system4["default"].push({
          uri: "appmarket://details?id=com.kiwilimon2"
        });
      }
    });
  },
  close1: function close1() {
    var that = this;
    var content;

    _system["default"].fetch({
      url: "https://gr.kiwilimon.com/v6/feed?v=1&language=es&device=android&type=home&key=&order=3&quantity=4&page=1",
      responseType: 'text',
      method: "GET",
      success: function success(ret) {
        content = that.fetchData1 = "Fetch data:" + JSON.stringify(ret.data);
        that.showVar = true;
      },
      fail: function fail(msg, code) {
        console.log(msg, code);
      },
      complete: function complete() {
        console.log("complete gio");
        console.log(content);
      }
    });
  },
  close2: function close2() {}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['titleMsg', 'menuMsg'],
  menuClick: function menuClick(idx) {
    this.$dispatch('menu-click', {
      'idx': idx
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux?name=card_box":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux?name=card_box ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!./card_box.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux!./card_box.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\common\\component\\card_box\\card_box.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\GitHub\\none\\src\\common\\component\\card_box\\card_box.ux!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./card_box.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/GitHub/none/src/common/component/card_box/card_box.ux")

$app_define$('@app-component/card_box', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvV29ybGRcXEhlbGxvV29ybGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvR2l0SHViL25vbmUvc3JjL0hlbGxvV29ybGQvSGVsbG9Xb3JsZC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvaTE4bi9lbi1VUy5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvaTE4bi9lcy1NWC5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvaTE4bi96aC1DTi5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnV4P2Y2OTIiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvR2l0SHViL25vbmUvc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/N2IxMiIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnV4PzZjNTkiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvR2l0SHViL25vbmUvc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/NjMzOCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnV4P2JlZTUiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvR2l0SHViL25vbmUvc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/ZTMzZCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9HaXRIdWIvbm9uZS9zcmMvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JveC9jYXJkX2JveC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi9Vc2Vycy9HaW92YW5ueSBDb3JvbmEvRG9jdW1lbnRzL0dpdEh1Yi9ub25lL3NyYy9IZWxsb1dvcmxkL0hlbGxvV29ybGQudXhcIik7XG4iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4uL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/bmFtZT1jYXJkX2JveFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vSGVsbG9Xb3JsZC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcR2lvdmFubnkgQ29yb25hXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcbm9uZVxcXFxzcmNcXFxcSGVsbG9Xb3JsZFxcXFxIZWxsb1dvcmxkLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXEdpb3Zhbm55IENvcm9uYVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG5vbmVcXFxcc3JjXFxcXEhlbGxvV29ybGRcXFxcSGVsbG9Xb3JsZC51eCEuL0hlbGxvV29ybGQudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9IZWxsb1dvcmxkLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvSGVsbG9Xb3JsZCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvSGVsbG9Xb3JsZCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjIuMC1TdGFibGUuMzAxJ30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1lc3NhZ2UgPSB2b2lkIDA7XG52YXIgbWVzc2FnZSA9IHtcbiAgS2l3aWxpbW9uQ2FyZDoge1xuICAgIFwiYWJpbGl0eVwiOiB7XG4gICAgICBcIm5hbWVcIjogXCJLaXdpbMOtbW9uXCIsXG4gICAgICBcImxvZ29VcmxcIjogXCJodHRwczovL3d3dy5raXdpbGltb24uY29tL2Zhdmljb24tMzJ4MzIucG5nP3Y9Ni41LjI2XCJcbiAgICB9LFxuICAgIFwiY29udGVudFwiOiB7XG4gICAgICBcIm1lbnVcIjogW3tcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzE1NS90aDUtMzIweDMyMC0zNjgwOS5qcGdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FrZSBcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkxvcmVuemEgQS5cIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfSwge1xuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9jZG4ua2l3aWxpbW9uLmNvbS9yZWNldGFpbWFnZW4vMzAzNy90aDUtMzIweDMyMC0yNzE1NS5qcGdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2hlZXNlY2FrZVwiLFxuICAgICAgICBcInN1YnRpdGxlXCI6IFwiRMK0R2FyaVwiLFxuICAgICAgICBcInN0YXR1c1wiOiBcIlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL2Nkbi5raXdpbGltb24uY29tL3JlY2V0YWltYWdlbi8xMTY2Mi90aDUtMzIweDMyMC0xODI2My5qcGdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUGF5XCIsXG4gICAgICAgIFwic3VidGl0bGVcIjogXCJNb25zZXJyYXRcIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfV1cbiAgICB9XG4gIH0sXG4gIGJ1dHRvbkxpbmtBcnJheTogW3tcbiAgICBcImJ1dHRvblRleHRcIjogXCJTZWUgbW9yZVwiXG4gIH1dXG59O1xuZXhwb3J0cy5tZXNzYWdlID0gbWVzc2FnZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWVzc2FnZSA9IHZvaWQgMDtcbnZhciBtZXNzYWdlID0ge1xuICBLaXdpbGltb25DYXJkOiB7XG4gICAgXCJhYmlsaXR5XCI6IHtcbiAgICAgIFwibmFtZVwiOiBcIktpd2lsw61tb25cIixcbiAgICAgIFwibG9nb1VybFwiOiBcImh0dHBzOi8vd3d3Lmtpd2lsaW1vbi5jb20vZmF2aWNvbi0zMngzMi5wbmc/dj02LjUuMjZcIlxuICAgIH0sXG4gICAgXCJjb250ZW50XCI6IHtcbiAgICAgIFwibWVudVwiOiBbe1xuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9jZG4ua2l3aWxpbW9uLmNvbS9yZWNldGFpbWFnZW4vMTU1L3RoNS0zMjB4MzIwLTM2ODA5LmpwZ1wiLFxuICAgICAgICBcIm5hbWVcIjogXCJQYXN0ZWwgXCIsXG4gICAgICAgIFwic3VidGl0bGVcIjogXCJMb3JlbnphIEEuXCIsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzMwMzcvdGg1LTMyMHgzMjAtMjcxNTUuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNoZWVzZWNha2VcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkTCtEdhcmlcIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfSwge1xuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9jZG4ua2l3aWxpbW9uLmNvbS9yZWNldGFpbWFnZW4vMTE2NjIvdGg1LTMyMHgzMjAtMTgyNjMuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBheSBcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIk1vbnNlcnJhdFwiLFxuICAgICAgICBcInN0YXR1c1wiOiBcIlwiXG4gICAgICB9XVxuICAgIH1cbiAgfSxcbiAgYnV0dG9uTGlua0FycmF5OiBbe1xuICAgIFwiYnV0dG9uVGV4dFwiOiBcIlZlciBtYXNcIlxuICB9XVxufTtcbmV4cG9ydHMubWVzc2FnZSA9IG1lc3NhZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1lc3NhZ2UgPSB2b2lkIDA7XG52YXIgbWVzc2FnZSA9IHtcbiAgS2l3aWxpbW9uQ2FyZDoge1xuICAgIFwiYWJpbGl0eVwiOiB7XG4gICAgICBcIm5hbWVcIjogXCJLaXdpbMOtbW9uXCIsXG4gICAgICBcImxvZ29VcmxcIjogXCJodHRwczovL3d3dy5raXdpbGltb24uY29tL2Zhdmljb24tMzJ4MzIucG5nP3Y9Ni41LjI2XCJcbiAgICB9LFxuICAgIFwiY29udGVudFwiOiB7XG4gICAgICBcIm1lbnVcIjogW3tcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzE1NS90aDUtMzIweDMyMC0zNjgwOS5qcGdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi57KJ5b2pIFwiLFxuICAgICAgICBcInN1YnRpdGxlXCI6IFwiTG9yZW56YSBBLlwiLFxuICAgICAgICBcInN0YXR1c1wiOiBcIlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL2Nkbi5raXdpbGltb24uY29tL3JlY2V0YWltYWdlbi8zMDM3L3RoNS0zMjB4MzIwLTI3MTU1LmpwZ1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLkubPpharom4vns5VcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkTCtEdhcmlcIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfSwge1xuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9jZG4ua2l3aWxpbW9uLmNvbS9yZWNldGFpbWFnZW4vMTE2NjIvdGg1LTMyMHgzMjAtMTgyNjMuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIuW3pei1hFwiLFxuICAgICAgICBcInN1YnRpdGxlXCI6IFwiTW9uc2VycmF0XCIsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiXCJcbiAgICAgIH1dXG4gICAgfVxuICB9LFxuICBidXR0b25MaW5rQXJyYXk6IFt7XG4gICAgXCJidXR0b25UZXh0XCI6IFwi55yL5pu05aSaXCJcbiAgfV1cbn07XG5leHBvcnRzLm1lc3NhZ2UgPSBtZXNzYWdlOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi50ZXh0LWNvbG9yLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIlxuICB9LFxuICBcIi50ZXh0LWNvbG9yLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC42KVwiXG4gIH0sXG4gIFwiLnRleHQtY29sb3ItdGVydGlhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMzgpXCJcbiAgfSxcbiAgXCIuY29udGVudEJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIucmVzdGF1cmFudF90aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM3LjVweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIlxuICB9LFxuICBcIi5zdWJ0aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzMuMzMzMzNweFwiXG4gIH0sXG4gIFwiLnJhbmdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNilcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMzLjMzMzMzcHhcIlxuICB9LFxuICBcIi5tZW51XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLm1lbnUtaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiLm1lbnUtaXRlbSBpbWFnZVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjMzMzMzcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMjA4LjMzMzMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIwOC4zMzMzM3B4XCJcbiAgfSxcbiAgXCIubmV3TGFiZWxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNDEuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEyLjVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiOC4zMzMzM3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTIuNXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjguMzMzMzNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEyOS4xNjY2N3B4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIwLjgzMzMzcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGNzUwMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNC4xNjY2N3B4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi50ZXh0LWNvbG9yLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIlxuICB9LFxuICBcIi50ZXh0LWNvbG9yLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC42KVwiXG4gIH0sXG4gIFwiLnRleHQtY29sb3ItdGVydGlhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMzgpXCJcbiAgfSxcbiAgXCIuY2FyZF9ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMy4zMzMzM3B4XCJcbiAgfSxcbiAgXCIudGl0bGVfYm94XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50aXRsZV9sb2dvXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zMzMzM3B4XCJcbiAgfSxcbiAgXCIudGl0bGVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIlxuICB9LFxuICBcIi5idXR0b25fYm94XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tZW51XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA3ZGZmXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImNhcmRfYm94XCIsXG4gIFwiYXR0clwiOiB7XG4gICAgXCJ3aWRnZXRpZFwiOiBcIjc3NGU3ZWZmLWM4YmUtNGE2ZS04ZmJhLWRjN2YyOTQxMzc5M1wiLFxuICAgIFwidGl0bGVNc2dcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLktpd2lsaW1vbkNhcmQuYWJpbGl0eScpfSxcbiAgICBcIm1lbnVNc2dcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmJ1dHRvbkxpbmtBcnJheScpfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50Qm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm1lbnVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1lbnUtaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5LaXdpbGltb25DYXJkLmNvbnRlbnQubWVudScpfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGFja1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zdGF0dXM9PT0nTkVXJ30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmb29kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJuYW1lXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmb29kX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY2FyZF9ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZV9ib3hcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlTXNnLmxvZ29Vcmx9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlX2xvZ29cIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVNc2cubmFtZX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2xvdFwiLFxuICAgICAgXCJhdHRyXCI6IHt9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJidXR0b25fYm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tZW51TXNnfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1lbnVNc2dbdGhpcy4kaWR4XS5idXR0b25UZXh0fVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtZW51XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLm1lbnVDbGljayh0aGlzLiRpZHgsZXZ0KX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uY29uZmlndXJhdGlvblwiKSk7XG5cbnZhciBfc3lzdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5hcHBcIikpO1xuXG52YXIgX3N5c3RlbTQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxudmFyIF9zeXN0ZW01ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnBhY2thZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGxvY2FsZXMgPSB7XG4gIFwiemgtQ05cIjogcmVxdWlyZSgnLi4vaTE4bi96aC1DTi5qcycpLFxuICBcImVuLVVTXCI6IHJlcXVpcmUoJy4uL2kxOG4vZW4tVVMuanMnKSxcbiAgXCJlcy1NWFwiOiByZXF1aXJlKCcuLi9pMThuL2VzLU1YLmpzJyksXG4gIFwiZXMtRVNcIjogcmVxdWlyZSgnLi4vaTE4bi9lcy1NWC5qcycpXG59O1xuXG52YXIgbG9jYWxlT2JqZWN0ID0gX3N5c3RlbTJbXCJkZWZhdWx0XCJdLmdldExvY2FsZSgpO1xuXG52YXIgbG9jYWwgPSBsb2NhbGVPYmplY3QubGFuZ3VhZ2UgKyAnLScgKyBsb2NhbGVPYmplY3QuY291bnRyeU9yUmVnaW9uO1xuXG5pZiAobG9jYWwuaW5jbHVkZXMoXCJlc1wiKSkge1xuICBsb2NhbCA9IFwiZXMtTVhcIjtcbn0gZWxzZSB7XG4gIGxvY2FsID0gXCJlbi1VU1wiO1xufVxuXG52YXIgJGkxOG4gPSBuZXcgSTE4bih7XG4gIGxvY2FsZTogbG9jYWwsXG4gIG1lc3NhZ2VzOiBsb2NhbGVzLFxuICBmYWxsYmFja0xvY2FsZTogXCJcIi5jb25jYXQobG9jYWwpXG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgaTE4bjogJGkxOG5cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kb24oJ21lbnUtY2xpY2snLCB0aGlzLmNsb3NlMSk7XG4gIH0sXG4gIG1lbnVDbGljazogZnVuY3Rpb24gbWVudUNsaWNrKGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5nZXRQYWNrYWdlSW5mbyh7XG4gICAgICAgIHBhY2thZ2VOYW1lOiBcImNvbS5raXdpbGltb24yXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGlmICgxIDwgMikge1xuICAgICAgICAgICAgX3N5c3RlbTRbXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICAgICAgICB1cmk6IFwia2l3aWxpbW9uYXBwOi8vd3d3Lmtpd2lsaW1vbi5jb20vcmVjZXRhL2JvdGFuYXMvYm90YW5hcy1jb24tc2FsY2hpY2hhL2JhbmRlcmlsbGFzLWNvbi1zYWxzYS1waWNhbnRlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvcm1zZywgZXJyb3Jjb2RlKSB7XG4gICAgICAgICAgX3N5c3RlbTRbXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICAgICAgdXJpOiBcImFwcG1hcmtldDovL2RldGFpbHM/aWQ9Y29tLmtpd2lsaW1vbjJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIF9zeXN0ZW01W1wiZGVmYXVsdFwiXS5oYXNJbnN0YWxsZWQoe1xuICAgICAgXCJwYWNrYWdlXCI6IFwiY29tLmtpd2lsaW1vbjJcIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Y2Nlc3M6IFwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBfc3lzdGVtNFtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICAgICAgdXJpOiBcImFwcG1hcmtldDovL2RldGFpbHM/aWQ9Y29tLmtpd2lsaW1vbjJcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgY2xvc2UxOiBmdW5jdGlvbiBjbG9zZTEoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBjb250ZW50O1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZmV0Y2goe1xuICAgICAgdXJsOiBcImh0dHBzOi8vZ3Iua2l3aWxpbW9uLmNvbS92Ni9mZWVkP3Y9MSZsYW5ndWFnZT1lcyZkZXZpY2U9YW5kcm9pZCZ0eXBlPWhvbWUma2V5PSZvcmRlcj0zJnF1YW50aXR5PTQmcGFnZT0xXCIsXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmV0KSB7XG4gICAgICAgIGNvbnRlbnQgPSB0aGF0LmZldGNoRGF0YTEgPSBcIkZldGNoIGRhdGE6XCIgKyBKU09OLnN0cmluZ2lmeShyZXQuZGF0YSk7XG4gICAgICAgIHRoYXQuc2hvd1ZhciA9IHRydWU7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChtc2csIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnLCBjb2RlKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGUgZ2lvXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgY2xvc2UyOiBmdW5jdGlvbiBjbG9zZTIoKSB7fVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsndGl0bGVNc2cnLCAnbWVudU1zZyddLFxuICBtZW51Q2xpY2s6IGZ1bmN0aW9uIG1lbnVDbGljayhpZHgpIHtcbiAgICB0aGlzLiRkaXNwYXRjaCgnbWVudS1jbGljaycsIHtcbiAgICAgICdpZHgnOiBpZHhcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY2FyZF9ib3gudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXEdpb3Zhbm55IENvcm9uYVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG5vbmVcXFxcc3JjXFxcXGNvbW1vblxcXFxjb21wb25lbnRcXFxcY2FyZF9ib3hcXFxcY2FyZF9ib3gudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcR2lvdmFubnkgQ29yb25hXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcbm9uZVxcXFxzcmNcXFxcY29tbW9uXFxcXGNvbXBvbmVudFxcXFxjYXJkX2JveFxcXFxjYXJkX2JveC51eCEuL2NhcmRfYm94LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY2FyZF9ib3gudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9jYXJkX2JveCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9