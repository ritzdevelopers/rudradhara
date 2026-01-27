import React from "react";

function S3() {
    return (
        <section className="w-full py-[70px] px-20 border-b-[1px] border-t-[1px] border-[#F6DABC] flex flex-col items-center gap-[45px]">

            {/* Row 1  */}
            <div className="flex justify-center items-center text-center w-full">
                <h3 className="font-[700] text-[40px]">Visit Our Store in Mauritius</h3>
            </div>

            {/* Row 2  */}
            <div className="w-full flex flex-col gap-[30px]">
                {/* Grid Div 1  */}
                <div className="w-full grid grid-cols-3">
                    <div className="w-full max-w-[403px] h-[302px] border-[1px] border-[#F6DABC] p-4">
                        <img src="/contact/s3/ct-s3-i1.png" alt="Rudraksha Store" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-full max-w-[403px] h-[302px] border-[1px] border-[#F6DABC] p-4 flex flex-col justify-center items-center gap-[27px]">
                        <div className="flex flex-col gap-[0px] text-center">
                            <p className="font-[500] text-[14px]">Store address</p>
                            <p className="font-[400] text-[29px]">Royal Road Mare D’albert</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-[49px] h-[49px] border-[1px] border-[#EEEEEE] rounded-full flex justify-center items-center">
                                <img src="/icons/phone-icn.png" alt="Phone" className="w-[18px]" />
                            </div>
                            <p className="font-[400] text-[16px]"><span className="font-[700]">+230</span> 5259 0394</p>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className="w-[49px] h-[49px] border-[1px] border-[#EEEEEE] rounded-full flex justify-center items-center">
                                <img src="/icons/mail-icn.png" alt="Mail" className="w-[18px]" />
                            </div>
                            <p className="font-[400] text-[16px]">contact@rudradhara.mu</p>
                        </div>
                    </div>


                    <div className="w-full max-w-[403px] h-[302px] p-4 flex flex-col justify-center items-center gap-[25px] text-center">

                        <div className="w-[123px] h-auto"><img src="/contact/s3/ct-s3-logo.png" alt="Rudraksha Store" className="w-full h-full object-cover" /></div>

                        <div className="text-center flex flex-col gap-[8px]">
                            <p className="font-[600] text-[20px]">
                                Hours
                            </p>
                            <p className="font-[400] text-[16px]">Monday to Saturday: 10:00 AM – 6:00 PM <br />
                                Sunday: 10:00 AM – 2:00 PM
                            </p>
                        </div>

                        <div className="text-center flex flex-col gap-[15px]">
                            <p className="font-[400] text-[14px] text-[#525252]">
                                Shop can be opened on an appointment basis
                            </p>
                            <button className="w-full px-6 h-[50px] bg-[#6C3E1A] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[16px] text-white cursor-pointer">
                                <p className="text-[16px] font-[700] text-white">Book an appointment on WhatsApp</p>
                                <img src="/icons/ct-arr1.png" alt="WhatsApp" className="w-[15px] h-[15px]" />
                            </button>
                        </div>


                    </div>
                </div>

                {/* Div 2  */}
                <div className="w-full flex flex-col items-center text-center gap-[15px]">
                    <div className="w-full">
                        <img src="/contact/s3/ct-s3-map.png" alt="Rudraksha Store" className="w-full h-full " />
                    </div>
                    <p className="font-[400] text-[14px] text-[#000000] max-w-[490px]">For the best experience, please send us a message before visiting us to allow you explore the Store calmly.</p>
                </div>
            </div>
        </section>
    )
}

export default S3;