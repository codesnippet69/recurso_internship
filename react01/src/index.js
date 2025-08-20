import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Components/header';
import Button from './Components/addbutton';
import Todotasks from './Components/todotasks';
import './style.css';

import UsingHook from './Components/HookComponent'; // This import is not used in the current render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app">
      <UsingHook></UsingHook>
   <Header title="Todo List" />
   <Todotasks completed = {true} text = "Eat" />
   <Todotasks text = "Code" />
   <Todotasks text = "Sleep" />
   <Todotasks text = "Repeat" />
   <Todotasks text = "Game" />
   <Todotasks text = "Eat" />
  
    <Button/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

