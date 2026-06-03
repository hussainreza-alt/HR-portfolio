import React from "react";

export function Footer(){
    return(
        <>
        <div className="grid items-center align-middle h-[30%] p-4 bg-gray-300">
            <div className="grid items-center align-middle grid-cols-2 m-5">
                <div className=" text-base sm:w-[50%] sm:text-xl wrap-break-word w-full col-start-1 col-end-2 justify-center align-middle items-center">
                    <b>HR</b> <br />
                    <i className="text-gray-800">Building clear and functional websites with purpose</i>
                </div>
                <div className=" flex gap-5 sm:gap-20 justify-self-end col-start-2 col-end-3 w-full p-4 flex-wrap justify-center align-middle items-center text-base sm:text-xl sm:font-semibold">
                    <a onClick={() => document.getElementById("work").scrollIntoView({behavior:"smooth"})}>Work</a>
                    <a onClick={() => document.getElementById("about").scrollIntoView({behavior:"smooth"})}>About</a>
                    <a onClick={() => document.getElementById("Contact").scrollIntoView({behavior:"smooth"})}>Contact</a>
                    <img onClick={() => {
                        window.open("https://github.com/hussainreza-alt", "_blank");
                    }} src="/github.png" alt="" className="w-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-in sm:w-5" />
                </div>
            </div>
            <i className="text-gray-700 justify-self-center"> &copy; 2026 HR. All rights reserved </i>
        </div>
        </>
    )
}