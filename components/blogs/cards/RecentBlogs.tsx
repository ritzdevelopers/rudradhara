"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
function RecentBlogs({ imgPath, title, date, slug }: { imgPath: string, title: string, date: string, slug: string }) {
    const router = useRouter();
    return (
        <div className="w-full border-b-[2px] border-[#FFF9EF] hover:border-[#E5E4E3] transition-all duration-300 pb-4 flex gap-3 cursor-pointer" onClick={() => router.push(`/blogs/${slug}`)}>
            {/* Left Side Image Container  */}
            <div className="h-[69px] w-[200px] relative rounded-[10px] overflow-hidden">
                <Image src={imgPath} alt="Recent Blogs" fill className="object-cover" />
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