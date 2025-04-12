import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login, Home } from './components/pages/controler'

import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>
)
