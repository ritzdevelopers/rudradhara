function S4() {
    return (
        <section className="w-full flex justify-center items-center px-20 py-[70px]">
            {/* Centered Align Container  */}
            <div className="w-full flex justify-center items-center gap-4">
                {/* Left Side Container  */}
                <div className="bg-[#FFF9EE] rounded-[10px] p-4 max-w-[650px] flex flex-col gap-4 h-[330px] justify-center">
                    <h4 className="font-[700] text-[40px]">
                        Certified and documented
                    </h4>
                    <p className="font-[400] text-[16px]">
                        Every RudraDhara Rudraksha and Gemstone is supported with certification and documentation. <br /> <br />
                        This is our way of keeping the process transparent, so you don’t have to rely on guesswork. <br />  <br />
                        On the product page, you’ll see what’s being stated, and your order includes supporting documentation aligned with that description.
                    </p>
                </div>


                {/* Right Side Container  */}
                <div className="w-[484px] rounded-[10px] overflow-hidden max-h-[330px]">
                    <img src="/authencity-proof/s4/authencity-proof.jpg" alt="" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}

export default S4;