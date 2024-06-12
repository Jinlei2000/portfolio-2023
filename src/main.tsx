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
import MovieZone from './routes/projects/MovieZone'
import { projectsData } from './data/projectsData'
import NotFound from './routes/NotFound'

import robots from '/robots.txt'
import E17 from './routes/projects/E17'
import Portfolio from './routes/projects/Portfolio'
import PizzaAr from './routes/projects/PizzaAr'
import Car3D from './routes/projects/Car3D'
import Tuinbouw from './routes/projects/Tuinbouw'
import DiscordCarplay from './routes/projects/DiscordCarplay'

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
    path: '/projects/portfolio',
    element: <Portfolio project={projectsData[6]} />,
  },
  {
    path: '/projects/e17',
    element: <E17 project={projectsData[7]} />,
  },
  {
    path: '/projects/3d-car',
    element: <Car3D project={projectsData[8]} />,
  },
  {
    path: '/projects/discord-carplay',
    element: <DiscordCarplay project={projectsData[9]} />,
  },
  {
    path: '/projects/tuinbouw',
    element: <Tuinbouw project={projectsData[10]} />,
  },
  {
    path: '/projects/pizza-ar',
    element: <PizzaAr project={projectsData[11]} />,
  },

  {
    path: 'robots.txt',
    element: robots,
  },
  // make not found page
  {
    path: '*',
    element: <NotFound />,
  },
  // {
  //   path: '*',
  //   element: <Navigate to="/" replace />,
  // },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeManager>
      <RouterProvider router={router} />
    </DarkModeManager>
  </React.StrictMode>,
)
