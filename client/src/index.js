import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

//redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());
 
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter> 
  
    <App /> 
 
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


