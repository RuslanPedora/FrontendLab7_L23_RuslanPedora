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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_module__ = __webpack_require__(3);


 

let app;
//--------------------------------------------------------------------------------
class App {
    constructor() {
    }
    render() {
        __WEBPACK_IMPORTED_MODULE_0__render_module__["a" /* default */].render();
    }
}
//--------------------------------------------------------------------------------
window.onload = () => {
    app = new App();
    app.render();
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------------------------------------
function add(a, b) {
    return a + b;
}
//--------------------------------------------------------------------------------
function substruct(a, b) {
    return a - b;
}
//--------------------------------------------------------------------------------
function multiply(a, b) {
    return a * b;
}
//--------------------------------------------------------------------------------
function divide(a, b) {
    return a / b;
}
//--------------------------------------------------------------------------------
/* harmony default export */ __webpack_exports__["a"] = ({
    add,
    substruct,
    multiply,
    divide
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let outputEl;
//--------------------------------------------------------------------------------
function showResult(res) {
    if (!outputEl) {
        outputEl = document.getElementById('output');
    }
    outputEl.innerText = `Calculated value: ${res}`;
}
//--------------------------------------------------------------------------------
/* harmony default export */ __webpack_exports__["a"] = ({
    showResult
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calc_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output_module__ = __webpack_require__(2);
 
 
//--------------------------------------------------------------------------------
const crtEl = document.createElement.bind(document);
const crtTxt = document.createTextNode.bind(document);
const getEl = document.getElementById.bind(document)
//--------------------------------------------------------------------------------
const signMatcher = {
    '+': __WEBPACK_IMPORTED_MODULE_0__calc_module__["a" /* default */].add,
    '-': __WEBPACK_IMPORTED_MODULE_0__calc_module__["a" /* default */].substruct,
    '*': __WEBPACK_IMPORTED_MODULE_0__calc_module__["a" /* default */].multiply,
    '/': __WEBPACK_IMPORTED_MODULE_0__calc_module__["a" /* default */].divide
}
//--------------------------------------------------------------------------------
function checkOperands(a, b) {
    return isNaN(b) || Number.isNaN(b);
}
//--------------------------------------------------------------------------------
function render() {
    let appEl = getEl('app');
    let calcEl  = crtEl('div');
    let inputElop1;
    let inputElop2;
    let buttonEl = crtEl('button')
    let outputEl = crtEl('div');
    let selectEl = crtEl('select');

    inputElop1 = crtEl('input');
    inputElop1.type = 'number';
    inputElop1.placeholder = 'Input operand1';
    inputElop2 = crtEl('input');
    inputElop2.type = 'number';
    inputElop2.placeholder = 'Input operand2';
    
    selectEl.value = Object.keys(signMatcher)[ 0 ];
    for (let prop in signMatcher) {
        let optionEl = crtEl('option');

        optionEl.value = prop;
        optionEl.innerText = prop;
        selectEl.appendChild(optionEl);
    }

    buttonEl.innerText = ' = ';
    buttonEl.onclick = () => {
        let a = +inputElop1.value;
        let b = +inputElop2.value;

        if (checkOperands(a, b)) {
            alert('Both operands must be filled and each must be a number!');
            return;            
        }

        __WEBPACK_IMPORTED_MODULE_1__output_module__["a" /* default */].showResult(signMatcher[selectEl.value](a, b));
    }

    outputEl.id = 'output';
    outputEl.appendChild(crtTxt('?'));

    calcEl.id = 'calculator';
    calcEl.appendChild(crtEl('p')).appendChild(crtTxt('Calculator'));
    calcEl.appendChild(inputElop1);
    calcEl.appendChild(selectEl);
    calcEl.appendChild(inputElop2);
    calcEl.appendChild(buttonEl);
    calcEl.appendChild(outputEl);

    appEl.appendChild(calcEl);
}
//--------------------------------------------------------------------------------
/* harmony default export */ __webpack_exports__["a"] = ({
    render
});

/***/ })
/******/ ]);