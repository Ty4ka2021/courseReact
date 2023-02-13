import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-img.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(p => {
        return (
          <button className={props.currentPage === p ? s.selectedPage : undefined} onClick={(e) => { props.onPageChanged(p) }}>
            {p}
          </button>
        )
      })}
      <div>

      </div>
      {
        props.users.map(u =>
          <div key={u.id} className={s.user}>
            <div>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                    className={s.button} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)}
                    className={s.button} onClick={() => { props.follow(u.id) }}>Follow</button>}
              </div>
            </div>

            <div className={s.wrapper}>
              <div>
                <p>
                  {u.name}
                </p>
                <p>
                  {u.status}
                </p>
              </div>
              <div>
                <p>
                  {'u.location.country'}
                </p>
                <p>
                  {'u.location.city'}
                </p>
              </div>
            </div>
          </div>)
      }
    </div >
  );
};

export default Users;