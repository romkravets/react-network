import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div class={classes.content}>
      <div>
        <div>img</div>
        <div>
          ava + desc
        </div>
      </div>
      <MyPosts/>
    </div>
   )
}

export default Profile;