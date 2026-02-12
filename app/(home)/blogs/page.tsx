import S1 from "@/components/blogs/sections/S1";
import Banner from "@/components/global/Banner";
import BlogLayout from "@/components/blogs/BlogLayout";
import BlogOuter from "@/components/blogs/BlogOuter";
import S2 from "@/components/blogs/sections/S2";
function Page({children}: {children: React.ReactNode}) {
    return (
        <div className="md:mt-[140px] mt-[110px]">
             <Banner desktopImgPath="/blogs/outer/LeftSide/blog-outer-banner.jpg" mobileImgPath="/blogs/outer/LeftSide/outer-blog-mobile.png" title="Blogs" />
             <BlogLayout>
                {children}
                <BlogOuter />
             </BlogLayout>
             <S2 heading="Not sure where to begin?" para="Start with <span class='font-[700]'>Rudraksha basics</span>, then explore by purpose, daily wear, japa, or comfort."/>
        </div>
    )
}
export default Page;