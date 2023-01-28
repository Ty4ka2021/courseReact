import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (props.profile == null) { return <Preloader /> }

  return (
    <div>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <p>Обо мне: {props.profile.aboutMe}</p>
        <div>
          <h3>Мои соцсети</h3>
          <ul>
            <li>facebook: {props.profile.contacts.facebook}</li>
            <li>twitter: {props.profile.contacts.twitter}</li>
            <li>instagram: {props.profile.contacts.instagram}</li>
          </ul>
        </div>
        <p>{props.profile.lookingForAJob ? 'В поиске работы' : undefined}</p>

        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;