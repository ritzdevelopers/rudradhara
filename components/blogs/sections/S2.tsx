import styles from "../page.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
function S2({ heading, para }: { heading: string, para: string }) {
    return (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 relative flex justify-center items-center pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-[70px]">
            {/* Center Align Container  */}
            <div className={`w-full h-auto py-8 sm:py-10 md:py-12 lg:py-14  relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 sm:gap-5 md:gap-6 lg:gap-0 border-[1px] border-[#F6DABC] p-4 sm:p-6 md:p-8 lg:p-[22px] xl:p-[35px] rounded-[4px] ${styles.mainContainer}`}>


                {/* Absolute Positioned Elips Image   */}

                <div className="absolute top-0 right-0 w-auto h-[100px] sm:h-[110px] md:h-[120px] lg:h-[130px] z-0 hidden lg:block ">
                    <img src="/contact/elips/elips-2.png" alt="Elips" className="w-full h-full" />
                </div>

                <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 z-10">
                    <h3 className="font-[700] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-center lg:text-left font-montserrat leading-tight sm:leading-snug md:leading-normal">
                        {heading ? heading : "Our promise is simple"}

                    </h3>
                    <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] max-w-full sm:max-w-[550px] md:max-w-[600px] lg:max-w-[630px] xl:max-w-[650px] leading-relaxed sm:leading-loose md:leading-normal font-open-sans text-center lg:text-left"
                        dangerouslySetInnerHTML={{ __html: para ? para : "Certified Rudraksha and spiritual products, clear documentation, and a calm, learning-first experience built on trust." }}
                    />
                </div>


                <button className="w-full lg:w-[223px] h-[42px] sm:h-[44px] md:h-[46px] lg:h-[48px] xl:h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] text-white cursor-pointer bg-[#6C3E1A] btn-slide2 shrink-0 z-10 xl:mr-10">
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] font-[700] text-white font-open-sans">Explore Rudraksha</p>
                    <MdOutlineArrowOutward className='w-[22px] h-[22px] sm:w-[23px] sm:h-[23px] lg:w-[24px] lg:h-[24px] text-white' />
                </button>
            </div>
        </section>
    )
}
export default S2;