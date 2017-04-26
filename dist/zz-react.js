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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _React = __webpack_require__(/*! ./React */ 184);\n\nvar _React2 = _interopRequireDefault(_React);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_React2.default.render(_React2.default.createElement('div', {\n    key: 1,\n    className: 'test',\n    style: {\n        textAlign: 'center',\n        color: 'red'\n    }\n}, 'test1', 'test2'), document.getElementById('app')); // import React, {Component} from 'react';\n// import DOM, { render } from 'react-dom';//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgRE9NLCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCByZWFjdCBmcm9tICcuL1JlYWN0JztcbnJlYWN0LnJlbmRlcihcbiAgICByZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGVzdCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndGVzdDEnLFxuICAgICAgICAndGVzdDInXG4gICAgKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFHQTtBQUNBOzs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFOQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 184:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/React.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ReactElement = __webpack_require__(/*! ./ReactElement */ 185);\n\nvar _ReactElement2 = _interopRequireDefault(_ReactElement);\n\nvar _ReactDOMComponent = __webpack_require__(/*! ./ReactDOMComponent */ 186);\n\nvar _ReactDOMComponent2 = _interopRequireDefault(_ReactDOMComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    createElement: function createElement(type, config, children) {\n        var props = {};\n        var key = config.key || null;\n        for (var propName in config) {\n            if (propName !== 'key' && config.hasOwnProperty(propName)) {\n                props[propName] = config[propName];\n            }\n        }\n        if (children) {\n            children = Array.isArray(children) ? children : [children];\n            children = children.concat(Array.prototype.slice.call(arguments, 3));\n            props.children = children;\n        }\n        return new _ReactElement2.default(type, key, props);\n    },\n    render: function render(component, container) {\n        var markup = new _ReactDOMComponent2.default(component).mountComponent();\n        container.innerHTML = markup;\n    }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9SZWFjdC5qcz8xZTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSAnLi9SZWFjdEVsZW1lbnQnO1xuaW1wb3J0IFJlYWN0RE9NQ29tcG9uZW50IGZyb20gJy4vUmVhY3RET01Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIGNvbnN0IGtleSA9IGNvbmZpZy5rZXkgfHwgbnVsbDtcbiAgICAgICAgZm9yKGxldCBwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmKHByb3BOYW1lICE9PSAna2V5JyAmJiBjb25maWcuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihjaGlsZHJlbil7XG4gICAgICAgICAgICBjaGlsZHJlbiA9ICBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXTtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKSk7XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcHJvcHMpO1xuICAgIH0sXG4gICAgcmVuZGVyKGNvbXBvbmVudCwgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IG1hcmt1cCA9IChuZXcgUmVhY3RET01Db21wb25lbnQoY29tcG9uZW50KSkubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IG1hcmt1cDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9SZWFjdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 185:
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/ReactElement.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ReactElement = function ReactElement(type, key, props) {\n    _classCallCheck(this, ReactElement);\n\n    this.type = type;\n    this.props = props;\n    this.key = key;\n};\n\nexports.default = ReactElement;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9SZWFjdEVsZW1lbnQuanM/NTM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGtleSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZWFjdEVsZW1lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9SZWFjdEVsZW1lbnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 186:
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/ReactDOMComponent.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar singleTag = {\n    area: true,\n    base: true,\n    basefont: true,\n    br: true,\n    col: true,\n    command: true,\n    embed: true,\n    frame: true,\n    hr: true,\n    img: true,\n    input: true,\n    isindex: true,\n    keygen: true,\n    link: true,\n    meta: true,\n    param: true,\n    source: true,\n    track: true,\n    wbr: true\n},\n    DOMAttributeNames = {\n    className: 'class',\n    htmlFor: 'for',\n    strokeLinecap: 'stroke-linecap',\n    strokeWidth: 'stroke-width',\n    stopColor: 'stop-color',\n    stopOpacity: 'stop-opacity'\n};\n\nvar ReactDOMComponent = function () {\n    function ReactDOMComponent(element) {\n        _classCallCheck(this, ReactDOMComponent);\n\n        console.log(element);\n        this._element = element;\n    }\n\n    _createClass(ReactDOMComponent, [{\n        key: 'mountComponent',\n        value: function mountComponent() {\n            var type = this._element.type,\n                omitClose = !!singleTag[type],\n                _tageClose = omitClose ? '' : '</' + type + '>';\n            return this._createOpenMarkup() + this._createContentMarkup() + _tageClose;\n        }\n    }, {\n        key: '_createStyle',\n        value: function _createStyle(style) {\n            var reg = /[A-Z]/g;\n            var styleStr = '';\n            for (var key in style) {\n                var propName = key.replace(reg, function (c) {\n                    return '-' + c.toLowerCase();\n                });\n                styleStr += propName + ':' + style[key] + ';';\n            }\n            return styleStr;\n        }\n    }, {\n        key: '_createProperty',\n        value: function _createProperty() {\n            var props = this._element.props;\n            var propsStr = '';\n            for (var key in props) {\n                var value = props[key];\n                if (key === 'children') {\n                    continue;\n                } else if (key === 'style') {\n                    propsStr += 'style= ' + this._createStyle(value) + ' ';\n                } else if (DOMAttributeNames[key]) {\n                    propsStr += DOMAttributeNames[key] + '=' + value + ' ';\n                } else {\n                    propsStr += key + '=' + value + ' ';\n                }\n            }\n            return propsStr;\n        }\n    }, {\n        key: '_createOpenMarkup',\n        value: function _createOpenMarkup() {\n            var _element = this._element,\n                type = _element.type,\n                props = _element.props;\n\n            var omitClose = !!singleTag[type],\n                _tageProps = this._createProperty(props),\n                _tageOpen = '<' + type + ' ' + _tageProps + ' ' + (omitClose ? '>' : '/>');\n            return _tageOpen;\n        }\n    }, {\n        key: '_createContentMarkup',\n        value: function _createContentMarkup() {\n            // 今天暂定这样吧\n            var children = this._element.props.children,\n                childrenString = '';\n            children = Array.isArray(children) ? children : [children];\n            children.forEach(function (ele) {\n                if (typeof ele === 'string') {\n                    childrenString += ele;\n                } else {\n                    childrenString += new ReactDOMComponent(ele).mountComponent();\n                }\n            });\n            return childrenString;\n        }\n    }]);\n\n    return ReactDOMComponent;\n}();\n\nexports.default = ReactDOMComponent;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9SZWFjdERPTUNvbXBvbmVudC5qcz8yNDczIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpbmdsZVRhZyA9IHtcbiAgICBhcmVhOiB0cnVlLFxuICAgIGJhc2U6IHRydWUsXG4gICAgYmFzZWZvbnQ6IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbW1hbmQ6IHRydWUsXG4gICAgZW1iZWQ6IHRydWUsXG4gICAgZnJhbWU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGlzaW5kZXg6IHRydWUsXG4gICAga2V5Z2VuOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgdHJhY2s6IHRydWUsXG4gICAgd2JyOiB0cnVlLFxufVxuLCBET01BdHRyaWJ1dGVOYW1lcyA9IHtcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgaHRtbEZvcjogJ2ZvcicsXG4gICAgc3Ryb2tlTGluZWNhcDogJ3N0cm9rZS1saW5lY2FwJyxcbiAgICBzdHJva2VXaWR0aDogJ3N0cm9rZS13aWR0aCcsXG4gICAgc3RvcENvbG9yOiAnc3RvcC1jb2xvcicsXG4gICAgc3RvcE9wYWNpdHk6ICdzdG9wLW9wYWNpdHknXG59O1xuXG5jbGFzcyBSZWFjdERPTUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9lbGVtZW50LnR5cGUsXG4gICAgICAgICAgICBvbWl0Q2xvc2UgPSAhIXNpbmdsZVRhZ1t0eXBlXSxcbiAgICAgICAgICAgIF90YWdlQ2xvc2UgPSBvbWl0Q2xvc2UgPyAnJyA6IGA8LyR7dHlwZX0+YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9wZW5NYXJrdXAoKSArXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVDb250ZW50TWFya3VwKCkgK1xuICAgICAgICAgICAgX3RhZ2VDbG9zZVxuICAgICAgICApO1xuICAgIH1cbiAgICBfY3JlYXRlU3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QgcmVnID0gL1tBLVpdL2c7XG4gICAgICAgIGxldCBzdHlsZVN0ciA9ICcnO1xuICAgICAgICBmb3IoY29uc3Qga2V5IGluIHN0eWxlKXtcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IGtleS5yZXBsYWNlKHJlZywoYyk9PmAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgICAgICBzdHlsZVN0ciArPSBgJHtwcm9wTmFtZX06JHtzdHlsZVtrZXldfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVN0cjtcbiAgICB9XG4gICAgX2NyZWF0ZVByb3BlcnR5KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuX2VsZW1lbnQucHJvcHM7XG4gICAgICAgIGxldCBwcm9wc1N0ciA9ICcnO1xuICAgICAgICBmb3IoY29uc3QgIGtleSBpbiBwcm9wcyl7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICBpZihrZXkgPT09ICdjaGlsZHJlbicpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gJ3N0eWxlJyl7XG4gICAgICAgICAgICAgICAgcHJvcHNTdHIgKz0gYHN0eWxlPSAke3RoaXMuX2NyZWF0ZVN0eWxlKHZhbHVlKX0gYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZihET01BdHRyaWJ1dGVOYW1lc1trZXldKXtcbiAgICAgICAgICAgICAgICBwcm9wc1N0ciArPSBgJHtET01BdHRyaWJ1dGVOYW1lc1trZXldfT0ke3ZhbHVlfSBgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1N0ciArPSBgJHtrZXl9PSR7dmFsdWV9IGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzU3RyO1xuICAgIH1cbiAgICBfY3JlYXRlT3Blbk1hcmt1cCgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gdGhpcy5fZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb21pdENsb3NlID0gISFzaW5nbGVUYWdbdHlwZV0sXG4gICAgICAgICAgICBfdGFnZVByb3BzID0gdGhpcy5fY3JlYXRlUHJvcGVydHkocHJvcHMpLFxuICAgICAgICAgICAgX3RhZ2VPcGVuID0gYDwke3R5cGV9ICR7X3RhZ2VQcm9wc30gJHtvbWl0Q2xvc2UgPyAnPicgOiAnLz4nfWA7XG4gICAgICAgIHJldHVybiBfdGFnZU9wZW47XG4gICAgfVxuICAgIF9jcmVhdGVDb250ZW50TWFya3VwKCkge1xuICAgICAgICAvLyDku4rlpKnmmoLlrprov5nmoLflkKdcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5fZWxlbWVudC5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGNoaWxkcmVuU3RyaW5nID0gJyc7XG4gICAgICAgIGNoaWxkcmVuID0gIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5TdHJpbmcgKz0gZWxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblN0cmluZyArPSAobmV3IFJlYWN0RE9NQ29tcG9uZW50KGVsZSkpLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5TdHJpbmc7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVhY3RET01Db21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9SZWFjdERPTUNvbXBvbmVudC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUtBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 37:
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */17);


/***/ })

/******/ });