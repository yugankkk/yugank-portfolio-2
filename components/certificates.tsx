"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Certificates() {
  const certificates = [
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "AZ-900-2024-YM",
      description: "Comprehensive understanding of cloud services and Microsoft Azure platform fundamentals.",
      skills: ["Cloud Computing", "Azure Services", "Virtual Machines", "Storage Solutions"],
      verified: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Tech Institute",
      date: "2024",
      credentialId: "FSWD-2024-001",
      description: "Complete full-stack development certification covering frontend and backend technologies.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      verified: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Python Programming Specialist",
      issuer: "Python Institute",
      date: "2023",
      credentialId: "PY-SPEC-2023-YM",
      description: "Advanced Python programming certification with focus on data structures and algorithms.",
      skills: ["Python", "Data Structures", "Algorithms", "OOP", "Libraries"],
      verified: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mood Indigo Winner",
      issuer: "IIT Bombay",
      date: "2023",
      credentialId: "MI-2023-WINNER",
      description:
        "Winner at Mood Indigo, Asia's largest college cultural festival, for innovative project presentation.",
      skills: ["Innovation", "Presentation", "Project Management", "Leadership"],
      verified: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mechanical Design Certification",
      issuer: "Engineering Council",
      date: "2023",
      credentialId: "MDC-2023-YM",
      description: "Professional certification in mechanical design principles and CAD software proficiency.",
      skills: ["SolidWorks", "AutoCAD", "Mechanical Design", "3D Modeling"],
      verified: true,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Video Production & Editing",
      issuer: "Film Academy",
      date: "2023",
      credentialId: "VPE-2023-001",
      description: "Professional certification in video production, editing techniques, and post-production workflows.",
      skills: ["Adobe Premiere", "After Effects", "Color Grading", "Audio Editing"],
      verified: true,
      image: "/placeholder.svg?height=200&width=300",
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

                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs text-gray-500 font-marigold">CREDENTIAL ID:</span>
                        <span className="text-xs text-blue-400 font-mono">{cert.credentialId}</span>
                      </div>

                      <div className="flex space-x-3">
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent font-marigold">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          VERIFY
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent font-marigold">
                          <Download className="w-3 h-3 mr-1" />
                          DOWNLOAD
                        </Button>
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
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-futura font-bold tracking-wider"
            >
              VIEW ALL CREDENTIALS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
