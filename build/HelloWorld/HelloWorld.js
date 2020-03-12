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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux":
/*!****************************************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!../common/component/card_box/card_box.ux?name=card_box */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux?name=card_box")
var $app_template$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!./HelloWorld.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux!./HelloWorld.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\HelloWorld\\HelloWorld.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\HelloWorld\\HelloWorld.ux!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./HelloWorld.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux")

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

/***/ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/en-US.js":
/*!*****************************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/en-US.js ***!
  \*****************************************************************************************/
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

/***/ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/es-MX.js":
/*!*****************************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/es-MX.js ***!
  \*****************************************************************************************/
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

/***/ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/zh-CN.js":
/*!*****************************************************************************************!*\
  !*** c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/zh-CN.js ***!
  \*****************************************************************************************/
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\HelloWorld\\HelloWorld.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\HelloWorld\\HelloWorld.ux!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\common\\component\\card_box\\card_box.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\common\\component\\card_box\\card_box.ux!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/HelloWorld/HelloWorld.ux ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.configuration"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locales = {
  "zh-CN": __webpack_require__(/*! ../i18n/zh-CN.js */ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/zh-CN.js"),
  "en-US": __webpack_require__(/*! ../i18n/en-US.js */ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/en-US.js"),
  "es-MX": __webpack_require__(/*! ../i18n/es-MX.js */ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/es-MX.js"),
  "es-ES": __webpack_require__(/*! ../i18n/es-MX.js */ "../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/i18n/es-MX.js")
};

var localeObject = _system["default"].getLocale();

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
    this.$on('menu-click', this.menuClick);
  },
  menuClick: function menuClick(event) {
    try {
      _system2["default"].getPackageInfo({
        packageName: "com.kiwilimon2",
        success: function success(data) {
          if (1 < 2) {
            _system3["default"].push({
              uri: "kiwilimonapp://www.kiwilimon.com/receta/botanas/botanas-con-salchicha/banderillas-con-salsa-picante"
            });
          }
        },
        fail: function fail(errormsg, errorcode) {
          _system3["default"].push({
            uri: "appmarket://details?id=com.kiwilimon2"
          });
        }
      });
    } catch (error) {}

    _system4["default"].hasInstalled({
      "package": "com.kiwilimon2",
      success: function success(data) {
        console.log("handling success: " + data.result);
      },
      fail: function fail(data, code) {
        _system3["default"].push({
          uri: "appmarket://details?id=com.kiwilimon2"
        });
      }
    });
  },
  close1: function close1() {},
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux?name=card_box":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/loader.js?type=component!c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux?name=card_box ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!./card_box.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-template-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=templates!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux!./card_box.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\common\\component\\card_box\\card_box.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\Giovanny Corona\\Documents\\card\\com.kiwilimon.smartcare\\src\\common\\component\\card_box\\card_box.ux!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!./card_box.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-fragment-loader.js?index=0&type=scripts!../../Users/Giovanny Corona/Documents/card/com.kiwilimon.smartcare/src/common/component/card_box/card_box.ux")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvV29ybGRcXEhlbGxvV29ybGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvY2FyZC9jb20ua2l3aWxpbW9uLnNtYXJ0Y2FyZS9zcmMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnV4Iiwid2VicGFjazovLy9jOi9Vc2Vycy9HaW92YW5ueSBDb3JvbmEvRG9jdW1lbnRzL2NhcmQvY29tLmtpd2lsaW1vbi5zbWFydGNhcmUvc3JjL2kxOG4vZW4tVVMuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvY2FyZC9jb20ua2l3aWxpbW9uLnNtYXJ0Y2FyZS9zcmMvaTE4bi9lcy1NWC5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9jYXJkL2NvbS5raXdpbGltb24uc21hcnRjYXJlL3NyYy9pMThuL3poLUNOLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy9HaW92YW5ueSBDb3JvbmEvRG9jdW1lbnRzL2NhcmQvY29tLmtpd2lsaW1vbi5zbWFydGNhcmUvc3JjL0hlbGxvV29ybGQvSGVsbG9Xb3JsZC51eD9lOWRlIiwid2VicGFjazovLy9jOi9Vc2Vycy9HaW92YW5ueSBDb3JvbmEvRG9jdW1lbnRzL2NhcmQvY29tLmtpd2lsaW1vbi5zbWFydGNhcmUvc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/OWU4YSIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9jYXJkL2NvbS5raXdpbGltb24uc21hcnRjYXJlL3NyYy9IZWxsb1dvcmxkL0hlbGxvV29ybGQudXg/ZmY0OSIsIndlYnBhY2s6Ly8vYzovVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9jYXJkL2NvbS5raXdpbGltb24uc21hcnRjYXJlL3NyYy9jb21tb24vY29tcG9uZW50L2NhcmRfYm94L2NhcmRfYm94LnV4PzlhYmQiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvY2FyZC9jb20ua2l3aWxpbW9uLnNtYXJ0Y2FyZS9zcmMvSGVsbG9Xb3JsZC9IZWxsb1dvcmxkLnV4P2ZjMWQiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL0dpb3Zhbm55IENvcm9uYS9Eb2N1bWVudHMvY2FyZC9jb20ua2l3aWxpbW9uLnNtYXJ0Y2FyZS9zcmMvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JveC9jYXJkX2JveC51eD8yNDYwIiwid2VicGFjazovLy9jOi9Vc2Vycy9HaW92YW5ueSBDb3JvbmEvRG9jdW1lbnRzL2NhcmQvY29tLmtpd2lsaW1vbi5zbWFydGNhcmUvc3JjL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXgiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vVXNlcnMvR2lvdmFubnkgQ29yb25hL0RvY3VtZW50cy9jYXJkL2NvbS5raXdpbGltb24uc21hcnRjYXJlL3NyYy9IZWxsb1dvcmxkL0hlbGxvV29ybGQudXhcIik7XG4iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4uL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3gvY2FyZF9ib3gudXg/bmFtZT1jYXJkX2JveFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vSGVsbG9Xb3JsZC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcR2lvdmFubnkgQ29yb25hXFxcXERvY3VtZW50c1xcXFxjYXJkXFxcXGNvbS5raXdpbGltb24uc21hcnRjYXJlXFxcXHNyY1xcXFxIZWxsb1dvcmxkXFxcXEhlbGxvV29ybGQudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcR2lvdmFubnkgQ29yb25hXFxcXERvY3VtZW50c1xcXFxjYXJkXFxcXGNvbS5raXdpbGltb24uc21hcnRjYXJlXFxcXHNyY1xcXFxIZWxsb1dvcmxkXFxcXEhlbGxvV29ybGQudXghLi9IZWxsb1dvcmxkLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vSGVsbG9Xb3JsZC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L0hlbGxvV29ybGQnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L0hlbGxvV29ybGQnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4yLjAtU3RhYmxlLjMwMSd9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tZXNzYWdlID0gdm9pZCAwO1xudmFyIG1lc3NhZ2UgPSB7XG4gIEtpd2lsaW1vbkNhcmQ6IHtcbiAgICBcImFiaWxpdHlcIjoge1xuICAgICAgXCJuYW1lXCI6IFwiS2l3aWzDrW1vblwiLFxuICAgICAgXCJsb2dvVXJsXCI6IFwiaHR0cHM6Ly93d3cua2l3aWxpbW9uLmNvbS9mYXZpY29uLTMyeDMyLnBuZz92PTYuNS4yNlwiXG4gICAgfSxcbiAgICBcImNvbnRlbnRcIjoge1xuICAgICAgXCJtZW51XCI6IFt7XG4gICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL2Nkbi5raXdpbGltb24uY29tL3JlY2V0YWltYWdlbi8xNTUvdGg1LTMyMHgzMjAtMzY4MDkuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNha2UgXCIsXG4gICAgICAgIFwic3VidGl0bGVcIjogXCJMb3JlbnphIEEuXCIsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzMwMzcvdGg1LTMyMHgzMjAtMjcxNTUuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkNoZWVzZWNha2VcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkTCtEdhcmlcIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfSwge1xuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9jZG4ua2l3aWxpbW9uLmNvbS9yZWNldGFpbWFnZW4vMTE2NjIvdGg1LTMyMHgzMjAtMTgyNjMuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBheVwiLFxuICAgICAgICBcInN1YnRpdGxlXCI6IFwiTW9uc2VycmF0XCIsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiXCJcbiAgICAgIH1dXG4gICAgfVxuICB9LFxuICBidXR0b25MaW5rQXJyYXk6IFt7XG4gICAgXCJidXR0b25UZXh0XCI6IFwiU2VlIG1vcmVcIlxuICB9XVxufTtcbmV4cG9ydHMubWVzc2FnZSA9IG1lc3NhZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1lc3NhZ2UgPSB2b2lkIDA7XG52YXIgbWVzc2FnZSA9IHtcbiAgS2l3aWxpbW9uQ2FyZDoge1xuICAgIFwiYWJpbGl0eVwiOiB7XG4gICAgICBcIm5hbWVcIjogXCJLaXdpbMOtbW9uXCIsXG4gICAgICBcImxvZ29VcmxcIjogXCJodHRwczovL3d3dy5raXdpbGltb24uY29tL2Zhdmljb24tMzJ4MzIucG5nP3Y9Ni41LjI2XCJcbiAgICB9LFxuICAgIFwiY29udGVudFwiOiB7XG4gICAgICBcIm1lbnVcIjogW3tcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzE1NS90aDUtMzIweDMyMC0zNjgwOS5qcGdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFzdGVsIFwiLFxuICAgICAgICBcInN1YnRpdGxlXCI6IFwiTG9yZW56YSBBLlwiLFxuICAgICAgICBcInN0YXR1c1wiOiBcIlwiXG4gICAgICB9LCB7XG4gICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL2Nkbi5raXdpbGltb24uY29tL3JlY2V0YWltYWdlbi8zMDM3L3RoNS0zMjB4MzIwLTI3MTU1LmpwZ1wiLFxuICAgICAgICBcIm5hbWVcIjogXCJDaGVlc2VjYWtlXCIsXG4gICAgICAgIFwic3VidGl0bGVcIjogXCJEwrRHYXJpXCIsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzExNjYyL3RoNS0zMjB4MzIwLTE4MjYzLmpwZ1wiLFxuICAgICAgICBcIm5hbWVcIjogXCJQYXkgXCIsXG4gICAgICAgIFwic3VidGl0bGVcIjogXCJNb25zZXJyYXRcIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfV1cbiAgICB9XG4gIH0sXG4gIGJ1dHRvbkxpbmtBcnJheTogW3tcbiAgICBcImJ1dHRvblRleHRcIjogXCJWZXIgbWFzXCJcbiAgfV1cbn07XG5leHBvcnRzLm1lc3NhZ2UgPSBtZXNzYWdlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tZXNzYWdlID0gdm9pZCAwO1xudmFyIG1lc3NhZ2UgPSB7XG4gIEtpd2lsaW1vbkNhcmQ6IHtcbiAgICBcImFiaWxpdHlcIjoge1xuICAgICAgXCJuYW1lXCI6IFwiS2l3aWzDrW1vblwiLFxuICAgICAgXCJsb2dvVXJsXCI6IFwiaHR0cHM6Ly93d3cua2l3aWxpbW9uLmNvbS9mYXZpY29uLTMyeDMyLnBuZz92PTYuNS4yNlwiXG4gICAgfSxcbiAgICBcImNvbnRlbnRcIjoge1xuICAgICAgXCJtZW51XCI6IFt7XG4gICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL2Nkbi5raXdpbGltb24uY29tL3JlY2V0YWltYWdlbi8xNTUvdGg1LTMyMHgzMjAtMzY4MDkuanBnXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIueyieW9qSBcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkxvcmVuemEgQS5cIixcbiAgICAgICAgXCJzdGF0dXNcIjogXCJcIlxuICAgICAgfSwge1xuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9jZG4ua2l3aWxpbW9uLmNvbS9yZWNldGFpbWFnZW4vMzAzNy90aDUtMzIweDMyMC0yNzE1NS5qcGdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi5Lmz6YWq6JuL57OVXCIsXG4gICAgICAgIFwic3VidGl0bGVcIjogXCJEwrRHYXJpXCIsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vY2RuLmtpd2lsaW1vbi5jb20vcmVjZXRhaW1hZ2VuLzExNjYyL3RoNS0zMjB4MzIwLTE4MjYzLmpwZ1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLlt6XotYRcIixcbiAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIk1vbnNlcnJhdFwiLFxuICAgICAgICBcInN0YXR1c1wiOiBcIlwiXG4gICAgICB9XVxuICAgIH1cbiAgfSxcbiAgYnV0dG9uTGlua0FycmF5OiBbe1xuICAgIFwiYnV0dG9uVGV4dFwiOiBcIueci+abtOWkmlwiXG4gIH1dXG59O1xuZXhwb3J0cy5tZXNzYWdlID0gbWVzc2FnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudGV4dC1jb2xvci1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCJcbiAgfSxcbiAgXCIudGV4dC1jb2xvci1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNilcIlxuICB9LFxuICBcIi50ZXh0LWNvbG9yLXRlcnRpYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjM4KVwiXG4gIH0sXG4gIFwiLmNvbnRlbnRCb3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnJlc3RhdXJhbnRfdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNy41cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCJcbiAgfSxcbiAgXCIuc3VidGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOS4xNjY2N3B4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzLjMzMzMzcHhcIlxuICB9LFxuICBcIi5yYW5nZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMy4zMzMzM3B4XCJcbiAgfSxcbiAgXCIubWVudVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5tZW51LWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcIi5tZW51LWl0ZW0gaW1hZ2VcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zMzMzM3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIwOC4zMzMzM3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDguMzMzMzNweFwiXG4gIH0sXG4gIFwiLm5ld0xhYmVsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQxLjY2NjY3cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMi41cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjguMzMzMzNweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEyLjVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI4LjMzMzMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMjkuMTY2NjdweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyMC44MzMzM3B4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRjc1MDBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQuMTY2NjdweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudGV4dC1jb2xvci1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCJcbiAgfSxcbiAgXCIudGV4dC1jb2xvci1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNilcIlxuICB9LFxuICBcIi50ZXh0LWNvbG9yLXRlcnRpYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjM4KVwiXG4gIH0sXG4gIFwiLmNhcmRfYm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzMuMzMzMzNweFwiXG4gIH0sXG4gIFwiLnRpdGxlX2JveFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGl0bGVfbG9nb1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMzMzMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzLjMzMzMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguMzMzMzNweFwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC45KVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCJcbiAgfSxcbiAgXCIuYnV0dG9uX2JveFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubWVudVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwN2RmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOS4xNjY2N3B4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJjYXJkX2JveFwiLFxuICBcImF0dHJcIjoge1xuICAgIFwid2lkZ2V0aWRcIjogXCI3NzRlN2VmZi1jOGJlLTRhNmUtOGZiYS1kYzdmMjk0MTM3OTNcIixcbiAgICBcInRpdGxlTXNnXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5LaXdpbGltb25DYXJkLmFiaWxpdHknKX0sXG4gICAgXCJtZW51TXNnXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5idXR0b25MaW5rQXJyYXknKX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudEJveFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJtZW51XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtZW51LWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuS2l3aWxpbW9uQ2FyZC5jb250ZW50Lm1lbnUnKX0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RhY2tcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3RhdHVzPT09J05FVyd9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmV3TGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZm9vZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZm9vZF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNhcmRfYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGl0bGVfYm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZU1zZy5sb2dvVXJsfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZV9sb2dvXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlTXNnLm5hbWV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInNsb3RcIixcbiAgICAgIFwiYXR0clwiOiB7fVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uX2JveFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWVudU1zZ30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tZW51TXNnW3RoaXMuJGlkeF0uYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibWVudVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5tZW51Q2xpY2sodGhpcy4kaWR4LGV2dCl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmNvbmZpZ3VyYXRpb25cIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uYXBwXCIpKTtcblxudmFyIF9zeXN0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbnZhciBfc3lzdGVtNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wYWNrYWdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBsb2NhbGVzID0ge1xuICBcInpoLUNOXCI6IHJlcXVpcmUoJy4uL2kxOG4vemgtQ04uanMnKSxcbiAgXCJlbi1VU1wiOiByZXF1aXJlKCcuLi9pMThuL2VuLVVTLmpzJyksXG4gIFwiZXMtTVhcIjogcmVxdWlyZSgnLi4vaTE4bi9lcy1NWC5qcycpLFxuICBcImVzLUVTXCI6IHJlcXVpcmUoJy4uL2kxOG4vZXMtTVguanMnKVxufTtcblxudmFyIGxvY2FsZU9iamVjdCA9IF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmdldExvY2FsZSgpO1xuXG52YXIgbG9jYWwgPSBsb2NhbGVPYmplY3QubGFuZ3VhZ2UgKyAnLScgKyBsb2NhbGVPYmplY3QuY291bnRyeU9yUmVnaW9uO1xuXG5pZiAobG9jYWwuaW5jbHVkZXMoXCJlc1wiKSkge1xuICBsb2NhbCA9IFwiZXMtTVhcIjtcbn0gZWxzZSB7XG4gIGxvY2FsID0gXCJlbi1VU1wiO1xufVxuXG52YXIgJGkxOG4gPSBuZXcgSTE4bih7XG4gIGxvY2FsZTogbG9jYWwsXG4gIG1lc3NhZ2VzOiBsb2NhbGVzLFxuICBmYWxsYmFja0xvY2FsZTogXCJcIi5jb25jYXQobG9jYWwpXG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgaTE4bjogJGkxOG5cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kb24oJ21lbnUtY2xpY2snLCB0aGlzLm1lbnVDbGljayk7XG4gIH0sXG4gIG1lbnVDbGljazogZnVuY3Rpb24gbWVudUNsaWNrKGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5nZXRQYWNrYWdlSW5mbyh7XG4gICAgICAgIHBhY2thZ2VOYW1lOiBcImNvbS5raXdpbGltb24yXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGlmICgxIDwgMikge1xuICAgICAgICAgICAgX3N5c3RlbTNbXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICAgICAgICB1cmk6IFwia2l3aWxpbW9uYXBwOi8vd3d3Lmtpd2lsaW1vbi5jb20vcmVjZXRhL2JvdGFuYXMvYm90YW5hcy1jb24tc2FsY2hpY2hhL2JhbmRlcmlsbGFzLWNvbi1zYWxzYS1waWNhbnRlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJvcm1zZywgZXJyb3Jjb2RlKSB7XG4gICAgICAgICAgX3N5c3RlbTNbXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICAgICAgdXJpOiBcImFwcG1hcmtldDovL2RldGFpbHM/aWQ9Y29tLmtpd2lsaW1vbjJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIF9zeXN0ZW00W1wiZGVmYXVsdFwiXS5oYXNJbnN0YWxsZWQoe1xuICAgICAgXCJwYWNrYWdlXCI6IFwiY29tLmtpd2lsaW1vbjJcIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Y2Nlc3M6IFwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICAgICAgdXJpOiBcImFwcG1hcmtldDovL2RldGFpbHM/aWQ9Y29tLmtpd2lsaW1vbjJcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgY2xvc2UxOiBmdW5jdGlvbiBjbG9zZTEoKSB7fSxcbiAgY2xvc2UyOiBmdW5jdGlvbiBjbG9zZTIoKSB7fVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsndGl0bGVNc2cnLCAnbWVudU1zZyddLFxuICBtZW51Q2xpY2s6IGZ1bmN0aW9uIG1lbnVDbGljayhpZHgpIHtcbiAgICB0aGlzLiRkaXNwYXRjaCgnbWVudS1jbGljaycsIHtcbiAgICAgICdpZHgnOiBpZHhcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY2FyZF9ib3gudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXEdpb3Zhbm55IENvcm9uYVxcXFxEb2N1bWVudHNcXFxcY2FyZFxcXFxjb20ua2l3aWxpbW9uLnNtYXJ0Y2FyZVxcXFxzcmNcXFxcY29tbW9uXFxcXGNvbXBvbmVudFxcXFxjYXJkX2JveFxcXFxjYXJkX2JveC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxHaW92YW5ueSBDb3JvbmFcXFxcRG9jdW1lbnRzXFxcXGNhcmRcXFxcY29tLmtpd2lsaW1vbi5zbWFydGNhcmVcXFxcc3JjXFxcXGNvbW1vblxcXFxjb21wb25lbnRcXFxcY2FyZF9ib3hcXFxcY2FyZF9ib3gudXghLi9jYXJkX2JveC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NhcmRfYm94LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvY2FyZF9ib3gnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=