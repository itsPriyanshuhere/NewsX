/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import {createContext} from 'react';
import { AuthProvider } from './context/auth.jsx';

export const server = "https://news-x-backend.vercel.app";

export const Context = createContext({isAuthenticated: false});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
