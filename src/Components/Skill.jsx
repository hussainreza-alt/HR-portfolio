import React from "react";

export function Skill(){
    return(
        <>
        <div className="md:h-fit grid w-screen justify-center mt-10 pt-10">
            <div className="w-screen h-fit mt-4 p-4 grid">
                <p className="p-1 bg-gray-300 text-gray-800 text-center w-fit rounded-sm justify-self-center sm:text-sm md:text-md">SKILLS & TECHNOLOGIES</p>
                <b className="sm:text-4xl md:text-5xl justify-self-center text-center mt-4 font-semibold">What I Work With</b>
                <p className="md:w-[30%]  h-fit text-gray-800 justify-self-center mt-2 text-center sm:w-fit">The technologies and tools i use to build fast, modren and reliable websites</p>
            </div>

            {/* cards */}

            <div className="w-screen h-fit grid sm:grid-cols-1 md:grid-cols-3 p-4 pr-6">
                <div className="p-6 pb-8 grid md:col-start-1 md:col-end-2 m-4 rounded-xl shadow-sm shadow-black">
                    <img src="/FrontEndo.png" className="w-[15%] mb-4 bg-blue-800/30 rounded-md" alt="" />
                    <b className="font-semibold sm:text-2xl md:text-3xl m-0">Front End</b>
                    <b className=" text-blue-800 sm:text-sm md:text-md">React, Tailwind, JavaScript</b>
                    <hr className="border-t-2 border-gray-600 mt-5 mb-5"/>
                    <p className=" sm:text-md md:text-xl text-justify text-gray-800 ">I build responsive and clean user interfaces that work smoothly across the devices</p>
                </div>

                {/* back end */}

                <div className="p-6 pb-8 grid md:col-start-2 md:col-end-3 m-4 rounded-xl shadow-sm shadow-black">
                    <img src="/BackEnd.png" className="w-[16%] bg-green-600/30 p-2 rounded-xl mb-0 hue-rotate-30" alt="b" />
                    <b className="font-semibold sm:text-2xl md:text-3xl m-0">Front End</b>
                    <b className=" text-green-800 sm:text-sm md:text-md m-0">Node</b>
                    <hr className="border-t-2 border-gray-600 mt-4 mb-4"/>
                    <p className=" sm:text-md md:text-xl text-justify text-gray-800 ">Handling form submissions, APIs and server side logic</p>
                </div>

                {/* focus*/}

                <div className="p-6 pb-8 grid md:col-start-3 md:col-end-4 m-4 rounded-xl shadow-sm shadow-black">
                    <img src="/focus.png" className="w-[15%] bg-purple-600/30 p-1 rounded-xl hue-rotate-55 saturate-100 mb-4 " alt="" />
                    <b className="font-semibold sm:text-2xl md:text-3xl">Front End</b>
                    <b className=" text-purple-950 sm:text-sm md:text-md">Business websites & landing pages</b>
                    <hr className="border-t-2 border-gray-600 mt-5 mb-5"/>
                    <p className=" sm:text-md md:text-xl text-justify text-gray-800 ">Simple, fast and functional solitions without unnecessary complexity</p>
                </div>
            </div>

        </div>
        </>
    )
}