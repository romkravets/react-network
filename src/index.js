import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "Hello, it is props one", likesCount: 12},
    {id: 2, message: "Hello, it is props two", likesCount: 11}
]

let dialogs = [
    {id: 1, name: "Dim"},
    {id: 2, name: "Ira"},
    {id: 3, name: "Roma"},
]

let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hello test"},
    {id: 3, message: "Hello wj fweo pfj ep"},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
