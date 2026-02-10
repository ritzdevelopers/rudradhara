import styles from "./page.module.css";

function S4() {
    return (
        <section className="w-full flex justify-center items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-14 xl:px-20 xl:py-[70px] border-b-[1px] border-[#F8DEAE]">
            {/* Centered Align Container  */}
            <div className={`w-full flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-4 ${styles.mainContainer}`}>
                {/* Left Side Container  */}
                <div className="bg-[#FFF9EE] rounded-[10px]
                 px-4 py-6 sm:px-6 sm:py-6 md:px-4 md:py-5 lg:px-8 lg:p-4 xl:px-8 xl:p-4
                  max-w-full sm:max-w-[600px] md:max-w-[650px] xl:max-w-[690px] w-full xl:w-auto 
                  flex flex-col gap-3 sm:gap-3.5 md:gap-4
                 md:h-[240px] lg:h-[320px] xl:h-[330px] 
                   justify-center">
                    <h4 className="font-[700] text-[24px] sm:text-[28px] md:text-[19px] lg:text-[23px] xl:text-[40px] font-montserrat leading-tight sm:leading-snug md:leading-normal text-center md:text-left">
                        Certified and documented
                    </h4>
                    <p className="font-[400] text-[12px] lg:text-[14px] xl:text-[16px] font-montserrat leading-relaxed sm:leading-loose md:leading-normal text-center md:text-left">
                        Every RudraDhara Rudraksha and Gemstone is supported with certification and documentation. <br className="hidden sm:block" /> <br className="hidden lg:block" />
                        This is our way of keeping the process transparent, so you don't have to rely on guesswork. <br className="hidden sm:block" />  <br className="hidden lg:block" />
                        On the product page, you'll see what's being stated, and your order includes supporting documentation aligned with that description.
                    </p>
                </div>


                {/* Right Side Container  */}
                <div className="w-full sm:w-[350px] lg:w-[470px] xl:w-[484px] rounded-[10px] overflow-hidden lg:max-h-[310px] xl:max-h-[330px] flex-shrink-0">
                    <img src="/authencity-proof/s4/authencity-proof.jpg" alt="" className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    )
}

export default S4;