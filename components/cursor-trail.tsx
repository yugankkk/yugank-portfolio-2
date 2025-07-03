"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cog, Code, Film, Wrench, Cpu, Zap, Settings, Camera } from "lucide-react"

interface TechParticle {
  x: number
  y: number
  id: number
  type: "gear" | "code" | "film" | "circuit" | "binary"
  size: number
  direction: { x: number; y: number }
  rotation: number
  content?: string
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<TechParticle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const techIcons = [Cog, Settings, Wrench, Code, Film, Camera, Cpu, Zap]
  const binaryStrings = ["101010", "110011", "001101", "111000", "010101", "100110"]
  const codeSnippets = ["{ }", "< />", "( )", "[ ]", "===", "++", "--", "&&"]

  useEffect(() => {
    let animationFrame: number
    let lastSpawnTime = 0

    const updateParticles = (currentTime: number) => {
      // Spawn new particle every 150ms when mouse is moving
      if (currentTime - lastSpawnTime > 150 && (mousePosition.x !== 0 || mousePosition.y !== 0)) {
        setParticles((prevParticles) => {
          const particleTypes: TechParticle["type"][] = ["gear", "code", "film", "circuit", "binary"]
          const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)]

          let content = ""
          if (randomType === "binary") {
            content = binaryStrings[Math.floor(Math.random() * binaryStrings.length)]
          } else if (randomType === "code") {
            content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
          }

          const newParticle: TechParticle = {
            x: mousePosition.x,
            y: mousePosition.y,
            id: Date.now() + Math.random(),
            type: randomType,
            size: Math.random() * 12 + 8, // Random size between 8-20px
            direction: {
              x: (Math.random() - 0.5) * 120, // Random horizontal drift
              y: -Math.random() * 100 - 30, // Float upward
            },
            rotation: Math.random() * 360, // Random initial rotation
            content,
          }

          return [...prevParticles, newParticle].slice(-12)
        })
        lastSpawnTime = currentTime
      }

      animationFrame = requestAnimationFrame(updateParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    animationFrame = requestAnimationFrame(updateParticles)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [mousePosition])

  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((particle) => particle.id !== id))
  }

  const renderParticle = (particle: TechParticle) => {
    const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)]

    switch (particle.type) {
      case "gear":
        return (
          <motion.div
            className="flex items-center justify-center text-blue-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Cog size={particle.size} />
          </motion.div>
        )

      case "code":
        return (
          <div
            className="flex items-center justify-center text-green-400 font-mono font-bold"
            style={{ fontSize: `${particle.size * 0.6}px` }}
          >
            {particle.content}
          </div>
        )

      case "film":
        return (
          <div className="flex items-center justify-center text-purple-400">
            <Film size={particle.size} />
          </div>
        )

      case "circuit":
        return (
          <div className="relative">
            {/* Circuit pattern */}
            <svg width={particle.size} height={particle.size} className="text-cyan-400">
              <path
                d={`M2,2 L${particle.size - 2},2 L${particle.size - 2},${particle.size - 2} L2,${particle.size - 2} Z`}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle cx={particle.size / 2} cy={particle.size / 2} r="2" fill="currentColor" />
              <path
                d={`M${particle.size / 2},2 L${particle.size / 2},${particle.size - 2}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        )

      case "binary":
        return (
          <div
            className="flex items-center justify-center text-orange-400 font-mono font-bold"
            style={{ fontSize: `${particle.size * 0.4}px` }}
          >
            {particle.content}
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center text-blue-400">
            <IconComponent size={particle.size} />
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
            }}
            initial={{
              opacity: 0.9,
              scale: 0,
              rotate: particle.rotation,
            }}
            animate={{
              opacity: 0,
              scale: 1.2,
              x: particle.direction.x,
              y: particle.direction.y,
              rotate: particle.rotation + (particle.type === "gear" ? 180 : 0),
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 2.8,
              ease: "easeOut",
              opacity: { duration: 2.8, ease: "easeOut" },
              scale: { duration: 0.4, ease: "easeOut" },
            }}
            onAnimationComplete={() => removeParticle(particle.id)}
          >
            <div
              style={{
                filter: `drop-shadow(0 0 ${particle.size * 0.3}px currentColor)`,
              }}
            >
              {renderParticle(particle)}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
