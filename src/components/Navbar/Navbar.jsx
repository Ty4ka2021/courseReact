import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
// import Sidebar from './Sidebar/Sidebar';

const Navbar = (props) => {
  // let sidebarElement = props.state.user.map(us => <Sidebar url={us.url} id={us.id} name={us.name} />);
  return (
    <div>

      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <div>News</div>
        </div>
        <div className={s.item}>
          <div>Music</div>
        </div>
        <div className={s.item}>
          <div>Settings</div>
        </div>
      </nav>
      {/* <ul className={s.listUsers}>
        {sidebarElement}
      </ul> */}
    </div>
  )
}

export default Navbar;