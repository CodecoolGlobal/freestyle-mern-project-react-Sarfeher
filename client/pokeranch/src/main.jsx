import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ranch from './components/ranch.jsx';
import PokemonProfile from './components/PokemonProfile.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/ranch",
    element: <Ranch />
  },
  {
    path: "/pokemon:id",
    element: <PokemonProfile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
