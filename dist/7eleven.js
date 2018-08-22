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

  function _deriveStorePropertiesFromActions() {
    var actionKeys = Object.keys(this.actions);

    for (var i = 0, n = actionKeys.length; i < n; i++) {
      var thisSchemaName = this.actions[actionKeys[i]].schemaName;
      var thisSchema = this.actions[actionKeys[i]].schema;

      if (this.actions[actionKeys[i]]._forState) {
        this.state[thisSchemaName] = thisSchema;
      }

      this.schemas[thisSchemaName] = thisSchema;
    }
  }

  function Store() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.actions = actions;
    this.schemas = {};
    this.mutations = {};
    this.state = {};

    _deriveStorePropertiesFromActions.call(this);

    return this;
  }
  function Schema(name, props) {
    var lockProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (_typeof(props) !== 'object' || props.length) {
      return console.error('New Schemas must be initialized with an Object literal as the second argument.');
    }

    var propsKeys = Object.keys(props);

    for (var i = 0, n = propsKeys.length; i < n; i++) {
      this[propsKeys[i]] = lockProps ? Object.freeze(props[propsKeys[i]]) : props[propsKeys[i]];
    }

    this.name = name;
    Object.defineProperty(this, '_isStoreMember', {
      enumerable: false,
      writable: false,
      value: true
    });
    return this;
  }
  function Action(type, schema) {
    if (!schema._isStoreMember) return console.error('New Actions must be initialized with a Schema Object as the second argument.');
    this.type = type;
    this.schemaName = schema.name;
    /* eslint no-param-reassign: ["error", { "props": false }] */

    delete schema.name;
    this.schema = schema;
    return this;
  }

  Action.prototype.forState = function () {
    var _forState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    Object.defineProperty(this, '_forState', {
      writable: false,
      enumerable: false,
      value: _forState
    });
    return this;
  };

  exports.Store = Store;
  exports.Schema = Schema;
  exports.Action = Action;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
