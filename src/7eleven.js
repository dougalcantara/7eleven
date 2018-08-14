import { _deriveStorePropertiesFromActions } from './helpers';

export function Store(actions = {}) {
  this.actions = actions;
  this.schemas = {};
  this.mutations = {};
  this.state = {};

  _deriveStorePropertiesFromActions.call(this);

  return this;
}

export function Schema(name, props, lockProps = true) {
  if ((typeof (props) !== 'object') || props.length) {
    return console.error('New Schemas must be initialized with an Object literal as the second argument.');
  }

  const propsKeys = Object.keys(props);

  for (let i = 0, n = propsKeys.length; i < n; i++) {
    this[propsKeys[i]] = lockProps ? Object.freeze(props[propsKeys[i]]) : props[propsKeys[i]];
  }

  this.name = name;

  Object.defineProperty(this, '_isStoreMember', {
    enumerable: false,
    writable: false,
    value: true,
  });

  return this;
}

export function Action(type, schema) {
  if (!schema._isStoreMember) return console.error('New Actions must be initialized with a Schema Object as the second argument.');

  this.type = type;
  this.schemaName = schema.name;

  /* eslint no-param-reassign: ["error", { "props": false }] */
  delete schema.name;

  this.schema = schema;

  return this;
}

Action.prototype.forState = function (_forState = true) {
  Object.defineProperty(this, '_forState', {
    writable: false,
    enumerable: false,
    value: _forState,
  });

  return this;
};
