(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['7eleven'] = {})));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function Store() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.state = initialState;
    this.schemas = {};
    this.actions = {};
    this.mutations = {};
  }
  function Schema(obj
  /* , lockSize = true */
  ) {
    if (_typeof(obj) !== 'object' || obj.isArray()) {
      return console.error('New Schemas must be initialized with an Object literal as the first argument.');
    }
  }

  Store.prototype.registerActions = function (actions) {
    // Use this instead of a for..in loop. For..in iterates over the entire prototype chain == bad.
    var actionsKeys = Object.keys(actions); // eslint-disable-next-line no-plusplus

    for (var i = 0, n = actionsKeys.length; i < n; i++) {
      this.actions = _objectSpread(_defineProperty({}, actionsKeys[i], actions[actionsKeys[i]]), this.actions);
    }

    return this.actions;
  };

  exports.Store = Store;
  exports.Schema = Schema;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
