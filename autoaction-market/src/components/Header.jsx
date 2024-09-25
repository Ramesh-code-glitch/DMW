import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { HiMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger and close icon

function Header() {
  const { user, isBeacomeASupplier } = useUser();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div className='flex justify-between place-items-center shadow-sm p-2'>
      <Link to="/home">
        <img
          className='transition-all '
          src='/AutoAction DMW Logo.png'
          width={200}
          height={100}
          alt="Logo"
        />
      </Link>

      {/* Hamburger Icon (visible on mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className='text-3xl'>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`md:flex items-start gap-0 ${menuOpen ? 'block' : 'hidden'} md:block`}
      >
        <HiMail className='text-[40px] bg-white rounded-full text-orange-700 hover:scale-105 transition cursor-pointer' />
        <li className='font-medium p-3 text-[15px] hover:scale-105 transition-all cursor-pointer hover:text-orange-700'>
          BUSINESS@MARIPOSADIGITAL.COM
        </li>
        <h className='font-medium p-0 text-[15px] hover:scale-105 transition-all cursor-pointer hover:text-orange-700'>
          Hour: 09:00am - 06:00pm
        </h>

        <BiSolidPhoneCall className='text-[40px] bg-white rounded-full text-orange-700 hover:scale-105 transition cursor-pointer' />
        <li className='font-medium p-3 text-center hover:scale-105 transition-all cursor-pointer hover:text-orange-700'>
          Call: +91-8617378821
        </li>
        <li className='font-medium p-0 text-[20px] hover:scale-105 transition-all cursor-pointer hover:text-orange-700'>
          (Free Call)
        </li>

        <MdAccountCircle className='text-[40px] bg-white rounded-full text-orange-700 hover:scale-105 transition cursor-pointer' />
        <li className='font-medium p-3 text-center hover:scale-105 transition-all cursor-pointer hover:text-orange-700'>
          <Link to="/LoginPage">SIGN-IN</Link>
        </li>
        <li className='font-medium p-0 text-[15px] text-gray-700 hover:scale-105 transition-all cursor-pointer hover:text-orange-700'>
          Lead Area
        </li>

        
        {isBeacomeASupplier ? (
          <div className='flex items-center arrow-right'>
            <UserButton />
            <Button>Become A Supplier</Button>
          </div>
        ) : (
          <Button>
            <Link to='/RegForm'>Become A Supplier➡</Link>
          </Button>
        )}
      </ul>


    </div>
  );
}

export default Header;
