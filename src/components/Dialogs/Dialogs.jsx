import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

  let newMessage = React.createRef();
  let addMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newMessage: text });
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <input onChange={onMessageChange} ref={newMessage} value={props.state.newMessage} />
        <button onClick={addMessage}>Відправити повідомлення</button>
      </div>
    </div>
  )
}

export default Dialogs;