"use client";
import Image from "next/image";


function GalleryImgs({ imgPath }: { imgPath: string }) {
    return (
        <div className="md:w-[106px] md:h-[106px] w-[97px] h-[97px] relative rounded-[10px] overflow-hidden">
            <Image src={imgPath} alt="Gallery Img" fill className="object-cover" />
        </div>
    )
}

export default GalleryImgs;