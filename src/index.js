import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from "./store";
import GlobalStyle from './components/styled';
import reportWebVitals from './reportWebVitals';

import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
