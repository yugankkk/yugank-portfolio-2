"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-8 snap-start">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-7xl lg:text-9xl font-nirvana leading-none tracking-tight">
              <span className="block font-light text-white">HI, I'M</span>
              <span className="block text-blue-400">YUGANK</span>
              <span className="block text-white">MAHALE</span>
            </h1>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-futura text-gray-300 tracking-widest max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            MECHANICAL ENGINEER & FILMMAKER
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-marigold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting stories through film and bringing ideas to life through engineering innovation at Fr. Conceicao
            Rodrigues College of Engineering.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="https://www.youtube.com/@YUGANKMAHALE" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-futura font-bold tracking-wider transition-all duration-300 hover:scale-105"
            >
              VIEW MY FILMS
            </Button>
            </a>
            <a href="/images/CV_yugank.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 text-white hover:bg-white hover:text-black px-12 py-4 text-lg bg-transparent font-futura font-bold tracking-wider transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-3 h-5 w-5" />
              DOWNLOAD CV
            </Button>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8 pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="w-16 h-16 border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  )
}
