const { expect } = require('chai');
const { Store } = require(process.env.NODE_ENV === 'development' ? '../src/7eleven' : '../dist/7eleven');

const initialState = {
  user: {},
  message: 'Hello!',
  isLoggedIn: false,
};

const store = new Store(initialState);

describe(process.env.NODE_ENV === 'development' ? 'src/7eleven' : 'dist/7eleven', () => {
  it('Stores the initial state passed to it', () => {
    expect(store.state).to.deep.equal(initialState);
  });
})
