import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
};

let dialogName = [
    {id: 1, name: "Dim"},
    {id: 2, name: "Ira"},
    {id: 3, name: "Roma"},
]

let dialogElements = dialogName.map(d => <DialogItem name={d.name} id={d.id}/>);

let dialogMessage = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hello test"},
    {id: 3, message: "Hello wj fweo pfj ep"},
]

let dialogMessages = dialogMessage.map(m => <Message message={m.message}/>);


const  Dialogs = (props) => {
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