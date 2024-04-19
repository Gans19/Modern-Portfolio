import { useEffect, useState } from "react";
import "./App.css";
import UseMediaQuery from "./hooks/UseMediaQuery";
import { Navbar } from "./Scenes/Navbar";
import DotGroup from "./Scenes/DotGroup";
import Landing from "./Scenes/Landing";


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
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className=" w-5/6 mx-auto md:h-full">
{iaAboveMediumScreen && (
  <DotGroup
  selectedPage={selectedPage}
  setSelectedPage={setSelectedPage}
  />
)}
<Landing  setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
