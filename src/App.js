import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';


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
          </div>
        </div>
      </BrowserRouter>)
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);