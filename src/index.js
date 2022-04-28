import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/index';

const store = createStore(rootReducer);
const rootNode = document.getElementById('root');

ReactDOMClient.createRoot(rootNode).render(
  <React.StrictMode>
    <Provider store={store}>
      <App3 />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
