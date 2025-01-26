"use client"

import { motion } from "framer-motion"

const AbstractAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            fill="none"
            stroke="rgba(0, 180, 216, 0.2)"
            strokeWidth="2"
            d="M100,10 C120,10 150,30 150,50 C150,70 130,90 110,90 C90,90 70,70 70,50 C70,30 80,10 100,10 Z"
            animate={{
              d: [
                "M100,10 C120,10 150,30 150,50 C150,70 130,90 110,90 C90,90 70,70 70,50 C70,30 80,10 100,10 Z",
                "M100,10 C130,10 160,40 160,70 C160,100 130,120 100,120 C70,120 40,100 40,70 C40,40 70,10 100,10 Z",
                "M100,10 C120,10 150,30 150,50 C150,70 130,90 110,90 C90,90 70,70 70,50 C70,30 80,10 100,10 Z",
              ],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default AbstractAnimation

