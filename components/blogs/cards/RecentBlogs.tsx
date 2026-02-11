"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineVisibility } from "react-icons/md";
function RecentBlogs({ imgPath, title, date, slug }: { imgPath: string, title: string, date: string, slug: string }) {
    const router = useRouter();
    return (
        <div className="w-full   hover:underline transition-all duration-300 pb-2 flex gap-3 cursor-pointer" onClick={() => router.push(`/blogs/${slug}`)}>
            {/* Left Side Image Container  */}
            <div className="h-[69px] w-[150px] relative rounded-[10px] overflow-hidden group">
                <Image src={imgPath} alt="Recent Blogs" fill className="object-cover transition-all duration-300" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 hover:bg-[#5a5a5a6a]  transition-all duration-300 flex items-center justify-center">
                    <MdOutlineVisibility className="text-white text-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
            </div>

            {/* Right Side Text Container  */}
            <div className="w-full flex flex-col gap-1 justify-between h-full">
                <h2 className="font-[600] text-[16px] text-[#000000]">{title}</h2>
                <p className="font-[400] text-[12px] text-[#535353]">{date}</p>
            </div>
        </div>
    )
}

export default RecentBlogs;