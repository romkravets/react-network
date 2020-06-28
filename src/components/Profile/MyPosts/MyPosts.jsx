import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

const MyPosts = () => {
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
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </div>
    </div>
   )
}

export default MyPosts;