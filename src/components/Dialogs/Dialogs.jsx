import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {

    let messagesElements = [
        props.messagesData.map(({id, message}) => <MessageItem message={message} id={id}/>)
    ];

    let dialogsElements = [
        props.dialogsData.map(({name, id}) => <DialogItem name={name} id={id}/>)
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