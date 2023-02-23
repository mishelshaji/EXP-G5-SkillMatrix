import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';

// axios.interceptors.request.use((request) => {
//   // console.log('in interceptor');
//   // console.log(request);
//   if(request.url.includes('login') || request.url.includes('register')){
//     return request;
//   }
//   else{
//     if(localStorage.getItem('authToken')){
//       request.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
//       return request;
//     }
//   }
//   return request;
  
// })




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

