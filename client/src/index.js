import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import {Provider} from "react-redux"
import store from './store/index.js';

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
  <Provider store={store}>  
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

