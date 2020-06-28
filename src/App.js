import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
       <header class='header'>
         <img src={logo} alt=""/>
       </header>
        <nav class='sidebar'>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </nav>
        <div class='content'>
          <div>
            <div>img</div>
            <div>
              post
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
