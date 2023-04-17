import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailwindcss.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import SmartGarbage from './routes/projects/SmartGarbage'
import OnColor from './routes/projects/Oncolor'
import AnimeApp from './routes/projects/AnimeApp'
import InteractivePoles from './routes/projects/InteractivePoles'
import DarkModeManager from './components/DarkModeManager'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/smart-garbage',
    element: <SmartGarbage />,
  },
  {
    path: '/oncolor',
    element: <OnColor />,
  },
  {
    path: '/anime-app',
    element: <AnimeApp />,
  },
  {
    path: '/interactive-poles',
    element: <InteractivePoles />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeManager>
      <RouterProvider router={router} />
    </DarkModeManager>
  </React.StrictMode>,
)
