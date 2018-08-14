const { Store } = require(process.env.NODE_ENV === 'development' ? '../src/7eleven' : '../dist/7eleven');
const { actions } = require('./actions');

const store = new Store(actions);

module.exports = { store };
