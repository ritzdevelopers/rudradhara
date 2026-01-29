import React from "react";
import styles from "./page.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
function S6() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 relative flex justify-center items-center py-10 sm:py-12 md:py-14 lg:py-[70px]">
            {/* Center Align Container  */}
            <div className={`w-full h-auto lg:h-[159px] relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 sm:gap-5 lg:gap-0 border-[1px] border-[#F6DABC] p-6 sm:p-8 md:p-10 lg:p-[45px] rounded-[4px] ${styles.mainContainer}`}>


               {/* Absolute Positioned Elips Image   */}

                <div className="absolute top-0 right-0 w-auto h-[130px] z-0 hidden lg:block 2xl:hidden">
                    <img src="/contact/elips/elips-2.png" alt="Elips" className="w-full h-full" />
                </div>

                <h3 className="font-[400] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-center lg:text-left z-10"><span className="font-[700]">Rudraksha should feel clear.</span> <br className="hidden sm:block" />
                    If anything feels confusing, reach out.</h3>


                <button className="w-full lg:w-[223px] h-[44px] sm:h-[48px] lg:h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[14px] sm:text-[15px] lg:text-[16px] text-white cursor-pointer bg-[#6C3E1A] btn-slide2 shrink-0 z-10">
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] text-white">Explore Rudraksha</p>
                    <MdOutlineArrowOutward className='w-[24px] h-[24px]  text-white' />
                </button>
            </div>
        </section>
    )
}
export default S6;