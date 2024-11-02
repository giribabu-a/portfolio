// import {Routes, Route, useLocation} from "react-router-dom";
// import { useEffect } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
// import Education from "./components/education/Education.jsx";
import Projects from "./components/projects/Projects.jsx";
import Achievements from "./components/achievements/Achievements.jsx";
import Contact from "./components/contact/Contact.jsx";

function App(){

  // const location = useLocation()
  // console.log(location)

  // useEffect(()=> {
  //   if(location.hash){
  //     const element = document.getElementById(location.hash.substring(1))
  //     console.log(element)
  //     if(element){
  //       element.scrollIntoView({ behavior: "smooth"})
  //     }
  //   }
  //   else {
  //     window.scrollTo({ top: 0, behavior: "smooth"})
  //   }
  // }, [location]);

  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App;