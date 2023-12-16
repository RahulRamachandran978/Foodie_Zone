import React from 'react'
import FooterLogo from '../../assets/food-logo.png'
import { 
    FaLocationArrow, 
    FaMobileAlt ,
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='bg-gray-100 dark:bg-gray-950'>
            <div className='max-w-[1200px] mx-auto'>
                <div className="grid md:grid-cols-3 py-5">
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 dark:text-white'>
                        <img src={FooterLogo} alt="" className='max-w-[50px]' />
                        FOODIE
                         </h1>
                         <p className='dark:text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quas quasi culpa, vero dolores libero possimus magni esse. Fuga, officia.
                        </p>
                        <br />
                        <div className='flex items-center gap-3 mt-3 dark:text-white'>
                            <FaLocationArrow />
                            <p>Kochi,Kerala</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3 dark:text-white'>
                            <FaMobileAlt />
                            <p>+91 9876543210</p>
                        </div>
                        {/* social handle */}
                        <div className='flex items-center gap-3 mt-6 dark:text-white'>
                            <a href="#">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div className=''>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white'>Links</h1>
                                <ul className='dark:text-gray-500'>
                                    <li className='cursor-pointer'>Home</li>
                                    <li className='cursor-pointer'>About</li>
                                    <li className='cursor-pointer'>Services</li>
                                    <li className='cursor-pointer'>Login</li>
                                </ul>
                            </div>
                        </div>
                        <div className=''>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white'>Links</h1>
                                <ul className='dark:text-gray-500'>
                                    <li className='cursor-pointer'>Home</li>
                                    <li className='cursor-pointer'>About</li>
                                    <li className='cursor-pointer'>Services</li>
                                    <li className='cursor-pointer'>Login</li>
                                </ul>
                            </div>
                        </div>
                        <div className=''>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white'>Links</h1>
                                <ul className='dark:text-gray-500'>
                                    <li className='cursor-pointer'>Home</li>
                                    <li className='cursor-pointer'>About</li>
                                    <li className='cursor-pointer'>Services</li>
                                    <li className='cursor-pointer'>Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-center py-10 border-t-2 border-gray-300/50 dark:text-white/80'>
                    @copyright 2024 All rights reserved || Made with ❤️ by Rahul
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer
