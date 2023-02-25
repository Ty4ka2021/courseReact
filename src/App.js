import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
/* 
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer'; 
*/


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {

      return <BrowserRouter>
        <Preloader />
      </BrowserRouter>
    }


    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/dialogs/*"
                  element={<DialogsContainer />} />
                <Route path="/profile/:userId?"
                  element={<ProfileContainer />} />
                <Route path="/users"
                  element={<UsersContainer />} />
                <Route path="/login"
                  element={<LoginPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>)
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);