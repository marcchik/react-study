import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = ({id, message}) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

export default MessageItem;