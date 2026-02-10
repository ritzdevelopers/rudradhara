import styles from "./page.module.css";

function S2() {
    return (
        <section className="w-full flex justify-center items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-14 xl:px-20 xl:py-[70px]">
            {/* Centered Align Container  */}
            <div className={`w-full flex justify-center items-center ${styles.mainContainer}`}>
                {/* Main Text Container  */}
                <div className={`flex flex-col gap-2 sm:gap-3 md:gap-2 items-center text-center max-w-[949px] px-2 sm:px-4 md:px-6 lg:px-0  ${styles.txtContainer}`}>
                    <h2 className="font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-montserrat leading-tight sm:leading-snug md:leading-normal">
                        Our Authenticity Promise
                    </h2>
                    <p className="font-[700] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-montserrat leading-relaxed sm:leading-normal">Rudraksha is personal, and authenticity matters. </p>
                    <p className="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-montserrat mt-2 sm:mt-2.5 md:mt-3 leading-relaxed sm:leading-loose md:leading-normal">This page explains how RudraDhara approaches Rudraksha and our spiritual products, what we verify, what we document, and what you can expect when you choose a piece from us.</p>
                </div>
            </div>
        </section>
    )
}

export default S2;