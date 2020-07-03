import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
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
       <Post message={'Hello, it is props one'}/>
       <Post message={'Hello, it is props two'}/>
       <Post message={'Hello, it is props three'}/>
       <Post message={'Hello, it is props four'}/>
       <Post message={'Hello, it is props five'}/>
       <Post message={'Hello, it is props six'}/>
      </div>
    </div>
   )
}

export default MyPosts;