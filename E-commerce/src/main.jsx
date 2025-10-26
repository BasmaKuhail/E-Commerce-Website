import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import "./styles/theme.css"
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { CartProvider } from './Components/Cart/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/E-Commerce-Website">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>)
