import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() =>
                           <Dialogs
                            dialogs={props.appState.dialogsPage.dialogs}
                            messages={props.appState.dialogsPage.messages} />}/>
                <Route path='/profile'
                       render={() =>
                           <Profile
                               profilePage={props.appState.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
