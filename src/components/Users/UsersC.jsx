import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user-img.png'

class UsersC extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        {pages.map(p => {
          return (
            <button className={this.props.currentPage === p && s.selectedPage} onClick={(e) => { this.onPageChanged(p) }}>
              {p}
            </button>
          )
        })}
        <div>

        </div>
        {
          this.props.users.map(u =>
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
            </div>)
        }
      </div >
    );
  }
}

export default UsersC;