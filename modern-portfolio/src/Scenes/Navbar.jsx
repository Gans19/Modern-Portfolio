import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
 
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? " text-yellow" : "text-white"
      }
    hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreen = UseMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage? "" : "bg-red"
  return (
    <nav className={`${navbarBackground} z-40 w-full top-0 py-6`}>
      <div className=" flex items-center justify-between mx-auto w-5/6">
        <h4 className=" text-3xl font-bold ">Hello</h4>

        {/* desktop-menu */}
        {isAboveSmallScreen ? (
          <div className=" justify-between flex gap-16  text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div>
            <button
              className=" bg-red p-2"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <p> =_= </p>
            </button>
          </div>
        )}
      </div>
      {/* desktop-menu */}

{
    !isAboveSmallScreen && isMenuToggle && (
        <div className=" fixed right-0 bottom-0 h-full bg-blue w-[300px] transition ease-in-out duration-1500 ">
            {/* close icon */}
            <div className=" flex justify-end p-12">
<button onClick={()=> setIsMenuToggle(!isMenuToggle)}>
    <p>X</p>
</button>
            </div>

 {/* menu */}
<div className=" flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
<Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
</div>


        </div>
    )
}


    </nav>
  );
};
