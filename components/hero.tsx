"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("sobre-mi")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 z-0"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block">Jhanger Manuel</span>
            <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Urdaneta
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Ingeniero en Computación / Emprendedor / Creador de contenido
          </h2>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={scrollToAbout}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Conóceme
            </button>

            <button
              onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-transparent border border-purple-500 rounded-full hover:bg-purple-500/10 transition-all"
            >
              Ver Proyectos
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
              <Image
                src="/profile-image.png"
                alt="Jhanger Manuel Urdaneta"
                width={400}
                height={400}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/70 hover:text-white">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}

export default Hero
