let state = {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, it is props one", likesCount: 12},
                {id: 2, message: "Hello, it is props two", likesCount: 11}
            ],
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

export const  addPost  = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    }

    export default state;