import state, { subscribe } from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessage, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessage={updateNewMessage} />
    </React.StrictMode>);

};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);