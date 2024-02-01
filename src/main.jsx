import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Menu from './layouts/Menu/Menu.layout'
import Home from './pages/Home/Home'
import CreateGamer from './pages/CreateGamer/CreateGamer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      },
      {
        path: "/create/game",
        element: <CreateGamer />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
