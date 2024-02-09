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
import Game from './pages/Game/Game'

import { store } from './app/store'
import { Provider } from 'react-redux'

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
      },
      {
        path: "/game/:id",
        element: <Game />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
