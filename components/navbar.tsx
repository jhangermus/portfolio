"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          JMU
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-8 transition-all"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full py-4 flex flex-col items-center space-y-4">
          {["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="text-gray-300 hover:text-white py-2">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
