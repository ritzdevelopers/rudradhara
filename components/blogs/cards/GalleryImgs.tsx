"use client";
import Image from "next/image";


function GalleryImgs({ imgPath }: { imgPath: string }) {
    return (
        <div className="w-[106px] h-[106px] relative rounded-[10px] overflow-hidden">
            <Image src={imgPath} alt="Gallery Img" fill className="object-cover" />
        </div>
    )
}

export default GalleryImgs;