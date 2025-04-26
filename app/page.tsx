"use client"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Education from "../components/education"
import Contact from "../components/contact"
import Footer from "../components/footer"
import ParticleBackground from "../components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
