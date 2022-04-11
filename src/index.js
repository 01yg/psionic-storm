import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');

ReactDOMClient.createRoot(rootNode).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
