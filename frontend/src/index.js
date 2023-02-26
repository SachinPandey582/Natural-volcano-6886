import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
<<<<<<< HEAD

// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './Redux/store';
// import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
=======
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import { store } from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <Provider store={store}>
  <BrowserRouter>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </BrowserRouter>
  </Provider>
  
>>>>>>> 24cb4d019e3e47799a7eb8f5c7a024f093b663bf
);
