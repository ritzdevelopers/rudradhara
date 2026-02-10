"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// const ALL = [
//   "/gallery/Product images-01.jpg",
//   "/gallery/Product images-02.jpg",
//   "/gallery/Product images-03.jpg",
//   "/gallery/Product images-04.jpg",
//   "/gallery/Product images-05.jpg",
//   "/gallery/Product images-06.jpg",
//   "/gallery/Product images-07.jpg",
//   "/gallery/Product images-08.jpg",
//   "/gallery/Product images-09.jpg",
//   "/gallery/Product images-10.jpg",
//   "/gallery/Product images-11.jpg",
//   "/gallery/Product images-12.jpg",
//   "/gallery/Product images-13.jpg",
//   "/gallery/Product images-14.jpg",
//   "/gallery/Product images-15.jpg",
//   "/gallery/Product images-16.jpg",
//   "/gallery/Product images-17.jpg",
//   "/gallery/Product images-18.jpg",
//   "/gallery/Product images-19.jpg",
//   "/gallery/Product images-20.jpg",
//   "/gallery/Product images-21.jpg",
//   "/gallery/Product images-22.jpg",
//   "/gallery/Product images-23.jpg",
//   "/gallery/Product images-24.jpg",
//   "/gallery/Product images-25.jpg",
// ];

const RUDRAKSHA_IMAGES = [
  "/gallery/rudraksha/Copy of 20260106_172412.jpg",
  "/gallery/rudraksha/Copy of 20260106_180535.jpg",
  "/gallery/rudraksha/Copy of 20260106_180543.jpg",
  "/gallery/rudraksha/Copy of 20260106_180549.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0019.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0020.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0028.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0030.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0032.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0035.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0043.jpg",
  "/gallery/rudraksha/Copy of IMG-20260106-WA0045.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0004.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0005.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0006.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0007.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0012.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0013.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0014.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0015.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0019.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0020.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0021.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0031.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0034.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0035.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0038.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0039.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0041.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0043.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0045.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0050.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0051.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0053.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0054.jpg",
  "/gallery/rudraksha/Copy of IMG-20260107-WA0055.jpg",
  "/gallery/rudraksha/Copy of Product_Rudraksha.JPG",
  "/gallery/rudraksha/Copy of Product_Rudraksha_A.JPG",
  "/gallery/rudraksha/Copy of Product_Rudraksha_C(1).JPG",
  "/gallery/rudraksha/Copy of Product_Rudraksha_C.JPG",
  "/gallery/rudraksha/Copy of Product_Rudraksha_Mat.JPG",
   "/gallery/Product images-13.jpg",
  "/gallery/Product images-14.jpg",
  "/gallery/Product images-15.jpg",
];

const BRACELET_IMAGES = [
  "/gallery/bracelets/837a6d30-d039-4403-b8e4-69a0dbbf082b.jpg",
  "/gallery/bracelets/Amethyst_Video.jpeg",
  "/gallery/bracelets/Cherry Quartz 2.jpeg",
  "/gallery/bracelets/Cherry Quartz.jpeg",
  "/gallery/bracelets/Copy of 03_Shop_Inside_Right.JPG",
  "/gallery/bracelets/Copy of 03_Shop_Inside_Right_A.JPG",
  "/gallery/bracelets/Copy of Product_Bracelets_Different_Mukhi.JPG",
  "/gallery/bracelets/Copy of Product_Bracelets_Different_Mukhi_A.JPG",
  "/gallery/bracelets/Copy of Product_Bracelets_Stones.JPG",
  "/gallery/bracelets/Copy of Product_Bracelets_Stones_with_Charms.JPG",
  "/gallery/bracelets/Dalmatian Jasper.jpeg",
  "/gallery/bracelets/Green Aventurine.jpeg",
  "/gallery/bracelets/Grey Jasper.jpeg",
  "/gallery/bracelets/Howlite.jpeg",
  "/gallery/bracelets/New Agate Stone.jpeg",
  "/gallery/bracelets/Red Jasper.jpeg",
  "/gallery/bracelets/Rose Quartz.jpeg",
  "/gallery/bracelets/Rose Quartz_..jpeg",
  "/gallery/bracelets/Rose Quartz_.jpeg",
  "/gallery/bracelets/Ruby Zoisite stone.jpeg",
  "/gallery/bracelets/Rudraksha, Karungali and Sphatik bracelet.jpeg",
  "/gallery/bracelets/Sodalite stone.jpeg",
  "/gallery/bracelets/Sulemani Hakik.jpeg",
  "/gallery/bracelets/Tiger eyes.jpeg",
  "/gallery/bracelets/Tree Agate_Video.jpeg",
  "/gallery/bracelets/Vein Agate.jpeg",
  "/gallery/bracelets/WhatsApp Image 2026-01-30 at 5.31.47 PM.jpeg",
  "/gallery/bracelets/WhatsApp Image 2026-01-30 at 5.31.49 PM.jpeg",
  "/gallery/bracelets/Yellow Aventurine.jpeg",
  "/gallery/bracelets/Amethyst.mp4",
  "/gallery/bracelets/Cherry Quartz_video.mp4",
  "/gallery/bracelets/Green Aventurine_Video.mp4",
  "/gallery/bracelets/Grey Jasper_Video.mp4",
  "/gallery/bracelets/Howlite_video.mp4",
  "/gallery/bracelets/Red Jasper_Video.mp4",
  "/gallery/bracelets/Sodalite stone_video.mp4",
  "/gallery/bracelets/Sulemani Hakik_video.mp4",
  "/gallery/bracelets/Tiger eyes_Video.mp4",
  "/gallery/bracelets/Tree Agate.mp4",
  "/gallery/bracelets/Vein Agate_Video.mp4",
  "/gallery/bracelets/WhatsApp Video 2026-01-30 at 5.31.47 PM.mp4",
  "/gallery/bracelets/WhatsApp Video 2026-01-30 at 5.31.50 PM.mp4",
  "/gallery/bracelets/WhatsApp Video 2026-01-30 at 5.32.15 PM.mp4",
  "/gallery/bracelets/Yellow Aventurine_video.mp4",
];

const SHIVLING_IMAGES = [
  "/gallery/shivling/Copy of IMG-20260106-WA0013.jpg",
  "/gallery/shivling/Copy of IMG-20260106-WA0014.jpg",
  "/gallery/shivling/Copy of IMG-20260106-WA0015.jpg",
  "/gallery/shivling/Copy of IMG-20260106-WA0016.jpg",
  "/gallery/shivling/Copy of Product_Narmadeshwar_Lingam.JPG",
  "/gallery/shivling/Copy of Product_Narmadeshwar_Lingam_Small.JPG",
  "/gallery/shivling/Copy of Product_Narmadeshwar_Lingam_Small_A.JPG",
  "/gallery/shivling/Copy of Product_Spatik_Shiv_Lingam.JPG",

  "/gallery/shivling/Copy of VID-20260107-WA0066.mp4",
  "/gallery/shivling/Copy of VID-20260107-WA0075.mp4",
];

const SHANKH_IMAGES = [
  "/gallery/Shankh/Copy of Product_Golden_Shankh.JPG",
  "/gallery/Shankh/Copy of Product_Golden_Shankh_A.JPG",
];

const LIVE_COPPER_IMAGES = [
  "/gallery/Live-Copper/Copy of Product_Absorbing_Live_Copper_AdiYogi.JPG",
  "/gallery/Live-Copper/Copy of Product_Absorbing_Live_Copper_AdiYogi_B.JPG",
  "/gallery/Live-Copper/Copy of Product_Absorbing_Live_Copper_Adiyogi_A.JPG",
  // "/gallery/Live-Copper/WhatsApp Video 2026-01-22 at 2.07.16 PM.mp4",
  // "/gallery/Live-Copper/WhatsApp Video 2026-01-22 at 2.09.13 PM.mp4",
];

const GALLERY_CATEGORIES: { title: string; images: string[] }[] = [
  { title: "Rudraksha", images: RUDRAKSHA_IMAGES },
  // { title: "Kavach", images: [ALL[1], ALL[2]] },
  { title: "Bracelet", images: BRACELET_IMAGES },
  // { title: "Gems", images: ALL.slice(9, 12) },
  { title: "Shivling Set", images: SHIVLING_IMAGES },
  { title: "Mala", images: [] },
  { title: "Live Copper", images: LIVE_COPPER_IMAGES },
  { title: "Shankh", images: SHANKH_IMAGES },
  { title: "Agarbatti", images: ["/gallery/agarbatti/agarbatti.jpg"] },
];




const BLACK_MALA_IMAGES = [
  "/gallery/Black-Mala/1585537b-24eb-4ef6-b120-c54fc1b0faad.jpg",
  // "/gallery/Black-Mala/Copy of 20260106_180316.jpg",
  "/gallery/Black-Mala/WhatsApp Image 2026-01-19 at 3.22.01 PM (1).jpeg",
  "/gallery/Black-Mala/WhatsApp Image 2026-01-19 at 3.22.01 PM.jpeg",
  "/gallery/Black-Mala/WhatsApp Image 2026-01-19 at 3.22.02 PM (1).jpeg",
  "/gallery/Black-Mala/WhatsApp Image 2026-01-19 at 3.22.02 PM.jpeg",
  // "/gallery/Black-Mala/WhatsApp Video 2026-01-19 at 3.22.02 PM.mp4",
];

const KARUNGALI_MALA_IMAGES = [
  "/gallery/Karungali-Mala/Copy of 20260106_180259.jpg",
  "/gallery/Karungali-Mala/Karungali mala.jpeg",
  // "/gallery/Karungali-Mala/Karungali mala_video.mp4",
];

const SPATIK_MALA_IMAGES = [
  // "/gallery/Spatik-Mala/Sphatik mala.mp4",
  "/gallery/Spatik-Mala/Sphatik mala2.jpeg",
  "/gallery/Spatik-Mala/Sphatik mala3.jpeg",
  "/gallery/Spatik-Mala/Sphatik mala_.jpeg",
  // "/gallery/Spatik-Mala/Sphatik mala_Video.mp4",
  // "/gallery/Spatik-Mala/Sphatik with rudraksha.mp4",
  "/gallery/Spatik-Mala/WhatsApp Image 2026-01-30 at 5.32.29 PM.jpeg",
  "/gallery/Spatik-Mala/WhatsApp Image 2026-01-30 at 5.32.35 PM.jpeg",
];

const TULSI_MALA_IMAGES = [
  "/gallery/Tulsi-Mala/Premium.jpg",
  // "/gallery/Tulsi-Mala/Super.mp4",
];

const MALA_SECTIONS: { title: string; images: string[] }[] = [
  { title: "Black Mala", images: BLACK_MALA_IMAGES },
  { title: "Tulsi Mala", images: TULSI_MALA_IMAGES },
  { title: "Spatik Mala", images: SPATIK_MALA_IMAGES },
  { title: "Karungali Mala", images: KARUNGALI_MALA_IMAGES },
];

 

function S1() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const initialCounts = GALLERY_CATEGORIES.map((c) => Math.min(6, c.images.length));
  const [counts, setCounts] = useState<number[]>(initialCounts);
  const prevCountsRef = useRef<number[]>(initialCounts);
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const offset = 120;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
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
  
  useEffect(() => {
    const prev = prevCountsRef.current;
    // Animate any newly revealed items per category
    counts.forEach((cnt, i) => {
      if (cnt > prev[i]) {
        const prevCum = prev.slice(0, i).reduce((a, b) => a + b, 0) + prev[i];
        const newCum = counts.slice(0, i).reduce((a, b) => a + b, 0) + counts[i];
        const newEls = cardsRef.current.slice(prevCum, newCum).filter(Boolean);
        if (newEls.length > 0) {
          gsap.set(newEls, { y: 60, opacity: 0 });
          gsap.to(newEls, { y: 0, opacity: 1, duration: 1.0, ease: "expo.out", stagger: 0.05 });
        }
      }
    });
    prevCountsRef.current = counts;
  }, [counts]);
  
  
  

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-[35px] xl:px-[70px]">

      <h1 className="font-bold text-black text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-montserrat text-center mb-10 sm:mb-12">
        Gallery
      </h1>

      <div className="max-w-[1300px] mx-auto space-y-8 sm:space-y-10">
        {GALLERY_CATEGORIES.map((cat, catIdx) => (
          <div
            key={cat.title}
            id={cat.title.toLowerCase().replace(/\s+/g, "-")}
            className="w-full scroll-mt-[140px]"
          >
            <h2 className="font-montserrat font-bold text-black text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-4 sm:mb-5">
              {cat.title}
            </h2>
            {cat.title !== "Mala" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {cat.images.slice(0, counts[catIdx]).map((img, index) => {
                    const visibleCounts = counts;
                    const globalIndex = visibleCounts.slice(0, catIdx).reduce((acc, n) => acc + n, 0) + index;
                    const isVideo = img.toLowerCase().endsWith(".mp4");
                    return (
                      <div
                        key={`${cat.title}-${index}`}
                        ref={(el) => {
                          if (el) cardsRef.current[globalIndex] = el;
                        }}
                        className="group relative w-full aspect-square rounded-xl overflow-hidden opacity-0 h-auto"
                      >
                        {isVideo ? (
                          <video
                            src={img}
                            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                            muted
                            autoPlay
                            loop
                            playsInline
                            preload="metadata"
                            onClick={() => setOpenVideo(img)}
                          />
                        ) : (
                          <Image
                            src={img}
                            alt={`${cat.title} Image`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />
                      </div>
                    );
                  })}
                </div>
                {counts[catIdx] < cat.images.length && (
                  <div className="flex justify-center mt-4 sm:mt-5">
                    <button
                      type="button"
                      onClick={() =>
                        setCounts((arr) => {
                          const next = [...arr];
                          next[catIdx] = Math.min(arr[catIdx] + 9, cat.images.length);
                          return next;
                        })
                      }
                      className="bg-[#6C3E1A] text-white h-[40px] sm:h-[42px] px-5 sm:px-6 rounded-[4px] font-open-sans font-bold text-[13px] sm:text-[14px]"
                    >
                      Load more
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-6 sm:space-y-8">
                {MALA_SECTIONS.map((sec, sidx) => {
                  const base = counts.slice(0, catIdx).reduce((acc, n) => acc + n, 0);
                  return (
                    <div key={sec.title} className="w-full">
                      <h3 className="font-montserrat font-semibold text-black text-[16px] sm:text-[18px] md:text-[20px] mb-3">
                        {sec.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {sec.images.map((img, index) => {
                          const globalIndex = base + sidx * 100 + index; // stable indexing block per subsection
                          const isVideo = img.toLowerCase().endsWith(".mp4");
                          return (
                            <div
                              key={`${sec.title}-${index}`}
                              ref={(el) => {
                                if (el) cardsRef.current[globalIndex] = el;
                              }}
                              className="group relative w-full aspect-square rounded-xl overflow-hidden h-auto"
                            >
                              {isVideo ? (
                                <video
                                  src={img}
                                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                                  muted
                                  autoPlay
                                  loop
                                  playsInline
                                  preload="metadata"
                                  onClick={() => setOpenVideo(img)}
                                />
                              ) : (
                                <Image
                                  src={img}
                                  alt={`${sec.title} Image`}
                                  fill
                                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                              )}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      {openVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenVideo(null)} />
          <div className="relative z-10 w-full flex items-center justify-center">
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setOpenVideo(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black shadow-md flex items-center justify-center font-bold text-[18px]"
            >
              ×
            </button>
            <video
              src={openVideo}
              className="rounded-lg shadow-lg max-w-[90vw] max-h-[80vh] w-auto h-auto"
              controls
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default S1;
