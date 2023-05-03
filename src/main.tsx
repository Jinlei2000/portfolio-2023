import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailwindcss.css'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import SmartGarbage from './routes/projects/SmartGarbage'
import OnColor from './routes/projects/Oncolor'
import AnimeApp from './routes/projects/AnimeApp'
import InteractivePoles from './routes/projects/InteractivePoles'
import DarkModeManager from './components/DarkModeManager'
import MovieZone from './routes/projects/MovieZone'
import { projectsData } from './data/projectsData'
import NotFound from './routes/NotFound'

import robots from '/robots.txt'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/smart-garbage',
    element: <SmartGarbage project={projectsData[1]} />,
  },
  {
    path: '/projects/oncolor',
    element: <OnColor project={projectsData[2]} />,
  },
  {
    path: '/projects/anime-app',
    element: <AnimeApp project={projectsData[3]} />,
  },
  {
    path: '/projects/interactive-poles',
    element: <InteractivePoles project={projectsData[4]} />,
  },
  {
    path: '/projects/movie-zone',
    element: <MovieZone project={projectsData[5]} />,
  },
  {
    path: 'robots.txt',
    element: robots,
  },
  // make not found page
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeManager>
      <RouterProvider router={router} />
    </DarkModeManager>
  </React.StrictMode>,
)
