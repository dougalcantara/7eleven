const { expect } = require('chai');
const { Store } = require(process.env.NODE_ENV === 'development' ? '../src/7eleven' : '../dist/7eleven');

const schemas = {
  user: {
    emailAddress: '',
    uid: 0,
    displayName: '',
    lastLogin: 0,
  },
  blogPost: {
    id: 0,
    title: '',
    postBody: '',
    linkedImages: [],
  },
};

const state = {
  user: schemas.user,
  blogPosts: schemas.blogPost,
};

const store = new Store(state);

describe(process.env.NODE_ENV === 'development' ? 'src/7eleven' : 'dist/7eleven', () => {
  it('Registers any actionDescriptions passed to it', () => {
    const SET_USER = {
      user: {
        name: '',
        email: '',
      },
    };

    store.registerActions(SET_USER);

    const SET_BLOG_POSTS = {
      blogPosts: [
        {
          id: 0,
          title: '',
        }
      ]
    };

    store.registerActions(SET_BLOG_POSTS);

    console.log(store.actions);

    const allActions = {
      SET_USER,
      SET_BLOG_POSTS,
    };

    expect(store.actions).to.deep.equal(allActions);
  });
})
