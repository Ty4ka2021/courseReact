import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.autohorizedUserId;
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {

    return (
      <Profile {...this.props} props={this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autohorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)




function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
