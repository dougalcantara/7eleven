export function Store(initialState = {}) {
  this.state = initialState;
  this.schemas = {};
  this.actions = {};
  this.mutations = {};
}

// eslint-disable-next-line no-underscore-dangle
function _updateStoreProperty(propertyName, obj) {
  // Use this instead of a for..in loop. For..in iterates over the entire prototype chain == bad.
  const propertyKeys = Object.keys(obj);

  for (let i = 0, n = propertyKeys.length; i < n; i++) {
    this[propertyName] = {
      ...this[propertyName],
      [propertyKeys[i].type]: propertyKeys[i],
    };

    console.log(this[propertyName]);

    // delete this[property][propertyKeys[i].type].type;
  }
}

export function Schema(props, lockSize = true) {
  if ((typeof (props) !== 'object')) {
    return console.error('New Schemas must be initialized with an Object literal as the first argument.');
  }

  this.props = lockSize ? Object.freeze(props) : props;

  return this;
}

Store.prototype.registerSchemas = function (schemas) {
  const schemasKeys = Object.keys(schemas);

  for (let i = 0, n = schemasKeys.length; i < n; i++) {
    this.schemas = {
      ...this.schemas,
      [schemasKeys[i]]: schemas[schemasKeys[i]],
    };
  }

  return this.schemas;
};

Store.prototype.registerActions = function (actions) {
  _updateStoreProperty.call(this, 'actions', actions);

  return this.actions;
};
