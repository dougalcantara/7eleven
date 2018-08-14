const { Action } = require(process.env.NODE_ENV === 'development' ? '../../src/7eleven' : '../../dist/7eleven');
const { schemas } = require('../schemas');

const SetUser = new Action('SetUser', schemas.User).forState();
const SetBlogPost = new Action('SetBlogPost', schemas.BlogPost);
const SetAllBlogPosts = new Action('SetBlogPosts', schemas.AllBlogPosts).forState();

const actions = {
  SetUser,
  SetBlogPost,
  SetAllBlogPosts,
};

module.exports = { actions };
