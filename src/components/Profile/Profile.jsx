import React from 'react';
// import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsСontainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;