"use client"

import { useEffect, useState, useRef } from "react"
import CursorTrail from "@/components/cursor-trail"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id

        if (entry.isIntersecting) {
          setActiveSection(sectionId)
        }
      })
    }, observerOptions)

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CursorTrail />
      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        <div ref={setSectionRef("home")}>
          <Hero />
        </div>
        <div ref={setSectionRef("about")}>
          <About />
        </div>
        <div ref={setSectionRef("skills")}>
          <Skills />
        </div>
        <div ref={setSectionRef("projects")}>
          <Projects />
        </div>
        <div ref={setSectionRef("certificates")}>
          <Certificates />
        </div>
        <div ref={setSectionRef("contact")}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
