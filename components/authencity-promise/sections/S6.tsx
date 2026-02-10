import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./page.module.css";


function S6() {
    return (
        <section className="w-full flex justify-center items-center px-4 pb-8 sm:px-6 sm:pb-10 md:px-10 md:pb-12 lg:px-16 lg:pb-14 xl:px-20 xl:pb-[70px]">
            {/* Centered Align Container  */}
            <div className={`w-full flex flex-col md:flex-row justify-center items-end gap-6 sm:gap-8 md:gap-2 lg:gap-0   ${styles.mainContainer}`}>
                {/* Left Side Container  */}
                <div className="w-full xl:w-auto  xl:h-[640px] flex justify-start lg:justify-end items-start xl:items-end">
                    {/* Text Container  */}
                    <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 w-full xl:w-auto">
                        <h6 className="font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[20px] xl:text-[40px] font-montserrat leading-tight sm:leading-snug md:leading-normal text-center md:text-left">
                            How we present products
                        </h6>
                        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-[0px] xl:gap-[45px] items-start sm:items-end">

                            {/* Left Side Text Container  */}
                            <div className="flex flex-col gap-6 sm:gap-8 md:gap-[35px] lg:gap-[38px] xl:gap-[40px] w-full sm:w-auto">
                                <div className="flex flex-col gap-2 sm:gap-[8px] md:gap-[9px] xl:gap-[10px]">
                                    <h6 className="font-[700] text-[16px] sm:text-[17px] md:text-[18px]  xl:text-[20px] font-montserrat leading-tight sm:leading-snug text-center md:text-left">
                                        Clear close-ups
                                    </h6>
                                    <p className="max-w-full sm:max-w-[320px] md:max-w-[340px] xl:max-w-[364px] font-[400] text-[14px] sm:text-[15px] xl:text-[16px] font-open-sans leading-relaxed sm:leading-normal text-center md:text-left">
                                        We aim to show the Rudraksha clearly, so you can see:
                                    </p>
                                    <ul className="font-[400] text-[12px] sm:text-[13px] xl:text-[14px] list-disc list-inside [&>li::marker]:text-[#6C3E1A] flex flex-col gap-[1px] pl-4 [&>li::marker]:text-[14px] sm:[&>li::marker]:text-[16px] xl:[&>li::marker]:text-[18px]">
                                        <li>Comfort for daily wear</li>
                                        <li>Suitability for malas and bracelets</li>
                                        <li>Overall look and feel</li>
                                    </ul>
                                </div>


                                <div className="flex flex-col gap-2 sm:gap-[8px] md:gap-[9px] xl:gap-[10px]">
                                    <h6 className="font-[700] text-[16px] sm:text-[17px] md:text-[18px]  xl:text-[20px] font-montserrat leading-tight sm:leading-snug text-center md:text-left">
                                        Clear product information
                                    </h6>
                                    <p className="max-w-full sm:max-w-[320px] md:max-w-[340px] xl:max-w-[364px] font-[400] text-[14px] sm:text-[15px] xl:text-[16px] font-open-sans leading-relaxed sm:leading-normal text-center md:text-left">
                                        Every Rudraksha product page is structured around key details:
                                    </p>
                                    <ul className="font-[400] text-[12px] sm:text-[13px] xl:text-[14px] list-disc list-inside [&>li::marker]:text-[#6C3E1A] flex flex-col gap-[1px] [&>li::marker]:text-[14px] sm:[&>li::marker]:text-[16px] xl:[&>li::marker]:text-[18px] pl-[15px] md:pl-0">
                                        <li>Mukhi</li>
                                        <li>Origin (where applicable)</li>
                                        <li>Size (mm)</li>
                                        <li>Format (loose bead, mala, bracelet)</li>
                                        <li>Basic care notes</li>
                                    </ul>
                                </div>
                            </div>


                            {/* Right Side Image Container  */}
                            <div className="w-full sm:w-[200px] md:w-[240px] hidden lg:block lg:w-[175px] xl:w-[290px] shrink-0">
                                <img src="/authencity-proof/s6/s6-im1.jpg" alt="" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-full xl:w-auto   xl:h-[640px] bg-[#FFF9EF] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] xl:gap-[70px] p-6 sm:p-8 md:p-10 lg:p-[32px] xl:p-[38px]">
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-[30px] lg:gap-[17px] xl:gap-[35px]">
                        <h5 className="font-[400] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[29px] font-montserrat leading-tight sm:leading-snug md:leading-normal text-center md:text-left">
                            <span className="font-[700] inline-block mb-3 md:mb-0">A simple guide:</span>
                            <br  />
                            What to look for in Rudraksha
                        </h5>

                        <div className="flex flex-col gap-5 sm:gap-6 md:gap-[25px] lg:gap-[10px] xl:gap-[30px]">
                            <p className="font-[700] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] max-w-full sm:max-w-[350px] md:max-w-[380px] xl:max-w-[400px] font-open-sans leading-relaxed sm:leading-normal text-center md:text-left">
                                Certification builds confidence and it's helpful to know the basics:
                            </p>
                            <ul className="font-[400] text-[12px] sm:text-[13px] xl:text-[14px] font-open-sans [&>li::marker]:text-[#6C3E1A] list-disc list-inside flex flex-col gap-[1px] [&>li::marker]:text-[14px] sm:[&>li::marker]:text-[16px] xl:[&>li::marker]:text-[18px] pl-4">
                                <li>Natural texture over artificial shine</li>
                                <li>Mukhi lines that appear naturally formed</li>
                                <li>Slight irregularities (common in natural beads)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
                        <p className="font-[400] text-[14px]  xl:text-[16px] max-w-full sm:max-w-[320px] md:max-w-[340px] xl:max-w-[350px] font-open-sans leading-relaxed sm:leading-normal text-center md:text-left">
                            For deeper clarity, the Learning Hub covers Nepal vs Indonesian, sizing, care, and common misconceptions.
                        </p>

                        <button className='cursor-pointer btn-slide2 w-full sm:min-w-[200px] lg:min-w-[233px] h-[44px] sm:h-[48px] max-w-full sm:max-w-[239px] lg:h-[50px] bg-[#6C3E1A] rounded-[4px] flex border-[1px] border-[#6C3E1A] justify-center items-center gap-2 md:gap-2 px-1 '>
                            <p className='text-[12px] lg:text-[15px] font-[700] text-[#ffffff] font-open-sans'>Learn How to Choose</p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default S6;