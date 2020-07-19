import React from 'react';
import Post from './Post/Post';
/*import s from './MyPosts.module.css'*/

const MyPosts = (props) => {
    const newPostElement = React.createRef();
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
      <div>
         My posts
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10" ref={newPostElement}/>
            <button onClick={ addPost }>Add post</button>
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