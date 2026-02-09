function S3() {
    return (
        <section className="w-full flex justify-center items-center">
            {/* Centered Align Container  */}
            <div className="w-full relative flex ">
                {/* Absolute Positioned Deviders  */}
                <div className="absolute inset-0 z-0 flex w-full h-full">
                    {/* Left Side Container  */}
                    <div className="w-[583px] bg-[#6C3E1A] h-full"></div>

                    {/* Right Side Container  */}
                    <div className="w-[calc(100%-583px)] bg-[#EDD5A9] h-full"></div>
                </div>


                {/* Main Container  */}
                <div className="w-full h-full  z-10 relative flex py-[110px] px-20">
                    {/* Left Side Container  */}
                    <div className="w-[583px] h-full relative">
                        {/* Text Container  */}
                        <div className="flex flex-col gap-4 justify-center h-full ">
                            <h3 className="font-[400] text-[40px] text-white">
                                What <br />
                                <span className="font-[700]">“Authentic” </span> <br />
                                means here
                            </h3>
                            <p className="font-[500] text-[16px] text-white max-w-[323px]">
                                It is described in a way that respects natural variation, without exaggeration
                            </p>
                        </div>


                        {/* Absolute Positioned Image Container  */}
                        <div className="absolute top-[50%] translate-y-[-50%] -right-20">
                            <img src="/authencity-proof/s3/s3-rudrakhsh.png" alt="" className="w-[337px] h-auto" />
                        </div>
                    </div>

                    {/* Right Side Container  */}
                    <div className="w-[calc(100%-583px)] h-full flex justify-end">
                        <div className="max-w-[480px] flex flex-col gap-6 relative">
                            {/* Absolute Positioned Image Container  */}
                            <div className="absolute top-[50%] translate-y-[-50%] -left-8">
                                <img src="/authencity-proof/s3/s-line.png" alt="" className="w-[14px] h-auto" />
                            </div>
                            <h3 className="font-[700] text-[18px] text-[#6C3E1A]">
                                When we say  <br />
                                <span className="font-[700] text-[24px]">“Authentic and Genuine”</span> , we mean:
                            </h3>
                            <ul className="flex flex-col gap-4 font-[400] text-[16px] text-black">
                                <li>It is a <span className="font-[700]">naturally formed</span></li>
                                <li>It comes with <span className="font-[700]">certification and documentation</span></li>
                                <li>The certification is from a <span className="font-[700]">reputed</span> and <span className="font-[700]">ISO certified laboratory</span></li>
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