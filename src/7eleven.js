export function Store(actions = {}) {
  this.actions = actions;
  this.schemas = {};
  this.mutations = {};

  const actionKeys = Object.keys(this.actions);

  for (let i = 0, n = actionKeys.length; i < n; i++) {
    this.schemas[this.actions[actionKeys[i]].schemaName] = this.actions[actionKeys[i]].schema;
  }

  return this;
}

export function Schema(name, props, lockProps = true) {
  if ((typeof (props) !== 'object') || props.length) {
    return console.error('New Schemas must be initialized with an Object literal as the first argument.');
  }

  const propsKeys = Object.keys(props);

  for (let i = 0, n = propsKeys.length; i < n; i++) {
    this[propsKeys[i]] = lockProps ? Object.freeze(props[propsKeys[i]]) : props[propsKeys[i]];
  }

  this.name = name;
  this._isStoreMember = true;

  return this;
}

export function Action(type, schema) {
  if (!schema._isStoreMember) return console.error('New Actions must be initialized with a Schema Object as the second argument.');

  this.type = type;
  this.schemaName = schema.name;

  // eslint-disable-next-line no-param-reassign
  delete schema.name;

  this.schema = schema;

  return this;
}
