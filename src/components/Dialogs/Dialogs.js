import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const  Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id}  name={d.name} id={d.id}/>);
    let dialogMessages = props.messages.map(m => <Message key={m.id} message={m.message}/>);
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {dialogMessages}
                </div>
            </div>
        );
}

export default Dialogs;