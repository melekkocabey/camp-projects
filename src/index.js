import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';


const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
  , document.getElementById('root')
  //bu rout işşlemini
);
