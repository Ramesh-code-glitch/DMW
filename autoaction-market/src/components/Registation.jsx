import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';


function BecomeSupplier() {
     const {user, isBecomeSupplier}=useUser();
  return (
    <section>
         
             <div className='h-container bg-slate-400 flex flex-col justify-center md:flex-row items-center gap-10 p-8'>

                <div className='h- container flex flex-col justify-center md:flex-auto text-center'>

                   <h2 className='text-[40px] place-items-start'>Are you a professional supplier?</h2>
                   <h2 className='text-[20px] place-items-start'>Boost your business with the help of Selectusedparts marketplace</h2>
              
                 <div/>
            </div>


            <div>
            {isBecomeSupplier?
                <div className='flex place-items-end gap-6 '>
                <UserButton/>
                <Button>Registration</Button>
               </div>
               :
               <Button> <Link to="/RegForm">Registration</Link></Button>
               }
               </div> 
         
          </div>

          </section>
     );
}

export default BecomeSupplier;
