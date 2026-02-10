import React from "react";
import styles from "./page.module.css";
function S2() {
  return (
    <section className={`w-full py-10 sm:py-12 md:py-14 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-10 flex justify-center items-center`}>

      
      <div className={`flex justify-center self-center items-center text-center ${styles.mainContainer} w-full`}>
        <h2 className="font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] px-4 sm:px-6 lg:px-0 leading-relaxed">Have a question about <span className="font-[700] font-montserrat">
          Rudraksha, Malas, Shiv Lingam or other spiritual products? We're happy to help.</span> If you're unsure where to start, you can also explore our blog for <span className="font-[700] font-montserrat">
            simple beginner guides.</span></h2>
      </div>
    </section>
  )
}

export default S2;