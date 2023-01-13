import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = (props) => {
  
  return (
    <li className={s.item}>
      <img className={s.img} src={props.url} alt="avatar" />
      <h4 className={s.title}>{props.name}</h4>
    </li>
  );
};

export default Sidebar;