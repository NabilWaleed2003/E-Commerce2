import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=''>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
           <div>
              <img src='imges/logo.png' alt='' className=' w-32 mb-5'/>
              <p className=' w-full md:w-2/3 text-gray-950'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
           </div>
           
           <div className=''>
            <h3 className='text-xl font-medium mb-5'>COMPANY</h3>
            <ul className='flex flex-col'>
                <li className='mb-2 gap-1 text-gray-600'><a href='#'>Home</a></li>
                <li className='mb-2 gap-1 text-gray-600'><a href='#'>About Us</a></li>
                <li className='mb-2 gap-1 text-gray-600'><a href='#'>Delivery</a></li>
                <li className='mb-2 gap-1 text-gray-600'><a href='#'>Privacy policy</a></li>
            </ul>
           </div>

           <div className=''>
            <h3 className='text-xl font-medium mb-5'>GET IN TOUCH</h3>
            <ul className='flex flex-col'>
                <li className='mb-2 gap-1 text-gray-600'><a href='#'>+1-000-000-0000</a></li>
                <li className='mb-2 gap-1 text-gray-600'><a href='#' className=' flex items-center gap-1'><FaInstagram /> Instagram</a></li>
                <li className='mb-2 gap-1 text-gray-600'><a href='#' className=' flex items-center gap-1'><AiOutlineGooglePlus /> greatstackdev@gmail.com</a></li>
                <li className='mb-2 gap-1 text-gray-600'><a href='#'>Privacy policy</a></li>
            </ul>
           </div>
        </div>

        <div>
            <hr />
            <p className=' text-center py-3 text-sm'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer