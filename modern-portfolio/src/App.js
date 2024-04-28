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


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const iaAboveMediumScreen = UseMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-black">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className=" w-5/6  mx-auto md:h-full">
{iaAboveMediumScreen && (
  <DotGroup
  selectedPage={selectedPage}
  setSelectedPage={setSelectedPage}
  />
)}
<Landing  setSelectedPage={setSelectedPage} />
      </div>

<LineGradient />

<div className=" w-5/6 mx-auto md:h-full">
  <About />
  <Education />
  <MySkills />
  <Projects />
  <Contact />
</div>

    </div>
  );
}

export default App;
