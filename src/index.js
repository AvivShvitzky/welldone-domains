import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import './index.css';
import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);