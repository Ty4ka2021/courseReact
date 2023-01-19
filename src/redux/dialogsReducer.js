const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessage
      }

      state.messages.push(newMessage);
      state.newMessage = '';
      break;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage;
      break;

    default:
      break;
  }

  return state;
}

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE }
}

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newMessage: text }
}
export default dialogsReducer;