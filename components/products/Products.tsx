import React from "react";
import S1 from "./sections/S1";
import S2 from "./sections/S2";
import S3 from "./sections/S3";
import S4 from "./sections/S4";
import S5 from "./sections/S5";
import S6 from "./sections/S6";
import S7 from "./sections/S7";

function Products() {
    return (
        <main className="md:mt-[140px] mt-[110px] w-full max-w-[100vw] min-w-0 overflow-x-hidden">
            <S1 />
            <S2 />
            <S3 />
            <S4 />
            <S5 />
            <S6 />
            <S7 />
        </main>
    );
}

export default Products;
