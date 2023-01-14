import { rerenderEntireTree } from "../render"

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post', likesCount: 11 },
      { id: 3, message: 'Blabla', likesCount: 11 },
      { id: 4, message: 'Dada', likesCount: 11 }
    ],
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
  },
  sidebar: {
    user: [
      { id: 1, name: 'Dima', url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
      { id: 2, name: 'Asya', url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
      { id: 3, name: 'Roma', url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
    ]
  }

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state);
}

export default state