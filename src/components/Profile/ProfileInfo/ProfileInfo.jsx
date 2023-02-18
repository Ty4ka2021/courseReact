import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
  if (props.profile == null) { return <Preloader /> }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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