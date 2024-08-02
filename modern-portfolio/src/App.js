import { useEffect, useState } from "react";
import "./App.css";
import UseMediaQuery from "./hooks/UseMediaQuery";
import { Navbar } from "./Scenes/Navbar";
import DotGroup from "./Scenes/DotGroup";
import Landing from "./Scenes/Landing";
import LineGradient from "./Componeents/LineGradient";
import MySkills from "./Scenes/MySkills";
import About from "./Scenes/About";
import Education from "./Scenes/Education";
import Projects from "./Scenes/Projects";
import Contact from "./Scenes/Contact";
import Cursor from "./Componeents/Cursor";
import { Empty } from "./Scenes/Empty";
import { scroller } from "react-scroll";

function App() {

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  const [selectedPage, setSelectedPage] = useState("home");
  console.log(selectedPage)
  const iaAboveMediumScreen = UseMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setSelectedPage("home")
    const handleScroll = () => {
      if (window.screenY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

  

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="app bg-black">
      <Cursor />
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className=" w-5/6  mx-auto md:h-[95%]">
        {iaAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
           setSelectedPage ={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      <LineGradient />
      </div>


      <div className=" w-5/6 mx-auto md:h-[90%]">
        <About />
        <LineGradient />
        <Education />
        <LineGradient />
        <MySkills />
        <LineGradient />
        <Projects />
        <LineGradient />
        <Contact setSelectedPage={setSelectedPage} />
        {/* <Contact /> */}
        {/* <LineGradient /> */}
        <Empty />
      </div>
    </div>
  );
}

export default App;
