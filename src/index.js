/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hook_ControlledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounters';
import TextToImage from './TextToImage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
    <Hook_ControlledButtonState />
    
    <EmojeeCounter pic="Love" />
    <EmojeeCounter pic="Sad" />
    <EmojeeCounter pic="Like" />

    <TextToImage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
