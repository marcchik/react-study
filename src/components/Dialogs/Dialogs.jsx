import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

const MessageItem = ({id, message}) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Mark"},
        {id: 2, name: "Elya"},
        {id: 3, name: "Ameliya"},
        {id: 4, name: "All"},
        {id: 5, name: "Ann"}
    ];

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "I'm okay!"},
        {id: 3, message: "Hello!"},
        {id: 4, message: "I'm Mark!"},
        {id: 5, message: "Hi!"}
    ];

    let messagesElements = [
        messagesData.map(({id, message}) => <MessageItem message={message} id={id}/>)
    ];

    let dialogsElements = [
        dialogsData.map(({name, id}) => <DialogItem name={name} id={id}/>)
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;