import Banner from "../global/Banner";
import S2 from "./sections/S2";
import S3 from "./sections/S3";
import S4 from "./sections/S4";
import S5 from "./sections/S5";
import S6 from "./sections/S6";
import S7 from "./sections/S7";
import S8 from "./sections/S8";
function AuthenticityPromise() {
    return (
        <main className="w-full md:mt-[140px] mt-[100px]">
            <Banner desktopImgPath="/authencity-proof/s1/ap-banner.jpg" mobileImgPath="/authencity-proof/s1/authencity-mobile-banner.png" title="Authenticity Promise" ></Banner>
            <S2 />
            <S3 />
            <S4 />
            <S5 />
            <S6 />
            <S7 />
            <S8 />
        </main>
    )
}

export default AuthenticityPromise;