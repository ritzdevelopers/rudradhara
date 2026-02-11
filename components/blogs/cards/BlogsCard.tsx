"use client";
import Image from "next/image";
function BlogsCard({ imgPath, title, date, slug, para }: { imgPath: string, title: string, date: string, slug: string, para: string }) {
    return (
       <div className="flex  h-[237px] items-start gap-4 cursor-pointer" onClick={() => window.open(`/blogs/${slug}`, '_blank')}>
            {/* Left Side Image Container  */}
             <div className="w-[371px] h-full relative rounded-[10px] overflow-hidden">
                <Image src={imgPath} alt={title} fill className="object-cover" />
             </div>
             {/* Right Side Content Container  */}
            <div className="w-[406px] border-[1px] h-full border-[#FFF6E6] flex flex-col gap-4 p-6 rounded-[10px] shadow-[0px_0px_10px_0px_rgba(189, 189, 189, 0.4)] bg-white">
                <p className="font-[400] text-[12px] text-[#535353] font-open-sans">{date}</p>
                <h3 className="font-[600] text-[22px] text-[#000000] font-montserrat hover:underline cursor-pointer">{title}</h3>
                <p className="font-[400] text-[14px] text-[#000000] font-open-sans">{para}</p>
            </div>
       </div>
    )
}

export default BlogsCard;