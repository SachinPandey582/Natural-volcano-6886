import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>
  
  <React.StrictMode>
  <BrowserRouter>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </BrowserRouter>
  </React.StrictMode>
);
