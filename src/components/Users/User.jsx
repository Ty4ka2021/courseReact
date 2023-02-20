import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-img.png'
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <div key={props.user.id} className={s.user}>
      <div>
        <div>
          <NavLink to={'/profile/' + props.user.id}>
            <img className={s.img} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="" />
          </NavLink>
        </div>
        <div>
          {props.user.followed
            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
              className={s.button} onClick={() => { props.unfollow(props.user.id) }}>Unfollow</button>

            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
              className={s.button} onClick={() => { props.follow(props.user.id) }}>Follow</button>}
        </div>
      </div>

      <div className={s.wrapper}>
        <div>
          <p>
            {props.user.name}
          </p>
          <p>
            {props.user.status}
          </p>
        </div>
        <div>
          <p>
            {'props.user.location.country'}
          </p>
          <p>
            {'props.user.location.city'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;