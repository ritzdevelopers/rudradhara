import styles from "./page.module.css";


function S7() {
    return (
        <section className="w-full flex justify-center items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-14 xl:px-20 xl:py-[70px] border-t-[1px] border-[#F8DEAE]">
            {/* Centered Align Container  */}
            <div className={`w-full flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-4 lg:gap-12 xl:gap-14 ${styles.mainContainer}`}>
                {/* Left Side Container  */}
                <div className="w-full sm:w-[450px] md:w-[470px] lg:w-[490px] xl:w-[494px] md:min-h-[380px] lg:min-h-[500px] lg:h-full xl:h-[546px] bg-[#FFF9EF] flex flex-col gap-3 sm:gap-3.5 md:gap-4 justify-center px-6 text-center md:text-left py-6 md:py-0">
                    <h6 className="font-[400] text-[24px] sm:text-[28px] md:text-[20px] lg:text-[36px] xl:text-[40px] font-montserrat leading-tight sm:leading-snug md:leading-normal">
                        <span className="font-[700]"> Our approach </span> <br  className="hidden md:block"/> to claims
                    </h6>
                    <p className="font-[400] text-[14px] sm:text-[15px] xl:text-[16px] font-open-sans leading-relaxed sm:leading-loose md:leading-normal">
                        Rudraksha is rooted in tradition and belief. <br className="hidden sm:block" /><br className="hidden sm:block" />
                        We keep descriptions respectful and avoid <br className="hidden sm:block" /> exaggerated and unclaimed superstitious claims. <br className="hidden sm:block" /> The goal is clarity, not hype.
                    </p>
                </div>

                {/* Right Side Container  */}
                <div className="w-full xl:w-auto flex flex-col gap-4 sm:gap-4 md:gap-4">
                    {/* Row 1  */}
                    <div className="flex flex-col sm:flex-row justify-center xl:justify-between gap-4 sm:gap-4">
                        {/* Left Side Card  */}
                        <div className="w-full sm:w-[280px] md:w-[195px] lg:w-[265px] xl:w-[329px] flex flex-col gap-3 sm:gap-3.5 md:gap-4 justify-center">
                            <h4 className="font-[400] text-[24px] sm:text-[28px] md:text-[20px] lg:text-[36px] xl:text-[40px] font-montserrat leading-tight sm:leading-snug md:leading-normal text-center md:text-left">
                                If you need <br  className="hidden md:block"/> <span className="font-[700]">reassurance</span>
                            </h4>
                            <p className="font-[400] text-[14px] sm:text-[15px] xl:text-[16px] font-open-sans max-w-full
                              lg:max-w-[63%] xl:max-w-[65%] leading-relaxed sm:leading-normal text-center md:text-left">If anything feels unclear, we encourage you to:</p>
                        </div>

                        {/* Right Side Card  */}
                        <div className="w-full sm:w-[280px] md:w-[195px] lg:w-[265px] xl:w-[329px] flex flex-col gap-2 sm:gap-2.5 md:gap-3 text-center">
                            <div className="w-full"><img src="/authencity-proof/s7/s7-img1.jpg" alt="If you need reassurance" className="w-full h-auto" /></div>
                            <p className="font-[600] text-[14px] sm:text-[15px] xl:text-[16px] font-montserrat leading-relaxed sm:leading-normal">Visit the store to see pieces in person</p>
                        </div>
                    </div>

                    {/* Row 2  */}
                    <div className="flex flex-col sm:flex-row justify-center xl:justify-between gap-4 sm:gap-4">
                        {/* Right Side Card  */}
                        <div className="w-full sm:w-[280px] md:w-[195px] lg:w-[265px] xl:w-[329px] flex flex-col gap-2 sm:gap-2.5 md:gap-3 text-center">
                            <div className="w-full"><img src="/authencity-proof/s7/s7-img2.jpg" alt="If you need reassurance" className="w-full h-auto" /></div>
                            <p className="font-[600] text-[14px] lg:text-[15px] xl:text-[16px] font-montserrat leading-relaxed sm:leading-normal">Review the product details</p>
                        </div>

                        {/* Right Side Card  */}
                        <div className="w-full sm:w-[280px] md:w-[195px] lg:w-[265px] xl:w-[329px] flex flex-col gap-2 sm:gap-2.5 md:gap-3 text-center">
                            <div className="w-full"><img src="/authencity-proof/s7/s7-img3.jpg" alt="If you need reassurance" className="w-full h-auto" /></div>
                            <p className="font-[600] text-[14px] sm:text-[15px] xl:text-[16px] leading-relaxed sm:leading-normal">Explore our guides</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default S7;