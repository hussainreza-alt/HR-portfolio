import React from "react";

export function Hero(){
    return(
        <>
        <div className="h-screen grid justify-center justify-self-center items-center align-middle mt-0 p-10 lg:p-20 bg-linear-to-b from-[#FFF8DC] via-75% to-white w-screen ">

            <div className=" w-full sm:w-[75%] lg:w-[65%] justify-self-center align-middle items-center mb-5">
                <div className=" w-full justify-self-center align-middle items-center p-5">
                    <p className="sm:text-4xl md:text-5xl black font-black text-center align-middle">I help businesses get a clear and functional websites without the usual complexity</p>
                    <p className="sm:text-xl md:text-2xl text-gray-700 justify-center text-center mt-4">Simple, fast, and built to work actually</p>
                </div>

                {/* buttons */}
                <div className="flex lg:gap-[10%] sm:gap-[15%] sm:text-xs md:text-xl w-[90%] justify-center justify-self-center align-middle items-center mt-[5%]">
                    <a href="" className="w-fit p-0 mr-2 bg-none border-none">
                        <div id="btn1" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("work").scrollIntoView({behavior: "smooth"})}} className=" p-4 sm:w-[20vh] md:p-4 lg:min-w-[30vh] lg:max-w-fit text-center rounded-2xl bg-black font-semibold text-white cursor-pointer outline-1 outline-black">
                            <p>View Work</p>
                        </div>
                    </a>
                    <a href="" className="w-fit border-none ml-2 bg-none">
                        <div onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact").scrollIntoView({behavior: "smooth"})}} id="btn2" className="btn sm:w-[20vh] p-4 lg:min-w-[30vh] lg:max-w-fit text-center rounded-2xl bg-white font-semibold text-black outline-1 outline-black cursor-pointer ">
                            <p>Contact</p>
                        </div>
                    </a>
                </div>
            </div>    
        </div>
        </>
    )
}