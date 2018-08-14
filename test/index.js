const { expect } = require('chai');
const { Schema } = require(process.env.NODE_ENV === 'development' ? '../src/7eleven' : '../dist/7eleven');
const { store } = require('./store');
const { actions } = require('./actions');
const { schemas } = require('./schemas');

describe(process.env.NODE_ENV === 'development' ? 'src/7eleven' : 'dist/7eleven', () => {
  it ('Registers any number of Schemas defined on the initialState object', () => {
    // expect(store.schemas).to.deep.equal(schemas);
  });

  it('Registers any number of Actions passed to Store.registerActions()', () => {
    expect(store.actions).to.deep.equal(actions);
  });
});
