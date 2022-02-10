import './index.css';
import reportWebVitals from './reportWebVitals';

import store from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree(store.getState());
 // В state мы не можем импортировать функцию renderEntireTree, но мы можем ее туда передать через subscribe,
 //  который вызывается в index.js. После чего, созданная функция renderEntireTree в state переопределяется на ту,
 //  которую мы передали в subscribe. И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree
store.subscriber(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
