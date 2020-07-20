let rerenderEntireTree = () => {
    console.log("state changed");
}

let state = {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, it is props one", likesCount: 12},
                {id: 2, message: "Hello, it is props two", likesCount: 11}
            ],
            newTextProps: '',
        },
        dialogsPage: {
          dialogs: [
              {id: 1, name: "Dim"},
              {id: 2, name: "Ira"},
              {id: 3, name: "Roma"},
          ],
          messages: [
              {id: 1, message: "Hello"},
              {id: 2, message: "Hello test"},
              {id: 3, message: "Hello wj fweo pfj ep"},
          ]
      }
    }

    window.state = state;

export const  addPost  = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newTextProps,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newTextProps = '';
    rerenderEntireTree();
}

export const updateNewPostText  = (newText) => {
    state.profilePage.newTextProps = newText;
    rerenderEntireTree();
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


    export default state;