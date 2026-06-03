import React from "react";

export function WorkPro(){
    return(
        <>
        <div id="work" className=" h-fit w-screen sm:h-fit grid justify-self-center justify-center p-4 pt-15 sm:w-screen ">
            <h2 className="font-bold text-center sm:text-3xl md:text-4xl">Work & Projects</h2>

    {/* containers */}
            <div className="grid lg:grid-cols-[7fr_3fr] scroll-mt-52 pt-10 md:w-full w-[90%] justify-self-center ">
                <div className="p-2 shadow-sm shadow-gray-800 w-full justify-self-center lg:h-full lg:w-[90%] rounded-2xl m-5">
                    <div className=" group relative overflow-hidden w-full rounded-2xl">
                        <img src="/port.png" className=" group-hover:scale-105 transition-transform ease-in duration-300 inset-0 w-full" alt="" />
                    </div>
                    <div className="col-start-1 col-end-2 grid justify-center rounded-2xl overflow-hidden p-5">
                        <div className="grid">
                            <b className="mini sm:mt-2 sm:text-xl md:text-2xl md:mt-5">Vape Shop Website</b> <br /><br />
                            <p><b>What is it:</b> A website for a local vape shop <br />
                            <b>What I did:</b>Designed and built a responsive, user friendly site showing products and contact info <br />
                            <b>Why it matters:</b> Helps customers find and learn about the vape shop online</p>
                        </div>
                        <div onClick={() => {
                            window.open("https://vaporo-store.vercel.app/", "_blank")
                        }} id="btn2" className="rounded-2xl cursor-pointer mt-10 p-4 md:max-w-[30%] sm:justify-self-center min-w-fit text-center grid align-bottom lg:justify-self-start outline-1">
                        <b>View Project</b>
                        </div>
                    </div>
                </div>

                <div className="justify-center lg:w-[90%] justify-self-center rounded-2xl overflow-hidden h-full w-full pt-5 pr-5 pl-5 pb-0 lg:col-start-2 lg:col-end-3 m-5 shadow-sm shadow-gray-800">
                    <div className=" group relative overflow-hidden w-full rounded-2xl">
                        <img src="/clario.png" className=" group-hover:scale-105 transition-transform ease-in duration-300 inset-0 my-2 w-full" alt="" />
                    </div>
                    <div className=" group relative overflow-hidden w-full rounded-2xl">
                        <img src="/craio2.png" className=" group-hover:scale-105 transition-transform ease-in duration-300 inset-0 my-2 w-full" alt="" />
                    </div>
                    <div >
                        <b className="mini sm:mt-2 sm:text-xl md:text-2xl md:mt-5">Product Landing Page</b><br /><br /><br />
                        <p><b>What is it:</b>A landing page for a sleek Saas product <br /> <b>What I did:</b>Created a clean, modern landing page highlighting procut features</p>
                    </div>
                    <div onClick={() => {
                        window.open("https://clario-neon.vercel.app/", "_blank")
                    }} id="btn2" className="rounded-2xl self-end cursor-pointer mt-10 p-4 w-full text-center grid align-bottom justify-self-start outline-1">
                        <b>View Project</b>
                    </div>
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}