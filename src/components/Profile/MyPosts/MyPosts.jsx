import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let posts = [
        {
            id: 1, message: "Hello, it is props one", likesCount: 12
        },
        {
            id: 2, message: "Hello, it is props two", likesCount: 11
        }
    ]
    let postElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
   return (
      <div>
         My posts
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
          </div>
        New post
        </div>
      <div className="posts">
          {postElements}
      </div>
    </div>
   )
}

export default MyPosts;