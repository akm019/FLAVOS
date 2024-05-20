import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Hero from './components/Hero/Hero.jsx'
import Hero2 from './components/Hero/Hero2.jsx'
import Cuisine from './components/Cuisine/Cuisine.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Hero/>
      },
      {
        path:'',
        element:<Hero2/>
      },

      {
        path:'cuisine',
        element:<Cuisine/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
