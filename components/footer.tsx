"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Yugank Mahale
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mechanical Engineer & Filmmaker passionate about creating innovative solutions and compelling visual
              stories.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Certificates", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase())
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Education</h3>
            <p className="text-gray-400 text-sm">
              Fr. Conceicao Rodrigues College of Engineering
              <br />
              Mechanical Engineering
              <br />
              2023 - 2027
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Yugank Mahale © 2025
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
