const { Schema } = require(process.env.NODE_ENV === 'development' ? '../../src/7eleven' : '../../dist/7eleven');

const User = new Schema('User', {
  emailAddress: '',
  uid: 0,
  displayName: '',
  lastLogin: 0,
});

const BlogPost = new Schema('BlogPost', {
  id: 0,
  title: '',
  postBody: '',
});

const AllBlogPosts = new Schema('AllBlogPosts', {
  posts: [BlogPost],
})

const schemas = {
  User,
  BlogPost,
  AllBlogPosts,
};

module.exports = { schemas };
