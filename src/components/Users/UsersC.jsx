import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-img.png'

class UsersC extends React.Component {
  getUsers = () => {
  if (this.props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
}
render() {
  return (
    <div>
      <button onClick={this.getUsers}>Get Users</button>
      {this.props.users.map(u =>
        <div key={u.id} className={s.user}>
          <div>
            <div>
              <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
            </div>
            <div>
              {u.followed
                ? <button className={s.button} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                : <button className={s.button} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}
}

export default UsersC;