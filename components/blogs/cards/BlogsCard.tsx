"use client";
import Image from "next/image";
function BlogsCard({ imgPath, title, date, slug, para }: { imgPath: string, title: string, date: string, slug: string, para: string }) {
    return (
       <div className="flex flex-col sm:flex-row min-h-[200px] sm:min-h-[220px] md:min-h-[230px] xl:h-[237px] items-start gap-3 sm:gap-4 cursor-pointer" onClick={() => window.open(`/blogs/${slug}`, '_blank')}>
            {/* Left Side Image Container  */}
             <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[391px] h-[180px] sm:h-[200px] md:h-[220px] xl:h-full relative rounded-[10px] overflow-hidden flex-shrink-0">
                <Image src={imgPath} alt={title} fill className="object-cover" />
             </div>
             {/* Right Side Content Container  */}
            <div className="w-full hover:shadow-[0px_0px_10px_0px_rgba(189,189,189,0.25)] sm:w-[calc(100%-280px-1rem)] md:w-[calc(100%-320px-1rem)] lg:w-[calc(100%-350px-1rem)] xl:w-[406px] border-[1px] min-h-[180px] sm:min-h-[200px] md:min-h-[220px] xl:h-full border-[#FFF6E6] flex flex-col gap-3 sm:gap-3.5 md:gap-4 p-4 sm:p-5 md:p-5.5 xl:p-6 rounded-[10px] bg-white">
                <p className="font-[400] text-[11px] sm:text-[11.5px] md:text-[12px] text-[#535353] font-open-sans leading-relaxed">{date}</p>
                <h3 className="font-[600] text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] xl:text-[22px] text-[#000000] font-montserrat hover:underline cursor-pointer leading-tight sm:leading-snug md:leading-normal">{title}</h3>
                <p className="font-[400] text-[13px] sm:text-[13.5px] xl:text-[14px] text-[#000000] font-open-sans leading-relaxed sm:leading-normal line-clamp-3 sm:line-clamp-4">{para}</p>
            </div>
       </div>
    )
}

export default BlogsCard;