import React from 'react'
import Logo from '../../assets/food-logo.png'
import { FaCartShopping } from "react-icons/fa6";
import './DarkMode'
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <>
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 w-full z-50'>
            <div className='container py-3 sm:py-0'>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl'>
                        <img src={Logo} alt="Foodie Zone" className='w-10' />Foodie
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <DarkMode />
                        </div>
                        <ul className='hidden sm:flex items-center gap-4'>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
                            </li>
                        </ul>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                            Order
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
