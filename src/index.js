import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
theme="dark"
position="top-right"
autoClose={3000}
closeOnClick
pauseOnHover={false}
/>
{/* Same as */}
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

