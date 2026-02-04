import React from "react";
import Image from "next/image";


const rudrakshaData = [
  // Row 1
  { name: "1 Mukhi", image: "/learn/s4/1-mukhi.png", highlighted: true },
  { name: "2 Mukhi", image: "/learn/s4/2-mukhi.png", highlighted: false, borderTop: false },
  { name: "3 Mukhi", image: "/learn/s4/3-mukhi.png", highlighted: false },
  { name: "4 Mukhi", image: "/learn/s4/4-mukhi.png", highlighted: false,borderTop: false },
  { name: "5 Mukhi", image: "/learn/s4/5-mukhi.png", highlighted: true },
  { name: "6 Mukhi", image: "/learn/s4/6-mukhi.png", highlighted: false,borderTop: false , borderRight: false },
  // Row 2
  { name: "7 Mukhi", image: "/learn/s4/7-mukhi.png", highlighted: false, borderLeft: false },
  { name: "8 Mukhi", image: "/learn/s4/8-mukhi.png", highlighted: false },
  { name: "9 Mukhi", image: "/learn/s4/9-mukhi.png", highlighted: false },
  { name: "10 Mukhi", image: "/learn/s4/10-mukhi.png", highlighted: false },
  { name: "11 Mukhi", image: "/learn/s4/11-mukhi.png", highlighted: false },
  { name: "12 Mukhi", image: "/learn/s4/12-mukhi.png", highlighted: false },
  // Row 3
  { name: "13 Mukhi", image: "/learn/s4/13-mukhi.png", highlighted: true },
  { name: "14 Mukhi", image: "/learn/s4/14-mukhi.png", highlighted: true },
  { name: "15 Mukhi", image: "/learn/s4/15-mukhi.png", highlighted: true },
  { name: "16 Mukhi", image: "/learn/s4/16-mukhi.png", highlighted: true },
  { name: "17 Mukhi", image: "/learn/s4/17-mukhi.png", highlighted: true },
  { name: "18 Mukhi", image: "/learn/s4/18-mukhi.png", highlighted: true,borderRight: false },
  // Row 4
  { name: "19 Mukhi", image: "/learn/s4/19-mukhi.png", highlighted: true,borderLeft: false },
  { name: "20 Mukhi", image: "/learn/s4/20-mukhi.png", highlighted: true },
  { name: "21 Mukhi", image: "/learn/s4/21-mukhi.png", highlighted: true },
  { name: "Gauri Shankar", image: "/learn/s4/gauri-shankar.png", highlighted: true },
  { name: "Trijuti", image: "/learn/s4/trijuti.png", highlighted: true },
  { name: "Chaturbhagi", image: "/learn/s4/chaturbhagi.png", highlighted: false },
  // Row 5
  { name: "Sawaar", image: "/learn/s4/sawaar.png", highlighted: true },
  { name: "Nandi", image: "/learn/s4/nandi.png", highlighted: true,borderBottom: false },
  { name: "Kamal", image: "/learn/s4/kamal.png", highlighted: true },
  { name: "Shankhakar", image: "/learn/s4/shankhakar.png", highlighted: true,borderBottom: false  },
  { name: "Hanuman", image: "/learn/s4/hanuman.png", highlighted: true },
  { name: "Varaha", image: "/learn/s4/varaha.png", highlighted: false,borderBottom: false , borderRight: false },
] as {
  name: string;
  image: string;
  highlighted: boolean;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
}[];

const COLS_DESKTOP = 6;
const COLS_TABLET = 4;
const COLS_SM = 3;
const COLS_MOBILE = 2;
const TOTAL_ITEMS = rudrakshaData.length;

const S4 = () => {

  const getBorderClasses = (index: number) => {
    const isHighlighted = rudrakshaData[index].highlighted;
    const borderColor = isHighlighted ? "border-[#EDD5A9]" : "border-[#E5E5E5]";
    

    const isLastColDesktop = (index + 1) % COLS_DESKTOP === 0;
    const isLastRowDesktop = index >= TOTAL_ITEMS - COLS_DESKTOP;
    
    
    const isLastColTablet = (index + 1) % COLS_TABLET === 0;
    const isLastRowTablet = index >= TOTAL_ITEMS - (TOTAL_ITEMS % COLS_TABLET || COLS_TABLET);
    
   
    const isLastColSm = (index + 1) % COLS_SM === 0;
    const isLastRowSm = index >= TOTAL_ITEMS - (TOTAL_ITEMS % COLS_SM || COLS_SM);
    
    const isLastColMobile = (index + 1) % COLS_MOBILE === 0;
    const isLastRowMobile = index >= TOTAL_ITEMS - (TOTAL_ITEMS % COLS_MOBILE || COLS_MOBILE);

    return {
      borderColor,
      isLastColDesktop,
      isLastRowDesktop,
      isLastColTablet,
      isLastRowTablet,
      isLastColSm,
      isLastRowSm,
      isLastColMobile,
      isLastRowMobile,
    };
  };

  const getCellBorders = (item: any) => {
    return {
        borderTop: item.borderTop === false ? "none" : "1px solid #F8DEAE",
        borderRight: item.borderRight === false ? "none" : "1px solid #F8DEAE",
        borderBottom: item.borderBottom === false ? "none" : "1px solid #F8DEAE",
        borderLeft: item.borderLeft === false ? "none" : "1px solid #F8DEAE",
    }
  }

  return (
    <section className="w-full py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px]  px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
      <div className="max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-1 mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[55px] 2xl:mb-[60px]">
          {/* Step Badge */}
          <div className="relative w-[58px] h-[65px] sm:w-[62px] sm:h-[69px] md:w-[64px] md:h-[70px] lg:w-[65px] lg:h-[71px] xl:w-[68px] xl:h-[74px] 2xl:w-[70px] 2xl:h-[76px]">
            <div className="absolute top-0 left-0 w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[65px] xl:w-[68px] xl:h-[68px] 2xl:w-[70px] 2xl:h-[70px] rounded-full bg-[#EDD5A9] flex flex-col items-center justify-center">
              <span className="text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px] font-semibold text-[#6C3E1A] tracking-wide font-open-sans">
                STEP
              </span>
              <span className="text-[22px] sm:text-[24px] md:text-[24px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-bold text-[#6C3E1A] font-montserrat leading-none -mt-[2px]">
                3
              </span>
            </div>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "10px solid #EDD5A9",
              }}
            />
          </div>

          {/* Title */}
          <h2 className="font-montserrat font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center text-[#1a1a1a] mt-1">
            Understand Mukhi
          </h2>
        </div>

        {/* Rudraksha Grid - Table style borders (border-collapse approach) */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {rudrakshaData.map((item, index) => {

            const borders = getCellBorders(item);
        
          
            
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 bg-white border border-[#F8DEAE]"
                style={borders}
              >
                {/* Image */}
                <div className="relative w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px] 2xl:w-[120px] 2xl:h-[120px] mb-2 sm:mb-3">
                  <Image
                    src={item.image}
                    alt={`${item.name} Rudraksha`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 60px, (max-width: 768px) 75px, (max-width: 1024px) 85px, 110px"
                  />
                </div>

                {/* Name */}
                <h3 className="font-montserrat font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[#1a1a1a]">
                  {item.name}
                </h3>
                <p className="font-open-sans text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#666666]">
                  Rudraksha
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default S4;