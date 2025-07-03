"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPulledOut, setIsPulledOut] = useState(true) // NEW: Track if nav is visible

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "contact", label: "CONTACT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const togglePullout = () => {
    setIsPulledOut(!isPulledOut)
    setIsOpen(false) // Close mobile menu when pulling out
  }

  return (
    <>
      {/* Pull-out Toggle Button - Always visible */}
      <motion.button
        onClick={togglePullout}
        className={`fixed top-8 z-[60] transition-all duration-500 ${
          isPulledOut ? "right-8 opacity-0 pointer-events-none" : "right-8 opacity-100 pointer-events-auto"
        } w-12 h-12 bg-gray-900/80 apple-blur border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 hover:border-blue-400`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100 }}
        animate={{ x: isPulledOut ? 100 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ChevronLeft size={20} />
      </motion.button>

      {/* Main Navigation */}
      <AnimatePresence>
        {isPulledOut && (
          <motion.nav
            className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
              scrolled
                ? "apple-blur bg-gray-900/80 border border-gray-700"
                : "bg-gray-900/60 apple-blur border border-gray-800"
            }`}
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            exit={{ y: -100, x: "-50%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-8 py-4 relative">
              {/* Hide/Pull-in Button */}
              <button
                onClick={togglePullout}
                className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                title="Hide Navigation"
              >
                <ChevronRight size={16} />
              </button>

              <div className="flex items-center justify-center w-full">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center space-x-8 w-full">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2 text-sm font-futura font-bold tracking-wider transition-all duration-300 ${
                        activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                          layoutId="activeTab"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <Button variant="ghost" size="lg" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="md:hidden mt-4 py-4 border-t border-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-center px-4 py-3 text-sm font-futura font-bold tracking-wider transition-colors duration-300 ${
                          activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
