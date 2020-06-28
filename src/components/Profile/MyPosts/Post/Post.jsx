import React from 'react';
import classes from './Post.module.css'

const Post = () => {
   return (
        <div className={classes.item}>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
          post 1
          <span>like</span>
        </div>
   )
}

export default Post;