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
import Redirect from './components/Redirect'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/smart-garbage',
    element: <SmartGarbage />,
  },
  {
    path: '/projects/oncolor',
    element: <OnColor />,
  },
  {
    path: '/projects/anime-app',
    element: <AnimeApp />,
  },
  {
    path: '/projects/interactive-poles',
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
