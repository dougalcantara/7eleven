const { Action } = require(process.env.NODE_ENV === 'development' ? '../../src/7eleven' : '../../dist/7eleven');
const { schemas } = require('../schemas');

const SetUser = new Action('SetUser', schemas.User);

const SetBlogPosts = new Action('SetBlogPosts', schemas.BlogPosts);

const actions = {
  SetUser,
  SetBlogPosts,
};

module.exports = { actions };
