import React, { Component } from 'react';
import Post from './Post/Post';
//var posts = require('./../../../../api/post.js');

class AllPosts extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    //var usersArr = []
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    if (this.state.posts.length > 0) {
      return (
        <div className="AllPosts">
          this.state.
          {this.state.posts.map(post =>
            <div key={post.id}>
              <Post data={post} />
            </div>
          )}
        </div>
      );
    } else {
      return <div>loading</div>
    }
  }
}

export default AllPosts;
