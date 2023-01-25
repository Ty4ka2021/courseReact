import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-img.png'

const Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        })
    }
  }

  
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(u =>
        <div key={u.id} className={s.user}>
          <div>
            <div>
              <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
            </div>
            <div>
              {u.followed
                ? <button className={s.button} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button className={s.button} onClick={() => { props.follow(u.id) }}>Follow</button>}
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
        </div>)}
    </div>
  );
};

export default Users;