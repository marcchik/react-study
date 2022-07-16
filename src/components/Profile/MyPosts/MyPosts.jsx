import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>
                        New post
                    </textarea>
                </div>
                <div>
                    <button type="button">add</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likeCount="11"/>
                <Post message="It's ok" likeCount="13"/>
            </div>
        </div>
    )
}

export default MyPosts;