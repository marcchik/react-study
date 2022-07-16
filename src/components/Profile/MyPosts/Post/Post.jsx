import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className="s.userInfo">
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
            </div>
            <div className="s.message">
                <p>{props.message} like: {props.likeCount}</p>
            </div>
        </div>
    )
}

export default Post;