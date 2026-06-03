import React from "react";
import { useState, useEffect } from "react";
import { WorkPro } from "./WorkPro";

export function Header(){

    const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 200);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const scrollHandle = (target) => {
        document.getElementsByTagName(target).scrollIntoView({ behavior: "smooth" });
      }
    return(
        <>
    <header className={` backdrop-blur-lg grid grid-cols-3 p-5 pr-[10%] pl-[10%] w-screen h-[9vh] justify-self-center items-center top-0 fixed align-middle transition-all duration-500 ${scrolled? `bg-[#333333]/85 z-10 text-white` : `bg-[#FFF8DC] text-black`}`}>

    {/* logo part */}
    <img src="/logo.png" className={` to-blue-950 h-6 md:h-10 lg:h-12 col-start-1 col-end-2 align-middle text-center hover:shadow-lg ${scrolled? "invert" : ""}`} />

    {/* nav items */}
    <nav className="col-start-3 col-end-4 flex gap-[20%] align-middle justify-end sm:text-xl md:text-2xl font-medium">
      <div>
        <a className=" cursor-pointer" onClick={() => {document.getElementById("work").scrollIntoView({behavior: "smooth"})}}>
          <b>Work</b>
        </a>
      </div>
      <div>
        <a className=" cursor-pointer" onClick={() => {document.getElementById("about").scrollIntoView({behavior: "smooth"})}}>
          <b>About</b>
        </a>
      </div>
      <div>
        <a className=" cursor-pointer" onClick={() => {document.getElementById("contact").scrollIntoView({behavior: "smooth"})}}>
          <b>Contact</b>
        </a>
      </div>
    </nav>
  </header>
        </>
    )
}