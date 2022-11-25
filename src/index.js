import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


let posts = [
    {id: 1, message: "Hi", likeCount: 12},
    {id: 2, message: "Hello", likeCount: 13},
    {id: 3, message: "I'm Mark", likeCount: 16},
    {id: 4, message: "Read with wife", likeCount: 129}
];

let dialogs = [
    {id: 1, name: "Mark"},
    {id: 2, name: "Elya"},
    {id: 3, name: "Ameliya"},
    {id: 4, name: "All"},
    {id: 5, name: "Ann"}
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "I'm okay!"},
    {id: 3, message: "Hello!"},
    {id: 4, message: "I'm Mark!"},
    {id: 5, message: "Hi!"},
    {id: 6, message: "Hello, my friends!"},
    {id: 7, message: "My name's Mark, I live in Borovlyany"},
    {id: 8, message: "He started learn English!"}
];

root.render(
    <BrowserRouter>
        <App posts={posts} messages={messages} dialogs={dialogs}/>
    </BrowserRouter>
);

