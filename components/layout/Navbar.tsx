"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoChevronForward } from 'react-icons/io5';
import { MdDoubleArrow } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
{/* <MdDoubleArrow /> */}
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCategorySliderOpen, setIsCategorySliderOpen] = useState(false);
    const [sliderTop, setSliderTop] = useState(112);
    const row2Ref = useRef<HTMLDivElement>(null);
    const row2WrapperRef = useRef<HTMLDivElement>(null);
    const categorySliderRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const router = useRouter();
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
            if (window.innerWidth >= 768 && isCategorySliderOpen) {
                setIsCategorySliderOpen(false);
            }
            // Calculate slider top position
            if (row2WrapperRef.current && window.innerWidth < 768) {
                const rect = row2WrapperRef.current.getBoundingClientRect();
                setSliderTop(rect.top);
            }
        };

        // Initial calculation
        if (row2WrapperRef.current && window.innerWidth < 768) {
            const rect = row2WrapperRef.current.getBoundingClientRect();
            setSliderTop(rect.top);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen, isCategorySliderOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleCategorySlider = () => {
        setIsCategorySliderOpen(!isCategorySliderOpen);
    };

    // Animate category slider with GSAP
    useEffect(() => {
        if (categorySliderRef.current) {
            if (isCategorySliderOpen) {
                gsap.fromTo(categorySliderRef.current, 
                    { x: '-100%' },
                    { x: '0%', duration: 0.4, ease: 'power2.out' }
                );
            } else {
                gsap.to(categorySliderRef.current, {
                    x: '-100%',
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        }
    }, [isCategorySliderOpen]);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 '>
            {/* Row 1  */}
            <div className="relative z-10 w-full bg-white flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-2">
                {/* Left Side Logo Container  */}
                <div>
                    <img 
                    onClick={() => router.push('/')}
                        className='cursor-pointer w-[80px] h-[50px] sm:w-[100px] sm:h-[65px] md:w-[123px] md:h-[79px]' 
                        src="/images/logo/rdh-logo.png" 
                        alt="Rudradhara Logo" 
                    />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center gap-6 xl:gap-10'>
                    <ul className='font-[600] text-[11px] xl:text-[13px] text-black flex items-center gap-4 xl:gap-10 list-none font-open-sans'>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>Blogs</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors hidden xl:block'>Learn How to Choose</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors hidden xl:block'>Visit the Learning Hub</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>Calculator</li>
                        <li className='cursor-pointer hover:text-[#6C3E1A] transition-colors'>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
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
                           <Link href="/about-us">About Us</Link>
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
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                             Mauritius store
                        </li>
                        <li 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='cursor-pointer hover:text-[#6C3E1A] transition-colors py-2 border-b border-gray-200'
                        >
                            Transparent selection
                        </li>
                    </ul>
                    <button className='w-full bg-[#6C3E1A] cursor-pointer text-white h-[44px] rounded-[4px] font-open-sans font-[700] text-[15px] hover:bg-[#5a3315] transition-colors'>
                        Explore Rudraksha
                    </button>
                </div>
            </div>

            {/* Row 2 Wrapper - Creates the "behind" effect */}
            <div 
                ref={row2WrapperRef}
                className={`relative w-full h-[47px] overflow-hidden ${isMobileMenuOpen ? 'z-10' : 'z-0'}`}
            >
                <div 
                    ref={row2Ref}
                    className='absolute top-0 left-0 w-full h-[47px] bg-[#C87A2A] flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20'
                    style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                >
                {/* Desktop Row 2 Content */}
                <div className='hidden lg:flex w-full justify-between items-center gap-8'>
                    <ul className='font-[600] text-[13px] xl:text-[15px] flex items-center justify-between w-[72%] text-white font-open-sans'>
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

                    {/* Tab Row Content  */}
                  <ul className='font-[600] text-[13px] xl:text-[15px] md:flex items-center justify-between w-full text-white font-open-sans hidden lg:hidden'>
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

                {/* Mobile Row 2 Content (< 768px) */}
                <div className='md:hidden w-full flex items-center justify-between gap-2'>
                    {/* Arrow Icon Button - Left Side */}
                    <button
                        onClick={toggleCategorySlider}
                        className='flex-shrink-0  text-white hover:text-[#EDD5A9] transition-colors'
                        aria-label="Open categories"
                    >
                        <MdDoubleArrow className='w-5 h-5' />
                    </button>

                    {/* Only 4 Links Visible */}
                    <ul className='font-[600] text-[12px] sm:text-[13px] flex items-center gap-3 sm:gap-4 text-white font-open-sans overflow-x-auto scrollbar-hide flex-1 justify-around'>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Kavach</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Bracelet</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Gems</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Shivling</li>
                        <li className='cursor-pointer hover:text-[#EDD5A9] transition-colors whitespace-nowrap'>Mala</li>
                    </ul>
                </div>
                </div>
            </div>

            {/* Backdrop Overlay - Mobile Only (< 768px) */}
            {isCategorySliderOpen && (
                <div
                    className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]'
                    onClick={toggleCategorySlider}
                    style={{ top: `${sliderTop}px` }}
                />
            )}

            {/* Category Slider - Mobile Only (< 768px) */}
            <div
                ref={categorySliderRef}
                className='md:hidden fixed left-0 w-full bg-[#C87A2A] z-[60] transform -translate-x-full'
                style={{ 
                    top: `${sliderTop}px`,
                    height: `calc(100vh - ${sliderTop}px)`
                }}
            >
                {/* Close Button */}
                <div className='w-full flex justify-end items-center px-4 py-3 border-b border-[#B86A20]'>
                    <button
                        onClick={toggleCategorySlider}
                        className='p-2 text-white hover:text-[#EDD5A9] transition-colors'
                        aria-label="Close categories"
                    >
                        <HiX className='w-6 h-6' />
                    </button>
                </div>

                {/* All Categories List */}
                <div className='w-full px-4 py-6 overflow-y-auto' style={{ height: 'calc(100% - 60px)' }}>
                    <ul className='flex flex-col gap-4 font-semibold text-[16px] text-white font-open-sans text-center'>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Kavach
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Bracelet
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Gems
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Shivling Set
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Rudraksha
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Mala
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Live Copper
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Shankh
                        </li>
                        <li 
                            onClick={toggleCategorySlider}
                            className='cursor-pointer hover:text-[#EDD5A9] transition-colors py-2 border-b border-[#B86A20]'
                        >
                            Agarbatti
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;