"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const row2Ref = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                if (currentScrollY > lastScrollY.current && !isScrolled) {
                    // Scrolling down - hide Row 2 behind Row 1
                    setIsScrolled(true);
                    if (row2Ref.current) {
                        gsap.to(row2Ref.current, {
                            y: -47,
                            clipPath: "inset(0% 0% 100% 0%)",
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                } else if (currentScrollY < lastScrollY.current && isScrolled) {
                    // Scrolling up - show Row 2 from behind Row 1
                    setIsScrolled(false);
                    if (row2Ref.current) {
                        gsap.to(row2Ref.current, {
                            y: 0,
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                }
            } else {
                // At top - always show Row 2
                if (isScrolled) {
                    setIsScrolled(false);
                    if (row2Ref.current) {
                        gsap.to(row2Ref.current, {
                            y: 0,
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                }
            }
            
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    // Close mobile menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='fixed top-0 left-0 w-full z-50 '>
            {/* Row 1  */}
            <div className="relative z-10 w-full bg-white flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-2">
                {/* Left Side Logo Container  */}
                <div>
                    <img 
                        className='cursor-pointer w-[80px] h-[50px] sm:w-[100px] sm:h-[65px] md:w-[123px] md:h-[79px]' 
                        src="/images/logo/rdh-logo.png" 
                        alt="Rudradhara Logo" 
                    />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center gap-6 xl:gap-10'>
                    <ul className='font-[600] text-[11px] xl:text-[13px] text-black flex items-center gap-4 xl:gap-10 list-none font-open-sans'>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>About Us</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>Blogs</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors hidden xl:block'>Learn How to Choose</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors hidden xl:block'>Visit the Learning Hub</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>Calculator</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>Contact Us</li>
                    </ul>
                    <button className='bg-[#6C3E1A] cursor-pointer text-white w-[140px] xl:w-[181px] h-[34px] xl:h-[38px] rounded-[4px] font-open-sans font-[700] text-[12px] xl:text-[15px] hover:bg-[#5a3315] transition-colors'>
                        Explore Rudraksha
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMobileMenu}
                    className='lg:hidden p-2 text-[#6C3E1A] hover:bg-gray-100 rounded transition-colors'
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <HiX className='w-[30px] h-[30px]' />
                    ) : (
                        <HiMenu className='w-[30px] h-[30px]' />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`lg:hidden fixed top-[65px] md:top-[94px] left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-20 ${
                    isMobileMenuOpen ? 'max-h-[calc(100vh-79px)] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className='px-4 py-4 space-y-4'>
                    <ul className='flex flex-col gap-4 font-[600] text-[14px] text-black list-none font-open-sans'>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            About Us
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            Blogs
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            Learn How to Choose
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            Visit the Learning Hub
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            Calculator
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            Contact Us
                        </li>
                    </ul>
                    <button className='w-full bg-[#6C3E1A] cursor-pointer text-white h-[44px] rounded-[4px] font-open-sans font-[700] text-[15px] hover:bg-[#5a3315] transition-colors'>
                        Explore Rudraksha
                    </button>
                </div>
            </div>

            {/* Row 2 Wrapper - Creates the "behind" effect */}
            <div className={`relative w-full h-[47px] overflow-hidden ${isMobileMenuOpen ? 'z-10' : 'z-0'}`}>
                <div 
                    ref={row2Ref}
                    className='absolute top-0 left-0 w-full h-[47px] bg-[#C87A2A] flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20'
                    style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                >
                {/* Desktop Row 2 Content */}
                <div className='hidden lg:flex w-full justify-between items-center gap-8'>
                    <ul className='font-[600] text-[13px] xl:text-[15px] flex items-center justify-between w-[75%] text-white font-open-sans'>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Kavach</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Bracelet</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Gems</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Shivling Set</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Rudraksha</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Mala</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Live Copper</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Shankh</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Agarbatti</li>
                    </ul>
                    
                    <ul className='font-[600] text-[11px] xl:text-[13px] flex items-center gap-6 xl:gap-8 text-white font-open-sans'>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Mauritius store</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Transparent selection</li>
                    </ul>
                </div>

                {/* Mobile Row 2 Content */}
                <div className='lg:hidden w-full flex justify-between items-center overflow-x-auto scrollbar-hide'>
                    <ul className='font-[600] text-[12px] sm:text-[13px] flex items-center gap-4 sm:gap-6 text-white font-open-sans'>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Kavach</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Bracelet</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Gems</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Shivling</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Rudraksha</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Mala</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Copper</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Shankh</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Agarbatti</li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;