import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (this.props.isAuth === false) return <Navigate to={'/login'} />
    return (
      <Profile {...this.props} props={this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

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

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));