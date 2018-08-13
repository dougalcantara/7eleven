export function Store(initialState = {}) {
  this.state = initialState;
  this.schemas = {};
  this.actions = {};
  this.mutations = {};
}

export function Schema(obj/* , lockSize = true */) {
  if ((typeof (obj) !== 'object') || obj.isArray()) {
    return console.error('New Schemas must be initialized with an Object literal as the first argument.');
  }
}

Store.prototype.registerActions = function (actions) {
  // Use this instead of a for..in loop. For..in iterates over the entire prototype chain == bad.
  const actionsKeys = Object.keys(actions);

  // eslint-disable-next-line no-plusplus
  for (let i = 0, n = actionsKeys.length; i < n; i++) {
    this.actions = {
      [actionsKeys[i]]: actions[actionsKeys[i]],
      ...this.actions,
    };
  }

  return this.actions;
};
