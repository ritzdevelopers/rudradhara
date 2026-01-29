"use client"

import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaTiktok, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa6'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      function checkScroll() {
        console.log(window.scrollY);
        if (window.scrollY > 100) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    
      window.addEventListener("scroll", checkScroll);
    
      return () => {
        window.removeEventListener("scroll", checkScroll);
      };
    }, []);
    
    return (
        <footer className='w-full text-white flex justify-end items-center px-4 sm:px-8 md:px-12 lg:px-20 pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] pb-5
        bg-[url(/images/footer/footer-bg.png)] bg-cover bg-center bg-no-repeat bg-black
        '>
            {/* Centere Bottom Align Container  */}
            <div className='w-full flex flex-col gap-6 sm:gap-8 md:gap-10'>

                {/* Row 1  */}
                <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-6 sm:gap-4 lg:gap-0">
                    {/* Col 1  */}
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 sm:gap-12 lg:gap-20">
                        {/* Logo Section  */}
                        <div className='w-[180px] h-[115px] sm:w-[200px] sm:h-[130px] md:w-[220px] md:h-[140px] lg:w-[238px] lg:h-[152px]'><img src="/images/logo/rdh-footer.png" alt="Rudradhara Logo" className='w-full h-full object-contain' /></div>
                        <div className='flex justify-center items-center xl:ml-[6px]'>
                            <div className="flex gap-4 items-center lg:gap-8 border-b-[1px] border-[#EDD5A9] pl-1 pr-4 sm:pr-12 lg:pr-18 pb-2">
                                <p className='font-[400] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]'>Reach Us on WhatsApp</p>
                                <div className="flex gap-2 justify-center items-center"> <img src="/icons/whats-app2.png" alt="WhatsApp" className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px]' />
                                    <p className='font-[700] text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px]'>52590394</p></div>
                            </div>
                        </div>
                    </div>


                    {/* Col 2  */}
                    <div className={`fixed bottom-5 right-5 z-50 ${visible? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                        <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#FACE7F] cursor-pointer hover:bg-[#f5d89f] transition-colors" onClick={scrollToTop}>
                            <p>
                                <svg width="11" height="32" viewBox="0 0 11 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 4.80825e-07L10.2631 8.25H0.736862L5.5 4.80825e-07Z" fill="#6C3E1A" />
                                    <rect x="5" y="32" width="24" height="1" transform="rotate(-90 5 32)" fill="#6C3E1A" />
                                </svg>
                            </p>
                        </div>
                    </div>


                </div>

                {/* Row 2  */}
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-[12rem] text-center lg:text-left">
                    {/* Col1  */}
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                        <div className='flex flex-col gap-6 sm:gap-8'>
                            <div className='flex flex-col gap-3 sm:gap-4 justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-[700] text-[13px] sm:text-[14px] uppercase'>Store address</p>
                                    <p className='font-[400] text-[14px] sm:text-[15px] md:text-[16px]'>Royal Road Mare D'albert</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 sm:gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-[700] text-[13px] sm:text-[14px] uppercase'>Hours</p>
                                    <p className='font-[400] text-[14px] sm:text-[15px]'>Monday to Saturday: 10:00 AM – 6:00 PM</p>
                                    <p className='font-[400] text-[14px] sm:text-[15px]'>Sunday: 10:00 AM – 2:00 PM</p>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <p className='font-[700] text-[13px] sm:text-[14px] uppercase'>Follow us</p>
                                    <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-2">
                                        <a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">
                                            <FaTiktok className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[21px] lg:h-[21px]" />
                                        </a>
                                        <a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">
                                            <FaInstagram className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[21px] lg:h-[21px]" />
                                        </a>
                                        <a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">
                                            <FaXTwitter className="w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] lg:w-[22px] lg:h-[22px]" />
                                        </a>
                                        <a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">
                                            <FaLinkedin className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] lg:w-[26px] lg:h-[26px]" />
                                        </a>
                                        <a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">
                                            <FaYoutube className="w-[23px] h-[23px] sm:w-[25px] sm:h-[25px] lg:w-[27px] lg:h-[27px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Col 2  */}
                        <div className="flex flex-col gap-2">
                            <p className='font-[700] text-[13px] sm:text-[14px] uppercase'>Categories</p>
                            <ul className='flex flex-col gap-0 font-[400] text-[13px] sm:text-[14px] leading-[24px] sm:leading-[28px]'>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Kavach</a></li>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Bracelet</a></li>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Gems</a></li>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Shivling Set</a></li>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Rudraksha</a></li>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Mala</a></li>
                                <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Live Copper</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 3  */}
                    <div className="flex flex-col gap-2">
                        <p className='font-[700] text-[13px] sm:text-[14px] uppercase'>quick links</p>
                        <ul className='flex flex-col gap-0 font-[400] text-[13px] sm:text-[14px] leading-[24px] sm:leading-[28px]'>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">About Us</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Blogs</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Learn How to Choose</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Visit the Learning Hub</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Contact Us</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Mauritius store</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Transparent selection</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Explore Rudraksha</a></li>
                        </ul>
                    </div>


                    {/* Col 4  */}
                    <div className="flex flex-col gap-2 xl:mr-30">
                        <p className='font-[700] text-[13px] sm:text-[14px] uppercase'>quick links</p>
                        <ul className='flex flex-col gap-0 font-[400] text-[13px] sm:text-[14px] leading-[24px] sm:leading-[28px]'>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Calculator</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Explore Rudraksha</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Start with the Basics</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Visit the Learning Hub</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Learn How to Choose</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Our Authenticity Promise</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Explore Collections</a></li>
                            <li><a href="#" className="text-white hover:text-[#EDD5A9] transition-colors cursor-pointer">Store Details</a></li>
                        </ul>
                    </div>
                </div>

                {/* Row 3  */}
                <div className="w-full border-t-2 border-[#966306] flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-4 sm:gap-3 lg:gap-0 pt-4 sm:pt-5 text-center lg:text-left">
                    <div>
                        <p
                            className='font-[400] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]'
                        >© 2026 <span className="font-[700]">RudraDhara</span> All rights reserved. Digital media planned by <span className="font-[700] cursor-pointer hover:text-[#EDD5A9] transition-colors" onClick={() => {
                            window.open("https://ritzmediaworld.com", "_blank")
                        }}>Ritz Media World</span></p>
                    </div>
                    <div className='flex gap-3 sm:gap-4 lg:gap-2 justify-center lg:justify-between items-center'>
                        <p className='font-[400] text-[12px] sm:text-[13px] lg:text-[14px] cursor-pointer hover:text-[#EDD5A9] transition-colors'>Privacy Policy</p>
                        <p className='font-[400] text-[12px] sm:text-[13px] lg:text-[14px] cursor-pointer hover:text-[#EDD5A9] transition-colors'>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer