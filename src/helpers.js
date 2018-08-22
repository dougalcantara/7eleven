/**
 * Iterates over the actions passed to the Store constructor and builds the Store.schemas and Store.state objects automagically
 * @private
 * @this Store
 * @returns {boolean}
 */
export function _deriveStorePropertiesFromActions() {
  const actionKeys = Object.keys(this.actions);

  for (let i = 0, n = actionKeys.length; i < n; i++) {
    const thisSchemaName = this.actions[actionKeys[i]].schemaName;
    const thisSchema = this.actions[actionKeys[i]].schema;

    if (this.actions[actionKeys[i]]._forState) {
      this.state[thisSchemaName] = thisSchema;
    }

    this.schemas[thisSchemaName] = thisSchema;
  }

  return true;
}
