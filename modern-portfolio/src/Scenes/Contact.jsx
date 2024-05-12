import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      duration : 3
    }
  }


  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    style={{width: "100%", height: "100%"}}
  >
    <motion.path
      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>
  )
}

export default Contact



