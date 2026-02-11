import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const S10 = () => {
  return (
    <section className="w-full py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
      <div className="max-w-[1372px] xl:max-w-[1500px] 2xl:max-w-[1700px] mx-auto h-auto sm:h-[159px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px]">
        <div className="relative overflow-hidden bg-white rounded-[4px] sm:rounded-[6px] md:rounded-[8px] shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-5 sm:p-6 md:p-7 lg:p-9 xl:p-10 2xl:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5 md:gap-6 border border-[#F6DABC]">
          {/* Light beige semi-circle – top-right of inner container */}
          <div
            className="absolute top-0 right-0 w-[180px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[350px] h-[180px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[350px] aspect-square rounded-full bg-[#F5EBE0] translate-x-[40%] -translate-y-[35%] pointer-events-none"
            aria-hidden
          />
          <div className="relative z-10">
            <h3 className="font-montserrat font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] xl:text-[32px] 2xl:text-[36px] text-[#000000] mb-1 sm:mb-2">
              Rudraksha should feel clear.
            </h3>
            <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#000000]">
              If anything feels confusing, reach out.
            </p>
          </div>
          <Link
            href="/gallery#rudraksha"
            className="relative z-10 inline-flex items-center justify-center gap-2 h-[42px] sm:h-[46px] md:h-[48px] lg:h-[50px] xl:h-[52px] 2xl:h-[54px] px-5 sm:px-6 md:px-6 lg:px-7 xl:px-8 rounded-[4px] bg-[#6C3E1A] text-white font-open-sans font-bold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] btn-slide2 shrink-0 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] lg:min-w-[221px] xl:min-w-[240px] 2xl:min-w-[260px]"
          >
            <p className="font-open-sans font-bold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-white">
              Explore Rudraksha
            </p>
            <MdOutlineArrowOutward className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] xl:w-[28px] xl:h-[28px] text-white shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default S10;
