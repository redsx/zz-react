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
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
/******/ })
/************************************************************************/
/******/ ({

/***/ 182:
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */80);


/***/ }),

/***/ 183:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/React.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ReactElement = __webpack_require__(/*! ./ReactElement */ 185);\n\nvar _ReactElement2 = _interopRequireDefault(_ReactElement);\n\nvar _ReactDOMComponent = __webpack_require__(/*! ./ReactDOMComponent */ 184);\n\nvar _ReactDOMComponent2 = _interopRequireDefault(_ReactDOMComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    createElement: function createElement(type) {\n        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n        var children = arguments[2];\n\n        var props = {};\n        var key = config && config.key || null;\n        for (var propName in config) {\n            if (propName !== 'key' && config.hasOwnProperty(propName)) {\n                props[propName] = config[propName];\n            }\n        }\n        if (children) {\n            children = Array.isArray(children) ? children : [children];\n            children = children.concat(Array.prototype.slice.call(arguments, 3));\n            props.children = children;\n        }\n        return new _ReactElement2.default(type, key, props);\n    },\n    render: function render(component, container) {\n        var reactDom = new _ReactDOMComponent2.default(component);\n        var markup = reactDom.mountComponent();\n        container.innerHTML = markup;\n        var vd = component.props.children[1];\n        console.log(vd);\n        console.log(reactDom.getNode(vd, container, component));\n    }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9SZWFjdC5qcz8xZTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSAnLi9SZWFjdEVsZW1lbnQnO1xuaW1wb3J0IFJlYWN0RE9NQ29tcG9uZW50IGZyb20gJy4vUmVhY3RET01Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcgPSB7fSwgY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgY29uc3Qga2V5ID0gKGNvbmZpZyAmJiBjb25maWcua2V5KSB8fCBudWxsO1xuICAgICAgICBmb3IobGV0IHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYocHJvcE5hbWUgIT09ICdrZXknICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGNoaWxkcmVuKXtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpKTtcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCBwcm9wcyk7XG4gICAgfSxcbiAgICByZW5kZXIoY29tcG9uZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcmVhY3REb20gPSBuZXcgUmVhY3RET01Db21wb25lbnQoY29tcG9uZW50KVxuICAgICAgICBjb25zdCBtYXJrdXAgPSByZWFjdERvbS5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWFya3VwO1xuICAgICAgICBjb25zdCB2ZCA9IGNvbXBvbmVudC5wcm9wcy5jaGlsZHJlblsxXTtcbiAgICAgICAgY29uc29sZS5sb2codmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWFjdERvbS5nZXROb2RlKHZkLGNvbnRhaW5lcixjb21wb25lbnQpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9SZWFjdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 184:
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/ReactDOMComponent.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ReactMount2 = __webpack_require__(/*! ./ReactMount */ 186);\n\nvar _ReactMount3 = _interopRequireDefault(_ReactMount2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar singleTag = {\n    area: true,\n    base: true,\n    basefont: true,\n    br: true,\n    col: true,\n    command: true,\n    embed: true,\n    frame: true,\n    hr: true,\n    img: true,\n    input: true,\n    isindex: true,\n    keygen: true,\n    link: true,\n    meta: true,\n    param: true,\n    source: true,\n    track: true,\n    wbr: true\n},\n    DOMAttributeNames = {\n    className: 'class',\n    htmlFor: 'for',\n    strokeLinecap: 'stroke-linecap',\n    strokeWidth: 'stroke-width',\n    stopColor: 'stop-color',\n    stopOpacity: 'stop-opacity'\n};\n\nvar ReactDOMComponent = function (_ReactMount) {\n    _inherits(ReactDOMComponent, _ReactMount);\n\n    function ReactDOMComponent(element) {\n        _classCallCheck(this, ReactDOMComponent);\n\n        return _possibleConstructorReturn(this, (ReactDOMComponent.__proto__ || Object.getPrototypeOf(ReactDOMComponent)).call(this, element));\n    }\n\n    _createClass(ReactDOMComponent, [{\n        key: 'mountComponent',\n        value: function mountComponent() {\n            var type = this._element.type,\n                omitClose = !!singleTag[type],\n                _tageClose = omitClose ? '' : '</' + type + '>';\n            return this._createOpenMarkup() + this._createContentMarkup() + _tageClose;\n        }\n    }, {\n        key: '_createStyle',\n        value: function _createStyle(style) {\n            var reg = /[A-Z]/g;\n            var styleStr = '';\n            for (var key in style) {\n                var propName = key.replace(reg, function (c) {\n                    return '-' + c.toLowerCase();\n                });\n                styleStr += propName + ':' + style[key] + ';';\n            }\n            return styleStr;\n        }\n    }, {\n        key: '_createProperty',\n        value: function _createProperty() {\n            var props = this._element.props;\n            var propsStr = '';\n            for (var key in props) {\n                var value = props[key];\n                if (key === 'children') {\n                    continue;\n                } else if (key === 'style') {\n                    propsStr += 'style= ' + this._createStyle(value) + ' ';\n                } else if (DOMAttributeNames[key]) {\n                    propsStr += DOMAttributeNames[key] + '=' + value + ' ';\n                } else {\n                    propsStr += key + '=' + value + ' ';\n                }\n            }\n            return propsStr;\n        }\n    }, {\n        key: '_createOpenMarkup',\n        value: function _createOpenMarkup() {\n            var _element = this._element,\n                type = _element.type,\n                props = _element.props;\n\n            var omitClose = !!singleTag[type],\n                _tageProps = this._createProperty(props),\n                _tageOpen = '<' + type + ' ' + _tageProps + ' ' + (omitClose ? '>' : '/>');\n            return _tageOpen;\n        }\n    }, {\n        key: '_createContentMarkup',\n        value: function _createContentMarkup() {\n            // 今天暂定这样吧\n            var children = this._element.props.children,\n                childrenMarkup = '';\n            children = Array.isArray(children) ? children : [children];\n            children.forEach(function (ele) {\n                if (typeof ele === 'string') {\n                    childrenMarkup += ele;\n                } else {\n                    childrenMarkup += new ReactDOMComponent(ele).mountComponent();\n                }\n            });\n            return childrenMarkup;\n        }\n    }]);\n\n    return ReactDOMComponent;\n}(_ReactMount3.default);\n\nexports.default = ReactDOMComponent;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9SZWFjdERPTUNvbXBvbmVudC5qcz8yNDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vdW50IGZyb20gJy4vUmVhY3RNb3VudCc7XG5cbmNvbnN0IHNpbmdsZVRhZyA9IHtcbiAgICBhcmVhOiB0cnVlLFxuICAgIGJhc2U6IHRydWUsXG4gICAgYmFzZWZvbnQ6IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbW1hbmQ6IHRydWUsXG4gICAgZW1iZWQ6IHRydWUsXG4gICAgZnJhbWU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGlzaW5kZXg6IHRydWUsXG4gICAga2V5Z2VuOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgdHJhY2s6IHRydWUsXG4gICAgd2JyOiB0cnVlLFxufVxuLCBET01BdHRyaWJ1dGVOYW1lcyA9IHtcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgaHRtbEZvcjogJ2ZvcicsXG4gICAgc3Ryb2tlTGluZWNhcDogJ3N0cm9rZS1saW5lY2FwJyxcbiAgICBzdHJva2VXaWR0aDogJ3N0cm9rZS13aWR0aCcsXG4gICAgc3RvcENvbG9yOiAnc3RvcC1jb2xvcicsXG4gICAgc3RvcE9wYWNpdHk6ICdzdG9wLW9wYWNpdHknXG59O1xuXG5jbGFzcyBSZWFjdERPTUNvbXBvbmVudCBleHRlbmRzIFJlYWN0TW91bnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICB9XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9lbGVtZW50LnR5cGUsXG4gICAgICAgICAgICBvbWl0Q2xvc2UgPSAhIXNpbmdsZVRhZ1t0eXBlXSxcbiAgICAgICAgICAgIF90YWdlQ2xvc2UgPSBvbWl0Q2xvc2UgPyAnJyA6IGA8LyR7dHlwZX0+YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9wZW5NYXJrdXAoKSArXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVDb250ZW50TWFya3VwKCkgK1xuICAgICAgICAgICAgX3RhZ2VDbG9zZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9jcmVhdGVTdHlsZShzdHlsZSkge1xuICAgICAgICBjb25zdCByZWcgPSAvW0EtWl0vZztcbiAgICAgICAgbGV0IHN0eWxlU3RyID0gJyc7XG4gICAgICAgIGZvcihjb25zdCBrZXkgaW4gc3R5bGUpe1xuICAgICAgICAgICAgbGV0IHByb3BOYW1lID0ga2V5LnJlcGxhY2UocmVnLChjKT0+YC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgICAgIHN0eWxlU3RyICs9IGAke3Byb3BOYW1lfToke3N0eWxlW2tleV19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlU3RyO1xuICAgIH1cbiAgICBfY3JlYXRlUHJvcGVydHkoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5fZWxlbWVudC5wcm9wcztcbiAgICAgICAgbGV0IHByb3BzU3RyID0gJyc7XG4gICAgICAgIGZvcihjb25zdCAga2V5IGluIHByb3BzKXtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmKGtleSA9PT0gJ2NoaWxkcmVuJyl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSAnc3R5bGUnKXtcbiAgICAgICAgICAgICAgICBwcm9wc1N0ciArPSBgc3R5bGU9ICR7dGhpcy5fY3JlYXRlU3R5bGUodmFsdWUpfSBgO1xuICAgICAgICAgICAgfSBlbHNlIGlmKERPTUF0dHJpYnV0ZU5hbWVzW2tleV0pe1xuICAgICAgICAgICAgICAgIHByb3BzU3RyICs9IGAke0RPTUF0dHJpYnV0ZU5hbWVzW2tleV19PSR7dmFsdWV9IGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzU3RyICs9IGAke2tleX09JHt2YWx1ZX0gYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHNTdHI7XG4gICAgfVxuICAgIF9jcmVhdGVPcGVuTWFya3VwKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSB0aGlzLl9lbGVtZW50O1xuICAgICAgICBjb25zdCBvbWl0Q2xvc2UgPSAhIXNpbmdsZVRhZ1t0eXBlXSxcbiAgICAgICAgICAgIF90YWdlUHJvcHMgPSB0aGlzLl9jcmVhdGVQcm9wZXJ0eShwcm9wcyksXG4gICAgICAgICAgICBfdGFnZU9wZW4gPSBgPCR7dHlwZX0gJHtfdGFnZVByb3BzfSAke29taXRDbG9zZSA/ICc+JyA6ICcvPid9YDtcbiAgICAgICAgcmV0dXJuIF90YWdlT3BlbjtcbiAgICB9XG4gICAgX2NyZWF0ZUNvbnRlbnRNYXJrdXAoKSB7XG4gICAgICAgIC8vIOS7iuWkqeaaguWumui/meagt+WQp1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLl9lbGVtZW50LnByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgY2hpbGRyZW5NYXJrdXAgPSAnJztcbiAgICAgICAgY2hpbGRyZW4gPSAgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl07XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgICAgaWYodHlwZW9mIGVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbk1hcmt1cCArPSBlbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuTWFya3VwICs9IChuZXcgUmVhY3RET01Db21wb25lbnQoZWxlKSkubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbk1hcmt1cDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZWFjdERPTUNvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUmVhY3RET01Db21wb25lbnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQUE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUVBIiwic291cmNlUm9vdCI6IiJ9");

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
/*!***************************!*\
  !*** ./src/ReactMount.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ReactMount = function () {\n    function ReactMount(element) {\n        _classCallCheck(this, ReactMount);\n\n        console.log('super ReactMount');\n        this._element = element;\n    }\n\n    _createClass(ReactMount, [{\n        key: 'findNodePath',\n        value: function findNodePath(node, childNodes) {\n            var _this = this;\n\n            var i = childNodes.indexOf(node);\n            var path = [];\n            console.log(i);\n            if (i === -1) {\n                childNodes.every(function (child, index) {\n                    var children = child.props.children;\n                    if (!children || !children.length) {\n                        return false;\n                    }\n                    var tmp = _this.findNodePath(node, children);\n                    if (tmp) {\n                        path = tmp.concat(index);\n                        return false;\n                    }\n                    return true;\n                });\n                return path;\n            }\n            return [i];\n        }\n    }, {\n        key: 'getNode',\n        value: function getNode(node, container, ancestorNode) {\n            if (node.ref) {\n                return node.ref;\n            }\n            var indexes = this.findNodePath(node, [ancestorNode]);\n            if (!indexes) {\n                return console.error('');\n            }\n            var element = container.childNodes[0];\n            console.log(indexes);\n            indexes.forEach(function (index) {\n                element = element.childNodes[index];\n            });\n            return element;\n        }\n    }]);\n\n    return ReactMount;\n}();\n\nexports.default = ReactMount;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9SZWFjdE1vdW50LmpzPzI0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RNb3VudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBlciBSZWFjdE1vdW50Jyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBmaW5kTm9kZVBhdGgobm9kZSxjaGlsZE5vZGVzKXtcbiAgICAgICAgY29uc3QgaSA9IGNoaWxkTm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICAgICAgbGV0IHBhdGggPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgIGlmKGkgPT09IC0xKXtcbiAgICAgICAgICAgIGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBpZighY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gdGhpcy5maW5kTm9kZVBhdGgobm9kZSwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIGlmKHRtcCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdG1wLmNvbmNhdChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtpXTtcbiAgICB9XG4gICAgZ2V0Tm9kZShub2RlLCBjb250YWluZXIsIGFuY2VzdG9yTm9kZSl7XG4gICAgICAgIGlmKG5vZGUucmVmKXtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnJlZjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleGVzID0gdGhpcy5maW5kTm9kZVBhdGgobm9kZSwgW2FuY2VzdG9yTm9kZV0pO1xuICAgICAgICBpZighaW5kZXhlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJycpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXhlcyk7XG4gICAgICAgIGluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9SZWFjdE1vdW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUF4Q0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 80:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _React = __webpack_require__(/*! ./React */ 183);\n\nvar _React2 = _interopRequireDefault(_React);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar div2 = _React2.default.createElement('div', null, 'div2', 'div2 text'); // import React, {Component} from 'react';\n// import DOM, { render } from 'react-dom';\n\n// class Test extends Component {\n//     constructor(props){\n//         super(props);\n//     }\n//     render() {\n//         return <div data-time = {this.props.time}>test</div>\n//     }\n// }\n// function tick() {\n//     render(\n//         <Test time = {new Date()}/>,\n//         document.getElementById('app')\n//     );\n// }\n// setInterval(tick,1000);\n\nvar div1 = _React2.default.createElement('div', {\n    key: 1,\n    className: 'test',\n    style: {\n        textAlign: 'center',\n        color: 'red'\n    }\n}, 'div1', div2);\n\n_React2.default.render(div1, document.getElementById('app'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgRE9NLCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIH1cbi8vICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgIHJldHVybiA8ZGl2IGRhdGEtdGltZSA9IHt0aGlzLnByb3BzLnRpbWV9PnRlc3Q8L2Rpdj5cbi8vICAgICB9XG4vLyB9XG4vLyBmdW5jdGlvbiB0aWNrKCkge1xuLy8gICAgIHJlbmRlcihcbi8vICAgICAgICAgPFRlc3QgdGltZSA9IHtuZXcgRGF0ZSgpfS8+LFxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbi8vICAgICApO1xuLy8gfVxuLy8gc2V0SW50ZXJ2YWwodGljaywxMDAwKTtcblxuaW1wb3J0IHJlYWN0IGZyb20gJy4vUmVhY3QnO1xuXG5jb25zdCBkaXYyID0gcmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgICdkaXYyJyxcbiAgICAnZGl2MiB0ZXh0J1xuKVxuY29uc3QgZGl2MSA9IHJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAge1xuICAgICAgICBrZXk6IDEsXG4gICAgICAgIGNsYXNzTmFtZTogJ3Rlc3QnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2RpdjEnLFxuICAgIGRpdjJcbilcblxucmVhY3QucmVuZGVyKFxuICAgIGRpdjEsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBbUJBO0FBQ0E7Ozs7O0FBQ0E7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

/******/ });