import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
import { Header, Hero, WorkPro, Skill, About, Contact, Footer } from "./Components";

function App(){


  // scroll thingy
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 200);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return(
  <>
  <Header/>
  <main>
  <Hero/>
  <WorkPro/>
  <Skill/>
  <About/>
  <Contact/>
  <Footer/>

  {/* project section */}
  
  </main>

  </>)
}
export default App;