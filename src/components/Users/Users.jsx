import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
      {
        props.users.map(u => <User user={u}
          followingInProgress={props.followingInProgress}
          key={props.key}
          unfollow={props.unfollow}
          follow={props.follow}
        />)
      }
    </div >
  );
};

export default Users;