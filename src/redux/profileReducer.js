const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hello, it is props one", likesCount: 12},
        {id: 2, message: "Hello, it is props two", likesCount: 11}
    ],
    newTextProps: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newTextProps,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newTextProps = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newTextProps = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export  default profileReducer;