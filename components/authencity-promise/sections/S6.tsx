import { MdOutlineArrowOutward } from "react-icons/md";

function S6() {
    return (
        <section className="w-full flex justify-center items-center px-20 pb-[70px]">
            {/* Centered Align Container  */}
            <div className="w-full flex justify-center items-center">
                {/* Left Side Container  */}
                <div className="h-[640px] flex justify-end items-end">
                    {/* Text Container  */}
                    <div className="flex flex-col gap-4">
                        <h6 className="font-[700] text-[40px]">
                            How we present products
                        </h6>
                        <div className="flex justify-between gap-[45px] items-end">

                            {/* Left Side Text Container  */}
                            <div className="flex flex-col gap-[40px]">
                                <div className="flex flex-col gap-[20px]">
                                    <h6 className="font-[700] text-[20px]">
                                        Clear close-ups
                                    </h6>
                                    <p className="max-w-[364px] font-[400] text-[16px]">
                                        We aim to show the Rudraksha clearly, so you can see:
                                    </p>
                                    <ul className="font-[400] text-[14px] list-disc list-inside [&>li::marker]:text-[#6C3E1A] flex flex-col gap-[10px]">
                                        <li>Comfort for daily wear</li>
                                        <li>Suitability for malas and bracelets</li>
                                        <li>Overall look and feel</li>
                                    </ul>
                                </div>


                                <div className="flex flex-col gap-[20px]">
                                    <h6 className="font-[700] text-[20px]">
                                        Clear product information
                                    </h6>
                                    <p className="max-w-[364px] font-[400] text-[16px]">
                                        Every Rudraksha product page is structured around key details:
                                    </p>
                                    <ul className="font-[400] text-[14px] list-disc list-inside [&>li::marker]:text-[#6C3E1A] flex flex-col gap-[10px]">
                                        <li>Mukhi</li>
                                        <li>Origin (where applicable)</li>
                                        <li>Size (mm)</li>
                                        <li>Format (loose bead, mala, bracelet)</li>
                                        <li>Basic care notes</li>
                                    </ul>
                                </div>
                            </div>


                            {/* Right Side Image Container  */}
                            <div className="w-[290px]">
                                <img src="/authencity-proof/s6/s6-im1.jpg" alt="" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="h-[640px] bg-[#FFF9EF] flex flex-col gap-[70px] p-[42px]">
                    <div className="flex flex-col gap-[35px]">
                        <h5 className="font-[400] text-[29px]">
                            <span className="font-[700] text-[40px]">A simple guide:</span>
                            <br />
                            What to look for in Rudraksha
                        </h5>

                        <div className="flex flex-col gap-[30px]">
                            <p className="font-[700] text-[20px] max-w-[400px]">
                                Certification builds confidence and it’s helpful to know the basics:
                            </p>
                            <ul className="font-[400] text-[14px] [&>li::marker]:text-[#6C3E1A] list-disc list-inside flex flex-col gap-[20px]">
                                <li>Natural texture over artificial shine</li>
                                <li>Mukhi lines that appear naturally formed</li>
                                <li>Slight irregularities (common in natural beads)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-[400] text-[16px] max-w-[350px]">
                            For deeper clarity, the Learning Hub covers Nepal vs Indonesian, sizing, care, and common misconceptions.
                        </p>

                        <button className='cursor-pointer btn-slide2 w-full sm:min-w-[200px] lg:min-w-[233px] h-[44px] sm:h-[48px] max-w-[239px] lg:h-[50px] bg-[#6C3E1A] rounded-[4px] flex border-[1px] border-[#6C3E1A] justify-center items-center gap-2 md:gap-2 px-1 '>
                            <p className='text-[12px]  lg:text-[15px] font-[700] text-[#ffffff] font-open-sans'>Learn How to Choose</p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default S6;