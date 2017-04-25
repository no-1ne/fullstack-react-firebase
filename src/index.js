/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";


import App from './App';
import './index.css';
import * as firebase from 'firebase';
import MyRoutes from './Routes.js';

const config = {
    apiKey: "AIzaSyBYAQS6PX9gGAIt43Tf6yUTr_PEPUd35yk",
    authDomain: "mycommerce-6038a.firebaseapp.com",
    databaseURL: "https://mycommerce-6038a.firebaseio.com",
    projectId: "mycommerce-6038a",
    storageBucket: "mycommerce-6038a.appspot.com",
    messagingSenderId: "7864811118"
  };
firebase.initializeApp(config);
  
ReactDOM.render(
  <MyRoutes />,
  document.getElementById('root')
);
