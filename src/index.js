import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // Импорт провайдера для хранилища
import store from './redux/store'; // Импорт обьекта из стора (хранилище и персистор)

import App from './App.js';

import 'modern-normalize/modern-normalize.css';
import './App.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
