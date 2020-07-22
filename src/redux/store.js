import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

            this._callSubscriber(this._state);
        }
}


export default store;
/*window.store = state;*/




