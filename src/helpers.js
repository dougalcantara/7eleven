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
}
