"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const shortFilms = [
    {
      title: "RUAB",
      description: "A shortfilm for mood indigo on the theme -heritage and it is a horror/psychological shortfilm .",
      image: "/images/ruab.jpeg",
      duration: "9:55 MIN",
      year: "2025",
      category: "psychological horror",
      awards: ["1st prize at Mood Indigo Quickcut-51"],
      youtube: "https://youtu.be/H2uMnrzWC0g?si=veDmzCz_RpAqNb3C",
    },
    {
      title: "Dvaita",
      description: "A horror , shortfilm on the theme of parallel universes and the concept of duality.",
      image: "/images/dvaita.jpeg",
      duration: "7:01 MIN",
      year: "2025",
      category: "Horror",
      awards: ["1st Prize at CINE-CRCE"],
      youtube: "https://youtu.be/cGObbzRo5fo?si=5yBWPnAj9xCyH6Sl",
    },
    {
      title: "Aakriti",
      description: "An experimental film combining mental and schizophrenic horror.",
      image: "/images/aakriti.jpeg",
      duration: "4:34 MIN",
      year: "2024",
      category: "EXPERIMENTAL , Horror",
      awards: [""],
      youtube: "https://youtu.be/w27WhR6XpOM?si=dIZlAc2wQ9EQgkWa",
    },
  ]

  const engineeringProjects = [
    {
      title: "Wind Powered Mobile Charging Station",
      description: "Designed and built an automated wind powered charger for mobile phones.",
      tech: ["type C modules", "Dynamo MOTORS", "NX CAD", "3D PRINTING", "CIRCUIT DESIGN"],
      status: "COMPLETED",
      year: "2025",
    },
    {
      title: "Maglev Train Model",
      description: "Developed a miniature Maglev train for a physics project for magnetism.",
      tech: ["magnetism", "maglev", "cardboard"],
      status: "COMPLETED",
      year: "2023",
    },
    {
      title: "Student Study Manager Fullstack Code Project with DevOPS",
      description: "Full-stack web application with mobile app integration for student management.",
      tech: ["Node", "React", "Fullstack", "MOBILE APP"],
      status: "COMPLETED",
      year: "2025",
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
                <a
  href={film.youtube}
  target="_blank"
  rel="noopener noreferrer"
  className="block relative w-full h-48 mb-6 rounded-md overflow-hidden group"
>
  <img
    src={film.image}
    alt={film.title}
    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition duration-300">
    <Play className="w-12 h-12 text-blue-400" />
  </div>
</a>



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
          
        </motion.div>
      </div>
    </section>
  )
}
