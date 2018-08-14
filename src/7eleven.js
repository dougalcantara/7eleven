// eslint-disable-next-line no-underscore-dangle
function _updateStoreProperty(propertyName, obj) {
  const keys = Object.keys(obj);

  for (let i = 0, n = keys.length; i < n; i++) {
    this[propertyName] = {
      ...this[propertyName],
      [keys[i]]: obj[keys[i]],
    };
  }
}

// Store.schemas are derived from the actions passed to the Store constructor
export function Store(actions = {}) {
  this.schemas = {};
  this.actions = actions;
  this.mutations = {};

  const actionKeys = Object.keys(this.actions);

  for (let i = 0, n = actionKeys.length; i < n; i++) {
    this.schemas[actionKeys[i]] = {
      [actionKeys[i]]: this.actions[actionKeys[i]].schema,
    };
  }

  return this;
}

export function Schema(props, lockProps = true) {
  if ((typeof (props) !== 'object') || props.length) {
    return console.error('New Schemas must be initialized with an Object literal as the first argument.');
  }

  const propsKeys = Object.keys(props);

  for (let i = 0, n = propsKeys.length; i < n; i++) {
    this[propsKeys[i]] = lockProps ? Object.freeze(props[propsKeys[i]]) : props[propsKeys[i]];
  }

  this._isStoreMember = true;

  return this;
}

export function Action(type, schema) {
  if (!schema._isStoreMember) return console.error('New Actions must be initialized with a Schema Object as the second argument.');

  this.type = type;
  this.schema = schema;

  return this;
}

Store.prototype.registerActions = function (actions) {
  _updateStoreProperty.call(this, 'actions', actions);

  return this;
};
