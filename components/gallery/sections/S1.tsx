"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const GALLERY_IMAGES = [
  "/gallery/Product images-01.jpg",
  "/gallery/Product images-02.jpg",
  "/gallery/Product images-03.jpg",
  "/gallery/Product images-04.jpg",
  "/gallery/Product images-05.jpg",
  "/gallery/Product images-06.jpg",
  "/gallery/Product images-07.jpg",
  "/gallery/Product images-08.jpg",
  "/gallery/Product images-09.jpg",
  "/gallery/Product images-10.jpg",
  "/gallery/Product images-11.jpg",
  "/gallery/Product images-12.jpg",
  "/gallery/Product images-13.jpg",
  "/gallery/Product images-14.jpg",
  "/gallery/Product images-15.jpg",
  "/gallery/Product images-16.jpg",
  "/gallery/Product images-17.jpg",
  "/gallery/Product images-18.jpg",
  "/gallery/Product images-19.jpg",
  "/gallery/Product images-20.jpg",
  "/gallery/Product images-21.jpg",
  "/gallery/Product images-22.jpg",
  "/gallery/Product images-23.jpg",
  "/gallery/Product images-24.jpg",
  "/gallery/Product images-25.jpg",
 
];

function S1() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current) return;
  
    gsap.set(cardsRef.current, {
      y: 60,
    });
  
    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.06,
    });
  
  }, []);
  
  
  

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-[35px] xl:px-[70px]">

      <h1 className="font-bold text-black text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-montserrat text-center mb-10 sm:mb-12">
        Gallery
      </h1>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="group relative w-full aspect-square rounded-xl overflow-hidden opacity-0"
          >
            <Image
              src={img}
              alt="Gallery Image"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default S1;
