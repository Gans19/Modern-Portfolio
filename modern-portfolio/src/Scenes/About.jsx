import React, { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        console.log("You are on the About page");
      }, []);
      
  return (
    <div  id="about"  className="md:flex md:justify-normal md:items-center md:h-full gap-16 py-10">About</div>
  )
}

export default About