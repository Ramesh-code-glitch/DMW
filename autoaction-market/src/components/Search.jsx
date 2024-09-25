import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  import { Button } from './ui/button';
  

function Search() {
  const {user, isSearchMyParts}=useUser();
  return (
    
    <div className='p-2 md:p-5 bg-white rounded-md
     md:rounde flex-col md:flex  gap-8 px-5 items-center
      w-full md:w-max ' width={1000} height={400}>
      
      <div>
      <h2 className=' p-2 md:p-5 items-center md:flex-auto text-black'>
      <h2>Don't Get Hassel</h2>
      Search Your Part Here</h2>
      </div>

       <Select>
         <SelectTrigger className="w-[180px]">
         <SelectValue placeholder="Select Makes" />
     </SelectTrigger>
     <SelectContent>

      
         <SelectItem value="audi">Audi</SelectItem>
         <SelectItem value="forde">Forde</SelectItem>
         <SelectItem value="mohindra">Mohindra</SelectItem>
    </SelectContent>
</Select>



<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Model" />
  </SelectTrigger>
  <SelectContent>

    <SelectItem value="light">A4</SelectItem>
    <SelectItem value="dark">A7</SelectItem>
    <SelectItem value="system">A8</SelectItem>
  </SelectContent>
</Select>



<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Year" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">2012</SelectItem>
    <SelectItem value="dark">2013</SelectItem>
    <SelectItem value="system">2014</SelectItem>
  </SelectContent>
</Select>




{isSearchMyParts?
  <div className='flex items-center bg-yellow-500 aspect-square transition cursor-pointer'>
  <UserButton/>
  <Button>Search My Parts</Button>
 </div>
 :
 <Button> <Link to='/'>Search My Parts</Link></Button>
 }
    </div>
    
  )
}

export default Search