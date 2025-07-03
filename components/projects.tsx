"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const shortFilms = [
    {
      title: "ECHOES OF TOMORROW",
      description: "A sci-fi short film exploring the relationship between technology and humanity.",
      duration: "12 MIN",
      year: "2024",
      category: "SCI-FI DRAMA",
      awards: ["BEST SHORT FILM", "AUDIENCE CHOICE AWARD"],
    },
    {
      title: "THE LAST ENGINEER",
      description: "A documentary-style short film about the last mechanical engineer in an automated world.",
      duration: "8 MIN",
      year: "2024",
      category: "DOCUMENTARY",
      awards: ["TECHNICAL EXCELLENCE AWARD"],
    },
    {
      title: "GEARS OF TIME",
      description: "An experimental film combining mechanical engineering concepts with abstract storytelling.",
      duration: "15 MIN",
      year: "2023",
      category: "EXPERIMENTAL",
      awards: ["INNOVATION IN FILMMAKING"],
    },
  ]

  const engineeringProjects = [
    {
      title: "AUTOMATED SOLAR TRACKING SYSTEM",
      description: "Designed and built an automated solar panel tracking system to maximize energy efficiency.",
      tech: ["ARDUINO", "SERVO MOTORS", "SOLAR PANELS", "C++"],
      status: "COMPLETED",
      year: "2024",
    },
    {
      title: "MECHANICAL STRESS ANALYSIS TOOL",
      description: "Developed a Python-based tool for analyzing mechanical stress in various materials.",
      tech: ["PYTHON", "NUMPY", "MATPLOTLIB", "SCIPY"],
      status: "IN PROGRESS",
      year: "2024",
    },
    {
      title: "SMART IRRIGATION SYSTEM",
      description: "IoT-based irrigation system with moisture sensors and automated water distribution.",
      tech: ["IOT", "SENSORS", "MICROCONTROLLERS", "MOBILE APP"],
      status: "COMPLETED",
      year: "2023",
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative px-8 py-32 snap-start">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl lg:text-8xl font-nirvana mb-8 tracking-tight">
            MY <span className="text-blue-400">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16" />
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-marigold">
            Discover the projects that showcase my passion for filmmaking and engineering innovation
          </p>
        </motion.div>

        {/* Short Films Section */}
        <div className="mb-20">
          <motion.h3
            className="text-4xl font-futura mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            SHORT FILMS
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {shortFilms.map((film, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 p-8 border border-gray-800/50 text-center space-y-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-full h-48 bg-gray-800/50 flex items-center justify-center mb-6">
                  <Play className="w-16 h-16 text-blue-400" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-futura text-white">{film.title}</h4>
                    <span className="text-sm text-gray-400 font-marigold">{film.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-marigold">{film.description}</p>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-blue-400 font-marigold">{film.duration}</span>
                    <span className="text-blue-400 font-marigold">{film.category}</span>
                  </div>
                  {film.awards.length > 0 && (
                    <div className="pt-4 border-t border-gray-800/50">
                      <p className="text-lg font-futura text-yellow-400 mb-3">AWARDS:</p>
                      <div className="space-y-2">
                        {film.awards.map((award, awardIndex) => (
                          <p key={awardIndex} className="text-sm text-gray-400 font-marigold">
                            {award}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Projects Section */}
        <div>
          <motion.h3
            className="text-4xl font-futura mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ENGINEERING PROJECTS
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {engineeringProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 p-8 border border-gray-800/50 space-y-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-futura text-white text-left">{project.title}</h4>
                  <span
                    className={`text-sm px-4 py-2 font-marigold ${
                      project.status === "COMPLETED"
                        ? "bg-green-600/20 text-green-400 border border-green-600/30"
                        : "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed font-marigold text-left">{project.description}</p>
                <div className="space-y-4">
                  <div className="text-left">
                    <p className="text-lg font-futura text-blue-400 mb-3">TECHNOLOGIES:</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-sm px-3 py-2 bg-gray-800/50 text-gray-300 font-marigold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg text-gray-500 font-marigold">{project.year}</span>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="text-sm bg-transparent font-marigold">
                        <Github className="w-4 h-4 mr-2" />
                        CODE
                      </Button>
                      <Button size="sm" variant="outline" className="text-sm bg-transparent font-marigold">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DEMO
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-futura font-bold tracking-wider transition-all duration-300 hover:scale-105"
          >
            VIEW ALL PROJECTS
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
