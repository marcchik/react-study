import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const PostItem = [
        props.posts.map(
            post =>   <Post message={post.message} likeCount={post.likeCount}/>
        )
    ];

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
                { PostItem }
            </div>
        </div>
    )
}

export default MyPosts;