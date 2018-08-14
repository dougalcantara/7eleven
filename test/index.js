const { expect } = require('chai');
const { Store, Schema } = require(process.env.NODE_ENV === 'development' ? '../src/7eleven' : '../dist/7eleven');

const User = new Schema({
  emailAddress: '',
  uid: 0,
  displayName: '',
  lastLogin: 0,
});

const BlogPost = new Schema({
  id: 0,
  title: '',
  postBody: '',
  linkedAssets: [],
});

const schemas = {
  User,
  BlogPost,
};

const state = {
  user: schemas.user,
  blogPosts: schemas.blogPost,
};

const store = new Store(state);

describe(process.env.NODE_ENV === 'development' ? 'src/7eleven' : 'dist/7eleven', () => {
  it ('Registers any number of schemas passed to Store.registerSchemas()', () => {
    store.registerSchemas(schemas);

    // Create a new schema in a different context, separate from the initial Schemas
    const Contact = new Schema({
      ...schemas.User,
      phoneNumber: '867-5309',
    });

    schemas.Contact = Contact;

    store.registerSchemas({ Contact });
    expect(store.schemas).to.deep.equal(schemas);

    console.log(store.schemas);
  });

  // it('Registers any actionDescriptions passed to it', () => {
  //   store.registerActions({

  //   });

  //   const SET_BLOG_POSTS = {
  //     blogPosts: [
  //       {
  //         id: 0,
  //         title: '',
  //       }
  //     ]
  //   };

  //   store.registerActions(SET_BLOG_POSTS);

  //   // console.log(store.actions);

  //   const allActions = {
  //     SET_USER,
  //     SET_BLOG_POSTS,
  //   };

  //   expect(store.actions).to.deep.equal(allActions);
  // });
})
