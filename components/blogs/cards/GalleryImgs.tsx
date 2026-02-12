"use client";
import Image from "next/image";


function GalleryImgs({ imgPath, link }: { imgPath: string, link: string }) {
    return (
        <div onClick={()=>window.open(link, "_blank")} className="md:w-[106px] md:h-[106px] w-[97px] h-[97px] relative rounded-[10px] overflow-hidden">
            <Image src={imgPath} alt="Gallery Img" fill className="object-cover" />
        </div>
    )
}

export default GalleryImgs;