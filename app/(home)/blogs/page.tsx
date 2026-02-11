import S1 from "@/components/blogs/sections/S1";
import Banner from "@/components/global/Banner";
import BlogLayout from "@/components/blogs/BlogLayout";
import BlogOuter from "@/components/blogs/BlogOuter";
import S2 from "@/components/blogs/sections/S2";
function Page({children}: {children: React.ReactNode}) {
    return (
        <div className="md:mt-[140px] mt-[110px]">
             <Banner desktopImgPath="/blogs/outer/LeftSide/blog-outer-banner.jpg" mobileImgPath="/contact/s1/contact-us-mobile-banner.jpg" title="Blogs" />
             <BlogLayout>
                {children}
                <BlogOuter />
             </BlogLayout>
             <S2 heading="" para=""/>
        </div>
    )
}
export default Page;