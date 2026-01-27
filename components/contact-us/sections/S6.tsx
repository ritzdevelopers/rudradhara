import React from "react";

function S6() {
    return (
        <section className="w-full py-[70px]  px-20 relative flex justify-center items-center px-20 py-[70px]">
            {/* Center Align Container  */}
            <div className="w-full h-159px relative flex justify-between items-center border-[1px] border-[#F6DABC] p-[45px] rounded-[4px]">
                <h3 className="font-[400] text-[32px]"><span className="font-[700]">Rudraksha should feel clear.</span> <br />
                    If anything feels confusing, reach out.</h3>


                    <button className="w-[223px] h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[16px] text-white cursor-pointer bg-[#6C3E1A]">
                            <p className="text-[16px] font-[700] text-white">Explore Rudraksha</p><img src="/icons/ct-arr1.png" alt="Send" className="w-[15px] h-[15px]" />
                        </button>
            </div>
        </section>
    )
}
export default S6;