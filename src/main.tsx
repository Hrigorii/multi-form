import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter basename="/multi-form/">
      <App />
    </BrowserRouter>
  </Provider>

)
