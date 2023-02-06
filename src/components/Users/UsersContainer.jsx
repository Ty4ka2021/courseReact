import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { 
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.setUsers(data.items)
      })
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>

  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


// export default connect(mapStateToProps, {
//   follow: followAC,
//   unfollow: unfollowAC,
//   setUsers: setUsersAC,
//   setCurrentPage: setCurrentPageAC,
//   setTotalUsersCount: setTotalUsersCountAC,
//   toggleIsFetching: toggleIsFetchingAC,
// })(UsersContainer);

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);