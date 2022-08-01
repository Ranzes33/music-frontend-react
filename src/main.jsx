import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { MusicApp } from './MusicApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MusicApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
