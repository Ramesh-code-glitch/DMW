import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Registation() {
    const {user, isRegistation}=useUser();
  return (
    
    <div className='flex justify-between place-items-end shadow-sm p-5 width={200} height={100}'>
    {isRegistation?
        <div className='flex place-items-end gap-6 '>
        <UserButton/>
        <Button>Registration</Button>
       </div>
       :
       <Button> <Link to="/RegForm">Registration</Link></Button>
       }
    </div>
  )
}

export default Registation
