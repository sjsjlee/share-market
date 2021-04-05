import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import 'styles/custom-bootstrap.scss'
import axios from 'axios'

//axios.defaults.baseURL = "https://www.sharemarket.com";
axios.defaults.withCredentials = true;    //백엔드로부터 refreshToken cookie를 주고받기

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();