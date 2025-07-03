"use client"

import { motion } from "framer-motion"
import { GraduationCap, Film, Wrench, Award } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "EDUCATION",
      description: "Mechanical Engineering at Fr. Conceicao Rodrigues College of Engineering (2023-2027)",
    },
    {
      icon: Film,
      title: "FILMMAKER",
      description: "Video editor and short film maker with a passion for storytelling",
    },
    {
      icon: Wrench,
      title: "ENGINEER",
      description: "Mechanical engineering student with innovative problem-solving skills",
    },
    {
      icon: Award,
      title: "ACHIEVER",
      description: "Mood Indigo winner with multiple certifications in tech and engineering",
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative px-8 py-32 snap-start">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl lg:text-8xl font-nirvana mb-8 tracking-tight">
            ABOUT <span className="text-blue-400">ME</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16" />
        </motion.div>

        <motion.div
          className="space-y-12 mb-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-marigold">
            I'm Yugank Mahale, a passionate mechanical engineering student at Fr. Conceicao Rodrigues College of
            Engineering, currently in my journey from 2023 to 2027.
          </p>
          <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-marigold">
            Beyond the world of gears and mechanisms, I'm deeply immersed in the art of storytelling through film. As a
            video editor and short film maker, I craft visual narratives that captivate and inspire audiences.
          </p>
          <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-marigold max-w-4xl mx-auto">
            My unique blend of technical engineering expertise and creative filmmaking skills allows me to approach
            problems from multiple perspectives, creating innovative solutions that bridge technology and artistry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="text-center space-y-6 p-8 bg-gray-900/20 backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-20 h-20 bg-blue-600 flex items-center justify-center mx-auto">
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-futura text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-marigold">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
