import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewApp from './components/NewApp';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './reduxstore/store';
import {Router} from 'react-router-dom'
import history from './reduxstore/history'

axios.interceptors.request.use((request) => {
  if (request.url.includes("cart")) {
    request.headers.authToken = localStorage.token;
  }
  else {
    Promise.reject();
  }
  return request;
})


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <NewApp/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
