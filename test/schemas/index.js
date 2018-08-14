const { Schema } = require(process.env.NODE_ENV === 'development' ? '../../src/7eleven' : '../../dist/7eleven');

const User = new Schema({
  emailAddress: '',
  uid: 0,
  displayName: '',
  lastLogin: 0,
});

const BlogPosts = new Schema({
  id: 0,
  title: '',
  postBody: '',
});

const schemas = {
  User,
  BlogPosts,
};

module.exports = { schemas };
