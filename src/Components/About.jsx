import React from "react";

export function About (){
    return(
        <>
        <div id="about" className=" scroll-mt-10 h-fit w-screen grid justify-center align-middle mt-10 ">
            <div className="h-[85%] w-[90%] grid md:grid-cols-2 sm:grid-cols-1 justify-self-center pt-6 justify-center ml-3">
                <div className=" md:col-start-1 md:col-end-2 h-[85%] w-[85%] sm:justify-self-center ">
                    <img src="custom.png" className="h-[95%] rounded-xl justify-self-center" alt="" />
                </div>
                <div className="grid md:col-start-2 md:col-end-3 sm:justify-self-end min-w-full h-fit">
                <div className="grid p-4 h-fit w-full overflowX-wrap">
                    <b className="text-gray-600 mb-0 w-fit font-medium">ABOUT</b>
                    <h2 className="text-black mt-0 font-semibold sm:text-3xl md:text-4xl w-full wrap-break-words h-fit mb-2 ">Building straightforward websites with clarity and purpose</h2>
                    <p className="text-gray-800 w-full wrap-break-word">I'm a web developer focused on creating clean and functional websites without unnecessary complexity. I enjoy turning ideas into responsive and usable experiences that work smoothly across the devices.</p>
                </div>
                <div className="flex md:text-xl sm:text-base gap-5 align-baseline justify-center align-middles sm:justify-self-center p-4 h-auto w-full overflow-wrap flex-wrap ">
                    <div className=" p-4 pl-6 pr-6 rounded-xl bg-gray-300 grid align-middle justify-center w-fit h-fit">
                        <img src="/loc.png" alt="location" className=" justify-self-center w-5 md:w-14" />
                        <br />
                        <b className=" justify-self-center">Based in</b> <i className=" justify-self-center">Pakistan</i>
                    </div>
                    <div className="p-4 pl-6 pr-6 rounded-xl bg-gray-300 grid align-middle justify-center w-fit h-fit">
                        <img src="/img.png" alt="code" className=" justify-self-center w-5 md:w-14  " />
                        <br />
                        <b className=" justify-self-center">Frontend &</b> <i className=" justify-self-center">Backend</i>
                    </div>
                    <div className="p-6 pl-6 pr-6 rounded-xl bg-gray-300 grid align-middle justify-center w-fit h-fit">
                        <img src="/rokect.png" alt="" className=" justify-self-center w-5 md:h-11 md:w-auto" />
                        <br />
                        <b className=" justify-self-center">Currently building</b> <i className=" justify-self-center">Independant projects</i>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}