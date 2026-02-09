function S7() {
    return (
        <section className="w-full flex justify-center items-center px-20 py-[70px] border-t-[1px] border-[#F8DEAE]">
            {/* Centered Align Container  */}
            <div className="w-full flex justify-center items-center gap-4">
                {/* Left Side Container  */}
                <div className="w-[494px] h-[546px] bg-[#FFF9EF] flex flex-col gap-4 justify-center px-6">
                    <h6 className="font-[400] text-[40px]">
                        <span className="font-[700]"> Our approach </span> <br /> to claims
                    </h6>
                    <p className="font-[400] text-[16px]">
                        Rudraksha is rooted in tradition and belief. <br /><br />
                        We keep descriptions respectful and avoid <br /> exaggerated and unclaimed superstitious claims. <br /> The goal is clarity, not hype.
                    </p>
                </div>

                {/* Right Side Container  */}
                <div className="flex justify-between gap-4 flex-col">
                    {/* Row 1  */}
                    <div className="flex justify-between gap-4">
                        {/* Left Side Card  */}
                        <div className="w-[329px] flex flex-col gap-4 justify-center max-w-[200px]">
                            <h4 className="font-[400] text-[40px]">
                                If you need <br /> <span className="font-[700]">reassurance</span>
                            </h4>
                            <p className="font-[400] text-[16px]">If anything feels unclear, we encourage you to:</p>
                        </div>

                        {/* Right Side Card  */}
                        <div className="w-[329px] flex flex-col gap-3 text-center">
                            <div className="w-full"><img src="/authencity-proof/s7/s7-img1.jpg" alt="If you need reassurance" className="w-full h-auto" /></div>
                            <p className="font-[600] text-[16px]">Visit the store to see pieces in person</p>
                        </div>
                    </div>

                    {/* Row 2  */}
                    <div className="flex justify-between gap-4">
                        {/* Right Side Card  */}
                        <div className="w-[329px] flex flex-col gap-3 text-center">
                            <div className="w-full"><img src="/authencity-proof/s7/s7-img2.jpg" alt="If you need reassurance" className="w-full h-auto" /></div>
                            <p className="font-[600] text-[16px]">Review the product details</p>
                        </div>

                        {/* Right Side Card  */}
                        <div className="w-[329px] flex flex-col gap-3 text-center">
                            <div className="w-full"><img src="/authencity-proof/s7/s7-img3.jpg" alt="If you need reassurance" className="w-full h-auto" /></div>
                            <p className="font-[600] text-[16px]">Explore our guides</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default S7;