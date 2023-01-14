let rerenderEntireTree = () => {
  console.log('rerender');
}
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post', likesCount: 11 },
      { id: 3, message: 'Blabla', likesCount: 11 },
      { id: 4, message: 'Dada', likesCount: 11 }
    ],
    newPostText: 'Введіть новий пост'
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' },
      { id: 6, message: 'Yo6' },
    ],
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' }
    ],
    newMessage: 'Введіть щось',
  },
  sidebar: {
    user: [
      { id: 1, name: 'Dima', url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
      { id: 2, name: 'Asya', url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
      { id: 3, name: 'Roma', url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
    ]
  }
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 7, 
    message: state.dialogsPage.newMessage
  }

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree(state);
}

export const updateNewMessage = (newMessage) => {
  state.dialogsPage.newMessage = newMessage;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state