const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
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
                ],
            newMessageBody: '',
            }
        },
        _callSubscriber() {
            console.log("state changed");
        },

        getState() {
        debugger;
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },

        dispatch(action) {
            if(action.type === ADD_POST) {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newTextProps,
                    likesCount: 0
                };

                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newTextProps = '';
                this._callSubscriber(this._state);
            } else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newTextProps = action.newText;
                this._callSubscriber(this._state);
            } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
                this._state.dialogsPage.newMessageBody = action.body;
                this._callSubscriber(this._state);
            } else if (action.type === SEND_MESSAGE) {
                let body = this._state.dialogsPage.newMessageBody;
                this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messages.push({ id: 6, message: body}
                )
                this._callSubscriber(this._state);
            }
        }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
/*window.store = state;*/


/*

*/




