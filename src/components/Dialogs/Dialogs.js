import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const  Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogElements = state.dialogs.map(d => <DialogItem key={d.id}  name={d.name} id={d.id}/>);
    let dialogMessages = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));


    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    <div>{dialogMessages}</div>
                    <div>
                        <div>
                            <textarea
                                onChange={onNewMessageChange}
                                value={newMessageBody}
                                placeholder="Enter your message"/>
                        </div>
                        <div><button onClick={onSendMessageClick}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Dialogs;