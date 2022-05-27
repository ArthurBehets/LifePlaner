import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home'
import Header from './Components/Header';
import Calendar from './Components/Calendar/Calendar'

import store from "./Store/Store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
