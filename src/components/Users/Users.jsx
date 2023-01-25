import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    debugger
    props.setUsers([
      { id: 1, followed: true, fullName: 'Roman', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
      { id: 2, followed: true, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Odesa', country: 'Ukraine' } },
      { id: 3, followed: false, fullName: 'Kostya', status: 'I am a boss', location: { city: 'Bielsko-Biala', country: 'Poland' } },
      { id: 4, followed: true, fullName: 'Asya', status: 'I am a boss', location: { city: 'Lviv', country: 'Ukraine' } },
    ])
  }
  debugger
  return (
    <div>
      {props.users.map(u =>
        <div key={u.id} className={s.user}>
          <div>
            <div>
              <img className={s.img} src="https://static.vecteezy.com/system/resources/previews/009/749/656/non_2x/male-profile-mascot-illustration-man-avatar-icon-cartoon-face-business-user-logo-free-vector.jpg" alt="" />
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
                {u.fullName}
              </p>
              <p>
                {u.status}
              </p>
            </div>
            <div>
              <p>
                {u.location.country}
              </p>
              <p>
                {u.location.city}
              </p>
            </div>
          </div>
        </div>)}
    </div>
  );
};

export default Users;