"use client"

import { motion } from "framer-motion"
import { CreditCard, Smartphone, Globe, Share2 } from "lucide-react"
import seedrandom from "seedrandom"

const iconComponents = [CreditCard, Smartphone, Globe, Share2]

const FloatingIcons = () => {
  const rng = seedrandom("cyan-vcard-seed")

  const generateRandomPosition = () => ({
    top: `${rng() * 100}%`,
    left: `${rng() * 100}%`,
  })

  const generateRandomSize = () => 32 + rng() * 32

  return (
    <div className="absolute inset-0 pointer-events-none">
      {iconComponents.map((Icon, index) => {
        const position = generateRandomPosition()
        const size = generateRandomSize()
        return (
          <motion.div
            key={index}
            className="absolute text-cyan-300/30"
            style={position}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + rng() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Icon size={size} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingIcons

