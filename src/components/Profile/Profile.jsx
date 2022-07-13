import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className="content">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74zOO5SBdcwvc6laxLmSB6szbUTkWjswfm4D820V9pjcAjaLC-TD1Tf2V4KSOTswEg0Q&usqp=CAU"/>
            <ul>
                <li>Комментарии</li>
                <li>Ответ</li>
            </ul>
        </div>
    )
}

export default Profile;