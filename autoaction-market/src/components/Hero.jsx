import React from 'react'
import Search from './Search'
import Registation from './Registation'



function Hero() {

  return (
    <div>


    <div className='  flex flex-col justify-center md:flex-row items-center bg-slate-200 gap-10 p-8'>

         
       
              <div className='h- container flex flex-col justify-center md:flex-row items-center bg-slate-200 gap-10 p-8'>
           
              <div className='h- container flex flex-col justify-center md:flex-auto text-right'>
              <h2 className='text-[20px] place-items-end'>ALL TYPE OF CAR PARTS DELIVERED</h2>
              
              <h2 className='text-[10px] items-end text-right'>Select Used Parts supply quality used parts 
              from all over the india,
               any part from full engines to modules get in touch now.</h2>
               <img className='place-items-start p-5'  src='/AA DMW.png' width={185} height={70}/>
               
               
               </div>
              <div className='border-spacing-4 items-start' width={800} height={200}>
              <Search/>

              </div>


              

              
           
              
              </div>
    
              
    </div>
    <Registation/>
    
    </div>

    
  )
}

export default Hero