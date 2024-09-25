import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './Profile'
import Registation from './components/Registation/RegButton'
import RegisterForm from './components/Registation/RegForm'
import BusinessDetails from './components/Registation/BusinessDetails'
import BankDetails from './components/Registation/BankDetails'
import LoinPage from './components/Registation/LoginPage'

import { Search } from 'lucide-react'

const router=createBrowserRouter([


  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },

  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/search',
    element:<Search/>
  },

  {
    path:'/registation',
    element:<Registation/>
  },
  {
    path:'/regform',
    element:<RegisterForm/>
  },
  {
    path:'/businessdetails',
    element:<BusinessDetails/>
  },
  {
    path:'/bankdetails',
    element:<BankDetails/>
  },
  
  {
    path:'/loginpage',
    element:<LoinPage/>
  },
  
  
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
           <RouterProvider router={router}/>
      </ClerkProvider>
     
  </StrictMode>
  
)
