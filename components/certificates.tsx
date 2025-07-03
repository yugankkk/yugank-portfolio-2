"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Certificates() {
  const certificates = [
    {
      title: "Azure - DevOps Getting Started",
      issuer: "SkillShare",
      date: "2025",
      credentialId: "3fcc0e77-2209-4186-8fed-2585861baf91",
      description: "Comprehensive understanding of cloud services and Microsoft Azure platform fundamentals.",
      skills: ["Cloud Computing", "Azure Services", "Virtual Machines", "Storage Solutions"],
      verified: true,
      image: "/images/devops.png",
    },
    {
      title: "Deloitte Australia - Technology job simulation",
      issuer: "Forage",
      date: "2025",
      credentialId: "kPCiBT7RHdgxogba9",
      description:
        "Problem Solving using Python programming and Data analysis , Professional writing for pitching the project.",
      skills: ["Python", "Replit Ai", "Writing", "Data analysis", "Professional Communication"],
      verified: true,
      image: "/images/deloitte.png",
    },
    {
      title: "Prakalp 3.0",
      issuer: "IEEE CRCE",
      date: "2025",
      credentialId: "",
      description: "Hardware Project - Wind Powered Mobile Charging Station",
      skills: ["Electronics", "3D printing", "Chip management", "Microprocessors", "Circuit Design"],
      verified: true,
      image: "/images/prakalp.png",
    },
    {
      title: "Mood Indigo Quickcut-51",
      issuer: "IIT Bombay",
      date: "2025",
      credentialId: "",
      description:
        "Winner at Mood Indigo Quickcut-51, Asia's largest college cultural festival, for innovative project presentation.",
      skills: ["Presentation", "Project Management", "Leadership", "Film Making", "Direction", "video editing"],
      verified: true,
      image: "/images/moodindigo.jpeg",
    },
    {
      title: "Film Society - CRCE",
      issuer: "Filmmaking Council",
      date: "2025",
      credentialId: "",
      description:
        "Professional certification in Video-making and Direction Courtesy and Work experience for the Students' Council.",
      skills: [
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Camera Operation",
        "Color Grading",
        "Scriptwriting",
        "Direction",
        "Video Editing",
        "Film Production",
      ],
      verified: true,
      image: "/images/filmsco.jpeg",
    },
    {
      title: "CINE-CRCE",
      issuer: "Fr. Conceicao Rodrigues College of Engineering",
      date: "2025",
      credentialId: "",
      description: "Winner at CINE-CRCE, an inter-college short film competition, for innovative project presentation.",
      skills: ["Video Editing", "Direction", "Scriptwriting", "Cinematography", "Sound Design"],
      verified: true,
      image: "/images/cine.jpeg",
    },
  ]

  return (
    <section id="certificates" className="py-32 relative px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl lg:text-8xl font-nirvana mb-8 tracking-tight">
            CERTIFICATES & <span className="text-blue-400">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16" />
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-marigold">
            Professional certifications and achievements that validate my expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full group">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    {cert.verified && (
                      <Badge className="bg-green-600 text-white flex items-center font-marigold">
                        <Award className="w-3 h-3 mr-1" />
                        VERIFIED
                      </Badge>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-futura text-white mb-3">{cert.title}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-400 font-marigold">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed font-marigold">{cert.description}</p>

                    <div>
                      <p className="text-sm font-futura text-blue-400 mb-3">SKILLS COVERED:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs font-marigold">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                   
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/30 p-10 border border-blue-500/20 apple-blur">
            <h3 className="text-3xl font-futura mb-6 text-white">CONTINUOUS LEARNING</h3>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto font-marigold text-lg leading-relaxed">
              I believe in continuous learning and professional development. These certifications represent my
              commitment to staying current with industry trends and best practices.
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
