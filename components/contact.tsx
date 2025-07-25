"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
 
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "yugank2mahale@gmail.com",
      href: "mailto:yugank2mahale@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 9322055416",
      href: "tel:+919322055416",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "VIRAR, MAHARASHTRA, INDIA",
      href: "https://maps.app.goo.gl/ZSRVxsY4oqkGNZQeA",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/yugank-mahale/", label: "LINKEDIN" },
    { icon: Github, href: "https://github.com/yugankkk", label: "GITHUB" },
    { icon: Instagram, href: "https://www.instagram.com/_yu_96/", label: "INSTAGRAM" },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative px-8 py-32 snap-start">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl lg:text-8xl font-nirvana mb-8 tracking-tight">
            LET'S <span className="text-blue-400">CONNECT</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16" />
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-marigold">
            Always Ready and Enthusiastic for work , contact me and let's create something extraordinary together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          {/* Contact Form & Personal Letter */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-8 flex flex-col justify-between h-full"
>
  {/* Heartfelt Letter */}
  <Card className="bg-gray-900/50 border-gray-700 apple-blur w-full">
    <CardContent className="p-10">
      <h3 className="text-3xl font-futura font-bold mb-6 text-white tracking-wider">Thank you !</h3>
      <p className="text-gray-400 font-marigold text-lg leading-relaxed">
        Hello There 🦋<br /><br />
        I’m Yugank , a passionate learner, creator, and engineer at heart. My journey so far has been filled with curiosity, collaboration, and the constant desire to push creative and technical boundaries.
        <br /><br />
        Whether it’s creating a cinematic video, solving engineering problems, or building something impactful, I bring my full heart into it. I believe the best work comes when you don't force it but let your heart decide, and I’m always looking for opportunities where I can grow and contribute meaningfully.
        <br /><br />
        If you’ve come this far on my portfolio, thank you it really means a lot. I hope we can connect, create, and build something great together.
        <br /><br />
        With Love and Ambition,<br />
        <span className="text-blue-400 font-futura font-bold text-xl">Yugank Manesh Mahale</span>
      </p>
    </CardContent>
  </Card>

  {/* DROP ME A TEXT */}
  <Card className="bg-gray-900/50 border-gray-700 apple-blur w-full">
    <CardContent className="p-10">
      <div className="mb-10">
        <h3 className="text-3xl font-futura font-bold mb-6 text-white tracking-wider">DROP ME A TEXT</h3>
        <p className="text-gray-400 font-marigold text-lg leading-relaxed">
          Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can
          work together !!
        </p>
      </div>
    </CardContent>
  </Card>
</motion.div>


          {/* Contact Info & Interactive Elements */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <Card className="bg-gray-900/50 border-gray-700 apple-blur">
              <CardContent className="p-10">
                <h3 className="text-3xl font-futura font-bold mb-8 text-white tracking-wider">GET IN TOUCH</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-6 p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200 group border border-gray-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-14 h-14 bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-futura font-bold tracking-wider">{info.label}</p>
                        <p className="text-white font-marigold text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900/50 border-gray-700 apple-blur">
              <CardContent className="p-10">
                <h3 className="text-3xl font-futura font-bold mb-8 text-white tracking-wider">FOLLOW ME</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square bg-gray-800 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200 border border-gray-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-8 h-8 mb-2" />
                      <span className="text-xs font-futura font-bold tracking-wider">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-green-900/20 border-green-600/30 apple-blur">
              <CardContent className="p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-4 h-4 bg-green-400 animate-pulse" />
                  <h3 className="text-2xl font-futura font-bold text-white tracking-wider">AVAILABLE FOR PROJECTS</h3>
                </div>
                <p className="text-gray-300 mb-6 font-marigold text-lg leading-relaxed">
                  I'm currently available for freelance projects and collaborations. Let's create something
                  extraordinary together! - yugank
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-600/20 text-green-400 text-sm font-futura font-bold tracking-wider border border-green-600/30">
                    ENGINEERING PROJECTS
                  </span>
                  <span className="px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-futura font-bold tracking-wider border border-blue-600/30">
                    VIDEO PRODUCTION
                  </span>
                  <span className="px-4 py-2 bg-gray-600/20 text-gray-400 text-sm font-futura font-bold tracking-wider border border-gray-600/30">
                    VIDEO EDITING
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Response Time */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/30 border-gray-700 apple-blur max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-futura font-bold text-white tracking-wider">Made by YUGANK MAHALE </h3>
              </div>
              <p className="text-gray-400 font-marigold">
                I typically respond to messages within 24 hours. For urgent projects, feel free to call directly.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
