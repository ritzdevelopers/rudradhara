import styles from "./page.module.css";

function S3() {
    return (
        <section className="w-full flex justify-center items-center">
            {/* Centered Align Container  */}
            <div className="w-full relative flex flex-col xl:flex-row">
                {/* Absolute Positioned Deviders  */}
                <div className="absolute inset-0 z-0 flex w-full h-full flex-col lg:flex-row">
                    {/* Left Side Container  */}
                    <div className={`w-full xl:w-[583px] bg-[#6C3E1A] h-full ${styles.lftDiv}`}></div>

                    {/* Right Side Container  */}
                    <div className={`w-full xl:w-[calc(100%-583px)] bg-[#EDD5A9] h-full ${styles.rgtDiv}`}></div>
                </div>


                {/* Main Container  */}
                <div className={`w-full h-full z-10 relative flex flex-col lg:flex-row py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 lg:py-16 lg:px-12 xl:py-[110px] xl:px-20 ${styles.parentContainer}`}>
                    {/* Left Side Container  */}
                    <div className={`w-full xl:w-[583px] h-full relative pb-8 xl:pb-0 mt-[50px] md:mt-0 ${styles.lftDiv}`}>
                        {/* Text Container  */}
                        <div className="flex flex-col gap-3 sm:gap-4 justify-center h-full z-20 relative">
                            <h3 className="font-[400] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-white font-montserrat leading-tight sm:leading-snug md:leading-normal text-center md:text-left  "
                            style={{ lineHeight: '38px' }}
                            >
                                What <br className="hidden md:block" />
                                <span className="font-[700]">"Authentic" </span> <br className="hidden md:block" />
                                means here
                            </h3>
                            <p className="font-[500] text-[14px] sm:text-[15px] md:text-[16px] text-white max-w-full sm:max-w-[280px] md:max-w-[323px] font-montserrat leading-relaxed text-center md:text-left">
                                It is described in a way that respects natural variation, without exaggeration
                            </p>
                        </div>


                        {/* Absolute Positioned Image Container  */}
                        <div className="absolute top-[50%] translate-y-[-50%] hidden md:block -right-4 sm:-right-6 md:right-8 lg:-right-16 xl:-right-20 z-10 opacity-80 xl:opacity-100">
                            <img src="/authencity-proof/s3/s3-rudrakhsh.png" alt="" className={`w-[180px] sm:w-[220px] md:w-[260px] lg:w-[189PX] xl:w-[337px] h-auto ${styles.absImgCont}`} />
                        </div>
                    </div>

                    {/* Right Side Container  */}
                    <div className={`w-full xl:w-[calc(100%-583px)] mt-[60px] md:mt-0 h-full flex justify-start xl:justify-end pt-8 xl:pt-0 ${styles.rgtDiv}`}>
                        <div className="max-w-full xl:max-w-[480px] flex flex-col gap-4 sm:gap-5 relative z-20 lg:ml-[98px] xl:ml-0">
                            {/* Absolute Positioned Image Container  */}
                            <div className="absolute top-[50%] translate-y-[-50%] -left-4 sm:-left-6 md:-left-8 xl:-left-8 hidden sm:block">
                                <img src="/authencity-proof/s3/s-line.png" alt="" className="w-[10px] hidden lg:block sm:w-[12px] md:w-[14px] h-auto" />
                            </div>
                            <h3 className="font-[700] text-[16px] sm:text-[17px] md:text-[18px] text-[#6C3E1A] font-montserrat leading-tight sm:leading-normal text-center md:text-left">
                                When we say  <br />
                                <span className="font-[700] text-[20px] sm:text-[22px] md:text-[24px]">"Authentic and Genuine"</span> , we mean:
                            </h3>
                            <ul className="flex flex-col gap-3 sm:gap-4 font-[400] text-[14px] sm:text-[15px] md:text-[16px] text-black font-open-sans leading-relaxed sm:leading-normal text-center md:text-left">
                                <li>It is a <span className="font-[700]">naturally formed</span></li>
                                <li>It comes with <span className="font-[700]">certification and documentation</span></li>
                                <li>The certification is from a <span className="font-[700]">reputed</span> and <span className="font-[700]">ISO certified  laboratory</span></li>
                                <li>The Rudraksha and stones are clearly <span className="font-[700]">identified and presented clearly</span> (Mukhi, Size, Origin)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default S3;