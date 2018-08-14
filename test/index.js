const { expect } = require('chai');
const { Schema } = require(process.env.NODE_ENV === 'development' ? '../src/7eleven' : '../dist/7eleven');
const { store } = require('./store');
const { actions } = require('./actions');
const { schemas } = require('./schemas');

describe(process.env.NODE_ENV === 'development' ? 'src/7eleven' : 'dist/7eleven', () => {
  it('Registers any number of Actions passed to the Store constructor', () => {
    expect(store.actions).to.deep.equal(actions);
  });

  it('Registers each Action\'s associated Schema on Store.schemas', () => {
    expect(store.schemas).to.deep.equal(schemas);
  });
});
