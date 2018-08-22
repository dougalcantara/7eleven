import { _deriveStorePropertiesFromActions } from './helpers';

/**
 * Creates a new Store instance. The Store derives the initial state from the Actions passed to it.
 * @class
 * @param {object} actions - Objects that describe how the application will interact with state.
 *                           Actions also contain the Schemas needed to build an initial state representation.
 * @returns {object} the Store instance
 */
export function Store(actions = {}) {
  this.actions = actions;
  this.schemas = {};
  this.mutations = {};
  this.state = {};

  _deriveStorePropertiesFromActions.call(this);

  return this;
}

/**
 * Initializes a new Schema. Schemas define the properties of an Object stored in Store.state.
 * @class
 * @param {string} name - the name of the Schema. Used in order to refer to a particular schema from other store members.
 * @param {object} props - the enumerables that define a Schema. e.g: a User would have an id, an emailAddress, etc.
 * @param {boolean} lockProps - option to shallow freeze the Schema enums so that the Schema size & first-level enums cannot be changed.
 */
export function Schema(name, props, lockProps = true) {
  if ((typeof (props) !== 'object') || props.length) {
    console.error('New Schemas must be initialized with an Object literal as the second argument.');

    return false;
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

/**
 * Initializes a new Action. Actions define how the application will interact with global state.
 * @class
 * @borrows schemaName as name
 * @borrows schema as schema
 * @param {name} name - the name of the Action. Used in order to refer to a particular Action from other Store members.
 * @param {schema} schema - a Schema that is used to build the state representation.
 * @returns {object} the Action instance.
 */
export function Action(name, schema) {
  if (!schema._isStoreMember) {
    console.error('New Actions must be initialized with a Schema Object as the second argument.');

    return false;
  }

  this.name = name;
  this.schemaName = schema.name;

  /* eslint no-param-reassign: ["error", { "props": false }] */
  delete schema.name;

  this.schema = schema;

  Object.defineProperty(this, '_isStoreMember', { writable: false, enumerable: false, value: true });

  return this;
}

/**
 * Flags an Action so that its Schema can be used to build initial state.
 * @name Action#forState
 * @function
 * @param {boolean} forState - allows for Action.forState(false) for readability's sake.
 */
Action.prototype.forState = function (forState = true) {
  Object.defineProperty(this, '_forState', { writable: false, enumerable: false, value: forState });

  return this;
};
