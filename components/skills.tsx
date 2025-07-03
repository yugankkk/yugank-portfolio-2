"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "ENGINEERING",
      skills: ["MECHANICAL DESIGN", "CAD/CAM", "SOLIDWORKS", "AUTOCAD", "THERMODYNAMICS", "MATERIALS SCIENCE"],
      image: "/images/engineering.jpg?height=200&width=300",
    },
    {
      title: "FILMMAKING",
      skills: ["VIDEO EDITING", "SHORT FILMS", "CINEMATOGRAPHY", "POST-PRODUCTION", "STORYTELLING", "ADOBE PREMIERE"],
      image: "/images/film.jpg?height=200&width=300",
    },
    {
      title: "PROGRAMMING",
      skills: ["PYTHON", "FULL STACK DEVELOPMENT", "JAVASCRIPT", "REACT", "NODE.JS", "DATABASE MANAGEMENT"],
      image: "/images/programming.jpeg?height=200&width=300",
    },
    {
      title: "CERTIFICATIONS",
      skills: ["MICROSOFT AZURE", "CLOUD COMPUTING", "DEVOPS", "SYSTEM ARCHITECTURE", "TECHNICAL DOCUMENTATION"],
      image: "/images/certificatios.jpg?height=200&width=300",
    },
  ]

   const achievements = [
    { name: "Deloitte Certification", level: "Intermediate", image: "/images/Deloitte-Logo.wine.jpeg" },
    { name: "FULL STACK DEVELOPMENT", level: "PROFICIENT", image: "/images/Java_(programming_language)-Logo.wine.svg" },
    { name: "PYTHON PROGRAMMING", level: "EXPERT", image: "/images/Python_(programming_language)-Logo.wine.svg?height=100&width=100" },
    { name: "MOOD INDIGO WINNER", level: "ACHIEVEMENT", image: "/images/IIT Bombay Icon Logo.svg" },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative px-8 py-32 snap-start">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl lg:text-8xl font-nirvana mb-8 tracking-tight">
            SKILLS & <span className="text-blue-400">EXPERTISE</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16" />
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-marigold">
            A diverse skill set spanning engineering, filmmaking, and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="text-center space-y-8 p-12 bg-gray-900/20 backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Image Section */}
              <div className="w-full h-48 bg-gray-800/50 border border-gray-700 overflow-hidden mb-6">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-3xl font-futura text-white mb-8">{category.title}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-6 py-3 bg-gray-800/50 text-gray-300 text-lg font-marigold border border-gray-700/50 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-futura mb-16 text-white">KEY ACHIEVEMENTS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 text-center"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Achievement Image */}
                <div className="w-20 h-20 mx-auto mb-4 border border-gray-700 overflow-hidden">
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-futura text-white mb-3 text-lg">{achievement.name}</h4>
                <span className="text-gray-400 font-marigold">{achievement.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
