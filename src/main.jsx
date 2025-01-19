import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Home from './components/Home/Home.jsx'
import Service from './components/Service/Service.jsx'
import Feature from './components/Features/Feature.jsx'
import Payment from './components/Payment/Payment.jsx'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:'/service',
                element:<Service />
            },
            {
                path:"/feature",
                element:<Feature />
            },
            {
                path:"/payment",
                element:<Payment />
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
