import React from 'react';
import Post from './Post/Post';
/*import s from './MyPosts.module.css'*/

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
   return (
      <div>
         My posts
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10"/>
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