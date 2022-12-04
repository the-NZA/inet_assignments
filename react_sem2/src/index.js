import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { HelloWorld, GoodbyeWorld, HelloWorldClass } from './components/Sem2';
// import { Parent } from './components/Sem2-2';
import {Parent} from "./components/Sem2-3"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloWorld name="roman" fname="kozlov" />
    <GoodbyeWorld />
    <HelloWorldClass who="world" />
    <hr></hr> */}
    {/* <Counter /> */}
    {/* <Parent /> */}
    <Parent />
  </React.StrictMode>
);
