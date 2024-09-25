import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search'
import Footer from './components/Footer'
import Registation from './components/Registation/RegButton'

import RegIndex from './components/Registation/RegForm'

function Home () {
  return (
    <div>
        
        {/*Header*/}
         <Header/>

        {/*Hero*/}
        <Hero/>

        {/*SingIn*/}
        


        {/*Registation*/}
        
        

        {/*Footer*/}
        <Footer/>
       
       
    </div>
  )
}

export default Home

