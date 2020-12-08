import React from 'react';
import Router from './Router'
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);