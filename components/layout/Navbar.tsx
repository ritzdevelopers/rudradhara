"use client";

import React from 'react'

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full z-50'>

            {/* Row 1  */}
            <div className="w-full bg-white flex justify-between items-center px-20 py-2">
                {/* Left Side Logo Container  */}
                <div><img className='cursor-pointer w-[123px] h-[79px]' src="/images/logo/rdh-logo.png" alt="Rudradhara Logo" 
                /></div>

                {/* Right Side Link Container  */}
                <div className='flex items-center gap-10'><ul className='
                font-semibold text-[13px] text-black
                flex items-center gap-10
                list-none 
                '>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Blogs</li>
                    <li className='cursor-pointer'>Learn How to Choose</li>
                    <li className='cursor-pointer'>Visit the Learning Hub</li>
                    <li className='cursor-pointer'>Calculator</li>
                    <li className='cursor-pointer'  >Contact Us</li>
                </ul>
                    <button className='bg-[#6C3E1A] cursor-pointer text-white w-[181px] h-[38px] rounded-[4px]'>Explore Rudraksha</button>
                </div>
            </div>

            {/* Row 2  */}
            <div className='w-full h-[47px] bg-[#C87A2A] flex justify-between items-center px-20'>
                <ul className='font-semibold text-[15px] flex items-center gap-20 text-white'>
                    <li className='cursor-pointer'  >Kavach</li>
                    <li className='cursor-pointer'>Bracelet</li>
                    <li className='cursor-pointer'>Gems</li>
                    <li className='cursor-pointer'>Shivling Set</li>
                    <li className='cursor-pointer'>Rudraksha</li>
                    <li className='cursor-pointer'>Mala</li>
                    <li className='cursor-pointer'>Live Copper</li>
                    <li className='cursor-pointer'>Shankh</li>
                    <li className='cursor-pointer'>Agarbatti</li>
                </ul>
                
                <ul className='font-semibold text-[13px] flex items-center gap-16 text-white'>
                <li className='cursor-pointer'>Mauritius store</li>
                <li className='cursor-pointer'>Transparent selection</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;